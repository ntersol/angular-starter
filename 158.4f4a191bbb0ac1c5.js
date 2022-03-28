"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[158],{3158:(x,p,r)=>{r.r(p),r.d(p,{UsersModule:()=>O});var i=r(9808),g=r(9236),a=r(4404),d=r(655),Z=r(4611),m=r(5577),t=r(5e3),c=r(4934),l=r(520);let h=(()=>{class e{constructor(s){this.http=s,this.store=(0,c.W_)(this.http,{apiUrlBase:"https://jsonplaceholder.typicode.com"}),this.users=this.store({apiUrl:"/users",uniqueId:"id"})}}return e.\u0275fac=function(s){return new(s||e)(t.LFG(l.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function A(e,n){if(1&e&&(t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"a",3),t._uU(3,"Back to users"),t.qZA(),t.TgZ(4,"h1"),t._UZ(5,"i",4),t._uU(6),t.qZA(),t.TgZ(7,"div",5),t.TgZ(8,"div",6),t.TgZ(9,"table",7),t.TgZ(10,"tbody"),t.TgZ(11,"tr"),t.TgZ(12,"td"),t.TgZ(13,"strong"),t._uU(14,"Name"),t.qZA(),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.qZA(),t.TgZ(17,"tr"),t.TgZ(18,"td"),t.TgZ(19,"strong"),t._uU(20,"Email"),t.qZA(),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.qZA(),t.TgZ(23,"tr"),t.TgZ(24,"td"),t.TgZ(25,"strong"),t._uU(26,"Website"),t.qZA(),t.qZA(),t.TgZ(27,"td"),t._uU(28),t.qZA(),t.qZA(),t.TgZ(29,"tr"),t.TgZ(30,"td"),t.TgZ(31,"strong"),t._uU(32,"Phone Number"),t.qZA(),t.qZA(),t.TgZ(33,"td"),t._uU(34),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const s=n.ngIf;t.xp6(6),t.hij(" ",s.name,""),t.xp6(10),t.Oqu(s.name),t.xp6(6),t.Oqu(s.email),t.xp6(6),t.Oqu(s.website),t.xp6(6),t.Oqu(s.phone)}}let o=class{constructor(n,s){this.route=n,this.api=s,this.user$=this.route.params.pipe((0,Z.t)(this),(0,m.z)(u=>this.api.http.get("https://jsonplaceholder.typicode.com/users/"+u.userId)))}ngOnInit(){}ngOnDestroy(){}};o.\u0275fac=function(n){return new(n||o)(t.Y36(a.gz),t.Y36(h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-user"]],decls:2,vars:3,consts:[["class","container mt-3",4,"ngIf"],[1,"container","mt-3"],[2,"max-width","480px","margin","auto"],["routerLink","/users/",1,"float-end"],[1,"fas","fa-user"],[1,"card"],[1,"card-body"],[1,"table","table-sm","table-striped","mb-0"]],template:function(n,s){1&n&&(t.YNc(0,A,35,5,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,s.user$))},directives:[i.O5,a.yS],pipes:[i.Ov],styles:[""],changeDetection:0}),o=(0,d.gn)([(0,Z.c)()],o);let f=(()=>{class e{constructor(s){this.http=s,this.store=(0,c.W_)(this.http),this.users=this.store({uniqueId:"id",apiUrl:"https://jsonplaceholder.typicode.com/users"})}}return e.\u0275fac=function(s){return new(s||e)(t.LFG(l.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const T=function(e){return[e]};function U(e,n){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t.TgZ(2,"a",9),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.qZA()),2&e){const s=n.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(5,T,"./"+s.id)),t.xp6(1),t.Oqu(s.name),t.xp6(2),t.Oqu(s.phone),t.xp6(2),t.Oqu(s.email),t.xp6(2),t.Oqu(s.website)}}function q(e,n){if(1&e&&(t.TgZ(0,"table",7),t.TgZ(1,"thead"),t.TgZ(2,"tr"),t.TgZ(3,"th"),t._uU(4,"Name"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Phone"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Email"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Website"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"tbody"),t.YNc(12,U,10,7,"tr",8),t.qZA(),t.qZA()),2&e){const s=t.oxw().ngIf;t.xp6(12),t.Q6J("ngForOf",s.data)}}function v(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"No users found"),t.qZA())}function y(e,n){if(1&e&&(t.TgZ(0,"div",1),t.TgZ(1,"h1"),t._UZ(2,"i",2),t._uU(3," List of users"),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"nts-api-state",5),t.YNc(7,q,13,1,"table",6),t.qZA(),t.YNc(8,v,2,0,"ng-template"),t.qZA(),t.qZA(),t.qZA()),2&e){const s=n.ngIf;t.xp6(6),t.Q6J("state",s),t.xp6(1),t.Q6J("ngIf",!(null==s.data||!s.data.length))}}const _=a.Bz.forChild([{path:":userId",component:o,data:{title:"Users"}},{path:"",component:(()=>{class e{constructor(s){this.api=s,this.users=this.api.users}ngOnInit(){this.users.refresh().subscribe()}ngOnDestroy(){}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-users"]],decls:2,vars:3,consts:[["class","container mt-3",4,"ngIf"],[1,"container","mt-3"],[1,"fas","fa-users"],[1,"card"],[1,"card-body"],[3,"state"],["class","table table-sm table-striped mb-0",4,"ngIf"],[1,"table","table-sm","table-striped","mb-0"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(s,u){1&s&&(t.YNc(0,y,9,2,"div",0),t.ALo(1,"async")),2&s&&t.Q6J("ngIf",t.lcZ(1,1,u.users.state$))},directives:[i.O5,c.$U,i.sg,a.yS],pipes:[i.Ov],styles:[""],changeDetection:0}),e})(),data:{title:"Users"}}]);let O=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez,g.U,_,c.bp]]}),e})()}}]);