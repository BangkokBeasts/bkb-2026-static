import{At as e,E as t,F as n,H as r,L as i,U as a,V as o,_ as s,a as c,at as l,b as u,c as d,et as f,ft as p,g as m,ht as h,q as g,st as _,ut as v}from"./BOCfegux.js";import"./xihTtKlq.js";import{t as y}from"./DBTdifsy.js";var b=i(`<div role="presentation"><div class="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"></div> <div class="pointer-events-none absolute z-10 transition-opacity duration-500"></div> <div class="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"></div> <div class="relative z-0 h-full w-full" style="border-radius: inherit;"><!></div></div>`);function x(i,o){let x=c(o,`class`,3,``),S=c(o,`animate`,3,!1),C=c(o,`color`,3,`primary`),w=c(o,`customColor`,3,``),T=c(o,`glowSize`,3,200),E=c(o,`borderWidth`,3,1.5),D=c(o,`glowOpacity`,3,.6),ee=c(o,`staticBorderOpacity`,3,.15),O=c(o,`hoverStaticBorderOpacity`,3,.5),k=c(o,`staticBorderColor`,3,``),A=c(o,`useCssBorder`,3,!1),j=c(o,`bgGlowOpacity`,3,.08),M=c(o,`intensity`,3,1),N=p(null),P=p(50),F=p(50),I=p(!1),L=h(()=>w()||`var(--color-${C()})`),R=h(()=>k()||g(L)),z=h(()=>A()?`inset: -${E()}px;`:`inset: 0px;`),B=null;function V(e){g(N)&&(B||=g(N).getBoundingClientRect(),v(P,(e.clientX-B.left)/B.width*100),v(F,(e.clientY-B.top)/B.height*100))}function H(){v(I,!0),g(N)&&(B=g(N).getBoundingClientRect())}function U(){v(I,!1),B=null}let W=h(()=>D()*M()),G=h(()=>j()*M()),K=h(()=>A()?0:ee()),q=h(()=>A()?0:O()),J=h(()=>g(I)?g(q):g(K));var Y=b(),X=l(Y),Z=_(X,2),Q=_(Z,2),$=_(Q,2);t(l($),()=>o.children),e($),e(Y),d(Y,e=>v(N,e),()=>g(N)),u(Y,(e,t)=>y?.(e,t),S),f(()=>{s(Y,1,`glow-card relative rounded-box ${x()??``}`,`svelte-arf4ao`),m(Y,`--glow-x: ${g(P)??``}%; --glow-y: ${g(F)??``}%; --glow-size: ${T()??``}px;`),m(X,`
			border-radius: inherit;
			background: radial-gradient(var(--glow-size) circle at var(--glow-x) var(--glow-y), ${g(L)??``}, transparent 80%);
			opacity: ${(g(I)?g(G):0)??``};
		`),m(Z,`
			${g(z)??``}
			border-radius: inherit;
			padding: ${E()??``}px;
			background: radial-gradient(var(--glow-size) circle at var(--glow-x) var(--glow-y), ${g(L)??``}, transparent 60%);
			opacity: ${(g(I)?g(W):0)??``};
			-webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000);
			-webkit-mask-composite: xor;
			mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000);
			mask-composite: exclude;
		`),m(Q,`border-radius: inherit; box-shadow: inset 0 0 0 ${E()??``}px ${g(R)??``}; opacity: ${g(J)??``};`)}),r(`mousemove`,Y,V),a(`mouseenter`,Y,H),a(`mouseleave`,Y,U),n(i,Y)}o([`mousemove`]);export{x as t};