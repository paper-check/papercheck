import '@fontsource-variable/vazirmatn';
import './style.css';

const $=s=>document.querySelector(s), enc=encodeURIComponent;
const D={
fa:{plansH:"قیمت‌ها",fHead:"رایگان",fPrice:"رایگان",fl1:"تا ۵ منبع در هر بررسی",fl2:"بررسی ارجاع‌های داخل متن",fl3:"مقایسهٔ چکیدهٔ فارسی و انگلیسی",pl1:"منابع نامحدود",pl2:"خروجی گزارش",pl3:"همهٔ امکانات رایگان",freeCta:"شروع رایگان",proCta:"دریافت دسترسی",priceUnit:"برای {0} روز",adv:"پیشرفته: بررسی ارجاع‌های داخل متن",dlgH:"دسترسی حرفه‌ای",pHead:"حرفه‌ای",howH:"چطور کار می‌کند",hw1:"بچسبان",hw1p:"فهرست منابع یا چکیده‌ات را در کادر بگذار.",hw2:"بررسی کن",hw2p:"ایرادهای قالب و ناهماهنگی‌ها در چند ثانیه نشان داده می‌شوند.",hw3:"اصلاح کن",hw3p:"ایرادها را در ویرایشگر خودت درست کن و دوباره بسنج.",faqH:"سؤال‌های متداول",q1:"متن مقاله‌ام جایی ارسال می‌شود؟",a1:"نه. بررسی‌ها کاملاً در مرورگر شما اجرا می‌شود. فقط هشِ کلید دسترسی برای فعال‌سازی ارسال می‌شود.",q2:"این ابزار جای راهنمای نویسندگان نشریه را می‌گیرد؟",a2:"نه. الگوهای رایج IEEE را بررسی می‌کند، ولی قالب نهایی را همیشه با راهنمای نشریه یا کنفرانس خودت تطبیق بده.",q3:"کلید را گم کنم چه می‌شود؟",a3:"کلید فقط در مرورگر خودت است و ما نمی‌توانیم آن را بازیابی کنیم. آن را جای امن نگه دار. در صورت گم شدن، با ایمیل و رسید پرداخت برایت کلید جدید فعال می‌کنیم.",q4:"تأیید پرداخت چقدر طول می‌کشد؟",a4:"بعد از ارسال شناسهٔ تراکنش، بررسی خودکار حدود هر نیم ساعت انجام می‌شود؛ گاهی کمی بیشتر.",copied:"کپی شد",export:"خروجی گزارش (متن)",cta:"بررسی رایگان",sample:"نمونه را امتحان کن",n1:"قالب درست است.",n2:"نام نویسنده باید «T. Chen» باشد و نام کامل کنفرانس و صفحات بیاید.",n3:"نام نشریه یا کنفرانس نیست.",score:"امتیاز آمادگی",f1:"اجرا در مرورگر",f2:"بدون حساب و رمز",f3:"رایگان تا ۵ منبع",h1:"پیش از داوران، مقاله‌ات را بررسی کن.",lead:"فهرست منابع و چکیده‌هایت را بچسبان تا ایرادهای قالب IEEE و ناهماهنگی چکیدهٔ فارسی و انگلیسی را ببینی. همه‌چیز در مرورگر خودت انجام می‌شود و متن‌هایت جایی ارسال نمی‌شود.",
tabRefs:"منابع",tabAbs:"چکیدهٔ دوزبانه",refsLbl:"فهرست منابع (هر منبع در یک خط یا با شمارهٔ [n])",manLbl:"متن مقاله (اختیاری، برای بررسی ارجاع‌های داخل متن)",faLbl:"چکیدهٔ فارسی",enLbl:"چکیدهٔ انگلیسی",check:"بررسی کن",
accH:"دسترسی",accP:"نسخهٔ رایگان تا ۵ منبع را بررسی می‌کند. با کلید دسترسی، تعداد منابع نامحدود می‌شود. حساب و رمز عبور لازم نیست؛ فقط یک کلید. خروجی گرفتن از گزارش هم با کلید ممکن است.",
s1:"۱. کلید دسترسی",s1p:"کلید در مرورگر خودت ساخته می‌شود. آن را جایی امن ذخیره کن؛ ما فقط یک نشانهٔ رمزنگاری‌شده از آن را می‌بینیم.",mk:"ساخت کلید من",copy:"کپی",enter:"کلیدت را وارد کن",unlock:"فعال‌سازی",
s2:"۲. آزمایش رایگان",s2p:"درخواست بده تا پس از بررسی، دسترسی آزمایشی بگیری.",trialGh:"درخواست در GitHub",trialMail:"درخواست با ایمیل",trialNote:"ابتدا کلید را بساز.",
s3:"۳. دسترسی کامل",payP:"{0} تتر (USDT) روی شبکهٔ TRON (TRC-20) برای {1} روز.",payList:"<li>مبلغ را به آدرس بالا بفرست.</li><li>شناسهٔ تراکنش را کپی کن.</li><li>با دکمهٔ زیر ارسال کن؛ پس از تأیید خودکار، کلیدت فعال می‌شود.</li>",payGh:"ارسال رسید در GitHub",payMail:"ارسال رسید با ایمیل",
contact:"ارتباط:",priv:"بررسی‌ها در مرورگر شما انجام می‌شود. فقط شناسهٔ رمزنگاری‌شدهٔ کلید برای فعال‌سازی ارسال می‌شود.",
free:"نسخهٔ رایگان: حداکثر ۵ منبع.",pro:"دسترسی کامل فعال است تا {0}.",lim:"فقط ۵ منبع اول بررسی شد. برای بقیه کلید دسترسی بگیر.",
mkFirst:"ابتدا کلید را بساز یا وارد کن.",badKey:"کلید معتبر نیست یا منقضی شده است.",okKey:"فعال شد تا {0}.",saved:"کلید ساخته شد. آن را ذخیره کن.",
none:"چیزی برای بررسی وارد نشده است.",allOk:"همه‌چیز درست است.",sum:"{0} منبع بررسی شد، {1} مورد نیاز به اصلاح.",
i_num:"شماره‌گذاری به شکل [1] لازم است.",i_auth:"نام نویسنده باید به شکل «A. Surname» باشد.",i_title:"عنوان مقاله باید داخل گیومه بیاید.",i_venue:"نام نشریه یا کنفرانس بعد از عنوان نیامده است.",i_year:"سال انتشار نیست.",i_no:"شمارهٔ شماره (no.) نیست.",i_pp:"صفحات (pp.) نیست.",i_dup:"این منبع تکراری است.",
c_miss:"در متن ارجاع داده شده ولی در فهرست نیست: {0}",c_unused:"در فهرست هست ولی در متن ارجاع نشده: {0}",
a_len:"چکیدهٔ انگلیسی {0} کلمه دارد؛ معمولاً بین ۱۰۰ تا ۳۰۰ کلمه است.",a_ratio:"طول دو چکیده خیلی متفاوت است (فارسی {0}، انگلیسی {1} کلمه).",a_num:"عددهایی که فقط در یکی از دو چکیده هستند: {0}",a_kw:"کلیدواژه‌ها در چکیدهٔ {0} پیدا نشد.",a_cite:"چکیدهٔ انگلیسی ارجاع [n] دارد؛ معمولاً نباید داشته باشد.",
fa:"فارسی",en:"انگلیسی",t_sub:"درخواست آزمایشی",t_body:"سلام، درخواست دسترسی آزمایشی دارم.",p_sub:"رسید پرداخت"},
en:{plansH:"Pricing",fHead:"Free",fPrice:"Free",fl1:"Up to 5 references per check",fl2:"In-text citation check",fl3:"Persian–English abstract comparison",pl1:"Unlimited references",pl2:"Report export",pl3:"Everything in Free",freeCta:"Start free",proCta:"Get access",priceUnit:"for {0} days",adv:"Advanced: check in-text citations",dlgH:"Pro access",pHead:"Pro",howH:"How it works",hw1:"Paste",hw1p:"Drop your reference list or abstracts into the box.",hw2:"Check",hw2p:"Format problems and mismatches show up in seconds.",hw3:"Fix",hw3p:"Correct the issues in your own editor and check again.",faqH:"FAQ",q1:"Is my manuscript sent anywhere?",a1:"No. All checks run in your browser. Only a one-way hash of your access key is sent to activate access.",q2:"Does this replace the journal’s author guide?",a2:"No. It checks common IEEE patterns, but always confirm the final format against your journal or conference guidelines.",q3:"What if I lose my key?",a3:"The key lives only in your browser and we cannot recover it. Keep it safe. If it is lost, email us with your payment receipt and we will activate a new one.",q4:"How long does payment verification take?",a4:"After you submit the transaction ID, an automatic check runs about every half hour, sometimes a little later.",copied:"Copied",export:"Export report (text)",cta:"Check for free",sample:"Try an example",n1:"Format looks correct.",n2:"Write authors as “T. Chen” and give the full conference name and pages.",n3:"The venue is missing.",score:"Readiness score",f1:"Runs in your browser",f2:"No account or password",f3:"Free up to 5 references",h1:"Check your paper before the reviewers do.",lead:"Paste your references and abstracts to see IEEE format problems and mismatches between your Persian and English abstracts. Everything runs in your browser; your text is never sent anywhere.",
tabRefs:"References",tabAbs:"Bilingual abstract",refsLbl:"Reference list (one per line, or numbered [n])",manLbl:"Manuscript text (optional, to check in-text citations)",faLbl:"Persian abstract",enLbl:"English abstract",check:"Check",
accH:"Access",accP:"The free version checks up to 5 references. An access key removes the limit. There is no account or password, only a key. Exporting the report also needs a key.",
s1:"1. Access key",s1p:"The key is created in your browser. Store it safely; we only ever see a one-way hash of it.",mk:"Create my key",copy:"Copy",enter:"Enter your key",unlock:"Activate",
s2:"2. Free trial",s2p:"Send a request and get trial access once it is approved.",trialGh:"Request on GitHub",trialMail:"Request by email",trialNote:"Create your key first.",
s3:"3. Full access",payP:"{0} USDT on the TRON network (TRC-20) for {1} days.",payList:"<li>Send the amount to the address above.</li><li>Copy the transaction ID.</li><li>Submit it with a button below. Your key activates automatically after verification.</li>",payGh:"Send proof on GitHub",payMail:"Send proof by email",
contact:"Contact:",priv:"Checks run in your browser. Only a one-way hash of your key is sent to activate access.",
free:"Free version: up to 5 references.",pro:"Full access is active until {0}.",lim:"Only the first 5 references were checked. Get an access key for the rest.",
mkFirst:"Create or enter a key first.",badKey:"This key is invalid or has expired.",okKey:"Activated until {0}.",saved:"Key created. Save it now.",
none:"Nothing to check yet.",allOk:"Everything looks correct.",sum:"{0} references checked, {1} need fixes.",
i_num:"Number the entry as [1].",i_auth:"Write authors as “A. Surname”.",i_title:"Put the article title in quotes.",i_venue:"The journal or conference name is missing after the title.",i_year:"The year is missing.",i_no:"The issue number (no.) is missing.",i_pp:"The pages (pp.) are missing.",i_dup:"This reference is a duplicate.",
c_miss:"Cited in the text but not in the list: {0}",c_unused:"In the list but never cited: {0}",
a_len:"The English abstract has {0} words; 100–300 is typical.",a_ratio:"The two abstracts differ a lot in length (Persian {0}, English {1} words).",a_num:"Numbers found in only one abstract: {0}",a_kw:"No keywords found in the {0} abstract.",a_cite:"The English abstract contains [n] citations; abstracts usually avoid them.",
fa:"Persian",en:"English",t_sub:"Trial request",t_body:"Hello, I would like trial access.",p_sub:"Payment proof"}};
let C={},L='fa',pro=null;
const S={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const t=(k,...a)=>(D[L][k]||k).replace(/\{(\d)\}/g,(m,i)=>a[i]);
function pick(){const s=S.get('pc_lang');if(s)return s;
 try{if((navigator.languages||[navigator.language]).some(x=>/^fa/i.test(x))||Intl.DateTimeFormat().resolvedOptions().timeZone==='Asia/Tehran')return'fa'}catch(e){}return'en'}
async function sha(s){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
function render(){
 document.documentElement.lang=L;document.documentElement.dir=L==='fa'?'rtl':'ltr';
 document.querySelectorAll('[data-i]').forEach(e=>{const v=t(e.dataset.i);e.dataset.i==='payList'?e.innerHTML=v:e.textContent=v});
 document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===L));
 if(C.price){$('#payP').textContent=t('payP',C.price,C.days);$('#pn').textContent=C.price+' USDT';$('#pu').textContent=t('priceUnit',C.days);$('#wallet').textContent=C.wallet;$('#mail').textContent=C.email;$('#mail').href='mailto:'+C.email;links()}
 $('#plan').textContent=pro?t('pro',pro):t('free');
 document.title='PaperCheck | '+(L==='fa'?'بررسی مقاله':'Paper checker');
}
async function links(){
 const k=S.get('pc_key');const h=k?await sha(k):'<key>';
 const gh=(ti,sub,b)=>`https://github.com/${C.repo}/issues/new?title=${enc(ti)}&body=${enc(b)}`;
 const tb=`${t('t_body')}\nkey: ${h}`,pb=`tx: \nkey: ${h}`;
 $('#trialGh').href=gh('[TRIAL] '+t('t_sub'),0,tb);$('#payGh').href=gh('[PAY] '+t('p_sub'),0,pb);
 $('#trialMail').href=`mailto:${C.email}?subject=${enc('[TRIAL] '+t('t_sub'))}&body=${enc(tb)}`;
 $('#payMail').href=`mailto:${C.email}?subject=${enc('[PAY] '+t('p_sub'))}&body=${enc(pb)}`;
}
async function verify(k){
 try{const j=await (await fetch('access.json?'+Date.now())).json(),h=await sha(k),e=j.keys.find(x=>x.h===h);
  if(e&&e.exp>=new Date().toISOString().slice(0,10)){pro=e.exp;return true}}catch(e){}
 pro=null;return false}
