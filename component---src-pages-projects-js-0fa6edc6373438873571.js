(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"16l3":function(e,t,r){"use strict";r.r(t);r("f3/d"),r("a1Th"),r("Btvt");var n,a,o=r("q1tI"),i=r.n(o),s=r("I/Ru"),l=r("jNNy"),c=r("Ltqf"),m=r("pc+1"),p=(r("Vd3H"),r("V+eJ"),function(){return n||"undefined"!=typeof window&&(n=window.gsap)&&n.registerPlugin&&n}),u=function(e,t){return!!(void 0===e?t:e&&!~(e+"").indexOf("false"))},f=function(e){if(n=e||p()){a=n.registerEase;var t,r=n.parseEase(),o=function(e){return function(t){var r=.5+t/2;e.config=function(t){return e(2*(1-t)*t*r+t*t)}}};for(t in r)r[t].config||o(r[t]);for(t in a("slow",x),a("expoScale",y),a("rough",E),w)"version"!==t&&n.core.globals(t,w[t]);1}},d=function(e,t,r){var n=(e=Math.min(1,e||.7))<1?t||0===t?t:.7:0,a=(1-e)/2,o=a+e,i=u(r);return function(e){var t=e+(.5-e)*n;return e<a?i?1-(e=1-e/a)*e:t-(e=1-e/a)*e*e*e*t:e>o?i?1===e?0:1-(e=(e-o)/a)*e:t+(e-t)*(e=(e-o)/a)*e*e*e:i?1:t}},g=function(e,t,r){var a=Math.log(t/e),o=t-e;return r&&(r=n.parseEase(r)),function(t){return(e*Math.exp(a*(r?r(t):t))-e)/o}},v=function(e,t,r){this.t=e,this.v=t,r&&(this.next=r,r.prev=this,this.c=r.v-t,this.gap=r.t-e)},h=function(e){"object"!=typeof e&&(e={points:+e||20});for(var t,r,a,o,i,s,l,c=e.taper||"none",m=[],p=0,f=0|(+e.points||20),d=f,g=u(e.randomize,!0),h=u(e.clamp),x=n?n.parseEase(e.template):0,y=.4*(+e.strength||1);--d>-1;)t=g?Math.random():1/f*d,r=x?x(t):t,a="none"===c?y:"out"===c?(o=1-t)*o*y:"in"===c?t*t*y:t<.5?(o=2*t)*o*.5*y:(o=2*(1-t))*o*.5*y,g?r+=Math.random()*a-.5*a:d%2?r+=.5*a:r-=.5*a,h&&(r>1?r=1:r<0&&(r=0)),m[p++]={x:t,y:r};for(m.sort((function(e,t){return e.x-t.x})),s=new v(1,1,null),d=f;d--;)i=m[d],s=new v(i.x,i.y,s);return l=new v(0,0,s.t?s:s.next),function(e){var t=l;if(e>t.t){for(;t.next&&e>=t.t;)t=t.next;t=t.prev}else for(;t.prev&&e<=t.t;)t=t.prev;return l=t,t.v+(e-t.t)/t.gap*t.c}},x=d(.7);x.ease=x,x.config=d;var y=g(1,2);y.config=g;var E=h();E.ease=E,E.config=h;var w={SlowMo:x,RoughEase:E,ExpoScaleEase:y};for(var b in w)w[b].register=f,w[b].version="3.0.4";p()&&n.registerPlugin(x);var j=r("3FIM");var W=[{name:"Watermalon",description:"lorem ipsum dolor sit amet."},{name:"Watermalon",description:"lorem ipsum dolor sit amet."},{name:"Watermalon",description:"lorem ipsum dolor sit amet."},{name:"Watermalon",description:"lorem ipsum dolor sit amet."},{name:"Watermalon",description:"lorem ipsum dolor sit amet."},{name:"Watermalon",description:"lorem ipsum dolor sit amet."},{name:"Watermalon",description:"lorem ipsum dolor sit amet."},{name:"Watermalon",description:"lorem ipsum dolor sit amet."},{name:"Watermalon",description:"lorem ipsum dolor sit amet."},{name:"Watermalon",description:"lorem ipsum dolor sit amet."}],M=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).projectRefs=[],r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.componentDidMount=function(){var e;e=this.projectRefs,Object(c.a)().staggerFromTo(e,.2,{y:5,opacity:0,scale:.5,ease:m.a.easeOut},{opacity:1,scale:1,ease:m.a.easeOut},.05,"step1").staggerTo(e,.1,{y:0,boxShadow:"0 4px 8px rgba(0,0,0,0.2)",ease:x.easeOut},.02,"step2")},a.render=function(){var e=this;return i.a.createElement(j.a.Provider,{value:j.b},i.a.createElement(s.a,null,i.a.createElement(l.a,{title:"Projects"}),i.a.createElement("h1",{className:"title"},"Meus Projetos"),i.a.createElement("hr",null),i.a.createElement("p",null,"Alguns projetos pessoais"),i.a.createElement("section",{style:{display:"flex",maxWidth:920,flexFlow:"row wrap",justifyContent:"flex-center"}},W.map((function(t,r){return i.a.createElement("article",{ref:function(t){e.projectRefs[r]=t},style:{flex:2,minWidth:250,textAlign:"center",margin:8,padding:"16px 2px",borderRadius:8,background:"rgba(var(--color-primary-rgb), .05)"},key:r.toString()},i.a.createElement("h4",null,t.name),i.a.createElement("small",null,t.description))}))),i.a.createElement("p",{style:{textAlign:"right",margin:8}},i.a.createElement("small",null,"veja mais "," ",i.a.createElement("a",{href:"https://github.com/erickvieira"},"no meu GitHub")))))},n}(i.a.Component);t.default=M}}]);
//# sourceMappingURL=component---src-pages-projects-js-0fa6edc6373438873571.js.map