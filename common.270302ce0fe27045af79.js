(self.webpackChunkgoatzilla=self.webpackChunkgoatzilla||[]).push([[592],{6226:(t,n,e)=>{"use strict";e.d(n,{W:()=>p});var o=e(3342),r=e(7716),i=e(6287),a=e(9277),c=e(8168),s=e(3935),g=e(2608),l=e(9171);const d=function(){return["/","me","account"]},u=["*"];let p=(()=>{class t{constructor(t,n){this.userService=t,this.appRouter=n}logout(){this.userService.logout().pipe((0,o.b)(()=>{this.appRouter.goToLogin()})).subscribe()}}return t.\u0275fac=function(n){return new(n||t)(r.Y36(i.UserService),r.Y36(a.So))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-authenticated-header"]],ngContentSelectors:u,decls:15,vars:3,consts:[[1,"flex"],[1,"content-area"],[1,"default-area"],[1,"ghost-button","more-actions",3,"matMenuTriggerFor"],["key","dots","size","lg",1,"dots-icon"],[1,"text-label"],["menu","matMenu"],["mat-menu-item","","cta","tertiary",3,"routerLink"],["mat-menu-item","","cta","tertiary",3,"click"]],template:function(t,n){if(1&t&&(r.F$t(),r.TgZ(0,"header",0),r._UZ(1,"app-logo"),r.TgZ(2,"div",1),r.Hsn(3),r.qZA(),r.TgZ(4,"div",2),r.TgZ(5,"button",3),r._UZ(6,"svg-icon",4),r.TgZ(7,"span",5),r._uU(8,"More actions"),r.qZA(),r.qZA(),r.TgZ(9,"mat-menu",null,6),r.TgZ(11,"a",7),r._uU(12,"Account"),r.qZA(),r.TgZ(13,"button",8),r.NdJ("click",function(){return n.logout()}),r._uU(14,"Logout"),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t){const t=r.MAs(10);r.xp6(5),r.Q6J("matMenuTriggerFor",t),r.xp6(6),r.Q6J("routerLink",r.DdM(2,d))}},directives:[c.R,s.p6,g.bk,s.VK,l.yS,s.OP],styles:["[_nghost-%COMP%]{display:block;overflow:hidden;background-color:var(--primary-transparent-color);color:var(--text-color-on-background);padding:var(--space-2);border-radius:var(--space-3)}@media (max-width:64em){[_nghost-%COMP%]{border-radius:0}}.content-area[_ngcontent-%COMP%]{flex-grow:1}.default-area[_ngcontent-%COMP%]{float:right;display:flex}.more-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;color:#fff;justify-content:center;outline-color:#fff}.more-actions[_ngcontent-%COMP%]   .text-label[_ngcontent-%COMP%]{display:none}.more-actions[_ngcontent-%COMP%]   .dots-icon[_ngcontent-%COMP%]{align-self:flex-end;transition:transform .2s ease-out}.more-actions[_ngcontent-%COMP%]:hover{justify-content:flex-start}.more-actions[_ngcontent-%COMP%]:hover   .text-label[_ngcontent-%COMP%]{display:inline-flex}.more-actions[_ngcontent-%COMP%]:hover   .dots-icon[_ngcontent-%COMP%]{transform:rotate(90deg)}.more-actions[_ngcontent-%COMP%]:focus:not(:active){justify-content:flex-start}.more-actions[_ngcontent-%COMP%]:focus:not(:active)   .text-label[_ngcontent-%COMP%]{display:inline-flex}.more-actions[_ngcontent-%COMP%]:focus:not(:active)   .dots-icon[_ngcontent-%COMP%]{transform:rotate(90deg)}"]}),t})()},6095:(t,n,e)=>{"use strict";e.d(n,{h:()=>u});var o=e(7716),r=e(8583),i=e(2608),a=e(9171),c=e(233);const s=["bookings",""],g=function(t){return[t]};function l(t,n){if(1&t&&(o.TgZ(0,"div",5),o.TgZ(1,"header",6),o.TgZ(2,"span",7),o._UZ(3,"svg-icon",8),o.ALo(4,"bookingType"),o.qZA(),o.TgZ(5,"span"),o._uU(6),o.qZA(),o.qZA(),o.TgZ(7,"div",9),o.TgZ(8,"div",10),o.TgZ(9,"h3",11),o._uU(10),o.qZA(),o.TgZ(11,"a",12),o._uU(12,"Open details"),o.qZA(),o.qZA(),o.TgZ(13,"div",13),o._UZ(14,"img",14),o.qZA(),o.qZA(),o.qZA()),2&t){const t=n.$implicit,e=o.oxw(2);o.xp6(3),o.Q6J("key",o.lcZ(4,6,t.type)),o.xp6(3),o.AsE("",t.startTime," - ",t.endTime,""),o.xp6(4),o.Oqu(t.provider),o.xp6(1),o.Q6J("routerLink",e.baseUrl.concat(o.VKq(8,g,t.id))),o.xp6(3),o.Q6J("src",t.image,o.LSH)}}function d(t,n){if(1&t&&(o.TgZ(0,"div",1),o.TgZ(1,"div",2),o.TgZ(2,"span"),o._uU(3),o.ALo(4,"date"),o.qZA(),o.TgZ(5,"span",3),o._uU(6),o.qZA(),o.qZA(),o.TgZ(7,"div"),o.YNc(8,l,15,10,"div",4),o.qZA(),o.qZA()),2&t){const t=n.$implicit;o.xp6(3),o.hij("",o.lcZ(4,4,t.date)," "),o.xp6(3),o.AsE("",t.bookings.length," ",t.bookings.length>1?"bookings":"booking",""),o.xp6(2),o.Q6J("ngForOf",t.bookings)}}let u=(()=>{class t{constructor(){this.bookings=[],this.baseUrl=[]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-booking-list","bookings",""]],inputs:{bookings:"bookings",baseUrl:"baseUrl"},attrs:s,decls:1,vars:1,consts:[["class","card mb-3",4,"ngFor","ngForOf"],[1,"card","mb-3"],[1,"date-badge","mb-1"],[1,"ml-3"],["class","booking mb-4",4,"ngFor","ngForOf"],[1,"booking","mb-4"],[1,"mb-1","flex"],[1,"mr-2","booking-icon"],["size","lg",3,"key"],[1,"flex"],[1,"info-container"],[1,"mr-2","h5"],["cta","tertiary",1,"block","link",3,"routerLink"],[1,"img-container"],[3,"src"]],template:function(t,n){1&t&&o.YNc(0,d,9,6,"div",0),2&t&&o.Q6J("ngForOf",n.bookings)},directives:[r.sg,i.bk,a.yS],pipes:[r.uU,c.$],styles:[".booking[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid var(--text-color);padding-bottom:var(--space-1)}.date-badge[_ngcontent-%COMP%]{padding:var(--space-1);background-color:var(--secondary-transparent-color);color:var(--text-color-on-background);font-weight:700;border-radius:var(--space-1)}.info-container[_ngcontent-%COMP%]{flex-grow:1}.info-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{padding-left:0}.img-container[_ngcontent-%COMP%]{max-width:60%;max-height:200px;overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:10px}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;border-radius:10px}@media (max-width:64em){.img-container[_ngcontent-%COMP%]{max-width:35%;max-height:100px}}"],changeDetection:0}),t})()},233:(t,n,e)=>{"use strict";e.d(n,{$:()=>r});var o=e(7716);let r=(()=>{class t{transform(t){switch(t){case"flight":return"plane";default:return t}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=o.Yjl({name:"bookingType",type:t,pure:!0}),t})()}}]);