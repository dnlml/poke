function $(){}const dt=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function U(){return Object.create(null)}function A(t){t.forEach(Z)}function tt(t){return typeof t=="function"}function ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function It(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function mt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(pt(e,n))}function Jt(t,e,n,o){if(t){const r=et(t,e,n,o);return t[0](r)}}function et(t,e,n,o){return t[1]&&o?_t(n.ctx.slice(),t[1](o(e))):n.ctx}function Kt(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],i=Math.max(e.dirty.length,r.length);for(let c=0;c<i;c+=1)u[c]=e.dirty[c]|r[c];return u}return e.dirty|r}return e.dirty}function Qt(t,e,n,o,r,u){if(r){const i=et(e,n,o,u);t.p(i,r)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let o=0;o<n;o++)e[o]=-1;return e}return-1}const nt=typeof window!="undefined";let gt=nt?()=>window.performance.now():()=>Date.now(),K=nt?t=>requestAnimationFrame(t):$;const S=new Set;function it(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&K(it)}function yt(t){let e;return S.size===0&&K(it),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let L=!1;function bt(){L=!0}function xt(){L=!1}function wt(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&s.push(_)}e=s}const n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,_=(r>0&&e[n[r]].claim_order<=l?r+1:wt(1,r,a=>e[n[a]].claim_order,l))-1;o[s]=n[_]+1;const d=_+1;n[d]=s,r=Math.max(d,r)}const u=[],i=[];let c=e.length-1;for(let s=n[r]+1;s!=0;s=o[s-1]){for(u.push(e[s-1]);c>=s;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);u.reverse(),i.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<i.length;s++){for(;l<u.length&&i[s].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(i[s],_)}}function vt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=ot("style");return kt(rt(t),e),e.sheet}function kt(t,e){vt(t.head||t,e)}function St(t,e){if(L){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){L&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function At(t){t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function Ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function Yt(){return Q(" ")}function Zt(){return Q("")}function te(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function ee(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ne(t){return t===""?null:+t}function Nt(t){return Array.from(t.childNodes)}function Mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,o,r=!1){Mt(t);const u=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const c=t[i];if(e(c)){const s=n(c);return s===void 0?t.splice(i,1):t[i]=s,r||(t.claim_info.last_index=i),c}}for(let i=t.claim_info.last_index-1;i>=0;i--){const c=t[i];if(e(c)){const s=n(c);return s===void 0?t.splice(i,1):t[i]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,c}}return o()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ct(t,e,n,o){return st(t,r=>r.nodeName===e,r=>{const u=[];for(let i=0;i<r.attributes.length;i++){const c=r.attributes[i];n[c.name]||u.push(c.name)}u.forEach(i=>r.removeAttribute(i))},()=>o(e))}function ie(t,e,n){return ct(t,e,n,ot)}function re(t,e,n){return ct(t,e,n,Ct)}function jt(t,e){return st(t,n=>n.nodeType===3,n=>{const o=""+e;if(n.data.startsWith(o)){if(n.data.length!==o.length)return n.splitText(o.length)}else n.data=o},()=>Q(e),!0)}function oe(t){return jt(t," ")}function se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e){t.value=e==null?"":e}function le(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function Ft(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}function ae(t,e=document.body){return Array.from(e.querySelectorAll(t))}const z=new Map;let P=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:Et(e),rules:{}};return z.set(t,n),n}function V(t,e,n,o,r,u,i,c=0){const s=16.666/o;let l=`{
`;for(let p=0;p<=1;p+=s){const y=e+(n-e)*u(p);l+=p*100+`%{${i(y,1-y)}}
`}const _=l+`100% {${i(n,1-n)}}
}`,d=`__svelte_${qt(_)}_${c}`,a=rt(t),{stylesheet:f,rules:h}=z.get(a)||Tt(a,t);h[d]||(h[d]=!0,f.insertRule(`@keyframes ${d} ${_}`,f.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${o}ms linear ${r}ms 1 both`,P+=1,d}function Bt(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-o.length;r&&(t.style.animation=o.join(", "),P-=r,P||Ot())}function Ot(){K(()=>{P||(z.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),z.clear())})}let j;function M(t){j=t}function W(){if(!j)throw new Error("Function called outside component initialization");return j}function fe(t){W().$$.on_mount.push(t)}function de(t){W().$$.after_update.push(t)}function _e(t,e){W().$$.context.set(t,e)}function he(t){return W().$$.context.get(t)}const N=[],X=[],O=[],Y=[],lt=Promise.resolve();let J=!1;function ut(){J||(J=!0,lt.then(at))}function me(){return ut(),lt}function D(t){O.push(t)}const I=new Set;let B=0;function at(){const t=j;do{for(;B<N.length;){const e=N[B];B++,M(e),Rt(e.$$)}for(M(null),N.length=0,B=0;X.length;)X.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];I.has(n)||(I.add(n),n())}O.length=0}while(N.length);for(;Y.length;)Y.pop()();J=!1,I.clear(),M(t)}function Rt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let C;function zt(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function G(t,e,n){t.dispatchEvent(Ft(`${e?"intro":"outro"}${n}`))}const R=new Set;let w;function pe(){w={r:0,c:[],p:w}}function ge(){w.r||A(w.c),w=w.p}function ft(t,e){t&&t.i&&(R.delete(t),t.i(e))}function ye(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),w.c.push(()=>{R.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const Pt={duration:0};function be(t,e,n,o){let r=e(t,n),u=o?0:1,i=null,c=null,s=null;function l(){s&&Bt(t,s)}function _(a,f){const h=a.b-u;return f*=Math.abs(h),{a:u,b:a.b,d:h,duration:f,start:a.start,end:a.start+f,group:a.group}}function d(a){const{delay:f=0,duration:h=300,easing:g=dt,tick:p=$,css:y}=r||Pt,v={start:gt()+f,b:a};a||(v.group=w,w.r+=1),i||c?c=v:(y&&(l(),s=V(t,u,a,h,f,g,y)),a&&p(0,1),i=_(v,h),D(()=>G(t,a,"start")),yt(E=>{if(c&&E>c.start&&(i=_(c,h),c=null,G(t,i.b,"start"),y&&(l(),s=V(t,u,i.b,i.duration,0,g,r.css))),i){if(E>=i.end)p(u=i.b,1-u),G(t,i.b,"end"),c||(i.b?l():--i.group.r||A(i.group.c)),i=null;else if(E>=i.start){const F=E-i.start;u=i.a+i.d*g(F/i.duration),p(u,1-u)}}return!!(i||c)}))}return{run(a){tt(r)?zt().then(()=>{r=r(),d(a)}):d(a)},end(){l(),i=c=null}}}function xe(t,e){t.d(1),e.delete(t.key)}function we(t,e,n,o,r,u,i,c,s,l,_,d){let a=t.length,f=u.length,h=a;const g={};for(;h--;)g[t[h].key]=h;const p=[],y=new Map,v=new Map;for(h=f;h--;){const m=d(r,u,h),b=n(m);let x=i.get(b);x?o&&x.p(m,e):(x=l(b,m),x.c()),y.set(b,p[h]=x),b in g&&v.set(b,Math.abs(h-g[b]))}const E=new Set,F=new Set;function H(m){ft(m,1),m.m(c,_),i.set(m.key,m),_=m.first,f--}for(;a&&f;){const m=p[f-1],b=t[a-1],x=m.key,q=b.key;m===b?(_=m.first,a--,f--):y.has(q)?!i.has(x)||E.has(x)?H(m):F.has(q)?a--:v.get(x)>v.get(q)?(F.add(x),H(m)):(E.add(q),a--):(s(b,i),a--)}for(;a--;){const m=t[a];y.has(m.key)||s(m,i)}for(;f;)H(p[f-1]);return p}function $e(t,e){const n={},o={},r={$$scope:1};let u=t.length;for(;u--;){const i=t[u],c=e[u];if(c){for(const s in i)s in c||(o[s]=1);for(const s in c)r[s]||(n[s]=c[s],r[s]=1);t[u]=c}else for(const s in i)r[s]=1}for(const i in o)i in n||(n[i]=void 0);return n}function ve(t){return typeof t=="object"&&t!==null?t:{}}function Ee(t){t&&t.c()}function ke(t,e){t&&t.l(e)}function Dt(t,e,n,o){const{fragment:r,on_mount:u,on_destroy:i,after_update:c}=t.$$;r&&r.m(e,n),o||D(()=>{const s=u.map(Z).filter(tt);i?i.push(...s):A(s),t.$$.on_mount=[]}),c.forEach(D)}function Lt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(N.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Se(t,e,n,o,r,u,i,c=[-1]){const s=j;M(t);const l=t.$$={fragment:null,ctx:null,props:u,update:$,not_equal:r,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:U(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};i&&i(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(d,a,...f)=>{const h=f.length?f[0]:a;return l.ctx&&r(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),_&&Wt(t,d)),a}):[],l.update(),_=!0,A(l.before_update),l.fragment=o?o(l.ctx):!1,e.target){if(e.hydrate){bt();const d=Nt(e.target);l.fragment&&l.fragment.l(d),d.forEach(At)}else l.fragment&&l.fragment.c();e.intro&&ft(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),xt(),at()}M(s)}class Ae{$destroy(){Lt(this,1),this.$destroy=$}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const k=[];function Ce(t,e=$){let n;const o=new Set;function r(c){if(ht(t,c)&&(t=c,n)){const s=!k.length;for(const l of o)l[1](),k.push(l,t);if(s){for(let l=0;l<k.length;l+=2)k[l][0](k[l+1]);k.length=0}}}function u(c){r(c(t))}function i(c,s=$){const l=[c,s];return o.add(l),o.size===1&&(n=e(r)||$),c(t),()=>{o.delete(l),o.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:i}}function Ht(t){const e=t-1;return e*e*e+1}function Ne(t,{delay:e=0,duration:n=400,easing:o=Ht}={}){const r=getComputedStyle(t),u=+r.opacity,i=parseFloat(r.height),c=parseFloat(r.paddingTop),s=parseFloat(r.paddingBottom),l=parseFloat(r.marginTop),_=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),a=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:o,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*u};height: ${f*i}px;padding-top: ${f*c}px;padding-bottom: ${f*s}px;margin-top: ${f*l}px;margin-bottom: ${f*_}px;border-top-width: ${f*d}px;border-bottom-width: ${f*a}px;`}}export{xe as $,ve as A,Lt as B,_t as C,Ce as D,me as E,ue as F,St as G,$ as H,Xt as I,Gt as J,Jt as K,ae as L,Qt as M,Ut as N,Kt as O,he as P,Ct as Q,re as R,Ae as S,ce as T,te as U,ne as V,It as W,D as X,be as Y,Ne as Z,we as _,Nt as a,ee as b,ie as c,At as d,ot as e,le as f,Vt as g,jt as h,Se as i,se as j,Yt as k,Zt as l,oe as m,pe as n,ye as o,ge as p,ft as q,_e as r,ht as s,Q as t,de as u,fe as v,Ee as w,ke as x,Dt as y,$e as z};
