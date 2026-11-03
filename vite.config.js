import { fileURLToPath } from 'node:url';
const p = f => fileURLToPath(new URL(f, import.meta.url));
export default { base: './', build: { rollupOptions: { input: { main: p('./index.html'), admin: p('./admin.html') } } } };
