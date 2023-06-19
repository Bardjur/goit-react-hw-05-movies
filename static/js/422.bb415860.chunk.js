"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[422],{4422:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var r,c,a,o,i,s,u,p,l,d,h=e(9439),f=e(2791),v=e(7689),x=e(4697),m=e(168),Z=e(5706),b=e(1087),g=(0,Z.Z)(b.rU)(r||(r=(0,m.Z)(["\n  display: inline-block;\n  padding: 10px;\n  font-weight: 600;\n  text-decoration: none;\n  color:#736A3D;\n  border: 1px solid #3C401D;\n  border-radius: 7px;\n  margin-bottom: 10px;\n  &:hover{\n    background-color: #736A3D;\n    color:#3C401D;\n    svg {transform: scale(1.5)}\n  }\n"]))),j=(0,Z.Z)(b.OL)(c||(c=(0,m.Z)(["\n  color:#3C401D;\n  display: inline-block;\n  padding: 15px 10px;\n  font-weight: 700;\n  text-decoration: none;\n  &:hover, \n  &.active{color:#736A3D;}\n"]))),w=Z.Z.div(a||(a=(0,m.Z)(["\n  display: flex;\n"]))),y=Z.Z.img(o||(o=(0,m.Z)(["\n  display: block;\n  max-width: 250px;\n"]))),k=Z.Z.div(i||(i=(0,m.Z)(["\n  margin-left: 20px;\n  color: #3C401D;\n"]))),_=Z.Z.h2(s||(s=(0,m.Z)(["\n  margin-top: 15px;\n"]))),C=Z.Z.h3(u||(u=(0,m.Z)(["\n  margin-top: 15px;\n"]))),D=Z.Z.h4(p||(p=(0,m.Z)(["\n  margin-top: 15px;\n"]))),P=Z.Z.p(l||(l=(0,m.Z)(["\n  margin-top: 15px;\n"]))),A=Z.Z.div(d||(d=(0,m.Z)(["\n  border: 1px solid #3C401D;\n  border-left: none;\n  border-right: none;\n  margin: 15px auto;\n  color: #3C401D;\n"]))),L=e(6036),O=e(7596),U=e(184);function F(){var n,t,e,r,c,a,o=(0,f.useState)({}),i=(0,h.Z)(o,2),s=i[0],u=i[1],p=(0,v.UO)().movieId,l=(0,v.TH)(),d=null!==(n=null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";(0,f.useEffect)((function(){(0,x.Mc)(p).then((function(n){u(n)})).catch((function(n){O.Am.error(n.status_message)}))}),[p]);var m=s.poster_path,Z=s.title,b=s.vote_average,F=s.overview;return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(g,{to:d,children:[(0,U.jsx)(L.wFh,{})," Go back"]}),Object.keys(s).length?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(w,{children:[(0,U.jsx)(y,{src:"https://image.tmdb.org/t/p/original/".concat(m),alt:""}),(0,U.jsxs)(k,{children:[(0,U.jsx)(_,{children:Z}),(0,U.jsxs)(P,{children:["User score: ",b]}),(0,U.jsx)(C,{children:"Overview"}),(0,U.jsx)(P,{children:F}),(0,U.jsx)(D,{children:"Genres"}),(0,U.jsx)(P,{children:s.genres.map((function(n){return n.name})).join(" ")})]})]}),(0,U.jsxs)(A,{children:[(0,U.jsx)(D,{children:"Additional information"}),(0,U.jsx)(j,{to:"cast",state:{from:null!==(e=null===(r=l.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies"},children:"Cast"}),(0,U.jsx)(j,{to:"reviews",state:{from:null!==(c=null===(a=l.state)||void 0===a?void 0:a.from)&&void 0!==c?c:"/movies"},children:"Reviews"})]}),(0,U.jsx)(v.j3,{})]}):(0,U.jsx)(_,{children:"Nothing found"})]})}},4697:function(n,t,e){e.d(t,{CL:function(){return Z},KL:function(){return f},Mc:function(){return x},wH:function(){return g},wr:function(){return d}});var r=e(4165),c=e(5861),a=e(9439),o=e(7762),i="https://api.themoviedb.org/3/",s="9bb5ab2e288d2a75e3a9828e96791982";function u(n,t){var e,r=(0,o.Z)(t);try{for(r.s();!(e=r.n()).done;){var c=(0,a.Z)(e.value,2),i=c[0],s=c[1];n.searchParams.set(i,s)}}catch(u){r.e(u)}finally{r.f()}}function p(n){return l.apply(this,arguments)}function l(){return l=(0,c.Z)((0,r.Z)().mark((function n(t){var e,c,a,o=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:[],c=new URL(i+t),e.push(["api_key",s]),u(c,e),n.next=6,fetch(c);case 6:if(!(a=n.sent).ok){n.next=9;break}return n.abrupt("return",a.json());case 9:return n.abrupt("return",Promise.reject(a.json()));case 10:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}function d(){return h.apply(this,arguments)}function h(){return(h=(0,c.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p("trending/movie/day");case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n.catch(0),n.t1=Promise,n.next=11,n.t0;case 11:return n.t2=n.sent,n.abrupt("return",n.t1.reject.call(n.t1,n.t2));case 13:case"end":return n.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}function f(n){return v.apply(this,arguments)}function v(){return v=(0,c.Z)((0,r.Z)().mark((function n(t){var e,c=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=[["query",t],["page",c.length>1&&void 0!==c[1]?c[1]:1]],n.prev=2,n.next=5,p("search/movie",e);case 5:return n.abrupt("return",n.sent);case 8:return n.prev=8,n.t0=n.catch(2),n.t1=Promise,n.next=13,n.t0;case 13:return n.t2=n.sent,n.abrupt("return",n.t1.reject.call(n.t1,n.t2));case 15:case"end":return n.stop()}}),n,null,[[2,8]])}))),v.apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,c.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p("movie/".concat(t));case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n.catch(0),n.t1=Promise,n.next=11,n.t0;case 11:return n.t2=n.sent,n.abrupt("return",n.t1.reject.call(n.t1,n.t2));case 13:case"end":return n.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}function Z(n){return b.apply(this,arguments)}function b(){return(b=(0,c.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p("movie/".concat(t,"/credits"));case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n.catch(0),n.t1=Promise,n.next=11,n.t0;case 11:return n.t2=n.sent,n.abrupt("return",n.t1.reject.call(n.t1,n.t2));case 13:case"end":return n.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}function g(n){return j.apply(this,arguments)}function j(){return(j=(0,c.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p("movie/".concat(t,"/reviews"));case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n.catch(0),n.t1=Promise,n.next=11,n.t0;case 11:return n.t2=n.sent,n.abrupt("return",n.t1.reject.call(n.t1,n.t2));case 13:case"end":return n.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=422.bb415860.chunk.js.map