function ring(p){const w=document.createElement('div');w.className='score';
 w.innerHTML=`<svg width="84" height="84" viewBox="0 0 84 84" role="img" aria-label="${p}%"><circle class="trk" cx="42" cy="42" r="34" fill="none" stroke-width="8"/><circle class="arc ${p>=80?'g':p>=50?'w':'b'}" cx="42" cy="42" r="34" fill="none" stroke-width="8" stroke-linecap="round" stroke-dasharray="213.6" stroke-dashoffset="213.6" transform="rotate(-90 42 42)"/><text x="42" y="48" text-anchor="middle" font-size="20" font-weight="700" fill="currentColor">${p}</text></svg><span>${t('score')}</span>`;
 requestAnimationFrame(()=>requestAnimationFrame(()=>w.querySelector('.arc').style.strokeDashoffset=213.6*(1-p/100)));return w}
function exportBtn(rows,summary){const b=document.createElement('button');b.className='btn alt';b.textContent=t('export');
 b.onclick=()=>{const txt=[summary||'',...rows.map(([a,m])=>a+'\n  - '+(m.length?m.join('\n  - '):t('allOk')))].join('\n\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([txt],{type:'text/plain;charset=utf-8'}));a.download='papercheck-report.txt';a.click();URL.revokeObjectURL(a.href)};return b}
function out(rows,summary,score){const r=$('#res');r.textContent='';if(score!=null)r.append(ring(score));if(pro&&rows.length)r.append(exportBtn(rows,summary));
 if(summary){const s=document.createElement('div');s.className='sum';s.textContent=summary;r.append(s)}
 rows.forEach(([a,msgs],ix)=>{const d=document.createElement('div');d.className='row';d.style.animationDelay=ix*70+'ms';
  const l=document.createElement('div');l.textContent=a;const m=document.createElement('div');
  (msgs.length?msgs:[t('allOk')]).forEach(x=>{const p=document.createElement('div');p.className=msgs.length?'bad':'good';p.textContent=x;m.append(p)});
  d.append(l,m);r.append(d)})}
function expand(s){const o=new Set;s.split(/,/).forEach(p=>{const m=p.match(/(\d+)\s*[–-]\s*(\d+)/);
 if(m){for(let i=+m[1];i<=Math.min(+m[2],+m[1]+200);i++)o.add(i)}else if(/\d+/.test(p))o.add(+p.match(/\d+/)[0])});return o}
function checkRefs(){
 const lines=$('#refs').value.split(/\n+/).map(s=>s.trim()).filter(Boolean);
 if(!lines.length){out([],t('none'));return}
 const numbered=lines.some(l=>/^\[\d+\]/.test(l));let items=[];
 if(numbered)lines.forEach(l=>{/^\[\d+\]/.test(l)||!items.length?items.push(l):items[items.length-1]+=' '+l});else items=lines;
 const cut=!pro&&items.length>5;if(cut)items=items.slice(0,5);
 const seen=new Set;let bad=0;
 const rows=items.map(r=>{const m=[],body=r.replace(/^\[\d+\]\s*/,'');
  if(!/^\[\d+\]/.test(r))m.push(t('i_num'));
  if(/^[A-Z][A-Za-z'’-]+,\s*[A-Z]\./.test(body))m.push(t('i_auth'));
  const q=body.match(/[“"]([^”"]+)[”"]/);
  if(!q)m.push(t('i_title'));else if(body.slice(body.indexOf(q[0])+q[0].length).replace(/^[,.\s]+/,'').length<6)m.push(t('i_venue'));
  if(!/\b(19|20)\d{2}\b/.test(body))m.push(t('i_year'));
  if(/vol\./i.test(body)){if(!/no\./i.test(body))m.push(t('i_no'));if(!/pp\.|art\./i.test(body))m.push(t('i_pp'))}
  const key=body.toLowerCase().replace(/\W+/g,'');if(seen.has(key))m.push(t('i_dup'));seen.add(key);
  if(m.length)bad++;return[r.length>110?r.slice(0,110)+'…':r,m]});
 const man=$('#man').value;
 if(man.trim()&&numbered){const cited=new Set;(man.match(/\[[\d,\s–-]+\]/g)||[]).forEach(c=>expand(c.slice(1,-1)).forEach(n=>cited.add(n)));
  const listed=new Set(lines.map(l=>(l.match(/^\[(\d+)\]/)||[])[1]).filter(Boolean).map(Number));
  const miss=[...cited].filter(n=>!listed.has(n)),un=[...listed].filter(n=>!cited.has(n));
  if(miss.length){rows.push(['[ ]',[t('c_miss',miss.join(', '))]]);bad++}
  if(un.length){rows.push(['[ ]',[t('c_unused',un.join(', '))]]);bad++}}
 out(rows,t('sum',items.length,bad)+(cut?' '+t('lim'):''),Math.max(0,Math.round(100*(items.length-bad)/items.length)))}
const dig=s=>s.replace(/٫/g,'.').replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d));
const nums=s=>new Set((dig(s).match(/\d+(?:[.,]\d+)?/g)||[]).map(x=>x.replace(',','.')));
const words=s=>s.trim()?s.trim().split(/\s+/).length:0;
function checkAbs(){
 const f=$('#fa').value,e=$('#en').value;if(!f.trim()&&!e.trim()){out([],t('none'));return}
 const m=[],fw=words(f),ew=words(e);
 if(e.trim()&&(ew<100||ew>300))m.push(t('a_len',ew));
 if(fw&&ew&&(fw/ew<.7||fw/ew>1.3))m.push(t('a_ratio',fw,ew));
 const nf=nums(f),ne=nums(e),diff=[...nf].filter(x=>!ne.has(x)).concat([...ne].filter(x=>!nf.has(x)));
 if(f.trim()&&e.trim()&&diff.length)m.push(t('a_num',diff.slice(0,8).join(', ')));
 if(e.trim()&&!/(keywords?|index terms)\s*[:—-]/i.test(e))m.push(t('a_kw',t('en')));
 if(f.trim()&&!/کلیدواژه|کلمات کلیدی/.test(f))m.push(t('a_kw',t('fa')));
 if(/\[\d+\]/.test(e))m.push(t('a_cite'));
 out([[`FA ${fw} · EN ${ew}`,m]],null,Math.max(0,100-m.length*20))}
document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{L=b.dataset.l;S.set('pc_lang',L);render()});
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{
 document.querySelectorAll('.tabs button').forEach(x=>x.setAttribute('aria-selected',x===b));
 $('#p-refs').hidden=b.dataset.t!=='refs';$('#p-abs').hidden=b.dataset.t!=='abs';$('#res').textContent=''});
$('#get').onclick=()=>{$('#dlg').showModal();links()};$('#dx').onclick=()=>$('#dlg').close();
$('#dlg').onclick=e=>{if(e.target===$('#dlg'))$('#dlg').close()};
const SAMPLE="[1] A. Rahimi and B. Lee, “Self-supervised features for dermoscopy,” IEEE Trans. Med. Imaging, vol. 41, no. 3, pp. 100–110, 2022.\n[2] Chen T., Kornblith S. 2020. A simple framework for contrastive learning. ICML.\n[3] M. Sadeghi, “Energy forecasting,” 2021.\n[4] L. Zhao, “Vision transformers,” Proc. CVPR, vol. 3, 2023.";
$('#sample').onclick=()=>{document.querySelector('.tabs button').click();$('#refs').value=SAMPLE;checkRefs();
 $('#tool').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})};
