(self.webpackChunkgoatzilla=self.webpackChunkgoatzilla||[]).push([[317],{5317:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ProjectDataService:()=>w,ProjectsModule:()=>Y,ProjectsService:()=>v});var i=r(6266),a=r(7853),n=r(2696),o=r(5917),s=r(8002);function c(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function p(t){c(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function g(t){return c(1,arguments),p(t).getTime()<Date.now()}var d=r(7716),l=r(6215);function u(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function m(t,e){c(2,arguments);var r=p(t),i=u(e);return isNaN(i)?new Date(NaN):i?(r.setDate(r.getDate()+i),r):r}function h(t,e){c(2,arguments);var r=u(e);return m(t,-r)}const Z=new Date,f={1:{id:"1",name:"Project 1",image:"",start:h(Z,55).toUTCString(),end:m(Z,25).toUTCString()},2:{id:"2",name:"Project 2",image:"",start:h(Z,55).toUTCString(),end:h(Z,5).toUTCString()},3:{id:"3",name:"Project 3",image:"",start:h(Z,55).toUTCString(),end:m(Z,5).toUTCString()}};let v=(()=>{class t{constructor(t){this.appRouter=t,this.projects$=new l.X(f)}getProjects(){return this.projects$.asObservable().pipe((0,s.U)(t=>Object.values(t)))}getActiveProject(){const t=this.appRouter.getProjectId();return this.projects$.asObservable().pipe((0,s.U)(e=>e[t]))}}return t.\u0275fac=function(e){return new(e||t)(d.LFG(a.So))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const T=function(t){return[t]};function j(t,e){if(1&t&&(d.TgZ(0,"div",9),d.TgZ(1,"h2",10),d._uU(2),d.qZA(),d.TgZ(3,"div",11),d.TgZ(4,"span"),d._uU(5),d.ALo(6,"date"),d.qZA(),d._uU(7," - "),d.TgZ(8,"span"),d._uU(9),d.ALo(10,"date"),d.qZA(),d.qZA(),d.TgZ(11,"div"),d.TgZ(12,"a",12),d._uU(13,"Open"),d.qZA(),d.qZA(),d.qZA()),2&t){const t=e.$implicit;d.xp6(2),d.Oqu(t.name),d.xp6(3),d.Oqu(d.lcZ(6,4,t.start)),d.xp6(4),d.Oqu(d.lcZ(10,6,t.end)),d.xp6(3),d.Q6J("routerLink",d.VKq(8,T,t.id))}}function U(t,e){if(1&t&&(d.TgZ(0,"div",9),d.TgZ(1,"h2",10),d._uU(2),d.qZA(),d.TgZ(3,"div",11),d.TgZ(4,"span"),d._uU(5),d.ALo(6,"date"),d.qZA(),d._uU(7," - "),d.TgZ(8,"span"),d._uU(9),d.ALo(10,"date"),d.qZA(),d.qZA(),d.TgZ(11,"div"),d.TgZ(12,"a",12),d._uU(13,"Open"),d.qZA(),d.qZA(),d.qZA()),2&t){const t=e.$implicit;d.xp6(2),d.Oqu(t.name),d.xp6(3),d.Oqu(d.lcZ(6,4,t.start)),d.xp6(4),d.Oqu(d.lcZ(10,6,t.end)),d.xp6(3),d.Q6J("routerLink",d.VKq(8,T,t.id))}}let A=(()=>{class t{constructor(t){this.projectService=t,this.activeProjects$=(0,o.of)([]),this.pastProjects$=(0,o.of)([])}ngOnInit(){this.activeProjects$=this.projectService.getProjects().pipe((0,s.U)(t=>t.filter(t=>!g(new Date(t.end))))),this.pastProjects$=this.projectService.getProjects().pipe((0,s.U)(t=>t.filter(t=>g(new Date(t.end)))))}}return t.\u0275fac=function(e){return new(e||t)(d.Y36(v))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-projects-list"]],decls:18,vars:6,consts:[[1,"centered-content","padded-container"],[1,"mb-2"],[1,"mb-2","mt-1","mobile-mb-1","main-heading","flex","align-center"],["key","notes","size","lg",1,"projects-icon"],[1,"h2","ml-1"],[1,"mb-4"],[1,"mb-2","h4","heading"],[1,"card-container","wrap"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"h5","mb-1"],[1,"mb-1","small-text","italic"],["cta","tertiary",3,"routerLink"]],template:function(t,e){1&t&&(d.TgZ(0,"article",0),d._UZ(1,"app-authenticated-header",1),d.TgZ(2,"div",2),d._UZ(3,"svg-icon",3),d.TgZ(4,"h1",4),d._uU(5,"Projects"),d.qZA(),d.qZA(),d.TgZ(6,"section",5),d.TgZ(7,"h2",6),d._uU(8,"Active"),d.qZA(),d.TgZ(9,"div",7),d.YNc(10,j,14,10,"div",8),d.ALo(11,"async"),d.qZA(),d.qZA(),d.TgZ(12,"section"),d.TgZ(13,"h2",6),d._uU(14,"Past"),d.qZA(),d.TgZ(15,"div",7),d.YNc(16,U,14,10,"div",8),d.ALo(17,"async"),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.xp6(10),d.Q6J("ngForOf",d.lcZ(11,2,e.activeProjects$)),d.xp6(6),d.Q6J("ngForOf",d.lcZ(17,4,e.pastProjects$)))},styles:["[_nghost-%COMP%]   .main-heading[_ngcontent-%COMP%]{padding:0 var(--space-1)}[_nghost-%COMP%]   .main-heading[_ngcontent-%COMP%]   .projects-icon[_ngcontent-%COMP%]{color:var(--secondary-color)}[_nghost-%COMP%]   .heading[_ngcontent-%COMP%]{padding:var(--space-1);border-radius:10px;background-color:var(--neutral-transparent-color)}@media (max-width:64em){[_nghost-%COMP%]   .heading[_ngcontent-%COMP%]{padding:var(--space-1);border-radius:0}[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]{padding:0 var(--space-1)}[_nghost-%COMP%]   .padded-content[_ngcontent-%COMP%]{padding-bottom:var(--space-2)}}"]}),t})();function y(t){c(1,arguments);var e=p(t);return e.setHours(0,0,0,0),e}function b(t,e){c(2,arguments);var r=y(t),i=y(e);return r.getTime()===i.getTime()}function q(t){return c(1,arguments),b(t,Date.now())}var k=r(739),P=r(5257),_=r(3190);function S(t,e){c(2,arguments);var r=p(t),i=p(e);return r.getTime()>i.getTime()}const O=new Date,D={1:{id:"1",projectId:"1",type:"flight",startDate:h(O,5).toUTCString(),startTime:"11:30",endDate:h(O,5).toUTCString(),endTime:"13:30",provider:"Austrian airlines",participants:["1","2","8"],from:"London - Heathrow",to:"Paris De Gaul",image:"assets/booking-images/flight1.jpg"},2:{id:"2",projectId:"1",type:"hotel",startDate:h(O,5).toUTCString(),startTime:"14:00",endDate:h(O,4).toUTCString(),endTime:"12:00",provider:"Sofia grand hotel",participants:["1","2","6"],city:"Sofia",address:"Tsar Osvoboditel 13",image:"assets/booking-images/hotel1.jpg"},3:{id:"3",projectId:"2",type:"ferry",startDate:h(O,3).toUTCString(),startTime:" 14:00",endDate:h(O,3).toUTCString(),endTime:"16:00",provider:"Sharky fella",participants:["5","7"],from:"Istanbul port 1",to:"Istanbul port 2",image:"assets/booking-images/ferry1.jpg"},4:{id:"4",projectId:"3",type:"train",startDate:O.toUTCString(),startTime:"09:00",endDate:O.toUTCString(),endTime:"19:00",provider:"Old Tomm",participants:["3","4","7"],from:"Moscow",to:"St Petersburg",image:"assets/booking-images/train1.jpg"},5:{id:"5",projectId:"1",type:"flight",startDate:O.toUTCString(),startTime:"11:30",endDate:O.toUTCString(),endTime:"13:25",provider:"Qatar airlines",participants:["1","2"],from:"London - Heathrow",to:"Paris De Gaul",image:"assets/booking-images/flight2.jpg"},6:{id:"6",projectId:"1",type:"flight",startDate:m(O,1).toUTCString(),startTime:"09:30",endDate:m(O,1).toUTCString(),endTime:"14:45",provider:"Qatar airlines",participants:["1","2"],from:"Vienna airport",to:"Qatar",image:"assets/booking-images/flight3.jpg"},7:{id:"7",projectId:"1",type:"train",startDate:m(O,1).toUTCString(),startTime:"09:30",endDate:m(O,2).toUTCString(),endTime:"11:00",provider:"Qatar train services",participants:["1","2"],from:"Qatar central station",to:"Bangalore",image:"assets/booking-images/train1.jpg"},8:{id:"8",projectId:"1",type:"ferry",startDate:m(O,3).toUTCString(),startTime:"09:30",endDate:m(O,3).toUTCString(),endTime:"22:00",provider:"Indian ferry services",participants:["1","2","3","4"],from:"Bangalore port",to:"New Zealand",image:"assets/booking-images/ferry2.jpg"},9:{id:"9",projectId:"1",type:"hotel",startDate:m(O,5).toUTCString(),startTime:"12:00",endDate:m(O,7).toUTCString(),endTime:"11:00",provider:"K West Hotel and Spa",participants:["1","2","3","4"],city:"London",address:"Richmond Way, London W14 0AX",image:"assets/booking-images/hotel4.jpg"}},C={1:{id:"1",projectId:"1",firstName:"John",lastName:"Simmons",email:"johns@gmail.com",phone:"447969899667"},2:{id:"2",projectId:"1",firstName:"Jean",lastName:"Tennesy",email:"jeant@hotmail.com",phone:"441235995998"},3:{id:"3",projectId:"3",firstName:"Eric",lastName:"Gartner",email:"ericg@hotmail.com",phone:"441229745677"},4:{id:"4",projectId:"3",firstName:"Vanessa",lastName:"Hughes",email:"vanhughes@gmail.com",phone:"447969888777"},5:{id:"5",projectId:"2",firstName:"Patrick",lastName:"Rothfuss",email:"nottodaypat@yahoo.com",phone:"447969844776"},6:{id:"6",projectId:"2",firstName:"Patricia",lastName:"Gates",email:"patgates55@yahoo.com",phone:"447977158757"},7:{id:"7",projectId:"3",firstName:"Ivan",lastName:"Orlov",email:"luckychicken@gmail.com",phone:"447989555444"},8:{id:"8",projectId:"1",firstName:"Charlotte",lastName:"Baby",email:"cbaby@hotmail.com",phone:"447475332211"},9:{id:"9",projectId:"1",firstName:"Jake",lastName:"Heart",email:"jakeh@hotmail.com",phone:"447798554669"},10:{id:"10",projectId:"1",firstName:"Chloe",lastName:"Fartlec",email:"chloef@hotmail.com",phone:"447897457221"}};let w=(()=>{class t{constructor(t,e){this.appRouter=t,this.projectService=e,this.participants$=new l.X(C),this.bookings$=new l.X(D),this._favoriteParticipants$=new l.X(["1"]),this.favoriteParticipants$=this._favoriteParticipants$.asObservable(),this.sortParticipantsByFavorites=t=>{const e=this._favoriteParticipants$.getValue();return[...t].sort((t,r)=>{const i=e.includes(t.id),a=e.includes(r.id);return i&&!a?-1:a&&!i?1:0})}}addToFavorites(t){return this.favoriteParticipants$.pipe((0,P.q)(1),(0,s.U)(e=>{const r=[...e,t];return this._favoriteParticipants$.next(r),r}))}removeFromFavorites(t){return this.favoriteParticipants$.pipe((0,P.q)(1),(0,s.U)(e=>{const r=e.filter(e=>e!==t);return this._favoriteParticipants$.next(r),r}))}getParticipants(){return(0,k.aj)([this.participants$,this.projectService.getActiveProject()]).pipe((0,s.U)(([t,e])=>Object.values(t).filter(t=>t.projectId===(null==e?void 0:e.id))),(0,s.U)(this.sortParticipantsByName),(0,s.U)(this.sortParticipantsByFavorites))}getBookingParticipants(t){return(0,k.aj)([this.getParticipants(),this.getBookingById(t)]).pipe((0,s.U)(([t,e])=>t.filter(t=>e.participants.includes(t.id))))}getActiveParticipant(){const t=this.appRouter.getParticipantId();return this.participants$.asObservable().pipe((0,s.U)(e=>e[t]))}getBookings(){return(0,k.aj)([this.bookings$,this.projectService.getActiveProject()]).pipe((0,s.U)(([t,e])=>Object.values(t).filter(t=>t.projectId===(null==e?void 0:e.id))))}getBookingsByParticipantId(t){return this.getBookings().pipe((0,s.U)(e=>e.filter(e=>e.participants.includes(t))))}createBookingGroups(t){const e=t.reduce((t,e)=>{const r=e.startDate,i=e.endDate,a=r!==i,n=t[r]||[],o=t[i]||[];return n.push(e),a&&o.push(e),t[r]=n,a&&(t[i]=o),t},{});return Object.keys(e).map(t=>({date:t,bookings:e[t]}))}getBookingGroupsByDate(){return this.getBookings().pipe((0,s.U)(this.createBookingGroups),(0,s.U)(this.sortBookingGroups))}getBookingGroupsForParticipant(){return this.getActiveParticipant().pipe((0,_.w)(t=>this.getBookingsByParticipantId(t.id)),(0,s.U)(t=>this.createBookingGroups(t)),(0,s.U)(this.sortBookingGroups))}sortParticipantsByName(t){return[...t].sort((t,e)=>{const r=t.firstName.charAt(0),i=e.firstName.charAt(0);return r>i?1:i>r?-1:0})}sortBookingGroups(t){return[...t].sort((t,e)=>{const r=new Date(t.date),i=new Date(e.date);return S(r,i)?1:S(i,r)?-1:0})}getActiveBooking(){const t=this.appRouter.getBookingId();return this.bookings$.asObservable().pipe((0,s.U)(e=>e[t]))}getBookingById(t){return this.bookings$.asObservable().pipe((0,s.U)(e=>e[t]))}}return t.\u0275fac=function(e){return new(e||t)(d.LFG(a.So),d.LFG(v))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac}),t})();const x=function(t){return["itinerary",t]};function B(t,e){if(1&t&&(d.TgZ(0,"div",23),d.TgZ(1,"span",16),d._uU(2,"|"),d.qZA(),d.TgZ(3,"a",24),d._uU(4),d.qZA(),d.qZA()),2&t){const t=e.$implicit;d.xp6(3),d.Q6J("routerLink",d.VKq(2,x,t.id)),d.xp6(1),d.Oqu(t.provider)}}function N(t,e){if(1&t&&(d.TgZ(0,"div",23),d.TgZ(1,"span",16),d._uU(2,"|"),d.qZA(),d.TgZ(3,"a",24),d._uU(4),d.qZA(),d.qZA()),2&t){const t=e.$implicit;d.xp6(3),d.Q6J("routerLink",d.VKq(2,x,t.id)),d.xp6(1),d.Oqu(t.provider)}}function I(t,e){if(1&t&&(d.TgZ(0,"div",23),d.TgZ(1,"span",16),d._uU(2,"|"),d.qZA(),d.TgZ(3,"a",24),d._uU(4),d.qZA(),d.qZA()),2&t){const t=e.$implicit;d.xp6(3),d.Q6J("routerLink",d.VKq(2,x,t.id)),d.xp6(1),d.Oqu(t.provider)}}function $(t,e){if(1&t&&(d.TgZ(0,"div"),d.TgZ(1,"h1",5),d._uU(2),d.qZA(),d.TgZ(3,"div",6),d.TgZ(4,"div",7),d.TgZ(5,"a",8),d._UZ(6,"svg-icon",9),d.TgZ(7,"span"),d._uU(8,"Itinerary"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(9,"div",7),d.TgZ(10,"a",10),d._UZ(11,"svg-icon",11),d.TgZ(12,"span"),d._uU(13,"Participants"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(14,"div"),d.TgZ(15,"a",12),d._UZ(16,"svg-icon",13),d.TgZ(17,"span"),d._uU(18,"Sharing center"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(19,"section",14),d.TgZ(20,"h2",15),d.TgZ(21,"span",16),d._UZ(22,"svg-icon",17),d.qZA(),d.TgZ(23,"span"),d._uU(24,"Heartbeat"),d.qZA(),d.qZA(),d.TgZ(25,"section",18),d.TgZ(26,"h3",19),d._uU(27,"Past 7 days"),d.qZA(),d.YNc(28,B,5,4,"div",20),d.ALo(29,"async"),d.TgZ(30,"span",21),d._uU(31,"..."),d.qZA(),d.qZA(),d.TgZ(32,"section",22),d.TgZ(33,"h3",19),d._uU(34,"Today"),d.qZA(),d.YNc(35,N,5,4,"div",20),d.ALo(36,"async"),d.TgZ(37,"span",21),d._uU(38,"..."),d.qZA(),d.qZA(),d.TgZ(39,"section",6),d.TgZ(40,"h3",19),d._uU(41,"Next 7 days"),d.qZA(),d.YNc(42,I,5,4,"div",20),d.ALo(43,"async"),d.TgZ(44,"span",21),d._uU(45,"..."),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t){const t=e.ngIf,r=d.oxw();d.xp6(2),d.Oqu(t.name),d.xp6(26),d.Q6J("ngForOf",d.lcZ(29,4,r.pastBookings$)),d.xp6(7),d.Q6J("ngForOf",d.lcZ(36,6,r.todayBookings$)),d.xp6(7),d.Q6J("ngForOf",d.lcZ(43,8,r.upcomingBookings$))}}let M=(()=>{class t{constructor(t,e){this.projectService=t,this.projectDataService=e,this.project$=this.projectService.getActiveProject(),this.pastBookings$=this.projectDataService.getBookings().pipe((0,s.U)(t=>t.filter(t=>!q(new Date(t.startDate))&&g(new Date(t.startDate)))),(0,s.U)(t=>t.slice(0,3))),this.todayBookings$=this.projectDataService.getBookings().pipe((0,s.U)(t=>t.filter(t=>q(new Date(t.startDate)))),(0,s.U)(t=>t.slice(0,3))),this.upcomingBookings$=this.projectDataService.getBookings().pipe((0,s.U)(t=>t.filter(t=>!q(new Date(t.startDate))&&function(t){return c(1,arguments),p(t).getTime()>Date.now()}(new Date(t.startDate)))),(0,s.U)(t=>t.slice(0,3)))}}return t.\u0275fac=function(e){return new(e||t)(d.Y36(v),d.Y36(w))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-project-details"]],decls:10,vars:3,consts:[[1,"centered-content","padded-container"],[1,"mb-2"],["routerLink","../","cta","tertiary",1,"mr-3","inline-flex","align-center"],["key","back",1,"mr-1"],[4,"ngIf"],[1,"mb-1","h2"],[1,"flex"],[1,"mr-3"],["routerLink","itinerary","cta","tertiary",1,"align-center"],["key","itinerary","size","lg",1,"mr-1"],["routerLink","participants","cta","tertiary",1,"align-center"],["key","people",1,"mr-1"],["routerLink","sharing","cta","tertiary",1,"align-center"],["key","share-center",1,"mr-1"],[1,"card","mt-4"],[1,"mb-3","h4","flex","align-center"],[1,"mr-1"],["key","heartbeat","size","xl",1,"heartbeat-icon"],[1,"mb-3","flex","align-center"],[1,"h5","mr-2"],["class","ml-1",4,"ngFor","ngForOf"],[1,"ml-2"],[1,"mb-3","flex"],[1,"ml-1"],[3,"routerLink"]],template:function(t,e){1&t&&(d.TgZ(0,"main",0),d._UZ(1,"app-authenticated-header"),d.TgZ(2,"div",1),d.TgZ(3,"a",2),d.TgZ(4,"span"),d._UZ(5,"svg-icon",3),d.qZA(),d.TgZ(6,"span"),d._uU(7,"Back to projects"),d.qZA(),d.qZA(),d.qZA(),d.YNc(8,$,46,10,"div",4),d.ALo(9,"async"),d.qZA()),2&t&&(d.xp6(8),d.Q6J("ngIf",d.lcZ(9,1,e.project$)))},styles:[".heartbeat-icon[_ngcontent-%COMP%]{color:var(--secondary-color)}"]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-project-context"]],features:[d._Bn([w])],decls:1,vars:0,template:function(t,e){1&t&&d._UZ(0,"router-outlet")},directives:[i.lC],styles:[""]}),t})();var F=r(6226),J=r(2608),Q=r(8583);const G=[{path:"",component:L,children:[{path:"",component:A},{path:":projectId",pathMatch:"exact",component:M},{path:":projectId/itinerary",loadChildren:()=>Promise.all([r.e(592),r.e(438)]).then(r.bind(r,438)).then(t=>t.ItineraryModule)},{path:":projectId/participants",loadChildren:()=>Promise.all([r.e(592),r.e(850)]).then(r.bind(r,4850)).then(t=>t.ParticipantsModule)},{path:":projectId/sharing",loadChildren:()=>r.e(46).then(r.bind(r,4046)).then(t=>t.DataSharingModule)},{path:"**",redirectTo:""}]}];let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[a.m8,i.Bz.forChild(G),n.p],i.Bz]}),t})();d.B6R(A,[F.W,J.bk,Q.sg,i.yS],[Q.Ov,Q.uU]),d.B6R(M,[F.W,i.yS,J.bk,Q.O5,Q.sg],[Q.Ov])},6226:(t,e,r)=>{"use strict";r.d(e,{W:()=>d});var i=r(3342),a=r(7716),n=r(6287),o=r(7853),s=r(8168),c=r(2984),p=r(2608);const g=["*"];let d=(()=>{class t{constructor(t,e){this.userService=t,this.appRouter=e}logout(){this.userService.logout().pipe((0,i.b)(()=>{this.appRouter.goToLogin()})).subscribe()}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(n.UserService),a.Y36(o.So))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-authenticated-header"]],ngContentSelectors:g,decls:13,vars:1,consts:[[1,"flex"],[1,"content-area"],[1,"default-area"],[1,"ghost-button","more-actions",3,"matMenuTriggerFor"],["key","dots","size","lg"],[1,"text-label","mt-1"],["menu","matMenu"],["mat-menu-item","","cta","outlined",3,"click"]],template:function(t,e){if(1&t&&(a.F$t(),a.TgZ(0,"header",0),a._UZ(1,"app-logo"),a.TgZ(2,"div",1),a.Hsn(3),a.qZA(),a.TgZ(4,"div",2),a.TgZ(5,"button",3),a._UZ(6,"svg-icon",4),a.TgZ(7,"span",5),a._uU(8,"More actions"),a.qZA(),a.qZA(),a.TgZ(9,"mat-menu",null,6),a.TgZ(11,"button",7),a.NdJ("click",function(){return e.logout()}),a._uU(12,"Logout"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t){const t=a.MAs(10);a.xp6(5),a.Q6J("matMenuTriggerFor",t)}},directives:[s.R,c.p6,p.bk,c.VK,c.OP],styles:["[_nghost-%COMP%]{display:block;overflow:hidden;background-color:var(--primary-transparent-color);color:var(--text-color-on-background);padding:var(--space-2);border-radius:var(--space-3)}@media (max-width:64em){[_nghost-%COMP%]{border-radius:0}}.content-area[_ngcontent-%COMP%]{flex-grow:1}.default-area[_ngcontent-%COMP%]{float:right;display:flex}.more-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff}"]}),t})()}}]);