(this["webpackJsonpdraggable-component"]=this["webpackJsonpdraggable-component"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(1),c=n.n(r),l=n(4),o=n.n(l),a=(n(10),n(11),n(3)),u=function(t){var e=t.children,n=t.onDrag,c=Object(r.useState)({top:0,left:0}),l=Object(a.a)(c,2),o=l[0],u=l[1],g=Object(r.useState)({top:0,left:0}),s=Object(a.a)(g,2),f=s[0],d=s[1];return Object(i.jsx)("div",{className:"box-wrapper",draggable:!0,onDragStart:function(t){n(t,d,o,u)},onDrag:function(t){n(t,d,o,u)},onDragEnd:function(t){n(t,d,o,u)},style:{top:f.top,left:f.left},children:e})},g=function(t){var e=function(t,e,n,i){"dragstart"===t.type?e((function(e){return i((function(){return{top:t.clientY-e.top,left:t.clientX-e.left}})),{top:e.top,left:e.left}})):0===t.clientY&&0===t.clientX?e((function(t){return t})):e((function(e){return{top:t.view.innerHeight-(t.target.scrollHeight-n.top)>t.clientY&&n.top<t.clientY?t.clientY-n.top:t.view.innerHeight-(t.target.scrollHeight-n.top)>t.clientY?0:t.view.innerHeight-t.target.scrollHeight,left:t.view.innerWidth-(t.target.scrollWidth-n.left)>t.clientX&&n.left<t.clientX?t.clientX-n.left:t.view.innerWidth-(t.target.scrollWidth-n.left)>t.clientX?0:t.view.innerWidth-t.target.scrollWidth}}))};return console.log(t.children),Object(i.jsx)("div",{className:"draggable",children:r.Children.map(t.children,(function(t,n){return Object(i.jsx)(u,{onDrag:e,children:t},n)}))})},s=function(t){return Object(i.jsx)("div",{className:"box"})};var f=function(){return Object(i.jsx)(g,{children:Object(i.jsx)(s,{})})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,l=e.getTTFB;n(t),i(t),r(t),c(t),l(t)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),d()}},[[12,1,2]]]);
//# sourceMappingURL=main.da089d30.chunk.js.map