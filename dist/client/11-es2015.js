(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{EREN:function(t,e,n){"use strict";n.r(e),n.d(e,"SettingModule",function(){return Tt});var c=n("ofXK"),o=n("eXdM"),i=n("tyNb"),r=n("1k1q"),s=n("l7P3"),a=n("K3ix"),l=n("jEx6"),p=n("ADXf"),u=n("BHlQ"),d=n("FZB/"),m=n("pojF"),h=n("fXoL"),f=n("sYmb"),g=n("Ide5"),v=n("lvnI"),b=n("C1lg"),y=n("3Pt+"),Q=n("t34c"),S=n("1W58"),C=n("JthL");function I(t,e){if(1&t&&(h.jc(0,"p"),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t){const t=h.sc(2).$implicit;h.Qb(1),h.Uc(" ",h.uc(2,1,"form.label."+t)," ")}}function j(t,e){if(1&t&&(h.jc(0,"p"),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t){const t=h.sc(2).$implicit;h.Qb(1),h.Uc(" ",h.uc(2,1,"setting.application."+t+".label")," ")}}function P(t,e){1&t&&(h.jc(0,"p",11),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t&&(h.Qb(1),h.Uc("",h.uc(2,1,"form.required")," "))}function F(t,e){if(1&t&&(h.jc(0,"option",15),h.Sc(1),h.tc(2,"changeLanguage"),h.ic()),2&t){const t=e.$implicit;h.zc("value",t.id),h.Qb(1),h.Uc(" ",h.uc(2,2,t.name),"")}}function O(t,e){if(1&t){const t=h.kc();h.jc(0,"select",12),h.qc("change",function(){h.Lc(t);return h.sc(3).changeTheater()}),h.jc(1,"option",13),h.Sc(2),h.tc(3,"translate"),h.ic(),h.Qc(4,F,3,4,"option",14),h.ic()}if(2&t){const t=h.sc(2).$implicit,e=h.sc();h.zc("formControlName",t),h.Qb(2),h.Tc(h.uc(3,3,"setting.unselected")),h.Qb(2),h.zc("ngForOf",e.theaters)}}function z(t,e){if(1&t&&(h.jc(0,"option",15),h.Sc(1),h.ic()),2&t){const t=e.$implicit;h.zc("value",t.id),h.Qb(1),h.Tc(t.name)}}function T(t,e){if(1&t&&(h.jc(0,"select",16),h.jc(1,"option",13),h.Sc(2),h.tc(3,"translate"),h.ic(),h.Qc(4,z,2,2,"option",14),h.ic()),2&t){const t=h.sc(2).$implicit,e=h.sc();h.zc("formControlName",t),h.Qb(2),h.Tc(h.uc(3,3,"setting.unselected")),h.Qb(2),h.zc("ngForOf",e.posList)}}function G(t,e){if(1&t&&(h.jc(0,"select",16),h.jc(1,"option",15),h.Sc(2),h.tc(3,"translate"),h.ic(),h.jc(4,"option",15),h.Sc(5),h.tc(6,"translate"),h.ic(),h.ic()),2&t){const t=h.sc(2).$implicit,e=h.sc();h.zc("formControlName",t),h.Qb(1),h.zc("value",e.applicationType.Tvm),h.Qb(1),h.Uc(" ",h.uc(3,5,"setting.application.applicationType.option.tvm")," "),h.Qb(2),h.zc("value",e.applicationType.Printer),h.Qb(1),h.Uc(" ",h.uc(6,7,"setting.application.applicationType.option.printer")," ")}}function A(t,e){if(1&t){const t=h.kc();h.jc(0,"app-numeric-keypad",19),h.qc("change",function(e){h.Lc(t);return h.sc(4).formGroup.controls.applicationPassword.setValue(e)}),h.ec(1,"input",20),h.ic()}if(2&t){const t=h.sc(3).$implicit,e=h.sc();h.zc("inputValue",e.formGroup.controls.applicationPassword.value),h.Qb(1),h.zc("formControlName",t)}}function k(t,e){if(1&t&&h.ec(0,"input",21),2&t){const t=h.sc(3).$implicit;h.zc("formControlName",t)}}function N(t,e){if(1&t&&(h.hc(0),h.Qc(1,A,2,2,"app-numeric-keypad",17),h.Qc(2,k,1,1,"input",18),h.gc()),2&t){const t=h.sc(3);h.Qb(1),h.zc("ngIf",t.environment.INPUT_KEYPAD),h.Qb(1),h.zc("ngIf",!t.environment.INPUT_KEYPAD)}}function w(t,e){if(1&t&&(h.jc(0,"div",3),h.jc(1,"div",4),h.jc(2,"div",5),h.Qc(3,I,3,3,"p",6),h.Qc(4,j,3,3,"p",6),h.Qc(5,P,3,3,"p",7),h.ic(),h.ic(),h.jc(6,"div",8),h.Qc(7,O,5,5,"select",9),h.Qc(8,T,5,5,"select",10),h.Qc(9,G,7,9,"select",10),h.Qc(10,N,3,2,"ng-container",6),h.ic(),h.ic()),2&t){const t=h.sc().$implicit,e=h.sc();h.Qb(3),h.zc("ngIf",!("applicationType"===t||"applicationPassword"===t)),h.Qb(1),h.zc("ngIf","applicationType"===t||"applicationPassword"===t),h.Qb(1),h.zc("ngIf",e.isRequired(t)),h.Qb(2),h.zc("ngIf","theaterId"===t),h.Qb(1),h.zc("ngIf","posId"===t),h.Qb(1),h.zc("ngIf","applicationType"===t),h.Qb(1),h.zc("ngIf","applicationPassword"===t)}}function L(t,e){if(1&t&&(h.hc(0),h.Qc(1,w,11,7,"div",2),h.gc()),2&t){const t=e.$implicit,n=h.sc();h.Qb(1),h.zc("ngIf",!("posId"===t&&0===n.posList.length))}}class x{constructor(t){this.formBuilder=t,this.environment=Object(p.a)(),this.applicationType=l.b.Util.Application.ApplicationType,this.valueChanges=new h.s}ngOnInit(){this.posList=[],this.formGroup=this.createForm();const{theater:t,pos:e,applicationPassword:n}=this.data;void 0!==t&&(this.formGroup.controls.theaterId.setValue(t.id),this.changeTheater()),void 0!==e&&this.formGroup.controls.posId.setValue(e.id);const c=void 0===this.data.applicationType?this.applicationType.Tvm:this.data.applicationType;this.formGroup.controls.applicationType.setValue(c),void 0!==n&&this.formGroup.controls.applicationPassword.setValue(n),this.valueChanges.emit(this.formGroup),this.subscription=this.formGroup.valueChanges.subscribe(()=>{this.valueChanges.emit(this.formGroup)})}ngOnDestroy(){void 0!==this.subscription&&this.subscription.unsubscribe()}createForm(){return this.formBuilder.group({theaterId:["",[y.q.required]],posId:[""],applicationType:[""],applicationPassword:[""]})}isRequired(t){return"theaterId"===t||void 0!==this.environment.PROFILE.find(e=>e.key===t&&e.required)}getProfileFormKeys(){return Object.keys(this.formGroup.controls)}getProfileProperty(t){return this.environment.PROFILE.find(e=>e.key===t)}getAdditionalProperty(t){return this.environment.PROFILE.find(e=>/additionalProperty/.test(e.key)&&e.key===t)}changeTheater(){this.formGroup.controls.posId.setValue("");const t=this.formGroup.controls.theaterId.value,e=this.theaters.find(e=>e.id===t);this.posList=""!==t&&void 0!==e?void 0===e.hasPOS?[]:e.hasPOS:[]}}function E(t,e){if(1&t&&(h.jc(0,"option",14),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t){const t=e.$implicit;h.zc("value",t.connectionType),h.Qb(1),h.Uc(" ",h.uc(2,2,t.name),"")}}function q(t,e){if(1&t){const t=h.kc();h.jc(0,"button",15),h.qc("click",function(){h.Lc(t);return h.sc().print.emit()}),h.Sc(1),h.tc(2,"translate"),h.ic()}2&t&&(h.Qb(1),h.Tc(h.uc(2,1,"setting.device.printer.testPrinting")))}function U(t,e){1&t&&(h.jc(0,"p",18),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t&&(h.Qb(1),h.Uc(" ",h.uc(2,1,"form.validation.required"),""))}function D(t,e){if(1&t&&(h.jc(0,"div",16),h.Qc(1,U,3,3,"p",17),h.ic()),2&t){const t=h.sc();h.Qb(1),h.zc("ngIf",null==t.formGroup.controls.printerIpAddress.errors?null:t.formGroup.controls.printerIpAddress.errors.required)}}function $(t,e){1&t&&(h.jc(0,"p",18),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t&&(h.Qb(1),h.Uc(" ",h.uc(2,1,"form.validation.required"),""))}function R(t,e){if(1&t&&(h.jc(0,"div",16),h.Qc(1,$,3,3,"p",17),h.ic()),2&t){const t=h.sc();h.Qb(1),h.zc("ngIf",null==t.formGroup.controls.cashchanger.errors?null:t.formGroup.controls.cashchanger.errors.required)}}function V(t,e){1&t&&(h.jc(0,"p",18),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t&&(h.Qb(1),h.Uc(" ",h.uc(2,1,"form.validation.required"),""))}function _(t,e){if(1&t&&(h.jc(0,"div",16),h.Qc(1,V,3,3,"p",17),h.ic()),2&t){const t=h.sc();h.Qb(1),h.zc("ngIf",null==t.formGroup.controls.payment.errors?null:t.formGroup.controls.payment.errors.required)}}x.\u0275fac=function(t){return new(t||x)(h.dc(y.b))},x.\u0275cmp=h.Xb({type:x,selectors:[["app-input-app"]],inputs:{data:"data",theaters:"theaters"},outputs:{valueChanges:"valueChanges"},decls:2,vars:2,consts:[[3,"formGroup"],[4,"ngFor","ngForOf"],["class","form-group row align-items-center",4,"ngIf"],[1,"form-group","row","align-items-center"],[1,"col-4","py-2","text-right"],[1,"d-inline-flex","align-items-center"],[4,"ngIf"],["class","badge badge-danger ml-2",4,"ngIf"],[1,"col-8"],["class","form-control",3,"formControlName","change",4,"ngIf"],["class","form-control",3,"formControlName",4,"ngIf"],[1,"badge","badge-danger","ml-2"],[1,"form-control",3,"formControlName","change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"form-control",3,"formControlName"],["inputType","string",3,"inputValue","change",4,"ngIf"],["type","password","class","form-control",3,"formControlName",4,"ngIf"],["inputType","string",3,"inputValue","change"],["type","password","readonly","",1,"form-control",3,"formControlName"],["type","password",1,"form-control",3,"formControlName"]],template:function(t,e){1&t&&(h.jc(0,"form",0),h.Qc(1,L,2,1,"ng-container",1),h.ic()),2&t&&(h.zc("formGroup",e.formGroup),h.Qb(1),h.zc("ngForOf",e.getProfileFormKeys()))},directives:[y.r,y.l,y.e,c.k,c.l,y.p,y.k,y.d,Q.b,y.n,y.s,S.a,y.a],pipes:[f.c,C.a],styles:[""]});class B{constructor(t,e){this.formBuilder=t,this.translate=e,this.environment=Object(p.a)(),this.connectionType=l.b.Util.Printer.ConnectionType,this.printers=l.b.Util.Printer.printers,this.valueChanges=new h.s,this.print=new h.s,this.payment=new h.s,this.cashchanger=new h.s}ngOnInit(){this.formGroup=this.createForm();const{printerType:t,printerIpAddress:e,cashchanger:n,payment:c}=this.data;void 0!==t&&(this.formGroup.controls.printerType.setValue(t),this.formGroup.controls.printerIpAddress.setValue(e)),void 0!==n&&this.formGroup.controls.cashchanger.setValue(n),void 0!==c&&this.formGroup.controls.payment.setValue(c),this.valueChanges.emit(this.formGroup),this.subscription=this.formGroup.valueChanges.subscribe(()=>{this.valueChanges.emit(this.formGroup)})}ngOnDestroy(){void 0!==this.subscription&&this.subscription.unsubscribe()}createForm(){return this.formBuilder.group({printerType:[l.b.Util.Printer.ConnectionType.None],printerIpAddress:[""],cashchanger:[""],payment:[""]})}isRequired(t){return void 0!==this.environment.PROFILE.find(e=>e.key===t&&e.required)}getProfileFormKeys(){return Object.keys(this.formGroup.controls)}getProfileProperty(t){return this.environment.PROFILE.find(e=>e.key===t)}getAdditionalProperty(t){return this.environment.PROFILE.find(e=>/additionalProperty/.test(e.key)&&e.key===t)}changePrinterType(){this.formGroup.controls.printerType.value===l.b.Util.Printer.ConnectionType.StarBluetooth&&this.formGroup.controls.printerIpAddress.setValue(this.translate.instant("setting.starBluetoothAddress"))}}B.\u0275fac=function(t){return new(t||B)(h.dc(y.b),h.dc(f.d))},B.\u0275cmp=h.Xb({type:B,selectors:[["app-input-device"]],inputs:{data:"data",isConnected:"isConnected"},outputs:{valueChanges:"valueChanges",print:"print",payment:"payment",cashchanger:"cashchanger"},decls:52,vars:48,consts:[[3,"formGroup"],[1,"form-group","row"],[1,"col-4","text-right","py-3"],[1,"col-8"],["formControlName","printerType",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],["type","button","class","btn btn-sm btn-custom-primary py-2 mt-2",3,"click",4,"ngIf"],["type","text","formControlName","printerIpAddress","placeholder","0.0.0.0",1,"form-control"],["class","mt-2",4,"ngIf"],[1,"text-small","mt-2",3,"innerHtml"],["type","text","formControlName","cashchanger","placeholder","0.0.0.0",1,"form-control"],["type","button",1,"btn","btn-custom-primary","mt-2","mr-2",3,"disabled","click"],["type","button",1,"btn","btn-custom-primary","mt-2",3,"disabled","click"],["type","text","formControlName","payment","placeholder","0.0.0.0",1,"form-control"],[3,"value"],["type","button",1,"btn","btn-sm","btn-custom-primary","py-2","mt-2",3,"click"],[1,"mt-2"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(t,e){1&t&&(h.jc(0,"form",0),h.jc(1,"div",1),h.jc(2,"p",2),h.Sc(3),h.tc(4,"translate"),h.ic(),h.jc(5,"div",3),h.jc(6,"select",4),h.qc("change",function(){return e.changePrinterType()}),h.Qc(7,E,3,4,"option",5),h.ic(),h.Qc(8,q,3,3,"button",6),h.ic(),h.ic(),h.jc(9,"div",1),h.jc(10,"p",2),h.Sc(11),h.tc(12,"translate"),h.ic(),h.jc(13,"div",3),h.ec(14,"input",7),h.Qc(15,D,2,1,"div",8),h.ec(16,"p",9),h.tc(17,"translate"),h.ic(),h.ic(),h.jc(18,"div",1),h.jc(19,"p",2),h.Sc(20),h.tc(21,"translate"),h.ic(),h.jc(22,"div",3),h.ec(23,"input",10),h.ec(24,"p",9),h.tc(25,"translate"),h.Qc(26,R,2,1,"div",8),h.jc(27,"button",11),h.qc("click",function(){return e.cashchanger.emit("connect")}),h.Sc(28),h.tc(29,"translate"),h.ic(),h.jc(30,"button",11),h.qc("click",function(){return e.cashchanger.emit("endDeposit")}),h.Sc(31),h.tc(32,"translate"),h.ic(),h.jc(33,"button",11),h.qc("click",function(){return e.cashchanger.emit("readCounts")}),h.Sc(34),h.tc(35,"translate"),h.ic(),h.jc(36,"button",11),h.qc("click",function(){return e.cashchanger.emit("collectAll")}),h.Sc(37),h.tc(38,"translate"),h.ic(),h.jc(39,"button",12),h.qc("click",function(){return e.cashchanger.emit("collectPart")}),h.Sc(40),h.tc(41,"translate"),h.ic(),h.ic(),h.ic(),h.jc(42,"div",1),h.jc(43,"p",2),h.Sc(44),h.tc(45,"translate"),h.ic(),h.jc(46,"div",3),h.ec(47,"input",13),h.Qc(48,_,2,1,"div",8),h.jc(49,"button",12),h.qc("click",function(){return e.payment.emit()}),h.Sc(50),h.tc(51,"translate"),h.ic(),h.ic(),h.ic(),h.ic()),2&t&&(h.zc("formGroup",e.formGroup),h.Qb(3),h.Tc(h.uc(4,24,"setting.device.printer.label")),h.Qb(4),h.zc("ngForOf",e.printers),h.Qb(1),h.zc("ngIf",e.formGroup.controls.printerType.value&&e.formGroup.controls.printerType.value!==e.connectionType.None),h.Qb(3),h.Tc(h.uc(12,26,"setting.device.printer.ipAddress")),h.Qb(4),h.zc("ngIf",e.formGroup.controls.printerIpAddress.invalid&&e.formGroup.controls.printerIpAddress.touched),h.Qb(1),h.zc("innerHtml",h.uc(17,28,"setting.device.printer.ipAddressDescription"),h.Mc),h.Qb(4),h.Tc(h.uc(21,30,"setting.device.cashchanger.label")),h.Qb(4),h.zc("innerHtml",h.uc(25,32,"setting.device.cashchanger.description"),h.Mc),h.Qb(2),h.zc("ngIf",e.formGroup.controls.cashchanger.invalid&&e.formGroup.controls.cashchanger.touched),h.Qb(1),h.zc("disabled",e.isConnected),h.Qb(1),h.Tc(h.uc(29,34,"setting.device.connect")),h.Qb(2),h.zc("disabled",e.isConnected),h.Qb(1),h.Tc(h.uc(32,36,"setting.device.endDeposit")),h.Qb(2),h.zc("disabled",e.isConnected),h.Qb(1),h.Tc(h.uc(35,38,"setting.device.readCounts")),h.Qb(2),h.zc("disabled",e.isConnected),h.Qb(1),h.Tc(h.uc(38,40,"setting.device.collectAll")),h.Qb(2),h.zc("disabled",e.isConnected),h.Qb(1),h.Tc(h.uc(41,42,"setting.device.collectPart")),h.Qb(4),h.Tc(h.uc(45,44,"setting.device.payment.label")),h.Qb(4),h.zc("ngIf",e.formGroup.controls.payment.invalid&&e.formGroup.controls.payment.touched),h.Qb(1),h.zc("disabled",e.isConnected),h.Qb(1),h.Tc(h.uc(51,46,"setting.device.connect")))},directives:[y.r,y.l,y.e,y.p,y.k,y.d,Q.b,c.k,c.l,y.a,y.n,y.s],pipes:[f.c],styles:[""]});n("Hxur");var J=n("PoRY");class M{transform(t,e,n){e=void 0===e?"JP":e,n=void 0===n?"National":n;const c=J.c(t);return"JP"!==c.country?t:J.a(c,n).replace(/\-/g,"")}}M.\u0275fac=function(t){return new(t||M)},M.\u0275pipe=h.cc({name:"libphonenumberFormat",type:M,pure:!0});const K=["intlTelInput"];function H(t,e){if(1&t&&(h.jc(0,"p"),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t){const t=h.sc().$implicit;h.Qb(1),h.Tc(h.uc(2,1,"form.label."+t))}}function X(t,e){if(1&t&&(h.jc(0,"p"),h.Sc(1),h.tc(2,"changeLanguage"),h.ic()),2&t){const t=h.sc().$implicit,e=h.sc();let n=null;h.Qb(1),h.Uc(" ",h.uc(2,1,null==(n=e.getAdditionalProperty(t))?null:n.label),"")}}function Y(t,e){1&t&&(h.jc(0,"p",15),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t&&(h.Qb(1),h.Uc("",h.uc(2,1,"form.required")," "))}function W(t,e){if(1&t&&(h.ec(0,"input",16),h.tc(1,"translate")),2&t){const t=h.sc().$implicit;h.zc("formControlName",t)("id",t)("placeholder",h.uc(1,3,"form.placeholder."+t))}}function Z(t,e){if(1&t&&(h.ec(0,"input",17),h.tc(1,"translate")),2&t){const t=h.sc().$implicit;h.zc("formControlName",t)("id",t)("placeholder",h.uc(1,3,"form.placeholder."+t))}}const tt=function(t){return[t]},et=function(t,e){return[t,e]};function nt(t,e){if(1&t&&h.ec(0,"ngx-intl-tel-input",18,19),2&t){const t=h.sc(2);h.zc("preferredCountries",h.Bc(10,tt,t.CountryISO.Japan))("enableAutoCountrySelect",!1)("enablePlaceholder",!0)("searchCountryFlag",!0)("searchCountryField",h.Cc(12,et,t.SearchCountryField.Iso2,t.SearchCountryField.Name))("selectFirstCountry",!1)("selectedCountryISO",t.CountryISO.Japan)("maxLength",15)("phoneValidation",!0)("separateDialCode",!1)}}function ct(t,e){if(1&t&&(h.jc(0,"option",22),h.Sc(1),h.tc(2,"changeLanguage"),h.ic()),2&t){const t=e.$implicit;h.zc("value",t.value),h.Qb(1),h.Uc(" ",h.uc(2,2,t.label)," ")}}function ot(t,e){if(1&t&&(h.jc(0,"select",20),h.Qc(1,ct,3,4,"option",21),h.ic()),2&t){const t=h.sc().$implicit,e=h.sc();let n=null;h.zc("formControlName",t)("id",t),h.Qb(1),h.zc("ngForOf",null==(n=e.getProfileProperty(t))?null:n.option)}}function it(t,e){if(1&t&&h.ec(0,"input",23),2&t){const t=h.sc().$implicit;h.zc("formControlName",t)("id",t)}}function rt(t,e){if(1&t&&h.ec(0,"textarea",24),2&t){const t=h.sc().$implicit;h.zc("formControlName",t)("id",t)}}function st(t,e){if(1&t&&(h.jc(0,"option",22),h.Sc(1),h.tc(2,"changeLanguage"),h.ic()),2&t){const t=e.$implicit;h.zc("value",t.value),h.Qb(1),h.Uc(" ",h.uc(2,2,t.label)," ")}}function at(t,e){if(1&t&&(h.jc(0,"select",24),h.Qc(1,st,3,4,"option",21),h.ic()),2&t){const t=h.sc().$implicit,e=h.sc();let n=null;h.zc("formControlName",t)("id",t),h.Qb(1),h.zc("ngForOf",null==(n=e.getAdditionalProperty(t))?null:n.option)}}function lt(t,e){1&t&&(h.jc(0,"p",27),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t&&(h.Qb(1),h.Uc(" ",h.uc(2,1,"form.validation.required")," "))}const pt=function(t){return{value:t}};function ut(t,e){if(1&t&&(h.jc(0,"p",27),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t){const t=h.sc(2).$implicit,e=h.sc();h.Qb(1),h.Uc(" ",h.vc(2,1,"form.validation.maxlength",h.Bc(4,pt,null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.maxlength.requiredLength))," ")}}function dt(t,e){if(1&t&&(h.jc(0,"p",27),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t){const t=h.sc(2).$implicit,e=h.sc();h.Qb(1),h.Uc(" ",h.vc(2,1,"form.validation.minlength",h.Bc(4,pt,null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.minlength.requiredLength))," ")}}function mt(t,e){1&t&&(h.jc(0,"p",27),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t&&(h.Qb(1),h.Uc(" ",h.uc(2,1,"form.validation.email")," "))}function ht(t,e){1&t&&(h.jc(0,"p",27),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t&&(h.Qb(1),h.Uc(" ",h.uc(2,1,"form.validation.telephone")," "))}function ft(t,e){1&t&&(h.jc(0,"p",27),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t&&(h.Qb(1),h.Uc(" ",h.uc(2,1,"form.validation.fullKana"),""))}function gt(t,e){1&t&&(h.jc(0,"p",27),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t&&(h.Qb(1),h.Uc(" ",h.uc(2,1,"form.validation.lowercaseLetters"),""))}function vt(t,e){if(1&t&&(h.jc(0,"div"),h.Qc(1,ft,3,3,"p",26),h.Qc(2,gt,3,3,"p",26),h.ic()),2&t){const t=h.sc(2).$implicit,e=h.sc();h.Qb(1),h.zc("ngIf","ja"===e.language&&(null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.customPattern)),h.Qb(1),h.zc("ngIf","ja"!==e.language&&(null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.customPattern))}}function bt(t,e){1&t&&(h.jc(0,"p",27),h.Sc(1),h.tc(2,"translate"),h.ic()),2&t&&(h.Qb(1),h.Uc(" ",h.uc(2,1,"form.validation.pattern")," "))}function yt(t,e){if(1&t&&(h.jc(0,"div",25),h.Qc(1,lt,3,3,"p",26),h.Qc(2,ut,3,6,"p",26),h.Qc(3,dt,3,6,"p",26),h.Qc(4,mt,3,3,"p",26),h.Qc(5,ht,3,3,"p",26),h.Qc(6,vt,3,2,"div",5),h.Qc(7,bt,3,3,"p",26),h.ic()),2&t){const t=h.sc().$implicit,e=h.sc();h.Qb(1),h.zc("ngIf",null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.required),h.Qb(1),h.zc("ngIf",null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.maxlength),h.Qb(1),h.zc("ngIf",null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.minlength),h.Qb(1),h.zc("ngIf",null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.email),h.Qb(1),h.zc("ngIf",null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.validatePhoneNumber),h.Qb(1),h.zc("ngIf","familyName"===t||"givenName"===t),h.Qb(1),h.zc("ngIf",null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.pattern)}}function Qt(t,e){if(1&t&&(h.jc(0,"div",2),h.jc(1,"div",3),h.jc(2,"div",4),h.Qc(3,H,3,3,"p",5),h.Qc(4,X,3,3,"p",5),h.Qc(5,Y,3,3,"p",6),h.ic(),h.ic(),h.jc(6,"div",7),h.Qc(7,W,2,5,"input",8),h.Qc(8,Z,2,5,"input",9),h.Qc(9,nt,2,15,"ngx-intl-tel-input",10),h.Qc(10,ot,2,3,"select",11),h.Qc(11,it,1,2,"input",12),h.Qc(12,rt,1,2,"textarea",13),h.Qc(13,at,2,3,"select",13),h.Qc(14,yt,8,7,"div",14),h.ic(),h.ic()),2&t){const t=e.$implicit,n=h.sc();let c=null,o=null,i=null;h.Qb(3),h.zc("ngIf",!n.getAdditionalProperty(t)),h.Qb(1),h.zc("ngIf",n.getAdditionalProperty(t)),h.Qb(1),h.zc("ngIf",n.isRequired(t)),h.Qb(2),h.zc("ngIf","email"!==t&&"telephone"!==t&&"gender"!==t&&!n.getAdditionalProperty(t)),h.Qb(1),h.zc("ngIf","email"===t),h.Qb(1),h.zc("ngIf","telephone"===t),h.Qb(1),h.zc("ngIf","gender"===t),h.Qb(1),h.zc("ngIf",n.getAdditionalProperty(t)&&"input"===(null==(c=n.getAdditionalProperty(t))?null:c.inputType)),h.Qb(1),h.zc("ngIf",n.getAdditionalProperty(t)&&"textarea"===(null==(o=n.getAdditionalProperty(t))?null:o.inputType)),h.Qb(1),h.zc("ngIf",n.getAdditionalProperty(t)&&"select"===(null==(i=n.getAdditionalProperty(t))?null:i.inputType)),h.Qb(1),h.zc("ngIf",n.formGroup.controls[t].invalid&&n.formGroup.controls[t].touched)}}class St{constructor(t,e){this.translate=t,this.formBuilder=e,this.environment=Object(p.a)(),this.SearchCountryField=Q.e,this.CountryISO=Q.a,this.valueChanges=new h.s}ngOnInit(){this.formGroup=this.createForm(),this.valueChanges.emit(this.formGroup),this.subscription=this.formGroup.valueChanges.subscribe(()=>{this.valueChanges.emit(this.formGroup)}),setTimeout(()=>{if(void 0===this.intlTelInput)return;const t=this.intlTelInput.allCountries.find(t=>t.iso2===Q.a.Japan);void 0!==t&&(t.placeHolder=this.translate.instant("form.placeholder.telephone"))},0)}ngOnDestroy(){void 0!==this.subscription&&this.subscription.unsubscribe()}createForm(){const t=this.environment.PROFILE,e=this.formBuilder.group({});if(t.forEach(t=>{const n=[];void 0!==t.required&&t.required&&n.push(y.q.required),void 0!==t.maxLength&&n.push(y.q.maxLength(t.maxLength)),void 0!==t.minLength&&n.push(y.q.minLength(t.minLength)),void 0!==t.pattern&&n.push(y.q.pattern(t.pattern)),"familyName"!==t.key&&"givenName"!==t.key||n.push(e=>{const n=e.root.get(t.key),c=document.documentElement.lang;if(null!==n){if(""===n.value)return null;if("ja"===c&&!new RegExp(/^[\u30a1-\u30f6\u30fc]+$/).test(n.value))return{customPattern:!0};if("ja"!==c&&!new RegExp(/^[a-z]+$/).test(n.value))return{customPattern:!0}}return null}),"email"===t.key&&n.push(y.q.email),e.addControl(t.key,new y.c(t.value,n))}),void 0===this.profile)return e;Object.keys(this.profile).forEach(t=>{const n=this.profile[t];void 0!==n&&void 0!==e.controls[t]&&("telephone"!==t?e.controls[t].setValue(n):e.controls.telephone.setValue((new M).transform(n)))});const n=this.profile.additionalProperty;return void 0!==n&&n.forEach(t=>{const n=`additionalProperty.${t.name}`,c=t.value;void 0!==c&&void 0!==e.controls[n]&&e.controls[n].setValue(c)}),e}isRequired(t){return void 0!==this.environment.PROFILE.find(e=>e.key===t&&e.required)}getProfileFormKeys(){return Object.keys(this.formGroup.controls)}getProfileProperty(t){return this.environment.PROFILE.find(e=>e.key===t)}getAdditionalProperty(t){return this.environment.PROFILE.find(e=>/additionalProperty/.test(e.key)&&e.key===t)}copyDomain(){const t=this.translate.instant("email.domain"),e=document.createElement("textarea");e.value=t,e.selectionStart=0,e.selectionEnd=e.value.length,document.body.appendChild(e),e.focus(),document.execCommand("copy"),e.blur(),document.body.removeChild(e)}}St.\u0275fac=function(t){return new(t||St)(h.dc(f.d),h.dc(y.b))},St.\u0275cmp=h.Xb({type:St,selectors:[["app-input-customer"]],viewQuery:function(t,e){if(1&t&&h.Xc(K,1),2&t){let t;h.Hc(t=h.rc())&&(e.intlTelInput=t.first)}},inputs:{profile:"profile",language:"language"},outputs:{valueChanges:"valueChanges"},decls:2,vars:2,consts:[[3,"formGroup"],["class","form-group row align-items-center",4,"ngFor","ngForOf"],[1,"form-group","row","align-items-center"],[1,"col-4","py-2","text-right"],[1,"d-inline-flex","align-items-center"],[4,"ngIf"],["class","badge badge-danger ml-2",4,"ngIf"],[1,"col-8"],["type","text","class","form-control",3,"formControlName","id","placeholder",4,"ngIf"],["type","email","class","form-control",3,"formControlName","id","placeholder",4,"ngIf"],["inputId","telephone","name","telephone","formControlName","telephone",3,"preferredCountries","enableAutoCountrySelect","enablePlaceholder","searchCountryFlag","searchCountryField","selectFirstCountry","selectedCountryISO","maxLength","phoneValidation","separateDialCode",4,"ngIf"],["class","form-control",3,"formControlName","id",4,"ngIf"],["type","text","class","form-control","placeholder","",3,"formControlName","id",4,"ngIf"],["class","form-control","placeholder","",3,"formControlName","id",4,"ngIf"],["class","mt-2",4,"ngIf"],[1,"badge","badge-danger","ml-2"],["type","text",1,"form-control",3,"formControlName","id","placeholder"],["type","email",1,"form-control",3,"formControlName","id","placeholder"],["inputId","telephone","name","telephone","formControlName","telephone",3,"preferredCountries","enableAutoCountrySelect","enablePlaceholder","searchCountryFlag","searchCountryField","selectFirstCountry","selectedCountryISO","maxLength","phoneValidation","separateDialCode"],["intlTelInput",""],[1,"form-control",3,"formControlName","id"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","text","placeholder","",1,"form-control",3,"formControlName","id"],["placeholder","",1,"form-control",3,"formControlName","id"],[1,"mt-2"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(t,e){1&t&&(h.jc(0,"form",0),h.Qc(1,Qt,15,11,"div",1),h.ic()),2&t&&(h.zc("formGroup",e.formGroup),h.Qb(1),h.zc("ngForOf",e.getProfileFormKeys()))},directives:[y.r,y.l,y.e,c.k,c.l,y.a,y.k,y.d,Q.b,Q.c,y.p,y.n,y.s],pipes:[f.c,C.a],styles:["input[_ngcontent-%COMP%], ngx-intl-tel-input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{display:block}textarea[_ngcontent-%COMP%]{min-height:5rem}.form-group[_ngcontent-%COMP%]:last-child{margin-bottom:0!important}"]});var Ct=function(t,e,n,c){return new(n||(n=Promise))(function(o,i){function r(t){try{a(c.next(t))}catch(e){i(e)}}function s(t){try{a(c.throw(t))}catch(e){i(e)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(r,s)}a((c=c.apply(t,e||[])).next())})};function It(t,e){if(1&t){const t=h.kc();h.jc(0,"app-input-app",21),h.qc("valueChanges",function(e){h.Lc(t);return h.sc().appForm=e}),h.ic()}if(2&t){const t=h.sc();h.zc("theaters",t.theaters)("data",null==t.inputData?null:t.inputData.app)}}function jt(t,e){if(1&t){const t=h.kc();h.jc(0,"app-input-device",22),h.qc("valueChanges",function(e){h.Lc(t);return h.sc().deviceForm=e})("print",function(){h.Lc(t);return h.sc().print()})("payment",function(){h.Lc(t);return h.sc().payment()})("cashchanger",function(e){h.Lc(t);return h.sc().cashchanger(e)}),h.ic()}if(2&t){const t=h.sc();h.zc("data",null==t.inputData?null:t.inputData.device)("isConnected",t.epsonEPOSService.cashchanger.isConnected())}}function Pt(t,e){if(1&t){const t=h.kc();h.jc(0,"app-input-customer",23),h.qc("valueChanges",function(e){h.Lc(t);return h.sc().profileForm=e}),h.tc(1,"async"),h.ic()}if(2&t){const t=h.sc();let e=null;h.zc("profile",t.inputData.profile)("language",null==(e=h.uc(1,2,t.user))?null:e.language)}}class Ft{constructor(t,e,n,c,o,i,r,s,a,l){this.epsonEPOSService=t,this.store=e,this.utilService=n,this.actionService=c,this.masterService=o,this.translate=i,this.router=r,this.paymentService=s,this.cinerinoService=a,this.modal=l,this.environment=Object(p.a)()}ngOnInit(){return Ct(this,void 0,void 0,function*(){this.user=this.store.pipe(Object(s.m)(d.g)),this.error=this.store.pipe(Object(s.m)(d.a)),this.isLoading=this.store.pipe(Object(s.m)(d.b)),this.posList=[],this.theaters=[];try{this.theaters=yield this.masterService.searchMovieTheaters();const{theater:t,pos:e,applicationType:n,applicationPassword:c,printer:o,cashchanger:i,payment:r,customerContact:s}=yield this.actionService.user.getData();this.inputData={app:{theater:t,pos:e,applicationType:n,applicationPassword:c},device:{printerType:null==o?void 0:o.connectionType,printerIpAddress:null==o?void 0:o.ipAddress,cashchanger:i,payment:r},profile:s}}catch(t){console.error(t),this.router.navigate(["/error"])}try{const{cashchanger:t}=yield this.actionService.user.getData();void 0!==t&&(yield this.epsonEPOSService.cashchanger.init({ipAddress:t}),yield this.epsonEPOSService.cashchanger.endDeposit({endDepositType:"DEPOSIT_REPAY"}),yield this.epsonEPOSService.cashchanger.disconnect())}catch(t){console.error(t)}})}onSubmit(){return Ct(this,void 0,void 0,function*(){if(Object.keys(this.appForm.controls).forEach(t=>{this.appForm.controls[t].markAsTouched()}),Object.keys(this.deviceForm.controls).forEach(t=>{this.deviceForm.controls[t].markAsTouched()}),Object.keys(this.profileForm.controls).forEach(t=>{this.profileForm.controls[t].markAsTouched()}),this.appForm.invalid||this.deviceForm.invalid||this.profileForm.invalid)this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("setting.alert.validation")});else try{const t=this.appForm.controls.theaterId.value,e=this.appForm.controls.posId.value,n=this.theaters.find(e=>e.id===t);if(void 0===n)throw new Error("theater not found");const c=void 0===n.hasPOS?n.hasPOS:n.hasPOS.find(t=>t.id===e);this.actionService.user.updateAll({pos:c,theater:n,profile:{familyName:void 0===this.profileForm.controls.familyName?void 0:this.profileForm.controls.familyName.value,givenName:void 0===this.profileForm.controls.givenName?void 0:this.profileForm.controls.givenName.value,email:void 0===this.profileForm.controls.email?void 0:this.profileForm.controls.email.value,telephone:void 0===this.profileForm.controls.telephone?void 0:this.profileForm.controls.telephone.value.e164Number,age:void 0===this.profileForm.controls.age?void 0:this.profileForm.controls.age.value,address:void 0===this.profileForm.controls.address?void 0:this.profileForm.controls.address.value,gender:void 0===this.profileForm.controls.gender?void 0:this.profileForm.controls.gender.value},printer:{ipAddress:this.deviceForm.controls.printerIpAddress.value,connectionType:this.deviceForm.controls.printerType.value},cashchanger:void 0===this.deviceForm.controls.cashchanger.value?void 0:this.deviceForm.controls.cashchanger.value,payment:void 0===this.deviceForm.controls.payment.value?void 0:this.deviceForm.controls.payment.value,applicationType:this.appForm.controls.applicationType.value,applicationPassword:this.appForm.controls.applicationPassword.value}),this.utilService.openAlert({title:this.translate.instant("common.complete"),body:this.translate.instant("setting.alert.success")})}catch(t){console.error(t)}})}print(){return Ct(this,void 0,void 0,function*(){const t={connectionType:this.deviceForm.controls.printerType.value,ipAddress:this.deviceForm.controls.printerIpAddress.value};try{yield this.actionService.order.print({orders:[],printer:t})}catch(e){console.error(e),this.utilService.openAlert({title:this.translate.instant("common.error"),body:`\n                <p class="mb-4">${this.translate.instant("setting.alert.print")}</p>\n                    <div class="p-3 bg-light-gray select-text">\n                    <code>${"{}"===JSON.stringify(e)?e:JSON.stringify(e)}</code>\n                </div>`})}})}cashchanger(t){return Ct(this,void 0,void 0,function*(){try{const e=this.deviceForm.controls.cashchanger.value;if("connect"===t&&(yield this.epsonEPOSService.cashchanger.init({ipAddress:e}),yield this.epsonEPOSService.cashchanger.disconnect(),this.utilService.openAlert({title:this.translate.instant("common.complete"),body:this.translate.instant("setting.alert.connection")})),"endDeposit"===t&&(yield this.epsonEPOSService.cashchanger.init({ipAddress:e}),yield this.epsonEPOSService.cashchanger.endDeposit({endDepositType:"DEPOSIT_REPAY"}),yield this.epsonEPOSService.cashchanger.disconnect()),"readCounts"===t){yield this.epsonEPOSService.cashchanger.init({ipAddress:e});const t=yield this.epsonEPOSService.cashchanger.readCounts();yield this.epsonEPOSService.cashchanger.disconnect(),console.log("counts",t),this.modal.show(m.a,{initialState:{counts:t},class:"modal-dialog-centered"})}"collectAll"!==t&&"collectPart"!==t||this.utilService.openConfirm({title:this.translate.instant("common.confirm"),body:this.translate.instant("setting.confirm.collect"),cb:()=>Ct(this,void 0,void 0,function*(){try{const n="collectAll"===t?"ALL_CASH":"PART_OF_CASH";yield this.epsonEPOSService.cashchanger.init({ipAddress:e}),yield this.epsonEPOSService.cashchanger.collect({collectType:n}),yield this.epsonEPOSService.cashchanger.disconnect()}catch(n){console.error(n),this.utilService.openAlert({title:this.translate.instant("common.error"),body:"",error:"{}"===JSON.stringify(n)?n:JSON.stringify(n)})}})})}catch(e){console.error(e),this.utilService.openAlert({title:this.translate.instant("common.error"),body:"",error:"{}"===JSON.stringify(e)?e:JSON.stringify(e)})}})}payment(){return Ct(this,void 0,void 0,function*(){try{const t=this.deviceForm.controls.payment.value;yield this.paymentService.init({ipAddress:t});const e=yield this.paymentService.exec({func:l.b.Purchase.Payment.FUNC_CODE.TERMINAL.COMMUNICATION});console.log(e),this.utilService.openAlert({title:this.translate.instant("common.complete"),body:this.translate.instant("setting.alert.connection")})}catch(t){console.error(t);const e=void 0===t.message?t:t.message;this.utilService.openAlert({title:this.translate.instant("common.error"),body:`\n                <div class="p-3 bg-light-gray select-text">\n                    <code>${e}</code>\n                </div>`})}})}signOut(){return Ct(this,void 0,void 0,function*(){try{yield this.cinerinoService.getServices(),yield this.cinerinoService.signOut()}catch(t){console.error(t)}})}reload(){location.reload()}}Ft.\u0275fac=function(t){return new(t||Ft)(h.dc(u.c),h.dc(s.b),h.dc(u.f),h.dc(u.a),h.dc(u.d),h.dc(f.d),h.dc(i.b),h.dc(u.e),h.dc(u.b),h.dc(a.b))},Ft.\u0275cmp=h.Xb({type:Ft,selectors:[["app-setting"]],decls:50,vars:34,consts:[[3,"title"],[1,"contents"],[1,"container","h-100"],[1,"row","h-100"],[1,"col-12","col-md-9","mh-100","scroll-vertical","px-0"],[1,"p-3"],[1,"border-bottom","pb-3","mb-4"],[1,"font-weight-bold","mb-3"],[3,"theaters","data","valueChanges",4,"ngIf"],[3,"data","isConnected","valueChanges","print","payment","cashchanger",4,"ngIf"],[3,"profile","language","valueChanges",4,"ngIf"],[1,"col-12","col-md-3"],[1,"row"],[1,"col-6","col-md-12","mb-3"],["type","button",1,"btn","btn-custom-primary","btn-block","py-3","py-md-2",3,"click"],[1,"row","align-items-center","justify-content-end","h-100"],[1,"col-3","col-md-2","mr-auto","mr-md-0"],["type","button","routerLink","/",1,"btn","btn-custom-secondary","btn-block","py-3","shadow-sm"],[1,"col-3","col-md-2"],["type","button",1,"text-large","btn","btn-custom-secondary","btn-block","font-weight-bold","shadow-sm","py-3",3,"routerLink"],["type","submit",1,"text-large","btn","btn-custom-primary","btn-block","font-weight-bold","shadow-sm","py-3",3,"disabled","click"],[3,"theaters","data","valueChanges"],[3,"data","isConnected","valueChanges","print","payment","cashchanger"],[3,"profile","language","valueChanges"]],template:function(t,e){1&t&&(h.jc(0,"app-header"),h.ec(1,"app-page-title",0),h.tc(2,"translate"),h.ic(),h.jc(3,"div",1),h.jc(4,"div",2),h.jc(5,"div",3),h.jc(6,"div",4),h.jc(7,"div",5),h.jc(8,"div",6),h.jc(9,"p",7),h.Sc(10),h.tc(11,"translate"),h.ic(),h.Qc(12,It,1,2,"app-input-app",8),h.ic(),h.jc(13,"div",6),h.jc(14,"p",7),h.Sc(15),h.tc(16,"translate"),h.ic(),h.Qc(17,jt,1,2,"app-input-device",9),h.ic(),h.jc(18,"div",6),h.jc(19,"p",7),h.Sc(20),h.tc(21,"translate"),h.ic(),h.Qc(22,Pt,2,4,"app-input-customer",10),h.ic(),h.ic(),h.ic(),h.jc(23,"div",11),h.jc(24,"div",5),h.jc(25,"div",12),h.jc(26,"div",13),h.jc(27,"button",14),h.qc("click",function(){return e.signOut()}),h.Sc(28),h.tc(29,"translate"),h.ic(),h.ic(),h.jc(30,"div",13),h.jc(31,"button",14),h.qc("click",function(){return e.reload()}),h.Sc(32),h.tc(33,"translate"),h.ic(),h.ic(),h.ic(),h.ic(),h.ic(),h.ic(),h.ic(),h.ic(),h.jc(34,"app-footer"),h.jc(35,"div",2),h.jc(36,"div",15),h.jc(37,"div",16),h.jc(38,"button",17),h.Sc(39),h.tc(40,"translate"),h.ic(),h.ic(),h.jc(41,"div",18),h.jc(42,"button",19),h.Sc(43),h.tc(44,"translate"),h.ic(),h.ic(),h.jc(45,"div",18),h.jc(46,"button",20),h.qc("click",function(){return e.onSubmit()}),h.tc(47,"async"),h.Sc(48),h.tc(49,"translate"),h.ic(),h.ic(),h.ic(),h.ic(),h.ic()),2&t&&(h.Qb(1),h.Ac("title",h.uc(2,14,"setting.title")),h.Qb(9),h.Uc(" ",h.uc(11,16,"setting.application.title")," "),h.Qb(2),h.zc("ngIf",null==e.inputData?null:e.inputData.app),h.Qb(3),h.Uc(" ",h.uc(16,18,"setting.device.title")," "),h.Qb(2),h.zc("ngIf",null==e.inputData?null:e.inputData.device),h.Qb(3),h.Uc(" ",h.uc(21,20,"setting.basic.title")," "),h.Qb(2),h.zc("ngIf",e.inputData),h.Qb(6),h.Uc(" ",h.uc(29,22,"setting.signOut")," "),h.Qb(4),h.Uc(" ",h.uc(33,24,"setting.reload")," "),h.Qb(7),h.Uc(" ",h.uc(40,26,"common.clear")," "),h.Qb(3),h.zc("routerLink",e.environment.BASE_URL),h.Qb(1),h.Uc(" ",h.uc(44,28,"setting.prev")," "),h.Qb(3),h.zc("disabled",h.uc(47,30,e.isLoading)),h.Qb(2),h.Uc(" ",h.uc(49,32,"setting.next")," "))},directives:[g.a,v.a,c.l,b.a,i.c,x,B,St],pipes:[f.c,c.b],styles:[""]});const Ot=[{path:"",component:r.a,children:[{path:"",component:Ft}]}];class zt{}zt.\u0275fac=function(t){return new(t||zt)},zt.\u0275mod=h.bc({type:zt}),zt.\u0275inj=h.ac({imports:[[i.d.forChild(Ot)],i.d]});class Tt{}Tt.\u0275fac=function(t){return new(t||Tt)},Tt.\u0275mod=h.bc({type:Tt}),Tt.\u0275inj=h.ac({imports:[[c.c,zt,o.a]]})}}]);