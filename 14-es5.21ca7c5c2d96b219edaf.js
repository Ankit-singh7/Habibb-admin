function _classCallCheck(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,c){for(var t=0;t<c.length;t++){var n=c[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,c,t){return c&&_defineProperties(e.prototype,c),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{r2I4:function(e,c,t){"use strict";t.r(c);var n=t("ofXK"),o=t("3Pt+"),i=t("tyNb"),a=t("PSD3"),l=t.n(a),r=t("fXoL"),d=t("rwBg"),s=t("AXIP"),u=t("oOf3"),b=["closeEditModal"];function p(e,c){if(1&e){var t=r.dc();r.cc(0,"tr"),r.cc(1,"td"),r.cc(2,"B"),r.Lc(3),r.pc(4,"titlecase"),r.pc(5,"titlecase"),r.bc(),r.bc(),r.cc(6,"td"),r.Lc(7),r.bc(),r.cc(8,"td"),r.Lc(9),r.bc(),r.cc(10,"td"),r.Lc(11),r.bc(),r.cc(12,"td"),r.Lc(13),r.bc(),r.cc(14,"td"),r.Lc(15),r.pc(16,"titlecase"),r.bc(),r.cc(17,"td"),r.cc(18,"button",49),r.kc("click",(function(){r.Ec(t);var e=c.$implicit;return r.oc(2).getUserDetail(e.user_id)})),r.Xb(19,"i",50),r.bc(),r.cc(20,"button",51),r.kc("click",(function(){r.Ec(t);var e=c.index,n=c.$implicit;return r.oc(2).deleteUser(e,n.user_id)})),r.Xb(21,"i",52),r.bc(),r.bc(),r.bc()}if(2&e){var n=c.$implicit;r.Jb(3),r.Oc("",r.qc(4,7,n.f_name)," ",r.qc(5,9,n.l_name),""),r.Jb(4),r.Mc(n.phone),r.Jb(2),r.Mc(n.email),r.Jb(2),r.Mc(n.password),r.Jb(2),r.Mc(n.designation),r.Jb(2),r.Mc(r.qc(16,11,n.status))}}var g=function(e,c,t){return{itemsPerPage:e,currentPage:c,totalItems:t}};function m(e,c){if(1&e&&(r.cc(0,"tbody"),r.Jc(1,p,22,13,"tr",48),r.pc(2,"paginate"),r.bc()),2&e){var t=r.oc();r.Jb(1),r.uc("ngForOf",r.rc(2,1,t.employeeList,r.zc(4,g,t.selectedPerPage,t.currentpage,t.total)))}}function h(e,c){if(1&e&&(r.cc(0,"tbody"),r.cc(1,"tr"),r.cc(2,"td",53),r.Lc(3),r.bc(),r.bc(),r.bc()),2&e){var t=r.oc();r.Jb(3),r.Mc(t.response)}}function f(e,c){if(1&e){var t=r.dc();r.cc(0,"form",54,55),r.cc(2,"div",25),r.cc(3,"div",26),r.cc(4,"h5"),r.Lc(5,"Edit Employee Detail"),r.bc(),r.bc(),r.cc(6,"div",27),r.cc(7,"div",28),r.cc(8,"input",56),r.kc("ngModelChange",(function(e){return r.Ec(t),r.oc().detail.f_name=e})),r.bc(),r.bc(),r.bc(),r.cc(9,"div",30),r.cc(10,"div",28),r.cc(11,"input",57),r.kc("ngModelChange",(function(e){return r.Ec(t),r.oc().detail.l_name=e})),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(12,"div",25),r.cc(13,"div",27),r.cc(14,"div",28),r.cc(15,"input",32),r.kc("ngModelChange",(function(e){return r.Ec(t),r.oc().detail.email=e})),r.bc(),r.bc(),r.bc(),r.cc(16,"div",30),r.cc(17,"div",28),r.cc(18,"input",58),r.kc("ngModelChange",(function(e){return r.Ec(t),r.oc().detail.phone=e})),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(19,"div",25),r.cc(20,"div",27),r.cc(21,"div",28),r.cc(22,"input",59),r.kc("ngModelChange",(function(e){return r.Ec(t),r.oc().detail.password=e})),r.bc(),r.bc(),r.bc(),r.cc(23,"div",30),r.cc(24,"div",28),r.cc(25,"input",60),r.kc("ngModelChange",(function(e){return r.Ec(t),r.oc().detail.designation=e})),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(26,"div",25),r.cc(27,"div",36),r.cc(28,"div",28),r.cc(29,"div",37),r.cc(30,"div",38),r.cc(31,"label",39),r.Lc(32,"Status"),r.bc(),r.bc(),r.cc(33,"select",61),r.kc("ngModelChange",(function(e){return r.Ec(t),r.oc().detail.status=e}))("change",(function(e){return r.Ec(t),r.oc().editStatus(e.target.value)})),r.cc(34,"option",62),r.Lc(35,"Active"),r.bc(),r.cc(36,"option",63),r.Lc(37,"Inactive"),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(38,"div",25),r.cc(39,"div",43),r.cc(40,"button",44),r.kc("click",(function(){r.Ec(t);var e=r.oc();return e.editUser(e.detail.user_id)})),r.Lc(41,"EDIT"),r.bc(),r.bc(),r.bc(),r.bc()}if(2&e){var n=r.Cc(1),o=r.oc();r.Jb(8),r.uc("ngModel",o.detail.f_name),r.Jb(3),r.uc("ngModel",o.detail.l_name),r.Jb(4),r.uc("ngModel",o.detail.email),r.Jb(3),r.uc("ngModel",o.detail.phone),r.Jb(4),r.uc("ngModel",o.detail.password),r.Jb(3),r.uc("ngModel",o.detail.designation),r.Jb(8),r.uc("ngModel",o.detail.status),r.Jb(1),r.uc("selected","Active"===o.detail.status),r.Jb(2),r.uc("selected","Inactive"===o.detail.status),r.Jb(4),r.uc("disabled",!n.valid)}}var v,y,M,C=[{path:"",component:(v=function(){function e(c,t,n){var o=this;_classCallCheck(this,e),this.router=c,this.userService=t,this.ui=n,this.name=[],this.response="No Data Found",this.sortOrder=!1,this.fullName=localStorage.getItem("name"),this.employeeList=[],this.selectedPerPage=10,this.currentpage=1,this.onLimitSelect=function(e){o.selectedPerPage=e,o.getEmployeesList()},this.logout=function(){localStorage.setItem("isLoggedIn",String(!1)),o.router.navigate(["/login"])}}return _createClass(e,[{key:"ngOnInit",value:function(){this.getEmployeesList()}},{key:"addStatus",value:function(e){this.status=e,console.log(this.status)}},{key:"editStatus",value:function(e){this.detail.status=e,console.log(this.status)}},{key:"getEmployeesList",value:function(e){var c=this;this.ui.loader.show(),e&&(this.currentpage=e),this.userService.getAllEmployee(this.selectedPerPage,this.currentpage).subscribe((function(e){e.data&&(c.employeeList=e.data.result,c.total=e.data.total),c.ui.loader.hide()}),(function(e){return c.ui.loader.hide()}))}},{key:"addEmployee",value:function(){var e=this;this.ui.loader.show();var c={f_name:this.firstName,l_name:this.lastName,phone:this.phone,email:this.email,password:this.password,designation:this.designation,role:"employee",status:this.status};this.employeeList.push(c),this.userService.addEmployee(c).subscribe((function(c){e.firstName="",e.lastName="",e.phone="",e.email="",e.password="",e.status="",l.a.fire({icon:"success",title:"User Created Successfully",showConfirmButton:!1,timer:1500}),e.ui.loader.hide()}),(function(c){return e.ui.loader.hide()}))}},{key:"changeOrder",value:function(e){var c=this;this.sortOrder=!this.sortOrder,this.field=e,this.employeeList.sort((function(t,n){return c.sortOrder?n[e].localeCompare(t[e]):t[e].localeCompare(n[e])}))}},{key:"deleteUser",value:function(e,c){var t=this;l.a.fire({title:"Do you want to delete this User?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then((function(n){n.isConfirmed&&(t.ui.loader.show(),t.userService.deleteUser(c).subscribe((function(c){l.a.fire({icon:"success",title:"User Deleted Successfully",showConfirmButton:!1,timer:1500}),t.employeeList.splice(e,1),t.ui.loader.hide()}),(function(e){return t.ui.loader.hide()})))}))}},{key:"getUserDetail",value:function(e){var c=this;this.userService.getUserDetail(e).subscribe((function(e){e.data&&(c.detail=e.data)}))}},{key:"editUser",value:function(e){var c=this;this.ui.loader.show(),delete this.detail.validationToken,delete this.detail.createdOn,this.userService.editUser(e,this.detail).subscribe((function(e){c.closeEditModal.nativeElement.click(),c.detail={},c.ui.loader.hide(),c.getEmployeesList()}),(function(e){c.ui.loader.hide()}))}}]),e}(),v.\u0275fac=function(e){return new(e||v)(r.Wb(i.e),r.Wb(d.a),r.Wb(s.a))},v.\u0275cmp=r.Qb({type:v,selectors:[["app-employee"]],viewQuery:function(e,c){var t;1&e&&r.Qc(b,!0),2&e&&r.Bc(t=r.lc())&&(c.closeEditModal=t.first)},decls:94,vars:16,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-3"],[1,"form-group"],["data-toggle","modal","data-target","#addWaiter",1,"shortcut-btn","d-block","w-100"],[1,"offset-md-7","col-sm-12","col-md-2"],["name","pay","id","pay",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],[2,"text-align","center",3,"pageChange"],["id","addWaiter","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],[1,"modal-dialog","modal-lg"],[1,"modal-content",2,"padding","2%"],["id","subform","role","form"],["subForm","ngForm"],[1,"row"],[1,"col-12"],[1,"offset-md-1","col-sm-12","col-md-5"],[1,"form-group","position-relative"],["type","text","placeholder","First Name","name","fname","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"col-sm-12","col-md-5"],["type","text","placeholder","Last Name","name","lname","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Email","name","em","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Password","name","pass","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Mobile Number","name","mob","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Designation","name","dg","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"offset-md-4","col-sm-12","col-md-5"],[1,"input-group","mb-3"],[1,"input-group-prepend"],["for","inputGroupSelect01",1,"input-group-text"],["placeholder","Choose Status","id","inputGroupSelect01","name","stat",1,"custom-select",3,"ngModel","ngModelChange","change"],["value","Active"],["value","Inactive"],[1,"col-12",2,"text-align","center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["id","addWaiter2","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeEditModal",""],["id","subform2","role","form",4,"ngIf"],[4,"ngFor","ngForOf"],["type","button","data-toggle","modal","data-target","#addWaiter2",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-trash-o"],["colspan","100%",1,"text-center"],["id","subform2","role","form"],["subForm2","ngForm"],["type","text","placeholder","First Name","name","fname1","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Last Name","name","lname1","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Phone","name","phe","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Password","name","esssm","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Designation","name","em","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["placeholder","Choose Status","id","inputGroupSelect01","name","stat2",1,"custom-select",3,"ngModel","ngModelChange","change"],["value","Active",3,"selected"],["value","Inactive",3,"selected"]],template:function(e,c){if(1&e&&(r.cc(0,"div",0),r.cc(1,"div",1),r.cc(2,"div",2),r.cc(3,"div",3),r.cc(4,"button",4),r.cc(5,"b"),r.Lc(6,"+ Add Employee"),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(7,"div",5),r.cc(8,"div",3),r.Lc(9," SELECT PER PAGE "),r.cc(10,"select",6),r.kc("ngModelChange",(function(e){return c.selectedPerPage=e}))("change",(function(e){return c.onLimitSelect(e.target.value)})),r.cc(11,"option",7),r.Lc(12,"10"),r.bc(),r.cc(13,"option",8),r.Lc(14,"25"),r.bc(),r.cc(15,"option",9),r.Lc(16,"50"),r.bc(),r.cc(17,"option",10),r.Lc(18,"100"),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(19,"div",11),r.cc(20,"div",12),r.cc(21,"table",13),r.cc(22,"thead"),r.cc(23,"tr"),r.cc(24,"th",14),r.Lc(25,"Name"),r.cc(26,"a",15),r.kc("click",(function(){return c.changeOrder("firstName")})),r.Xb(27,"i",16),r.bc(),r.bc(),r.cc(28,"th",14),r.Lc(29,"Phone"),r.bc(),r.cc(30,"th",14),r.Lc(31,"User Name"),r.bc(),r.cc(32,"th",14),r.Lc(33,"Password"),r.bc(),r.cc(34,"th",14),r.Lc(35,"Designation"),r.bc(),r.cc(36,"th",14),r.Lc(37,"Status"),r.bc(),r.cc(38,"th",14),r.Lc(39,"Action"),r.bc(),r.bc(),r.bc(),r.Jc(40,m,3,8,"tbody",17),r.Jc(41,h,4,1,"ng-template",null,18,r.Kc),r.bc(),r.cc(43,"pagination-controls",19),r.kc("pageChange",(function(e){return c.getEmployeesList(e)})),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(44,"div",20),r.cc(45,"div",21),r.cc(46,"div",22),r.cc(47,"form",23,24),r.cc(49,"div",25),r.cc(50,"div",26),r.cc(51,"h5"),r.Lc(52,"Add an Employee"),r.bc(),r.bc(),r.cc(53,"div",27),r.cc(54,"div",28),r.cc(55,"input",29),r.kc("ngModelChange",(function(e){return c.firstName=e})),r.bc(),r.bc(),r.bc(),r.cc(56,"div",30),r.cc(57,"div",28),r.cc(58,"input",31),r.kc("ngModelChange",(function(e){return c.lastName=e})),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(59,"div",25),r.cc(60,"div",27),r.cc(61,"div",28),r.cc(62,"input",32),r.kc("ngModelChange",(function(e){return c.email=e})),r.bc(),r.bc(),r.bc(),r.cc(63,"div",30),r.cc(64,"div",28),r.cc(65,"input",33),r.kc("ngModelChange",(function(e){return c.password=e})),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(66,"div",25),r.cc(67,"div",27),r.cc(68,"div",28),r.cc(69,"input",34),r.kc("ngModelChange",(function(e){return c.phone=e})),r.bc(),r.bc(),r.bc(),r.cc(70,"div",30),r.cc(71,"div",28),r.cc(72,"input",35),r.kc("ngModelChange",(function(e){return c.designation=e})),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(73,"div",25),r.cc(74,"div",36),r.cc(75,"div",28),r.cc(76,"div",37),r.cc(77,"div",38),r.cc(78,"label",39),r.Lc(79,"Status"),r.bc(),r.bc(),r.cc(80,"select",40),r.kc("ngModelChange",(function(e){return c.status=e}))("change",(function(e){return c.addStatus(e.target.value)})),r.cc(81,"option",41),r.Lc(82,"Active"),r.bc(),r.cc(83,"option",42),r.Lc(84,"Inactive"),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(85,"div",25),r.cc(86,"div",43),r.cc(87,"button",44),r.kc("click",(function(){return c.addEmployee()})),r.Lc(88,"SUBMIT"),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(89,"div",45,46),r.cc(91,"div",21),r.cc(92,"div",22),r.Jc(93,f,42,10,"form",47),r.bc(),r.bc(),r.bc()),2&e){var t=r.Cc(42),n=r.Cc(48);r.Jb(10),r.uc("ngModel",c.selectedPerPage),r.Jb(17),r.Nb("fa-caret-down",!c.sortOrder)("fa-caret-up",c.sortOrder),r.Jb(13),r.uc("ngIf",null==c.employeeList?null:c.employeeList.length)("ngIfElse",t),r.Jb(15),r.uc("ngModel",c.firstName),r.Jb(3),r.uc("ngModel",c.lastName),r.Jb(4),r.uc("ngModel",c.email),r.Jb(3),r.uc("ngModel",c.password),r.Jb(4),r.uc("ngModel",c.phone),r.Jb(3),r.uc("ngModel",c.designation),r.Jb(8),r.uc("ngModel",c.status),r.Jb(7),r.uc("disabled",!n.valid),r.Jb(6),r.uc("ngIf",c.detail)}},directives:[o.p,o.h,o.k,o.l,o.r,n.l,u.c,o.s,o.i,o.j,o.b,o.o,n.k],pipes:[u.b,n.r],styles:[""]}),v)}],L=((y=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ub({type:y}),y.\u0275inj=r.Tb({factory:function(e){return new(e||y)},imports:[[i.h.forChild(C)],i.h]}),y),k=t("wloI"),w=t("ZOsW"),E=t("AytR"),J=t("tk/3"),S=((M=function(){function e(c){_classCallCheck(this,e),this.http=c}return _createClass(e,[{key:"getEmployeeList",value:function(e,c){return this.http.get("".concat(E.a.apiURL,"/users/view/all?per_page=").concat(e,"&current_page=").concat(c))}},{key:"addEmployee",value:function(e){return this.http.post("".concat(E.a.apiURL,"/users/signup"),e)}},{key:"deleteEmployee",value:function(e){return this.http.get("".concat(E.a.apiURL,"/users/").concat(e,"/delete"))}},{key:"getEmployeeDetail",value:function(e){return this.http.get("".concat(E.a.apiURL,"/users/").concat(e,"/details"))}},{key:"editEmployeeDetail",value:function(e,c){return this.http.put("".concat(E.a.apiURL,"/users/").concat(e,"/edit"),c)}}]),e}()).\u0275fac=function(e){return new(e||M)(r.gc(J.a))},M.\u0275prov=r.Sb({token:M,factory:M.\u0275fac,providedIn:"root"}),M);t.d(c,"EmployeeModule",(function(){return _}));var P,_=((P=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ub({type:P}),P.\u0275inj=r.Tb({factory:function(e){return new(e||P)},providers:[S],imports:[[n.b,L,o.d,w.a,k.a,u.a]]}),P)}}]);