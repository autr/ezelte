function t(){}function e(t){return t()}function s(){return Object.create(null)}function n(t){t.forEach(e)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t){return 0===Object.keys(t).length}function c(t,e){t.appendChild(e)}function l(t,e,s){t.insertBefore(e,s||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function $(t,e,s,n){return t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)}function p(t,e,s){null==s?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function f(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}function g(t,e,s,n){t.style.setProperty(e,s,n?"important":"")}function b(t,e,s){t.classList[s?"add":"remove"](e)}class y{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,s=null){this.e||(this.e=u(e.nodeName),this.t=e,this.h(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)l(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(a)}}function k(t){const e={};for(const s of t)e[s.name]=s.value;return e}let x;function _(t){x=t}function v(t){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.on_mount.push(t)}const w=[],z=[],E=[],C=[],L=Promise.resolve();let O=!1;function T(t){E.push(t)}let A=!1;const M=new Set;function N(){if(!A){A=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];_(e),j(e.$$)}for(_(null),w.length=0;z.length;)z.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];M.has(e)||(M.add(e),e())}E.length=0}while(w.length);for(;C.length;)C.pop()();O=!1,A=!1,M.clear()}}function j(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const S=new Set;let H;function U(t,e){t&&t.i&&(S.delete(t),t.i(e))}function R(t,e,s,n){if(t&&t.o){if(S.has(t))return;S.add(t),undefined.c.push((()=>{S.delete(t),n&&(s&&t.d(1),n())})),t.o(e)}}function P(t){t&&t.c()}function J(t,s,o,r){const{fragment:c,on_mount:l,on_destroy:a,after_update:u}=t.$$;c&&c.m(s,o),r||T((()=>{const s=l.map(e).filter(i);a?a.push(...s):n(s),t.$$.on_mount=[]})),u.forEach(T)}function D(t,e){const s=t.$$;null!==s.fragment&&(n(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&(w.push(t),O||(O=!0,L.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,i,o,r,c,l,u=[-1]){const d=x;_(e);const h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:i.context||[]),callbacks:s(),dirty:u,skip_bound:!1};let $=!1;if(h.ctx=o?o(e,i.props||{},((t,s,...n)=>{const i=n.length?n[0]:s;return h.ctx&&c(h.ctx[t],h.ctx[t]=i)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](i),$&&I(e,t)),s})):[],h.update(),$=!0,n(h.before_update),h.fragment=!!r&&r(h.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();i.intro&&U(e.$$.fragment),J(e,i.target,i.anchor,i.customElement),N()}_(d)}"function"==typeof HTMLElement&&(H=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(i);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,s){this[t]=s}disconnectedCallback(){n(this.$$.on_disconnect)}$destroy(){D(this,1),this.$destroy=t}$on(t,e){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(t){this.$$set&&!r(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});const B="undefined"!=typeof window&&void 0!==window.document;let F={};["get","post","delete","put"].forEach((t=>{F[t]=async(e,s,n)=>await(async(t,e,s,n)=>{Array.isArray(e)&&(e=e.join("/"));try{let i={};if("delete"==t&&(i={...i,credentials:"include",method:t.toUpperCase()}),"get"==t&&s){const n=Object.keys(s);for(let t=0;t<n.length;t++){const i=n[t];0==t&&(e+="?"),null!=s[i]&&""!=s[i]&&(e+=`${i}=${encodeURIComponent(s[i])}`,t!=n.length-1&&(e+="&"))}i={...i,credentials:"include",method:t.toUpperCase()}}if("put"!=t&&"post"!=t||(i={...i,credentials:"include",method:t.toUpperCase(),body:JSON.stringify(s||{}),headers:{"Content-Type":"application/json"}}),n||console.log(`[fetcher] 🌟  ${e}`,i),!B)return{ok:!1,error:!0,message:"server side"};const o=await fetch(e,i);let r=await o.text();try{r=JSON.parse(r)}catch(t){}return o.ok&&!r?.error||console.log(`[fetcher] ❌  ${e}`,r.message,r.status,r.code),!o.ok||r?.error?r:(n||console.log(`[fetcher] ✅  ${e}`),(t=>({code:200,status:200,error:!1,ok:!0,data:t}))(r))}catch(t){return n||console.log(`[fetcher] ❌  ${e}`,t.message,t.status,t.code),{code:i=500,status:i,error:!0,ok:!1,message:t.message}}var i})(t,e,s,n)}));const G=(t,e,s)=>`${t}/api/${e}/${s}`;function K(t,e,s){const n=t.slice();return n[29]=e[s],n[30]=e,n[31]=s,n}function Q(t){let e,s,i,o,r,k,x,_,v,w,z,E,C,L,O,T,A,M,N,j,S=t[4]?"update":"subscribe",H=(t[6]||"")+"",U=(t[8]||"")+"",R=t[12],P=[];for(let e=0;e<R.length;e+=1)P[e]=W(K(t,R,e));let J=t[4]&&X(t);return{c(){e=u("form"),i=h(),o=u("input"),r=h(),k=u("input"),_=h();for(let t=0;t<P.length;t+=1)P[t].c();v=h(),w=u("button"),z=d(S),E=h(),J&&J.c(),C=h(),L=u("div"),O=d(H),T=h(),s=new y(i),o.disabled=t[7],p(o,"id","name"),p(o,"placeholder","name"),p(o,"name","name"),p(o,"type","text"),p(o,"class","ezipe-field-name"),b(o,"none",t[8]||t[4]),k.disabled=x=t[7]||t[4],p(k,"id","address"),p(k,"placeholder","email"),p(k,"name","address"),p(k,"type","text"),p(k,"class","ezipe-field-address"),b(k,"none",t[8]),p(w,"class","ezipe-button ezipe-button-submit filled"),w.disabled=t[7],b(w,"none",t[8]),g(L,"margin-bottom","0",1),p(L,"class","ezipe-error error"),b(L,"hidden",!t[6]),b(L,"none",t[8]),A=new y(null),p(e,"action",t[10]),p(e,"class",M="ezipe-mailing-list "+t[2]),p(e,"style",t[3])},m(n,a){l(n,e,a),s.m(t[11],e),c(e,i),c(e,o),m(o,t[0]),c(e,r),c(e,k),m(k,t[1]),c(e,_);for(let t=0;t<P.length;t+=1)P[t].m(e,null);c(e,v),c(e,w),c(w,z),c(e,E),J&&J.m(e,null),c(e,C),c(e,L),c(L,O),c(e,T),A.m(U,e),N||(j=[$(o,"input",t[23]),$(k,"input",t[24]),$(e,"submit",t[13])],N=!0)},p(t,n){if(2048&n[0]&&s.p(t[11]),128&n[0]&&(o.disabled=t[7]),1&n[0]&&o.value!==t[0]&&m(o,t[0]),272&n[0]&&b(o,"none",t[8]||t[4]),144&n[0]&&x!==(x=t[7]||t[4])&&(k.disabled=x),2&n[0]&&k.value!==t[1]&&m(k,t[1]),256&n[0]&&b(k,"none",t[8]),4512&n[0]){let s;for(R=t[12],s=0;s<R.length;s+=1){const i=K(t,R,s);P[s]?P[s].p(i,n):(P[s]=W(i),P[s].c(),P[s].m(e,v))}for(;s<P.length;s+=1)P[s].d(1);P.length=R.length}16&n[0]&&S!==(S=t[4]?"update":"subscribe")&&f(z,S),128&n[0]&&(w.disabled=t[7]),256&n[0]&&b(w,"none",t[8]),t[4]?J?J.p(t,n):(J=X(t),J.c(),J.m(e,C)):J&&(J.d(1),J=null),64&n[0]&&H!==(H=(t[6]||"")+"")&&f(O,H),64&n[0]&&b(L,"hidden",!t[6]),256&n[0]&&b(L,"none",t[8]),256&n[0]&&U!==(U=(t[8]||"")+"")&&A.p(U),1024&n[0]&&p(e,"action",t[10]),4&n[0]&&M!==(M="ezipe-mailing-list "+t[2])&&p(e,"class",M),8&n[0]&&p(e,"style",t[3])},d(t){t&&a(e),function(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}(P,t),J&&J.d(),N=!1,n(j)}}}function V(t){let e;return{c(){e=u("div"),p(e,"class","ezipe-error ezipe-invalid")},m(s,n){l(s,e,n),e.innerHTML=t[9]},p(t,s){512&s[0]&&(e.innerHTML=t[9])},d(t){t&&a(e)}}}function W(t){let e,s,n,i,o,r,d,f,m,k,x,_=t[29].key+"",v=t[29].text+"";function w(){t[25].call(s,t[29])}return{c(){e=u("label"),s=u("input"),n=h(),i=u("span"),o=h(),d=h(),f=u("em"),s.disabled=t[7],p(s,"type","checkbox"),r=new y(d),p(f,"class","fade ml0-6"),g(e,"user-select","none"),p(e,"class",m="ezipe-field-label ezipe-field-"+t[29].key+" checkbox pointer user-select-none"),b(e,"none",t[8]),b(e,"disabled",t[7])},m(a,u){l(a,e,u),c(e,s),s.checked=t[5][t[29].key],c(e,n),c(e,i),c(e,o),r.m(_,e),c(e,d),c(e,f),f.innerHTML=v,k||(x=$(s,"change",w),k=!0)},p(n,i){t=n,128&i[0]&&(s.disabled=t[7]),4128&i[0]&&(s.checked=t[5][t[29].key]),4096&i[0]&&_!==(_=t[29].key+"")&&r.p(_),4096&i[0]&&v!==(v=t[29].text+"")&&(f.innerHTML=v),4096&i[0]&&m!==(m="ezipe-field-label ezipe-field-"+t[29].key+" checkbox pointer user-select-none")&&p(e,"class",m),4352&i[0]&&b(e,"none",t[8]),4224&i[0]&&b(e,"disabled",t[7])},d(t){t&&a(e),k=!1,x()}}}function X(e){let s,n,i;return{c(){s=u("button"),s.textContent="unsubscribe",p(s,"class","ezipe-button ezipe-button-unsubscribe")},m(t,o){l(t,s,o),n||(i=$(s,"click",e[14]),n=!0)},p:t,d(t){t&&a(s),n=!1,i()}}}function Y(e){let s;function n(t,e){return t[9]?V:Q}let i=n(e),o=i(e);return{c(){o.c(),s=d("")},m(t,e){o.m(t,e),l(t,s,e)},p(t,e){i===(i=n(t))&&o?o.p(t,e):(o.d(1),o=i(t),o&&(o.c(),o.m(s.parentNode,s)))},i:t,o:t,d(t){o.d(t),t&&a(s)}}}function Z(t){return t.slice(t.indexOf("?")+1).split("&").reduce(((t,e)=>{let[s,n]=e.split("="),i=!!n&&decodeURIComponent(n);return Object.assign(t,{[s]:i})}),{})}function tt(t){return"string"!=typeof t?t:t.split(",").filter((t=>""!=t)).map((t=>({key:t.split(":")[0],text:t.split(":")[1]})))}function et(t,e,s){let n,i,o,r;const c="undefined"!=typeof window&&void 0!==window.document;let l,a,u,d,{interests:h=[]}=e,{name:$=""}=e,{address:p=""}=e,{root:f=null}=e,{user:m=null}=e,{css:g=""}=e,{message:b="Success"}=e,{link:y="/"}=e,{button:k="return"}=e,{class_:x=""}=e,{style_:_=""}=e,{init:w=""}=e,z={},{editor:E=!1}=e;return v((async t=>{console.log(`[list-signup] ✨  mounted with ${f} ${m} ${JSON.stringify(z)}`)})),t.$$set=t=>{"interests"in t&&s(15,h=t.interests),"name"in t&&s(0,$=t.name),"address"in t&&s(1,p=t.address),"root"in t&&s(16,f=t.root),"user"in t&&s(17,m=t.user),"css"in t&&s(18,g=t.css),"message"in t&&s(19,b=t.message),"link"in t&&s(20,y=t.link),"button"in t&&s(21,k=t.button),"class_"in t&&s(2,x=t.class_),"style_"in t&&s(3,_=t.style_),"init"in t&&s(22,w=t.init),"editor"in t&&s(4,E=t.editor)},t.$$.update=()=>{32784&t.$$.dirty[0]&&function(t,e){let n=c?window.location.search:"";n=""!=n&&c?Z(n):w;const i=Z(n);s(1,p=i.address),""==p&&s(1,p=null);const o=tt(e||"");(i.vars||"").split(",").forEach((t=>{o.find((e=>e.key==t))&&s(5,z[t]=!0,z)})),E&&(p&&0!=Object.keys(z).length||s(9,d=`\n                <div class="ezipe-success ezipe-message">Address and vars must be set in URL search params, ie:</div>\n                <div class="ezipe-success ezipe-details monospace mt2">?address=${p||"foo@bar.com"}&news=annoucements&code=opensource</div>\n            `))}(0,h),3670019&t.$$.dirty[0]&&(n=`\n        <div>${b}</div>\n        <div class="monospace mb2">${$} &lt;${p}&gt;</div>\n        <a class="filled button text-center" href="${y}">${k}</a>\n    `),196608&t.$$.dirty[0]&&s(10,i=G(f,m,"signup_mailing_list")),262144&t.$$.dirty[0]&&s(11,o=`\n        <style>\n            @import "${g}";\n        </style>\n    `),32768&t.$$.dirty[0]&&s(12,r="string"==typeof h?tt(h):h)},[$,p,x,_,E,z,l,a,u,d,i,o,r,async function(t){console.log("[list-signup] 🌐  submitting",{name:$,address:p,vars:z}),s(6,l=null),s(7,a=!0),t.preventDefault(),t.stopPropagation();const e=await F.post(t.target.action,{name:$,address:p,vars:z});console.log(e),e.ok&&s(8,u=n),e.ok||s(6,l=e.message),s(7,a=!1)},async function(t){s(6,l=null),s(7,a=!0),t.preventDefault(),t.stopPropagation();const e=await F.post(G(f,m,"unsubscribe_mailing_list"),{name:$,address:p,vars:z});e.ok&&s(8,u=n),e.ok||s(6,l=e.message),s(7,a=!1)},h,f,m,g,b,y,k,w,function(){$=this.value,s(0,$)},function(){p=this.value,s(1,p)},function(t){z[t.key]=this.checked,s(5,z),s(12,r),s(15,h)}]}class st extends class{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(t){this.$$set&&!r(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),q(this,t,et,Y,o,{interests:15,name:0,address:1,root:16,user:17,css:18,message:19,link:20,button:21,class_:2,style_:3,init:22,editor:4},[-1,-1])}}function nt(e){let s,n;return s=new st({props:{interests:e[0],root:e[1],user:e[2],css:e[3],message:e[4],link:e[5],button:e[6],style_:e[9],class_:e[8],init:e[7],editor:!1}}),{c(){P(s.$$.fragment),this.c=t},m(t,e){J(s,t,e),n=!0},p(t,[e]){const n={};1&e&&(n.interests=t[0]),2&e&&(n.root=t[1]),4&e&&(n.user=t[2]),8&e&&(n.css=t[3]),16&e&&(n.message=t[4]),32&e&&(n.link=t[5]),64&e&&(n.button=t[6]),512&e&&(n.style_=t[9]),256&e&&(n.class_=t[8]),128&e&&(n.init=t[7]),s.$set(n)},i(t){n||(U(s.$$.fragment,t),n=!0)},o(t){R(s.$$.fragment,t),n=!1},d(t){D(s,t)}}}function it(t,e,s){let{interests:n=[]}=e,{root:i=null}=e,{user:o=null}=e,{css:r=""}=e,{message:c="Thank you, you have been subscribed as:"}=e,{link:l="/"}=e,{button:a="return"}=e,{init:u=""}=e,{class:d=""}=e,{style:h=""}=e;return t.$$set=t=>{"interests"in t&&s(0,n=t.interests),"root"in t&&s(1,i=t.root),"user"in t&&s(2,o=t.user),"css"in t&&s(3,r=t.css),"message"in t&&s(4,c=t.message),"link"in t&&s(5,l=t.link),"button"in t&&s(6,a=t.button),"init"in t&&s(7,u=t.init),"class"in t&&s(8,d=t.class),"style"in t&&s(9,h=t.style)},[n,i,o,r,c,l,a,u,d,h]}class ot extends H{constructor(t){super(),q(this,{target:this.shadowRoot,props:k(this.attributes),customElement:!0},it,nt,o,{interests:0,root:1,user:2,css:3,message:4,link:5,button:6,init:7,class:8,style:9}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),N()))}static get observedAttributes(){return["interests","root","user","css","message","link","button","init","class","style"]}get interests(){return this.$$.ctx[0]}set interests(t){this.$set({interests:t}),N()}get root(){return this.$$.ctx[1]}set root(t){this.$set({root:t}),N()}get user(){return this.$$.ctx[2]}set user(t){this.$set({user:t}),N()}get css(){return this.$$.ctx[3]}set css(t){this.$set({css:t}),N()}get message(){return this.$$.ctx[4]}set message(t){this.$set({message:t}),N()}get link(){return this.$$.ctx[5]}set link(t){this.$set({link:t}),N()}get button(){return this.$$.ctx[6]}set button(t){this.$set({button:t}),N()}get init(){return this.$$.ctx[7]}set init(t){this.$set({init:t}),N()}get class(){return this.$$.ctx[8]}set class(t){this.$set({class:t}),N()}get style(){return this.$$.ctx[9]}set style(t){this.$set({style:t}),N()}}function rt(e){let s,n;return s=new st({props:{interests:e[0],root:e[1],user:e[2],css:e[3],message:e[4],link:e[5],button:e[6],style_:e[9],class_:e[8],init:e[7],editor:!0}}),{c(){P(s.$$.fragment),this.c=t},m(t,e){J(s,t,e),n=!0},p(t,[e]){const n={};1&e&&(n.interests=t[0]),2&e&&(n.root=t[1]),4&e&&(n.user=t[2]),8&e&&(n.css=t[3]),16&e&&(n.message=t[4]),32&e&&(n.link=t[5]),64&e&&(n.button=t[6]),512&e&&(n.style_=t[9]),256&e&&(n.class_=t[8]),128&e&&(n.init=t[7]),s.$set(n)},i(t){n||(U(s.$$.fragment,t),n=!0)},o(t){R(s.$$.fragment,t),n=!1},d(t){D(s,t)}}}function ct(t,e,s){let{interests:n=[]}=e,{root:i=null}=e,{user:o=null}=e,{css:r=""}=e,{message:c="Mailing list settings updated:"}=e,{link:l="/"}=e,{button:a="return"}=e,{init:u=""}=e,{class:d=""}=e,{style:h=""}=e;return t.$$set=t=>{"interests"in t&&s(0,n=t.interests),"root"in t&&s(1,i=t.root),"user"in t&&s(2,o=t.user),"css"in t&&s(3,r=t.css),"message"in t&&s(4,c=t.message),"link"in t&&s(5,l=t.link),"button"in t&&s(6,a=t.button),"init"in t&&s(7,u=t.init),"class"in t&&s(8,d=t.class),"style"in t&&s(9,h=t.style)},[n,i,o,r,c,l,a,u,d,h]}customElements.define("list-signup",ot);class lt extends H{constructor(t){super(),q(this,{target:this.shadowRoot,props:k(this.attributes),customElement:!0},ct,rt,o,{interests:0,root:1,user:2,css:3,message:4,link:5,button:6,init:7,class:8,style:9}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),N()))}static get observedAttributes(){return["interests","root","user","css","message","link","button","init","class","style"]}get interests(){return this.$$.ctx[0]}set interests(t){this.$set({interests:t}),N()}get root(){return this.$$.ctx[1]}set root(t){this.$set({root:t}),N()}get user(){return this.$$.ctx[2]}set user(t){this.$set({user:t}),N()}get css(){return this.$$.ctx[3]}set css(t){this.$set({css:t}),N()}get message(){return this.$$.ctx[4]}set message(t){this.$set({message:t}),N()}get link(){return this.$$.ctx[5]}set link(t){this.$set({link:t}),N()}get button(){return this.$$.ctx[6]}set button(t){this.$set({button:t}),N()}get init(){return this.$$.ctx[7]}set init(t){this.$set({init:t}),N()}get class(){return this.$$.ctx[8]}set class(t){this.$set({class:t}),N()}get style(){return this.$$.ctx[9]}set style(t){this.$set({style:t}),N()}}customElements.define("list-update",lt);export{ot as ListSignup,lt as ListUpdate};
