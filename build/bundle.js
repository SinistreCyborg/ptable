var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function c(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t){return null==t?"":t}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let b;function g(t){b=t}function $(){if(!b)throw new Error("Function called outside component initialization");return b}const y=[],k=[],v=[],x=[],_=Promise.resolve();let w=!1;function j(t){v.push(t)}let E=!1;const C=new Set;function N(){if(!E){E=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];g(n),A(n.$$)}for(g(null),y.length=0;k.length;)k.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];C.has(n)||(C.add(n),n())}v.length=0}while(y.length);for(;x.length;)x.pop()();w=!1,E=!1,C.clear()}}function A(t){if(null!==t.fragment){t.update(),c(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const F=new Set;let L;function O(){L={r:0,c:[],p:L}}function P(){L.r||c(L.c),L=L.p}function T(t,n){t&&t.i&&(F.delete(t),t.i(n))}function B(t,n,e,o){if(t&&t.o){if(F.has(t))return;F.add(t),L.c.push((()=>{F.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function H(t,n){const e=n.token={};function o(t,o,c,r){if(n.token!==e)return;n.resolved=r;let l=n.ctx;void 0!==c&&(l=l.slice(),l[c]=r);const s=t&&(n.current=t)(l);let i=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(O(),B(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),P())})):n.block.d(1),s.c(),T(s,1),s.m(n.mount(),n.anchor),i=!0),n.block=s,n.blocks&&(n.blocks[o]=s),i&&N()}if((c=t)&&"object"==typeof c&&"function"==typeof c.then){const e=$();if(t.then((t=>{g(e),o(n.then,1,n.value,t),g(null)}),(t=>{if(g(e),o(n.catch,2,n.error,t),g(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var c}function M(t,n,o){const{fragment:l,on_mount:s,on_destroy:i,after_update:u}=t.$$;l&&l.m(n,o),j((()=>{const n=s.map(e).filter(r);i?i.push(...n):c(n),t.$$.on_mount=[]})),u.forEach(j)}function S(t,n){const e=t.$$;null!==e.fragment&&(c(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function q(t,n){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,_.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function z(n,e,r,l,s,i,u=[-1]){const f=b;g(n);const d=e.props||{},h=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:u,skip_bound:!1};let m=!1;if(h.ctx=r?r(n,d,((t,e,...o)=>{const c=o.length?o[0]:e;return h.ctx&&s(h.ctx[t],h.ctx[t]=c)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](c),m&&q(n,t)),e})):[],h.update(),m=!0,c(h.before_update),h.fragment=!!l&&l(h.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();e.intro&&T(n.$$.fragment),M(n,e.target,e.anchor),N()}g(f)}class G{$destroy(){S(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(n){let e,o,c,r,l,b,g,$,y,k,v,x,_,w,j=Number.parseFloat(n[4]).toPrecision(3)+"";return{c(){e=f("section"),o=f("div"),c=d(n[0]),r=h(),l=f("div"),b=d(n[1]),g=h(),$=f("div"),y=d(n[2]),k=h(),v=f("div"),x=d(j),m(o,"id","atomic"),m(o,"class","svelte-1txmydh"),m(l,"id","symbol"),m(l,"class","svelte-1txmydh"),m($,"id","name"),m($,"class","svelte-1txmydh"),m(v,"id","mass"),m(v,"class","svelte-1txmydh"),m(e,"id",_=n[2].toLowerCase()),m(e,"class",w=s(n[3])+" svelte-1txmydh")},m(t,n){u(t,e,n),i(e,o),i(o,c),i(e,r),i(e,l),i(l,b),i(e,g),i(e,$),i($,y),i(e,k),i(e,v),i(v,x)},p(t,[n]){1&n&&p(c,t[0]),2&n&&p(b,t[1]),4&n&&p(y,t[2]),16&n&&j!==(j=Number.parseFloat(t[4]).toPrecision(3)+"")&&p(x,j),4&n&&_!==(_=t[2].toLowerCase())&&m(e,"id",_),8&n&&w!==(w=s(t[3])+" svelte-1txmydh")&&m(e,"class",w)},i:t,o:t,d(t){t&&a(e)}}}function I(t,n,e){let{atomic:o}=n,{symbol:c}=n,{name:r}=n,{type:l}=n,{atomic_mass:s}=n;return t.$$set=t=>{"atomic"in t&&e(0,o=t.atomic),"symbol"in t&&e(1,c=t.symbol),"name"in t&&e(2,r=t.name),"type"in t&&e(3,l=t.type),"atomic_mass"in t&&e(4,s=t.atomic_mass)},[o,c,r,l,s]}class J extends G{constructor(t){super(),z(this,t,I,D,l,{atomic:0,symbol:1,name:2,type:3,atomic_mass:4})}}function K(t,n,e){const o=t.slice();return o[2]=n[e],o}function Q(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function R(t){let n,e,o=t[1],c=[];for(let n=0;n<o.length;n+=1)c[n]=U(K(t,o,n));const r=t=>B(c[t],1,1,(()=>{c[t]=null}));return{c(){for(let t=0;t<c.length;t+=1)c[t].c();n=d("")},m(t,o){for(let n=0;n<c.length;n+=1)c[n].m(t,o);u(t,n,o),e=!0},p(t,e){if(1&e){let l;for(o=t[1],l=0;l<o.length;l+=1){const r=K(t,o,l);c[l]?(c[l].p(r,e),T(c[l],1)):(c[l]=U(r),c[l].c(),T(c[l],1),c[l].m(n.parentNode,n))}for(O(),l=o.length;l<c.length;l+=1)r(l);P()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)T(c[t]);e=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)B(c[t]);e=!1},d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(c,t),t&&a(n)}}}function U(t){let e,o;const c=[t[2]];let r={};for(let t=0;t<c.length;t+=1)r=n(r,c[t]);return e=new J({props:r}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,n){M(e,t,n),o=!0},p(t,n){const o=1&n?function(t,n){const e={},o={},c={$$scope:1};let r=t.length;for(;r--;){const l=t[r],s=n[r];if(s){for(const t in l)t in s||(o[t]=1);for(const t in s)c[t]||(e[t]=s[t],c[t]=1);t[r]=s}else for(const t in l)c[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(c,[(r=t[2],"object"==typeof r&&null!==r?r:{})]):{};var r;e.$set(o)},i(t){o||(T(e.$$.fragment,t),o=!0)},o(t){B(e.$$.fragment,t),o=!1},d(t){S(e,t)}}}function V(n){let e;return{c(){e=f("br")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}function W(t){let n,e,o,c,r={ctx:t,current:null,token:null,hasCatch:!1,pending:V,then:R,catch:Q,value:1,blocks:[,,,]};return H(t[0],r),{c(){n=f("main"),r.block.c(),e=h(),o=f("footer"),o.innerHTML='⭐️ me on <a href="https://github.com/sinistrecyborg/ptable" target="_blank" class="svelte-cdhstu">GitHub</a>',m(o,"class","svelte-cdhstu"),m(n,"class","svelte-cdhstu")},m(t,l){u(t,n,l),r.block.m(n,r.anchor=null),r.mount=()=>n,r.anchor=e,i(n,e),i(n,o),c=!0},p(n,[e]){{const o=(t=n).slice();o[1]=r.resolved,r.block.p(o,e)}},i(t){c||(T(r.block),c=!0)},o(t){for(let t=0;t<3;t+=1){B(r.blocks[t])}c=!1},d(t){t&&a(n),r.block.d(),r.token=null,r=null}}}function X(t){return[fetch("assets/data.json").then((t=>t.json()))]}return new class extends G{constructor(t){super(),z(this,t,X,W,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
