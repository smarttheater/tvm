"use strict";(self.webpackChunksmart_theater_tvm=self.webpackChunksmart_theater_tvm||[]).push([[229],{96229:function(t,e,o){o.r(e),o.d(e,{SettingModule:function(){return Pt}});var n=o(38583),r=o(27234),i=o(27515),s=o(39507),a=o(54463),l=o(88486),c=o(37608),p=o(47373),u=o(45500),d=o(88134),m=o(33018),h=o(4540),f=o(43647),g=o(42880),v=o(91628),y=o(46545),Z=o(27273),A=o(3679),x=o(49166),T=o(60207),b=o(24334);function q(t,e){if(1&t&&(m.TgZ(0,"p"),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t){const t=m.oxw(2).$implicit;m.xp6(1),m.hij(" ",m.lcZ(2,1,"form.label."+t)," ")}}function C(t,e){if(1&t&&(m.TgZ(0,"p"),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t){const t=m.oxw(2).$implicit;m.xp6(1),m.hij(" ",m.lcZ(2,1,"setting.application."+t+".label")," ")}}function I(t,e){1&t&&(m.TgZ(0,"p",11),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t&&(m.xp6(1),m.hij("",m.lcZ(2,1,"form.required")," "))}function N(t,e){if(1&t&&(m.TgZ(0,"option",15),m._uU(1),m.ALo(2,"changeLanguage"),m.qZA()),2&t){const t=e.$implicit;m.Q6J("value",t.id),m.xp6(1),m.hij(" ",m.lcZ(2,2,t.name),"")}}function J(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"select",12),m.NdJ("change",function(){return m.CHM(t),m.oxw(3).changeTheater()}),m.TgZ(1,"option",13),m._uU(2),m.ALo(3,"translate"),m.qZA(),m.YNc(4,N,3,4,"option",14),m.qZA()}if(2&t){const t=m.oxw(2).$implicit,e=m.oxw();m.Q6J("formControlName",t),m.xp6(2),m.Oqu(m.lcZ(3,3,"setting.unselected")),m.xp6(2),m.Q6J("ngForOf",e.theaters)}}function w(t,e){if(1&t&&(m.TgZ(0,"option",15),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.Q6J("value",t.id),m.xp6(1),m.Oqu(t.name)}}function P(t,e){if(1&t&&(m.TgZ(0,"select",16),m.TgZ(1,"option",13),m._uU(2),m.ALo(3,"translate"),m.qZA(),m.YNc(4,w,2,2,"option",14),m.qZA()),2&t){const t=m.oxw(2).$implicit,e=m.oxw();m.Q6J("formControlName",t),m.xp6(2),m.Oqu(m.lcZ(3,3,"setting.unselected")),m.xp6(2),m.Q6J("ngForOf",e.posList)}}function F(t,e){if(1&t&&(m.TgZ(0,"select",16),m.TgZ(1,"option",15),m._uU(2),m.ALo(3,"translate"),m.qZA(),m.TgZ(4,"option",15),m._uU(5),m.ALo(6,"translate"),m.qZA(),m.qZA()),2&t){const t=m.oxw(2).$implicit,e=m.oxw();m.Q6J("formControlName",t),m.xp6(1),m.Q6J("value",e.applicationType.Tvm),m.xp6(1),m.hij(" ",m.lcZ(3,5,"setting.application.applicationType.option.tvm")," "),m.xp6(2),m.Q6J("value",e.applicationType.Printer),m.xp6(1),m.hij(" ",m.lcZ(6,7,"setting.application.applicationType.option.printer")," ")}}function O(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"app-numeric-keypad",19),m.NdJ("change",function(e){return m.CHM(t),m.oxw(4).formGroup.controls.applicationPassword.setValue(e)}),m._UZ(1,"input",20),m.qZA()}if(2&t){const t=m.oxw(3).$implicit,e=m.oxw();m.Q6J("inputValue",e.formGroup.controls.applicationPassword.value),m.xp6(1),m.Q6J("formControlName",t)}}function L(t,e){if(1&t&&m._UZ(0,"input",21),2&t){const t=m.oxw(3).$implicit;m.Q6J("formControlName",t)}}function S(t,e){if(1&t&&(m.ynx(0),m.YNc(1,O,2,2,"app-numeric-keypad",17),m.YNc(2,L,1,1,"input",18),m.BQk()),2&t){const t=m.oxw(3);m.xp6(1),m.Q6J("ngIf",t.environment.INPUT_KEYPAD),m.xp6(1),m.Q6J("ngIf",!t.environment.INPUT_KEYPAD)}}function Q(t,e){if(1&t&&(m.TgZ(0,"div",3),m.TgZ(1,"div",4),m.TgZ(2,"div",5),m.YNc(3,q,3,3,"p",6),m.YNc(4,C,3,3,"p",6),m.YNc(5,I,3,3,"p",7),m.qZA(),m.qZA(),m.TgZ(6,"div",8),m.YNc(7,J,5,5,"select",9),m.YNc(8,P,5,5,"select",10),m.YNc(9,F,7,9,"select",10),m.YNc(10,S,3,2,"ng-container",6),m.qZA(),m.qZA()),2&t){const t=m.oxw().$implicit,e=m.oxw();m.xp6(3),m.Q6J("ngIf",!("applicationType"===t||"applicationPassword"===t)),m.xp6(1),m.Q6J("ngIf","applicationType"===t||"applicationPassword"===t),m.xp6(1),m.Q6J("ngIf",e.isRequired(t)),m.xp6(2),m.Q6J("ngIf","theaterId"===t),m.xp6(1),m.Q6J("ngIf","posId"===t),m.xp6(1),m.Q6J("ngIf","applicationType"===t),m.xp6(1),m.Q6J("ngIf","applicationPassword"===t)}}function _(t,e){if(1&t&&(m.ynx(0),m.YNc(1,Q,11,7,"div",2),m.BQk()),2&t){const t=e.$implicit,o=m.oxw();m.xp6(1),m.Q6J("ngIf",!("posId"===t&&0===o.posList.length))}}class G{constructor(t){this.formBuilder=t,this.environment=(0,c.z)(),this.applicationType=l.k.Zr.Mx.v,this.valueChanges=new m.vpe}ngOnInit(){this.posList=[],this.formGroup=this.createForm();const{theater:t,pos:e,applicationPassword:o}=this.data;void 0!==t&&(this.formGroup.controls.theaterId.setValue(t.id),this.changeTheater()),void 0!==e&&this.formGroup.controls.posId.setValue(e.id);const n=void 0===this.data.applicationType?this.applicationType.Tvm:this.data.applicationType;this.formGroup.controls.applicationType.setValue(n),void 0!==o&&this.formGroup.controls.applicationPassword.setValue(o),this.valueChanges.emit(this.formGroup),this.subscription=this.formGroup.valueChanges.subscribe(()=>{this.valueChanges.emit(this.formGroup)})}ngOnDestroy(){void 0!==this.subscription&&this.subscription.unsubscribe()}createForm(){return this.formBuilder.group({theaterId:["",[A.kI.required]],posId:[""],applicationType:[""],applicationPassword:[""]})}isRequired(t){return"theaterId"===t||void 0!==this.environment.PROFILE.find(e=>e.key===t&&e.required)}getProfileFormKeys(){return Object.keys(this.formGroup.controls)}getProfileProperty(t){return this.environment.PROFILE.find(e=>e.key===t)}getAdditionalProperty(t){return this.environment.PROFILE.find(e=>/additionalProperty/.test(e.key)&&e.key===t)}changeTheater(){this.formGroup.controls.posId.setValue("");const t=this.formGroup.controls.theaterId.value,e=this.theaters.find(e=>e.id===t);this.posList=""!==t&&void 0!==e?void 0===e.hasPOS?[]:e.hasPOS:[]}}function Y(t,e){if(1&t&&(m.TgZ(0,"option",14),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t){const t=e.$implicit;m.Q6J("value",t.connectionType),m.xp6(1),m.hij(" ",m.lcZ(2,2,t.name),"")}}function k(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"button",15),m.NdJ("click",function(){return m.CHM(t),m.oxw().print.emit()}),m._uU(1),m.ALo(2,"translate"),m.qZA()}2&t&&(m.xp6(1),m.Oqu(m.lcZ(2,1,"setting.device.printer.testPrinting")))}function U(t,e){1&t&&(m.TgZ(0,"p",18),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t&&(m.xp6(1),m.hij(" ",m.lcZ(2,1,"form.validation.required"),""))}function E(t,e){if(1&t&&(m.TgZ(0,"div",16),m.YNc(1,U,3,3,"p",17),m.qZA()),2&t){const t=m.oxw();m.xp6(1),m.Q6J("ngIf",null==t.formGroup.controls.printerIpAddress.errors?null:t.formGroup.controls.printerIpAddress.errors.required)}}function j(t,e){1&t&&(m.TgZ(0,"p",18),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t&&(m.xp6(1),m.hij(" ",m.lcZ(2,1,"form.validation.required"),""))}function $(t,e){if(1&t&&(m.TgZ(0,"div",16),m.YNc(1,j,3,3,"p",17),m.qZA()),2&t){const t=m.oxw();m.xp6(1),m.Q6J("ngIf",null==t.formGroup.controls.cashchanger.errors?null:t.formGroup.controls.cashchanger.errors.required)}}function D(t,e){1&t&&(m.TgZ(0,"p",18),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t&&(m.xp6(1),m.hij(" ",m.lcZ(2,1,"form.validation.required"),""))}function R(t,e){if(1&t&&(m.TgZ(0,"div",16),m.YNc(1,D,3,3,"p",17),m.qZA()),2&t){const t=m.oxw();m.xp6(1),m.Q6J("ngIf",null==t.formGroup.controls.payment.errors?null:t.formGroup.controls.payment.errors.required)}}G.\u0275fac=function(t){return new(t||G)(m.Y36(A.qu))},G.\u0275cmp=m.Xpm({type:G,selectors:[["app-input-app"]],inputs:{data:"data",theaters:"theaters"},outputs:{valueChanges:"valueChanges"},decls:2,vars:2,consts:[[3,"formGroup"],[4,"ngFor","ngForOf"],["class","form-group row align-items-center",4,"ngIf"],[1,"form-group","row","align-items-center"],[1,"col-4","py-2","text-right"],[1,"d-inline-flex","align-items-center"],[4,"ngIf"],["class","badge badge-danger ml-2",4,"ngIf"],[1,"col-8"],["class","form-control",3,"formControlName","change",4,"ngIf"],["class","form-control",3,"formControlName",4,"ngIf"],[1,"badge","badge-danger","ml-2"],[1,"form-control",3,"formControlName","change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"form-control",3,"formControlName"],["inputType","string",3,"inputValue","change",4,"ngIf"],["type","password","class","form-control",3,"formControlName",4,"ngIf"],["inputType","string",3,"inputValue","change"],["type","password","readonly","",1,"form-control",3,"formControlName"],["type","password",1,"form-control",3,"formControlName"]],template:function(t,e){1&t&&(m.TgZ(0,"form",0),m.YNc(1,_,2,1,"ng-container",1),m.qZA()),2&t&&(m.Q6J("formGroup",e.formGroup),m.xp6(1),m.Q6J("ngForOf",e.getProfileFormKeys()))},directives:[A._Y,A.JL,A.sg,n.sg,n.O5,A.EJ,A.JJ,A.u,x.mh,A.YN,A.Kr,T.y,A.Fj],pipes:[h.X$,b.i],styles:[""]});class V{constructor(t,e){this.formBuilder=t,this.translate=e,this.environment=(0,c.z)(),this.connectionType=l.k.Zr.FB.R,this.printers=l.k.Zr.FB.G,this.valueChanges=new m.vpe,this.print=new m.vpe,this.payment=new m.vpe,this.cashchanger=new m.vpe}ngOnInit(){this.formGroup=this.createForm();const{printerType:t,printerIpAddress:e,cashchanger:o,payment:n}=this.data;void 0!==t&&(this.formGroup.controls.printerType.setValue(t),this.formGroup.controls.printerIpAddress.setValue(e)),void 0!==o&&this.formGroup.controls.cashchanger.setValue(o),void 0!==n&&this.formGroup.controls.payment.setValue(n),this.valueChanges.emit(this.formGroup),this.subscription=this.formGroup.valueChanges.subscribe(()=>{this.valueChanges.emit(this.formGroup)})}ngOnDestroy(){void 0!==this.subscription&&this.subscription.unsubscribe()}createForm(){return this.formBuilder.group({printerType:[l.k.Zr.FB.R.None],printerIpAddress:[""],cashchanger:[""],payment:[""]})}isRequired(t){return void 0!==this.environment.PROFILE.find(e=>e.key===t&&e.required)}getProfileFormKeys(){return Object.keys(this.formGroup.controls)}getProfileProperty(t){return this.environment.PROFILE.find(e=>e.key===t)}getAdditionalProperty(t){return this.environment.PROFILE.find(e=>/additionalProperty/.test(e.key)&&e.key===t)}changePrinterType(){this.formGroup.controls.printerType.value===l.k.Zr.FB.R.StarBluetooth&&this.formGroup.controls.printerIpAddress.setValue(this.translate.instant("setting.starBluetoothAddress"))}}V.\u0275fac=function(t){return new(t||V)(m.Y36(A.qu),m.Y36(h.sK))},V.\u0275cmp=m.Xpm({type:V,selectors:[["app-input-device"]],inputs:{data:"data",isConnected:"isConnected"},outputs:{valueChanges:"valueChanges",print:"print",payment:"payment",cashchanger:"cashchanger"},decls:52,vars:48,consts:[[3,"formGroup"],[1,"form-group","row"],[1,"col-4","text-right","py-3"],[1,"col-8"],["formControlName","printerType",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],["type","button","class","btn btn-sm btn-custom-primary py-2 mt-2",3,"click",4,"ngIf"],["type","text","formControlName","printerIpAddress","placeholder","0.0.0.0",1,"form-control"],["class","mt-2",4,"ngIf"],[1,"text-small","mt-2",3,"innerHtml"],["type","text","formControlName","cashchanger","placeholder","0.0.0.0",1,"form-control"],["type","button",1,"btn","btn-custom-primary","mt-2","mr-2",3,"disabled","click"],["type","button",1,"btn","btn-custom-primary","mt-2",3,"disabled","click"],["type","text","formControlName","payment","placeholder","0.0.0.0",1,"form-control"],[3,"value"],["type","button",1,"btn","btn-sm","btn-custom-primary","py-2","mt-2",3,"click"],[1,"mt-2"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(t,e){1&t&&(m.TgZ(0,"form",0),m.TgZ(1,"div",1),m.TgZ(2,"p",2),m._uU(3),m.ALo(4,"translate"),m.qZA(),m.TgZ(5,"div",3),m.TgZ(6,"select",4),m.NdJ("change",function(){return e.changePrinterType()}),m.YNc(7,Y,3,4,"option",5),m.qZA(),m.YNc(8,k,3,3,"button",6),m.qZA(),m.qZA(),m.TgZ(9,"div",1),m.TgZ(10,"p",2),m._uU(11),m.ALo(12,"translate"),m.qZA(),m.TgZ(13,"div",3),m._UZ(14,"input",7),m.YNc(15,E,2,1,"div",8),m._UZ(16,"p",9),m.ALo(17,"translate"),m.qZA(),m.qZA(),m.TgZ(18,"div",1),m.TgZ(19,"p",2),m._uU(20),m.ALo(21,"translate"),m.qZA(),m.TgZ(22,"div",3),m._UZ(23,"input",10),m._UZ(24,"p",9),m.ALo(25,"translate"),m.YNc(26,$,2,1,"div",8),m.TgZ(27,"button",11),m.NdJ("click",function(){return e.cashchanger.emit("connect")}),m._uU(28),m.ALo(29,"translate"),m.qZA(),m.TgZ(30,"button",11),m.NdJ("click",function(){return e.cashchanger.emit("endDeposit")}),m._uU(31),m.ALo(32,"translate"),m.qZA(),m.TgZ(33,"button",11),m.NdJ("click",function(){return e.cashchanger.emit("readCounts")}),m._uU(34),m.ALo(35,"translate"),m.qZA(),m.TgZ(36,"button",11),m.NdJ("click",function(){return e.cashchanger.emit("collectAll")}),m._uU(37),m.ALo(38,"translate"),m.qZA(),m.TgZ(39,"button",12),m.NdJ("click",function(){return e.cashchanger.emit("collectPart")}),m._uU(40),m.ALo(41,"translate"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(42,"div",1),m.TgZ(43,"p",2),m._uU(44),m.ALo(45,"translate"),m.qZA(),m.TgZ(46,"div",3),m._UZ(47,"input",13),m.YNc(48,R,2,1,"div",8),m.TgZ(49,"button",12),m.NdJ("click",function(){return e.payment.emit()}),m._uU(50),m.ALo(51,"translate"),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&t&&(m.Q6J("formGroup",e.formGroup),m.xp6(3),m.Oqu(m.lcZ(4,24,"setting.device.printer.label")),m.xp6(4),m.Q6J("ngForOf",e.printers),m.xp6(1),m.Q6J("ngIf",e.formGroup.controls.printerType.value&&e.formGroup.controls.printerType.value!==e.connectionType.None),m.xp6(3),m.Oqu(m.lcZ(12,26,"setting.device.printer.ipAddress")),m.xp6(4),m.Q6J("ngIf",e.formGroup.controls.printerIpAddress.invalid&&e.formGroup.controls.printerIpAddress.touched),m.xp6(1),m.Q6J("innerHtml",m.lcZ(17,28,"setting.device.printer.ipAddressDescription"),m.oJD),m.xp6(4),m.Oqu(m.lcZ(21,30,"setting.device.cashchanger.label")),m.xp6(4),m.Q6J("innerHtml",m.lcZ(25,32,"setting.device.cashchanger.description"),m.oJD),m.xp6(2),m.Q6J("ngIf",e.formGroup.controls.cashchanger.invalid&&e.formGroup.controls.cashchanger.touched),m.xp6(1),m.Q6J("disabled",e.isConnected),m.xp6(1),m.Oqu(m.lcZ(29,34,"setting.device.connect")),m.xp6(2),m.Q6J("disabled",e.isConnected),m.xp6(1),m.Oqu(m.lcZ(32,36,"setting.device.endDeposit")),m.xp6(2),m.Q6J("disabled",e.isConnected),m.xp6(1),m.Oqu(m.lcZ(35,38,"setting.device.readCounts")),m.xp6(2),m.Q6J("disabled",e.isConnected),m.xp6(1),m.Oqu(m.lcZ(38,40,"setting.device.collectAll")),m.xp6(2),m.Q6J("disabled",e.isConnected),m.xp6(1),m.Oqu(m.lcZ(41,42,"setting.device.collectPart")),m.xp6(4),m.Oqu(m.lcZ(45,44,"setting.device.payment.label")),m.xp6(4),m.Q6J("ngIf",e.formGroup.controls.payment.invalid&&e.formGroup.controls.payment.touched),m.xp6(1),m.Q6J("disabled",e.isConnected),m.xp6(1),m.Oqu(m.lcZ(51,46,"setting.device.connect")))},directives:[A._Y,A.JL,A.sg,A.EJ,A.JJ,A.u,x.mh,n.sg,n.O5,A.Fj,A.YN,A.Kr],pipes:[h.X$],styles:[""]});o(67757);var M=o(48768);class B{transform(t,e,o){e=void 0===e?"JP":e,o=void 0===o?"National":o;const n=M.Qc(t);return"JP"!==n.country?t:M.WU(n,o).replace(/\-/g,"")}}B.\u0275fac=function(t){return new(t||B)},B.\u0275pipe=m.Yjl({name:"libphonenumberFormat",type:B,pure:!0});const H=["intlTelInput"];function K(t,e){if(1&t&&(m.TgZ(0,"p"),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t){const t=m.oxw().$implicit;m.xp6(1),m.Oqu(m.lcZ(2,1,"form.label."+t))}}function X(t,e){if(1&t&&(m.TgZ(0,"p"),m._uU(1),m.ALo(2,"changeLanguage"),m.qZA()),2&t){const t=m.oxw().$implicit,e=m.oxw();let o;m.xp6(1),m.hij(" ",m.lcZ(2,1,null==(o=e.getAdditionalProperty(t))?null:o.label),"")}}function z(t,e){1&t&&(m.TgZ(0,"p",15),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t&&(m.xp6(1),m.hij("",m.lcZ(2,1,"form.required")," "))}function W(t,e){if(1&t&&(m._UZ(0,"input",16),m.ALo(1,"translate")),2&t){const t=m.oxw().$implicit;m.Q6J("formControlName",t)("id",t)("placeholder",m.lcZ(1,3,"form.placeholder."+t))}}function tt(t,e){if(1&t&&(m._UZ(0,"input",17),m.ALo(1,"translate")),2&t){const t=m.oxw().$implicit;m.Q6J("formControlName",t)("id",t)("placeholder",m.lcZ(1,3,"form.placeholder."+t))}}const et=function(t){return[t]},ot=function(t,e){return[t,e]};function nt(t,e){if(1&t&&m._UZ(0,"ngx-intl-tel-input",18,19),2&t){const t=m.oxw(2);m.Q6J("preferredCountries",m.VKq(10,et,t.CountryISO.Japan))("enableAutoCountrySelect",!1)("enablePlaceholder",!0)("searchCountryFlag",!0)("searchCountryField",m.WLB(12,ot,t.SearchCountryField.Iso2,t.SearchCountryField.Name))("selectFirstCountry",!1)("selectedCountryISO",t.CountryISO.Japan)("maxLength",15)("phoneValidation",!0)("separateDialCode",!1)}}function rt(t,e){if(1&t&&(m.TgZ(0,"option",22),m._uU(1),m.ALo(2,"changeLanguage"),m.qZA()),2&t){const t=e.$implicit;m.Q6J("value",t.value),m.xp6(1),m.hij(" ",m.lcZ(2,2,t.label)," ")}}function it(t,e){if(1&t&&(m.TgZ(0,"select",20),m.YNc(1,rt,3,4,"option",21),m.qZA()),2&t){const t=m.oxw().$implicit,e=m.oxw();let o;m.Q6J("formControlName",t)("id",t),m.xp6(1),m.Q6J("ngForOf",null==(o=e.getProfileProperty(t))?null:o.option)}}function st(t,e){if(1&t&&m._UZ(0,"input",23),2&t){const t=m.oxw().$implicit;m.Q6J("formControlName",t)("id",t)}}function at(t,e){if(1&t&&m._UZ(0,"textarea",24),2&t){const t=m.oxw().$implicit;m.Q6J("formControlName",t)("id",t)}}function lt(t,e){if(1&t&&(m.TgZ(0,"option",22),m._uU(1),m.ALo(2,"changeLanguage"),m.qZA()),2&t){const t=e.$implicit;m.Q6J("value",t.value),m.xp6(1),m.hij(" ",m.lcZ(2,2,t.label)," ")}}function ct(t,e){if(1&t&&(m.TgZ(0,"select",24),m.YNc(1,lt,3,4,"option",21),m.qZA()),2&t){const t=m.oxw().$implicit,e=m.oxw();let o;m.Q6J("formControlName",t)("id",t),m.xp6(1),m.Q6J("ngForOf",null==(o=e.getAdditionalProperty(t))?null:o.option)}}function pt(t,e){1&t&&(m.TgZ(0,"p",27),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t&&(m.xp6(1),m.hij(" ",m.lcZ(2,1,"form.validation.required")," "))}const ut=function(t){return{value:t}};function dt(t,e){if(1&t&&(m.TgZ(0,"p",27),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t){const t=m.oxw(2).$implicit,e=m.oxw();m.xp6(1),m.hij(" ",m.xi3(2,1,"form.validation.maxlength",m.VKq(4,ut,null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.maxlength.requiredLength))," ")}}function mt(t,e){if(1&t&&(m.TgZ(0,"p",27),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t){const t=m.oxw(2).$implicit,e=m.oxw();m.xp6(1),m.hij(" ",m.xi3(2,1,"form.validation.minlength",m.VKq(4,ut,null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.minlength.requiredLength))," ")}}function ht(t,e){1&t&&(m.TgZ(0,"p",27),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t&&(m.xp6(1),m.hij(" ",m.lcZ(2,1,"form.validation.email")," "))}function ft(t,e){1&t&&(m.TgZ(0,"p",27),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t&&(m.xp6(1),m.hij(" ",m.lcZ(2,1,"form.validation.telephone")," "))}function gt(t,e){1&t&&(m.TgZ(0,"p",27),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t&&(m.xp6(1),m.hij(" ",m.lcZ(2,1,"form.validation.fullKana"),""))}function vt(t,e){1&t&&(m.TgZ(0,"p",27),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t&&(m.xp6(1),m.hij(" ",m.lcZ(2,1,"form.validation.lowercaseLetters"),""))}function yt(t,e){if(1&t&&(m.TgZ(0,"div"),m.YNc(1,gt,3,3,"p",26),m.YNc(2,vt,3,3,"p",26),m.qZA()),2&t){const t=m.oxw(2).$implicit,e=m.oxw();m.xp6(1),m.Q6J("ngIf","ja"===e.language&&(null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.customPattern)),m.xp6(1),m.Q6J("ngIf","ja"!==e.language&&(null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.customPattern))}}function Zt(t,e){1&t&&(m.TgZ(0,"p",27),m._uU(1),m.ALo(2,"translate"),m.qZA()),2&t&&(m.xp6(1),m.hij(" ",m.lcZ(2,1,"form.validation.pattern")," "))}function At(t,e){if(1&t&&(m.TgZ(0,"div",25),m.YNc(1,pt,3,3,"p",26),m.YNc(2,dt,3,6,"p",26),m.YNc(3,mt,3,6,"p",26),m.YNc(4,ht,3,3,"p",26),m.YNc(5,ft,3,3,"p",26),m.YNc(6,yt,3,2,"div",5),m.YNc(7,Zt,3,3,"p",26),m.qZA()),2&t){const t=m.oxw().$implicit,e=m.oxw();m.xp6(1),m.Q6J("ngIf",null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.required),m.xp6(1),m.Q6J("ngIf",null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.maxlength),m.xp6(1),m.Q6J("ngIf",null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.minlength),m.xp6(1),m.Q6J("ngIf",null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.email),m.xp6(1),m.Q6J("ngIf",null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.validatePhoneNumber),m.xp6(1),m.Q6J("ngIf","familyName"===t||"givenName"===t),m.xp6(1),m.Q6J("ngIf",null==e.formGroup.controls[t].errors?null:e.formGroup.controls[t].errors.pattern)}}function xt(t,e){if(1&t&&(m.TgZ(0,"div",2),m.TgZ(1,"div",3),m.TgZ(2,"div",4),m.YNc(3,K,3,3,"p",5),m.YNc(4,X,3,3,"p",5),m.YNc(5,z,3,3,"p",6),m.qZA(),m.qZA(),m.TgZ(6,"div",7),m.YNc(7,W,2,5,"input",8),m.YNc(8,tt,2,5,"input",9),m.YNc(9,nt,2,15,"ngx-intl-tel-input",10),m.YNc(10,it,2,3,"select",11),m.YNc(11,st,1,2,"input",12),m.YNc(12,at,1,2,"textarea",13),m.YNc(13,ct,2,3,"select",13),m.YNc(14,At,8,7,"div",14),m.qZA(),m.qZA()),2&t){const t=e.$implicit,o=m.oxw();let n,r,i;m.xp6(3),m.Q6J("ngIf",!o.getAdditionalProperty(t)),m.xp6(1),m.Q6J("ngIf",o.getAdditionalProperty(t)),m.xp6(1),m.Q6J("ngIf",o.isRequired(t)),m.xp6(2),m.Q6J("ngIf","email"!==t&&"telephone"!==t&&"gender"!==t&&!o.getAdditionalProperty(t)),m.xp6(1),m.Q6J("ngIf","email"===t),m.xp6(1),m.Q6J("ngIf","telephone"===t),m.xp6(1),m.Q6J("ngIf","gender"===t),m.xp6(1),m.Q6J("ngIf",o.getAdditionalProperty(t)&&"input"===(null==(n=o.getAdditionalProperty(t))?null:n.inputType)),m.xp6(1),m.Q6J("ngIf",o.getAdditionalProperty(t)&&"textarea"===(null==(r=o.getAdditionalProperty(t))?null:r.inputType)),m.xp6(1),m.Q6J("ngIf",o.getAdditionalProperty(t)&&"select"===(null==(i=o.getAdditionalProperty(t))?null:i.inputType)),m.xp6(1),m.Q6J("ngIf",o.formGroup.controls[t].invalid&&o.formGroup.controls[t].touched)}}class Tt{constructor(t,e){this.translate=t,this.formBuilder=e,this.environment=(0,c.z)(),this.SearchCountryField=x.wX,this.CountryISO=x.HT,this.valueChanges=new m.vpe}ngOnInit(){this.formGroup=this.createForm(),this.valueChanges.emit(this.formGroup),this.subscription=this.formGroup.valueChanges.subscribe(()=>{this.valueChanges.emit(this.formGroup)}),setTimeout(()=>{if(void 0===this.intlTelInput)return;const t=this.intlTelInput.allCountries.find(t=>t.iso2===x.HT.Japan);void 0!==t&&(t.placeHolder=this.translate.instant("form.placeholder.telephone"))},0)}ngOnDestroy(){void 0!==this.subscription&&this.subscription.unsubscribe()}createForm(){const t=this.environment.PROFILE,e=this.formBuilder.group({});if(t.forEach(t=>{const o=[];void 0!==t.required&&t.required&&o.push(A.kI.required),void 0!==t.maxLength&&o.push(A.kI.maxLength(t.maxLength)),void 0!==t.minLength&&o.push(A.kI.minLength(t.minLength)),void 0!==t.pattern&&o.push(A.kI.pattern(t.pattern)),("familyName"===t.key||"givenName"===t.key)&&o.push(e=>{const o=e.root.get(t.key),n=document.documentElement.lang;if(null!==o){if(""===o.value)return null;if("ja"===n&&!new RegExp(/^[\u30a1-\u30f6\u30fc]+$/).test(o.value))return{customPattern:!0};if("ja"!==n&&!new RegExp(/^[a-z]+$/).test(o.value))return{customPattern:!0}}return null}),"email"===t.key&&o.push(A.kI.email),e.addControl(t.key,new A.NI(t.value,o))}),void 0===this.profile)return e;Object.keys(this.profile).forEach(t=>{const o=this.profile[t];if(void 0!==o&&void 0!==e.controls[t]){if("telephone"===t)return void e.controls.telephone.setValue((new B).transform(o));e.controls[t].setValue(o)}});const o=this.profile.additionalProperty;return void 0!==o&&o.forEach(t=>{const o=`additionalProperty.${t.name}`,n=t.value;void 0===n||void 0===e.controls[o]||e.controls[o].setValue(n)}),e}isRequired(t){return void 0!==this.environment.PROFILE.find(e=>e.key===t&&e.required)}getProfileFormKeys(){return Object.keys(this.formGroup.controls)}getProfileProperty(t){return this.environment.PROFILE.find(e=>e.key===t)}getAdditionalProperty(t){return this.environment.PROFILE.find(e=>/additionalProperty/.test(e.key)&&e.key===t)}copyDomain(){const t=this.translate.instant("email.domain"),e=document.createElement("textarea");e.value=t,e.selectionStart=0,e.selectionEnd=e.value.length,document.body.appendChild(e),e.focus(),document.execCommand("copy"),e.blur(),document.body.removeChild(e)}}Tt.\u0275fac=function(t){return new(t||Tt)(m.Y36(h.sK),m.Y36(A.qu))},Tt.\u0275cmp=m.Xpm({type:Tt,selectors:[["app-input-customer"]],viewQuery:function(t,e){if(1&t&&m.Gf(H,5),2&t){let t;m.iGM(t=m.CRH())&&(e.intlTelInput=t.first)}},inputs:{profile:"profile",language:"language"},outputs:{valueChanges:"valueChanges"},decls:2,vars:2,consts:[[3,"formGroup"],["class","form-group row align-items-center",4,"ngFor","ngForOf"],[1,"form-group","row","align-items-center"],[1,"col-4","py-2","text-right"],[1,"d-inline-flex","align-items-center"],[4,"ngIf"],["class","badge badge-danger ml-2",4,"ngIf"],[1,"col-8"],["type","text","class","form-control",3,"formControlName","id","placeholder",4,"ngIf"],["type","email","class","form-control",3,"formControlName","id","placeholder",4,"ngIf"],["inputId","telephone","name","telephone","formControlName","telephone",3,"preferredCountries","enableAutoCountrySelect","enablePlaceholder","searchCountryFlag","searchCountryField","selectFirstCountry","selectedCountryISO","maxLength","phoneValidation","separateDialCode",4,"ngIf"],["class","form-control",3,"formControlName","id",4,"ngIf"],["type","text","class","form-control","placeholder","",3,"formControlName","id",4,"ngIf"],["class","form-control","placeholder","",3,"formControlName","id",4,"ngIf"],["class","mt-2",4,"ngIf"],[1,"badge","badge-danger","ml-2"],["type","text",1,"form-control",3,"formControlName","id","placeholder"],["type","email",1,"form-control",3,"formControlName","id","placeholder"],["inputId","telephone","name","telephone","formControlName","telephone",3,"preferredCountries","enableAutoCountrySelect","enablePlaceholder","searchCountryFlag","searchCountryField","selectFirstCountry","selectedCountryISO","maxLength","phoneValidation","separateDialCode"],["intlTelInput",""],[1,"form-control",3,"formControlName","id"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","text","placeholder","",1,"form-control",3,"formControlName","id"],["placeholder","",1,"form-control",3,"formControlName","id"],[1,"mt-2"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(t,e){1&t&&(m.TgZ(0,"form",0),m.YNc(1,xt,15,11,"div",1),m.qZA()),2&t&&(m.Q6J("formGroup",e.formGroup),m.xp6(1),m.Q6J("ngForOf",e.getProfileFormKeys()))},directives:[A._Y,A.JL,A.sg,n.sg,n.O5,A.Fj,A.JJ,A.u,x.mh,x.FV,A.EJ,A.YN,A.Kr],pipes:[h.X$,b.i],styles:["input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], ngx-intl-tel-input[_ngcontent-%COMP%]{display:block}textarea[_ngcontent-%COMP%]{min-height:5rem}.form-group[_ngcontent-%COMP%]:last-child{margin-bottom:0!important}"]});var bt=function(t,e,o,n){return new(o||(o=Promise))(function(r,i){function s(t){try{l(n.next(t))}catch(e){i(e)}}function a(t){try{l(n.throw(t))}catch(e){i(e)}}function l(t){t.done?r(t.value):function(t){return t instanceof o?t:new o(function(e){e(t)})}(t.value).then(s,a)}l((n=n.apply(t,e||[])).next())})};function qt(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"app-input-app",21),m.NdJ("valueChanges",function(e){m.CHM(t);return m.oxw().appForm=e}),m.qZA()}if(2&t){const t=m.oxw();m.Q6J("theaters",t.theaters)("data",null==t.inputData?null:t.inputData.app)}}function Ct(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"app-input-device",22),m.NdJ("valueChanges",function(e){m.CHM(t);return m.oxw().deviceForm=e})("print",function(){return m.CHM(t),m.oxw().print()})("payment",function(){return m.CHM(t),m.oxw().payment()})("cashchanger",function(e){return m.CHM(t),m.oxw().cashchanger(e)}),m.qZA()}if(2&t){const t=m.oxw();m.Q6J("data",null==t.inputData?null:t.inputData.device)("isConnected",t.epsonEPOSService.cashchanger.isConnected())}}function It(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"app-input-customer",23),m.NdJ("valueChanges",function(e){m.CHM(t);return m.oxw().profileForm=e}),m.ALo(1,"async"),m.qZA()}if(2&t){const t=m.oxw();let e;m.Q6J("profile",t.inputData.profile)("language",null==(e=m.lcZ(1,2,t.user))?null:e.language)}}class Nt{constructor(t,e,o,n,r,i,s,a,l){this.epsonEPOSService=t,this.store=e,this.utilService=o,this.actionService=n,this.translate=r,this.router=i,this.paymentService=s,this.cinerinoService=a,this.modal=l,this.environment=(0,c.z)()}ngOnInit(){return bt(this,void 0,void 0,function*(){this.user=this.store.pipe((0,a.Ys)(u.PR)),this.error=this.store.pipe((0,a.Ys)(u.by)),this.isLoading=this.store.pipe((0,a.Ys)(u.Kv)),this.posList=[],this.theaters=[];try{this.theaters=yield this.actionService.place.searchMovieTheaters();const{theater:t,pos:e,applicationType:o,applicationPassword:n,printer:r,cashchanger:i,payment:s,customerContact:a}=yield this.actionService.user.getData();this.inputData={app:{theater:t,pos:e,applicationType:o,applicationPassword:n},device:{printerType:null==r?void 0:r.connectionType,printerIpAddress:null==r?void 0:r.ipAddress,cashchanger:i,payment:s},profile:a}}catch(t){console.error(t),this.router.navigate(["/error"])}try{const{cashchanger:t}=yield this.actionService.user.getData();void 0!==t&&(yield this.epsonEPOSService.cashchanger.init({ipAddress:t}),yield this.epsonEPOSService.cashchanger.endDeposit({endDepositType:"DEPOSIT_REPAY"}),yield this.epsonEPOSService.cashchanger.disconnect())}catch(t){console.error(t)}})}onSubmit(){return bt(this,void 0,void 0,function*(){if(Object.keys(this.appForm.controls).forEach(t=>{this.appForm.controls[t].markAsTouched()}),Object.keys(this.deviceForm.controls).forEach(t=>{this.deviceForm.controls[t].markAsTouched()}),Object.keys(this.profileForm.controls).forEach(t=>{this.profileForm.controls[t].markAsTouched()}),this.appForm.invalid||this.deviceForm.invalid||this.profileForm.invalid)this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("setting.alert.validation")});else try{const t=this.appForm.controls.theaterId.value,e=this.appForm.controls.posId.value,o=this.theaters.find(e=>e.id===t);if(void 0===o)throw new Error("theater not found");const n=void 0===o.hasPOS?o.hasPOS:o.hasPOS.find(t=>t.id===e);this.actionService.user.updateAll({pos:n,theater:o,profile:{familyName:void 0===this.profileForm.controls.familyName?void 0:this.profileForm.controls.familyName.value,givenName:void 0===this.profileForm.controls.givenName?void 0:this.profileForm.controls.givenName.value,email:void 0===this.profileForm.controls.email?void 0:this.profileForm.controls.email.value,telephone:void 0===this.profileForm.controls.telephone?void 0:this.profileForm.controls.telephone.value.e164Number,age:void 0===this.profileForm.controls.age?void 0:this.profileForm.controls.age.value,address:void 0===this.profileForm.controls.address?void 0:this.profileForm.controls.address.value,gender:void 0===this.profileForm.controls.gender?void 0:this.profileForm.controls.gender.value},printer:{ipAddress:this.deviceForm.controls.printerIpAddress.value,connectionType:this.deviceForm.controls.printerType.value},cashchanger:void 0===this.deviceForm.controls.cashchanger.value?void 0:this.deviceForm.controls.cashchanger.value,payment:void 0===this.deviceForm.controls.payment.value?void 0:this.deviceForm.controls.payment.value,applicationType:this.appForm.controls.applicationType.value,applicationPassword:this.appForm.controls.applicationPassword.value}),this.utilService.openAlert({title:this.translate.instant("common.complete"),body:this.translate.instant("setting.alert.success")})}catch(t){console.error(t)}})}print(){return bt(this,void 0,void 0,function*(){const t={connectionType:this.deviceForm.controls.printerType.value,ipAddress:this.deviceForm.controls.printerIpAddress.value};try{yield this.actionService.order.print({orders:[],printer:t})}catch(e){console.error(e),this.utilService.openAlert({title:this.translate.instant("common.error"),body:`\n                <p class="mb-4">${this.translate.instant("setting.alert.print")}</p>\n                    <div class="p-3 bg-light-gray select-text">\n                    <code>${"{}"===JSON.stringify(e)?e:JSON.stringify(e)}</code>\n                </div>`})}})}cashchanger(t){return bt(this,void 0,void 0,function*(){try{const e=this.deviceForm.controls.cashchanger.value;if("connect"===t&&(yield this.epsonEPOSService.cashchanger.init({ipAddress:e}),yield this.epsonEPOSService.cashchanger.disconnect(),this.utilService.openAlert({title:this.translate.instant("common.complete"),body:this.translate.instant("setting.alert.connection")})),"endDeposit"===t&&(yield this.epsonEPOSService.cashchanger.init({ipAddress:e}),yield this.epsonEPOSService.cashchanger.endDeposit({endDepositType:"DEPOSIT_REPAY"}),yield this.epsonEPOSService.cashchanger.disconnect()),"readCounts"===t){yield this.epsonEPOSService.cashchanger.init({ipAddress:e});const t=yield this.epsonEPOSService.cashchanger.readCounts();yield this.epsonEPOSService.cashchanger.disconnect(),console.log("counts",t),this.modal.show(d.f,{initialState:{counts:t},class:"modal-dialog-centered"})}("collectAll"===t||"collectPart"===t)&&this.utilService.openConfirm({title:this.translate.instant("common.confirm"),body:this.translate.instant("setting.confirm.collect"),cb:()=>bt(this,void 0,void 0,function*(){try{const o="collectAll"===t?"ALL_CASH":"PART_OF_CASH";yield this.epsonEPOSService.cashchanger.init({ipAddress:e}),yield this.epsonEPOSService.cashchanger.collect({collectType:o}),yield this.epsonEPOSService.cashchanger.disconnect()}catch(o){console.error(o),this.utilService.openAlert({title:this.translate.instant("common.error"),body:"",error:"{}"===JSON.stringify(o)?o:JSON.stringify(o)})}})})}catch(e){console.error(e),this.utilService.openAlert({title:this.translate.instant("common.error"),body:"",error:"{}"===JSON.stringify(e)?e:JSON.stringify(e)})}})}payment(){return bt(this,void 0,void 0,function*(){try{const t=this.deviceForm.controls.payment.value;yield this.paymentService.init({ipAddress:t});const e=yield this.paymentService.exec({func:l.k.Bu.F6.sk.TERMINAL.COMMUNICATION});console.log(e),this.utilService.openAlert({title:this.translate.instant("common.complete"),body:this.translate.instant("setting.alert.connection")})}catch(t){console.error(t);const e=void 0===t.message?t:t.message;this.utilService.openAlert({title:this.translate.instant("common.error"),body:`\n                <div class="p-3 bg-light-gray select-text">\n                    <code>${e}</code>\n                </div>`})}})}signOut(){return bt(this,void 0,void 0,function*(){try{yield this.cinerinoService.getServices(),yield this.cinerinoService.signOut()}catch(t){console.error(t)}})}reload(){location.reload()}}Nt.\u0275fac=function(t){return new(t||Nt)(m.Y36(p.ug),m.Y36(a.yh),m.Y36(p.fK),m.Y36(p.cw),m.Y36(h.sK),m.Y36(i.F0),m.Y36(p.te),m.Y36(p.y8),m.Y36(f.tT))},Nt.\u0275cmp=m.Xpm({type:Nt,selectors:[["app-setting"]],decls:51,vars:34,consts:[[3,"title"],[1,"contents"],[1,"container","h-100"],[1,"row","h-100"],[1,"col-12","col-md-9","mh-100","px-0"],[1,"p-3"],[1,"border-bottom","pb-3","mb-4"],[1,"font-weight-bold","mb-3"],[3,"theaters","data","valueChanges",4,"ngIf"],[3,"data","isConnected","valueChanges","print","payment","cashchanger",4,"ngIf"],[3,"profile","language","valueChanges",4,"ngIf"],[1,"col-12","col-md-3"],[1,"row"],[1,"col-6","col-md-12","mb-3"],["type","button",1,"btn","btn-custom-primary","btn-block","py-3","py-md-2",3,"click"],[1,"row","align-items-center","justify-content-end","h-100"],[1,"col-3","col-md-2","mr-auto","mr-md-0"],["type","button","routerLink","/",1,"btn","btn-custom-secondary","btn-block","py-3","shadow-sm"],[1,"col-3","col-md-2"],["type","button",1,"text-large","btn","btn-custom-secondary","btn-block","font-weight-bold","shadow-sm","py-3",3,"routerLink"],["type","submit",1,"text-large","btn","btn-custom-primary","btn-block","font-weight-bold","shadow-sm","py-3",3,"disabled","click"],[3,"theaters","data","valueChanges"],[3,"data","isConnected","valueChanges","print","payment","cashchanger"],[3,"profile","language","valueChanges"]],template:function(t,e){1&t&&(m.TgZ(0,"app-header"),m._UZ(1,"app-page-title",0),m.ALo(2,"translate"),m.qZA(),m.TgZ(3,"div",1),m.TgZ(4,"div",2),m.TgZ(5,"div",3),m.TgZ(6,"div",4),m.TgZ(7,"app-scroll-vertical"),m.TgZ(8,"div",5),m.TgZ(9,"div",6),m.TgZ(10,"p",7),m._uU(11),m.ALo(12,"translate"),m.qZA(),m.YNc(13,qt,1,2,"app-input-app",8),m.qZA(),m.TgZ(14,"div",6),m.TgZ(15,"p",7),m._uU(16),m.ALo(17,"translate"),m.qZA(),m.YNc(18,Ct,1,2,"app-input-device",9),m.qZA(),m.TgZ(19,"div",6),m.TgZ(20,"p",7),m._uU(21),m.ALo(22,"translate"),m.qZA(),m.YNc(23,It,2,4,"app-input-customer",10),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(24,"div",11),m.TgZ(25,"div",5),m.TgZ(26,"div",12),m.TgZ(27,"div",13),m.TgZ(28,"button",14),m.NdJ("click",function(){return e.signOut()}),m._uU(29),m.ALo(30,"translate"),m.qZA(),m.qZA(),m.TgZ(31,"div",13),m.TgZ(32,"button",14),m.NdJ("click",function(){return e.reload()}),m._uU(33),m.ALo(34,"translate"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(35,"app-footer"),m.TgZ(36,"div",2),m.TgZ(37,"div",15),m.TgZ(38,"div",16),m.TgZ(39,"button",17),m._uU(40),m.ALo(41,"translate"),m.qZA(),m.qZA(),m.TgZ(42,"div",18),m.TgZ(43,"button",19),m._uU(44),m.ALo(45,"translate"),m.qZA(),m.qZA(),m.TgZ(46,"div",18),m.TgZ(47,"button",20),m.NdJ("click",function(){return e.onSubmit()}),m.ALo(48,"async"),m._uU(49),m.ALo(50,"translate"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&t&&(m.xp6(1),m.s9C("title",m.lcZ(2,14,"setting.title")),m.xp6(10),m.hij(" ",m.lcZ(12,16,"setting.application.title")," "),m.xp6(2),m.Q6J("ngIf",null==e.inputData?null:e.inputData.app),m.xp6(3),m.hij(" ",m.lcZ(17,18,"setting.device.title")," "),m.xp6(2),m.Q6J("ngIf",null==e.inputData?null:e.inputData.device),m.xp6(3),m.hij(" ",m.lcZ(22,20,"setting.basic.title")," "),m.xp6(2),m.Q6J("ngIf",e.inputData),m.xp6(6),m.hij(" ",m.lcZ(30,22,"setting.signOut")," "),m.xp6(4),m.hij(" ",m.lcZ(34,24,"setting.reload")," "),m.xp6(7),m.hij(" ",m.lcZ(41,26,"common.clear")," "),m.xp6(3),m.Q6J("routerLink",e.environment.BASE_URL),m.xp6(1),m.hij(" ",m.lcZ(45,28,"setting.prev")," "),m.xp6(3),m.Q6J("disabled",m.lcZ(48,30,e.isLoading)),m.xp6(2),m.hij(" ",m.lcZ(50,32,"setting.next")," "))},directives:[g.G,v.T,y.Y,n.O5,Z.c,i.rH,G,V,Tt],pipes:[h.X$,n.Ov],styles:[""]});const Jt=[{path:"",component:s.H,children:[{path:"",component:Nt}]}];class wt{}wt.\u0275fac=function(t){return new(t||wt)},wt.\u0275mod=m.oAB({type:wt}),wt.\u0275inj=m.cJS({imports:[[i.Bz.forChild(Jt)],i.Bz]});class Pt{}Pt.\u0275fac=function(t){return new(t||Pt)},Pt.\u0275mod=m.oAB({type:Pt}),Pt.\u0275inj=m.cJS({imports:[[n.ez,wt,r.m]]})}}]);