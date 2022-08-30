(this.webpackJsonptutorial=this.webpackJsonptutorial||[]).push([[0],{397:function(e,t,n){e.exports=n(566)},402:function(e,t,n){},529:function(e,t){},566:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),c=n.n(o),i=(n(402),n(7)),l=n(360),s=n.n(l),u=n(361),m=n.n(u),d=n(660),f=n(659),E=n(662),h=n(359),g=n(628),b=n(638),v=n(668),w=n(670),p=n(641),y=n(365),k=n(144),j=n(368),O=n(649),P=n(650),T=n(663),x=n(661),L=n(665),U=n(664),W=n(653),R=n(654),A=n(344),I=function(e){return r.createElement(g.a,e,r.createElement(b.a,{label:"Search",source:"q",alwaysOn:!0}),r.createElement(v.a,{label:"User",source:"userId",reference:"users",allowEmpty:!0},r.createElement(w.a,{optionText:"name"})))},C=function(e){return r.createElement(p.a,Object.assign({},e,{filters:r.createElement(I,null)}),r.createElement(y.a,null,r.createElement(k.a,{source:"id"}),r.createElement(j.a,{label:"User",source:"userId",reference:"users"},r.createElement(k.a,{source:"name"})),r.createElement(k.a,{source:"title"}),r.createElement(O.a,null),r.createElement(P.a,null)))},_=function(e){var t=e.record;return r.createElement("span",null,"Post ",t?'"'.concat(t.title,'"'):"")},Q=function(e){return r.createElement(T.a,Object.assign({title:r.createElement(_,null)},e),r.createElement(x.a,null,r.createElement(b.a,{disabled:!0,source:"id"}),r.createElement(v.a,{label:"User",source:"userId",reference:"users"},r.createElement(w.a,{optionText:"name"})),r.createElement(b.a,{source:"title"}),r.createElement(b.a,{multiline:!0,source:"body"})))},S=function(e){return r.createElement(L.a,e,r.createElement(x.a,null,r.createElement(v.a,{label:"User",source:"userId",reference:"users"},r.createElement(w.a,{optionText:"name"})),r.createElement(b.a,{source:"title"}),r.createElement(b.a,{multiline:!0,source:"body"})))},q=function(e){return r.createElement(U.a,e,r.createElement(W.a,null,r.createElement(k.a,{source:"title"}),r.createElement(k.a,{source:"teaser"}),r.createElement(R.a,{source:"body"}),r.createElement(A.a,{label:"Publication date",source:"created_at"})))},B=n(569),J=n(669),N=n(345),V=function(e){var t=Object(B.a)((function(e){return e.breakpoints.down("sm")}));return r.createElement(p.a,Object.assign({title:"All users"},e),t?r.createElement(J.a,{primaryText:function(e){return e.name},secondaryText:function(e){return e.username},tertiaryText:function(e){return e.email}}):r.createElement(y.a,null,r.createElement(k.a,{source:"id"}),r.createElement(k.a,{source:"name"}),r.createElement(k.a,{source:"username"}),r.createElement(N.a,{source:"email"})))},G=n(671),M=n(108),X=n(675),$=n(5),z=n(656),D=n(571),F={userLogin:M.g},H=Object(i.c)(void 0,F)(Object($.a)((function(e){var t=e.spacing;return Object(X.a)({button:{width:"100%"},icon:{marginRight:t.unit}})}))((function(e){e.classes;var t=e.userLogin;Object(r.useEffect)((function(){console.log("login form rendered");var e=window.location.href,n=new URL(window.location.href).searchParams,r=n.get("code"),a=n.get("state");r&&a&&(console.log("oauth callback received"),t({location:e}))}),[t]);return a.a.createElement("div",null,a.a.createElement(z.a,null,a.a.createElement(D.a,{variant:"contained",type:"submit",color:"primary",onClick:function(){t()}},"Login")))}))),K=function(e){return a.a.createElement(G.a,e,a.a.createElement(H,null)," ")},Y=n(647),Z=n(579),ee=n(658),te=function(){return r.createElement(Y.a,null,r.createElement(ee.a,{title:"Welcome to the administration"}),r.createElement(Z.a,null,"Lorem ipsum sic dolor amet..."))},ne="carina-cloud.us.auth0.com",re="Xr7WTb73mQ7nM4x5nUnVsqGLR3lbQVdU",ae="https://lararobertson.github.io/dashboard/",oe=new(n(347).a)({domain:ne,client_id:re,redirect_uri:ae,cacheLocation:"localstorage",useRefreshTokens:!0}),ce={login:function(e){return"undefined"===typeof e?oe.loginWithRedirect():oe.handleRedirectCallback(e.location)},logout:function(){return oe.isAuthenticated().then((function(e){return e?oe.logout({redirect_uri:window.location.origin,federated:!0}):Promise.resolve()}))},checkError:function(e){var t=e.status;return 401===t||403===t?Promise.reject():Promise.resolve()},checkAuth:function(){return oe.isAuthenticated().then((function(e){return e?Promise.resolve():oe.getTokenSilently()}))},getPermissions:function(){return Promise.resolve()}},ie=n(35),le=Object(ie.a)(),se=function(){return r.createElement(d.a,{authProvider:ce,dataProvider:Object(h.a)("https://jsonplaceholder.typicode.com"),history:le,dashboard:te,loginPage:K},r.createElement(f.a,{name:"posts",icon:s.a,list:C,edit:Q,create:S,show:q}),r.createElement(f.a,{name:"users",icon:m.a,list:V}),r.createElement(f.a,{name:"comments",list:E.a}))},ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.createElement(se,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/dashboard",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/dashboard","/service-worker.js");ue?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):me(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):me(e)}))}}()}},[[397,1,2]]]);
//# sourceMappingURL=main.fa5a78b4.chunk.js.map
