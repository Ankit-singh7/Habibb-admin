(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"85zB":function(t,c,i){"use strict";i.r(c);var e=i("ofXK"),n=i("tyNb"),o=i("PSD3"),d=i.n(o),a=i("fXoL"),l=i("pVIR"),r=i("AXIP"),s=i("3Pt+");const b=["closeEditModal3"],u=["closeAddModal"];function h(t,c){if(1&t){const t=a.dc();a.cc(0,"tr"),a.cc(1,"td"),a.cc(2,"B"),a.Lc(3),a.bc(),a.bc(),a.cc(4,"td"),a.cc(5,"button",29),a.kc("click",(function(){a.Ec(t);const i=c.$implicit;return a.oc(2).getUnitDetail(i.unit_id)})),a.Xb(6,"i",30),a.bc(),a.cc(7,"button",31),a.kc("click",(function(){a.Ec(t);const i=c.index,e=c.$implicit;return a.oc(2).deleteUnit(i,e.unit_id)})),a.Xb(8,"i",32),a.bc(),a.bc(),a.bc()}if(2&t){const t=c.$implicit;a.Jb(3),a.Mc(t.name)}}function f(t,c){if(1&t&&(a.cc(0,"tbody"),a.Jc(1,h,9,1,"tr",28),a.bc()),2&t){const t=a.oc();a.Jb(1),a.uc("ngForOf",t.unitList)}}function m(t,c){if(1&t&&(a.cc(0,"tbody"),a.cc(1,"tr"),a.cc(2,"td",33),a.Lc(3),a.bc(),a.bc(),a.bc()),2&t){const t=a.oc();a.Jb(3),a.Mc(t.response)}}function g(t,c){if(1&t){const t=a.dc();a.cc(0,"form",34,35),a.cc(2,"div",19),a.cc(3,"div",20),a.cc(4,"h5"),a.Lc(5,"Edit Unit Detail"),a.bc(),a.bc(),a.cc(6,"div",5),a.cc(7,"div",21),a.cc(8,"input",36),a.kc("ngModelChange",(function(c){return a.Ec(t),a.oc().detail.name=c})),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(9,"div",19),a.cc(10,"div",23),a.cc(11,"button",24),a.kc("click",(function(){a.Ec(t);const c=a.oc();return c.editUnit(c.detail.unit_id)})),a.Lc(12,"EDIT"),a.bc(),a.bc(),a.bc(),a.bc()}if(2&t){const t=a.Cc(1),c=a.oc();a.Jb(8),a.uc("ngModel",c.detail.name),a.Jb(3),a.uc("disabled",!t.valid)}}const p=[{path:"",component:(()=>{class t{constructor(t,c,i){this.router=t,this.foodService=c,this.ui=i,this.unitList=[],this.name=[],this.response="No Data Found",this.sortOrder=!1,this.fullName=localStorage.getItem("name"),this.getAllUnit=()=>{this.ui.loader.show(),this.foodService.getUnitList().subscribe(t=>{t.data&&(this.unitList=t.data),this.ui.loader.hide()},t=>this.ui.loader.hide())},this.getUnitDetail=t=>{this.foodService.getSingleUnit(t).subscribe(t=>{t.data&&(this.detail=t.data)})},this.deleteUnit=(t,c)=>{d.a.fire({title:"Do you want to delete this Unit?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then(i=>{i.isConfirmed&&(this.ui.loader.show(),this.foodService.deleteUnit(c).subscribe(c=>{d.a.fire({icon:"success",title:"Unit Deleted Successfully",showConfirmButton:!1,timer:1500}),this.unitList.splice(t,1),this.ui.loader.hide()},t=>this.ui.loader.hide()))})},this.addUnit=()=>{this.ui.loader.show();const t={name:this.unitName};this.unitList.push(t),this.foodService.createUnit(t).subscribe(t=>{this.unitName="",this.closeAddModal.nativeElement.click(),d.a.fire({icon:"success",title:"Unit Created Successfully",showConfirmButton:!1,timer:1500}),this.getAllUnit(),this.ui.loader.hide()},t=>this.ui.loader.hide())},this.editUnit=t=>{this.ui.loader.show(),delete this.detail.validationToken,delete this.detail.createdOn,delete this.detail.ingredient_category_id,this.foodService.updateUnit(t,this.detail).subscribe(t=>{this.closeEditModal.nativeElement.click(),this.detail={},this.ui.loader.hide(),this.getAllUnit()},t=>{this.ui.loader.hide()})},this.logout=()=>{localStorage.setItem("isLoggedIn",String(!1)),this.router.navigate(["/login"])}}ngOnInit(){this.getAllUnit()}changeOrder(t){this.sortOrder=!this.sortOrder,this.field=t,this.unitList.sort((c,i)=>this.sortOrder?i[t].localeCompare(c[t]):c[t].localeCompare(i[t]))}}return t.\u0275fac=function(c){return new(c||t)(a.Wb(n.e),a.Wb(l.a),a.Wb(r.a))},t.\u0275cmp=a.Qb({type:t,selectors:[["app-unit"]],viewQuery:function(t,c){var i;1&t&&(a.Qc(b,!0),a.Qc(u,!0)),2&t&&(a.Bc(i=a.lc())&&(c.closeEditModal=i.first),a.Bc(i=a.lc())&&(c.closeAddModal=i.first))},decls:43,vars:9,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-4"],[1,"form-group"],["data-toggle","modal","data-target","#addWaiter",1,"shortcut-btn","d-block","w-100"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],["id","addWaiter","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeAddModal",""],[1,"modal-dialog","modal-lg"],[1,"modal-content",2,"padding","2%"],["id","subform3","role","form"],["subForm3","ngForm"],[1,"row"],[1,"col-12"],[1,"form-group","position-relative"],["type","text","placeholder","Unit Name","name","Cname","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"col-12",2,"text-align","center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["id","addWaiter2","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeEditModal3",""],["id","subform4","role","form",4,"ngIf"],[4,"ngFor","ngForOf"],["type","button","data-toggle","modal","data-target","#addWaiter2",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-trash-o"],["colspan","100%",1,"text-center"],["id","subform4","role","form"],["subForm4","ngForm"],["type","text","placeholder","Unit Name","name","fname1","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"]],template:function(t,c){if(1&t&&(a.cc(0,"div",0),a.cc(1,"div",1),a.cc(2,"div",2),a.cc(3,"div",3),a.cc(4,"button",4),a.cc(5,"b"),a.Lc(6,"+ Add Unit"),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(7,"div",5),a.cc(8,"div",6),a.cc(9,"table",7),a.cc(10,"thead"),a.cc(11,"tr"),a.cc(12,"th",8),a.Lc(13,"Unit Name"),a.cc(14,"a",9),a.kc("click",(function(){return c.changeOrder("name")})),a.Xb(15,"i",10),a.bc(),a.bc(),a.cc(16,"th",8),a.Lc(17,"Action"),a.bc(),a.bc(),a.bc(),a.Jc(18,f,2,1,"tbody",11),a.Jc(19,m,4,1,"ng-template",null,12,a.Kc),a.bc(),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(21,"div",13,14),a.cc(23,"div",15),a.cc(24,"div",16),a.cc(25,"form",17,18),a.cc(27,"div",19),a.cc(28,"div",20),a.cc(29,"h5"),a.Lc(30,"Add a Unit"),a.bc(),a.bc(),a.cc(31,"div",5),a.cc(32,"div",21),a.cc(33,"input",22),a.kc("ngModelChange",(function(t){return c.unitName=t})),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(34,"div",19),a.cc(35,"div",23),a.cc(36,"button",24),a.kc("click",(function(){return c.addUnit()})),a.Lc(37,"SUBMIT"),a.bc(),a.bc(),a.bc(),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(38,"div",25,26),a.cc(40,"div",15),a.cc(41,"div",16),a.Jc(42,g,13,2,"form",27),a.bc(),a.bc(),a.bc()),2&t){const t=a.Cc(20),i=a.Cc(26);a.Jb(15),a.Nb("fa-caret-down",!c.sortOrder)("fa-caret-up",c.sortOrder),a.Jb(3),a.uc("ngIf",null==c.unitList?null:c.unitList.length)("ngIfElse",t),a.Jb(15),a.uc("ngModel",c.unitName),a.Jb(3),a.uc("disabled",!i.valid),a.Jb(6),a.uc("ngIf",c.detail)}},directives:[e.l,s.s,s.i,s.j,s.b,s.o,s.h,s.k,e.k],styles:[""]}),t})()}];let v=(()=>{class t{}return t.\u0275mod=a.Ub({type:t}),t.\u0275inj=a.Tb({factory:function(c){return new(c||t)},imports:[[n.h.forChild(p)],n.h]}),t})();i.d(c,"UnitModule",(function(){return U}));let U=(()=>{class t{}return t.\u0275mod=a.Ub({type:t}),t.\u0275inj=a.Tb({factory:function(c){return new(c||t)},imports:[[e.b,s.d,v]]}),t})()}}]);