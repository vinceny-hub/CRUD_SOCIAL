(function(e){function t(t){for(var r,n,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},n={app:0},s={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-00726de7":"a6b6aaba","chunk-12b2a4ac":"62a27668","chunk-2d0d7c65":"00e77867","chunk-2d0efcba":"3cb4e856","chunk-3cdc7dcd":"347005ca","chunk-4ab941ec":"27fb392f","chunk-65dc2ad0":"15885f77","chunk-714f30e0":"c99c033f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a={"chunk-00726de7":1,"chunk-12b2a4ac":1,"chunk-3cdc7dcd":1,"chunk-4ab941ec":1,"chunk-65dc2ad0":1,"chunk-714f30e0":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-00726de7":"f59d2295","chunk-12b2a4ac":"d20181f8","chunk-2d0d7c65":"31d6cfe0","chunk-2d0efcba":"31d6cfe0","chunk-3cdc7dcd":"547f3115","chunk-4ab941ec":"335f6ecd","chunk-65dc2ad0":"d3d6b9b7","chunk-714f30e0":"77c0049a"}[e]+".css",s=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===r||l===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[e],m.parentNode.removeChild(m),a(o)},m.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"1f57":function(e,t,a){"use strict";var r=a("d4ec"),n=a("bee2"),s=a("bc3a"),o=a.n(s);function i(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}var u="/api/test/",c=function(){function e(){Object(r["a"])(this,e)}return Object(n["a"])(e,[{key:"getPublicContent",value:function(){return o.a.get(u+"all")}},{key:"getUserBoard",value:function(){return o.a.get(u+"user",{headers:i()})}},{key:"getModeratorBoard",value:function(){return o.a.get(u+"mod",{headers:i()})}},{key:"getAdminBoard",value:function(){return o.a.get(u+"admin",{headers:i()})}}]),e}();t["a"]=new c},"494b":function(e,t,a){e.exports=a.p+"img/titi0.49b4b2dd.png"},"53b1":function(e,t,a){"use strict";a("57d6")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white border-nav static-top",attrs:{id:"#top"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"titi_bloc"},[r("a",{staticClass:"navbar-brand head-logo titi_bloc",attrs:{href:"#"},on:{click:function(e){e.preventDefault()}}},[r("img",{staticClass:"head-img",attrs:{src:a("494b"),alt:"logo titi"}}),r("p",{staticClass:"titi_title"},[e._v(" Le coin de Titi ")])])]),e._m(0),r("div",{staticClass:"collapse navbar-collapse navbar-light",attrs:{id:"navbarResponsive"}},[r("ul",{staticClass:"navbar-nav ml-auto"},[e.currentUser?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/posts"}},[r("font-awesome-icon",{attrs:{icon:"home"}}),e._v("Home ")],1)],1):e._e(),e.showAdminBoard?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[e._v("Admin Board")])],1):e._e(),e.showModeratorBoard?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/mod"}},[e._v("Moderator Board")])],1):e._e(),e.currentUser?e._e():r("div",{staticClass:"navbar-nav"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[r("font-awesome-icon",{attrs:{icon:"user-plus"}}),e._v("Sign Up ")],1)],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[r("font-awesome-icon",{attrs:{icon:"sign-in-alt"}}),e._v("Login ")],1)],1)]),e.currentUser?r("div",{staticClass:"navbar-nav"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[r("font-awesome-icon",{attrs:{icon:"user"}}),e._v(" "+e._s(e.currentUser.username)+" ")],1)],1),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logOut(t)}}},[r("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),e._v("LogOut ")],1)])]):e._e()])])])]),r("div",{staticClass:"container"},[r("router-view")],1),e._m(1)])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler border",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"py-4  text-white-50",attrs:{id:"sticky-footer"}},[r("div",{staticClass:"container text-center",attrs:{id:"commentArea"}},[r("small",[e._v("Copyright © "),r("img",{staticClass:"foot-img",attrs:{src:a("c4ab"),alt:"footer logo titi"}})])])])}],o=(a("caad"),a("2532"),{name:"app",computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}}),i=o,u=(a("034f"),a("2877")),c=Object(u["a"])(i,n,s,!1,null,null,null),l=c.exports,d=a("683f"),m=a("3f9d"),f=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("header",{staticClass:"home-logo-color-titi"},[r("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault()}}},[r("img",{staticClass:"head-img-logo",attrs:{src:a("8de2"),alt:"header logo titi "}}),r("h3",{staticClass:"font-weight-bold"})])])])},g=[],v=(a("25f0"),a("1f57")),h={name:"Home",data:function(){return{content:""}},mounted:function(){var e=this;v["a"].getPublicContent().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data||t.message||t.toString()}))}},b=h,C=(a("cccb"),Object(u["a"])(b,p,g,!1,null,null,null)),w=C.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card card-container"},[r("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:a("494b")}}),r("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleLogin(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.errors.has("username")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Username is required!")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.errors.has("password")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Password is required!")]):e._e()]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:e.loading}},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),r("span",[e._v("Login")])])]),r("div",{staticClass:"form-group"},[e.message?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.message))]):e._e()])])])])},k=[],y=a("d4ec"),x=function e(t,a,r,n){Object(y["a"])(this,e),this.username=t,this.email=a,this.password=r,this.userId=n},O={name:"Login",data:function(){return{user:new x("",""),loading:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll().then((function(t){t?e.user.username&&e.user.password&&e.$store.dispatch("auth/login",e.user).then((function(){e.$router.push("/posts").then((function(){return e.$router.go(0)}))}),(function(t){e.loading=!1,e.message=t.response&&t.response.data||t.message||t.toString()})):e.loading=!1}))}}},S=O,P=(a("53b1"),Object(u["a"])(S,_,k,!1,null,"176ffa7b",null)),$=P.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card card-container"},[r("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:a("494b")}}),r("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e.successful?e._e():r("div",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:20",expression:"'required|min:3|max:20'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.submitted&&e.errors.has("username")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("username")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email|max:50",expression:"'required|email|max:50'"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e.submitted&&e.errors.has("email")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("email")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.submitted&&e.errors.has("password")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("password")))]):e._e()]),e._m(0)])]),e.message?r("div",{staticClass:"alert",class:e.successful?"alert-success":"alert-danger"},[e._v(e._s(e.message))]):e._e()])])},I=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary btn-block"},[e._v("Sign Up")])])}],N={name:"Register",data:function(){return{user:new x("","",""),submitted:!1,successful:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then((function(t){t&&e.$store.dispatch("auth/register",e.user).then((function(t){e.message=t.message,e.successful=!0}),(function(t){e.message=t.response&&t.response.data||t.message||t.toString(),e.successful=!1}))}))}}},E=N,U=(a("5e8d"),Object(u["a"])(E,j,I,!1,null,"54a1a12f",null)),A=U.exports;r["a"].use(f["a"]);var T=new f["a"]({mode:"history",routes:[{path:"/",name:"home",component:w},{path:"/home",component:w},{path:"/login",component:$},{path:"/register",component:A},{path:"/profile",name:"profile",component:function(){return a.e("chunk-714f30e0").then(a.bind(null,"c66d"))}},{path:"/admin",name:"admin",component:function(){return a.e("chunk-4ab941ec").then(a.bind(null,"b295"))}},{path:"/mod",name:"moderator",component:function(){return a.e("chunk-2d0d7c65").then(a.bind(null,"77f5"))}},{path:"/user",name:"user",component:function(){return a.e("chunk-2d0efcba").then(a.bind(null,"9a40"))}},{path:"/posts/:id",name:"post-details",component:function(){return a.e("chunk-12b2a4ac").then(a.bind(null,"9c93"))}},{path:"/posts",name:"posts",component:function(){return a.e("chunk-3cdc7dcd").then(a.bind(null,"807b"))}},{path:"/comments/:id",name:"comment",component:function(){return a.e("chunk-65dc2ad0").then(a.bind(null,"4ea3"))}},{path:"/profile/:id",name:"ProfileOtherUser",component:function(){return a.e("chunk-00726de7").then(a.bind(null,"24ed"))}}]}),L=a("2f62"),q=a("bee2"),B=a("c427"),R=function(){function e(){Object(y["a"])(this,e)}return Object(q["a"])(e,[{key:"login",value:function(e){return B["a"].post("auth/signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return B["a"].post("auth/signup",{username:e.username,email:e.email,password:e.password})}}]),e}(),M=new R,D=JSON.parse(localStorage.getItem("user")),J=D?{status:{loggedIn:!0},user:D}:{status:{loggedIn:!1},user:null},F={namespaced:!0,state:J,actions:{login:function(e,t){var a=e.commit;return M.login(t).then((function(e){return a("loginSuccess",e),Promise.resolve(e)}),(function(e){return a("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;M.logout(),t("logout")},register:function(e,t){var a=e.commit;return M.register(t).then((function(e){return a("registerSuccess"),Promise.resolve(e.data)}),(function(e){return a("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}};r["a"].use(L["a"]);var H=new L["a"].Store({modules:{auth:F}}),z=(a("4989"),a("ab8b"),a("7bb1")),K=a("ecee"),G=a("ad3d"),Q=a("c074");K["c"].add(Q["a"],Q["d"],Q["e"],Q["b"],Q["c"]),r["a"].config.productionTip=!1,r["a"].use(z["a"]),r["a"].component("font-awesome-icon",G["a"]),r["a"].use(m["a"]),r["a"].use(d["a"]),new r["a"]({router:T,store:H,render:function(e){return e(l)}}).$mount("#app")},"57d6":function(e,t,a){},"5ced":function(e,t,a){},"5e8d":function(e,t,a){"use strict";a("c3a7")},"85ec":function(e,t,a){},"8de2":function(e,t,a){e.exports=a.p+"img/titi1.3a8d62b8.png"},c3a7:function(e,t,a){},c427:function(e,t,a){"use strict";var r=a("bc3a"),n=a.n(r),s=JSON.parse(localStorage.getItem("user")),o=s?s.accessToken:"123",i="/api/";t["a"]=n.a.create({baseURL:i,headers:{Authorization:"Bearer "+o,"Content-type":"application/json","Content-Type":"multipart/form-data","Content-Security-Policy":"policy"}})},c4ab:function(e,t,a){e.exports=a.p+"img/titiCage.cfb82865.png"},cccb:function(e,t,a){"use strict";a("5ced")}});
//# sourceMappingURL=app.ffbcf697.js.map