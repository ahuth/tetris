(this.webpackJsonptetris=this.webpackJsonptetris||[]).push([[0],{13:function(e,t,n){e.exports=n(21)},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(10),a=n.n(c),i=(n(18),n(2));function u(e){var t=e.color,n=Object(r.useMemo)((function(){return function(e){return{backgroundColor:e}}(t)}),[t]);return o.a.createElement("div",{style:n})}var l=n(12),s=n(1),f=n(5);function v(e,t){return{x:e,y:t}}var b,d,p=n(11);function h(e){return{type:e,orientation:d.Up}}function m(e){return O[e.type][e.orientation]}!function(e){e.L="L",e.I="I",e.T="T",e.S="S",e.Z="Z",e.O="O",e.J="J"}(b||(b={})),function(e){e[e.Up=0]="Up",e[e.Right=1]="Right",e[e.Down=2]="Down",e[e.Left=3]="Left"}(d||(d={}));var g,O={[b.L]:{[d.Up]:[[0,0,1],[1,1,1],[0,0,0]],[d.Right]:[[0,1,0],[0,1,0],[0,1,1]],[d.Down]:[[0,0,0],[1,1,1],[1,0,0]],[d.Left]:[[1,1,0],[0,1,0],[0,1,0]]},[b.I]:{[d.Up]:[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[d.Right]:[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[d.Down]:[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[d.Left]:[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]]},[b.T]:{[d.Up]:[[0,1,0],[1,1,1],[0,0,0]],[d.Right]:[[0,1,0],[0,1,1],[0,1,0]],[d.Down]:[[0,0,0],[1,1,1],[0,1,0]],[d.Left]:[[0,1,0],[1,1,0],[0,1,0]]},[b.S]:{[d.Up]:[[0,1,1],[1,1,0],[0,0,0]],[d.Right]:[[0,1,0],[0,1,1],[0,0,1]],[d.Down]:[[0,0,0],[0,1,1],[1,1,0]],[d.Left]:[[1,0,0],[1,1,0],[0,1,0]]},[b.Z]:{[d.Up]:[[1,1,0],[0,1,1],[0,0,0]],[d.Right]:[[0,0,1],[0,1,1],[0,1,0]],[d.Down]:[[0,0,0],[1,1,0],[0,1,1]],[d.Left]:[[0,1,0],[1,1,0],[1,0,0]]},[b.O]:{[d.Up]:[[1,1],[1,1]],[d.Right]:[[1,1],[1,1]],[d.Down]:[[1,1],[1,1]],[d.Left]:[[1,1],[1,1]]},[b.J]:{[d.Up]:[[1,0,0],[1,1,1],[0,0,0]],[d.Right]:[[0,1,1],[0,1,0],[0,1,0]],[d.Down]:[[0,0,0],[1,1,1],[0,0,1]],[d.Left]:[[0,1,0],[0,1,0],[1,1,0]]}};function j(){return Object(f.shuffle)(Object.keys(b))}function y(e){var t=Object(p.a)(e),n=t[0],r=t.slice(1);return r.length>0?[n,r]:[n,j()]}function w(){var e=y(j()),t=Object(i.a)(e,2),n=t[0],r=y(t[1]),o=Object(i.a)(r,2),c=o[0],a=o[1];return{board:k(20,10),current:h(n),level:0,next:h(c),position:v(3,0),randomizer:a,score:0,state:g.Playing}}function E(e){var t=function(e,t,n,r,o,c,a,u){var s,b=v(o.x,o.y+1);if(D(e,t,b))return[e,t,n,r,b,c,a,u];if(function(e){return 0===e.y}(o))return[e,t,n,r,o,c,a,g.Lost];var d=x(e,t,o,1),p=function(e){for(var t=0,n=e,r=!1,o=e.length/e.columns,c=0;c<o;c++)for(var a=0;a<e.columns;a++){var i=v(a,c),u=M(e,i);if(0===A(e,u))break;if(a===e.columns-1){var s;t+=1,r||(r=!0,n=U(n));var b=v(0,c),d=M(e,b);n.fill.splice(d,e.columns);var p=Object(f.fill)(new Array(e.columns),0,0);(s=n.fill).unshift.apply(s,Object(l.a)(p))}}return[n,t]}(d),m=Object(i.a)(p,2);d=m[0],s=m[1],d.linesCleared=d.linesCleared+s;var O=y(c),j=Object(i.a)(O,2),w=j[0],E=j[1],k=h(w),L=v(3,0),R=a+function(e,t){switch(e){case 0:return 0;case 1:return 40*(t+1);case 2:return 100*(t+1);case 3:return 300*(t+1);case 4:return 1200*(t+1);default:return 0}}(s,n),C=Math.floor(d.linesCleared/10);return[d,r,C,k,L,E,R,u]}(e.board,e.current,e.level,e.next,e.position,e.randomizer,e.score,e.state),n=Object(i.a)(t,8),r=n[0],o=n[1],c=n[2],a=n[3],u=n[4],b=n[5],d=n[6],p=n[7];return Object(s.a)(Object(s.a)({},e),{},{board:r,current:o,level:c,next:a,position:u,randomizer:b,score:d,state:p})}function k(e,t){var n=Object(f.fill)(new Array(e*t),0,0);return{columns:t,fill:n,length:n.length,linesCleared:0}}function x(e,t,n,r){for(var o=m(t),c=U(e),a=0;a<o.length;a++)for(var i=0;i<o[a].length;i++){if(0!==o[a][i])T(c,M(e,v(n.x+i,n.y+a)),r)}return c}function L(e,t,n){var r=v(n.x-1,n.y);return D(e,t,r)?r:n}function R(e,t,n){var r=v(n.x+1,n.y);return D(e,t,r)?r:n}function C(e,t,n){var r=function(e){return Object(s.a)(Object(s.a)({},e),{},{orientation:(t=e.orientation,(t+1)%4)});var t}(t);return D(e,r,n)?r:t}function D(e,t,n){for(var r=m(t),o=e.columns-1,c=e.length/e.columns-1,a=0;a<r.length;a++)for(var i=0;i<r[a].length;i++)if(0!==r[a][i]){if(n.x+i<0||n.x+i>o)return!1;if(n.y+a<0||n.y+a>c)return!1;if(1===A(e,M(e,v(n.x+i,n.y+a))))return!1}return!0}function M(e,t){return t.x+t.y*e.columns}function U(e){return Object(s.a)(Object(s.a)({},e),{},{fill:e.fill.slice()})}function A(e,t){return e.fill[t]}function T(e,t,n){e.fill[t]=n}function I(e){var t=e.board,n=e.colors,c=e.current,a=e.height,i=e.position,l=e.width,s=Object(r.useMemo)((function(){return function(e,t,n){return{borderBottom:"1px solid grey",display:"grid",gridTemplateColumns:"repeat(".concat(e,", 1fr)"),height:t,width:n}}(t.columns,a,l)}),[t.columns,a,l]),f=x(t,c,i,2);return o.a.createElement("div",{style:s},function(e,t){return e.fill.map(t)}(f,(function(e,t){return o.a.createElement(u,{color:n[e],key:"".concat(t,"-").concat(e)})})))}function S(e){var t=e.board,n=e.children,r=e.current,c=e.position;return o.a.createElement("div",{style:P.container},o.a.createElement(I,{board:t,colors:J,current:r,height:400,position:c,width:200}),n)}!function(e){e[e.Playing=0]="Playing",e[e.Won=1]="Won",e[e.Lost=2]="Lost"}(g||(g={}));var J={0:"black",1:"dodgerblue",2:"limegreen"},P={container:{position:"relative"}},z=k(5,5),Z=v(1,1);function B(e){var t=e.next;return o.a.createElement(I,{board:z,colors:Y,current:t,height:100,position:Z,width:100})}var W,Y={0:"black",1:"dodgerblue",2:"yellow"};function q(e){var t=e.children,n=e.level,r=e.next,c=e.score;return o.a.createElement("div",null,o.a.createElement(B,{next:r}),o.a.createElement("div",null,"Level: ",n),o.a.createElement("div",null,"Score: ",c),o.a.createElement("div",null,t))}function F(e,t){Object(r.useEffect)((function(){function n(n){n.key===e&&t(n)}return document.addEventListener("keydown",n),function(){return document.removeEventListener("keydown",n)}}),[e,t])}function G(e,t){switch(t){case W.Tick:case W.MoveDown:return E(e);case W.MoveLeft:return n=e,Object(s.a)(Object(s.a)({},n),{},{position:L(n.board,n.current,n.position)});case W.MoveRight:return function(e){return Object(s.a)(Object(s.a)({},e),{},{position:R(e.board,e.current,e.position)})}(e);case W.Reset:return w();case W.Rotate:return function(e){return Object(s.a)(Object(s.a)({},e),{},{current:C(e.board,e.current,e.position)})}(e);default:return e}var n}function H(e){var t=e.dispatch,n=e.state,c=Object(r.useCallback)((function(){return t(W.Reset)}),[t]);return F(" ",c),o.a.createElement("div",{style:K.container},o.a.createElement(S,{board:n.board,current:n.current,position:n.position},o.a.createElement("span",{style:K.text},"You lost!")),o.a.createElement(q,{level:n.level,next:n.next,score:n.score},o.a.createElement("button",{onClick:c},"Reset")))}!function(e){e.MoveDown="down",e.MoveLeft="left",e.MoveRight="right",e.Reset="reset",e.Rotate="rotate",e.Start="start",e.Stop="stop",e.Tick="tick"}(W||(W={}));var K={container:{display:"flex"},text:{backgroundColor:"whitesmoke",color:"black",display:"block",position:"absolute",textAlign:"center",top:"50%",width:"100%"}};function N(e){var t=e.dispatch,n=e.state,c=Object(r.useCallback)((function(){return t(W.Rotate)}),[t]),a=Object(r.useCallback)((function(){return t(W.MoveDown)}),[t]),i=Object(r.useCallback)((function(){return t(W.MoveLeft)}),[t]),u=Object(r.useCallback)((function(){return t(W.MoveRight)}),[t]),l=Object(r.useCallback)((function(){return t(W.Tick)}),[t]);return F("ArrowUp",c),F("ArrowDown",a),F("ArrowLeft",i),F("ArrowRight",u),function(e,t){var n=Object(r.useRef)(e);Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){var e=setInterval(n.current,t);return function(){return clearInterval(e)}}),[t,n])}(l,function(e){switch(e){case 0:return 750;case 1:return 650;case 2:return 550;case 3:return 450;case 4:return 350;case 5:return 250;default:return 150}}(n.level)),o.a.createElement("div",{style:Q.container},o.a.createElement(S,{board:n.board,current:n.current,position:n.position}),o.a.createElement(q,{level:n.level,next:n.next,score:n.score}))}var Q={container:{display:"flex"}};var V=w();a.a.render(o.a.createElement((function(){var e=Object(r.useReducer)(G,V),t=Object(i.a)(e,2),n=t[0],c=t[1];switch(n.state){case g.Lost:return o.a.createElement(H,{dispatch:c,state:n});case g.Playing:return o.a.createElement(N,{dispatch:c,state:n});default:return null}})),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.2a5f8db6.chunk.js.map