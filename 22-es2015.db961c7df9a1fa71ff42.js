(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"/Vdb":function(e,t,c){"use strict";c.r(t);var n=c("ofXK"),i=c("tyNb"),r=c("wd/R"),o=c("PSD3"),s=c.n(o),a=c("fXoL"),l=c("nwg1"),d=c("rwBg"),h=c("f4UJ"),b=c("AXIP"),u=c("3Pt+"),g=c("X+I5");const p=["closeEditModal"];function f(e,t){if(1&e&&(a.ac(0),a.cc(1,"option",23),a.Mc(2),a.bc(),a.Zb()),2&e){const e=t.$implicit;a.Jb(1),a.vc("value",e.id),a.Jb(1),a.Nc(e.name)}}function m(e,t){if(1&e&&(a.ac(0),a.cc(1,"option",23),a.Mc(2),a.bc(),a.Zb()),2&e){const e=t.$implicit;a.Jb(1),a.vc("value",e.id),a.Jb(1),a.Nc(e.name)}}function v(e,t){if(1&e&&(a.ac(0),a.cc(1,"td"),a.cc(2,"B"),a.Mc(3),a.pc(4,"titlecase"),a.bc(),a.bc(),a.cc(5,"td"),a.Mc(6),a.bc(),a.Zb()),2&e){const e=a.oc().$implicit;a.Jb(3),a.Nc(a.qc(4,2,e.service_name)),a.Jb(3),a.Nc(e.quantity)}}function S(e,t){if(1&e&&(a.cc(0,"tr"),a.Kc(1,v,7,4,"ng-container",25),a.bc()),2&e){const e=t.$implicit;a.Jb(1),a.vc("ngIf",e.quantity>0)}}function y(e,t){if(1&e&&(a.cc(0,"tbody",24),a.Kc(1,S,2,1,"tr",5),a.pc(2,"filter"),a.bc()),2&e){const e=a.oc();a.Jb(1),a.vc("ngForOf",a.sc(2,1,e.reportList,"service_name",e.servS))}}function M(e,t){if(1&e&&(a.cc(0,"tbody"),a.cc(1,"tr"),a.cc(2,"td",26),a.Mc(3),a.bc(),a.bc(),a.bc()),2&e){const e=a.oc();a.Jb(3),a.Nc(e.response)}}const D=[{path:"",component:(()=>{class e{constructor(e,t,c,n,i){this.router=e,this.salesService=t,this.userService=c,this.branchService=n,this.ui=i,this.name=[],this.sortOrder=!1,this.sortFields={quantity:!0,food_name:!0},this.reportList=[],this.employeeList=[],this.branchList=[],this.response="No Data to Show",this.selectedPerPage=10,this.currentpage=1,this.servS="",this.getAllEmployee=()=>{this.userService.getAllEmployee().subscribe(e=>{if(e.data){let t=e.data.result.map(e=>({id:e.user_id,name:`${e.f_name} ${e.l_name}`}));this.employeeList=[{id:"",name:"All"},...t]}})},this.getAllBranch=()=>{this.branchService.getBranchList().subscribe(e=>{if(e.data){let t=e.data.map(e=>({id:e.branch_id,name:e.branch_name}));this.branchList=[{id:"",name:"All"},...t]}})},this.onLimitSelect=e=>{this.selectedPerPage=e,this.getAllReport()},this.logout=()=>{localStorage.setItem("isLoggedIn",String(!1)),this.router.navigate(["/login"])}}ngOnInit(){this.getAllReport(),this.getAllBranch(),this.getAllEmployee()}onOptionSelect(e,t){"branch"===e?"ALL"===t?this.selectedEmployee="":this.selectedBranchId=t:"employee"===e&&(this.selectedEmployee="ALL"===t?"":t),this.getAllReport()}getAllReport(){let e={startDate:r(this.selectedStartDate).format("DD-MM-YYYY"),endDate:r(this.selectedEndDate).format("DD-MM-YYYY"),branch_id:this.selectedBranchId,employee_id:this.selectedEmployee},t="";for(let c in e)e[c]&&(t=`${t}${c}=${e[c]}&`);this.ui.loader.show(),this.salesService.getAllServiceSalesReport(t).subscribe(e=>{var t,c;if(this.reportList=[],null===(c=null===(t=e)||void 0===t?void 0:t.data)||void 0===c?void 0:c.result){let t=JSON.parse(JSON.stringify(e.data.result)),c=t.map(e=>e.service_id);console.log(c);for(let e=0;e<t.length;e++){let c=t.filter(c=>c.service_id===t[e].service_id);if(console.log(c),c.length>1){let e=JSON.parse(JSON.stringify(c[0])),t=0;for(let n=0;n<c.length;n++)t+=c[n].quantity;e.quantity=t,this.reportList.some(t=>t.service_id===e.service_id)||this.reportList.push(Object.assign({},e))}else this.reportList.push(c[0])}console.log(this.reportList)}this.ui.loader.hide()},e=>{this.ui.loader.hide()})}onDateSelect(){this.selectedStartDate?this.selectedEndDate?this.getAllReport():s.a.fire({icon:"warning",title:"Please Select End Date",showConfirmButton:!1,timer:1500}):s.a.fire({icon:"warning",title:"Please Select Start Date",showConfirmButton:!1,timer:1500})}changeOrder(e){this.sortOrder=!this.sortOrder,this.field=e,this.sortFields[e]=this.sortOrder,this.reportList.sort((t,c)=>"quantity"===e||"quantity"===e?this.sortOrder?c[e]-t[e]:t[e]-c[e]:this.sortOrder?c[e].localeCompare(t[e]):t[e].localeCompare(c[e]))}changedDate(e,t){"start"===e?this.selectedStartDate=t:"end"===e&&(this.selectedEndDate=t),console.log(this.selectedStartDate),console.log(this.selectedEndDate)}}return e.\u0275fac=function(t){return new(t||e)(a.Wb(i.e),a.Wb(l.a),a.Wb(d.a),a.Wb(h.a),a.Wb(b.a))},e.\u0275cmp=a.Qb({type:e,selectors:[["app-service-sales-report"]],viewQuery:function(e,t){var c;1&e&&a.Rc(p,!0),2&e&&a.Cc(c=a.lc())&&(t.closeEditModal=c.first)},decls:45,vars:17,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-5","cus-srch"],[1,"form-group"],["name","dev","id","dev",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],["name","cars","id","cars",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"col-sm-3","cus-srch"],["type","date","id","birthday1","placeholder","From Date","name","selectedSDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["type","date","id","birthday2","placeholder","To Date","name","selectedEDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"col-sm-3"],[1,"form-group","mt-3"],[1,"shortcut-btn","w-100",3,"click"],[1,"col-sm-12","col-md-3","cus-srch"],["type","text","id","birthday","placeholder","Search By SERVICE","name","servS",1,"form-control","pl-0",3,"ngModel","ngModelChange"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],["style","width:100%",4,"ngIf","ngIfElse"],["elseBlock",""],[3,"value"],[2,"width","100%"],[4,"ngIf"],["colspan","100%",1,"text-center"]],template:function(e,t){if(1&e&&(a.cc(0,"div",0),a.cc(1,"div",1),a.cc(2,"div",2),a.cc(3,"div",3),a.Mc(4," BRANCH WISE "),a.cc(5,"select",4),a.kc("ngModelChange",(function(e){return t.selectedBranchId=e}))("change",(function(e){return t.onOptionSelect("branch",e.target.value)})),a.Kc(6,f,3,2,"ng-container",5),a.bc(),a.bc(),a.bc(),a.cc(7,"div",2),a.cc(8,"div",3),a.Mc(9," EMPLOYEE WISE "),a.cc(10,"select",6),a.kc("ngModelChange",(function(e){return t.selectedEmployee=e}))("change",(function(e){return t.onOptionSelect("employee",e.target.value)})),a.Kc(11,m,3,2,"ng-container",5),a.bc(),a.bc(),a.bc(),a.cc(12,"div",7),a.cc(13,"div",3),a.Mc(14," FROM DATE "),a.cc(15,"input",8),a.kc("ngModelChange",(function(e){return t.selectedStartDate=e}))("change",(function(e){return t.changedDate("start",e.target.value)})),a.bc(),a.bc(),a.bc(),a.cc(16,"div",7),a.cc(17,"div",3),a.Mc(18," TO DATE "),a.cc(19,"input",9),a.kc("ngModelChange",(function(e){return t.selectedEndDate=e}))("change",(function(e){return t.changedDate("end",e.target.value)})),a.bc(),a.bc(),a.bc(),a.cc(20,"div",10),a.cc(21,"div",11),a.cc(22,"button",12),a.kc("click",(function(){return t.onDateSelect()})),a.cc(23,"b"),a.Mc(24,"SEARCH"),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(25,"div",13),a.cc(26,"div",3),a.Mc(27," SEARCH BY SERVICE "),a.cc(28,"input",14),a.kc("ngModelChange",(function(e){return t.servS=e})),a.bc(),a.bc(),a.bc(),a.cc(29,"div",15),a.cc(30,"div",16),a.cc(31,"table",17),a.cc(32,"thead"),a.cc(33,"tr"),a.cc(34,"th",18),a.Mc(35,"Service Name"),a.cc(36,"a",19),a.kc("click",(function(){return t.changeOrder("food_name")})),a.Xb(37,"i",20),a.bc(),a.bc(),a.cc(38,"th",18),a.Mc(39,"Head Count"),a.cc(40,"a",19),a.kc("click",(function(){return t.changeOrder("quantity")})),a.Xb(41,"i",20),a.bc(),a.bc(),a.bc(),a.bc(),a.Kc(42,y,3,5,"tbody",21),a.Kc(43,M,4,1,"ng-template",null,22,a.Lc),a.bc(),a.bc(),a.bc(),a.bc(),a.bc()),2&e){const e=a.Dc(44);a.Jb(5),a.vc("ngModel",t.selectedBranchId),a.Jb(1),a.vc("ngForOf",t.branchList),a.Jb(4),a.vc("ngModel",t.selectedEmployee),a.Jb(1),a.vc("ngForOf",t.employeeList),a.Jb(4),a.vc("ngModel",t.selectedStartDate),a.Jb(4),a.vc("ngModel",t.selectedEndDate),a.Jb(9),a.vc("ngModel",t.servS),a.Jb(9),a.Nb("fa-caret-down",t.sortFields.food_name)("fa-caret-up",!t.sortFields.food_name),a.Jb(4),a.Nb("fa-caret-down",t.sortFields.quantity)("fa-caret-up",!t.sortFields.quantity),a.Jb(1),a.vc("ngIf",null==t.reportList?null:t.reportList.length)("ngIfElse",e)}},directives:[u.p,u.h,u.k,n.k,u.b,n.l,u.l,u.r],pipes:[g.a,n.r],styles:[""]}),e})()}];let E=(()=>{class e{}return e.\u0275mod=a.Ub({type:e}),e.\u0275inj=a.Tb({factory:function(t){return new(t||e)},imports:[[i.h.forChild(D)],i.h]}),e})();var w=c("wloI");c.d(t,"ServiceSalesReportModule",(function(){return J}));let J=(()=>{class e{}return e.\u0275mod=a.Ub({type:e}),e.\u0275inj=a.Tb({factory:function(t){return new(t||e)},imports:[[n.b,u.d,E,w.a]]}),e})()}}]);