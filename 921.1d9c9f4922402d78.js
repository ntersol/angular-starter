"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[921],{5921:(Y,d,a)=>{a.r(d),a.d(d,{LoginModule:()=>L});var l=a(4755),m=a(8797),c=a(4247),f=a(2665),g=a(9621),e=a(2223),s=a(5030),C=a(7876),y=a(805),w=a(8659),N=a(3734),b=a(2216);function Z(t,r){1&t&&e._UZ(0,"p-message",19)}function x(t,r){1&t&&e._UZ(0,"p-message",20)}function S(t,r){if(1&t&&(e.ynx(0),e.YNc(1,Z,1,0,"p-message",17),e.YNc(2,x,1,0,"p-message",18),e.BQk()),2&t){const o=r.ngIf,n=e.oxw();e.xp6(1),e.Q6J("ngIf",o===n.authStateType.sessionExpired),e.xp6(1),e.Q6J("ngIf",o===n.authStateType.loggedOut)}}function U(t,r){1&t&&e._UZ(0,"p-message",21)}const h=function(t){return{"p-focus":t}},T=function(t){return{"btn-waiting":t}},p="savedUserName",I=g.Bz.forChild([{path:"",component:(()=>{class t{constructor(o,n,i,u,F){this.authService=o,this.route=n,this.router=i,this.fb=u,this.dom=F,this.formMain=this.fb.group({userName:new s.FormControl("juser",{validators:s.Validators.required,nonNullable:!0}),password:new s.FormControl("password",{validators:s.Validators.required,nonNullable:!0}),remember:new s.FormControl(!1,{nonNullable:!0})}),this.state=(0,e.tdS)({waiting:!1,error:null,showErrorDetails:!1,loggedout:!1,showPassword:!0}),this.authState$=this.authService.authState$,this.authStateType=m.jq}ngOnInit(){const o=this.dom.localStorage?.getItem(p);o&&this.formMain.patchValue({userName:o,remember:!0}),this.authService.logOutModal=null}onLogin(){this.state.update(o=>({...o,waiting:!0,error:null,showErrorDetails:!1})),this.formMain&&this.formMain.value.remember?this.dom.localStorage?.setItem(p,this.formMain.value.userName||""):this.dom.localStorage?.removeItem(p),this.authService.logIn(this.formMain.value).subscribe(()=>{this.router.navigate([this.route.snapshot.queryParams.returnUrl||"/"]),this.state.update(n=>({...n,waiting:!1}))},o=>{o.errorMsg="Error logging in.",(o.statusText="Unauthorized")&&(o.errorMsg="Invalid username or password, please try again.",this.state.update(n=>({...n,showErrorDetails:!1}))),this.state.update(n=>({...n,error:o,waiting:!1}))})}ngOnDestroy(){}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(m.e8),e.Y36(g.gz),e.Y36(g.F0),e.Y36(s.NonNullableFormBuilder),e.Y36(C.vo))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:30,vars:15,consts:[[1,"container","mt-5"],[1,"m-auto",2,"max-width","480px"],["novalidate","",3,"formGroup","ngSubmit"],["icon","user"],[4,"ngIf"],["severity","error","text","Unable to log in, please check your username and password",4,"ngIf"],[1,"mb-4"],[1,"p-float-label","mb-4",3,"ngClass"],["id","userName","type","text","size","30","pInputText","","formControlName","userName",1,"w-100","p-inputtext","p-corner-all","p-state-default","p-widget"],["for","userName"],["id","password","type","password","size","30","pInputText","","formControlName","password",1,"w-100","p-inputtext","p-corner-all","p-state-default","p-widget"],["for","password"],[1,"form-check-label"],["type","checkbox","formControlName","remember",1,"form-check-input","remember"],[1,"text-end"],["type","submit",1,"btn","btn-primary",3,"disabled","ngClass"],["icon","power-off",1,"me-2"],["severity","warn","styleClass","w-100 mb-3","text","Session expired, please log in again",4,"ngIf"],["severity","success","styleClass","w-100 mb-3","text","You have successfully logged out",4,"ngIf"],["severity","warn","styleClass","w-100 mb-3","text","Session expired, please log in again"],["severity","success","styleClass","w-100 mb-3","text","You have successfully logged out"],["severity","error","text","Unable to log in, please check your username and password"]],template:function(o,n){if(1&o&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0)(2,"div",1)(3,"form",2),e.NdJ("ngSubmit",function(){return n.onLogin()}),e.TgZ(4,"h1"),e._UZ(5,"fa-icon",3),e._uU(6," Please sign in"),e.qZA(),e.TgZ(7,"p-card"),e.YNc(8,S,3,2,"ng-container",4),e.ALo(9,"async"),e.YNc(10,U,1,0,"p-message",5),e.TgZ(11,"p",6),e._uU(12,"Please enter your username and password."),e.qZA(),e.TgZ(13,"p",7),e._UZ(14,"input",8),e.TgZ(15,"label",9),e._uU(16,"Username"),e.qZA()(),e.TgZ(17,"p",7),e._UZ(18,"input",10),e.TgZ(19,"label",11),e._uU(20,"Password"),e.qZA()(),e.TgZ(21,"label",12),e._UZ(22,"input",13),e._uU(23," Remember my username "),e.qZA(),e.TgZ(24,"p-footer")(25,"div",14)(26,"button",15),e._UZ(27,"fa-icon",16),e._uU(28," Sign In "),e.qZA()()()()()()(),e._UZ(29,"app-footer")),2&o){let i,u;e.xp6(3),e.Q6J("formGroup",n.formMain),e.xp6(5),e.Q6J("ngIf",e.lcZ(9,7,n.authState$)),e.xp6(2),e.Q6J("ngIf",n.state().error),e.xp6(3),e.Q6J("ngClass",e.VKq(9,h,!(null==(i=n.formMain.get("userName"))||!i.value))),e.xp6(4),e.Q6J("ngClass",e.VKq(11,h,!(null==(u=n.formMain.get("userName"))||!u.value))),e.xp6(9),e.Q6J("disabled",n.formMain.invalid||n.state().waiting)("ngClass",e.VKq(13,T,n.state().waiting))}},dependencies:[l.mk,l.O5,y.$_,s.\u0275NgNoValidate,s.DefaultValueAccessor,s.CheckboxControlValueAccessor,s.NgControlStatus,s.NgControlStatusGroup,s.FormGroupDirective,s.FormControlName,c.Card,f.q,w.c,N.G,b.BN,l.Ov],encapsulation:2}),t})(),data:{title:"Home"}}]);var v=a(9771);let L=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,m.m8,s.FormsModule,s.ReactiveFormsModule,c.CardModule,f.O,I,v.eK,v.pc]}),t})()}}]);