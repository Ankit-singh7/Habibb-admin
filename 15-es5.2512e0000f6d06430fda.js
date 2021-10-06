function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var c=0;c<e.length;c++){var n=e[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,c){return e&&_defineProperties(t.prototype,e),c&&_defineProperties(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{sUg5:function(t,e,c){"use strict";c.r(e);var n=c("ofXK"),r=c("tyNb"),i=c("wd/R"),o=c("PSD3"),a=c.n(o),s=c("fXoL"),l=c("pVIR"),d=c("AXIP"),u=c("3Pt+"),g=c("oOf3"),b=["closeEditModal"];function f(t,e){if(1&t&&(s.cc(0,"tr"),s.cc(1,"td"),s.cc(2,"B"),s.Lc(3),s.pc(4,"titlecase"),s.bc(),s.bc(),s.cc(5,"td"),s.Lc(6),s.pc(7,"titlecase"),s.bc(),s.cc(8,"td"),s.Lc(9),s.bc(),s.cc(10,"td"),s.Lc(11),s.bc(),s.bc()),2&t){var c=e.$implicit;s.Jb(3),s.Mc(s.qc(4,6,c.ingredient)),s.Jb(3),s.Mc(s.qc(7,8,c.category)),s.Jb(3),s.Oc("",c.quantity_by_stock,"(",c.unit,")"),s.Jb(2),s.Oc("",c.quantity_by_order,"(",c.unit,")")}}var h=function(t,e,c){return{itemsPerPage:t,currentPage:e,totalItems:c}};function p(t,e){if(1&t&&(s.cc(0,"tbody",24),s.Jc(1,f,12,10,"tr",25),s.pc(2,"paginate"),s.bc()),2&t){var c=s.oc();s.Jb(1),s.uc("ngForOf",s.rc(2,1,c.reportList,s.zc(4,h,c.selectedPerPage,c.currentpage,c.totalPage)))}}function y(t,e){if(1&t&&(s.cc(0,"tbody"),s.cc(1,"tr"),s.cc(2,"td",26),s.Lc(3),s.bc(),s.bc(),s.bc()),2&t){var c=s.oc();s.Jb(3),s.Mc(c.response)}}var v,_,m=[{path:"",component:(v=function(){function t(e,c,n){var r=this;_classCallCheck(this,t),this.router=e,this.foodService=c,this.ui=n,this.name=[],this.sortOrder=!1,this.sortFields={ingredient:!0,category:!0,quantity_by_stock:!0,quantity_by_order:!0},this.reportList=[],this.response="No Data to Show",this.selectedPerPage=10,this.currentpage=1,this.onLimitSelect=function(t){r.selectedPerPage=t,r.getAllReport()},this.logout=function(){localStorage.setItem("isLoggedIn",String(!1)),r.router.navigate(["/login"])}}return _createClass(t,[{key:"ngOnInit",value:function(){this.getAllReport()}},{key:"getAllReport",value:function(t){var e=this;t&&(this.currentpage=t);var c={startDate:i(this.selectedStartDate).format("DD-MM-YYYY"),endDate:i(this.selectedEndDate).format("DD-MM-YYYY")},n="";for(var r in c)c[r]&&(n="".concat(n).concat(r,"=").concat(c[r],"&"));this.ui.loader.show(),this.foodService.getAllReport(this.selectedPerPage,this.currentpage,n).subscribe((function(t){e.reportList=[],t.data&&function(){var c=JSON.parse(JSON.stringify(t.data.result)),n=c.map((function(t){return t.ingredient_id}));console.log(n);for(var r=function(t){var n=c.filter((function(e){return e.ingredient_id===c[t].ingredient_id}));if(console.log(n),n.length>1){for(var r=JSON.parse(JSON.stringify(n[0])),i=0,o=0,a=0;a<n.length;a++)i+=n[a].quantity_by_order,o+=n[a].quantity_by_stock;r.quantity_by_order=i,r.quantity_by_stock=o,e.reportList.some((function(t){return t.ingredient_id===r.ingredient_id}))||e.reportList.push(Object.assign({},r))}else e.reportList.push(n[0])},i=0;i<c.length;i++)r(i);e.totalPage=e.reportList.length}(),e.ui.loader.hide()}),(function(t){e.ui.loader.hide()}))}},{key:"onDateSelect",value:function(){this.selectedStartDate?this.selectedEndDate?this.getAllReport():a.a.fire({icon:"warning",title:"Please Select End Date",showConfirmButton:!1,timer:1500}):a.a.fire({icon:"warning",title:"Please Select Start Date",showConfirmButton:!1,timer:1500})}},{key:"changeOrder",value:function(t){var e=this;this.sortOrder=!this.sortOrder,this.field=t,this.sortFields[t]=this.sortOrder,this.reportList.sort((function(c,n){return"quantity_by_order"===t||"quantity_by_stock"===t?e.sortOrder?n[t]-c[t]:c[t]-n[t]:e.sortOrder?n[t].localeCompare(c[t]):c[t].localeCompare(n[t])}))}},{key:"changedDate",value:function(t,e){"start"===t?this.selectedStartDate=e:"end"===t&&(this.selectedEndDate=e),console.log(this.selectedStartDate),console.log(this.selectedEndDate)}}]),t}(),v.\u0275fac=function(t){return new(t||v)(s.Wb(r.e),s.Wb(l.a),s.Wb(d.a))},v.\u0275cmp=s.Qb({type:v,selectors:[["app-ingredient-report"]],viewQuery:function(t,e){var c;1&t&&s.Qc(b,!0),2&t&&s.Bc(c=s.lc())&&(e.closeEditModal=c.first)},decls:52,vars:21,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-3","cus-srch"],[1,"form-group"],["type","date","id","birthday1","placeholder","From Date","name","selectedSDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["type","date","id","birthday2","placeholder","To Date","name","selectedEDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"col-sm-3"],[1,"form-group","mt-3"],[1,"shortcut-btn","w-100",3,"click"],[1,"offset-md-1","col-sm-2","cus-srch"],["name","pay","id","pay",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],["style","width:100%",4,"ngIf","ngIfElse"],["elseBlock",""],[2,"text-align","center",3,"pageChange"],[2,"width","100%"],[4,"ngFor","ngForOf"],["colspan","100%",1,"text-center"]],template:function(t,e){if(1&t&&(s.cc(0,"div",0),s.cc(1,"div",1),s.cc(2,"div",2),s.cc(3,"div",3),s.Lc(4," FROM DATE "),s.cc(5,"input",4),s.kc("ngModelChange",(function(t){return e.selectedStartDate=t}))("change",(function(t){return e.changedDate("start",t.target.value)})),s.bc(),s.bc(),s.bc(),s.cc(6,"div",2),s.cc(7,"div",3),s.Lc(8," TO DATE "),s.cc(9,"input",5),s.kc("ngModelChange",(function(t){return e.selectedEndDate=t}))("change",(function(t){return e.changedDate("end",t.target.value)})),s.bc(),s.bc(),s.bc(),s.cc(10,"div",6),s.cc(11,"div",7),s.cc(12,"button",8),s.kc("click",(function(){return e.onDateSelect()})),s.cc(13,"b"),s.Lc(14,"SEARCH"),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(15,"div",9),s.cc(16,"div",3),s.Lc(17," SELECT PER PAGE "),s.cc(18,"select",10),s.kc("ngModelChange",(function(t){return e.selectedPerPage=t}))("change",(function(t){return e.onLimitSelect(t.target.value)})),s.cc(19,"option",11),s.Lc(20,"10"),s.bc(),s.cc(21,"option",12),s.Lc(22,"25"),s.bc(),s.cc(23,"option",13),s.Lc(24,"50"),s.bc(),s.cc(25,"option",14),s.Lc(26,"100"),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(27,"div",15),s.cc(28,"div",16),s.cc(29,"table",17),s.cc(30,"thead"),s.cc(31,"tr"),s.cc(32,"th",18),s.Lc(33,"Ingredient Name"),s.cc(34,"a",19),s.kc("click",(function(){return e.changeOrder("ingredient")})),s.Xb(35,"i",20),s.bc(),s.bc(),s.cc(36,"th",18),s.Lc(37,"Category"),s.cc(38,"a",19),s.kc("click",(function(){return e.changeOrder("category")})),s.Xb(39,"i",20),s.bc(),s.bc(),s.cc(40,"th",18),s.Lc(41,"Stock out (By Stock Manager)"),s.cc(42,"a",19),s.kc("click",(function(){return e.changeOrder("quantity_by_stock")})),s.Xb(43,"i",20),s.bc(),s.bc(),s.cc(44,"th",18),s.Lc(45,"Stock out (By Order)"),s.cc(46,"a",19),s.kc("click",(function(){return e.changeOrder("quantity_by_order")})),s.Xb(47,"i",20),s.bc(),s.bc(),s.bc(),s.bc(),s.Jc(48,p,3,8,"tbody",21),s.Jc(49,y,4,1,"ng-template",null,22,s.Kc),s.bc(),s.cc(51,"pagination-controls",23),s.kc("pageChange",(function(t){return e.getAllReport(t)})),s.bc(),s.bc(),s.bc(),s.bc(),s.bc()),2&t){var c=s.Cc(50);s.Jb(5),s.uc("ngModel",e.selectedStartDate),s.Jb(4),s.uc("ngModel",e.selectedEndDate),s.Jb(9),s.uc("ngModel",e.selectedPerPage),s.Jb(17),s.Nb("fa-caret-down",e.sortFields.ingredient)("fa-caret-up",!e.sortFields.ingredient),s.Jb(4),s.Nb("fa-caret-down",e.sortFields.category)("fa-caret-up",!e.sortFields.category),s.Jb(4),s.Nb("fa-caret-down",e.sortFields.quantity_by_stock)("fa-caret-up",!e.sortFields.quantity_by_stock),s.Jb(4),s.Nb("fa-caret-down",e.sortFields.quantity_by_order)("fa-caret-up",!e.sortFields.quantity_by_order),s.Jb(1),s.uc("ngIf",null==e.reportList?null:e.reportList.length)("ngIfElse",c)}},directives:[u.b,u.h,u.k,u.p,u.l,u.r,n.l,g.c,n.k],pipes:[g.b,n.r],styles:[""]}),v)}],k=((_=function t(){_classCallCheck(this,t)}).\u0275mod=s.Ub({type:_}),_.\u0275inj=s.Tb({factory:function(t){return new(t||_)},imports:[[r.h.forChild(m)],r.h]}),_);c.d(e,"IngredientReportModule",(function(){return L}));var D,L=((D=function t(){_classCallCheck(this,t)}).\u0275mod=s.Ub({type:D}),D.\u0275inj=s.Tb({factory:function(t){return new(t||D)},imports:[[n.b,k,u.d,g.a]]}),D)}}]);