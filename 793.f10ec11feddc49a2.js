"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[793],{793:(Y,_,c)=>{c.r(_),c.d(_,{Messages:()=>B,MessagesModule:()=>U});var e=c(2223),r=c(4755),o=c(1591),g=c(387),d=c(5963),m=c(568),p=c(6724),u=c(8302),f=c(8323),h=c(4401),v=c(2132);function M(t,n){if(1&t&&e._UZ(0,"span"),2&t){const s=e.oxw().$implicit;e.Tol("p-message-icon pi "+s.icon)}}function T(t,n){1&t&&e._UZ(0,"CheckIcon")}function x(t,n){1&t&&e._UZ(0,"InfoCircleIcon")}function y(t,n){1&t&&e._UZ(0,"TimesCircleIcon")}function I(t,n){1&t&&e._UZ(0,"ExclamationTriangleIcon")}function E(t,n){if(1&t&&(e.TgZ(0,"span",10),e.ynx(1),e.YNc(2,T,1,0,"CheckIcon",11),e.YNc(3,x,1,0,"InfoCircleIcon",11),e.YNc(4,y,1,0,"TimesCircleIcon",11),e.YNc(5,I,1,0,"ExclamationTriangleIcon",11),e.BQk(),e.qZA()),2&t){const s=e.oxw().$implicit;e.xp6(2),e.Q6J("ngIf","success"===s.severity),e.xp6(1),e.Q6J("ngIf","info"===s.severity),e.xp6(1),e.Q6J("ngIf","error"===s.severity),e.xp6(1),e.Q6J("ngIf","warn"===s.severity)}}function C(t,n){if(1&t&&e._UZ(0,"span",14),2&t){const s=e.oxw(2).$implicit;e.Q6J("innerHTML",s.summary,e.oJD)}}function O(t,n){if(1&t&&e._UZ(0,"span",15),2&t){const s=e.oxw(2).$implicit;e.Q6J("innerHTML",s.detail,e.oJD)}}function b(t,n){if(1&t&&(e.ynx(0),e.YNc(1,C,1,1,"span",12),e.YNc(2,O,1,1,"span",13),e.BQk()),2&t){const s=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",s.summary),e.xp6(1),e.Q6J("ngIf",s.detail)}}function D(t,n){if(1&t&&(e.TgZ(0,"span",18),e._uU(1),e.qZA()),2&t){const s=e.oxw(2).$implicit;e.xp6(1),e.Oqu(s.summary)}}function P(t,n){if(1&t&&(e.TgZ(0,"span",19),e._uU(1),e.qZA()),2&t){const s=e.oxw(2).$implicit;e.xp6(1),e.Oqu(s.detail)}}function S(t,n){if(1&t&&(e.YNc(0,D,2,1,"span",16),e.YNc(1,P,2,1,"span",17)),2&t){const s=e.oxw().$implicit;e.Q6J("ngIf",s.summary),e.xp6(1),e.Q6J("ngIf",s.detail)}}function A(t,n){if(1&t){const s=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(s);const a=e.oxw().index,l=e.oxw(2);return e.KtG(l.removeMessage(a))}),e._UZ(1,"TimesIcon",21),e.qZA()}2&t&&(e.xp6(1),e.Q6J("styleClass","p-message-close-icon"))}const L=function(t,n){return{showTransitionParams:t,hideTransitionParams:n}},Q=function(t){return{value:"visible",params:t}};function J(t,n){if(1&t&&(e.TgZ(0,"div",4)(1,"div",5),e.YNc(2,M,1,2,"span",6),e.YNc(3,E,6,4,"span",7),e.YNc(4,b,3,2,"ng-container",1),e.YNc(5,S,2,2,"ng-template",null,8,e.W1O),e.YNc(7,A,2,1,"button",9),e.qZA()()),2&t){const s=n.$implicit,i=e.MAs(6),a=e.oxw(2);e.Tol("p-message p-message-"+s.severity),e.Q6J("@messageAnimation",e.VKq(11,Q,e.WLB(8,L,a.showTransitionOptions,a.hideTransitionOptions))),e.xp6(2),e.Q6J("ngIf",s.icon),e.xp6(1),e.Q6J("ngIf",!s.icon),e.xp6(1),e.Q6J("ngIf",!a.escape)("ngIfElse",i),e.xp6(3),e.Q6J("ngIf",a.closable)}}function k(t,n){if(1&t&&(e.ynx(0),e.YNc(1,J,8,13,"div",3),e.BQk()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",s.messages)}}function Z(t,n){1&t&&e.GkF(0)}function w(t,n){if(1&t&&(e.TgZ(0,"div",22)(1,"div",5),e.YNc(2,Z,1,0,"ng-container",23),e.qZA()()),2&t){const s=e.oxw();e.Q6J("ngClass","p-message p-message-"+s.severity),e.xp6(2),e.Q6J("ngTemplateOutlet",s.contentTemplate)}}let B=(()=>{class t{set value(s){this.messages=s,this.startMessageLifes(this.messages)}constructor(s,i,a){this.messageService=void 0,this.el=void 0,this.cd=void 0,this.closable=!0,this.style=void 0,this.styleClass=void 0,this.enableService=!0,this.key=void 0,this.escape=!0,this.severity=void 0,this.showTransitionOptions="300ms ease-out",this.hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)",this.templates=void 0,this.valueChange=new e.vpe,this.messages=void 0,this.messageSubscription=void 0,this.clearSubscription=void 0,this.timerSubscriptions=[],this.contentTemplate=void 0,this.messageService=s,this.el=i,this.cd=a}ngAfterContentInit(){this.templates.forEach(s=>{s.getType(),this.contentTemplate=s.template}),this.messageService&&this.enableService&&!this.contentTemplate&&(this.messageSubscription=this.messageService.messageObserver.subscribe(s=>{if(s){Array.isArray(s)||(s=[s]);const i=s.filter(a=>this.key===a.key);this.messages=this.messages?[...this.messages,...i]:[...i],this.startMessageLifes(i),this.cd.markForCheck()}}),this.clearSubscription=this.messageService.clearObserver.subscribe(s=>{s?this.key===s&&(this.messages=null):this.messages=null,this.cd.markForCheck()}))}hasMessages(){let s=this.el.nativeElement.parentElement;return!(!s||!s.offsetParent)&&(null!=this.contentTemplate||this.messages&&this.messages.length>0)}clear(){this.messages=[],this.valueChange.emit(this.messages)}removeMessage(s){this.messages=this.messages.filter((i,a)=>a!==s),this.valueChange.emit(this.messages)}get icon(){const s=this.severity||(this.hasMessages()?this.messages[0].severity:null);if(this.hasMessages())switch(s){case"success":return"pi-check";case"info":default:return"pi-info-circle";case"error":return"pi-times";case"warn":return"pi-exclamation-triangle"}return null}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.timerSubscriptions?.forEach(s=>s.unsubscribe())}startMessageLifes(s){s?.forEach(i=>i.life&&this.startMessageLife(i))}startMessageLife(s){const i=(0,d.H)(s.life).subscribe(()=>{this.messages=this.messages?.filter(a=>a!==s),this.timerSubscriptions=this.timerSubscriptions?.filter(a=>a!==i),this.valueChange.emit(this.messages),this.cd.markForCheck()});this.timerSubscriptions.push(i)}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(g.ez,8),e.Y36(e.SBq),e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["p-messages"]],contentQueries:function(s,i,a){if(1&s&&e.Suo(a,g.jx,4),2&s){let l;e.iGM(l=e.CRH())&&(i.templates=l)}},hostAttrs:[1,"p-element"],inputs:{value:"value",closable:"closable",style:"style",styleClass:"styleClass",enableService:"enableService",key:"key",escape:"escape",severity:"severity",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{valueChange:"valueChange"},decls:4,vars:5,consts:[["role","alert",1,"p-messages","p-component",3,"ngStyle"],[4,"ngIf","ngIfElse"],["staticMessage",""],["role","alert",3,"class",4,"ngFor","ngForOf"],["role","alert"],[1,"p-message-wrapper"],[3,"class",4,"ngIf"],["class","p-message-icon",4,"ngIf"],["escapeOut",""],["class","p-message-close p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-message-icon"],[4,"ngIf"],["class","p-message-summary",3,"innerHTML",4,"ngIf"],["class","p-message-detail",3,"innerHTML",4,"ngIf"],[1,"p-message-summary",3,"innerHTML"],[1,"p-message-detail",3,"innerHTML"],["class","p-message-summary",4,"ngIf"],["class","p-message-detail",4,"ngIf"],[1,"p-message-summary"],[1,"p-message-detail"],["type","button","pRipple","",1,"p-message-close","p-link",3,"click"],[3,"styleClass"],["role","alert",3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(s,i){if(1&s&&(e.TgZ(0,"div",0),e.YNc(1,k,2,1,"ng-container",1),e.YNc(2,w,3,2,"ng-template",null,2,e.W1O),e.qZA()),2&s){const a=e.MAs(3);e.Tol(i.styleClass),e.Q6J("ngStyle",i.style),e.xp6(1),e.Q6J("ngIf",!i.contentTemplate)("ngIfElse",a)}},dependencies:function(){return[r.mk,r.sg,r.O5,r.tP,r.PC,m.H,p.n,u.u,f.x,h.L,v.q]},styles:[".p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}\n"],encapsulation:2,data:{animation:[(0,o.X$)("messageAnimation",[(0,o.eR)(":enter",[(0,o.oB)({opacity:0,transform:"translateY(-25%)"}),(0,o.jt)("{{showTransitionParams}}")]),(0,o.eR)(":leave",[(0,o.jt)("{{hideTransitionParams}}",(0,o.oB)({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0}),t})(),U=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,m.T,p.n,u.u,f.x,h.L,v.q]}),t})()}}]);