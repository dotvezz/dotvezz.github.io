(this.webpackJsonpl0g1c=this.webpackJsonpl0g1c||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),l=n.n(i),o=(n(15),n(9)),c=n(1),s=n(2),u=n(4),f=n(3),p=n(6),h=n(5),g=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,[{key:"getOutput",value:function(){return!1}}]),e}(),m=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(f.a)(t).call(this))).parents=[null],e.componentPosition={x:null,y:null},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getOutput",value:function(){return null!==this.parents[0]&&this.parents[0].getOutput()}}]),t}(g),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(f.a)(t).call(this))).state=!1,e.componentPosition={x:null,y:null},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.state=!this.state}},{key:"getOutput",value:function(){return this.state}}]),t}(g),d="AND",v="NAND",O="NOR",b="NOT",k="OR",E="XNOR",w="XOR",j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this))).gateType=e,n.parents=[null,null],n.componentPosition={x:0,y:0},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getOutput",value:function(){var e=this.outputOf(0),t=this.outputOf(1);switch(this.gateType){case b:return!e;case d:return e&&t;case v:return!(e&&t);case k:return e||t;case O:return!(e||t);case w:return e!==t;case E:return e===t;default:return!1}}},{key:"outputOf",value:function(e){return null!==this.parents[e]&&this.parents[e].getOutput()}}]),t}(g);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M=a.a.createElement("rect",{fill:"#fff",width:"100%",height:"100%"}),R=a.a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:2,d:"M70 25h15M30 15H5M30 35H5"}),L=a.a.createElement("path",{d:"M30 5V45H50.47619c11.267908 0 20-9.000045 20-20s-8.732091-20-20-20H30zm2.857143 2.857143H50.47619c9.760663 0 16.666667 7.639955 16.666667 17.142857 0 9.502902-7.382195 17.142857-17.142857 17.142857H32.857143V7.857143z"}),S=function(e){var t=e.svgRef,n=e.title,r=P(e,["svgRef","title"]);return a.a.createElement("svg",x({width:90,height:50,ref:t},r),n?a.a.createElement("title",null,n):null,M,R,L)},C=a.a.forwardRef((function(e,t){return a.a.createElement(S,x({svgRef:t},e))}));n.p;function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N=a.a.createElement("rect",{fill:"#fff",width:"100%",height:"100%"}),G=function(e){var t=e.svgRef,n=e.title,r=T(e,["svgRef","title"]);return a.a.createElement("svg",W({height:50,width:90,ref:t},r),n?a.a.createElement("title",null,n):null,N,a.a.createElement("path",{style:{stroke:"#000000",strokeWidth:2,strokeMiterlimit:4,fill:"none"},d:"M 74.1111,25.0 C 87.6222,25.0 91.0,25.0 91.0,25.0"}),a.a.createElement("path",{style:{stroke:"#000000",strokeWidth:2,strokeMiterlimit:4,fill:"none"},d:"M 27.0,15.0 L 1.0,15.0"}),a.a.createElement("path",{style:{stroke:"#000000",strokeWidth:2,strokeMiterlimit:4,fill:"none"},d:"M 28.0,35.0 L 1.0,35.0"}),a.a.createElement("path",{style:{fill:"#000000"},d:"M 26.0,5.0 L 26.0,6.4286 26.0,43.5714 26.0,45.0 27.4286,45.0 46.4762,45.0 C 57.7441,45.0 66.4762,36.0 66.4762,25.0 66.4762,14.0 57.7441,5.0 46.4762,5.0 46.4762,5.0 46.4762,5.0 27.4286,5.0 L 26.0,5.0 Z M 28.8571,7.8571 C 36.8343,7.8571 41.9184,7.8571 44.0952,7.8571 45.2857,7.8571 45.881,7.8571 46.1786,7.8571 46.3274,7.8571 46.4092,7.8571 46.4464,7.8571 46.465,7.8571 46.4715,7.8571 46.4762,7.8571 56.2369,7.8571 63.1429,15.4971 63.1429,25.0 63.1429,34.5029 55.7607,42.1429 46.0,42.1429 L 28.8571,42.1429 28.8571,7.8571 Z"}),a.a.createElement("path",{style:{stroke:"#000000",strokeWidth:2,strokeMiterlimit:4,fill:"none"},d:"M 74.0,25.0 C 74.0,27.2088 72.2088,29.0 70.0,29.0 67.7912,29.0 66.0,27.2088 66.0,25.0 66.0,22.7912 67.7912,21.0 70.0,21.0 72.2088,21.0 74.0,22.7912 74.0,25.0 Z"}))},I=a.a.forwardRef((function(e,t){return a.a.createElement(G,W({svgRef:t},e))}));n.p;function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var V=a.a.createElement("rect",{fill:"#fff",width:"100%",height:"100%"}),X=a.a.createElement("path",{strokeWidth:2,stroke:"#000",d:"M 67,25 L 87,25 85,25"}),D=a.a.createElement("path",{strokeWidth:2,stroke:"#000",d:"M 28,15 L 2,15.0"}),H=a.a.createElement("path",{strokeWidth:2,stroke:"#000",d:"M 29,35 L 2,35.0"}),z=a.a.createElement("path",{strokeWidth:0,stroke:"#000",d:"M 21.625,5.0 L 23.625,7.4375 C 23.625,7.4375 29.2813,14.4375 29.2813,25.0 29.2813,35.5625 23.625,42.5625 23.625,42.5625 L 21.625,45.0 24.7813,45.0 38.7813,45.0 C 41.1893,45.0 46.4709,45.0245 52.4063,42.5938 58.3416,40.163 64.9428,35.2505 70.0938,25.7188 L 68.7813,25.0 70.0938,24.2813 C 59.7906,5.2156 43.5378,5.0 38.7813,5.0 L 24.7813,5.0 21.625,5.0 Z M 27.5,8.0 L 38.7813,8.0 C 43.4654,8.0 57.0681,7.8698 66.75,25.0 61.9832,33.4291 56.2287,37.6839 51.0313,39.8125 45.6706,42.0079 41.1893,42.0 38.7813,42.0 L 27,42.0 C 29.4048,38.8916 32.2813,32.9506 32.2813,25.0 32.2813,17.0266 29.3727,11.0998 27.5,8.0 Z"}),Y=function(e){var t=e.svgRef,n=e.title,r=Z(e,["svgRef","title"]);return a.a.createElement("svg",A({height:50,width:90,ref:t},r),n?a.a.createElement("title",null,n):null,V,X,D,H,z)},F=a.a.forwardRef((function(e,t){return a.a.createElement(Y,A({svgRef:t},e))}));n.p;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var B=a.a.createElement("rect",{fill:"#fff",width:"100%",height:"100%"}),q=a.a.createElement("path",{stroke:"#000",strokeWidth:2,d:"M 78.2032,25.0 C 99.2945,25.0 95.0763,25.0 95.0763,25.0"}),K=a.a.createElement("path",{stroke:"#000",strokeWidth:2,d:"M 31.0763,15.0 L 5.0763,15.0"}),Q=a.a.createElement("path",{stroke:"#000",strokeWidth:2,d:"M 32.0763,35.0 L 5.0763,35.0"}),$=a.a.createElement("path",{d:"M 24.3131,5.0 L 26.3131,7.4375 C 26.3131,7.4375 31.9693,14.4375 31.9693,25.0 31.9693,35.5625 26.3131,42.5625 26.3131,42.5625 L 24.3131,45.0 27.4693,45.0 41.4693,45.0 C 43.8774,45.0 49.159,45.0245 55.0943,42.5938 60.5951,40.341 66.6678,35.9565 71.628,27.7389 L 70.4693,25.0 71.6302,22.2672 C 61.3071,5.2001 46.0522,5.0 41.4693,5.0 L 27.4693,5.0 24.3131,5.0 Z M 30.1881,8.0 L 41.4693,8.0 C 46.1535,8.0 59.7562,7.8698 69.4381,25.0 64.6713,33.4291 58.9168,37.6839 53.7193,39.8125 48.3587,42.0079 43.8774,42.0 41.4693,42.0 L 30.2193,42.0 C 32.0929,38.8916 34.9693,32.9506 34.9693,25.0 34.9693,17.0266 32.0608,11.0998 30.1881,8.0 Z"}),_=a.a.createElement("path",{stroke:"#000",strokeWidth:2,fill:"#fff",d:"M 78.2193,25.0 C 78.2193,27.2088 76.4281,29.0 74.2193,29.0 72.0106,29.0 70.2193,27.2088 70.2193,25.0 70.2193,22.7912 72.0106,21.0 74.2193,21.0 76.4281,21.0 78.2193,22.7912 78.2193,25.0 Z"}),ee=function(e){var t=e.svgRef,n=e.title,r=J(e,["svgRef","title"]);return a.a.createElement("svg",U({height:50,width:90,ref:t},r),n?a.a.createElement("title",null,n):null,B,q,K,Q,$,_)},te=a.a.forwardRef((function(e,t){return a.a.createElement(ee,U({svgRef:t},e))}));n.p;function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ae=a.a.createElement("rect",{fill:"#fff",width:"100%",height:"100%"}),ie=a.a.createElement("path",{strokeWidth:2,stroke:"#000",d:"M 5,25 L 25,25"}),le=a.a.createElement("path",{strokeWidth:2,stroke:"#000",fill:"#fff",d:"M 60,25 L 85,25"}),oe=a.a.createElement("path",{strokeWidth:2,stroke:"#000",fill:"#fff",d:"M 25,5 L 55,25 25,45 25,10 Z"}),ce=a.a.createElement("circle",{stroke:"#000",strokeWidth:2,fill:"#fff",cx:60,cy:25,r:5}),se=function(e){var t=e.svgRef,n=e.title,r=re(e,["svgRef","title"]);return a.a.createElement("svg",ne({height:50,width:90,ref:t},r),n?a.a.createElement("title",null,n):null,ae,ie,le,oe,ce)},ue=a.a.forwardRef((function(e,t){return a.a.createElement(se,ne({svgRef:t},e))}));n.p;function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var he=a.a.createElement("rect",{fill:"#fff",width:"100%",height:"100%"}),ge=function(e){var t=e.svgRef,n=e.title,r=pe(e,["svgRef","title"]);return a.a.createElement("svg",fe({height:50,width:90,ref:t},r),n?a.a.createElement("title",null,n):null,he,a.a.createElement("path",{style:{stroke:"#000000",strokeWidth:2,strokeMiterlimit:4,fill:"none"},d:"M 66.0,25.0 L 91.0,25.0 M 26.3857,15.0 L 1.0,15.0 M 27.3621,35.0 L 1.0,35.0"}),a.a.createElement("path",{style:{fillRule:"evenodd",fill:"#000000"},d:"M 20.25,42.0 C 18.6526,44.6444 18.0,45.0 18.0,45.0 L 14.3438,45.0 16.3438,42.5625 C 16.3438,42.5625 22.0,35.5624 22.0,25.0 22.0,14.4376 16.3438,7.4375 16.3438,7.4375 L 14.3438,5.0 18.0,5.0 C 18.7813,5.9375 19.4219,6.6563 20.2188,8.0 22.0915,11.0998 25.0,17.0267 25.0,25.0 25.0,32.9507 22.1033,38.8794 20.25,42.0 Z"}),a.a.createElement("path",{style:{fillRule:"evenodd",fill:"#000000"},d:"M 20.0938,5.0 L 22.0938,7.4375 C 22.0938,7.4375 27.75,14.4375 27.75,25.0 27.75,35.5624 22.0938,42.5625 22.0938,42.5625 L 20.0938,45.0 37.25,45.0 C 39.6581,45.0 44.9397,45.0245 50.875,42.5938 56.8103,40.163 63.4115,35.2505 68.5625,25.7188 L 67.25,25.0 68.5625,24.2813 C 58.2594,5.2156 42.0066,5.0 37.25,5.0 L 20.0938,5.0 Z M 25.9688,8.0 L 37.25,8.0 C 41.9342,8.0 55.5369,7.8698 65.2188,25.0 60.452,33.4291 54.6975,37.6839 49.5,39.8125 44.1393,42.0079 39.6581,42.0 37.25,42.0 L 26.0,42.0 C 27.8736,38.8916 30.75,32.9506 30.75,25.0 30.75,17.0267 27.8415,11.0998 25.9688,8.0 Z"}))},me=a.a.forwardRef((function(e,t){return a.a.createElement(ge,fe({svgRef:t},e))}));n.p;function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function de(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ve=a.a.createElement("rect",{fill:"#fff",width:"100%",height:"100%"}),Oe=a.a.createElement("path",{d:"m4.311501,15.40472l29.460474,0",stroke:"#000000",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:2.5}),be=a.a.createElement("path",{d:"m4.311501,35.57071l29.460474,0",stroke:"#000000",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:2.5}),ke=a.a.createElement("path",{d:"m55.561192,25.487731l29.460507,0",stroke:"#000000",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:2.5}),Ee=a.a.createElement("path",{d:"m20.91201,45.976899c-0.032602,0.001406 9.761837,-1.922422 9.761837,-20.4892c0,-18.749516 -9.762578,-20.489232 -9.761837,-20.489168c15.76976,1.878047 26.040188,-0.78162 36.89356,20.4892c-8.092769,18.807628 -18.706133,19.70036 -36.89356,20.489168z",fill:"#ffffff",fillRule:"evenodd",stroke:"#000000",strokeMiterlimit:4,strokeWidth:2.5}),we=a.a.createElement("path",{d:"m68.476762,25.487731c0,2.877004 -2.352784,5.210203 -5.25401,5.210203c-2.901226,0 -5.25401,-2.333199 -5.25401,-5.210203c0,-2.877036 2.352784,-5.210235 5.25401,-5.210235c2.901226,0 5.25401,2.333199 5.25401,5.210235z",fill:"#ffffff",fillRule:"evenodd",stroke:"#000000",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:2.5}),je=a.a.createElement("path",{d:"m11.218825,45.483188c-0.035695,0.001374 10.69239,-1.876099 10.69239,-19.995456c0,-18.297751 -10.693195,-19.995552 -10.69239,-19.995488",fill:"none",stroke:"#000000",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:2.5}),xe=function(e){var t=e.svgRef,n=e.title,r=de(e,["svgRef","title"]);return a.a.createElement("svg",ye({height:50,width:90,ref:t},r),n?a.a.createElement("title",null,n):null,ve,Oe,be,ke,Ee,we,je)},Pe=a.a.forwardRef((function(e,t){return a.a.createElement(xe,ye({svgRef:t},e))})),Me=(n.p,function(e){return e.stopPropagation()}),Re=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={hovered:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("circle",Object.assign({r:5,onMouseDown:Me,onMouseUp:Me},this.props,{fill:this.state.hovered?"#0a0":"#000",onMouseEnter:function(){return e.setState({hovered:!0})},onMouseLeave:function(){return e.setState({hovered:!1})}}))}}]),t}(r.Component),Le=function(e){function t(e){var n;return Object(c.a)(this,t),n=Object(u.a)(this,Object(f.a)(t).call(this,e)),e.gate.componentPosition.x=50,e.gate.componentPosition.y=50,n.state={x:50,y:50,moving:!1,mousePrevX:0,mousePrevY:0},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props,i=n.gate,l=n.clickNode,o=this.state,c=o.x,s=o.y,u=o.moving,f=o.mousePrevX,p=o.mousePrevY;switch(i.gateType){case d:e=C;break;case v:e=I;break;case k:e=F;break;case O:e=te;break;case b:e=ue;break;case w:e=me;break;case E:e=Pe;break;default:e=null}return a.a.createElement("svg",{x:c,y:s,onMouseDown:function(){t.setState({moving:!0})},onMouseUp:function(){t.setState({moving:!1})},onMouseMove:function(e){var n=e.clientX,r=e.clientY;if(u){var a={x:c-(f-n),y:s-(p-r)};t.setState(a),i.componentPosition.x=a.x,i.componentPosition.y=a.y}t.setState({mousePrevY:r,mousePrevX:n})}},a.a.createElement(e,null),i.gateType===b?a.a.createElement(Re,{cx:5,cy:25,onClick:function(){l({x:c+5,y:s+25},i,0)}}):a.a.createElement(r.Fragment,null,a.a.createElement(Re,{cx:5,cy:15,onClick:function(){l({x:c+5,y:s+15},i,0)}}),a.a.createElement(Re,{cx:5,cy:35,onClick:function(){l({x:c+5,y:s+35},i,1)}})),a.a.createElement(Re,{cx:85,cy:25,onClick:function(){l({x:c+85,y:s+25},i,-1)}}),u?a.a.createElement("rect",{width:"90",height:"50",fillOpacity:0,stroke:"green",strokeWidth:3}):null)}}]),t}(r.Component);function Se(){return(Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ce(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var We=a.a.createElement("circle",{fill:"#000",strokeWidth:2,stroke:"#000",r:15,cx:25,cy:25}),Te=function(e){var t=e.svgRef,n=e.title,r=Ce(e,["svgRef","title"]);return a.a.createElement("svg",Se({height:50,width:50,ref:t},r),n?a.a.createElement("title",null,n):null,We)},Ne=a.a.forwardRef((function(e,t){return a.a.createElement(Te,Se({svgRef:t},e))}));n.p;function Ge(){return(Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ie(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ae=a.a.createElement("circle",{fill:"#0a0",strokeWidth:2,stroke:"#000",r:15,cx:25,cy:25}),Ze=function(e){var t=e.svgRef,n=e.title,r=Ie(e,["svgRef","title"]);return a.a.createElement("svg",Ge({height:50,width:50,ref:t},r),n?a.a.createElement("title",null,n):null,Ae)},Ve=a.a.forwardRef((function(e,t){return a.a.createElement(Ze,Ge({svgRef:t},e))})),Xe=(n.p,function(e){var t=e.light,n=e.x,r=e.y,i=e.clickNode;return a.a.createElement("svg",{x:n,y:r},t.componentPosition.x=n,t.componentPosition.y=r,t.getOutput()?a.a.createElement(Ve,null):a.a.createElement(Ne,null),a.a.createElement(Re,{cx:5,cy:25,onClick:function(){i({x:n+5,y:r+25},t,0)}}))});function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function He(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ze=a.a.createElement("rect",{fill:"#fff",width:"100%",height:"100%"}),Ye=a.a.createElement("rect",{fill:"#fff",strokeWidth:2,stroke:"#000",x:5,y:17,width:40,height:16}),Fe=a.a.createElement("rect",{fill:"#0a0",strokeWidth:2,stroke:"#000",x:25,y:10,width:12,height:29}),Ue=function(e){var t=e.svgRef,n=e.title,r=He(e,["svgRef","title"]);return a.a.createElement("svg",De({height:50,width:50,ref:t},r),n?a.a.createElement("title",null,n):null,ze,Ye,Fe)},Je=a.a.forwardRef((function(e,t){return a.a.createElement(Ue,De({svgRef:t},e))}));n.p;function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function qe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ke=a.a.createElement("rect",{fill:"#fff",width:"100%",height:"100%"}),Qe=a.a.createElement("rect",{fill:"#fff",strokeWidth:2,stroke:"#000",x:5,y:17,width:40,height:16}),$e=a.a.createElement("rect",{fill:"#000",strokeWidth:2,stroke:"#000",x:10,y:10,width:12,height:29}),_e=function(e){var t=e.svgRef,n=e.title,r=qe(e,["svgRef","title"]);return a.a.createElement("svg",Be({height:50,width:50,ref:t},r),n?a.a.createElement("title",null,n):null,Ke,Qe,$e)},et=a.a.forwardRef((function(e,t){return a.a.createElement(_e,Be({svgRef:t},e))})),tt=(n.p,function(e){var t=e.x,n=e.y,r=e.sw,i=e.update,l=e.clickNode;return a.a.createElement("svg",{onClick:function(){r.toggle(),i()},x:t,y:n},r.componentPosition.x=t,r.componentPosition.y=n,r.getOutput()?a.a.createElement(Je,null):a.a.createElement(et,null),a.a.createElement(Re,{cx:45,cy:25,onClick:function(e){e.stopPropagation(),l({x:t+45,y:n+25},r,-1)}}))}),nt=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={cursorPos:{x:null,y:null}},n.mouseMove=n.mouseMove.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"mouseMove",value:function(e){this.setState({cursorPos:{x:e.clientX,y:e.clientY-145}})}},{key:"render",value:function(){var e=this,t=this.props,n=t.gates,r=t.lights,i=t.switches,l=t.update,o=t.clickNode,c=t.drawing,s=t.drawingPos,u=s.x,f=s.y,p=this.state.cursorPos,h=p.x,g=p.y;return a.a.createElement("svg",{height:600,width:1e3,style:{border:"1px solid black"},onMouseMove:function(t){return e.mouseMove(t)}},n.map((function(e){return e.parents.map((function(t,n){if(null===t)return null;var r=e.componentPosition.x+5,i="gateType"in e&&e.gateType!==b?e.componentPosition.y+15+20*n:e.componentPosition.y+25,l="gateType"in t?t.componentPosition.x+85:t.componentPosition.x+45,o=t.componentPosition.y+25;return a.a.createElement("path",{strokeWidth:"2",stroke:t.getOutput()?"#0a0":"#000",d:"M ".concat(r,",").concat(i," L ").concat(l,",").concat(o)})}))})),r.map((function(e){return e.parents.map((function(t,n){if(null===t)return null;var r=e.componentPosition.x+5,i="gateType"in e&&e.gateType!==b?e.componentPosition.y+15+20*n:e.componentPosition.y+25,l="gateType"in t?t.componentPosition.x+85:t.componentPosition.x+45,o=t.componentPosition.y+25;return a.a.createElement("path",{strokeWidth:"2",stroke:t.getOutput()?"#0a0":"#000",d:"M ".concat(r,",").concat(i," L ").concat(l,",").concat(o)})}))})),n.map((function(e){return a.a.createElement(Le,{gate:e,clickNode:o})})),r.map((function(e,t){return a.a.createElement(Xe,{light:e,x:950,y:10+75*t,clickNode:o})})),i.map((function(e,t){return a.a.createElement(tt,{update:l,sw:e,x:0,y:10+75*t,clickNode:o})})),c&&a.a.createElement("path",{strokeWidth:"2",stroke:"#000",d:"M ".concat(u,",").concat(f," L ").concat(h,",").concat(g)}),"}")}}]),t}(r.Component);nt.defaultProps={lights:[],switches:[],gates:[]};var rt=nt,at=(n(16),function(e){var t=e.onClick,n=e.children,i=e.label;return a.a.createElement("div",{style:{cursor:"pointer",textAlign:"center",fontSize:"18pt",marginTop:"5px",border:"2px outset black",borderRadius:"4px",marginLeft:"5px",width:"90px",height:"50px",userSelect:"none",display:"inline-block"},onClick:t},a.a.createElement(r.Fragment,null,n,a.a.createElement("p",{style:{textAlign:"center",marginTop:"-5px"}},i)))});at.defaultProps={onClick:function(){},label:""};var it=at,lt=["Try out each gate and see what they do.","Try to make a complex gate out of simple gates.","Try to make some form of memory.","Try to make a basic binary calculator."],ot=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={i:0},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"next",value:function(){for(var e=this.state.i+1;e>lt.length-1;)e-=lt.length;this.setState({i:e})}},{key:"prev",value:function(){for(var e=this.state.i-1;e<0;)e+=lt.length;this.setState({i:e})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{style:{width:1e3,height:75,border:"1px solid black",paddingTop:10}},a.a.createElement("div",{style:{display:"inline-block",textAlign:"center",width:"15%"}},a.a.createElement(it,{onClick:function(){return e.prev()}},a.a.createElement("p",{style:{marginTop:8}},"<"))),a.a.createElement("div",{style:{display:"inline-block",textAlign:"center",width:"70%"}},lt[this.state.i]),a.a.createElement("div",{style:{display:"inline-block",textAlign:"center",width:"15%"}},a.a.createElement(it,{onClick:function(){return e.next()}},a.a.createElement("p",{style:{marginTop:8}},">"))))}}]),t}(r.Component),ct=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={gates:[],switches:Array.from("12345678").map((function(){return new y})),lights:Array.from("12345678").map((function(){return new m})),drawing:!1,drawingGate:null,drawingI:null,drawingPos:{x:null,y:null}},n.clickNode=n.clickNode.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"addGate",value:function(e){this.setState({gates:[].concat(Object(o.a)(this.state.gates),[new j(e)])})}},{key:"startDrawing",value:function(e,t,n){n>=0&&(t.parents[n]=null),this.setState({drawingPos:e,drawing:!0,drawingGate:t,drawingI:n})}},{key:"connect",value:function(e,t){var n=this.state,r=n.drawingI,a=n.drawingGate;r>=0&&-1===t?a.parents[r]=e:-1===r&&t>=0&&(e.parents[t]=a),this.setState({drawingPos:{x:null,y:null},drawing:!1,drawingGate:null,drawingI:null})}},{key:"clickNode",value:function(e,t,n){this.state.drawing?this.connect(t,n):this.startDrawing(e,t,n)}},{key:"clearGates",value:function(){this.setState({gates:[],switches:Array.from("12345678").map((function(){return new y})),lights:Array.from("12345678").map((function(){return new m}))})}},{key:"render",value:function(){var e=this,t=this.state,n=t.gates,i=t.switches,l=t.lights,o=t.drawing,c=t.drawingPos;return a.a.createElement(r.Fragment,null,a.a.createElement("div",{style:{height:"130px",width:"1000px"}},a.a.createElement("div",{style:{width:"700px",float:"left"}},a.a.createElement("p",{style:{textAlign:"center"}},"Click to add gates to the board:"),[{gateType:d,SVG:C},{gateType:v,SVG:I},{gateType:k,SVG:F},{gateType:O,SVG:te},{gateType:b,SVG:ue},{gateType:w,SVG:me},{gateType:E,SVG:Pe}].map((function(t){var n=t.gateType,r=t.SVG;return a.a.createElement(it,{label:n,onClick:function(){return e.addGate(n)}},a.a.createElement(r,null))}))),a.a.createElement("div",{style:{float:"right"}},a.a.createElement("p",null,"\xa0"),a.a.createElement(it,{onClick:function(){return e.clearGates()}},a.a.createElement("div",{style:{paddingTop:"7px"}},"Reset")))),a.a.createElement(rt,{update:function(){return e.forceUpdate()},clickNode:function(t,n,r){return e.clickNode(t,n,r)},gates:n,switches:i,lights:l,drawing:o,drawingPos:c}),a.a.createElement(ot,null))}}]),t}(r.Component);l.a.render(a.a.createElement(ct,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8fca9a95.chunk.js.map