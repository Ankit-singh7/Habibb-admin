(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2LlD":function(e,t,c){"use strict";c.r(t);var n=c("ofXK"),o=c("tyNb"),i=c("wd/R"),r=c("PSD3"),s=c.n(r),l=c("fXoL"),a=c("nwg1"),d=c("rwBg"),h=c("f4UJ"),u=c("AXIP"),b=c("3Pt+"),p=c("X+I5");const g=["closeEditModal"];function f(e,t){if(1&e&&(l.ac(0),l.cc(1,"option",23),l.Mc(2),l.bc(),l.Zb()),2&e){const e=t.$implicit;l.Jb(1),l.vc("value",e.id),l.Jb(1),l.Nc(e.name)}}function m(e,t){if(1&e&&(l.ac(0),l.cc(1,"option",23),l.Mc(2),l.bc(),l.Zb()),2&e){const e=t.$implicit;l.Jb(1),l.vc("value",e.id),l.Jb(1),l.Nc(e.name)}}function v(e,t){if(1&e&&(l.ac(0),l.cc(1,"td"),l.cc(2,"B"),l.Mc(3),l.pc(4,"titlecase"),l.bc(),l.bc(),l.cc(5,"td"),l.Mc(6),l.bc(),l.Zb()),2&e){const e=l.oc().$implicit;l.Jb(3),l.Nc(l.qc(4,2,e.product_name)),l.Jb(3),l.Nc(e.quantity)}}function y(e,t){if(1&e&&(l.cc(0,"tr"),l.Kc(1,v,7,4,"ng-container",25),l.bc()),2&e){const e=t.$implicit;l.Jb(1),l.vc("ngIf",e.quantity>0)}}function S(e,t){if(1&e&&(l.cc(0,"tbody",24),l.Kc(1,y,2,1,"tr",5),l.pc(2,"filter"),l.bc()),2&e){const e=l.oc();l.Jb(1),l.vc("ngForOf",l.sc(2,1,e.reportList,"product_name",e.prodS))}}function M(e,t){if(1&e&&(l.cc(0,"tbody"),l.cc(1,"tr"),l.cc(2,"td",26),l.Mc(3),l.bc(),l.bc(),l.bc()),2&e){const e=l.oc();l.Jb(3),l.Nc(e.response)}}const D=[{path:"",component:(()=>{class e{constructor(e,t,c,n,o){this.router=e,this.salesService=t,this.userService=c,this.branchService=n,this.ui=o,this.name=[],this.sortOrder=!1,this.sortFields={quantity:!0,food_name:!0},this.reportList=[],this.response="No Data to Show",this.employeeList=[],this.branchList=[],this.selectedPerPage=10,this.currentpage=1,this.prodS="",this.getAllEmployee=()=>{this.userService.getAllEmployee().subscribe(e=>{if(e.data){let t=e.data.result.map(e=>({id:e.user_id,name:`${e.f_name} ${e.l_name}`}));this.employeeList=[{id:"",name:"All"},...t]}})},this.getAllBranch=()=>{this.branchService.getBranchList().subscribe(e=>{if(e.data){let t=e.data.map(e=>({id:e.branch_id,name:e.branch_name}));this.branchList=[{id:"",name:"All"},...t]}})},this.onLimitSelect=e=>{this.selectedPerPage=e,this.getAllReport()},this.logout=()=>{localStorage.setItem("isLoggedIn",String(!1)),this.router.navigate(["/login"])}}ngOnInit(){this.getAllReport(),this.getAllBranch(),this.getAllEmployee()}onOptionSelect(e,t){"branch"===e?"ALL"===t?this.selectedEmployee="":this.selectedBranchId=t:"employee"===e&&(this.selectedEmployee="ALL"===t?"":t),this.getAllReport()}getAllReport(){let e={startDate:i(this.selectedStartDate).format("DD-MM-YYYY"),endDate:i(this.selectedEndDate).format("DD-MM-YYYY"),branch_id:this.selectedBranchId,employee_id:this.selectedEmployee},t="";for(let c in e)e[c]&&(t=`${t}${c}=${e[c]}&`);this.ui.loader.show(),this.salesService.getAllProductSalesReport(t).subscribe(e=>{var t,c;if(this.reportList=[],null===(c=null===(t=e)||void 0===t?void 0:t.data)||void 0===c?void 0:c.result){let t=JSON.parse(JSON.stringify(e.data.result)),c=t.map(e=>e.product_id);console.log(c);for(let e=0;e<t.length;e++){let c=t.filter(c=>c.product_id===t[e].product_id);if(console.log(c),c.length>1){let e=JSON.parse(JSON.stringify(c[0])),t=0;for(let n=0;n<c.length;n++)t+=c[n].quantity;e.quantity=t,this.reportList.some(t=>t.product_id===e.product_id)||this.reportList.push(Object.assign({},e))}else this.reportList.push(c[0])}console.log(this.reportList)}this.ui.loader.hide()},e=>{this.ui.loader.hide()})}onDateSelect(){this.selectedStartDate?this.selectedEndDate?this.getAllReport():s.a.fire({icon:"warning",title:"Please Select End Date",showConfirmButton:!1,timer:1500}):s.a.fire({icon:"warning",title:"Please Select Start Date",showConfirmButton:!1,timer:1500})}changeOrder(e){this.sortOrder=!this.sortOrder,this.field=e,this.sortFields[e]=this.sortOrder,this.reportList.sort((t,c)=>"quantity"===e||"quantity"===e?this.sortOrder?c[e]-t[e]:t[e]-c[e]:this.sortOrder?c[e].localeCompare(t[e]):t[e].localeCompare(c[e]))}changedDate(e,t){"start"===e?this.selectedStartDate=t:"end"===e&&(this.selectedEndDate=t),console.log(this.selectedStartDate),console.log(this.selectedEndDate)}}return e.\u0275fac=function(t){return new(t||e)(l.Wb(o.e),l.Wb(a.a),l.Wb(d.a),l.Wb(h.a),l.Wb(u.a))},e.\u0275cmp=l.Qb({type:e,selectors:[["app-product-sales-report"]],viewQuery:function(e,t){var c;1&e&&l.Rc(g,!0),2&e&&l.Cc(c=l.lc())&&(t.closeEditModal=c.first)},decls:45,vars:17,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-5","cus-srch"],[1,"form-group"],["name","dev","id","dev",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],["name","cars","id","cars",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"col-sm-3","cus-srch"],["type","date","id","birthday1","placeholder","From Date","name","selectedSDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["type","date","id","birthday2","placeholder","To Date","name","selectedEDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"col-sm-3"],[1,"form-group","mt-3"],[1,"shortcut-btn","w-100",3,"click"],[1,"col-sm-12","col-md-3","cus-srch"],["type","text","id","birthday","placeholder","Search By Product","name","prodS",1,"form-control","pl-0",3,"ngModel","ngModelChange"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],["style","width:100%",4,"ngIf","ngIfElse"],["elseBlock",""],[3,"value"],[2,"width","100%"],[4,"ngIf"],["colspan","100%",1,"text-center"]],template:function(e,t){if(1&e&&(l.cc(0,"div",0),l.cc(1,"div",1),l.cc(2,"div",2),l.cc(3,"div",3),l.Mc(4," BRANCH WISE "),l.cc(5,"select",4),l.kc("ngModelChange",(function(e){return t.selectedBranchId=e}))("change",(function(e){return t.onOptionSelect("branch",e.target.value)})),l.Kc(6,f,3,2,"ng-container",5),l.bc(),l.bc(),l.bc(),l.cc(7,"div",2),l.cc(8,"div",3),l.Mc(9," EMPLOYEE WISE "),l.cc(10,"select",6),l.kc("ngModelChange",(function(e){return t.selectedEmployee=e}))("change",(function(e){return t.onOptionSelect("employee",e.target.value)})),l.Kc(11,m,3,2,"ng-container",5),l.bc(),l.bc(),l.bc(),l.cc(12,"div",7),l.cc(13,"div",3),l.Mc(14," FROM DATE "),l.cc(15,"input",8),l.kc("ngModelChange",(function(e){return t.selectedStartDate=e}))("change",(function(e){return t.changedDate("start",e.target.value)})),l.bc(),l.bc(),l.bc(),l.cc(16,"div",7),l.cc(17,"div",3),l.Mc(18," TO DATE "),l.cc(19,"input",9),l.kc("ngModelChange",(function(e){return t.selectedEndDate=e}))("change",(function(e){return t.changedDate("end",e.target.value)})),l.bc(),l.bc(),l.bc(),l.cc(20,"div",10),l.cc(21,"div",11),l.cc(22,"button",12),l.kc("click",(function(){return t.onDateSelect()})),l.cc(23,"b"),l.Mc(24,"SEARCH"),l.bc(),l.bc(),l.bc(),l.bc(),l.cc(25,"div",13),l.cc(26,"div",3),l.Mc(27," SEARCH BY PRODUCT "),l.cc(28,"input",14),l.kc("ngModelChange",(function(e){return t.prodS=e})),l.bc(),l.bc(),l.bc(),l.cc(29,"div",15),l.cc(30,"div",16),l.cc(31,"table",17),l.cc(32,"thead"),l.cc(33,"tr"),l.cc(34,"th",18),l.Mc(35,"Product Name"),l.cc(36,"a",19),l.kc("click",(function(){return t.changeOrder("food_name")})),l.Xb(37,"i",20),l.bc(),l.bc(),l.cc(38,"th",18),l.Mc(39,"Quantity Sold"),l.cc(40,"a",19),l.kc("click",(function(){return t.changeOrder("quantity")})),l.Xb(41,"i",20),l.bc(),l.bc(),l.bc(),l.bc(),l.Kc(42,S,3,5,"tbody",21),l.Kc(43,M,4,1,"ng-template",null,22,l.Lc),l.bc(),l.bc(),l.bc(),l.bc(),l.bc()),2&e){const e=l.Dc(44);l.Jb(5),l.vc("ngModel",t.selectedBranchId),l.Jb(1),l.vc("ngForOf",t.branchList),l.Jb(4),l.vc("ngModel",t.selectedEmployee),l.Jb(1),l.vc("ngForOf",t.employeeList),l.Jb(4),l.vc("ngModel",t.selectedStartDate),l.Jb(4),l.vc("ngModel",t.selectedEndDate),l.Jb(9),l.vc("ngModel",t.prodS),l.Jb(9),l.Nb("fa-caret-down",t.sortFields.food_name)("fa-caret-up",!t.sortFields.food_name),l.Jb(4),l.Nb("fa-caret-down",t.sortFields.quantity)("fa-caret-up",!t.sortFields.quantity),l.Jb(1),l.vc("ngIf",null==t.reportList?null:t.reportList.length)("ngIfElse",e)}},directives:[b.p,b.h,b.k,n.k,b.b,n.l,b.l,b.r],pipes:[p.a,n.r],styles:[""]}),e})()}];let E=(()=>{class e{}return e.\u0275mod=l.Ub({type:e}),e.\u0275inj=l.Tb({factory:function(t){return new(t||e)},imports:[[o.h.forChild(D)],o.h]}),e})();var L=c("wloI");c.d(t,"ProductSalesReportModule",(function(){return w}));let w=(()=>{class e{}return e.\u0275mod=l.Ub({type:e}),e.\u0275inj=l.Tb({factory:function(t){return new(t||e)},imports:[[n.b,b.d,E,L.a]]}),e})()}}]);