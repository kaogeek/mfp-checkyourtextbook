import{S as x,i as H,d as C,B as N,s as I,n as Q,l as y,z as k,g as M,_ as P,p as E,r as _,o as S,q as B,A as F,h as W,u as v,w as A,y as f,x as V,m as G,W as z,t as J,j as K,k as L,$ as U,a0 as X,v as Y,a1 as D}from"../../chunks/vendor-4468c64d.js";const b="src/routes/+error.svelte";function T(n){let e;const c={c:function(){e=k("\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01")},l:function(a){e=F(a,"\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01")},m:function(a,i){V(a,e,i)},d:function(a){a&&_(e)}};return C("SvelteRegisterBlock",{block:c,id:T.name,type:"slot",source:'(14:2) <Button color=\\"light\\" href=\\"/\\">',ctx:n}),c}function q(n){let e,c,t,a,i=n[0].status+"",p,o,m,$=n[0].error.message+"",g,w,u,h;u=new N({props:{color:"light",href:"/",$$slots:{default:[T]},$$scope:{ctx:n}},$$inline:!0});const O={c:function(){e=Q("meta"),c=y(),t=Q("section"),a=Q("h1"),p=k(i),o=y(),m=Q("p"),g=k($),w=y(),M(u.$$.fragment),this.h()},l:function(s){const r=P('[data-svelte="svelte-hitzeg"]',document.head);e=E(r,"META",{name:!0,content:!0,class:!0}),r.forEach(_),c=S(s),t=E(s,"SECTION",{class:!0});var l=B(t);a=E(l,"H1",{class:!0});var R=B(a);p=F(R,i),R.forEach(_),o=S(l),m=E(l,"P",{class:!0});var j=B(m);g=F(j,$),j.forEach(_),w=S(l),W(u.$$.fragment,l),l.forEach(_),this.h()},h:function(){document.title="\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14",v(e,"name","description"),v(e,"content","Svelte demo app"),v(e,"class","s-QcQDAQA3vV4F"),A(e,b,6,2,155),v(a,"class","s-QcQDAQA3vV4F"),A(a,b,10,2,237),v(m,"class","s-QcQDAQA3vV4F"),A(m,b,11,2,263),v(t,"class","s-QcQDAQA3vV4F"),A(t,b,9,0,225)},m:function(s,r){f(document.head,e),V(s,c,r),V(s,t,r),f(t,a),f(a,p),f(t,o),f(t,m),f(m,g),f(t,w),G(u,t,null),h=!0},p:function(s,[r]){(!h||r&1)&&i!==(i=s[0].status+"")&&z(p,i),(!h||r&1)&&$!==($=s[0].error.message+"")&&z(g,$);const l={};r&2&&(l.$$scope={dirty:r,ctx:s}),u.$set(l)},i:function(s){h||(J(u.$$.fragment,s),h=!0)},o:function(s){K(u.$$.fragment,s),h=!1},d:function(s){_(e),s&&_(c),s&&_(t),L(u)}};return C("SvelteRegisterBlock",{block:O,id:q.name,type:"component",source:"",ctx:n}),O}function Z(n,e,c){let t;U(D,"page"),X(n,D,o=>c(0,t=o));let{$$slots:a={},$$scope:i}=e;Y("Error",a,[]);const p=[];return Object.keys(e).forEach(o=>{!~p.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<Error> was created with unknown prop '${o}'`)}),n.$capture_state=()=>({page:D,Button:N,$page:t}),[t]}class te extends x{constructor(e){super(e),H(this,e,Z,q,I,{}),C("SvelteRegisterComponent",{component:this,tagName:"Error",options:e,id:q.name})}}export{te as default};
