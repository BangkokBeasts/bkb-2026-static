import{At as e,E as t,F as n,I as r,L as i,a,at as o,c as s,d as c,et as l,f as u,ft as d,g as f,ht as p,j as m,o as h,ot as g,q as _,st as v,ut as y}from"./BOCfegux.js";import"./xihTtKlq.js";var b=i(`<a><div class="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"></div> <div class="pointer-events-none absolute z-10 transition-opacity duration-300"></div> <div class="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"></div> <span class="relative z-0 flex items-center justify-center gap-2" style="border-radius: inherit;"><!></span></a>`),x=i(`<button><div class="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"></div> <div class="pointer-events-none absolute z-10 transition-opacity duration-300"></div> <div class="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"></div> <span class="relative z-0 flex items-center justify-center gap-2" style="border-radius: inherit;"><!></span></button>`);function S(i,S){let C=a(S,`class`,3,``),w=a(S,`color`,3,`primary`),T=a(S,`customColor`,3,``),E=a(S,`disabled`,3,!1),D=a(S,`glowSize`,3,180),O=a(S,`borderWidth`,3,1.5),k=a(S,`glowOpacity`,3,.55),A=a(S,`staticBorderOpacity`,3,.2),j=a(S,`hoverStaticBorderOpacity`,3,.65),M=a(S,`staticBorderColor`,3,``),N=a(S,`useCssBorder`,3,!1),P=a(S,`bgGlowOpacity`,3,.1),F=a(S,`intensity`,3,1),I=h(S,[`$$slots`,`$$events`,`$$legacy`,`children`,`class`,`color`,`customColor`,`href`,`disabled`,`glowSize`,`borderWidth`,`glowOpacity`,`staticBorderOpacity`,`hoverStaticBorderOpacity`,`staticBorderColor`,`useCssBorder`,`bgGlowOpacity`,`intensity`,`onclick`]),L=d(null),R=d(50),z=d(50),B=d(!1),V=p(()=>T()||`var(--color-${w()})`),H=p(()=>M()||_(V)),U=p(()=>N()?`inset: -${O()}px;`:`inset: 0px;`),W=p(()=>k()*F()),G=p(()=>P()*F()),K=p(()=>N()?0:A()),q=p(()=>N()?0:j()),J=p(()=>_(B)?_(q):_(K)),Y=null;function X(e){!_(L)||E()||(Y||=_(L).getBoundingClientRect(),y(R,(e.clientX-Y.left)/Y.width*100),y(z,(e.clientY-Y.top)/Y.height*100))}function Z(){y(B,!0),_(L)&&(Y=_(L).getBoundingClientRect())}function Q(){y(B,!1),Y=null}var $=r(),ee=g($),te=r=>{var i=b();u(i,()=>({href:S.href,class:`glow-btn relative inline-flex items-center justify-center overflow-hidden transition-all ${C()??``}`,style:`--glow-x: ${_(R)??``}%; --glow-y: ${_(z)??``}%; --glow-size: ${D()??``}px;`,onmousemove:X,onmouseenter:Z,onmouseleave:Q,...I,[c]:{"pointer-events-none":E(),"opacity-50":E()}}),void 0,void 0,void 0,`svelte-xgxzji`);var a=o(i),d=v(a,2),p=v(d,2),m=v(p,2);t(o(m),()=>S.children),e(m),e(i),s(i,e=>y(L,e),()=>_(L)),l(()=>{f(a,`
				border-radius: inherit;
				background: radial-gradient(var(--glow-size) circle at var(--glow-x) var(--glow-y), ${_(V)??``}, transparent 80%);
				opacity: ${(_(B)?_(G):0)??``};
			`),f(d,`
				${_(U)??``}
				border-radius: inherit;
				padding: ${O()??``}px;
				background: radial-gradient(var(--glow-size) circle at var(--glow-x) var(--glow-y), ${_(V)??``}, transparent 60%);
				opacity: ${(_(B)?_(W):0)??``};
				-webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000);
				-webkit-mask-composite: xor;
				mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000);
				mask-composite: exclude;
			`),f(p,`border-radius: inherit; box-shadow: inset 0 0 0 ${O()??``}px ${_(H)??``}; opacity: ${_(J)??``};`)}),n(r,i)},ne=r=>{var i=x();u(i,()=>({class:`glow-btn relative inline-flex items-center justify-center overflow-hidden transition-all ${C()??``}`,disabled:E(),style:`--glow-x: ${_(R)??``}%; --glow-y: ${_(z)??``}%; --glow-size: ${D()??``}px;`,onmousemove:X,onmouseenter:Z,onmouseleave:Q,onclick:S.onclick,...I,[c]:{"pointer-events-none":E(),"opacity-50":E()}}),void 0,void 0,void 0,`svelte-xgxzji`);var a=o(i),d=v(a,2),p=v(d,2),m=v(p,2);t(o(m),()=>S.children),e(m),e(i),s(i,e=>y(L,e),()=>_(L)),l(()=>{f(a,`
				border-radius: inherit;
				background: radial-gradient(var(--glow-size) circle at var(--glow-x) var(--glow-y), ${_(V)??``}, transparent 80%);
				opacity: ${(_(B)?_(G):0)??``};
			`),f(d,`
				${_(U)??``}
				border-radius: inherit;
				padding: ${O()??``}px;
				background: radial-gradient(var(--glow-size) circle at var(--glow-x) var(--glow-y), ${_(V)??``}, transparent 60%);
				opacity: ${(_(B)?_(W):0)??``};
				-webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000);
				-webkit-mask-composite: xor;
				mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000);
				mask-composite: exclude;
			`),f(p,`border-radius: inherit; box-shadow: inset 0 0 0 ${O()??``}px ${_(H)??``}; opacity: ${_(J)??``};`)}),n(r,i)};m(ee,e=>{S.href?e(te):e(ne,-1)}),n(i,$)}export{S as t};