function t(){}function e(t,e,s,n,o){t.__svelte_meta={loc:{file:e,line:s,column:n,char:o}}}function s(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(s)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return 0===Object.keys(t).length}function a(t,e,s){t.insertBefore(e,s||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function m(t,e){t.value=null==e?"":e}function h(t,e,s){t.classList[s?"add":"remove"](e)}class f{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,s=null){this.e||(this.e=u(e.nodeName),this.t=e,this.h(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)a(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(l)}}function $(t){const e={};for(const s of t)e[s.name]=s.value;return e}let g;function b(t){g=t}function w(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}const y=[],v=[],k=[],x=[],E=Promise.resolve();let _=!1;function L(t){k.push(t)}let O=!1;const S=new Set;function j(){if(!O){O=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];b(e),F(e.$$)}for(b(null),y.length=0;v.length;)v.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];S.has(e)||(S.add(e),e())}k.length=0}while(y.length);for(;x.length;)x.pop()();_=!1,O=!1,S.clear()}}function F(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const P=new Set;function z(t,e){t&&t.i&&(P.delete(t),t.i(e))}function C(t,e,s,n){if(t&&t.o){if(P.has(t))return;P.add(t),undefined.c.push((()=>{P.delete(t),n&&(s&&t.d(1),n())})),t.o(e)}}const M="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function R(t){t&&t.c()}function A(t,e,n,i){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,n),i||L((()=>{const e=a.map(s).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(L)}function D(t,e){const s=t.$$;null!==s.fragment&&(o(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function T(t,e){-1===t.$$.dirty[0]&&(y.push(t),_||(_=!0,E.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(e,s,r,i,c,a,u=[-1]){const d=g;b(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:s.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let m=!1;if(p.ctx=r?r(e,s.props||{},((t,s,...n)=>{const o=n.length?n[0]:s;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),m&&T(e,t)),s})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();s.intro&&z(e.$$.fragment),A(e,s.target,s.anchor,s.customElement),j()}b(d)}let B;"function"==typeof HTMLElement&&(B=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(s).filter(r);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,s){this[t]=s}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){D(this,1),this.$destroy=t}$on(t,e){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function U(t,e){document.dispatchEvent(function(t,e){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,!1,!1,e),s}(t,Object.assign({version:"3.38.2"},e)))}function H(t,e){U("SvelteDOMInsert",{target:t,node:e}),function(t,e){t.appendChild(e)}(t,e)}function I(t,e,s){U("SvelteDOMInsert",{target:t,node:e,anchor:s}),a(t,e,s)}function J(t){U("SvelteDOMRemove",{node:t}),l(t)}function q(t,e,s,n,o,r){const i=!0===n?["capture"]:n?Array.from(Object.keys(n)):[];o&&i.push("preventDefault"),r&&i.push("stopPropagation"),U("SvelteDOMAddEventListener",{node:t,event:e,handler:s,modifiers:i});const c=function(t,e,s,n){return t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)}(t,e,s,n);return()=>{U("SvelteDOMRemoveEventListener",{node:t,event:e,handler:s,modifiers:i}),c()}}function Y(t,e,s){!function(t,e,s){null==s?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}(t,e,s),null==s?U("SvelteDOMRemoveAttribute",{node:t,attribute:e}):U("SvelteDOMSetAttribute",{node:t,attribute:e,value:s})}function G(t,e,s){t[e]=s,U("SvelteDOMSetProperty",{node:t,property:e,value:s})}function K(t,e){e=""+e,t.wholeText!==e&&(U("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function Q(t){if(!("string"==typeof t||t&&"object"==typeof t&&"length"in t)){let e="{#each} only iterates over array-like objects.";throw"function"==typeof Symbol&&t&&Symbol.iterator in t&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}}function V(t,e,s){for(const n of Object.keys(e))~s.indexOf(n)||console.warn(`<${t}> received an unexpected slot "${n}".`)}let W={};["get","post","del","put"].forEach((t=>{W[t]=async(e,s,n)=>await(async(t,e,s,n)=>{Array.isArray(e)&&(e=e.join("/"));try{let o={};if("del"==t&&(o={...o,credentials:"include",method:"DELETE"}),"get"==t&&s){const n=Object.keys(s);for(let t=0;t<n.length;t++){const o=n[t];0==t&&(e+="?"),null!=s[o]&&""!=s[o]&&(e+=`${o}=${encodeURIComponent(s[o])}`,t!=n.length-1&&(e+="&"))}o={...o,credentials:"include",method:t.toUpperCase()}}"put"!=t&&"post"!=t||(o={...o,credentials:"include",method:t.toUpperCase(),body:JSON.stringify(s||{}),headers:{"Content-Type":"application/json"}}),n||console.log(`[fetcher] 🌟  ${e}`,o);const r=await fetch(e,o);let i=await r.text();try{i=JSON.parse(i)}catch(t){}return r.ok&&!i.error||console.log(`[fetcher] ❌  ${e}`,i.message,i.status,i.code),!r.ok||i.error?i:(n||console.log(`[fetcher] ✅  ${e}`,i),(t=>({code:200,status:200,error:!1,ok:!0,data:t}))(i))}catch(t){return n||console.log(`[fetcher] ❌  ${e}`,t.message,t.status,t.code),{code:o=500,status:o,error:!0,ok:!1,message:t.message}}var o})(t,e,s,n)}));const X={url:(t,e,s)=>`${t}/api/${e}/${s}`},{Object:Z,console:tt}=M,et="lib/ListForm.svelte";function st(t,e,s){const n=t.slice();return n[25]=e[s],n[26]=e,n[27]=s,n}function nt(t){let s,n,r,i,c,a,l,$,g,b,w,y,v,k,x,E,_,L,O,S=t[3]?"update":"subscribe",j=(t[4]||"")+"",F=(t[6]||"")+"",P=t[10];Q(P);let z=[];for(let e=0;e<P.length;e+=1)z[e]=rt(st(t,P,e));let C=t[3]&&it(t);const M={c:function(){s=u("form"),r=p(),i=u("input"),c=p(),a=u("input"),$=p();for(let t=0;t<z.length;t+=1)z[t].c();g=p(),b=u("button"),w=d(S),y=p(),C&&C.c(),v=p(),k=u("div"),x=d(j),E=p(),n=new f(r),i.disabled=t[5],Y(i,"id","name"),Y(i,"placeholder","name"),Y(i,"name","name"),Y(i,"type","text"),Y(i,"class","ezipe-field-name"),h(i,"none",t[6]||t[3]),e(i,et,114,12,3411),a.disabled=l=t[5]||t[3],Y(a,"id","address"),Y(a,"placeholder","email"),Y(a,"name","address"),Y(a,"type","text"),Y(a,"class","ezipe-field-address"),h(a,"none",t[6]),e(a,et,124,12,3758),Y(b,"class","ezipe-button ezipe-button-submit filled"),b.disabled=t[5],h(b,"none",t[6]),e(b,et,150,12,4705),Y(k,"class","ezipe-error error"),h(k,"hidden",!t[4]),h(k,"none",t[6]),e(k,et,164,12,5165),_=new f(null),Y(s,"action",t[8]),Y(s,"class","ezipe-mailing-list cmb1 flex column-stretch-flex-start"),e(s,et,110,8,3220)},m:function(e,o){I(e,s,o),n.m(t[9],s),H(s,r),H(s,i),m(i,t[0]),H(s,c),H(s,a),m(a,t[1]),H(s,$);for(let t=0;t<z.length;t+=1)z[t].m(s,null);H(s,g),H(s,b),H(b,w),H(s,y),C&&C.m(s,null),H(s,v),H(s,k),H(k,x),H(s,E),_.m(F,s),L||(O=[q(i,"input",t[20]),q(a,"input",t[21]),q(s,"submit",t[11],!1,!1,!1)],L=!0)},p:function(t,e){if(512&e&&n.p(t[9]),32&e&&G(i,"disabled",t[5]),1&e&&i.value!==t[0]&&m(i,t[0]),72&e&&h(i,"none",t[6]||t[3]),40&e&&l!==(l=t[5]||t[3])&&G(a,"disabled",l),2&e&&a.value!==t[1]&&m(a,t[1]),64&e&&h(a,"none",t[6]),1124&e){let n;for(P=t[10],Q(P),n=0;n<P.length;n+=1){const o=st(t,P,n);z[n]?z[n].p(o,e):(z[n]=rt(o),z[n].c(),z[n].m(s,g))}for(;n<z.length;n+=1)z[n].d(1);z.length=P.length}8&e&&S!==(S=t[3]?"update":"subscribe")&&K(w,S),32&e&&G(b,"disabled",t[5]),64&e&&h(b,"none",t[6]),t[3]?C?C.p(t,e):(C=it(t),C.c(),C.m(s,v)):C&&(C.d(1),C=null),16&e&&j!==(j=(t[4]||"")+"")&&K(x,j),16&e&&h(k,"hidden",!t[4]),64&e&&h(k,"none",t[6]),64&e&&F!==(F=(t[6]||"")+"")&&_.p(F),256&e&&Y(s,"action",t[8])},d:function(t){t&&J(s),function(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}(z,t),C&&C.d(),L=!1,o(O)}};return U("SvelteRegisterBlock",{block:M,id:nt.name,type:"else",source:"(110:4) {:else}",ctx:t}),M}function ot(t){let e,s;const n={c:function(){s=d(""),e=new f(s)},m:function(n,o){e.m(t[7],n,o),I(n,s,o)},p:function(t,s){128&s&&e.p(t[7])},d:function(t){t&&J(s),t&&e.d()}};return U("SvelteRegisterBlock",{block:n,id:ot.name,type:"if",source:"(108:4) {#if invalid}",ctx:t}),n}function rt(t){let s,n,o,r,i,c,a,l,d,m,$,g=t[25].key+"",b=t[25].text+"";function w(){t[22].call(n,t[25])}const y={c:function(){var m,$,g;s=u("label"),n=u("input"),o=p(),r=u("span"),i=p(),a=p(),l=u("em"),n.disabled=t[5],Y(n,"type","checkbox"),e(n,et,140,20,4376),e(r,et,144,20,4537),c=new f(a),Y(l,"class","fade ml0-6"),e(l,et,146,20,4602),m="user-select",$="none",s.style.setProperty(m,$,g?"important":""),Y(s,"class",d="ezipe-field-label ezipe-field-"+t[25].key+" checkbox pointer user-select-none"),h(s,"none",t[6]),h(s,"disabled",t[5]),e(s,et,135,16,4114)},m:function(e,u){I(e,s,u),H(s,n),n.checked=t[2][t[25].key],H(s,o),H(s,r),H(s,i),c.m(g,s),H(s,a),H(s,l),l.innerHTML=b,m||($=q(n,"change",w),m=!0)},p:function(e,o){t=e,32&o&&G(n,"disabled",t[5]),1028&o&&(n.checked=t[2][t[25].key]),1024&o&&g!==(g=t[25].key+"")&&c.p(g),1024&o&&b!==(b=t[25].text+"")&&(l.innerHTML=b),1024&o&&d!==(d="ezipe-field-label ezipe-field-"+t[25].key+" checkbox pointer user-select-none")&&Y(s,"class",d),1088&o&&h(s,"none",t[6]),1056&o&&h(s,"disabled",t[5])},d:function(t){t&&J(s),m=!1,$()}};return U("SvelteRegisterBlock",{block:y,id:rt.name,type:"each",source:"(135:12) {#each parsed as int, i }",ctx:t}),y}function it(s){let n,o,r;const i={c:function(){n=u("button"),n.textContent="unsubscribe",Y(n,"class","ezipe-button ezipe-button-unsubscribe"),e(n,et,157,16,4958)},m:function(t,e){I(t,n,e),o||(r=q(n,"click",s[12],!1,!1,!1),o=!0)},p:t,d:function(t){t&&J(n),o=!1,r()}};return U("SvelteRegisterBlock",{block:i,id:it.name,type:"if",source:"(157:12) {#if editor}",ctx:s}),i}function ct(s){let n;function o(t,e){return t[7]?ot:nt}let r=o(s),i=r(s);const c={c:function(){n=u("html"),i.c(),e(n,et,106,0,3151)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(t,e){I(t,n,e),i.m(n,null)},p:function(t,[e]){r===(r=o(t))&&i?i.p(t,e):(i.d(1),i=r(t),i&&(i.c(),i.m(n,null)))},i:t,o:t,d:function(t){t&&J(n),i.d()}};return U("SvelteRegisterBlock",{block:c,id:ct.name,type:"component",source:"",ctx:s}),c}function at(t){return t.slice(t.indexOf("?")+1).split("&").reduce(((t,e)=>{let[s,n]=e.split("=");return Object.assign(t,{[s]:decodeURIComponent(n)})}),{})}function lt(t){return t.split(",").filter((t=>""!=t)).map((t=>({key:t.split(":")[0],text:t.split(":")[1]})))}function ut(t,e,s){let n,o,r,i,{$$slots:c={},$$scope:a}=e;V("ListForm",c,[]);let l,u,d,p,{interests:m=[]}=e,{name:h=""}=e,{address:f=""}=e,{vars:$={}}=e,{root:g=null}=e,{user:b=null}=e,{css:y=""}=e,{message:v="Success"}=e,{link:k="/"}=e,{button:x="return"}=e,{editor:E=!1}=e;function _(t,e){const n=at(window.location.search);s(1,f=n.address),""==f&&s(1,f=null);(n.vars||"").split(",").forEach((t=>{lt(e||"").find((e=>e.key==t))&&s(2,$[t]=!0,$)})),E&&(f&&0!=Object.keys($).length||s(7,p=`\n                <div class="ezipe-success ezipe-message">Address and vars must be set in URL search params, ie:</div>\n                <div class="ezipe-success ezipe-details monospace mt2">?address=${f||"foo@bar.com"}&news=annoucements&code=opensource</div>\n            `))}async function L(t){console.log("[list-signup] 🌐  submitting",{name:h,address:f,vars:$}),s(4,l=null),s(5,u=!0),t.preventDefault(),t.stopPropagation();const e=await W.post(t.target.action,{name:h,address:f,vars:$});e.ok&&s(6,d=n),e.ok||s(4,l=e.message),s(5,u=!1)}async function O(t){s(4,l=null),s(5,u=!0),t.preventDefault(),t.stopPropagation();const e=await W.post(X.url(g,b,"unsubscribe_mailing_list"),{name:h,address:f,vars:$});e.ok&&s(6,d=n),e.ok||s(4,l=e.message),s(5,u=!1)}w((async t=>{console.log(`[list-signup] ✨  mounted with ${g} ${b} ${JSON.stringify($)}`)}));const S=["interests","name","address","vars","root","user","css","message","link","button","editor"];return Z.keys(e).forEach((t=>{~S.indexOf(t)||"$$"===t.slice(0,2)||tt.warn(`<ListForm> was created with unknown prop '${t}'`)})),t.$$set=t=>{"interests"in t&&s(13,m=t.interests),"name"in t&&s(0,h=t.name),"address"in t&&s(1,f=t.address),"vars"in t&&s(2,$=t.vars),"root"in t&&s(14,g=t.root),"user"in t&&s(15,b=t.user),"css"in t&&s(16,y=t.css),"message"in t&&s(17,v=t.message),"link"in t&&s(18,k=t.link),"button"in t&&s(19,x=t.button),"editor"in t&&s(3,E=t.editor)},t.$capture_state=()=>({onMount:w,fetcher:W,common:X,getUrlParams:at,interests:m,name:h,address:f,vars:$,root:g,user:b,css:y,message:v,link:k,button:x,editor:E,error:l,disabled:u,done:d,invalid:p,setAddress:_,submit:L,parse:lt,unsubscribe:O,success:n,action:o,style:r,parsed:i}),t.$inject_state=t=>{"interests"in t&&s(13,m=t.interests),"name"in t&&s(0,h=t.name),"address"in t&&s(1,f=t.address),"vars"in t&&s(2,$=t.vars),"root"in t&&s(14,g=t.root),"user"in t&&s(15,b=t.user),"css"in t&&s(16,y=t.css),"message"in t&&s(17,v=t.message),"link"in t&&s(18,k=t.link),"button"in t&&s(19,x=t.button),"editor"in t&&s(3,E=t.editor),"error"in t&&s(4,l=t.error),"disabled"in t&&s(5,u=t.disabled),"done"in t&&s(6,d=t.done),"invalid"in t&&s(7,p=t.invalid),"success"in t&&(n=t.success),"action"in t&&s(8,o=t.action),"style"in t&&s(9,r=t.style),"parsed"in t&&s(10,i=t.parsed)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{8200&t.$$.dirty&&_(0,m),917507&t.$$.dirty&&(n=`\n        <div>${v}</div>\n        <div class="monospace mb2">${h} &lt;${f}&gt;</div>\n        <a class="filled button text-center" href="${k}">${x}</a>\n    `),49152&t.$$.dirty&&s(8,o=X.url(g,b,"signup_mailing_list")),65536&t.$$.dirty&&s(9,r=`\n        <style>\n            @import "${y}";\n        </style>\n    `),8192&t.$$.dirty&&s(10,i="string"==typeof m?lt(m):m)},[h,f,$,E,l,u,d,p,o,r,i,L,O,m,g,b,y,v,k,x,function(){h=this.value,s(0,h)},function(){f=this.value,s(1,f)},function(t){$[t.key]=this.checked,s(2,$),s(10,i),s(13,m)}]}class dt extends class extends class{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}{constructor(t){super(t),N(this,t,ut,ct,i,{interests:13,name:0,address:1,vars:2,root:14,user:15,css:16,message:17,link:18,button:19,editor:3}),U("SvelteRegisterComponent",{component:this,tagName:"ListForm",options:t,id:ct.name})}get interests(){throw new Error("<ListForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set interests(t){throw new Error("<ListForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get name(){throw new Error("<ListForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set name(t){throw new Error("<ListForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get address(){throw new Error("<ListForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set address(t){throw new Error("<ListForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get vars(){throw new Error("<ListForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set vars(t){throw new Error("<ListForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root(){throw new Error("<ListForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root(t){throw new Error("<ListForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get user(){throw new Error("<ListForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set user(t){throw new Error("<ListForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get css(){throw new Error("<ListForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set css(t){throw new Error("<ListForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get message(){throw new Error("<ListForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set message(t){throw new Error("<ListForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get link(){throw new Error("<ListForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set link(t){throw new Error("<ListForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get button(){throw new Error("<ListForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set button(t){throw new Error("<ListForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editor(){throw new Error("<ListForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editor(t){throw new Error("<ListForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function pt(e){let s,n;s=new dt({props:{interests:e[0],root:e[1],user:e[2],css:e[3],message:e[4],link:e[5],button:e[6],editor:!1},$$inline:!0});const o={c:function(){R(s.$$.fragment),this.c=t},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(t,e){A(s,t,e),n=!0},p:function(t,[e]){const n={};1&e&&(n.interests=t[0]),2&e&&(n.root=t[1]),4&e&&(n.user=t[2]),8&e&&(n.css=t[3]),16&e&&(n.message=t[4]),32&e&&(n.link=t[5]),64&e&&(n.button=t[6]),s.$set(n)},i:function(t){n||(z(s.$$.fragment,t),n=!0)},o:function(t){C(s.$$.fragment,t),n=!1},d:function(t){D(s,t)}};return U("SvelteRegisterBlock",{block:o,id:pt.name,type:"component",source:"",ctx:e}),o}function mt(t,e,s){let{$$slots:n={},$$scope:o}=e;V("list-signup",n,[]);let{interests:r=[]}=e,{root:i=null}=e,{user:c=null}=e,{css:a=""}=e,{message:l="Thank you, you have been subscribed as:"}=e,{link:u="/"}=e,{button:d="return"}=e;const p=["interests","root","user","css","message","link","button"];return Object.keys(e).forEach((t=>{~p.indexOf(t)||"$$"===t.slice(0,2)||console.warn(`<list-signup> was created with unknown prop '${t}'`)})),t.$$set=t=>{"interests"in t&&s(0,r=t.interests),"root"in t&&s(1,i=t.root),"user"in t&&s(2,c=t.user),"css"in t&&s(3,a=t.css),"message"in t&&s(4,l=t.message),"link"in t&&s(5,u=t.link),"button"in t&&s(6,d=t.button)},t.$capture_state=()=>({ListForm:dt,interests:r,root:i,user:c,css:a,message:l,link:u,button:d}),t.$inject_state=t=>{"interests"in t&&s(0,r=t.interests),"root"in t&&s(1,i=t.root),"user"in t&&s(2,c=t.user),"css"in t&&s(3,a=t.css),"message"in t&&s(4,l=t.message),"link"in t&&s(5,u=t.link),"button"in t&&s(6,d=t.button)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[r,i,c,a,l,u,d]}class ht extends B{constructor(t){super(),N(this,{target:this.shadowRoot,props:$(this.attributes),customElement:!0},mt,pt,i,{interests:0,root:1,user:2,css:3,message:4,link:5,button:6}),t&&(t.target&&I(t.target,this,t.anchor),t.props&&(this.$set(t.props),j()))}static get observedAttributes(){return["interests","root","user","css","message","link","button"]}get interests(){return this.$$.ctx[0]}set interests(t){this.$set({interests:t}),j()}get root(){return this.$$.ctx[1]}set root(t){this.$set({root:t}),j()}get user(){return this.$$.ctx[2]}set user(t){this.$set({user:t}),j()}get css(){return this.$$.ctx[3]}set css(t){this.$set({css:t}),j()}get message(){return this.$$.ctx[4]}set message(t){this.$set({message:t}),j()}get link(){return this.$$.ctx[5]}set link(t){this.$set({link:t}),j()}get button(){return this.$$.ctx[6]}set button(t){this.$set({button:t}),j()}}function ft(e){let s,n;s=new dt({props:{interests:e[0],root:e[1],user:e[2],css:e[3],message:e[4],link:e[5],button:e[6],editor:!0},$$inline:!0});const o={c:function(){R(s.$$.fragment),this.c=t},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(t,e){A(s,t,e),n=!0},p:function(t,[e]){const n={};1&e&&(n.interests=t[0]),2&e&&(n.root=t[1]),4&e&&(n.user=t[2]),8&e&&(n.css=t[3]),16&e&&(n.message=t[4]),32&e&&(n.link=t[5]),64&e&&(n.button=t[6]),s.$set(n)},i:function(t){n||(z(s.$$.fragment,t),n=!0)},o:function(t){C(s.$$.fragment,t),n=!1},d:function(t){D(s,t)}};return U("SvelteRegisterBlock",{block:o,id:ft.name,type:"component",source:"",ctx:e}),o}function $t(t,e,s){let{$$slots:n={},$$scope:o}=e;V("list-update",n,[]);let{interests:r=[]}=e,{root:i=null}=e,{user:c=null}=e,{css:a=""}=e,{message:l="Mailing list settings updated:"}=e,{link:u="/"}=e,{button:d="return"}=e;const p=["interests","root","user","css","message","link","button"];return Object.keys(e).forEach((t=>{~p.indexOf(t)||"$$"===t.slice(0,2)||console.warn(`<list-update> was created with unknown prop '${t}'`)})),t.$$set=t=>{"interests"in t&&s(0,r=t.interests),"root"in t&&s(1,i=t.root),"user"in t&&s(2,c=t.user),"css"in t&&s(3,a=t.css),"message"in t&&s(4,l=t.message),"link"in t&&s(5,u=t.link),"button"in t&&s(6,d=t.button)},t.$capture_state=()=>({ListForm:dt,interests:r,root:i,user:c,css:a,message:l,link:u,button:d}),t.$inject_state=t=>{"interests"in t&&s(0,r=t.interests),"root"in t&&s(1,i=t.root),"user"in t&&s(2,c=t.user),"css"in t&&s(3,a=t.css),"message"in t&&s(4,l=t.message),"link"in t&&s(5,u=t.link),"button"in t&&s(6,d=t.button)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[r,i,c,a,l,u,d]}customElements.define("list-signup",ht);class gt extends B{constructor(t){super(),N(this,{target:this.shadowRoot,props:$(this.attributes),customElement:!0},$t,ft,i,{interests:0,root:1,user:2,css:3,message:4,link:5,button:6}),t&&(t.target&&I(t.target,this,t.anchor),t.props&&(this.$set(t.props),j()))}static get observedAttributes(){return["interests","root","user","css","message","link","button"]}get interests(){return this.$$.ctx[0]}set interests(t){this.$set({interests:t}),j()}get root(){return this.$$.ctx[1]}set root(t){this.$set({root:t}),j()}get user(){return this.$$.ctx[2]}set user(t){this.$set({user:t}),j()}get css(){return this.$$.ctx[3]}set css(t){this.$set({css:t}),j()}get message(){return this.$$.ctx[4]}set message(t){this.$set({message:t}),j()}get link(){return this.$$.ctx[5]}set link(t){this.$set({link:t}),j()}get button(){return this.$$.ctx[6]}set button(t){this.$set({button:t}),j()}}customElements.define("list-update",gt);export{ht as ListSignup,gt as ListUpdate};
