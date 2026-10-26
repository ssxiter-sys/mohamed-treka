const enc=new TextEncoder();
export const grades=['أولى إعدادي','تانية إعدادي','تالتة إعدادي','أولى ثانوي','تانية ثانوي','تالتة ثانوي'];
export function reply(data,status=200,headers={}){return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store',...headers}})}
export async function body(request){try{return await request.json()}catch{return {}}}
export function phoneValue(v){let s=String(v||'').replace(/[\s-]/g,'');if(s.startsWith('+20'))s='0'+s.slice(3);if(s.startsWith('20')&&s.length===12)s='0'+s.slice(2);return /^01[0125]\d{8}$/.test(s)?s:null}
function hex(b){return Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,'0')).join('')}
export function randomHex(n=32){let a=crypto.getRandomValues(new Uint8Array(n));return hex(a)}
export async function hashPassword(p,salt){const key=await crypto.subtle.importKey('raw',enc.encode(p),'PBKDF2',false,['deriveBits']);return hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:enc.encode(salt),iterations:210000,hash:'SHA-256'},key,256))}
export async function hashToken(t){return hex(await crypto.subtle.digest('SHA-256',enc.encode(t)))}
export function cookie(token,request){return `treka_session=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=604800`}
export function clearCookie(){return 'treka_session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0'}
export async function current(request,db){const t=(request.headers.get('cookie')||'').match(/(?:^|; )treka_session=([a-f0-9]{64})/);if(!t)return null;const h=await hashToken(t[1]);return await db.prepare('SELECT users.id,users.name,users.phone,users.grade FROM sessions JOIN users ON users.id=sessions.user_id WHERE sessions.token_hash=? AND sessions.expires_at > ?').bind(h,Date.now()).first()}
export function dbOrError(env){return env.DB||null}