$('#goRefs').onclick=checkRefs;$('#goAbs').onclick=checkAbs;
$('#mk').onclick=async()=>{const a=new Uint8Array(16);crypto.getRandomValues(a);
 const k='PC-'+[...a].map(x=>x.toString(16).padStart(2,'0')).join('');S.set('pc_key',k);
 $('#keyOut').textContent=k;$('#keyOut').hidden=false;$('#cp').hidden=false;$('#keyIn').value=k;$('#st').textContent=t('saved');links()};
let tt;function toast(m){const e=$('#toast');e.textContent=m;e.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('on'),1800)}
$('#cp').onclick=()=>{try{navigator.clipboard.writeText($('#keyOut').textContent);toast(t('copied'))}catch(e){}};
$('#unlock').onclick=async()=>{const k=$('#keyIn').value.trim();if(!k){$('#st').textContent=t('mkFirst');return}
 if(await verify(k)){S.set('pc_key',k);$('#st').textContent=t('okKey',pro)}else $('#st').textContent=t('badKey');render()};
document.documentElement.dataset.theme=S.get('pc_theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
$('#theme').onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;S.set('pc_theme',n)};
(async()=>{L=pick();
 document.querySelector('.tabs button').setAttribute('aria-selected',true);
 document.querySelectorAll('.tabs button')[1].setAttribute('aria-selected',false);
 try{C=await (await fetch('config.json')).json()}catch(e){}
 if(C.cfToken){const s=document.createElement('script');s.defer=true;s.src='https://static.cloudflareinsights.com/beacon.min.js';s.dataset.cfBeacon=JSON.stringify({token:C.cfToken});document.head.append(s)}
 if(C.goatcounter){const s=document.createElement('script');s.async=true;s.dataset.goatcounter='https://'+C.goatcounter+'.goatcounter.com/count';s.src='https://gc.zgo.at/count.js';document.head.append(s)}
 if(!C.repo||/^YOUR_/.test(C.repo)){const g=location.hostname.match(/^([^.]+)\.github\.io$/);if(g)C.repo=g[1]+'/'+(location.pathname.split('/')[1]||g[1]+'.github.io')}
 const k=S.get('pc_key');if(k){$('#keyIn').value=k;await verify(k)}
 render()})();
