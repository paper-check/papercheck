// Grants access-key hashes: verified USDT payments, owner-approved trials, manual dispatch.
import { readFileSync, writeFileSync, appendFileSync } from 'node:fs';
const { GH_TOKEN, REPO, DISPATCH_HASH = '', DISPATCH_DAYS = '30', TRON_KEY = '' } = process.env;
const C = JSON.parse(readFileSync('config.json', 'utf8'));
const USDT = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
const db = JSON.parse(readFileSync('access.json', 'utf8'));
let changed = false;

const gh = async (p, o = {}) => {
  const r = await fetch(`https://api.github.com/repos/${REPO}${p}`, { ...o, headers: {
    Authorization: `Bearer ${GH_TOKEN}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' } });
  return r.status === 204 ? {} : r.json();
};
const reply = (n, body, close) => Promise.all([
  gh(`/issues/${n}/comments`, { method: 'POST', body: JSON.stringify({ body }) }),
  close ? gh(`/issues/${n}`, { method: 'PATCH', body: JSON.stringify({ state: 'closed' }) }) : null]);
const today = () => new Date().toISOString().slice(0, 10);
const grant = (h, days, plan, tx) => {
  const e = db.keys.find(k => k.h === h);
  if (e) {
    if (plan === 'trial') return false;
    e.exp = new Date(Math.max(Date.now(), Date.parse(e.exp)) + days * 864e5).toISOString().slice(0, 10);
    e.plan = plan; if (tx) (e.txs ||= []).push(tx);
  } else db.keys.push({ h, plan, exp: new Date(Date.now() + days * 864e5).toISOString().slice(0, 10), ...(tx && { txs: [tx] }) });
  return changed = true;
};
const field = (body, name) => (body.match(new RegExp(`^\\s*${name}\\s*:\\s*([0-9a-f]{64})\\s*$`, 'im')) || [])[1]?.toLowerCase();

if (/^[0-9a-f]{64}$/i.test(DISPATCH_HASH)) grant(DISPATCH_HASH.toLowerCase(), Number(DISPATCH_DAYS) || 30, 'manual');

const rv = (process.env.DISPATCH_REVOKE || '').toLowerCase();
if (/^[0-9a-f]{64}$/.test(rv)) { const n = db.keys.length; db.keys = db.keys.filter(k => k.h !== rv); if (db.keys.length !== n) changed = true; }

const issues = (await gh('/issues?state=open&per_page=100')).filter(i => !i.pull_request);
for (const i of issues) {
  const body = i.body || '', h = field(body, 'key');
  if (!h) continue;
  if (i.title.startsWith('[TRIAL]') && i.labels.some(l => l.name === 'approve')) {
    const ok = grant(h, C.trialDays, 'trial');
    await reply(i.number, ok ? `Approved: ${C.trialDays} days of access.` : 'This key already has access.', true);
  } else if (i.title.startsWith('[PAY]')) {
    const tx = field(body, 'tx');
    if (!tx) { await reply(i.number, 'Add a line `tx: <64-character transaction id>` to this issue.', false); continue; }
    if (db.keys.some(k => k.txs?.includes(tx))) { await reply(i.number, 'This transaction was already used.', true); continue; }
    const res = await fetch(`https://api.trongrid.io/v1/accounts/${C.wallet}/transactions/trc20?only_to=true&limit=200&contract_address=${USDT}`,
      { headers: TRON_KEY ? { 'TRON-PRO-API-KEY': TRON_KEY } : {} }).then(r => r.json()).catch(() => null);
    const t = res?.data?.find(x => x.transaction_id === tx);
    if (!t) continue; // not visible yet; the scheduled run retries
    const okTx = t.to === C.wallet && t.token_info?.address === USDT && Number(t.value) / 1e6 >= C.price
      && Date.now() - t.block_timestamp < 30 * 864e5;
    if (!okTx) { await reply(i.number, `Payment not accepted: it must be at least ${C.price} USDT (TRC-20) to the listed address within the last 30 days. Email ${C.email} for help.`, true); continue; }
    grant(h, C.days, 'pro', tx);
    await reply(i.number, `Payment confirmed. Your key now has Pro access for ${C.days} days. Reload the site and enter your key.`, true);
  }
}
if (changed) writeFileSync('access.json', JSON.stringify(db, null, 2) + '\n');
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\n`);
