(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{aHER:function(t,e,c){"use strict";c.r(e);var r=c("ofXK"),n=c("tyNb"),i=c("wd/R"),a=c("PSD3"),s=c.n(a),o=c("fXoL"),l=c("nwg1"),d=c("rwBg"),h=c("f4UJ"),p=c("AXIP"),u=c("3Pt+");const g=["closeEditModal"];function b(t,e){if(1&t&&(o.ac(0),o.cc(1,"option",21),o.Mc(2),o.bc(),o.Zb()),2&t){const t=e.$implicit;o.Jb(1),o.vc("value",t.id),o.Jb(1),o.Nc(t.name)}}function f(t,e){if(1&t&&(o.ac(0),o.cc(1,"option",21),o.Mc(2),o.bc(),o.Zb()),2&t){const t=e.$implicit;o.Jb(1),o.vc("value",t.id),o.Jb(1),o.Nc(t.name)}}function m(t,e){if(1&t&&(o.ac(0),o.cc(1,"td"),o.cc(2,"B"),o.Mc(3),o.pc(4,"titlecase"),o.bc(),o.bc(),o.cc(5,"td"),o.Mc(6),o.bc(),o.Zb()),2&t){const t=o.oc().$implicit;o.Jb(3),o.Nc(o.qc(4,2,t.service_name)),o.Jb(3),o.Nc(t.quantity)}}function v(t,e){if(1&t&&(o.cc(0,"tr"),o.Kc(1,m,7,4,"ng-container",23),o.bc()),2&t){const t=e.$implicit;o.Jb(1),o.vc("ngIf",t.quantity>0)}}function y(t,e){if(1&t&&(o.cc(0,"tbody",22),o.Kc(1,v,2,1,"tr",5),o.bc()),2&t){const t=o.oc();o.Jb(1),o.vc("ngForOf",t.reportList)}}function L(t,e){if(1&t&&(o.cc(0,"tbody"),o.cc(1,"tr"),o.cc(2,"td",24),o.Mc(3),o.bc(),o.bc(),o.bc()),2&t){const t=o.oc();o.Jb(3),o.Nc(t.response)}}const S=[{path:"",component:(()=>{class t{constructor(t,e,c,r,n){this.router=t,this.salesService=e,this.userService=c,this.branchService=r,this.ui=n,this.name=[],this.sortOrder=!1,this.sortFields={quantity:!0,food_name:!0},this.reportList=[],this.employeeList=[],this.branchList=[],this.response="No Data to Show",this.selectedPerPage=10,this.currentpage=1,this.getAllEmployee=()=>{this.userService.getAllEmployee().subscribe(t=>{if(t.data){let e=t.data.result.map(t=>({id:t.user_id,name:`${t.f_name} ${t.l_name}`}));this.employeeList=[{id:"",name:"All"},...e]}})},this.getAllBranch=()=>{this.branchService.getBranchList().subscribe(t=>{if(t.data){let e=t.data.map(t=>({id:t.branch_id,name:t.branch_name}));this.branchList=[{id:"",name:"All"},...e]}})},this.onLimitSelect=t=>{this.selectedPerPage=t,this.getAllReport()},this.logout=()=>{localStorage.setItem("isLoggedIn",String(!1)),this.router.navigate(["/login"])}}ngOnInit(){this.getAllReport(),this.getAllBranch(),this.getAllEmployee()}onOptionSelect(t,e){"branch"===t?"ALL"===e?this.selectedEmployee="":this.selectedBranchId=e:"employee"===t&&(this.selectedEmployee="ALL"===e?"":e),this.getAllReport()}getAllReport(){let t={startDate:i(this.selectedStartDate).format("DD-MM-YYYY"),endDate:i(this.selectedEndDate).format("DD-MM-YYYY"),branch_id:this.selectedBranchId,employee_id:this.selectedEmployee},e="";for(let c in t)t[c]&&(e=`${e}${c}=${t[c]}&`);this.ui.loader.show(),this.salesService.getAllServiceSalesReport(e).subscribe(t=>{if(this.reportList=[],t.data.result){let e=JSON.parse(JSON.stringify(t.data.result)),c=e.map(t=>t.service_id);console.log(c);for(let t=0;t<e.length;t++){let c=e.filter(c=>c.service_id===e[t].service_id);if(console.log(c),c.length>1){let t=JSON.parse(JSON.stringify(c[0])),e=0;for(let r=0;r<c.length;r++)e+=c[r].quantity;t.quantity=e,this.reportList.some(e=>e.service_id===t.service_id)||this.reportList.push(Object.assign({},t))}else this.reportList.push(c[0])}console.log(this.reportList)}this.ui.loader.hide()},t=>{this.ui.loader.hide()})}onDateSelect(){this.selectedStartDate?this.selectedEndDate?this.getAllReport():s.a.fire({icon:"warning",title:"Please Select End Date",showConfirmButton:!1,timer:1500}):s.a.fire({icon:"warning",title:"Please Select Start Date",showConfirmButton:!1,timer:1500})}changeOrder(t){this.sortOrder=!this.sortOrder,this.field=t,this.sortFields[t]=this.sortOrder,this.reportList.sort((e,c)=>"quantity"===t||"quantity"===t?this.sortOrder?c[t]-e[t]:e[t]-c[t]:this.sortOrder?c[t].localeCompare(e[t]):e[t].localeCompare(c[t]))}changedDate(t,e){"start"===t?this.selectedStartDate=e:"end"===t&&(this.selectedEndDate=e),console.log(this.selectedStartDate),console.log(this.selectedEndDate)}}return t.\u0275fac=function(e){return new(e||t)(o.Wb(n.e),o.Wb(l.a),o.Wb(d.a),o.Wb(h.a),o.Wb(p.a))},t.\u0275cmp=o.Qb({type:t,selectors:[["app-appointment-list"]],viewQuery:function(t,e){var c;1&t&&o.Rc(g,!0),2&t&&o.Cc(c=o.lc())&&(e.closeEditModal=c.first)},decls:41,vars:16,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-5","cus-srch"],[1,"form-group"],["name","dev","id","dev",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],["name","cars","id","cars",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"col-sm-3","cus-srch"],["type","date","id","birthday1","placeholder","From Date","name","selectedSDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["type","date","id","birthday2","placeholder","To Date","name","selectedEDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"col-sm-3"],[1,"form-group","mt-3"],[1,"shortcut-btn","w-100",3,"click"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],["style","width:100%",4,"ngIf","ngIfElse"],["elseBlock",""],[3,"value"],[2,"width","100%"],[4,"ngIf"],["colspan","100%",1,"text-center"]],template:function(t,e){if(1&t&&(o.cc(0,"div",0),o.cc(1,"div",1),o.cc(2,"div",2),o.cc(3,"div",3),o.Mc(4," BRANCH WISE "),o.cc(5,"select",4),o.kc("ngModelChange",(function(t){return e.selectedBranchId=t}))("change",(function(t){return e.onOptionSelect("branch",t.target.value)})),o.Kc(6,b,3,2,"ng-container",5),o.bc(),o.bc(),o.bc(),o.cc(7,"div",2),o.cc(8,"div",3),o.Mc(9," EMPLOYEE WISE "),o.cc(10,"select",6),o.kc("ngModelChange",(function(t){return e.selectedEmployee=t}))("change",(function(t){return e.onOptionSelect("employee",t.target.value)})),o.Kc(11,f,3,2,"ng-container",5),o.bc(),o.bc(),o.bc(),o.cc(12,"div",7),o.cc(13,"div",3),o.Mc(14," FROM DATE "),o.cc(15,"input",8),o.kc("ngModelChange",(function(t){return e.selectedStartDate=t}))("change",(function(t){return e.changedDate("start",t.target.value)})),o.bc(),o.bc(),o.bc(),o.cc(16,"div",7),o.cc(17,"div",3),o.Mc(18," TO DATE "),o.cc(19,"input",9),o.kc("ngModelChange",(function(t){return e.selectedEndDate=t}))("change",(function(t){return e.changedDate("end",t.target.value)})),o.bc(),o.bc(),o.bc(),o.cc(20,"div",10),o.cc(21,"div",11),o.cc(22,"button",12),o.kc("click",(function(){return e.onDateSelect()})),o.cc(23,"b"),o.Mc(24,"SEARCH"),o.bc(),o.bc(),o.bc(),o.bc(),o.cc(25,"div",13),o.cc(26,"div",14),o.cc(27,"table",15),o.cc(28,"thead"),o.cc(29,"tr"),o.cc(30,"th",16),o.Mc(31,"Service Name"),o.cc(32,"a",17),o.kc("click",(function(){return e.changeOrder("food_name")})),o.Xb(33,"i",18),o.bc(),o.bc(),o.cc(34,"th",16),o.Mc(35,"Head Count"),o.cc(36,"a",17),o.kc("click",(function(){return e.changeOrder("quantity")})),o.Xb(37,"i",18),o.bc(),o.bc(),o.bc(),o.bc(),o.Kc(38,y,2,1,"tbody",19),o.Kc(39,L,4,1,"ng-template",null,20,o.Lc),o.bc(),o.bc(),o.bc(),o.bc(),o.bc()),2&t){const t=o.Dc(40);o.Jb(5),o.vc("ngModel",e.selectedBranchId),o.Jb(1),o.vc("ngForOf",e.branchList),o.Jb(4),o.vc("ngModel",e.selectedEmployee),o.Jb(1),o.vc("ngForOf",e.employeeList),o.Jb(4),o.vc("ngModel",e.selectedStartDate),o.Jb(4),o.vc("ngModel",e.selectedEndDate),o.Jb(14),o.Nb("fa-caret-down",e.sortFields.food_name)("fa-caret-up",!e.sortFields.food_name),o.Jb(4),o.Nb("fa-caret-down",e.sortFields.quantity)("fa-caret-up",!e.sortFields.quantity),o.Jb(1),o.vc("ngIf",null==e.reportList?null:e.reportList.length)("ngIfElse",t)}},directives:[u.p,u.h,u.k,r.k,u.b,r.l,u.l,u.r],pipes:[r.r],styles:[""]}),t})()}];let $=(()=>{class t{}return t.\u0275mod=o.Ub({type:t}),t.\u0275inj=o.Tb({factory:function(e){return new(e||t)},imports:[[n.h.forChild(S)],n.h]}),t})();c.d(e,"AppointmentListModule",(function(){return M}));let M=(()=>{class t{}return t.\u0275mod=o.Ub({type:t}),t.\u0275inj=o.Tb({factory:function(e){return new(e||t)},imports:[[r.b,u.d,$]]}),t})()},f4UJ:function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var r=c("AytR"),n=c("fXoL"),i=c("tk/3");let a=(()=>{class t{constructor(t){this.http=t}getBranchList(){return this.http.get(`${r.a.apiURL}/branch`)}addBranch(t){return this.http.post(`${r.a.apiURL}/branch`,t)}deleteBranch(t){return this.http.delete(`${r.a.apiURL}/branch/${t}`)}getBranchDetail(t){return this.http.get(`${r.a.apiURL}/branch/${t}`)}editBranch(t,e){return this.http.put(`${r.a.apiURL}/branch/${t}`,e)}}return t.\u0275fac=function(e){return new(e||t)(n.gc(i.a))},t.\u0275prov=n.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},rwBg:function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var r=c("AytR"),n=c("fXoL"),i=c("tk/3");let a=(()=>{class t{constructor(t){this.http=t}login(t){return this.http.post(`${r.a.apiURL}/user/login`,t)}changePassword(t){return this.http.post(`${r.a.apiURL}/admin/forgotPassword`,t)}getAllEmployee(t,e,c){return this.http.get(`${r.a.apiURL}/user/e?per_page=${e}&current_page=${c}&${t||""}`)}getAllOperator(t,e,c){return this.http.get(`${r.a.apiURL}/user/o?per_page=${e}&current_page=${c}&${t||""}`)}addEmployee(t){return this.http.post(`${r.a.apiURL}/user`,t)}addOperator(t){return this.http.post(`${r.a.apiURL}/user`,t)}editUser(t,e){return this.http.put(`${r.a.apiURL}/user/${t}`,e)}deleteUser(t){return this.http.delete(`${r.a.apiURL}/user/${t}`)}getUserDetail(t){return this.http.get(`${r.a.apiURL}/user/${t}`)}getAllUsers(t,e){return this.http.get(`${r.a.apiURL}/users/view/all?per_page=${t}&current_page=${e}`)}}return t.\u0275fac=function(e){return new(e||t)(n.gc(i.a))},t.\u0275prov=n.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);