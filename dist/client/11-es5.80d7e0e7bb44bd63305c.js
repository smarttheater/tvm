!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{AL2A:function(e,r,i){"use strict";i.r(r),i.d(r,"SettingModule",(function(){return st}));var o=i("2kYt"),c=i("DSWM"),a=i("sEIs"),s=i("RRjC"),l=i("nIj0"),d=i("sN6X"),p=i("ddJ1"),u=i("x8Mb"),m=i("PIN6"),h=i("cHUu"),f=i("mOXJ"),g=i("WxsR"),v=i("EM62"),y=function(){function e(){t(this,e)}return n(e,[{key:"transform",value:function(t,e,n){e=void 0===e?"JP":e,n=void 0===n?"National":n;var r=g.c(t);return"JP"!==r.country?t:g.a(r,n).replace(/\-/g,"")}}]),e}();y.\u0275fac=function(t){return new(t||y)},y.\u0275pipe=v.Ic({name:"libphonenumberFormat",type:y,pure:!0});var b=i("s2Ay"),P=i("cc8N"),O=i("KLHf"),w=i("us+Q"),F=i("OSFB"),x=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function c(t){try{s(r.next(t))}catch(e){o(e)}}function a(t){try{s(r.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}s((r=r.apply(t,e||[])).next())}))},I=["intlTelInput"];function C(t,e){if(1&t&&(v.Pc(0,"p"),v.zd(1),v.Zc(2,"translate"),v.Oc()),2&t){var n=v.Yc().$implicit;v.wc(1),v.Ad(v.ad(2,1,"form.label."+n))}}function S(t,e){if(1&t&&(v.Pc(0,"p"),v.zd(1),v.Zc(2,"changeLanguage"),v.Oc()),2&t){var n,r=v.Yc().$implicit,i=v.Yc(2);v.wc(1),v.Bd(" ",v.ad(2,1,null==(n=i.getAdditionalProperty(r))?null:n.label),"")}}function A(t,e){1&t&&(v.Pc(0,"p",44),v.zd(1),v.Zc(2,"translate"),v.Oc()),2&t&&(v.wc(1),v.Bd(" ",v.ad(2,1,"form.required")," "))}function k(t,e){if(1&t&&(v.Kc(0,"input",45),v.Zc(1,"translate")),2&t){var n=v.Yc().$implicit;v.fd("formControlName",n)("id",n)("placeholder",v.ad(1,3,"form.placeholder."+n))}}function T(t,e){if(1&t&&(v.Pc(0,"option",33),v.zd(1),v.Zc(2,"changeLanguage"),v.Oc()),2&t){var n=e.$implicit;v.fd("value",n.branchCode),v.wc(1),v.Bd(" ",v.ad(2,2,n.name),"")}}function N(t,e){if(1&t){var n=v.Qc();v.Pc(0,"select",46),v.Wc("change",(function(){return v.rd(n),v.Yc(3).changePosList()})),v.Pc(1,"option",47),v.zd(2),v.Zc(3,"translate"),v.Oc(),v.xd(4,T,3,4,"option",22),v.Oc()}if(2&t){var r=v.Yc().$implicit,i=v.Yc(2);v.fd("formControlName",r),v.wc(2),v.Ad(v.ad(3,3,"setting.unselected")),v.wc(2),v.fd("ngForOf",i.theaters)}}function Z(t,e){if(1&t&&(v.Pc(0,"option",33),v.zd(1),v.Oc()),2&t){var n=e.$implicit;v.fd("value",n.id),v.wc(1),v.Ad(n.name)}}function z(t,e){if(1&t&&(v.Pc(0,"select",48),v.Pc(1,"option",47),v.zd(2),v.Zc(3,"translate"),v.Oc(),v.xd(4,Z,2,2,"option",22),v.Oc()),2&t){var n=v.Yc().$implicit,r=v.Yc(2);v.fd("formControlName",n),v.wc(2),v.Ad(v.ad(3,3,"setting.unselected")),v.wc(2),v.fd("ngForOf",r.posList)}}function L(t,e){if(1&t&&(v.Kc(0,"input",49),v.Zc(1,"translate")),2&t){var n=v.Yc().$implicit;v.fd("formControlName",n)("id",n)("placeholder",v.ad(1,3,"form.placeholder."+n))}}var B=function(t){return[t]},Y=function(t,e){return[t,e]};function E(t,e){if(1&t&&v.Kc(0,"ngx-intl-tel-input",50,51),2&t){var n=v.Yc(3);v.fd("preferredCountries",v.hd(11,B,n.CountryISO.Japan))("enableAutoCountrySelect",!1)("enablePlaceholder",!0)("searchCountryFlag",!0)("searchCountryField",v.id(13,Y,n.SearchCountryField.Iso2,n.SearchCountryField.Name))("selectFirstCountry",!1)("selectedCountryISO",n.CountryISO.Japan)("maxLength",15)("tooltipField",n.TooltipLabel.Name)("phoneValidation",!0)("separateDialCode",!1)}}function R(t,e){if(1&t&&(v.Pc(0,"select",52),v.Pc(1,"option",47),v.zd(2),v.Zc(3,"translate"),v.Oc(),v.Pc(4,"option",53),v.zd(5),v.Zc(6,"translate"),v.Oc(),v.Pc(7,"option",54),v.zd(8),v.Zc(9,"translate"),v.Oc(),v.Oc()),2&t){var n=v.Yc().$implicit;v.fd("formControlName",n)("id",n),v.wc(2),v.Ad(v.ad(3,5,"form.option.unselected")),v.wc(3),v.Ad(v.ad(6,7,"form.option.man")),v.wc(3),v.Ad(v.ad(9,9,"form.option.woman"))}}function J(t,e){if(1&t&&v.Kc(0,"textarea",55),2&t){var n=v.Yc().$implicit;v.fd("formControlName",n)("id",n)}}function q(t,e){1&t&&(v.Pc(0,"p",58),v.zd(1),v.Zc(2,"translate"),v.Oc()),2&t&&(v.wc(1),v.Bd(" ",v.ad(2,1,"form.validation.required")," "))}var D=function(t){return{value:t}};function K(t,e){if(1&t&&(v.Pc(0,"p",58),v.zd(1),v.Zc(2,"translate"),v.Oc()),2&t){var n=v.Yc(2).$implicit,r=v.Yc(2);v.wc(1),v.Bd(" ",v.bd(2,1,"form.validation.maxlength",v.hd(4,D,null==r.settingForm.controls[n].errors?null:r.settingForm.controls[n].errors.maxlength.requiredLength))," ")}}function j(t,e){1&t&&(v.Pc(0,"p",58),v.zd(1),v.Zc(2,"translate"),v.Oc()),2&t&&(v.wc(1),v.Bd(" ",v.ad(2,1,"form.validation.email")," "))}function V(t,e){1&t&&(v.Pc(0,"p",58),v.zd(1),v.Zc(2,"translate"),v.Oc()),2&t&&(v.wc(1),v.Bd(" ",v.ad(2,1,"form.validation.telephone")," "))}function $(t,e){1&t&&(v.Pc(0,"p",58),v.zd(1),v.Zc(2,"translate"),v.Oc()),2&t&&(v.wc(1),v.Bd(" ",v.ad(2,1,"form.validation.fullKana"),""))}function U(t,e){1&t&&(v.Pc(0,"p",58),v.zd(1),v.Zc(2,"translate"),v.Oc()),2&t&&(v.wc(1),v.Bd(" ",v.ad(2,1,"form.validation.lowercaseLetters"),""))}function W(t,e){if(1&t&&(v.Pc(0,"div"),v.xd(1,$,3,3,"p",57),v.Zc(2,"async"),v.xd(3,U,3,3,"p",57),v.Zc(4,"async"),v.Oc()),2&t){var n,r,i=v.Yc(2).$implicit,o=v.Yc(2),c="ja"===(null==(n=v.ad(2,2,o.user))?null:n.language)&&(null==o.settingForm.controls[i].errors?null:o.settingForm.controls[i].errors.customPattern),a="ja"!==(null==(r=v.ad(4,4,o.user))?null:r.language)&&(null==o.settingForm.controls[i].errors?null:o.settingForm.controls[i].errors.customPattern);v.wc(1),v.fd("ngIf",c),v.wc(2),v.fd("ngIf",a)}}function H(t,e){if(1&t&&(v.Pc(0,"div",56),v.xd(1,q,3,3,"p",57),v.xd(2,K,3,6,"p",57),v.xd(3,j,3,3,"p",57),v.xd(4,V,3,3,"p",57),v.xd(5,W,5,6,"div",35),v.Oc()),2&t){var n=v.Yc().$implicit,r=v.Yc(2);v.wc(1),v.fd("ngIf",null==r.settingForm.controls[n].errors?null:r.settingForm.controls[n].errors.required),v.wc(1),v.fd("ngIf",null==r.settingForm.controls[n].errors?null:r.settingForm.controls[n].errors.maxlength),v.wc(1),v.fd("ngIf",null==r.settingForm.controls[n].errors?null:r.settingForm.controls[n].errors.email),v.wc(1),v.fd("ngIf",null==r.settingForm.controls[n].errors?null:r.settingForm.controls[n].errors.validatePhoneNumber),v.wc(1),v.fd("ngIf","familyName"===n||"givenName"===n)}}function M(t,e){if(1&t&&(v.Pc(0,"div",18),v.Pc(1,"div",19),v.Pc(2,"div",34),v.xd(3,C,3,3,"p",35),v.xd(4,S,3,3,"p",35),v.xd(5,A,3,3,"p",36),v.Oc(),v.Oc(),v.Pc(6,"div",20),v.xd(7,k,2,5,"input",37),v.xd(8,N,5,5,"select",38),v.xd(9,z,5,5,"select",39),v.xd(10,L,2,5,"input",40),v.xd(11,E,2,16,"ngx-intl-tel-input",41),v.xd(12,R,10,11,"select",42),v.xd(13,J,1,2,"textarea",43),v.xd(14,H,6,5,"div",25),v.Oc(),v.Oc()),2&t){var n,r=e.$implicit,i=v.Yc(2),o=null,c="theaterBranchCode"!==r&&"posId"!==r&&"email"!==r&&"telephone"!==r&&"gender"!==r&&"textarea"!==(null==(o=i.getAdditionalProperty(r))?null:o.inputType),a="textarea"===(null==(n=i.getAdditionalProperty(r))?null:n.inputType);v.wc(3),v.fd("ngIf",!i.getAdditionalProperty(r)),v.wc(1),v.fd("ngIf",i.getAdditionalProperty(r)),v.wc(1),v.fd("ngIf",i.isRequired(r)),v.wc(2),v.fd("ngIf",c),v.wc(1),v.fd("ngIf","theaterBranchCode"===r),v.wc(1),v.fd("ngIf","posId"===r),v.wc(1),v.fd("ngIf","email"===r),v.wc(1),v.fd("ngIf","telephone"===r),v.wc(1),v.fd("ngIf","gender"===r),v.wc(1),v.fd("ngIf",a),v.wc(1),v.fd("ngIf",i.settingForm.controls[r].invalid&&i.settingForm.controls[r].touched)}}function G(t,e){if(1&t&&(v.Pc(0,"option",33),v.zd(1),v.Zc(2,"translate"),v.Oc()),2&t){var n=e.$implicit;v.fd("value",n.connectionType),v.wc(1),v.Bd(" ",v.ad(2,2,n.name),"")}}function Q(t,e){if(1&t){var n=v.Qc();v.Pc(0,"button",59),v.Wc("click",(function(){return v.rd(n),v.Yc(2).print()})),v.zd(1),v.Zc(2,"translate"),v.Oc()}2&t&&(v.wc(1),v.Ad(v.ad(2,1,"setting.device.printer.testPrinting")))}function _(t,e){1&t&&(v.Pc(0,"p",58),v.zd(1),v.Zc(2,"translate"),v.Oc()),2&t&&(v.wc(1),v.Bd(" ",v.ad(2,1,"form.validation.required"),""))}function X(t,e){if(1&t&&(v.Pc(0,"div",56),v.xd(1,_,3,3,"p",57),v.Oc()),2&t){var n=v.Yc(2);v.wc(1),v.fd("ngIf",null==n.settingForm.controls.printerIpAddress.errors?null:n.settingForm.controls.printerIpAddress.errors.required)}}function tt(t,e){1&t&&(v.Pc(0,"p",58),v.zd(1),v.Zc(2,"translate"),v.Oc()),2&t&&(v.wc(1),v.Bd(" ",v.ad(2,1,"form.validation.required"),""))}function et(t,e){if(1&t&&(v.Pc(0,"div",56),v.xd(1,tt,3,3,"p",57),v.Oc()),2&t){var n=v.Yc(2);v.wc(1),v.fd("ngIf",null==n.settingForm.controls.cashchanger.errors?null:n.settingForm.controls.cashchanger.errors.required)}}function nt(t,e){1&t&&(v.Pc(0,"p",58),v.zd(1),v.Zc(2,"translate"),v.Oc()),2&t&&(v.wc(1),v.Bd(" ",v.ad(2,1,"form.validation.required"),""))}function rt(t,e){if(1&t&&(v.Pc(0,"div",56),v.xd(1,nt,3,3,"p",57),v.Oc()),2&t){var n=v.Yc(2);v.wc(1),v.fd("ngIf",null==n.settingForm.controls.payment.errors?null:n.settingForm.controls.payment.errors.required)}}function it(t,e){if(1&t){var n=v.Qc();v.Pc(0,"form",14),v.Pc(1,"div",15),v.Pc(2,"p",16),v.zd(3),v.Zc(4,"translate"),v.Oc(),v.xd(5,M,15,11,"div",17),v.Oc(),v.Pc(6,"div",15),v.Pc(7,"p",16),v.zd(8),v.Zc(9,"translate"),v.Oc(),v.Pc(10,"div",18),v.Pc(11,"p",19),v.zd(12),v.Zc(13,"translate"),v.Oc(),v.Pc(14,"div",20),v.Pc(15,"select",21),v.Wc("change",(function(){return v.rd(n),v.Yc().changePrinterType()})),v.xd(16,G,3,4,"option",22),v.Oc(),v.xd(17,Q,3,3,"button",23),v.Oc(),v.Oc(),v.Pc(18,"div",18),v.Pc(19,"p",19),v.zd(20),v.Zc(21,"translate"),v.Oc(),v.Pc(22,"div",20),v.Kc(23,"input",24),v.xd(24,X,2,1,"div",25),v.Kc(25,"p",26),v.Zc(26,"translate"),v.Oc(),v.Oc(),v.Pc(27,"div",18),v.Pc(28,"p",19),v.zd(29),v.Zc(30,"translate"),v.Oc(),v.Pc(31,"div",20),v.Kc(32,"input",27),v.Kc(33,"p",26),v.Zc(34,"translate"),v.xd(35,et,2,1,"div",25),v.Pc(36,"button",28),v.Wc("click",(function(){return v.rd(n),v.Yc().connectCash()})),v.zd(37),v.Zc(38,"translate"),v.Oc(),v.Pc(39,"button",29),v.Wc("click",(function(){return v.rd(n),v.Yc().endDeposit()})),v.zd(40),v.Zc(41,"translate"),v.Oc(),v.Oc(),v.Oc(),v.Pc(42,"div",18),v.Pc(43,"p",19),v.zd(44),v.Zc(45,"translate"),v.Oc(),v.Pc(46,"div",20),v.Kc(47,"input",30),v.xd(48,rt,2,1,"div",25),v.Pc(49,"button",31),v.Wc("click",(function(){return v.rd(n),v.Yc().connectPayment()})),v.zd(50),v.Zc(51,"translate"),v.Oc(),v.Oc(),v.Oc(),v.Oc(),v.Pc(52,"div",15),v.Pc(53,"p",16),v.zd(54),v.Zc(55,"translate"),v.Oc(),v.Pc(56,"div",18),v.Pc(57,"p",19),v.zd(58),v.Zc(59,"translate"),v.Oc(),v.Pc(60,"div",20),v.Pc(61,"select",32),v.Pc(62,"option",33),v.zd(63),v.Zc(64,"translate"),v.Oc(),v.Pc(65,"option",33),v.zd(66),v.Zc(67,"translate"),v.Oc(),v.Oc(),v.Oc(),v.Oc(),v.Oc(),v.Oc()}if(2&t){var r=v.Yc();v.fd("formGroup",r.settingForm),v.wc(3),v.Bd(" ",v.ad(4,26,"setting.basic.title")," "),v.wc(2),v.fd("ngForOf",r.getProfileFormKeys()),v.wc(3),v.Bd(" ",v.ad(9,28,"setting.device.title")," "),v.wc(4),v.Ad(v.ad(13,30,"setting.device.printer.label")),v.wc(4),v.fd("ngForOf",r.printers),v.wc(1),v.fd("ngIf",r.settingForm.controls.printerType.value&&r.settingForm.controls.printerType.value!==r.connectionType.None),v.wc(3),v.Ad(v.ad(21,32,"setting.device.printer.ipAddress")),v.wc(4),v.fd("ngIf",r.settingForm.controls.printerIpAddress.invalid&&r.settingForm.controls.printerIpAddress.touched),v.wc(1),v.fd("innerHtml",v.ad(26,34,"setting.device.printer.ipAddressDescription"),v.sd),v.wc(4),v.Ad(v.ad(30,36,"setting.device.cashchanger.label")),v.wc(4),v.fd("innerHtml",v.ad(34,38,"setting.device.cashchanger.description"),v.sd),v.wc(2),v.fd("ngIf",r.settingForm.controls.cashchanger.invalid&&r.settingForm.controls.cashchanger.touched),v.wc(1),v.fd("disabled",r.epsonEPOSService.cashchanger.isConnected()),v.wc(1),v.Ad(v.ad(38,40,"setting.device.connect")),v.wc(2),v.fd("disabled",r.epsonEPOSService.cashchanger.isConnected()),v.wc(1),v.Ad(v.ad(41,42,"setting.device.endDeposit")),v.wc(4),v.Ad(v.ad(45,44,"setting.device.payment.label")),v.wc(4),v.fd("ngIf",r.settingForm.controls.payment.invalid&&r.settingForm.controls.payment.touched),v.wc(2),v.Ad(v.ad(51,46,"setting.device.connect")),v.wc(4),v.Bd(" ",v.ad(55,48,"setting.application.title")," "),v.wc(4),v.Bd(" ",v.ad(59,50,"setting.application.applicationType.label")," "),v.wc(4),v.fd("value",r.applicationType.Tvm),v.wc(1),v.Bd(" ",v.ad(64,52,"setting.application.applicationType.option.tvm")," "),v.wc(2),v.fd("value",r.applicationType.Printer),v.wc(1),v.Bd(" ",v.ad(67,54,"setting.application.applicationType.option.printer")," ")}}var ot=function(){function e(n,r,i,o,c,a,s,l,d,h){t(this,e),this.epsonEPOSService=n,this.formBuilder=r,this.store=i,this.utilService=o,this.actionService=c,this.masterService=a,this.translate=s,this.router=l,this.paymentService=d,this.cinerinoService=h,this.printers=u.b.Util.Printer.printers,this.connectionType=u.b.Util.Printer.ConnectionType,this.viewType=u.b.Util.ViewType,this.environment=Object(m.a)(),this.SearchCountryField=p.e,this.TooltipLabel=p.f,this.CountryISO=p.a,this.applicationType=u.b.Util.Application.ApplicationType}return n(e,[{key:"ngOnInit",value:function(){return x(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.user=this.store.pipe(Object(d.m)(f.g)),this.error=this.store.pipe(Object(d.m)(f.a)),this.isLoading=this.store.pipe(Object(d.m)(f.b)),this.posList=[],this.theaters=[],t.prev=1,t.next=4,this.masterService.searchMovieTheaters();case 4:return this.theaters=t.sent,t.next=7,this.createSettlingForm();case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0),this.router.navigate(["/error"]);case 12:if(t.prev=12,e=this.settingForm.controls.cashchanger.value,t.t1=""!==e,!t.t1){t.next=21;break}return t.next=18,this.epsonEPOSService.cashchanger.init({ipAddress:e});case 18:return t.next=20,this.epsonEPOSService.cashchanger.endDeposit({endDepositType:"DEPOSIT_REPAY"});case 20:this.epsonEPOSService.cashchanger.disconnect();case 21:t.next=26;break;case 23:t.prev=23,t.t2=t.catch(12),console.error(t.t2);case 26:setTimeout((function(){if(void 0!==n.intlTelInput){var t=n.intlTelInput.allCountries.find((function(t){return t.iso2===p.a.Japan}));void 0!==t&&(t.placeHolder=n.translate.instant("form.placeholder.telephone"))}}),0);case 27:case"end":return t.stop()}}),t,this,[[1,9],[12,23]])})))}},{key:"createSettlingForm",value:function(){return x(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,r,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.environment.PROFILE,this.settingForm=this.formBuilder.group({theaterBranchCode:["",[l.r.required]],posId:[""],printerType:[u.b.Util.Printer.ConnectionType.None],printerIpAddress:[""],cashchanger:[""],payment:[""],applicationType:[u.b.Util.Application.ApplicationType.Tvm]}),e.forEach((function(t){var e=[];void 0!==t.required&&t.required&&e.push(l.r.required),void 0!==t.maxLength&&e.push(l.r.maxLength(t.maxLength)),void 0!==t.minLength&&e.push(l.r.minLength(t.minLength)),void 0!==t.pattern&&e.push(l.r.pattern(t.pattern)),"email"===t.key&&e.push(l.r.email),i.settingForm.addControl(t.key,new l.c(t.value,e))})),t.next=4,this.actionService.user.getData();case 4:void 0!==(n=t.sent).theater&&(this.settingForm.controls.theaterBranchCode.setValue(n.theater.branchCode),this.changePosList()),void 0!==n.pos&&this.settingForm.controls.posId.setValue(n.pos.id),void 0!==(r=n.customerContact)&&Object.keys(r).forEach((function(t){var e=r[t];void 0!==e&&void 0!==i.settingForm.controls[t]&&("telephone"!==t?i.settingForm.controls[t].setValue(e):i.settingForm.controls.telephone.setValue((new y).transform(e)))})),void 0!==n.printer&&(this.settingForm.controls.printerType.setValue(n.printer.connectionType),this.settingForm.controls.printerIpAddress.setValue(n.printer.ipAddress)),void 0!==n.cashchanger&&this.settingForm.controls.cashchanger.setValue(n.cashchanger),void 0!==n.payment&&this.settingForm.controls.payment.setValue(n.payment),void 0!==n.applicationType&&this.settingForm.controls.applicationType.setValue(n.applicationType);case 8:case"end":return t.stop()}}),t,this)})))}},{key:"changePosList",value:function(){this.settingForm.controls.posId.setValue("");var t=this.settingForm.controls.theaterBranchCode.value;if(""!==t){var e=this.theaters.find((function(e){return e.branchCode===t}));this.posList=void 0!==e?void 0===e.hasPOS?[]:e.hasPOS:[]}else this.posList=[]}},{key:"onSubmit",value:function(){return x(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,r,i,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object.keys(this.settingForm.controls).forEach((function(t){o.settingForm.controls[t].markAsTouched()})),!this.settingForm.invalid){t.next=4;break}this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("setting.alert.validation")}),t.next=15;break;case 4:if(t.prev=4,e=this.settingForm.controls.theaterBranchCode.value,n=this.settingForm.controls.posId.value,void 0!==(r=this.theaters.find((function(t){return t.branchCode===e})))){t.next=8;break}throw new Error("theater not found");case 8:i=void 0===r.hasPOS?r.hasPOS:r.hasPOS.find((function(t){return t.id===n})),this.actionService.user.updateAll({pos:i,theater:r,profile:{familyName:void 0===this.settingForm.controls.familyName?void 0:this.settingForm.controls.familyName.value,givenName:void 0===this.settingForm.controls.givenName?void 0:this.settingForm.controls.givenName.value,email:void 0===this.settingForm.controls.email?void 0:this.settingForm.controls.email.value,telephone:void 0===this.settingForm.controls.telephone?void 0:this.settingForm.controls.telephone.value.e164Number,age:void 0===this.settingForm.controls.age?void 0:this.settingForm.controls.age.value,address:void 0===this.settingForm.controls.address?void 0:this.settingForm.controls.address.value,gender:void 0===this.settingForm.controls.gender?void 0:this.settingForm.controls.gender.value},printer:{ipAddress:this.settingForm.controls.printerIpAddress.value,connectionType:this.settingForm.controls.printerType.value},cashchanger:void 0===this.settingForm.controls.cashchanger.value?void 0:this.settingForm.controls.cashchanger.value,payment:void 0===this.settingForm.controls.payment.value?void 0:this.settingForm.controls.payment.value,applicationType:this.settingForm.controls.applicationType.value}),this.utilService.openAlert({title:this.translate.instant("common.complete"),body:this.translate.instant("setting.alert.success")}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),console.error(t.t0);case 15:case"end":return t.stop()}}),t,this,[[4,12]])})))}},{key:"print",value:function(){return x(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={connectionType:this.settingForm.controls.printerType.value,ipAddress:this.settingForm.controls.printerIpAddress.value},t.prev=1,t.next=4,this.actionService.order.print({orders:[],printer:e});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error(t.t0),this.utilService.openAlert({title:this.translate.instant("common.error"),body:'\n                <p class="mb-4">'.concat(this.translate.instant("setting.alert.print"),'</p>\n                    <div class="p-3 bg-light-gray select-text">\n                    <code>').concat("{}"===JSON.stringify(t.t0)?t.t0:JSON.stringify(t.t0),"</code>\n                </div>")});case 9:case"end":return t.stop()}}),t,this,[[1,6]])})))}},{key:"changePrinterType",value:function(){this.settingForm.controls.printerType.value===u.b.Util.Printer.ConnectionType.StarBluetooth&&this.settingForm.controls.printerIpAddress.setValue(this.translate.instant("setting.device.starBluetoothAddress"))}},{key:"isRequired",value:function(t){return"theaterBranchCode"===t||void 0!==this.environment.PROFILE.find((function(e){return e.key===t&&e.required}))}},{key:"getProfileFormKeys",value:function(){return Object.keys(this.settingForm.controls).filter((function(t){return"printerType"!==t&&"printerIpAddress"!==t&&"payment"!==t&&"cashchanger"!==t&&"applicationType"!==t}))}},{key:"getAdditionalProperty",value:function(t){return this.environment.PROFILE.find((function(e){return/additionalProperty/.test(e.key)&&e.key===t}))}},{key:"connectCash",value:function(){return x(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=this.settingForm.controls.cashchanger.value,t.next=4,this.epsonEPOSService.cashchanger.init({ipAddress:e});case 4:return t.next=6,this.epsonEPOSService.cashchanger.disconnect();case 6:this.utilService.openAlert({title:this.translate.instant("common.complete"),body:this.translate.instant("setting.alert.connection")}),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),n=void 0===t.t0.message?t.t0:t.t0.message,this.utilService.openAlert({title:this.translate.instant("common.error"),body:'\n                <div class="p-3 bg-light-gray select-text">\n                    <code>'.concat(n,"</code>\n                </div>")});case 14:case"end":return t.stop()}}),t,this,[[0,9]])})))}},{key:"endDeposit",value:function(){return x(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=this.settingForm.controls.cashchanger.value,t.next=4,this.epsonEPOSService.cashchanger.init({ipAddress:e});case 4:return t.next=6,this.epsonEPOSService.cashchanger.endDeposit({endDepositType:"DEPOSIT_REPAY"});case 6:return t.next=8,this.epsonEPOSService.cashchanger.disconnect();case 8:t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0),n=void 0===t.t0.message?t.t0:t.t0.message,this.utilService.openAlert({title:this.translate.instant("common.error"),body:'\n                <div class="p-3 bg-light-gray select-text">\n                    <code>'.concat(n,"</code>\n                </div>")});case 15:case"end":return t.stop()}}),t,this,[[0,10]])})))}},{key:"connectPayment",value:function(){return x(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=this.settingForm.controls.payment.value,t.next=4,this.paymentService.init({ipAddress:e});case 4:return t.next=6,this.paymentService.exec({func:u.b.Purchase.Payment.FUNC_CODE.TERMINAL.COMMUNICATION});case 6:n=t.sent,console.log(n),this.utilService.openAlert({title:this.translate.instant("common.complete"),body:this.translate.instant("setting.alert.connection")}),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0),r=void 0===t.t0.message?t.t0:t.t0.message,this.utilService.openAlert({title:this.translate.instant("common.error"),body:'\n                <div class="p-3 bg-light-gray select-text">\n                    <code>'.concat(r,"</code>\n                </div>")});case 15:case"end":return t.stop()}}),t,this,[[0,10]])})))}},{key:"signOut",value:function(){return x(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.cinerinoService.getServices();case 3:return t.next=5,this.cinerinoService.signOut();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})))}}]),e}();ot.\u0275fac=function(t){return new(t||ot)(v.Jc(h.c),v.Jc(l.b),v.Jc(d.b),v.Jc(h.f),v.Jc(h.a),v.Jc(h.d),v.Jc(b.d),v.Jc(a.b),v.Jc(h.e),v.Jc(h.b))},ot.\u0275cmp=v.Dc({type:ot,selectors:[["app-setting"]],viewQuery:function(t,e){var n;1&t&&v.Ed(I,!0),2&t&&v.nd(n=v.Xc())&&(e.intlTelInput=n.first)},decls:25,vars:17,consts:[[3,"title"],[1,"contents"],[1,"container","h-100","px-3","pb-3"],[1,"row","h-100"],[1,"col-2","h-100"],[1,"col-8","h-100","scroll-horizontal"],[3,"formGroup",4,"ngIf"],[1,"col-2"],["type","button",1,"btn","btn-primary","btn-block",3,"click"],[1,"container","h-100"],[1,"row","align-items-center","justify-content-center","h-100"],[1,"col-3"],["type","button",1,"btn","btn-outline-light","btn-block","font-weight-bold","py-2",3,"routerLink"],["type","submit",1,"btn","btn-primary","btn-block","font-weight-bold","py-2",3,"disabled","click"],[3,"formGroup"],[1,"mb-5"],[1,"text-large","font-weight-bold","bg-light-gray","border-left","border-white-bold","border-primary","p-3","mb-4"],["class","form-group row",4,"ngFor","ngForOf"],[1,"form-group","row"],[1,"col-4","text-right","py-3"],[1,"col-8"],["formControlName","printerType",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],["type","button","class","btn btn-sm btn-primary py-2 mt-2",3,"click",4,"ngIf"],["type","text","formControlName","printerIpAddress","placeholder","0.0.0.0",1,"form-control"],["class","mt-2",4,"ngIf"],[1,"text-small","mt-2",3,"innerHtml"],["type","text","formControlName","cashchanger","placeholder","0.0.0.0",1,"form-control"],["type","button",1,"btn","btn-primary","mt-2","mr-2",3,"disabled","click"],["type","button",1,"btn","btn-primary","mt-2",3,"disabled","click"],["type","text","formControlName","payment","placeholder","0.0.0.0",1,"form-control"],["type","button",1,"btn","btn-primary","mt-2",3,"click"],["formControlName","applicationType",1,"form-control"],[3,"value"],[1,"d-inline-flex","align-items-center"],[4,"ngIf"],["class","badge badge-danger ml-2",4,"ngIf"],["type","text","class","form-control",3,"formControlName","id","placeholder",4,"ngIf"],["class","form-control",3,"formControlName","change",4,"ngIf"],["class","form-control",3,"formControlName",4,"ngIf"],["type","email","class","form-control",3,"formControlName","id","placeholder",4,"ngIf"],["inputId","telephone","name","telephone","formControlName","telephone",3,"preferredCountries","enableAutoCountrySelect","enablePlaceholder","searchCountryFlag","searchCountryField","selectFirstCountry","selectedCountryISO","maxLength","tooltipField","phoneValidation","separateDialCode",4,"ngIf"],["class","form-control",3,"formControlName","id",4,"ngIf"],["class","form-control","placeholder","",3,"formControlName","id",4,"ngIf"],[1,"badge","badge-danger","ml-2"],["type","text",1,"form-control",3,"formControlName","id","placeholder"],[1,"form-control",3,"formControlName","change"],["value",""],[1,"form-control",3,"formControlName"],["type","email",1,"form-control",3,"formControlName","id","placeholder"],["inputId","telephone","name","telephone","formControlName","telephone",3,"preferredCountries","enableAutoCountrySelect","enablePlaceholder","searchCountryFlag","searchCountryField","selectFirstCountry","selectedCountryISO","maxLength","tooltipField","phoneValidation","separateDialCode"],["intlTelInput",""],[1,"form-control",3,"formControlName","id"],["value","man"],["value","woman"],["placeholder","",1,"form-control",3,"formControlName","id"],[1,"mt-2"],["class","text-danger",4,"ngIf"],[1,"text-danger"],["type","button",1,"btn","btn-sm","btn-primary","py-2","mt-2",3,"click"]],template:function(t,e){1&t&&(v.Kc(0,"app-header"),v.Kc(1,"app-page-title",0),v.Zc(2,"translate"),v.Pc(3,"div",1),v.Pc(4,"div",2),v.Pc(5,"div",3),v.Kc(6,"div",4),v.Pc(7,"div",5),v.xd(8,it,68,56,"form",6),v.Oc(),v.Pc(9,"div",7),v.Pc(10,"button",8),v.Wc("click",(function(){return e.signOut()})),v.zd(11),v.Zc(12,"translate"),v.Oc(),v.Oc(),v.Oc(),v.Oc(),v.Oc(),v.Pc(13,"app-footer"),v.Pc(14,"div",9),v.Pc(15,"div",10),v.Pc(16,"div",11),v.Pc(17,"button",12),v.zd(18),v.Zc(19,"translate"),v.Oc(),v.Oc(),v.Pc(20,"div",11),v.Pc(21,"button",13),v.Wc("click",(function(){return e.onSubmit()})),v.Zc(22,"async"),v.zd(23),v.Zc(24,"translate"),v.Oc(),v.Oc(),v.Oc(),v.Oc(),v.Oc()),2&t&&(v.wc(1),v.gd("title",v.ad(2,7,"setting.title")),v.wc(7),v.fd("ngIf",e.settingForm),v.wc(3),v.Ad(v.ad(12,9,"setting.signOut")),v.wc(6),v.fd("routerLink",e.environment.BASE_URL),v.wc(1),v.Ad(v.ad(19,11,"setting.prev")),v.wc(3),v.fd("disabled",v.ad(22,13,e.isLoading)),v.wc(2),v.Ad(v.ad(24,15,"setting.next")))},directives:[P.a,O.a,o.l,w.a,a.c,l.t,l.l,l.e,o.k,l.q,l.k,l.d,p.b,l.a,l.o,l.s,p.c],pipes:[b.c,o.b,F.a],styles:[""]});var ct=[{path:"",component:s.a,children:[{path:"",component:ot}]}],at=function e(){t(this,e)};at.\u0275mod=v.Hc({type:at}),at.\u0275inj=v.Gc({factory:function(t){return new(t||at)},imports:[[a.d.forChild(ct)],a.d]});var st=function e(){t(this,e)};st.\u0275mod=v.Hc({type:st}),st.\u0275inj=v.Gc({factory:function(t){return new(t||st)},imports:[[o.c,at,c.a]]})}}])}();