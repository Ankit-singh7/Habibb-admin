function _classCallCheck(c,t){if(!(c instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(c,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(c,i.key,i)}}function _createClass(c,t,e){return t&&_defineProperties(c.prototype,t),e&&_defineProperties(c,e),c}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"85zB":function(c,t,e){"use strict";e.r(t);var i=e("ofXK"),n=e("tyNb"),o=e("PSD3"),a=e.n(o),r=e("fXoL"),d=e("pVIR"),l=e("AXIP"),u=e("3Pt+"),s=["closeEditModal3"],b=["closeAddModal"];function f(c,t){if(1&c){var e=r.dc();r.cc(0,"tr"),r.cc(1,"td"),r.cc(2,"B"),r.Lc(3),r.bc(),r.bc(),r.cc(4,"td"),r.cc(5,"button",29),r.kc("click",(function(){r.Ec(e);var c=t.$implicit;return r.oc(2).getUnitDetail(c.unit_id)})),r.Xb(6,"i",30),r.bc(),r.cc(7,"button",31),r.kc("click",(function(){r.Ec(e);var c=t.index,i=t.$implicit;return r.oc(2).deleteUnit(c,i.unit_id)})),r.Xb(8,"i",32),r.bc(),r.bc(),r.bc()}if(2&c){var i=t.$implicit;r.Jb(3),r.Mc(i.name)}}function m(c,t){if(1&c&&(r.cc(0,"tbody"),r.Jc(1,f,9,1,"tr",28),r.bc()),2&c){var e=r.oc();r.Jb(1),r.uc("ngForOf",e.unitList)}}function h(c,t){if(1&c&&(r.cc(0,"tbody"),r.cc(1,"tr"),r.cc(2,"td",33),r.Lc(3),r.bc(),r.bc(),r.bc()),2&c){var e=r.oc();r.Jb(3),r.Mc(e.response)}}function g(c,t){if(1&c){var e=r.dc();r.cc(0,"form",34,35),r.cc(2,"div",19),r.cc(3,"div",20),r.cc(4,"h5"),r.Lc(5,"Edit Unit Detail"),r.bc(),r.bc(),r.cc(6,"div",5),r.cc(7,"div",21),r.cc(8,"input",36),r.kc("ngModelChange",(function(c){return r.Ec(e),r.oc().detail.name=c})),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(9,"div",19),r.cc(10,"div",23),r.cc(11,"button",24),r.kc("click",(function(){r.Ec(e);var c=r.oc();return c.editUnit(c.detail.unit_id)})),r.Lc(12,"EDIT"),r.bc(),r.bc(),r.bc(),r.bc()}if(2&c){var i=r.Cc(1),n=r.oc();r.Jb(8),r.uc("ngModel",n.detail.name),r.Jb(3),r.uc("disabled",!i.valid)}}var v,p,k=[{path:"",component:(v=function(){function c(t,e,i){var n=this;_classCallCheck(this,c),this.router=t,this.foodService=e,this.ui=i,this.unitList=[],this.name=[],this.response="No Data Found",this.sortOrder=!1,this.fullName=localStorage.getItem("name"),this.getAllUnit=function(){n.ui.loader.show(),n.foodService.getUnitList().subscribe((function(c){c.data&&(n.unitList=c.data),n.ui.loader.hide()}),(function(c){return n.ui.loader.hide()}))},this.getUnitDetail=function(c){n.foodService.getSingleUnit(c).subscribe((function(c){c.data&&(n.detail=c.data)}))},this.deleteUnit=function(c,t){a.a.fire({title:"Do you want to delete this Unit?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then((function(e){e.isConfirmed&&(n.ui.loader.show(),n.foodService.deleteUnit(t).subscribe((function(t){a.a.fire({icon:"success",title:"Unit Deleted Successfully",showConfirmButton:!1,timer:1500}),n.unitList.splice(c,1),n.ui.loader.hide()}),(function(c){return n.ui.loader.hide()})))}))},this.addUnit=function(){n.ui.loader.show();var c={name:n.unitName};n.unitList.push(c),n.foodService.createUnit(c).subscribe((function(c){n.unitName="",n.closeAddModal.nativeElement.click(),a.a.fire({icon:"success",title:"Unit Created Successfully",showConfirmButton:!1,timer:1500}),n.getAllUnit(),n.ui.loader.hide()}),(function(c){return n.ui.loader.hide()}))},this.editUnit=function(c){n.ui.loader.show(),delete n.detail.validationToken,delete n.detail.createdOn,delete n.detail.ingredient_category_id,n.foodService.updateUnit(c,n.detail).subscribe((function(c){n.closeEditModal.nativeElement.click(),n.detail={},n.ui.loader.hide(),n.getAllUnit()}),(function(c){n.ui.loader.hide()}))},this.logout=function(){localStorage.setItem("isLoggedIn",String(!1)),n.router.navigate(["/login"])}}return _createClass(c,[{key:"ngOnInit",value:function(){this.getAllUnit()}},{key:"changeOrder",value:function(c){var t=this;this.sortOrder=!this.sortOrder,this.field=c,this.unitList.sort((function(e,i){return t.sortOrder?i[c].localeCompare(e[c]):e[c].localeCompare(i[c])}))}}]),c}(),v.\u0275fac=function(c){return new(c||v)(r.Wb(n.e),r.Wb(d.a),r.Wb(l.a))},v.\u0275cmp=r.Qb({type:v,selectors:[["app-unit"]],viewQuery:function(c,t){var e;1&c&&(r.Qc(s,!0),r.Qc(b,!0)),2&c&&(r.Bc(e=r.lc())&&(t.closeEditModal=e.first),r.Bc(e=r.lc())&&(t.closeAddModal=e.first))},decls:43,vars:9,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-4"],[1,"form-group"],["data-toggle","modal","data-target","#addWaiter",1,"shortcut-btn","d-block","w-100"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],["id","addWaiter","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeAddModal",""],[1,"modal-dialog","modal-lg"],[1,"modal-content",2,"padding","2%"],["id","subform3","role","form"],["subForm3","ngForm"],[1,"row"],[1,"col-12"],[1,"form-group","position-relative"],["type","text","placeholder","Unit Name","name","Cname","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"col-12",2,"text-align","center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["id","addWaiter2","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeEditModal3",""],["id","subform4","role","form",4,"ngIf"],[4,"ngFor","ngForOf"],["type","button","data-toggle","modal","data-target","#addWaiter2",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-trash-o"],["colspan","100%",1,"text-center"],["id","subform4","role","form"],["subForm4","ngForm"],["type","text","placeholder","Unit Name","name","fname1","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"]],template:function(c,t){if(1&c&&(r.cc(0,"div",0),r.cc(1,"div",1),r.cc(2,"div",2),r.cc(3,"div",3),r.cc(4,"button",4),r.cc(5,"b"),r.Lc(6,"+ Add Unit"),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(7,"div",5),r.cc(8,"div",6),r.cc(9,"table",7),r.cc(10,"thead"),r.cc(11,"tr"),r.cc(12,"th",8),r.Lc(13,"Unit Name"),r.cc(14,"a",9),r.kc("click",(function(){return t.changeOrder("name")})),r.Xb(15,"i",10),r.bc(),r.bc(),r.cc(16,"th",8),r.Lc(17,"Action"),r.bc(),r.bc(),r.bc(),r.Jc(18,m,2,1,"tbody",11),r.Jc(19,h,4,1,"ng-template",null,12,r.Kc),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(21,"div",13,14),r.cc(23,"div",15),r.cc(24,"div",16),r.cc(25,"form",17,18),r.cc(27,"div",19),r.cc(28,"div",20),r.cc(29,"h5"),r.Lc(30,"Add a Unit"),r.bc(),r.bc(),r.cc(31,"div",5),r.cc(32,"div",21),r.cc(33,"input",22),r.kc("ngModelChange",(function(c){return t.unitName=c})),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(34,"div",19),r.cc(35,"div",23),r.cc(36,"button",24),r.kc("click",(function(){return t.addUnit()})),r.Lc(37,"SUBMIT"),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(38,"div",25,26),r.cc(40,"div",15),r.cc(41,"div",16),r.Jc(42,g,13,2,"form",27),r.bc(),r.bc(),r.bc()),2&c){var e=r.Cc(20),i=r.Cc(26);r.Jb(15),r.Nb("fa-caret-down",!t.sortOrder)("fa-caret-up",t.sortOrder),r.Jb(3),r.uc("ngIf",null==t.unitList?null:t.unitList.length)("ngIfElse",e),r.Jb(15),r.uc("ngModel",t.unitName),r.Jb(3),r.uc("disabled",!i.valid),r.Jb(6),r.uc("ngIf",t.detail)}},directives:[i.l,u.s,u.i,u.j,u.b,u.o,u.h,u.k,i.k],styles:[""]}),v)}],y=((p=function c(){_classCallCheck(this,c)}).\u0275mod=r.Ub({type:p}),p.\u0275inj=r.Tb({factory:function(c){return new(c||p)},imports:[[n.h.forChild(k)],n.h]}),p);e.d(t,"UnitModule",(function(){return C}));var U,C=((U=function c(){_classCallCheck(this,c)}).\u0275mod=r.Ub({type:U}),U.\u0275inj=r.Tb({factory:function(c){return new(c||U)},imports:[[i.b,u.d,y]]}),U)}}]);