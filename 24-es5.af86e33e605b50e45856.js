function _classCallCheck(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(c,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(c,i.key,i)}}function _createClass(c,e,t){return e&&_defineProperties(c.prototype,e),t&&_defineProperties(c,t),c}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"X+I5":function(c,e,t){"use strict";t.d(e,"a",(function(){return n}));var i=t("fXoL"),n=function(){var c=function(){function c(){_classCallCheck(this,c)}return _createClass(c,[{key:"transform",value:function(c,e,t){return t?c.filter((function(c){return e.split(",").some((function(e){return c.hasOwnProperty(e)&&new RegExp(t,"gi").test(c[e])}))})):c}}]),c}();return c.\u0275fac=function(e){return new(e||c)},c.\u0275pipe=i.Vb({name:"filter",type:c,pure:!0}),c}()},qfzm:function(c,e,t){"use strict";t.r(e);var i=t("ofXK"),n=t("tyNb"),r=t("PSD3"),o=t.n(r),a=t("fXoL"),d=t("vRzO"),l=t("AXIP"),u=t("3Pt+"),s=t("X+I5"),b=["closeEditModal3"],f=["closeAddModal"];function m(c,e){if(1&c){var t=a.dc();a.cc(0,"tr"),a.cc(1,"td"),a.cc(2,"B"),a.Mc(3),a.pc(4,"titlecase"),a.bc(),a.bc(),a.cc(5,"td"),a.cc(6,"B"),a.Mc(7),a.pc(8,"titlecase"),a.bc(),a.bc(),a.cc(9,"td"),a.cc(10,"B"),a.Mc(11),a.bc(),a.bc(),a.cc(12,"td"),a.cc(13,"button",36),a.kc("click",(function(){a.Fc(t);var c=e.$implicit;return a.oc(2).getProductDetail(c.product_id)})),a.Xb(14,"i",37),a.bc(),a.cc(15,"button",38),a.kc("click",(function(){a.Fc(t);var c=e.index,i=e.$implicit;return a.oc(2).deleteProduct(c,i.product_id)})),a.Xb(16,"i",39),a.bc(),a.bc(),a.bc()}if(2&c){var i=e.$implicit;a.Jb(3),a.Nc(a.qc(4,3,i.name)),a.Jb(4),a.Nc(a.qc(8,5,i.brand_name)),a.Jb(4),a.Nc(i.uom)}}function v(c,e){if(1&c&&(a.cc(0,"tbody"),a.Kc(1,m,17,7,"tr",28),a.pc(2,"filter"),a.bc()),2&c){var t=a.oc();a.Jb(1),a.vc("ngForOf",a.sc(2,1,t.productList,"name",t.prod))}}function p(c,e){if(1&c&&(a.cc(0,"tbody"),a.cc(1,"tr"),a.cc(2,"td",40),a.Mc(3),a.bc(),a.bc(),a.bc()),2&c){var t=a.oc();a.Jb(3),a.Nc(t.response)}}function g(c,e){if(1&c&&(a.ac(0),a.cc(1,"option",41),a.Mc(2),a.bc(),a.Zb()),2&c){var t=e.$implicit;a.Jb(1),a.vc("ngValue",t.brand_id),a.Jb(1),a.Nc(t.name)}}function h(c,e){if(1&c&&(a.ac(0),a.cc(1,"option",42),a.Mc(2),a.bc(),a.Zb()),2&c){var t=e.$implicit;a.Jb(1),a.vc("value",t.value),a.Jb(1),a.Pc("",t.name," (",t.value,")")}}function M(c,e){if(1&c&&(a.ac(0),a.cc(1,"option",41),a.Mc(2),a.bc(),a.Zb()),2&c){var t=e.$implicit;a.Jb(1),a.vc("ngValue",t.brand_id),a.Jb(1),a.Nc(t.name)}}function C(c,e){if(1&c&&(a.ac(0),a.cc(1,"option",48),a.Mc(2),a.bc(),a.Zb()),2&c){var t=e.$implicit,i=a.oc(2);a.Jb(1),a.vc("value",t.value)("selected",i.detail.uom===t.value),a.Jb(1),a.Pc("",t.name," (",t.value,")")}}function k(c,e){if(1&c){var t=a.dc();a.cc(0,"form",43,44),a.cc(2,"div",21),a.cc(3,"div",22),a.cc(4,"h5"),a.Mc(5,"Edit Product Detail"),a.bc(),a.bc(),a.cc(6,"div",7),a.cc(7,"div",23),a.cc(8,"div",24),a.cc(9,"div",25),a.cc(10,"label",26),a.Mc(11,"Select Brand"),a.bc(),a.bc(),a.cc(12,"select",45),a.kc("ngModelChange",(function(c){return a.Fc(t),a.oc().detail.brand_id=c})),a.Kc(13,M,3,2,"ng-container",28),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(14,"div",7),a.cc(15,"div",23),a.cc(16,"input",46),a.kc("ngModelChange",(function(c){return a.Fc(t),a.oc().detail.name=c})),a.bc(),a.bc(),a.bc(),a.cc(17,"div",7),a.cc(18,"div",23),a.cc(19,"div",24),a.cc(20,"div",25),a.cc(21,"label",26),a.Mc(22,"Unit of Measurement"),a.bc(),a.bc(),a.cc(23,"select",47),a.kc("ngModelChange",(function(c){return a.Fc(t),a.oc().detail.uom=c})),a.Kc(24,C,3,4,"ng-container",28),a.bc(),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(25,"div",21),a.cc(26,"div",31),a.cc(27,"button",32),a.kc("click",(function(){a.Fc(t);var c=a.oc();return c.editProduct(c.detail.product_id)})),a.Mc(28,"EDIT"),a.bc(),a.bc(),a.bc(),a.bc()}if(2&c){var i=a.Dc(1),n=a.oc();a.Jb(12),a.vc("ngModel",n.detail.brand_id),a.Jb(1),a.vc("ngForOf",n.brandList),a.Jb(3),a.vc("ngModel",n.detail.name),a.Jb(7),a.vc("ngModel",n.detail.uom),a.Jb(1),a.vc("ngForOf",n.unitList),a.Jb(3),a.vc("disabled",!i.valid)}}var P,y,S=[{path:"",component:(P=function(){function c(e,t,i){var n=this;_classCallCheck(this,c),this.router=e,this.itemService=t,this.ui=i,this.brandList=[],this.productList=[],this.name=[],this.response="No Data Found",this.sortOrder=!1,this.fullName=localStorage.getItem("name"),this.unitList=[{name:"Gram",value:"g"},{name:"Milligram",value:"mg"},{name:"Milliliter",value:"ml"},{name:"Liter",value:"L"},{name:"Pack",value:"P"}],this.prod="",this.getAllBrand=function(){n.ui.loader.show(),n.itemService.getBrandList().subscribe((function(c){c.data&&(n.brandList=c.data),n.ui.loader.hide()}),(function(c){return n.ui.loader.hide()}))},this.getAllUnit=function(){n.ui.loader.show(),n.itemService.getBrandList().subscribe((function(c){c.data&&(n.brandList=c.data),n.ui.loader.hide()}),(function(c){return n.ui.loader.hide()}))},this.getAllProduct=function(){n.ui.loader.show(),n.itemService.getServiceBasedProductList().subscribe((function(c){c.data&&(n.productList=c.data),n.ui.loader.hide()}),(function(c){return n.ui.loader.hide()}))},this.getProductDetail=function(c){n.itemService.getServiceBasedProductDetail(c).subscribe((function(c){c.data&&(n.detail=c.data)}))},this.deleteProduct=function(c,e){o.a.fire({title:"Do you want to delete this Product?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then((function(t){t.isConfirmed&&(n.ui.loader.show(),n.itemService.deleteServiceBasedProduct(e).subscribe((function(e){o.a.fire({icon:"success",title:"Product Type Deleted Successfully",showConfirmButton:!1,timer:1500}),n.productList.splice(c,1),n.ui.loader.hide()}),(function(c){return n.ui.loader.hide()})))}))},this.addProduct=function(){n.ui.loader.show();var c={name:n.productName,brand_id:n.selectedBrand,uom:n.uom};n.productList.push(c),n.itemService.addServiceBasedProduct(c).subscribe((function(c){n.productName="",n.selectedBrand="",n.uom="",n.closeAddModal.nativeElement.click(),o.a.fire({icon:"success",title:"Product Created Successfully",showConfirmButton:!1,timer:1500}),n.getAllProduct(),n.ui.loader.hide()}),(function(c){return n.ui.loader.hide()}))},this.editProduct=function(c){n.ui.loader.show(),n.itemService.editServiceBasedProduct(c,n.detail).subscribe((function(c){n.closeEditModal.nativeElement.click(),n.detail={},n.ui.loader.hide(),n.getAllProduct()}),(function(c){n.ui.loader.hide()}))},this.logout=function(){localStorage.setItem("isLoggedIn",String(!1)),n.router.navigate(["/login"])}}return _createClass(c,[{key:"ngOnInit",value:function(){this.getAllBrand(),this.getAllProduct()}},{key:"changeOrder",value:function(c){var e=this;this.sortOrder=!this.sortOrder,this.field=c,this.productList.sort((function(t,i){return e.sortOrder?i[c].localeCompare(t[c]):t[c].localeCompare(i[c])}))}}]),c}(),P.\u0275fac=function(c){return new(c||P)(a.Wb(n.e),a.Wb(d.a),a.Wb(l.a))},P.\u0275cmp=a.Qb({type:P,selectors:[["app-service-product-list"]],viewQuery:function(c,e){var t;1&c&&(a.Rc(b,!0),a.Rc(f,!0)),2&c&&(a.Cc(t=a.lc())&&(e.closeEditModal=t.first),a.Cc(t=a.lc())&&(e.closeAddModal=t.first))},decls:71,vars:22,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-4"],[1,"form-group"],["data-toggle","modal","data-target","#addWaiter",1,"shortcut-btn","d-block","w-100"],[1,"offset-md-10","col-sm-12","col-md-2","cus-srch"],["type","text","id","birthday","placeholder","Search By Product","name","prod",1,"form-control","pl-0",3,"ngModel","ngModelChange"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],["id","addWaiter","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeAddModal",""],[1,"modal-dialog","modal-lg"],[1,"modal-content",2,"padding","2%"],["id","subform3","role","form"],["subForm3","ngForm"],[1,"row"],[1,"col-12"],[1,"form-group","position-relative"],[1,"input-group"],[1,"input-group-prepend"],["for","inputGroupSelect01",1,"input-group-text"],["placeholder","Choose Brand","id","inputGroupSelect01","name","ig","required","",1,"custom-select",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["type","text","placeholder","Product Name","name","Cname","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["placeholder","Choose Unit of Measurement","id","inputGroupSelect01","name","uom1","required","",1,"custom-select",3,"ngModel","ngModelChange"],[1,"col-12",2,"text-align","center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["id","addWaiter2","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeEditModal3",""],["id","subform4","role","form",4,"ngIf"],["type","button","data-toggle","modal","data-target","#addWaiter2",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-trash-o"],["colspan","100%",1,"text-center"],[3,"ngValue"],[3,"value"],["id","subform4","role","form"],["subForm4","ngForm"],["placeholder","Choose Service Type","id","inputGroupSelect01","name","ig","required","",1,"custom-select",3,"ngModel","ngModelChange"],["type","text","placeholder","Service Type Name","name","fname1","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["placeholder","Choose Status","id","inputGroupSelect01","name","vsd2","required","",1,"custom-select",3,"ngModel","ngModelChange"],[3,"value","selected"]],template:function(c,e){if(1&c&&(a.cc(0,"div",0),a.cc(1,"div",1),a.cc(2,"div",2),a.cc(3,"div",3),a.cc(4,"button",4),a.cc(5,"b"),a.Mc(6,"+ Add Product"),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(7,"div",5),a.cc(8,"div",3),a.Mc(9," SEARCH BY PRODUCT "),a.cc(10,"input",6),a.kc("ngModelChange",(function(c){return e.prod=c})),a.bc(),a.bc(),a.bc(),a.cc(11,"div",7),a.cc(12,"div",8),a.cc(13,"table",9),a.cc(14,"thead"),a.cc(15,"tr"),a.cc(16,"th",10),a.Mc(17,"Product Name"),a.cc(18,"a",11),a.kc("click",(function(){return e.changeOrder("name")})),a.Xb(19,"i",12),a.bc(),a.bc(),a.cc(20,"th",10),a.Mc(21,"Brand Name"),a.cc(22,"a",11),a.kc("click",(function(){return e.changeOrder("brand_name")})),a.Xb(23,"i",12),a.bc(),a.bc(),a.cc(24,"th",10),a.Mc(25,"Unit of Measurement"),a.cc(26,"a",11),a.kc("click",(function(){return e.changeOrder("uom")})),a.Xb(27,"i",12),a.bc(),a.bc(),a.cc(28,"th",10),a.Mc(29,"Action"),a.bc(),a.bc(),a.bc(),a.Kc(30,v,3,5,"tbody",13),a.Kc(31,p,4,1,"ng-template",null,14,a.Lc),a.bc(),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(33,"div",15,16),a.cc(35,"div",17),a.cc(36,"div",18),a.cc(37,"form",19,20),a.cc(39,"div",21),a.cc(40,"div",22),a.cc(41,"h5"),a.Mc(42,"Add a Product"),a.bc(),a.bc(),a.cc(43,"div",7),a.cc(44,"div",23),a.cc(45,"div",24),a.cc(46,"div",25),a.cc(47,"label",26),a.Mc(48,"Select Brand"),a.bc(),a.bc(),a.cc(49,"select",27),a.kc("ngModelChange",(function(c){return e.selectedBrand=c})),a.Kc(50,g,3,2,"ng-container",28),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(51,"div",7),a.cc(52,"div",23),a.cc(53,"input",29),a.kc("ngModelChange",(function(c){return e.productName=c})),a.bc(),a.bc(),a.bc(),a.cc(54,"div",7),a.cc(55,"div",23),a.cc(56,"div",24),a.cc(57,"div",25),a.cc(58,"label",26),a.Mc(59,"Unit of Measurement"),a.bc(),a.bc(),a.cc(60,"select",30),a.kc("ngModelChange",(function(c){return e.uom=c})),a.Kc(61,h,3,3,"ng-container",28),a.bc(),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(62,"div",21),a.cc(63,"div",31),a.cc(64,"button",32),a.kc("click",(function(){return e.addProduct()})),a.Mc(65,"SUBMIT"),a.bc(),a.bc(),a.bc(),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(66,"div",33,34),a.cc(68,"div",17),a.cc(69,"div",18),a.Kc(70,k,29,6,"form",35),a.bc(),a.bc(),a.bc()),2&c){var t=a.Dc(32),i=a.Dc(38);a.Jb(10),a.vc("ngModel",e.prod),a.Jb(9),a.Nb("fa-caret-down",!e.sortOrder)("fa-caret-up",e.sortOrder),a.Jb(4),a.Nb("fa-caret-down",!e.sortOrder)("fa-caret-up",e.sortOrder),a.Jb(4),a.Nb("fa-caret-down",!e.sortOrder)("fa-caret-up",e.sortOrder),a.Jb(3),a.vc("ngIf",null==e.productList?null:e.productList.length)("ngIfElse",t),a.Jb(19),a.vc("ngModel",e.selectedBrand),a.Jb(1),a.vc("ngForOf",e.brandList),a.Jb(3),a.vc("ngModel",e.productName),a.Jb(7),a.vc("ngModel",e.uom),a.Jb(1),a.vc("ngForOf",e.unitList),a.Jb(3),a.vc("disabled",!i.valid),a.Jb(6),a.vc("ngIf",e.detail)}},directives:[u.b,u.h,u.k,i.l,u.s,u.i,u.j,u.p,u.o,i.k,u.l,u.r],pipes:[s.a,i.r],styles:[""]}),P)}],w=((y=function c(){_classCallCheck(this,c)}).\u0275mod=a.Ub({type:y}),y.\u0275inj=a.Tb({factory:function(c){return new(c||y)},imports:[[n.h.forChild(S)],n.h]}),y),J=t("wloI");t.d(e,"ServiceBasedProductListModule",(function(){return B}));var L,B=((L=function c(){_classCallCheck(this,c)}).\u0275mod=a.Ub({type:L}),L.\u0275inj=a.Tb({factory:function(c){return new(c||L)},imports:[[i.b,w,u.d,J.a]]}),L)}}]);