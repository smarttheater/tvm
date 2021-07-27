!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function n(t,n,c){return n&&e(t.prototype,n),c&&e(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"63k7":function(e,c,i){"use strict";i.r(c),i.d(c,"AuthModule",function(){return z});var r=i("ofXK"),o=i("eXdM"),a=i("tyNb"),s=i("064k"),u=i("ADXf"),p=i("qXkn"),l=i("fXoL"),d=i("VRkF"),f=function(){function e(n,c){t(this,e),this.cinerino=n,this.router=c,this.environment=Object(u.a)()}return n(e,[{key:"ngOnInit",value:function(){return t=this,e=void 0,n=void 0,c=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.cinerino.getServices();case 3:this.router.navigate([this.environment.BASE_URL]),t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(0),t.next=10,this.cinerino.signIn();case 10:case"end":return t.stop()}},t,this,[[0,6]])}),new(n||(n=Promise))(function(i,r){function o(t){try{s(c.next(t))}catch(e){r(e)}}function a(t){try{s(c.throw(t))}catch(e){r(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(o,a)}s((c=c.apply(t,e||[])).next())});var t,e,n,c}}]),e}();f.\u0275fac=function(t){return new(t||f)(l.dc(p.a),l.dc(a.b))},f.\u0275cmp=l.Xb({type:f,selectors:[["app-auth-index"]],decls:1,vars:1,consts:[["process","process.authAction.CheckLogin",3,"isLoading"]],template:function(t,e){1&t&&l.ec(0,"app-loading",0),2&t&&l.zc("isLoading",!0)},directives:[d.a],styles:[""]});var h=i("l7P3"),v=i("BHlQ"),b=i("FZB/"),g=i("Ide5"),m=i("lvnI"),y=i("C1lg"),j=function(t,e,n,c){return new(n||(n=Promise))(function(i,r){function o(t){try{s(c.next(t))}catch(e){r(e)}}function a(t){try{s(c.throw(t))}catch(e){r(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(o,a)}s((c=c.apply(t,e||[])).next())})};function w(t,e){if(1&t&&(l.jc(0,"li",14),l.jc(1,"div",15),l.jc(2,"div",16),l.jc(3,"div",17),l.jc(4,"div",18),l.ec(5,"img",19),l.ic(),l.jc(6,"p",20),l.Sc(7),l.ic(),l.ic(),l.jc(8,"a",21),l.Sc(9,"\u8d77\u52d5"),l.ic(),l.jc(10,"a",22),l.Sc(11,"\u8a2d\u5b9a"),l.ic(),l.ic(),l.ic(),l.ic()),2&t){var n=e.$implicit;l.Qb(5),l.zc("src",n.logo,l.Nc)("alt",n.name),l.Qb(2),l.Tc(n.name),l.Qb(1),l.zc("href","/?projectId="+n.id,l.Nc),l.Qb(2),l.zc("href","/?projectId="+n.id+"#/setting",l.Nc)}}function k(t,e){if(1&t&&(l.jc(0,"div",10),l.jc(1,"div",11),l.jc(2,"ul",12),l.Qc(3,w,12,5,"li",13),l.tc(4,"async"),l.ic(),l.ic(),l.ic()),2&t){var n,c=l.sc();l.Qb(3),l.zc("ngForOf",null==(n=l.uc(4,1,c.master))?null:n.projects)}}var x=function(){function e(n,c,i,r){t(this,e),this.store=n,this.masterService=c,this.utilService=i,this.cinerinoService=r}return n(e,[{key:"ngOnInit",value:function(){return j(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=this.store.pipe(Object(h.m)(b.b)),this.master=this.store.pipe(Object(h.m)(b.c)),this.projects=[],t.next=5,this.masterService.getProjects();case 5:this.utilService.loadStart({process:"load"}),this.utilService.loadEnd();case 7:case"end":return t.stop()}},t,this)}))}},{key:"signOut",value:function(){return j(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.cinerinoService.getServices();case 3:return t.next=5,this.cinerinoService.signOut();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}))}}]),e}();x.\u0275fac=function(t){return new(t||x)(l.dc(h.b),l.dc(v.d),l.dc(v.f),l.dc(v.b))},x.\u0275cmp=l.Xb({type:x,selectors:[["app-auth-signin"]],decls:16,vars:7,consts:[[3,"topButton"],["title","\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u9078\u629e"],[1,"contents","scroll-horizontal"],["class","p-3",4,"ngIf"],[1,"container","h-100"],[1,"row","align-items-center","justify-content-center","h-100"],[1,"col-3"],["type","button",1,"btn","btn-outline-light","btn-block","font-weight-bold","py-2",3,"click"],["type","button","disabled","",1,"btn","btn-primary","btn-block","font-weight-bold","py-2"],["process","process.masterAction.GetProjects",3,"isLoading"],[1,"p-3"],[1,"container","px-0"],[1,"row"],["class","col-3 mb-3",4,"ngFor","ngForOf"],[1,"col-3","mb-3"],[1,"card","h-100"],[1,"card-body"],[1,"d-flex","align-items-center","mb-3"],[1,"mr-2"],[1,"logo",3,"src","alt"],[1,"text-small","font-weight-bold","text-overflow-ellipsis"],[1,"btn","btn-primary","px-3","mr-3",3,"href"],[1,"btn","btn-primary","px-3",3,"href"]],template:function(t,e){if(1&t&&(l.ec(0,"app-header",0),l.ec(1,"app-page-title",1),l.jc(2,"div",2),l.Qc(3,k,5,3,"div",3),l.tc(4,"async"),l.ic(),l.jc(5,"app-footer"),l.jc(6,"div",4),l.jc(7,"div",5),l.jc(8,"div",6),l.jc(9,"button",7),l.qc("click",function(){return e.signOut()}),l.Sc(10,"\u30ed\u30b0\u30a2\u30a6\u30c8"),l.ic(),l.ic(),l.jc(11,"div",6),l.jc(12,"button",8),l.Sc(13,"\u6b21\u3078"),l.ic(),l.ic(),l.ic(),l.ic(),l.ic(),l.ec(14,"app-loading",9),l.tc(15,"async")),2&t){var n;l.zc("topButton",!1),l.Qb(3),l.zc("ngIf",(null==(n=l.uc(4,3,e.master))?null:n.projects.length)>0),l.Qb(11),l.zc("isLoading",l.uc(15,5,e.isLoading))}},directives:[g.a,m.a,r.l,y.a,d.a,r.k],pipes:[r.b],styles:[".logo[_ngcontent-%COMP%]{width:2rem}.btn-primary.disabled[_ngcontent-%COMP%]{opacity:1!important;background-color:#666!important;border-color:#666!important;color:#eee!important}"]});var S=function(){function e(n,c){t(this,e),this.router=n,this.actionService=c}return n(e,[{key:"ngOnInit",value:function(){this.actionService.order.delete(),this.actionService.purchase.delete(),this.router.navigate(["/"])}},{key:"selectProject",value:function(){}}]),e}();S.\u0275fac=function(t){return new(t||S)(l.dc(a.b),l.dc(v.a))},S.\u0275cmp=l.Xb({type:S,selectors:[["app-auth-signout"]],decls:1,vars:1,consts:[["process","process.authAction.Logout",3,"isLoading"]],template:function(t,e){1&t&&l.ec(0,"app-loading",0),2&t&&l.zc("isLoading",!0)},directives:[d.a],styles:[""]});var O=[{path:"",children:[{path:"",component:f},{path:"signin",canActivate:[s.a],component:x},{path:"signout",component:S}]}],L=function e(){t(this,e)};L.\u0275fac=function(t){return new(t||L)},L.\u0275mod=l.bc({type:L}),L.\u0275inj=l.ac({imports:[[a.d.forChild(O)],a.d]});var z=function e(){t(this,e)};z.\u0275fac=function(t){return new(t||z)},z.\u0275mod=l.bc({type:z}),z.\u0275inj=l.ac({imports:[[r.c,L,o.a]]})}}])}();