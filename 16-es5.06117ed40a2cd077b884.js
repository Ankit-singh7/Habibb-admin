function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var r=0;r<o.length;r++){var t=o[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,o,r){return o&&_defineProperties(e.prototype,o),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"P+7w":function(e,o,r){"use strict";r.r(o);var t=r("ofXK"),c=r("3Pt+"),i=r("tyNb"),a=r("fXoL"),n=r("AXIP"),s=r("rwBg");function l(e,o){if(1&e&&(a.cc(0,"div",24),a.cc(1,"div",25),a.Lc(2),a.bc(),a.bc()),2&e){var r=a.oc();a.Jb(2),a.Nc(" ",r.message," ")}}var m,d,b=[{path:"",component:(m=function(){function e(o,r,t,c){_classCallCheck(this,e),this.router=o,this.route=r,this.ui=t,this.userService=c,this.rememberMe="false",this.showPassword=!1,this.inputType="password",this.loginError=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.remember()}},{key:"login",value:function(){var e=this;this.ui.loader.show(),this.userService.login({email:this.email,password:this.password}).subscribe((function(o){"admin"===o.data.role?(e.loginError=!1,localStorage.setItem("token",o.data.authToken),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("name","".concat(o.data.f_name," ").concat(o.data.l_name)),e.rememberMe?(localStorage.setItem("email",e.email),localStorage.setItem("password",e.password),localStorage.setItem("rememberMe",String(e.rememberMe))):(e.email="",e.password="",localStorage.removeItem("email"),localStorage.removeItem("password"),localStorage.setItem("rememberMe",String(e.rememberMe))),e.router.navigate(["/user/employee"])):(e.loginError=!0,e.message="Invalid Admin Credential"),e.ui.loader.hide()}),(function(o){e.ui.loader.hide(),e.loginError=!0,e.message=o.error.message}))}},{key:"remember",value:function(){"true"===localStorage.getItem("rememberMe")?(this.cookieRem=Boolean(localStorage.getItem("rememberMe")),this.cookiePass=localStorage.getItem("password"),this.cookieMail=localStorage.getItem("email"),this.router.navigate(["/login"])&&(this.rememberMe=this.cookieRem,this.email=this.cookieMail,this.password=this.cookiePass)):"false"===localStorage.getItem("rememberMe")&&(this.cookieRem=!1,this.email="",this.password="")}}]),e}(),m.\u0275fac=function(e){return new(e||m)(a.Wb(i.e),a.Wb(i.a),a.Wb(n.a),a.Wb(s.a))},m.\u0275cmp=a.Qb({type:m,selectors:[["app-login"]],decls:34,vars:5,consts:[[1,"container-fluid","position-relative",2,"height","100vh"],[1,"row"],[1,"login-box",2,"margin-top","7%"],[1,"col-xl-4","offset-xl-4","col-md-6","offset-md-3"],[1,"p-2"],[2,"text-align","center"],[2,"color","red"],["id","loginForm","role","form"],["loginForm","ngForm"],["class","group animated fadeIn",4,"ngIf"],[1,"form-group","position-relative"],["type","text","placeholder","USERNAME","name","email","pattern","[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"user-icon"],["type","password","placeholder","PASSWORD","name","password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"pass-icon"],[1,"form-group"],[1,"col"],[1,"chk-holder"],["type","checkbox","id","ossm","name","rememberMe",1,"chkmrk",3,"ngModel","ngModelChange"],["for","ossm",1,"text-uppercase"],[1,"checkmark"],["type","submit",1,"btn","btn-primary","log-btn","w-100",3,"disabled","click"],[1,"clearfix"],[1,"col-lg-10","offset-lg-1","mt-5"],[1,"group","animated","fadeIn"],[1,"alert","alert-danger","text-center"]],template:function(e,o){if(1&e&&(a.cc(0,"div",0),a.cc(1,"div",1),a.cc(2,"div",2),a.cc(3,"div",3),a.cc(4,"div",4),a.cc(5,"h2",5),a.cc(6,"B"),a.Lc(7," HA"),a.cc(8,"span",6),a.Lc(9,"B"),a.bc(),a.Lc(10,"IBB"),a.bc(),a.bc(),a.cc(11,"form",7,8),a.Jc(13,l,3,1,"div",9),a.cc(14,"div",10),a.cc(15,"input",11),a.kc("ngModelChange",(function(e){return o.email=e})),a.bc(),a.Xb(16,"span",12),a.bc(),a.cc(17,"div",10),a.cc(18,"input",13),a.kc("ngModelChange",(function(e){return o.password=e})),a.bc(),a.Xb(19,"span",14),a.bc(),a.cc(20,"div",15),a.cc(21,"div",1),a.cc(22,"div",16),a.cc(23,"div",17),a.cc(24,"input",18),a.kc("ngModelChange",(function(e){return o.rememberMe=e})),a.bc(),a.cc(25,"label",19),a.Lc(26,"Remember Me"),a.bc(),a.Xb(27,"span",20),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(28,"div",15),a.cc(29,"button",21),a.kc("click",(function(){return o.login()})),a.Lc(30,"Login"),a.bc(),a.bc(),a.bc(),a.bc(),a.bc(),a.Xb(31,"div",22),a.Xb(32,"div",23),a.bc(),a.bc(),a.Xb(33,"div",22),a.bc()),2&e){var r=a.Cc(12);a.Jb(13),a.uc("ngIf",o.loginError),a.Jb(2),a.uc("ngModel",o.email),a.Jb(3),a.uc("ngModel",o.password),a.Jb(6),a.uc("ngModel",o.rememberMe),a.Jb(5),a.uc("disabled",!r.valid)}},directives:[c.s,c.i,c.j,t.l,c.b,c.m,c.o,c.h,c.k,c.a],styles:[""]}),m)}],g=((d=function e(){_classCallCheck(this,e)}).\u0275mod=a.Ub({type:d}),d.\u0275inj=a.Tb({factory:function(e){return new(e||d)},imports:[[i.h.forChild(b)],i.h]}),d);r.d(o,"LoginModule",(function(){return p}));var u,p=((u=function e(){_classCallCheck(this,e)}).\u0275mod=a.Ub({type:u}),u.\u0275inj=a.Tb({factory:function(e){return new(e||u)},providers:[s.a],imports:[[t.b,g,c.d]]}),u)}}]);