(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{113:function(e,t,n){},132:function(e,t){},134:function(e,t){},157:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(10),l=n.n(i),r=(n(113),n(20)),s=n(198),o=n(199),j=n(200),u=n(100),b=n.n(u),d=n(101),O=n.n(d),f=n(89),m=n(58),h=n.n(m),v=n(90),x=n.n(v),g=(n(157),n(6)),p=x.a.connect("http://localhost:5000");var y=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(),l=Object(r.a)(i,2),u=l[0],d=l[1],m=Object(c.useState)(!1),v=Object(r.a)(m,2),x=v[0],y=v[1],C=Object(c.useState)(""),S=Object(r.a)(C,2),k=S[0],N=S[1],w=Object(c.useState)(),I=Object(r.a)(w,2),D=I[0],F=I[1],R=Object(c.useState)(!1),T=Object(r.a)(R,2),B=T[0],E=T[1],P=Object(c.useState)(""),A=Object(r.a)(P,2),M=A[0],U=A[1],z=Object(c.useState)(!1),J=Object(r.a)(z,2),L=J[0],W=J[1],q=Object(c.useState)(""),G=Object(r.a)(q,2),H=G[0],K=G[1],Q=Object(c.useRef)(),V=Object(c.useRef)(),X=Object(c.useRef)();return Object(c.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){d(e),Q.current.srcObject=e})),p.on("me",(function(e){a(e)})),p.on("callUser",(function(e){y(!0),N(e.from),K(e.name),F(e.signal)}))}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{style:{textAlign:"center",color:"#fff"},children:"top notch M.E.R.N. stack \u2022 full stack developer \u2022 open source WebRTC"}),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"video-container",children:[Object(g.jsx)("div",{className:"video",children:u&&Object(g.jsx)("video",{playsInline:!0,muted:!0,ref:Q,autoPlay:!0,style:{width:"300px"}})}),Object(g.jsx)("div",{className:"video",children:B&&!L?Object(g.jsx)("video",{playsInline:!0,ref:V,autoPlay:!0,style:{width:"300px"}}):null})]}),Object(g.jsxs)("div",{className:"myId",children:[Object(g.jsx)(j.a,{id:"filled-basic",label:"Name",variant:"filled",value:H,onChange:function(e){return K(e.target.value)},style:{marginBottom:"20px"}}),Object(g.jsx)(f.CopyToClipboard,{text:n,style:{marginBottom:"2rem"},children:Object(g.jsx)(s.a,{variant:"contained",color:"primary",startIcon:Object(g.jsx)(b.a,{fontSize:"large"}),children:"Copy ID"})}),Object(g.jsx)(j.a,{id:"filled-basic",label:"ID to call",variant:"filled",value:M,onChange:function(e){return U(e.target.value)}}),Object(g.jsxs)("div",{className:"call-button",children:[B&&!L?Object(g.jsx)(s.a,{variant:"contained",color:"secondary",onClick:function(){W(!0),X.current.destroy()},children:"End Call"}):Object(g.jsx)(o.a,{color:"primary","aria-label":"call",onClick:function(){return function(e){var t=new h.a({initiator:!0,trickle:!1,stream:u});t.on("signal",(function(t){p.emit("callUser",{userToCall:e,signalData:t,from:n,name:H})})),t.on("stream",(function(e){V.current.srcObject=e})),p.on("callAccepted",(function(e){E(!0),t.signal(e)})),X.current=t}(M)},children:Object(g.jsx)(O.a,{fontSize:"large"})}),M]})]}),Object(g.jsx)("div",{children:x&&!B?Object(g.jsxs)("div",{className:"caller",children:[Object(g.jsxs)("h1",{children:[H," is calling..."]}),Object(g.jsx)(s.a,{variant:"contained",color:"primary",onClick:function(){E(!0);var e=new h.a({initiator:!1,trickle:!1,stream:u});e.on("signal",(function(e){p.emit("answerCall",{signal:e,to:k})})),e.on("stream",(function(e){V.current.srcObject=e})),e.signal(D),X.current=e},children:"Answer"})]}):null})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,202)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),i(e),l(e)}))};l.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root")),C()}},[[166,1,2]]]);
//# sourceMappingURL=main.93c62296.chunk.js.map