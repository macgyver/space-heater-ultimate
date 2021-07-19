import{S as t,i as e,s as o,e as a,k as n,c as s,a as l,n as d,d as r,b as c,N as i,f as u,D as h,O as f,P as m,Q as v,R as p,T as x,U as g,V as y,W as b,t as w,M as E,g as j,X as T,w as q,x as _,u as M,Y as O,Z as k,r as N,_ as U,E as D}from"../../chunks/vendor-6583ead2.js";function P(t,{pending:e,error:o,result:a}){let n;async function s(s){const l=n={};s.preventDefault();const d=new FormData(t);e&&e(d,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:d});if(l!==n)return;e.ok?a(e,t):o?o(e,null,t):console.error(await e.text())}catch(r){if(!o)throw r;o(null,r,t)}}return t.addEventListener("submit",s),{destroy(){t.removeEventListener("submit",s)}}}function R(t,e,o){const a=t.slice();return a[6]=e[o],a[7]=e,a[8]=o,a}function F(t,e){let o,w,E,j,T,q,_,M,N,U,R,F,I,B,V,L,S,$,A,C,H,Q,W,X,Y,Z,z,G=D;function J(...t){return e[3](e[6],e[7],e[8],...t)}function K(){return e[4](e[6])}return{key:t,first:null,c(){o=a("div"),w=a("form"),E=a("input"),T=n(),q=a("button"),U=n(),R=a("form"),F=a("input"),B=n(),V=a("button"),S=n(),$=a("form"),A=a("button"),Q=n(),this.h()},l(t){o=s(t,"DIV",{class:!0});var e=l(o);w=s(e,"FORM",{action:!0,method:!0});var a=l(w);E=s(a,"INPUT",{type:!0,name:!0,class:!0}),T=d(a),q=s(a,"BUTTON",{class:!0,"aria-label":!0}),l(q).forEach(r),a.forEach(r),U=d(e),R=s(e,"FORM",{class:!0,action:!0,method:!0});var n=l(R);F=s(n,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),B=d(n),V=s(n,"BUTTON",{class:!0,"aria-label":!0}),l(V).forEach(r),n.forEach(r),S=d(e),$=s(e,"FORM",{action:!0,method:!0});var c=l($);A=s(c,"BUTTON",{class:!0,"aria-label":!0}),l(A).forEach(r),c.forEach(r),Q=d(e),e.forEach(r),this.h()},h(){c(E,"type","hidden"),c(E,"name","done"),E.value=j=e[6].done?"":"true",c(E,"class","svelte-dmxqmd"),c(q,"class","toggle svelte-dmxqmd"),c(q,"aria-label",_="Mark todo as "+(e[6].done?"not done":"done")),c(w,"action",M="/todos/"+e[6].uid+".json?_method=patch"),c(w,"method","post"),c(F,"aria-label","Edit todo"),c(F,"type","text"),c(F,"name","text"),F.value=I=e[6].text,c(F,"class","svelte-dmxqmd"),c(V,"class","save svelte-dmxqmd"),c(V,"aria-label","Save todo"),c(R,"class","text svelte-dmxqmd"),c(R,"action",L="/todos/"+e[6].uid+".json?_method=patch"),c(R,"method","post"),c(A,"class","delete svelte-dmxqmd"),c(A,"aria-label","Delete todo"),c($,"action",C="/todos/"+e[6].uid+".json?_method=delete"),c($,"method","post"),c(o,"class","todo svelte-dmxqmd"),i(o,"done",e[6].done),this.first=o},m(t,a){u(t,o,a),h(o,w),h(w,E),h(w,T),h(w,q),h(o,U),h(o,R),h(R,F),h(R,B),h(R,V),h(o,S),h(o,$),h($,A),h(o,Q),Y=!0,Z||(z=[f(N=P.call(null,w,{pending:J,result:e[1]})),f(P.call(null,R,{result:e[1]})),f(H=P.call(null,$,{result:K}))],Z=!0)},p(t,a){e=t,(!Y||1&a&&j!==(j=e[6].done?"":"true"))&&(E.value=j),(!Y||1&a&&_!==(_="Mark todo as "+(e[6].done?"not done":"done")))&&c(q,"aria-label",_),(!Y||1&a&&M!==(M="/todos/"+e[6].uid+".json?_method=patch"))&&c(w,"action",M),N&&m(N.update)&&1&a&&N.update.call(null,{pending:J,result:e[1]}),(!Y||1&a&&I!==(I=e[6].text)&&F.value!==I)&&(F.value=I),(!Y||1&a&&L!==(L="/todos/"+e[6].uid+".json?_method=patch"))&&c(R,"action",L),(!Y||1&a&&C!==(C="/todos/"+e[6].uid+".json?_method=delete"))&&c($,"action",C),H&&m(H.update)&&1&a&&H.update.call(null,{result:K}),1&a&&i(o,"done",e[6].done)},r(){X=o.getBoundingClientRect()},f(){v(o),G(),p(o,X)},a(){G(),G=x(o,X,O,{duration:200})},i(t){Y||(t&&g((()=>{W||(W=y(o,k,{start:.7},!0)),W.run(1)})),Y=!0)},o(t){t&&(W||(W=y(o,k,{start:.7},!1)),W.run(0)),Y=!1},d(t){t&&r(o),t&&W&&W.end(),Z=!1,b(z)}}}function I(t){let e,o,i,v,p,x,g,y,b,O,k,D,I=[],B=new Map,V=t[0];const L=t=>t[6].uid;for(let a=0;a<V.length;a+=1){let e=R(t,V,a),o=L(e);B.set(o,I[a]=F(o,e))}return{c(){e=n(),o=a("div"),i=a("h1"),v=w("Todos"),p=n(),x=a("form"),g=a("input"),b=n();for(let t=0;t<I.length;t+=1)I[t].c();this.h()},l(t){E('[data-svelte="svelte-181o7gf"]',document.head).forEach(r),e=d(t),o=s(t,"DIV",{class:!0});var a=l(o);i=s(a,"H1",{});var n=l(i);v=j(n,"Todos"),n.forEach(r),p=d(a),x=s(a,"FORM",{class:!0,action:!0,method:!0});var c=l(x);g=s(c,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),c.forEach(r),b=d(a);for(let e=0;e<I.length;e+=1)I[e].l(a);a.forEach(r),this.h()},h(){document.title="Todos",c(g,"name","text"),c(g,"aria-label","Add todo"),c(g,"placeholder","+ tap to add a todo"),c(g,"class","svelte-dmxqmd"),c(x,"class","new svelte-dmxqmd"),c(x,"action","/todos.json"),c(x,"method","post"),c(o,"class","todos svelte-dmxqmd")},m(a,n){u(a,e,n),u(a,o,n),h(o,i),h(i,v),h(o,p),h(o,x),h(x,g),h(o,b);for(let t=0;t<I.length;t+=1)I[t].m(o,null);O=!0,k||(D=f(y=P.call(null,x,{result:t[2]})),k=!0)},p(t,[e]){if(y&&m(y.update)&&1&e&&y.update.call(null,{result:t[2]}),3&e){V=t[0],N();for(let t=0;t<I.length;t+=1)I[t].r();I=T(I,e,L,1,t,V,B,o,U,F,null,R);for(let t=0;t<I.length;t+=1)I[t].a();q()}},i(t){if(!O){for(let t=0;t<V.length;t+=1)_(I[t]);O=!0}},o(t){for(let e=0;e<I.length;e+=1)M(I[e]);O=!1},d(t){t&&r(e),t&&r(o);for(let e=0;e<I.length;e+=1)I[e].d();k=!1,D()}}}var B=function(t,e,o,a){return new(o||(o=Promise))((function(n,s){function l(t){try{r(a.next(t))}catch(e){s(e)}}function d(t){try{r(a.throw(t))}catch(e){s(e)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(l,d)}r((a=a.apply(t,e||[])).next())}))};const V=({fetch:t})=>B(void 0,void 0,void 0,(function*(){const e=yield t("/todos.json");if(e.ok){return{props:{todos:yield e.json()}}}const{message:o}=yield e.json();return{error:new Error(o)}}));function L(t,e,o){var a=this&&this.__awaiter||function(t,e,o,a){return new(o||(o=Promise))((function(n,s){function l(t){try{r(a.next(t))}catch(e){s(e)}}function d(t){try{r(a.throw(t))}catch(e){s(e)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(l,d)}r((a=a.apply(t,e||[])).next())}))};let{todos:n}=e;return t.$$set=t=>{"todos"in t&&o(0,n=t.todos)},[n,function(t){return a(this,void 0,void 0,(function*(){const e=yield t.json();o(0,n=n.map((t=>t.uid===e.uid?e:t)))}))},async(t,e)=>{const a=await t.json();o(0,n=[...n,a]),e.reset()},(t,e,a,s)=>{o(0,e[a].done=!!s.get("done"),n)},t=>{o(0,n=n.filter((e=>e.uid!==t.uid)))}]}export default class extends t{constructor(t){super(),e(this,t,L,I,o,{todos:0})}}export{V as load};