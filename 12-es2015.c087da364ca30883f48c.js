(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/Vdb":function(e,c,t){"use strict";t.r(c);var n=t("ofXK"),i=t("tyNb"),r=t("wd/R"),a=t("PSD3"),o=t.n(a),l=t("fXoL"),s=t("nwg1"),d=t("rwBg"),b=t("f4UJ"),u=t("sumL"),h=t("AXIP"),g=t("3Pt+"),p=t("X+I5");const f=["closeEditModal"];function v(e,c){if(1&e&&(l.ac(0),l.cc(1,"option",29),l.Mc(2),l.bc(),l.Zb()),2&e){const e=c.$implicit;l.Jb(1),l.vc("value",e.id),l.Jb(1),l.Nc(e.name)}}function m(e,c){if(1&e&&(l.ac(0),l.cc(1,"option",29),l.Mc(2),l.bc(),l.Zb()),2&e){const e=c.$implicit;l.Jb(1),l.vc("value",e.id),l.Jb(1),l.Nc(e.name)}}function M(e,c){if(1&e&&(l.ac(0),l.cc(1,"td"),l.cc(2,"B"),l.Mc(3),l.pc(4,"titlecase"),l.bc(),l.bc(),l.cc(5,"td"),l.Mc(6),l.bc(),l.Zb()),2&e){const e=l.oc().$implicit;l.Jb(3),l.Nc(l.qc(4,2,e.service_name)),l.Jb(3),l.Nc(e.quantity)}}function y(e,c){if(1&e&&(l.cc(0,"tr"),l.Kc(1,M,7,4,"ng-container",5),l.bc()),2&e){const e=c.$implicit;l.Jb(1),l.vc("ngIf",(null==e?null:e.quantity)>0)}}function S(e,c){if(1&e&&(l.cc(0,"tbody",30),l.Kc(1,y,2,1,"tr",11),l.pc(2,"filter"),l.bc()),2&e){const e=l.oc(2);l.Jb(1),l.vc("ngForOf",l.sc(2,1,e.reportList,"service_name",e.servSC))}}function L(e,c){if(1&e&&(l.cc(0,"tbody"),l.cc(1,"tr"),l.cc(2,"td",31),l.Mc(3),l.bc(),l.bc(),l.bc()),2&e){const e=l.oc(2);l.Jb(3),l.Nc(e.response)}}function J(e,c){if(1&e){const e=l.dc();l.ac(0),l.cc(1,"div",6),l.cc(2,"div",7),l.cc(3,"div",8),l.cc(4,"div",9),l.Mc(5," BRANCH WISE "),l.cc(6,"select",10),l.kc("ngModelChange",(function(c){return l.Fc(e),l.oc().selectedBranchId=c}))("change",(function(c){return l.Fc(e),l.oc().onOptionSelect("branch",c.target.value)})),l.Kc(7,v,3,2,"ng-container",11),l.bc(),l.bc(),l.bc(),l.cc(8,"div",8),l.cc(9,"div",9),l.Mc(10," EMPLOYEE WISE "),l.cc(11,"select",12),l.kc("ngModelChange",(function(c){return l.Fc(e),l.oc().selectedEmployee=c}))("change",(function(c){return l.Fc(e),l.oc().onOptionSelect("employee",c.target.value)})),l.Kc(12,m,3,2,"ng-container",11),l.bc(),l.bc(),l.bc(),l.cc(13,"div",13),l.cc(14,"div",9),l.Mc(15," FROM DATE "),l.cc(16,"input",14),l.kc("ngModelChange",(function(c){return l.Fc(e),l.oc().selectedStartDate=c}))("change",(function(c){return l.Fc(e),l.oc().changedDate("start",c.target.value)})),l.bc(),l.bc(),l.bc(),l.cc(17,"div",13),l.cc(18,"div",9),l.Mc(19," TO DATE "),l.cc(20,"input",15),l.kc("ngModelChange",(function(c){return l.Fc(e),l.oc().selectedEndDate=c}))("change",(function(c){return l.Fc(e),l.oc().changedDate("end",c.target.value)})),l.bc(),l.bc(),l.bc(),l.cc(21,"div",16),l.cc(22,"div",17),l.cc(23,"button",18),l.kc("click",(function(){return l.Fc(e),l.oc().onDateSelect()})),l.cc(24,"b"),l.Mc(25,"SEARCH"),l.bc(),l.bc(),l.bc(),l.bc(),l.cc(26,"div",19),l.cc(27,"div",9),l.Mc(28," SEARCH BY SERVICE "),l.cc(29,"input",20),l.kc("ngModelChange",(function(c){return l.Fc(e),l.oc().servSC=c})),l.bc(),l.bc(),l.bc(),l.cc(30,"div",21),l.cc(31,"div",22),l.cc(32,"table",23),l.cc(33,"thead"),l.cc(34,"tr"),l.cc(35,"th",24),l.Mc(36,"Service Name"),l.cc(37,"a",25),l.kc("click",(function(){return l.Fc(e),l.oc().changeOrder("service_name")})),l.Xb(38,"i",26),l.bc(),l.bc(),l.cc(39,"th",24),l.Mc(40,"Quantity Sold"),l.cc(41,"a",25),l.kc("click",(function(){return l.Fc(e),l.oc().changeOrder("quantity")})),l.Xb(42,"i",26),l.bc(),l.bc(),l.bc(),l.bc(),l.Kc(43,S,3,5,"tbody",27),l.Kc(44,L,4,1,"ng-template",null,28,l.Lc),l.bc(),l.bc(),l.bc(),l.bc(),l.bc(),l.Zb()}if(2&e){const e=l.Dc(45),c=l.oc();l.Jb(1),l.Nb("active","custom"===c.selectedTab),l.Jb(5),l.vc("ngModel",c.selectedBranchId),l.Jb(1),l.vc("ngForOf",c.branchList),l.Jb(4),l.vc("ngModel",c.selectedEmployee),l.Jb(1),l.vc("ngForOf",c.employeeList),l.Jb(4),l.vc("ngModel",c.selectedStartDate),l.Jb(4),l.vc("ngModel",c.selectedEndDate),l.Jb(9),l.vc("ngModel",c.servSC),l.Jb(9),l.Nb("fa-caret-down",c.sortFields.service_name)("fa-caret-up",!c.sortFields.service_name),l.Jb(4),l.Nb("fa-caret-down",c.sortFields.quantity)("fa-caret-up",!c.sortFields.quantity),l.Jb(1),l.vc("ngIf",null==c.reportList?null:c.reportList.length)("ngIfElse",e)}}function $(e,c){if(1&e&&(l.ac(0),l.cc(1,"option",29),l.Mc(2),l.bc(),l.Zb()),2&e){const e=c.$implicit;l.Jb(1),l.vc("value",e.id),l.Jb(1),l.Nc(e.name)}}function k(e,c){if(1&e&&(l.ac(0),l.cc(1,"option",29),l.Mc(2),l.bc(),l.Zb()),2&e){const e=c.$implicit;l.Jb(1),l.vc("value",e.id),l.Jb(1),l.Nc(e.name)}}function F(e,c){if(1&e&&(l.ac(0),l.cc(1,"option",29),l.Mc(2),l.bc(),l.Zb()),2&e){const e=c.$implicit;l.Jb(1),l.vc("value",e),l.Jb(1),l.Nc(e)}}function R(e,c){if(1&e&&(l.ac(0),l.cc(1,"td"),l.cc(2,"B"),l.Mc(3),l.pc(4,"titlecase"),l.bc(),l.bc(),l.cc(5,"td"),l.Mc(6),l.bc(),l.Zb()),2&e){const e=l.oc().$implicit;l.Jb(3),l.Nc(l.qc(4,2,e.service_name)),l.Jb(3),l.Nc(e.quantity)}}function E(e,c){if(1&e&&(l.cc(0,"tr"),l.Kc(1,R,7,4,"ng-container",5),l.bc()),2&e){const e=c.$implicit;l.Jb(1),l.vc("ngIf",(null==e?null:e.quantity)>0)}}function N(e,c){if(1&e&&(l.cc(0,"tbody",30),l.Kc(1,E,2,1,"tr",11),l.pc(2,"filter"),l.bc()),2&e){const e=l.oc().$implicit,c=l.oc(3);l.Jb(1),l.vc("ngForOf",l.sc(2,1,e.result,"service_name",c.servSY))}}function O(e,c){1&e&&(l.cc(0,"tbody"),l.cc(1,"tr"),l.cc(2,"td",31),l.Mc(3,"Data Not Available"),l.bc(),l.bc(),l.bc())}function w(e,c){if(1&e){const e=l.dc();l.ac(0),l.cc(1,"div",36),l.cc(2,"div",7),l.cc(3,"div",21),l.cc(4,"div",22),l.cc(5,"table",23),l.cc(6,"thead"),l.cc(7,"tr"),l.cc(8,"th",24),l.Mc(9,"Service Name"),l.cc(10,"a",25),l.kc("click",(function(){return l.Fc(e),l.oc(3).changeOrder("service_name")})),l.Xb(11,"i",26),l.bc(),l.bc(),l.cc(12,"th",24),l.Mc(13,"Quantity Sold"),l.cc(14,"a",25),l.kc("click",(function(){return l.Fc(e),l.oc(3).changeOrder("quantity")})),l.Xb(15,"i",26),l.bc(),l.bc(),l.bc(),l.bc(),l.Kc(16,N,3,5,"tbody",27),l.Kc(17,O,4,0,"ng-template",null,28,l.Lc),l.bc(),l.bc(),l.bc(),l.bc(),l.bc(),l.Zb()}if(2&e){const e=c.$implicit,t=l.Dc(18),n=l.oc(3);l.Jb(1),l.Nb("active",n.selectedMonth===e.month),l.Jb(10),l.Nb("fa-caret-down",n.sortFields.service_name)("fa-caret-up",!n.sortFields.service_name),l.Jb(4),l.Nb("fa-caret-down",n.sortFields.quantity)("fa-caret-up",!n.sortFields.quantity),l.Jb(1),l.vc("ngIf",null==e?null:e.result.length)("ngIfElse",t)}}function Y(e,c){if(1&e){const e=l.dc();l.cc(0,"div",4),l.cc(1,"div",33),l.cc(2,"div",19),l.cc(3,"div",9),l.Mc(4," BRANCH WISE "),l.cc(5,"select",10),l.kc("ngModelChange",(function(c){return l.Fc(e),l.oc(2).selectedBranchId=c}))("change",(function(c){return l.Fc(e),l.oc(2).onYearOptionSelect("branch",c.target.value)})),l.Kc(6,$,3,2,"ng-container",11),l.bc(),l.bc(),l.bc(),l.cc(7,"div",19),l.cc(8,"div",9),l.Mc(9," EMPLOYEE WISE "),l.cc(10,"select",12),l.kc("ngModelChange",(function(c){return l.Fc(e),l.oc(2).selectedEmployee=c}))("change",(function(c){return l.Fc(e),l.oc(2).onYearOptionSelect("employee",c.target.value)})),l.Kc(11,k,3,2,"ng-container",11),l.bc(),l.bc(),l.bc(),l.cc(12,"div",19),l.cc(13,"div",9),l.Mc(14," SEARCH BY SERVICE "),l.cc(15,"input",34),l.kc("ngModelChange",(function(c){return l.Fc(e),l.oc(2).servSY=c})),l.bc(),l.bc(),l.bc(),l.cc(16,"div",19),l.cc(17,"div",9),l.Mc(18," SELECT YEAR "),l.cc(19,"select",35),l.kc("ngModelChange",(function(c){return l.Fc(e),l.oc(2).selectedYear=c}))("change",(function(c){return l.Fc(e),l.oc(2).onOptionSelect("year",c.target.value)})),l.Kc(20,F,3,2,"ng-container",11),l.bc(),l.bc(),l.bc(),l.bc(),l.Kc(21,w,19,12,"ng-container",11),l.bc()}if(2&e){const e=l.oc(2);l.Jb(5),l.vc("ngModel",e.selectedBranchId),l.Jb(1),l.vc("ngForOf",e.branchList),l.Jb(4),l.vc("ngModel",e.selectedEmployee),l.Jb(1),l.vc("ngForOf",e.employeeList),l.Jb(4),l.vc("ngModel",e.servSY),l.Jb(4),l.vc("ngModel",e.selectedYear),l.Jb(1),l.vc("ngForOf",e.lastTenYears),l.Jb(1),l.vc("ngForOf",e.yearWiseReportList)}}function D(e,c){if(1&e){const e=l.dc();l.ac(0),l.cc(1,"div",6),l.cc(2,"ul",1),l.cc(3,"li",2),l.cc(4,"a",3),l.kc("click",(function(){return l.Fc(e),l.oc().toggleMonth(1)})),l.Mc(5," JAN "),l.bc(),l.bc(),l.cc(6,"li",2),l.cc(7,"a",3),l.kc("click",(function(){return l.Fc(e),l.oc().toggleMonth(2)})),l.Mc(8," FEB "),l.bc(),l.bc(),l.cc(9,"li",2),l.cc(10,"a",3),l.kc("click",(function(){return l.Fc(e),l.oc().toggleMonth(3)})),l.Mc(11," MAR "),l.bc(),l.bc(),l.cc(12,"li",2),l.cc(13,"a",3),l.kc("click",(function(){return l.Fc(e),l.oc().toggleMonth(4)})),l.Mc(14," APR "),l.bc(),l.bc(),l.cc(15,"li",2),l.cc(16,"a",3),l.kc("click",(function(){return l.Fc(e),l.oc().toggleMonth(5)})),l.Mc(17," MAY "),l.bc(),l.bc(),l.cc(18,"li",2),l.cc(19,"a",3),l.kc("click",(function(){return l.Fc(e),l.oc().toggleMonth(6)})),l.Mc(20," JUN "),l.bc(),l.bc(),l.cc(21,"li",2),l.cc(22,"a",3),l.kc("click",(function(){return l.Fc(e),l.oc().toggleMonth(7)})),l.Mc(23," JUL "),l.bc(),l.bc(),l.cc(24,"li",2),l.cc(25,"a",3),l.kc("click",(function(){return l.Fc(e),l.oc().toggleMonth(8)})),l.Mc(26," AUG "),l.bc(),l.bc(),l.cc(27,"li",2),l.cc(28,"a",3),l.kc("click",(function(){return l.Fc(e),l.oc().toggleMonth(9)})),l.Mc(29," SEP "),l.bc(),l.bc(),l.cc(30,"li",2),l.cc(31,"a",3),l.kc("click",(function(){return l.Fc(e),l.oc().toggleMonth(10)})),l.Mc(32," OCT "),l.bc(),l.bc(),l.cc(33,"li",2),l.cc(34,"a",3),l.kc("click",(function(){return l.Fc(e),l.oc().toggleMonth(11)})),l.Mc(35," NOV "),l.bc(),l.bc(),l.cc(36,"li",2),l.cc(37,"a",3),l.kc("click",(function(){return l.Fc(e),l.oc().toggleMonth(12)})),l.Mc(38," DEC "),l.bc(),l.bc(),l.bc(),l.Kc(39,Y,22,8,"div",32),l.bc(),l.Zb()}if(2&e){const e=l.oc();l.Jb(1),l.Nb("active","yearly"===e.selectedTab),l.Jb(3),l.Nb("active",1===e.selectedMonth),l.Jb(3),l.Nb("active",2===e.selectedMonth),l.Jb(3),l.Nb("active",3===e.selectedMonth),l.Jb(3),l.Nb("active",4===e.selectedMonth),l.Jb(3),l.Nb("active",5===e.selectedMonth),l.Jb(3),l.Nb("active",6===e.selectedMonth),l.Jb(3),l.Nb("active",7===e.selectedMonth),l.Jb(3),l.Nb("active",8===e.selectedMonth),l.Jb(3),l.Nb("active",9===e.selectedMonth),l.Jb(3),l.Nb("active",10===e.selectedMonth),l.Jb(3),l.Nb("active",11===e.selectedMonth),l.Jb(3),l.Nb("active",12===e.selectedMonth),l.Jb(2),l.vc("ngIf",e.yearWiseReportList)}}const I=[{path:"",component:(()=>{class e{constructor(e,c,t,n,i,r){this.router=e,this.salesService=c,this.userService=t,this.branchService=n,this.billingService=i,this.ui=r,this.name=[],this.sortOrder=!1,this.sortFields={quantity:!0,service_name:!0},this.reportList=[],this.employeeList=[],this.branchList=[],this.yearWiseReportList=[],this.response="No Data to Show",this.selectedTab="custom",this.selectedYear=(new Date).getFullYear(),this.lastTenYears=Array.from({length:10},(e,c)=>(new Date).getFullYear()-c),this.selectedPerPage=1e7,this.currentpage=1,this.servSC="",this.servSY="",this.selectedMonth=1,this.getAllEmployee=()=>{this.userService.getAllEmployee("",1e5,1).subscribe(e=>{if(e.data){let c=e.data.result.map(e=>({id:e.user_id,name:`${e.f_name} ${e.l_name}`}));this.employeeList=[{id:"",name:"All"},...c]}})},this.getAllBranch=()=>{this.branchService.getBranchList().subscribe(e=>{if(e.data){let c=e.data.map(e=>({id:e.branch_id,name:e.branch_name}));this.branchList=[{id:"",name:"All"},...c]}})},this.onLimitSelect=e=>{this.selectedPerPage=e,this.getAllReport()},this.logout=()=>{localStorage.setItem("isLoggedIn",String(!1)),this.router.navigate(["/login"])}}ngOnInit(){this.getAllReport(),this.getAllBranch(),this.getAllEmployee(),this.getYearWiseSalesReport(this.selectedYear)}toggleTab(e){this.selectedTab=e}toggleMonth(e){this.selectedMonth=e}onOptionSelect(e,c){"branch"===e?"ALL"===c?this.selectedEmployee="":this.selectedBranchId=c:"employee"===e?this.selectedEmployee="ALL"===c?"":c:"year"===e&&(this.selectedYear=c,this.getYearWiseSalesReport(this.selectedYear)),this.getAllReport()}onYearOptionSelect(e,c){"branch"===e?this.selectedYearWiseBranchId="ALL"===c?"":c:"employee"===e&&(this.selectedYearWiseEmployeeId="ALL"===c?"":c),this.getYearWiseSalesReport(this.selectedYear)}getAllReport(){let e={startDate:r(this.selectedStartDate).format("DD-MM-YYYY"),endDate:r(this.selectedEndDate).format("DD-MM-YYYY"),branch_id:this.selectedBranchId,employee_id:this.selectedEmployee},c="";for(let t in e)e[t]&&(c=`${c}${t}=${e[t]}&`);this.ui.loader.show(),this.billingService.getBillingList(this.selectedPerPage,this.currentpage,c).subscribe(e=>{var c,t;if(this.reportList=[],null===(t=null===(c=e)||void 0===c?void 0:c.data)||void 0===t?void 0:t.result){let c=JSON.parse(JSON.stringify(e.data.result)),t=[];for(let e of c)if(e.services.length>0)for(let c of e.services)t.push(c);for(let e=0;e<t.length;e++){let c=t.filter(c=>{var n,i;return(null===(n=c)||void 0===n?void 0:n.service_id)===(null===(i=t[e])||void 0===i?void 0:i.service_id)});if(c.length>1){let e=JSON.parse(JSON.stringify(c[0])),t=0;for(let n=0;n<c.length;n++)t+=c[n].quantity;e.quantity=t,this.reportList.some(c=>c.service_id===e.service_id)||this.reportList.push(Object.assign({},e))}else this.reportList.push(c[0])}}this.ui.loader.hide(),this.reportList=this.reportList.filter(e=>void 0!==e&&Object.values(e).every(e=>void 0!==e))},e=>{this.ui.loader.hide()})}onDateSelect(){this.selectedStartDate?this.selectedEndDate?this.getAllReport():o.a.fire({icon:"warning",title:"Please Select End Date",showConfirmButton:!1,timer:1500}):o.a.fire({icon:"warning",title:"Please Select Start Date",showConfirmButton:!1,timer:1500})}changeOrder(e){this.sortOrder=!this.sortOrder,this.field=e,this.sortFields[e]=this.sortOrder,this.reportList.sort((c,t)=>"quantity"===e||"quantity"===e?this.sortOrder?t[e]-c[e]:c[e]-t[e]:this.sortOrder?t[e].localeCompare(c[e]):c[e].localeCompare(t[e]))}changedDate(e,c){"start"===e?this.selectedStartDate=c:"end"===e&&(this.selectedEndDate=c)}getYearWiseSalesReport(e){let c={branch_id:this.selectedYearWiseBranchId,employee_id:this.selectedYearWiseEmployeeId},t="";for(let n in c)c[n]&&(t=`${t}${n}=${c[n]}&`);this.ui.loader.show(),this.salesService.getServiceYearWiseSalesReport(e,t).subscribe(e=>{var c,t;if(this.yearWiseReportList=[],null===(c=e)||void 0===c?void 0:c.data){let c=1;for(let n of null===(t=e)||void 0===t?void 0:t.data){let e=JSON.parse(JSON.stringify(n.result));const t={};e.forEach(e=>{const c=e.service_id,n=e.quantity||0;t[c]?t[c].quantity+=n:t[c]={service_id:c,service_name:e.service_name,quantity:n}});const i=Object.values(t);this.yearWiseReportList.push({month:c,result:i}),c++}}this.ui.loader.hide()})}}return e.\u0275fac=function(c){return new(c||e)(l.Wb(i.e),l.Wb(s.a),l.Wb(d.a),l.Wb(b.a),l.Wb(u.a),l.Wb(h.a))},e.\u0275cmp=l.Qb({type:e,selectors:[["app-service-sales-report"]],viewQuery:function(e,c){var t;1&e&&l.Rc(f,!0),2&e&&l.Cc(t=l.lc())&&(c.closeEditModal=t.first)},decls:11,vars:6,consts:[[1,"container-fluid"],["role","tablist",1,"nav","nav-fill","nav-tabs"],["role","presentation",1,"nav-item"],["role","tab",1,"nav-link",3,"click"],["id","tab-content",1,"tab-content","pt-5"],[4,"ngIf"],["role","tabpanel",1,"tab-pane"],[1,"row","dash-tab"],[1,"col-sm-5","cus-srch"],[1,"form-group"],["name","dev","id","dev",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],["name","cars","id","cars",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"col-sm-3","cus-srch"],["type","date","id","birthday1","placeholder","From Date","name","selectedSDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["type","date","id","birthday2","placeholder","To Date","name","selectedEDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"col-sm-3"],[1,"form-group","mt-3"],[1,"shortcut-btn","w-100",3,"click"],[1,"col-sm-12","col-md-3","cus-srch"],["type","text","id","birthday","placeholder","Search By Service","name","servSC",1,"form-control","pl-0",3,"ngModel","ngModelChange"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],["style","width:100%",4,"ngIf","ngIfElse"],["elseBlock",""],[3,"value"],[2,"width","100%"],["colspan","100%",1,"text-center"],["class","tab-content pt-5","id","tab-content",4,"ngIf"],[1,"row"],["type","text","id","birthday","placeholder","Search By Service","name","servSY",1,"form-control","pl-0",3,"ngModel","ngModelChange"],["name","year","id","year",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["role","tabpanel",1,"tab-pane","active"]],template:function(e,c){1&e&&(l.cc(0,"div",0),l.cc(1,"ul",1),l.cc(2,"li",2),l.cc(3,"a",3),l.kc("click",(function(){return c.toggleTab("custom")})),l.Mc(4," Custom Dates"),l.bc(),l.bc(),l.cc(5,"li",2),l.cc(6,"a",3),l.kc("click",(function(){return c.toggleTab("yearly")})),l.Mc(7," Yearly "),l.bc(),l.bc(),l.bc(),l.cc(8,"div",4),l.Kc(9,J,46,19,"ng-container",5),l.Kc(10,D,40,27,"ng-container",5),l.bc(),l.bc()),2&e&&(l.Jb(3),l.Nb("active","custom"===c.selectedTab),l.Jb(3),l.Nb("active","yearly"===c.selectedTab),l.Jb(3),l.vc("ngIf","custom"===c.selectedTab),l.Jb(1),l.vc("ngIf","yearly"===c.selectedTab))},directives:[n.l,g.p,g.h,g.k,n.k,g.b,g.l,g.r],pipes:[p.a,n.r],styles:[""]}),e})()}];let C=(()=>{class e{}return e.\u0275mod=l.Ub({type:e}),e.\u0275inj=l.Tb({factory:function(c){return new(c||e)},imports:[[i.h.forChild(I)],i.h]}),e})();var _=t("wloI");t.d(c,"ServiceSalesReportModule",(function(){return A}));let A=(()=>{class e{}return e.\u0275mod=l.Ub({type:e}),e.\u0275inj=l.Tb({factory:function(c){return new(c||e)},imports:[[n.b,g.d,C,_.a]]}),e})()},"X+I5":function(e,c,t){"use strict";t.d(c,"a",(function(){return i}));var n=t("fXoL");let i=(()=>{class e{transform(e,c,t){return t?e.filter(e=>c.split(",").some(c=>e.hasOwnProperty(c)&&new RegExp(t,"gi").test(e[c]))):e}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275pipe=n.Vb({name:"filter",type:e,pure:!0}),e})()},f4UJ:function(e,c,t){"use strict";t.d(c,"a",(function(){return a}));var n=t("AytR"),i=t("fXoL"),r=t("tk/3");let a=(()=>{class e{constructor(e){this.http=e}getBranchList(){return this.http.get(`${n.a.apiURL}/branch`)}addBranch(e){return this.http.post(`${n.a.apiURL}/branch`,e)}deleteBranch(e){return this.http.delete(`${n.a.apiURL}/branch/${e}`)}getBranchDetail(e){return this.http.get(`${n.a.apiURL}/branch/${e}`)}editBranch(e,c){return this.http.put(`${n.a.apiURL}/branch/${e}`,c)}}return e.\u0275fac=function(c){return new(c||e)(i.gc(r.a))},e.\u0275prov=i.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},rwBg:function(e,c,t){"use strict";t.d(c,"a",(function(){return a}));var n=t("AytR"),i=t("fXoL"),r=t("tk/3");let a=(()=>{class e{constructor(e){this.http=e}login(e){return this.http.post(`${n.a.apiURL}/user/login`,e)}changePassword(e){return this.http.post(`${n.a.apiURL}/admin/forgotPassword`,e)}getAllEmployee(e,c,t){return this.http.get(`${n.a.apiURL}/user/e?per_page=${c}&current_page=${t}&${e||""}`)}getAllOperator(e,c,t){return this.http.get(`${n.a.apiURL}/user/o?per_page=${c}&current_page=${t}&${e||""}`)}addEmployee(e){return this.http.post(`${n.a.apiURL}/user`,e)}addOperator(e){return this.http.post(`${n.a.apiURL}/user`,e)}editUser(e,c){return this.http.put(`${n.a.apiURL}/user/${e}`,c)}deleteUser(e){return this.http.delete(`${n.a.apiURL}/user/${e}`)}getUserDetail(e){return this.http.get(`${n.a.apiURL}/user/${e}`)}getAllUsers(e,c){return this.http.get(`${n.a.apiURL}/users/view/all?per_page=${e}&current_page=${c}`)}}return e.\u0275fac=function(c){return new(c||e)(i.gc(r.a))},e.\u0275prov=i.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},sumL:function(e,c,t){"use strict";t.d(c,"a",(function(){return a}));var n=t("AytR"),i=t("fXoL"),r=t("tk/3");let a=(()=>{class e{constructor(e){this.http=e}getBillingList(e,c,t){return this.http.get(`${n.a.apiURL}/bill/view/all?per_page=${e}&current_page=${c}&${t}`)}getCustomerList(e){return this.http.get(`${n.a.apiURL}/bill/customer?customer_name=${e}`)}getNumberList(e){return this.http.get(`${n.a.apiURL}/bill/number?customer_phone=${e}`)}deleteBill(e){return this.http.delete(`${n.a.apiURL}/bill/${e}`)}editBill(e,c){return this.http.put(`${n.a.apiURL}/bill/${e}/update`,c)}getBillDetail(e){return this.http.get(`${n.a.apiURL}/bill/${e}/getById`)}getTotalSale(e){return this.http.get(`${n.a.apiURL}/bill/total?${e}`)}}return e.\u0275fac=function(c){return new(c||e)(i.gc(r.a))},e.\u0275prov=i.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);