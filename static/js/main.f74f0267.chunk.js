(this["webpackJsonpapp-gamedeals"]=this["webpackJsonpapp-gamedeals"]||[]).push([[0],{39:function(e,a,t){e.exports=t(71)},44:function(e,a,t){},46:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),m=(t(44),t(45),t(46),t(36)),s=t(4),o=t(13),u=t.n(o),i=t(30),d=t(17),E=t(31),f=t.n(E).a.create({baseURL:"https://www.reddit.com"}),p=t(72),b=t(73),g=t(76),h=t(74),v=t(75),j=t(77),k=t(32),x=t(35),y=t(33),w=t.n(y);function N(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"mb-4"},"GameDeals"))}function O(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!0),m=Object(d.a)(c,2),s=m[0],o=m[1];return Object(n.useEffect)((function(){Object(i.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,f.get("/r/gamedeals/new.json?limit=50");case 3:a=e.sent,t=a.data.data,console.log(t.children),l(t.children),o(!1);case 8:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(p.a,null,s?r.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"}},r.a.createElement(b.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),t.map((function(e){return r.a.createElement("div",{key:e.data.id},r.a.createElement(g.a,{className:"mb-4"},r.a.createElement(g.a.Body,null,r.a.createElement(h.a,null,r.a.createElement(v.a,{lg:"9"},r.a.createElement(g.a.Title,null,e.data.title),r.a.createElement(g.a.Text,null,r.a.createElement("a",{href:e.data.url,target:"_blank",rel:"noopener noreferrer"},e.data.url))),r.a.createElement(v.a,{lg:"3",className:"d-flex justify-content-center align-items-center"},r.a.createElement("a",{href:e.data.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(j.a,{variante:"primary",size:"lg",block:!0,style:{borderRadius:25}},"Get the deal  ",r.a.createElement(k.a,{icon:x.a})))))),r.a.createElement(g.a.Footer,null,r.a.createElement("small",{className:"text-muted"},"Posted ",w.a.unix(e.data.created).format("lll")," via ",r.a.createElement("a",{href:"https://reddit.com/".concat(e.data.permalink),target:"_blank",rel:"noopener noreferrer"},"reddit")))))}))))}function S(){return r.a.createElement(m.a,{basename:"/gamedeals"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:O})))}function _(){return r.a.createElement(S,null)}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.f74f0267.chunk.js.map