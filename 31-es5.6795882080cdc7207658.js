function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,n=new Array(t);c<t;c++)n[c]=e[c];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"+hn0":function(e,t,c){"use strict";c.r(t);var n=c("ofXK"),a=c("3Pt+"),i=c("tyNb"),r=c("PSD3"),o=c.n(r),l=c("wd/R"),s=c("xgIS"),d=c("lJxs"),u=c("Kj3r"),b=c("/uUt"),h=c("fXoL"),m=c("sumL"),p=c("rwBg"),f=c("wZvz"),g=c("f4UJ"),v=c("AXIP"),y=c("oOf3"),_=["yourElement"],M=["yourNumber"],C=["closeEditModal"];function k(e,t){if(1&e&&(h.ac(0),h.cc(1,"option",29),h.Mc(2),h.bc(),h.Zb()),2&e){var c=t.$implicit;h.Jb(1),h.vc("value",c.id),h.Jb(1),h.Nc(c.name)}}function L(e,t){if(1&e&&(h.ac(0),h.cc(1,"option",29),h.Mc(2),h.bc(),h.Zb()),2&e){var c=t.$implicit;h.Jb(1),h.vc("value",c.id),h.Jb(1),h.Nc(c.name)}}function O(e,t){if(1&e&&(h.ac(0),h.cc(1,"option",29),h.Mc(2),h.bc(),h.Zb()),2&e){var c=t.$implicit;h.Jb(1),h.vc("value",c.id),h.Jb(1),h.Nc(c.name)}}function w(e,t){if(1&e){var c=h.dc();h.cc(0,"tr"),h.cc(1,"td"),h.Mc(2),h.bc(),h.cc(3,"td"),h.Mc(4),h.bc(),h.cc(5,"td"),h.Mc(6),h.bc(),h.cc(7,"td"),h.Mc(8),h.bc(),h.cc(9,"td"),h.cc(10,"button",30),h.kc("click",(function(){h.Fc(c);var e=t.$implicit;return h.oc(2).getBillDetail(e.bill_id)})),h.Xb(11,"i",31),h.bc(),h.bc(),h.bc()}if(2&e){var n=t.$implicit;h.Jb(2),h.Nc(n.customer_name),h.Jb(2),h.Oc("\u20b9 ",n.total_price,""),h.Jb(2),h.Nc(n.customer_phone),h.Jb(2),h.Nc(n.user_name)}}var P=function(e,t,c){return{itemsPerPage:e,currentPage:t,totalItems:c}};function A(e,t){if(1&e&&(h.cc(0,"tbody"),h.Kc(1,w,12,4,"tr",5),h.pc(2,"paginate"),h.bc()),2&e){var c=h.oc();h.Jb(1),h.vc("ngForOf",h.rc(2,1,c.billList,h.Ac(4,P,c.selectedPerPage,c.currentpage,c.totalPage)))}}function S(e,t){if(1&e&&(h.cc(0,"tbody"),h.cc(1,"tr"),h.cc(2,"td",32),h.Mc(3),h.bc(),h.bc(),h.bc()),2&e){var c=h.oc();h.Jb(3),h.Nc(c.response)}}function B(e,t){if(1&e&&(h.cc(0,"li"),h.Mc(1),h.pc(2,"titlecase"),h.bc()),2&e){var c=t.$implicit;h.Jb(1),h.Pc(" ",h.qc(2,2,c.name)," - Quantity: ",c.quantity," ")}}function E(e,t){if(1&e&&(h.cc(0,"div",39),h.cc(1,"p",37),h.Mc(2,"Products Used:"),h.bc(),h.cc(3,"ul"),h.Kc(4,B,3,4,"li",5),h.bc(),h.bc()),2&e){var c=h.oc().$implicit;h.Jb(4),h.vc("ngForOf",c.product_usage_detail)}}function J(e,t){if(1&e&&(h.ac(0),h.cc(1,"div",36),h.cc(2,"p"),h.Mc(3,"Service Name: "),h.cc(4,"span",37),h.Mc(5),h.pc(6,"titlecase"),h.bc(),h.bc(),h.cc(7,"p"),h.Mc(8,"Head Count: "),h.cc(9,"span",37),h.Mc(10),h.bc(),h.bc(),h.Kc(11,E,5,1,"div",38),h.bc(),h.Zb()),2&e){var c=t.$implicit;h.Jb(5),h.Nc(h.qc(6,3,c.service_name)),h.Jb(5),h.Nc(c.quantity),h.Jb(1),h.vc("ngIf",(null==c.product_usage_detail?null:c.product_usage_detail.length)>0)}}function D(e,t){if(1&e&&(h.cc(0,"div",33),h.cc(1,"div",34),h.cc(2,"div",16),h.cc(3,"h5",35),h.Mc(4,"Product Usage Detail"),h.bc(),h.bc(),h.Kc(5,J,12,5,"ng-container",5),h.bc(),h.bc()),2&e){var c=h.oc();h.Jb(5),h.vc("ngForOf",c.detail.services)}}var N,I,x=[{path:"",component:(N=function(){function e(t,c,n,a,i,r,o){var l=this;_classCallCheck(this,e),this.router=t,this.billService=c,this.userService=n,this.modeService=a,this.fb=i,this.branchService=r,this.ui=o,this.sortOrder=!1,this.selectAll=!1,this.LoadingText="abc",this.sortFields={total_price:!0,booking_amount:!0,payment_mode:!0,delivery_mode:!0,customer_name:!0,user_name:!0,createdOn:!0},this.payment=[],this.delivery=[],this.billList=[],this.response="No Data to Show",this.searchedName="",this.selectedDate="",this.userNameList=[],this.branchList=[],this.operatorList=[],this.employeeList=[],this.customerList=[],this.selectedPerPage=10,this.currentpage=1,this.getAllPaymentMode=function(){l.modeService.getPaymentModeList().subscribe((function(e){if(e.data){l.payment.push({id:"Net Banking",name:"Net Banking"});var t=e.data.map((function(e){return{id:e.payment_mode_name,name:e.payment_mode_name}}));l.payment=[].concat(_toConsumableArray(t),_toConsumableArray(l.payment)),l.payment.push({id:"",name:"All"})}}))},this.getAllOperator=function(){l.userService.getAllOperator("",1e5,1).subscribe((function(e){if(e.data){var t=e.data.result.map((function(e){return{id:e.user_id,name:"".concat(e.f_name," ").concat(e.l_name)}}));l.operatorList=[{id:"",name:"All"}].concat(_toConsumableArray(t))}}))},this.getAllEmployee=function(){l.userService.getAllEmployee("status=Active",1e5,1).subscribe((function(e){if(e.data){var t=e.data.result.map((function(e){return{id:e.user_id,name:"".concat(e.f_name," ").concat(e.l_name)}}));l.employeeList=[{id:"",name:"All"}].concat(_toConsumableArray(t))}}))},this.getAllBranch=function(){l.branchService.getBranchList().subscribe((function(e){if(e.data){var t=e.data.map((function(e){return{id:e.branch_id,name:e.branch_name}}));l.branchList=[{id:"",name:"All"}].concat(_toConsumableArray(t))}}))},this.onLimitSelect=function(e){l.selectedPerPage=e,l.getBillList()}}return _createClass(e,[{key:"ngOnInit",value:function(){this.getBillList(),this.getAllPaymentMode(),this.getAllOperator(),this.getAllBranch(),this.getAllEmployee()}},{key:"onCustomerChange",value:function(){}},{key:"ngAfterViewInit",value:function(){var e=this;Object(s.a)(this.yourElement.nativeElement,"input").pipe(Object(d.a)((function(e){return e.target.value}))).pipe(Object(u.a)(1e3)).pipe(Object(b.a)()).subscribe((function(t){e.searchedName=t.toLowerCase(),e.searchedName&&e.getCustomerList()}))}},{key:"addStatus",value:function(e){this.status=e}},{key:"editStatus",value:function(e){this.detail.status=e}},{key:"getBillList",value:function(e){var t=this;e&&(this.currentpage=e);var c={startDate:l(this.selectedStartDate).format("DD-MM-YYYY"),endDate:l(this.selectedEndDate).format("DD-MM-YYYY"),payment_mode:this.selectedPaymentMode,branch_id:this.selectedBranchId,createdOn:this.selectedDate,user_id:this.selectedOperator,customer_name:this.searchedName,customer_phone:this.searchedNumber,employee_id:this.selectedEmployee},n="";for(var a in c)c[a]&&(n="".concat(n).concat(a,"=").concat(c[a],"&"));this.ui.loader.show(),this.billService.getBillingList(this.selectedPerPage,this.currentpage,n).subscribe((function(e){t.billList=[],e.data?(t.billList=e.data.result.map((function(e){return Object.assign({date:l(e.createdOn).format("YYYY-MM-DD")},e)})),t.total=e.data.total.split("-")[0],e.data.result.length>0&&(t.totalPage=e.data.total.split("-")[1])):t.total=0,t.ui.loader.hide()}),(function(e){return t.ui.loader.hide()}))}},{key:"getCustomerList",value:function(){var e=this;this.billService.getCustomerList(this.searchedName).subscribe((function(t){e.customerList=[],t.data?(e.billList=t.data.result.map((function(e){return Object.assign({date:l(e.createdOn).format("YYYY-MM-DD")},e)})),e.total=t.data.total.split("-")[0],t.data.result.length>0&&(e.totalPage=t.data.total.split("-")[1])):e.total=0}))}},{key:"onOptionSelect",value:function(e,t){"payment"===e?this.selectedPaymentMode=t:"branch"===e?this.selectedBranchId=t:"operator"===e?this.selectedOperator="ALL"===t?"":t:"employee"===e?this.selectedEmployee="ALL"===t?"":t:"date"===e&&(this.selectedDate=t),this.getBillList()}},{key:"onDateSelect",value:function(){this.selectedStartDate?this.selectedEndDate?this.getBillList():o.a.fire({icon:"warning",title:"Please Select End Date",showConfirmButton:!1,timer:1500}):o.a.fire({icon:"warning",title:"Please Select Start Date",showConfirmButton:!1,timer:1500})}},{key:"changedDate",value:function(e,t){"start"===e?this.selectedStartDate=t:"end"===e&&(this.selectedEndDate=t)}},{key:"changeOrder",value:function(e){var t=this;this.sortOrder=!this.sortOrder,this.field=e,this.sortFields[e]=this.sortOrder,this.billList.sort((function(c,n){return"total_price"===e?t.sortOrder?n[e]-c[e]:c[e]-n[e]:t.sortOrder?n[e].localeCompare(c[e]):c[e].localeCompare(n[e])}))}},{key:"deleteBill",value:function(e,t){var c=this;o.a.fire({title:"Do you want to delete this Bill?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then((function(e){e.isConfirmed&&(c.ui.loader.show(),c.billService.deleteBill(t).subscribe((function(e){o.a.fire({icon:"success",title:"Bill Deleted Successfully",showConfirmButton:!1,timer:1500}),c.getBillList(),c.ui.loader.hide()}),(function(e){return c.ui.loader.hide()})))}))}},{key:"getBillDetail",value:function(e){var t=this;this.ui.loader.show(),this.billService.getBillDetail(e).subscribe((function(e){e.data&&(t.detail=e.data,t.ui.loader.hide())}),(function(e){return t.ui.loader.hide()}))}},{key:"editBill",value:function(e){var t=this;this.ui.loader.show(),delete this.detail.validationToken,delete this.detail.createdOn,this.billService.editBill(e,this.detail).subscribe((function(e){t.closeEditModal.nativeElement.click(),t.detail={},t.ui.loader.hide(),t.getBillList()}),(function(e){t.ui.loader.hide()}))}}]),e}(),N.\u0275fac=function(e){return new(e||N)(h.Wb(i.e),h.Wb(m.a),h.Wb(p.a),h.Wb(f.a),h.Wb(a.c),h.Wb(g.a),h.Wb(v.a))},N.\u0275cmp=h.Qb({type:N,selectors:[["app-product-usage-detail"]],viewQuery:function(e,t){var c;1&e&&(h.Rc(_,!0),h.Rc(M,!0),h.Rc(C,!0)),2&e&&(h.Cc(c=h.lc())&&(t.yourElement=c.first),h.Cc(c=h.lc())&&(t.yourNumber=c.first),h.Cc(c=h.lc())&&(t.closeEditModal=c.first))},decls:65,vars:23,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-2","cus-srch"],[1,"form-group"],["name","dev","id","dev",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],["name","cars","id","cars",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["type","text","id","birthday","placeholder","Search By Cus Name","name","searchName",1,"form-control","pl-0",3,"ngModel","ngModelChange","keyup"],["yourElement",""],[1,"col-sm-12","col-md-3"],["name","pay","id","pay",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["value","10"],["value","25"],["value","50"],["value","100"],["value","10000"],[1,"col-sm-12"],[1,"table-responsive","scrollmenu"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],[2,"text-align","center",3,"pageChange"],["id","viewModal","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade"],["viewModal",""],[1,"modal-dialog"],["class","modal-content","style","padding: 2%",4,"ngIf"],[3,"value"],["type","button","data-toggle","modal","data-target","#viewModal",1,"btn","btn-success","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-eye"],["colspan","100%",1,"text-center"],[1,"modal-content",2,"padding","2%"],[1,"row"],[2,"text-align","center"],[1,"col-sm-6",2,"border","1px solid gray","padding","5px","margin-bottom","10px"],[2,"font-weight","bold"],["style","margin-top: 10px; padding-left: 10px; border-top: 1px dashed gray;",4,"ngIf"],[2,"margin-top","10px","padding-left","10px","border-top","1px dashed gray"]],template:function(e,t){if(1&e&&(h.cc(0,"div",0),h.cc(1,"div",1),h.cc(2,"div",2),h.cc(3,"div",3),h.Mc(4," BRANCH WISE "),h.cc(5,"select",4),h.kc("ngModelChange",(function(e){return t.selectedBranchId=e}))("change",(function(e){return t.onOptionSelect("branch",e.target.value)})),h.Kc(6,k,3,2,"ng-container",5),h.bc(),h.bc(),h.bc(),h.cc(7,"div",2),h.cc(8,"div",3),h.Mc(9," EMPLOYEE WISE "),h.cc(10,"select",6),h.kc("ngModelChange",(function(e){return t.selectedEmployee=e}))("change",(function(e){return t.onOptionSelect("employee",e.target.value)})),h.Kc(11,L,3,2,"ng-container",5),h.bc(),h.bc(),h.bc(),h.cc(12,"div",2),h.cc(13,"div",3),h.Mc(14," BILL BY "),h.cc(15,"select",6),h.kc("ngModelChange",(function(e){return t.selectedOperator=e}))("change",(function(e){return t.onOptionSelect("operator",e.target.value)})),h.Kc(16,O,3,2,"ng-container",5),h.bc(),h.bc(),h.bc(),h.cc(17,"div",2),h.cc(18,"div",3),h.Mc(19," SEARCH BY NAME "),h.cc(20,"input",7,8),h.kc("ngModelChange",(function(e){return t.searchedName=e}))("keyup",(function(){return t.onCustomerChange()})),h.bc(),h.bc(),h.bc(),h.cc(22,"div",9),h.cc(23,"div",3),h.Mc(24," SELECT PER PAGE "),h.cc(25,"select",10),h.kc("ngModelChange",(function(e){return t.selectedPerPage=e}))("change",(function(e){return t.onLimitSelect(e.target.value)})),h.cc(26,"option",11),h.Mc(27,"10"),h.bc(),h.cc(28,"option",12),h.Mc(29,"25"),h.bc(),h.cc(30,"option",13),h.Mc(31,"50"),h.bc(),h.cc(32,"option",14),h.Mc(33,"100"),h.bc(),h.cc(34,"option",15),h.Mc(35,"Show All"),h.bc(),h.bc(),h.bc(),h.bc(),h.cc(36,"div",16),h.cc(37,"div",17),h.cc(38,"table",18),h.cc(39,"thead"),h.cc(40,"tr"),h.cc(41,"th",19),h.Mc(42,"Customer "),h.cc(43,"a",20),h.kc("click",(function(){return t.changeOrder("customer_name")})),h.Xb(44,"i",21),h.bc(),h.bc(),h.cc(45,"th",19),h.Mc(46,"Total Price "),h.cc(47,"a",20),h.kc("click",(function(){return t.changeOrder("total_price")})),h.Xb(48,"i",21),h.bc(),h.bc(),h.cc(49,"th",19),h.Mc(50,"Phone"),h.bc(),h.cc(51,"th",19),h.Mc(52,"Bill By "),h.cc(53,"a",20),h.kc("click",(function(){return t.changeOrder("user_name")})),h.Xb(54,"i",21),h.bc(),h.bc(),h.cc(55,"th",19),h.Mc(56,"View Product Usage Detail"),h.bc(),h.bc(),h.bc(),h.Kc(57,A,3,8,"tbody",22),h.Kc(58,S,4,1,"ng-template",null,23,h.Lc),h.bc(),h.cc(60,"pagination-controls",24),h.kc("pageChange",(function(e){return t.getBillList(e)})),h.bc(),h.bc(),h.bc(),h.bc(),h.bc(),h.cc(61,"div",25,26),h.cc(63,"div",27),h.Kc(64,D,6,1,"div",28),h.bc(),h.bc()),2&e){var c=h.Dc(59);h.Jb(5),h.vc("ngModel",t.selectedBranchId),h.Jb(1),h.vc("ngForOf",t.branchList),h.Jb(4),h.vc("ngModel",t.selectedEmployee),h.Jb(1),h.vc("ngForOf",t.employeeList),h.Jb(4),h.vc("ngModel",t.selectedOperator),h.Jb(1),h.vc("ngForOf",t.operatorList),h.Jb(4),h.vc("ngModel",t.searchedName),h.Jb(5),h.vc("ngModel",t.selectedPerPage),h.Jb(19),h.Nb("fa-caret-down",t.sortFields.customer_name)("fa-caret-up",!t.sortFields.customer_name),h.Jb(4),h.Nb("fa-caret-down",t.sortFields.total_price)("fa-caret-up",!t.sortFields.total_price),h.Jb(6),h.Nb("fa-caret-down",t.sortFields.user_name)("fa-caret-up",!t.sortFields.user_name),h.Jb(3),h.vc("ngIf",null==t.billList?null:t.billList.length)("ngIfElse",c),h.Jb(7),h.vc("ngIf",t.detail)}},directives:[a.p,a.h,a.k,n.k,a.b,a.l,a.r,n.l,y.c],pipes:[y.b,n.r],styles:["[_ngcontent-%COMP%]::-webkit-datetime-edit{padding:1em}[_ngcontent-%COMP%]::-webkit-datetime-edit-text{padding:0 .3em}[_ngcontent-%COMP%]::-webkit-inner-spin-button{display:none}[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{color:green}div.scrollmenu[_ngcontent-%COMP%]{overflow:auto;white-space:nowrap}div.scrollmenu[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{text-align:center;padding:14px;text-decoration:none}"]}),N)}],Y=((I=function e(){_classCallCheck(this,e)}).\u0275mod=h.Ub({type:I}),I.\u0275inj=h.Tb({factory:function(e){return new(e||I)},imports:[[i.h.forChild(x)],i.h]}),I),T=c("wloI"),F=c("YUSg"),j=c("i2NW"),K=c("X+I5");c.d(t,"ProductUsageDetailModule",(function(){return U}));var W,U=((W=function e(){_classCallCheck(this,e)}).\u0275mod=h.Ub({type:W}),W.\u0275inj=h.Tb({factory:function(e){return new(e||W)},providers:[K.a],imports:[[n.b,a.d,a.n,Y,F.a,F.b,j.a,T.a,y.a]]}),W)}}]);