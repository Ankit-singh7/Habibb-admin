(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/uUt":function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var r=c("7o/Q");function i(e,t){return c=>c.lift(new a(e,t))}class a{constructor(e,t){this.compare=e,this.keySelector=t}call(e,t){return t.subscribe(new n(e,this.compare,this.keySelector))}}class n extends r.a{constructor(e,t,c){super(e),this.keySelector=c,this.hasKey=!1,"function"==typeof t&&(this.compare=t)}compare(e,t){return e===t}_next(e){let t;try{const{keySelector:c}=this;t=c?c(e):e}catch(r){return this.destination.error(r)}let c=!1;if(this.hasKey)try{const{compare:e}=this;c=e(this.key,t)}catch(r){return this.destination.error(r)}else this.hasKey=!0;c||(this.key=t,this.destination.next(e))}}},"1P4n":function(e,t,c){"use strict";c.r(t);var r=c("ofXK"),i=c("3Pt+"),a=c("wloI"),n=c("ZOsW"),o=c("oOf3"),s=c("tyNb"),l=c("PSD3"),d=c.n(l),h=c("xgIS"),u=c("lJxs"),b=c("Kj3r"),p=c("/uUt"),g=c("fXoL"),m=c("rwBg"),f=c("f4UJ"),v=c("AXIP");const M=["closeEditModal"],y=["operatorName"];function w(e,t){if(1&e){const e=g.dc();g.cc(0,"tr"),g.cc(1,"td"),g.cc(2,"B"),g.Mc(3),g.pc(4,"titlecase"),g.pc(5,"titlecase"),g.bc(),g.bc(),g.cc(6,"td"),g.Mc(7),g.bc(),g.cc(8,"td"),g.Mc(9),g.bc(),g.cc(10,"td"),g.Mc(11),g.bc(),g.cc(12,"td"),g.Mc(13),g.bc(),g.cc(14,"td"),g.cc(15,"button",48),g.kc("click",(function(){g.Fc(e);const c=t.$implicit;return g.oc(2).getUserDetail(c.user_id)})),g.Xb(16,"i",49),g.bc(),g.cc(17,"button",50),g.kc("click",(function(){g.Fc(e);const c=t.index,r=t.$implicit;return g.oc(2).deleteUser(c,r.user_id)})),g.Xb(18,"i",51),g.bc(),g.bc(),g.bc()}if(2&e){const e=t.$implicit;g.Jb(3),g.Pc("",g.qc(4,6,e.f_name)," ",g.qc(5,8,e.l_name),""),g.Jb(4),g.Nc(e.phone),g.Jb(2),g.Nc(e.email),g.Jb(2),g.Nc(e.password),g.Jb(2),g.Nc(e.branch_name)}}const L=function(e,t,c){return{itemsPerPage:e,currentPage:t,totalItems:c}};function C(e,t){if(1&e&&(g.cc(0,"tbody"),g.Kc(1,w,19,10,"tr",42),g.pc(2,"paginate"),g.bc()),2&e){const e=g.oc();g.Jb(1),g.vc("ngForOf",g.rc(2,1,e.operatorList,g.Ac(4,L,e.selectedPerPage,e.currentpage,e.total)))}}function k(e,t){if(1&e&&(g.cc(0,"tbody"),g.cc(1,"tr"),g.cc(2,"td",52),g.Mc(3),g.bc(),g.bc(),g.bc()),2&e){const e=g.oc();g.Jb(3),g.Nc(e.response)}}function U(e,t){if(1&e&&(g.ac(0),g.cc(1,"option",53),g.Mc(2),g.bc(),g.Zb()),2&e){const e=t.$implicit;g.Jb(1),g.vc("value",e.branch_id),g.Jb(1),g.Nc(e.branch_name)}}function N(e,t){if(1&e&&(g.ac(0),g.cc(1,"option",61),g.Mc(2),g.bc(),g.Zb()),2&e){const e=t.$implicit,c=g.oc(2);g.Jb(1),g.vc("value",e.branch_id)("selected",c.detail.branch_id===e.branch_id),g.Jb(1),g.Nc(e.branch_name)}}function J(e,t){if(1&e){const e=g.dc();g.cc(0,"form",54,55),g.cc(2,"div",28),g.cc(3,"div",29),g.cc(4,"h5"),g.Mc(5,"Edit Employee Detail"),g.bc(),g.bc(),g.cc(6,"div",30),g.cc(7,"div",31),g.cc(8,"input",56),g.kc("ngModelChange",(function(t){return g.Fc(e),g.oc().detail.f_name=t})),g.bc(),g.bc(),g.bc(),g.cc(9,"div",33),g.cc(10,"div",31),g.cc(11,"input",57),g.kc("ngModelChange",(function(t){return g.Fc(e),g.oc().detail.l_name=t})),g.bc(),g.bc(),g.bc(),g.bc(),g.cc(12,"div",28),g.cc(13,"div",30),g.cc(14,"div",31),g.cc(15,"input",35),g.kc("ngModelChange",(function(t){return g.Fc(e),g.oc().detail.email=t})),g.bc(),g.bc(),g.bc(),g.cc(16,"div",33),g.cc(17,"div",31),g.cc(18,"input",58),g.kc("ngModelChange",(function(t){return g.Fc(e),g.oc().detail.phone=t})),g.bc(),g.bc(),g.bc(),g.bc(),g.cc(19,"div",28),g.cc(20,"div",30),g.cc(21,"div",31),g.cc(22,"input",59),g.kc("ngModelChange",(function(t){return g.Fc(e),g.oc().detail.password=t})),g.bc(),g.bc(),g.bc(),g.cc(23,"div",33),g.cc(24,"div",31),g.cc(25,"div",38),g.cc(26,"div",39),g.cc(27,"label",40),g.Mc(28,"Branch"),g.bc(),g.bc(),g.cc(29,"select",60),g.kc("ngModelChange",(function(t){return g.Fc(e),g.oc().detail.branch_id=t}))("change",(function(t){return g.Fc(e),g.oc().changeBranch(t.target.value)})),g.Kc(30,N,3,3,"ng-container",42),g.bc(),g.bc(),g.bc(),g.bc(),g.bc(),g.cc(31,"div",28),g.cc(32,"div",43),g.cc(33,"button",44),g.kc("click",(function(){g.Fc(e);const t=g.oc();return t.editUser(t.detail.user_id)})),g.Mc(34,"EDIT"),g.bc(),g.bc(),g.bc(),g.bc()}if(2&e){const e=g.Dc(1),t=g.oc();g.Jb(8),g.vc("ngModel",t.detail.f_name),g.Jb(3),g.vc("ngModel",t.detail.l_name),g.Jb(4),g.vc("ngModel",t.detail.email),g.Jb(3),g.vc("ngModel",t.detail.phone),g.Jb(4),g.vc("ngModel",t.detail.password),g.Jb(7),g.vc("ngModel",t.detail.branch_id),g.Jb(1),g.vc("ngForOf",t.branchList),g.Jb(3),g.vc("disabled",!e.valid)}}const $=[{path:"",component:(()=>{class e{constructor(e,t,c,r){this.router=e,this.userService=t,this.branchService=c,this.ui=r,this.name=[],this.response="No Data Found",this.sortOrder=!1,this.fullName=localStorage.getItem("name"),this.operatorList=[],this.branchList=[],this.selectedPerPage=10,this.currentpage=1,this.onLimitSelect=e=>{this.selectedPerPage=e,this.getOperatorList()},this.logout=()=>{localStorage.setItem("isLoggedIn",String(!1)),this.router.navigate(["/login"])}}ngOnInit(){this.getOperatorList(),this.getBranchList()}ngAfterViewInit(){Object(h.a)(this.operatorName.nativeElement,"input").pipe(Object(u.a)(e=>e.target.value)).pipe(Object(b.a)(1e3)).pipe(Object(p.a)()).subscribe(e=>{this.firstName=e?this.titleCase(e):"",this.getOperatorList()})}titleCase(e){for(var t=e.toLowerCase().split(" "),c=0;c<t.length;c++)t[c]=t[c][0].toUpperCase()+t[c].slice(1);return t}addStatus(e){this.status=e,console.log(this.status)}changeBranch(e){this.selectedBranch=e,console.log(e)}editStatus(e){this.detail.status=e,console.log(this.status)}getOperatorList(e){this.ui.loader.show(),e&&(this.currentpage=e);let t={f_name:this.firstName},c="";for(let r in t)t[r]&&(c=`${c}${r}=${t[r]}&`);console.log(c),this.userService.getAllOperator(c,this.selectedPerPage,this.currentpage).subscribe(e=>{e.data&&(this.operatorList=e.data.result,this.total=e.data.total),this.ui.loader.hide()},e=>this.ui.loader.hide())}getBranchList(){this.branchService.getBranchList().subscribe(e=>{this.branchList=e.data?e.data:[]})}addOperator(){this.ui.loader.show();const e={f_name:this.firstName,l_name:this.lastName,phone:this.phone,email:this.email,password:this.password,branch_id:this.selectedBranch,role:"operator",status:this.status};this.operatorList.push(e),this.userService.addEmployee(e).subscribe(e=>{this.firstName="",this.lastName="",this.phone="",this.email="",this.password="",this.status="",d.a.fire({icon:"success",title:"User Created Successfully",showConfirmButton:!1,timer:1500}),this.ui.loader.hide()},e=>this.ui.loader.hide())}changeOrder(e){this.sortOrder=!this.sortOrder,this.field=e,this.operatorList.sort((t,c)=>this.sortOrder?c[e].localeCompare(t[e]):t[e].localeCompare(c[e]))}deleteUser(e,t){d.a.fire({title:"Do you want to delete this User?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then(c=>{c.isConfirmed&&(this.ui.loader.show(),this.userService.deleteUser(t).subscribe(t=>{d.a.fire({icon:"success",title:"User Deleted Successfully",showConfirmButton:!1,timer:1500}),this.operatorList.splice(e,1),this.ui.loader.hide()},e=>this.ui.loader.hide()))})}getUserDetail(e){this.userService.getUserDetail(e).subscribe(e=>{e.data&&(this.detail=e.data)})}editUser(e){this.ui.loader.show(),delete this.detail.validationToken,delete this.detail.createdOn,this.userService.editUser(e,this.detail).subscribe(e=>{this.closeEditModal.nativeElement.click(),this.detail={},this.ui.loader.hide(),this.getOperatorList()},e=>{this.ui.loader.hide()})}}return e.\u0275fac=function(t){return new(t||e)(g.Wb(s.e),g.Wb(m.a),g.Wb(f.a),g.Wb(v.a))},e.\u0275cmp=g.Qb({type:e,selectors:[["app-operator"]],viewQuery:function(e,t){var c;1&e&&(g.Rc(M,!0),g.Rc(y,!0)),2&e&&(g.Cc(c=g.lc())&&(t.closeEditModal=c.first),g.Cc(c=g.lc())&&(t.operatorName=c.first))},decls:90,vars:17,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-3"],[1,"form-group"],["data-toggle","modal","data-target","#addWaiter",1,"shortcut-btn","d-block","w-100"],[1,"offset-md-4","col-md-3","col-sm-12","cus-srch"],["type","text","id","birthday","placeholder","Search By First Name","name","searchName",1,"form-control","pl-0",3,"ngModel","ngModelChange"],["operatorName",""],[1,"col-sm-12","col-md-2"],["name","pay","id","pay",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],[2,"text-align","center",3,"pageChange"],["id","addWaiter","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],[1,"modal-dialog","modal-lg"],[1,"modal-content",2,"padding","2%"],["id","subform","role","form"],["subForm","ngForm"],[1,"row"],[1,"col-12"],[1,"offset-md-1","col-sm-12","col-md-5"],[1,"form-group","position-relative"],["type","text","placeholder","First Name","name","fname","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"col-sm-12","col-md-5"],["type","text","placeholder","Last Name","name","lname","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Email","name","em","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Password","name","pass","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Mobile Number","name","mob","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"input-group","mb-3"],[1,"input-group-prepend"],["for","inputGroupSelect01",1,"input-group-text"],["placeholder","Choose Status","id","inputGroupSelect01","name","branch",1,"custom-select",3,"ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],[1,"col-12",2,"text-align","center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["id","addWaiter2","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeEditModal",""],["id","subform2","role","form",4,"ngIf"],["type","button","data-toggle","modal","data-target","#addWaiter2",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-trash-o"],["colspan","100%",1,"text-center"],[3,"value"],["id","subform2","role","form"],["subForm2","ngForm"],["type","text","placeholder","First Name","name","fname1","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Last Name","name","lname1","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Phone","name","phe","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Password","name","esssm","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["placeholder","Choose Status","id","inputGroupSelect01","name","stat322",1,"custom-select",3,"ngModel","ngModelChange","change"],[3,"value","selected"]],template:function(e,t){if(1&e&&(g.cc(0,"div",0),g.cc(1,"div",1),g.cc(2,"div",2),g.cc(3,"div",3),g.cc(4,"button",4),g.cc(5,"b"),g.Mc(6,"+ Add Operator"),g.bc(),g.bc(),g.bc(),g.bc(),g.cc(7,"div",5),g.cc(8,"div",3),g.Mc(9," SEARCH BY NAME "),g.cc(10,"input",6,7),g.kc("ngModelChange",(function(e){return t.firstName=e})),g.bc(),g.bc(),g.bc(),g.cc(12,"div",8),g.cc(13,"div",3),g.Mc(14," SELECT PER PAGE "),g.cc(15,"select",9),g.kc("ngModelChange",(function(e){return t.selectedPerPage=e}))("change",(function(e){return t.onLimitSelect(e.target.value)})),g.cc(16,"option",10),g.Mc(17,"10"),g.bc(),g.cc(18,"option",11),g.Mc(19,"25"),g.bc(),g.cc(20,"option",12),g.Mc(21,"50"),g.bc(),g.cc(22,"option",13),g.Mc(23,"100"),g.bc(),g.bc(),g.bc(),g.bc(),g.cc(24,"div",14),g.cc(25,"div",15),g.cc(26,"table",16),g.cc(27,"thead"),g.cc(28,"tr"),g.cc(29,"th",17),g.Mc(30,"Name"),g.cc(31,"a",18),g.kc("click",(function(){return t.changeOrder("firstName")})),g.Xb(32,"i",19),g.bc(),g.bc(),g.cc(33,"th",17),g.Mc(34,"Phone"),g.bc(),g.cc(35,"th",17),g.Mc(36,"User Name"),g.bc(),g.cc(37,"th",17),g.Mc(38,"Password"),g.bc(),g.cc(39,"th",17),g.Mc(40,"Branch"),g.bc(),g.cc(41,"th",17),g.Mc(42,"Action"),g.bc(),g.bc(),g.bc(),g.Kc(43,C,3,8,"tbody",20),g.Kc(44,k,4,1,"ng-template",null,21,g.Lc),g.bc(),g.cc(46,"pagination-controls",22),g.kc("pageChange",(function(e){return t.getOperatorList(e)})),g.bc(),g.bc(),g.bc(),g.bc(),g.bc(),g.cc(47,"div",23),g.cc(48,"div",24),g.cc(49,"div",25),g.cc(50,"form",26,27),g.cc(52,"div",28),g.cc(53,"div",29),g.cc(54,"h5"),g.Mc(55,"Add an Employee"),g.bc(),g.bc(),g.cc(56,"div",30),g.cc(57,"div",31),g.cc(58,"input",32),g.kc("ngModelChange",(function(e){return t.firstName=e})),g.bc(),g.bc(),g.bc(),g.cc(59,"div",33),g.cc(60,"div",31),g.cc(61,"input",34),g.kc("ngModelChange",(function(e){return t.lastName=e})),g.bc(),g.bc(),g.bc(),g.bc(),g.cc(62,"div",28),g.cc(63,"div",30),g.cc(64,"div",31),g.cc(65,"input",35),g.kc("ngModelChange",(function(e){return t.email=e})),g.bc(),g.bc(),g.bc(),g.cc(66,"div",33),g.cc(67,"div",31),g.cc(68,"input",36),g.kc("ngModelChange",(function(e){return t.password=e})),g.bc(),g.bc(),g.bc(),g.bc(),g.cc(69,"div",28),g.cc(70,"div",30),g.cc(71,"div",31),g.cc(72,"input",37),g.kc("ngModelChange",(function(e){return t.phone=e})),g.bc(),g.bc(),g.bc(),g.cc(73,"div",33),g.cc(74,"div",31),g.cc(75,"div",38),g.cc(76,"div",39),g.cc(77,"label",40),g.Mc(78,"Branch"),g.bc(),g.bc(),g.cc(79,"select",41),g.kc("ngModelChange",(function(e){return t.selectedBranch=e}))("change",(function(e){return t.changeBranch(e.target.value)})),g.Kc(80,U,3,2,"ng-container",42),g.bc(),g.bc(),g.bc(),g.bc(),g.bc(),g.cc(81,"div",28),g.cc(82,"div",43),g.cc(83,"button",44),g.kc("click",(function(){return t.addOperator()})),g.Mc(84,"SUBMIT"),g.bc(),g.bc(),g.bc(),g.bc(),g.bc(),g.bc(),g.bc(),g.cc(85,"div",45,46),g.cc(87,"div",24),g.cc(88,"div",25),g.Kc(89,J,35,8,"form",47),g.bc(),g.bc(),g.bc()),2&e){const e=g.Dc(45),c=g.Dc(51);g.Jb(10),g.vc("ngModel",t.firstName),g.Jb(5),g.vc("ngModel",t.selectedPerPage),g.Jb(17),g.Nb("fa-caret-down",!t.sortOrder)("fa-caret-up",t.sortOrder),g.Jb(11),g.vc("ngIf",null==t.operatorList?null:t.operatorList.length)("ngIfElse",e),g.Jb(15),g.vc("ngModel",t.firstName),g.Jb(3),g.vc("ngModel",t.lastName),g.Jb(4),g.vc("ngModel",t.email),g.Jb(3),g.vc("ngModel",t.password),g.Jb(4),g.vc("ngModel",t.phone),g.Jb(7),g.vc("ngModel",t.selectedBranch),g.Jb(1),g.vc("ngForOf",t.branchList),g.Jb(3),g.vc("disabled",!c.valid),g.Jb(6),g.vc("ngIf",t.detail)}},directives:[i.b,i.h,i.k,i.p,i.l,i.r,r.l,o.c,i.s,i.i,i.j,i.o,r.k],pipes:[o.b,r.r],styles:[""]}),e})()}];let S=(()=>{class e{}return e.\u0275mod=g.Ub({type:e}),e.\u0275inj=g.Tb({factory:function(t){return new(t||e)},imports:[[s.h.forChild($)],s.h]}),e})();c.d(t,"OperatorModule",(function(){return O}));let O=(()=>{class e{}return e.\u0275mod=g.Ub({type:e}),e.\u0275inj=g.Tb({factory:function(t){return new(t||e)},providers:[m.a],imports:[[r.b,S,i.d,n.a,a.a,o.a]]}),e})()},f4UJ:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var r=c("AytR"),i=c("fXoL"),a=c("tk/3");let n=(()=>{class e{constructor(e){this.http=e}getBranchList(){return this.http.get(`${r.a.apiURL}/branch`)}addBranch(e){return this.http.post(`${r.a.apiURL}/branch`,e)}deleteBranch(e){return this.http.delete(`${r.a.apiURL}/branch/${e}`)}getBranchDetail(e){return this.http.get(`${r.a.apiURL}/branch/${e}`)}editBranch(e,t){return this.http.put(`${r.a.apiURL}/branch/${e}`,t)}}return e.\u0275fac=function(t){return new(t||e)(i.gc(a.a))},e.\u0275prov=i.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},rwBg:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var r=c("AytR"),i=c("fXoL"),a=c("tk/3");let n=(()=>{class e{constructor(e){this.http=e}login(e){return this.http.post(`${r.a.apiURL}/user/login`,e)}changePassword(e){return this.http.post(`${r.a.apiURL}/admin/forgotPassword`,e)}getAllEmployee(e,t,c){return this.http.get(`${r.a.apiURL}/user/e?per_page=${t}&current_page=${c}&${e||""}`)}getAllOperator(e,t,c){return this.http.get(`${r.a.apiURL}/user/o?per_page=${t}&current_page=${c}&${e||""}`)}addEmployee(e){return this.http.post(`${r.a.apiURL}/user`,e)}addOperator(e){return this.http.post(`${r.a.apiURL}/user`,e)}editUser(e,t){return this.http.put(`${r.a.apiURL}/user/${e}`,t)}deleteUser(e){return this.http.delete(`${r.a.apiURL}/user/${e}`)}getUserDetail(e){return this.http.get(`${r.a.apiURL}/user/${e}`)}getAllUsers(e,t){return this.http.get(`${r.a.apiURL}/users/view/all?per_page=${e}&current_page=${t}`)}}return e.\u0275fac=function(t){return new(t||e)(i.gc(a.a))},e.\u0275prov=i.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);