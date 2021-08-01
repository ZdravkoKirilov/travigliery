(self.webpackChunkgoatzilla=self.webpackChunkgoatzilla||[]).push([[231],{3463:(t,e,r)=>{"use strict";function a(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}r.d(e,{Z:()=>a})},207:(t,e,r)=>{"use strict";function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}r.d(e,{Z:()=>a})},3246:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var a=r(4513),n=r(3463);function i(t){(0,n.Z)(1,arguments);var e=(0,a.Z)(t);return!isNaN(e)}},331:(t,e,r)=>{"use strict";r.d(e,{Z:()=>d});var a=r(207),n=r(3463),i=36e5,o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},s=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,c=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,p=/^([+-])(\d{2})(?::?(\d{2}))?$/;function d(t,e){(0,n.Z)(1,arguments);var r=e||{},i=null==r.additionalDigits?2:(0,a.Z)(r.additionalDigits);if(2!==i&&1!==i&&0!==i)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var o,s=u(t);if(s.date){var c=g(s.date,i);o=l(c.restDateString,c.year)}if(isNaN(o)||!o)return new Date(NaN);var p,d=o.getTime(),m=0;if(s.time&&(m=h(s.time),isNaN(m)||null===m))return new Date(NaN);if(!s.timezone){var f=new Date(d+m),Z=new Date(0);return Z.setFullYear(f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate()),Z.setHours(f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds(),f.getUTCMilliseconds()),Z}return p=v(s.timezone),isNaN(p)?new Date(NaN):new Date(d+m+p)}function u(t){var e,r={},a=t.split(o.dateTimeDelimiter);if(a.length>2)return r;if(/:/.test(a[0])?(r.date=null,e=a[0]):(r.date=a[0],e=a[1],o.timeZoneDelimiter.test(r.date)&&(r.date=t.split(o.timeZoneDelimiter)[0],e=t.substr(r.date.length,t.length))),e){var n=o.timezone.exec(e);n?(r.time=e.replace(n[1],""),r.timezone=n[1]):r.time=e}return r}function g(t,e){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),a=t.match(r);if(!a)return{year:null};var n=a[1]&&parseInt(a[1]),i=a[2]&&parseInt(a[2]);return{year:null==i?n:100*i,restDateString:t.slice((a[1]||a[2]).length)}}function l(t,e){if(null===e)return null;var r=t.match(s);if(!r)return null;var a=!!r[4],n=m(r[1]),i=m(r[2])-1,o=m(r[3]),c=m(r[4]),p=m(r[5])-1;if(a)return function(t,e,r){return e>=1&&e<=53&&r>=0&&r<=6}(0,c,p)?function(t,e,r){var a=new Date(0);a.setUTCFullYear(t,0,4);var n=7*(e-1)+r+1-(a.getUTCDay()||7);return a.setUTCDate(a.getUTCDate()+n),a}(e,c,p):new Date(NaN);var d=new Date(0);return function(t,e,r){return e>=0&&e<=11&&r>=1&&r<=(Z[e]||(T(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(T(t)?366:365)}(e,n)?(d.setUTCFullYear(e,i,Math.max(n,o)),d):new Date(NaN)}function m(t){return t?parseInt(t):1}function h(t){var e=t.match(c);if(!e)return null;var r=f(e[1]),a=f(e[2]),n=f(e[3]);return function(t,e,r){return 24===t?0===e&&0===r:r>=0&&r<60&&e>=0&&e<60&&t>=0&&t<25}(r,a,n)?r*i+6e4*a+1e3*n:NaN}function f(t){return t&&parseFloat(t.replace(",","."))||0}function v(t){if("Z"===t)return 0;var e=t.match(p);if(!e)return 0;var r="+"===e[1]?-1:1,a=parseInt(e[2]),n=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,n)?r*(a*i+6e4*n):NaN}var Z=[31,null,31,30,31,30,31,31,30,31,30,31];function T(t){return t%400==0||t%4==0&&t%100}},4513:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});var a=r(3463);function n(t){(0,a.Z)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},7057:(t,e,r)=>{"use strict";r.d(e,{M:()=>i});var a=r(5197),n=r(509);function i(...t){return e=>{let r;return"function"==typeof t[t.length-1]&&(r=t.pop()),e.lift(new o(t,r))}}class o{constructor(t,e){this.observables=t,this.project=e}call(t,e){return e.subscribe(new s(t,this.observables,this.project))}}class s extends a.L{constructor(t,e,r){super(t),this.observables=e,this.project=r,this.toRespond=[];const a=e.length;this.values=new Array(a);for(let n=0;n<a;n++)this.toRespond.push(n);for(let i=0;i<a;i++)this.add((0,n.D)(this,e[i],void 0,i))}notifyNext(t,e,r){this.values[r]=e;const a=this.toRespond;if(a.length>0){const t=a.indexOf(r);-1!==t&&a.splice(t,1)}}notifyComplete(){}_next(t){if(0===this.toRespond.length){const e=[t,...this.values];this.project?this._tryProject(e):this.destination.next(e)}}_tryProject(t){let e;try{e=this.project.apply(this,t)}catch(r){return void this.destination.error(r)}this.destination.next(e)}}},6231:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ProjectDataService:()=>M,ProjectsModule:()=>H,ProjectsService:()=>Z});var a=r(9171),n=r(9277),i=r(7696),o=r(5917),s=r(8002),c=r(4513),p=r(3463);function d(t){return(0,p.Z)(1,arguments),(0,c.Z)(t).getTime()<Date.now()}var u=r(7716),g=r(6215),l=r(207);function m(t,e){(0,p.Z)(2,arguments);var r=(0,c.Z)(t),a=(0,l.Z)(e);return isNaN(a)?new Date(NaN):a?(r.setDate(r.getDate()+a),r):r}function h(t,e){(0,p.Z)(2,arguments);var r=(0,l.Z)(e);return m(t,-r)}const f=new Date,v={1:{id:"1",name:"Project 1",image:"",start:h(f,55).toUTCString(),end:m(f,25).toUTCString()},2:{id:"2",name:"Project 2",image:"",start:h(f,55).toUTCString(),end:h(f,5).toUTCString()},3:{id:"3",name:"Project 3",image:"",start:h(f,55).toUTCString(),end:m(f,5).toUTCString()}};let Z=(()=>{class t{constructor(t){this.appRouter=t,this.projects$=new g.X(v)}getProjects(){return this.projects$.asObservable().pipe((0,s.U)(t=>Object.values(t)))}getActiveProject(){const t=this.appRouter.getProjectId();return this.projects$.asObservable().pipe((0,s.U)(e=>e[t]))}}return t.\u0275fac=function(e){return new(e||t)(u.LFG(n.So))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const T=function(t){return[t]};function y(t,e){if(1&t&&(u.TgZ(0,"div",9),u.TgZ(1,"h2",10),u._uU(2),u.qZA(),u.TgZ(3,"div",11),u.TgZ(4,"span"),u._uU(5),u.ALo(6,"date"),u.qZA(),u._uU(7," - "),u.TgZ(8,"span"),u._uU(9),u.ALo(10,"date"),u.qZA(),u.qZA(),u.TgZ(11,"div"),u.TgZ(12,"a",12),u._uU(13,"Open"),u.qZA(),u.qZA(),u.qZA()),2&t){const t=e.$implicit;u.xp6(2),u.Oqu(t.name),u.xp6(3),u.Oqu(u.lcZ(6,4,t.start)),u.xp6(4),u.Oqu(u.lcZ(10,6,t.end)),u.xp6(3),u.Q6J("routerLink",u.VKq(8,T,t.id))}}function b(t,e){if(1&t&&(u.TgZ(0,"div",9),u.TgZ(1,"h2",10),u._uU(2),u.qZA(),u.TgZ(3,"div",11),u.TgZ(4,"span"),u._uU(5),u.ALo(6,"date"),u.qZA(),u._uU(7," - "),u.TgZ(8,"span"),u._uU(9),u.ALo(10,"date"),u.qZA(),u.qZA(),u.TgZ(11,"div"),u.TgZ(12,"a",12),u._uU(13,"Open"),u.qZA(),u.qZA(),u.qZA()),2&t){const t=e.$implicit;u.xp6(2),u.Oqu(t.name),u.xp6(3),u.Oqu(u.lcZ(6,4,t.start)),u.xp6(4),u.Oqu(u.lcZ(10,6,t.end)),u.xp6(3),u.Q6J("routerLink",u.VKq(8,T,t.id))}}let j=(()=>{class t{constructor(t){this.projectService=t,this.activeProjects$=(0,o.of)([]),this.pastProjects$=(0,o.of)([])}ngOnInit(){this.activeProjects$=this.projectService.getProjects().pipe((0,s.U)(t=>t.filter(t=>!d(new Date(t.end))))),this.pastProjects$=this.projectService.getProjects().pipe((0,s.U)(t=>t.filter(t=>d(new Date(t.end)))))}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(Z))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-projects-list"]],decls:18,vars:6,consts:[[1,"centered-content","padded-container"],[1,"mb-2"],[1,"mb-2","mt-1","mobile-mb-1","main-heading","flex","align-center"],["key","notes","size","lg",1,"projects-icon"],[1,"h2","ml-1"],[1,"mb-4"],[1,"mb-2","h4","heading"],[1,"card-container","wrap"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"h5","mb-1"],[1,"mb-1","small-text","italic"],["cta","tertiary",3,"routerLink"]],template:function(t,e){1&t&&(u.TgZ(0,"article",0),u._UZ(1,"app-authenticated-header",1),u.TgZ(2,"div",2),u._UZ(3,"svg-icon",3),u.TgZ(4,"h1",4),u._uU(5,"Projects"),u.qZA(),u.qZA(),u.TgZ(6,"section",5),u.TgZ(7,"h2",6),u._uU(8,"Active"),u.qZA(),u.TgZ(9,"div",7),u.YNc(10,y,14,10,"div",8),u.ALo(11,"async"),u.qZA(),u.qZA(),u.TgZ(12,"section"),u.TgZ(13,"h2",6),u._uU(14,"Past"),u.qZA(),u.TgZ(15,"div",7),u.YNc(16,b,14,10,"div",8),u.ALo(17,"async"),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(10),u.Q6J("ngForOf",u.lcZ(11,2,e.activeProjects$)),u.xp6(6),u.Q6J("ngForOf",u.lcZ(17,4,e.pastProjects$)))},styles:["[_nghost-%COMP%]   .main-heading[_ngcontent-%COMP%]{padding:0 var(--space-1)}[_nghost-%COMP%]   .main-heading[_ngcontent-%COMP%]   .projects-icon[_ngcontent-%COMP%]{color:var(--secondary-color)}[_nghost-%COMP%]   .heading[_ngcontent-%COMP%]{padding:var(--space-1);border-radius:10px;background-color:var(--neutral-transparent-color)}@media (max-width:64em){[_nghost-%COMP%]   .heading[_ngcontent-%COMP%]{padding:var(--space-1);border-radius:0}[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]{padding:0 var(--space-1)}[_nghost-%COMP%]   .padded-content[_ngcontent-%COMP%]{padding-bottom:var(--space-2)}}"]}),t})();var U=r(3246);function A(t,e){for(var r=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return r+a}function N(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var r=(0,c.Z)(t);if(!(0,U.Z)(r))throw new RangeError("Invalid time value");var a=e||{},n=null==a.format?"extended":String(a.format),i=null==a.representation?"complete":String(a.representation);if("extended"!==n&&"basic"!==n)throw new RangeError("format must be 'extended' or 'basic'");if("date"!==i&&"time"!==i&&"complete"!==i)throw new RangeError("representation must be 'date', 'time', or 'complete'");var o="",s="",p="extended"===n?"-":"",d="extended"===n?":":"";if("time"!==i){var u=A(r.getDate(),2),g=A(r.getMonth()+1,2),l=A(r.getFullYear(),4);o="".concat(l).concat(p).concat(g).concat(p).concat(u)}if("date"!==i){var m=r.getTimezoneOffset();if(0!==m){var h=Math.abs(m),f=A(Math.floor(h/60),2),v=A(h%60,2),Z=m<0?"+":"-";s="".concat(Z).concat(f,":").concat(v)}else s="Z";var T=A(r.getHours(),2),y=A(r.getMinutes(),2),b=A(r.getSeconds(),2),j=""===o?"":"T",N=[T,y,b].join(d);o="".concat(o).concat(j).concat(N).concat(s)}return o}function D(t,e){if(1&t&&(u.TgZ(0,"main",1),u._UZ(1,"app-authenticated-header"),u.TgZ(2,"nav",2),u.TgZ(3,"a",3),u.TgZ(4,"span"),u._UZ(5,"svg-icon",4),u.qZA(),u.TgZ(6,"span"),u._uU(7,"Projects"),u.qZA(),u.qZA(),u.TgZ(8,"span",5),u._uU(9," / "),u.qZA(),u.TgZ(10,"h1",6),u._uU(11),u.qZA(),u.qZA(),u.TgZ(12,"div",7),u.TgZ(13,"div",8),u.TgZ(14,"div",9),u._UZ(15,"svg-icon",10),u.TgZ(16,"h2",11),u._uU(17,"Itinerary"),u.qZA(),u.qZA(),u.TgZ(18,"p",12),u._uU(19,"Keeps track of all bookings"),u.qZA(),u.TgZ(20,"div",13),u.TgZ(21,"span",14),u.TgZ(22,"a",15),u._uU(23," Today "),u.qZA(),u.qZA(),u.TgZ(24,"span",14),u.TgZ(25,"a",16),u._uU(26," All "),u.qZA(),u.qZA(),u.TgZ(27,"span",14),u.TgZ(28,"a",15),u._uU(29," Next 7 days "),u.qZA(),u.qZA(),u.TgZ(30,"span"),u.TgZ(31,"a",15),u._uU(32," Past 7 days "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(33,"div",17),u.TgZ(34,"a",18),u._UZ(35,"svg-icon",19),u.TgZ(36,"h2",20),u._uU(37,"Participants"),u.qZA(),u.qZA(),u.TgZ(38,"p"),u._uU(39,"A list of all people involved in the project"),u.qZA(),u.qZA(),u.TgZ(40,"div",21),u.TgZ(41,"a",22),u._UZ(42,"svg-icon",23),u.TgZ(43,"h2",20),u._uU(44,"Sharing center"),u.qZA(),u.qZA(),u.TgZ(45,"p"),u._uU(46," Keeps track of latest shared documents and sent emails through the app "),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&t){const t=e.ngIf,r=u.oxw();u.xp6(11),u.Oqu(t.name),u.xp6(11),u.Q6J("queryParams",r.getToday()),u.xp6(6),u.Q6J("queryParams",r.getNextSeven()),u.xp6(3),u.Q6J("queryParams",r.getPastSeven())}}let P=(()=>{class t{constructor(t){this.projectService=t,this.project$=this.projectService.getActiveProject()}getToday(){return{fromDate:N(new Date,{representation:"date"}),toDate:N(new Date,{representation:"date"})}}getPastSeven(){return{fromDate:N(h(new Date,7),{representation:"date"}),toDate:N(new Date,{representation:"date"})}}getNextSeven(){return{fromDate:N(new Date,{representation:"date"}),toDate:N(m(new Date,7),{representation:"date"})}}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(Z))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-project-details"]],decls:2,vars:3,consts:[["class","centered-content padded-container",4,"ngIf"],[1,"centered-content","padded-container"],[1,"mb-2","mobile-ml-1","flex","align-center"],["routerLink","../","cta","tertiary",1,"inline-flex","align-center"],["key","back",1,"mr-1"],[1,"ml-1","mr-1"],[1,"bold","h5"],[1,"mobile-ml-1","mobile-mr-1","card-container","wrap","column"],[1,"card","mb-2","flex","column"],[1,"flex","mb-1","align-center"],["key","itinerary","size","lg",1,"mr-1","itinerary-icon"],[1,"h3"],[1,"mb-1"],[1,"flex","wrap"],[1,"mr-3"],["routerLink","itinerary","cta","tertiary",3,"queryParams"],["routerLink","itinerary","cta","tertiary"],[1,"card","mb-2"],["routerLink","participants","cta","tertiary",1,"align-center"],["key","people",1,"mr-1"],[1,"h5"],[1,"card"],["routerLink","sharing","cta","tertiary",1,"align-center"],["key","share-center",1,"mr-1"]],template:function(t,e){1&t&&(u.YNc(0,D,47,4,"main",0),u.ALo(1,"async")),2&t&&u.Q6J("ngIf",u.lcZ(1,1,e.project$))},styles:[".itinerary-icon[_ngcontent-%COMP%]{color:var(--secondary-color)}"]}),t})();var w=r(9112),q=r(5257),C=r(7057),k=r(3190),S=r(331);function B(t,e){(0,p.Z)(2,arguments);var r=(0,c.Z)(t),a=(0,c.Z)(e);return r.getTime()>a.getTime()}function _(t,e){(0,p.Z)(2,arguments);var r=(0,c.Z)(t),a=(0,c.Z)(e);return r.getTime()<a.getTime()}const I=new Date,O={1:{id:"1",projectId:"1",type:"flight",startDate:h(I,5).toUTCString(),startTime:"11:30",endDate:h(I,5).toUTCString(),endTime:"13:30",provider:"Austrian airlines",participants:["1","2","8"],from:"London - Heathrow",to:"Paris De Gaul",image:"assets/booking-images/flight1.jpg",confirmationNumber:"A2B7G",price:100,currencyCode:"EUR"},2:{id:"2",projectId:"1",type:"hotel",startDate:h(I,5).toUTCString(),startTime:"14:00",endDate:h(I,4).toUTCString(),endTime:"12:00",provider:"Sofia grand hotel",participants:["1","2"],city:"Sofia",address:"Tsar Osvoboditel 13",image:"assets/booking-images/hotel1.jpg",confirmationNumber:"A2B7G",price:150,currencyCode:"EUR"},3:{id:"3",projectId:"2",type:"ferry",startDate:h(I,3).toUTCString(),startTime:" 14:00",endDate:h(I,3).toUTCString(),endTime:"16:00",provider:"Sharky fella",participants:["5","7"],from:"Istanbul port 1",to:"Istanbul port 2",image:"assets/booking-images/ferry1.jpg",confirmationNumber:"A2B7G",price:75,currencyCode:"EUR"},4:{id:"4",projectId:"3",type:"train",startDate:I.toUTCString(),startTime:"09:00",endDate:I.toUTCString(),endTime:"19:00",provider:"Old Tomm",participants:["3","4","7"],from:"Moscow",to:"St Petersburg",image:"assets/booking-images/train1.jpg",confirmationNumber:"A2B7G",price:333,currencyCode:"EUR"},5:{id:"5",projectId:"1",type:"flight",startDate:I.toUTCString(),startTime:"11:30",endDate:I.toUTCString(),endTime:"13:25",provider:"Qatar airlines",participants:["1","2","8","9","10"],from:"London - Heathrow",to:"Paris De Gaul",image:"assets/booking-images/flight2.jpg",confirmationNumber:"A2B7G",price:257,currencyCode:"EUR"},6:{id:"6",projectId:"1",type:"flight",startDate:m(I,1).toUTCString(),startTime:"09:30",endDate:m(I,1).toUTCString(),endTime:"14:45",provider:"Qatar airlines",participants:["1","2"],from:"Vienna airport",to:"Qatar",image:"assets/booking-images/flight3.jpg",confirmationNumber:"A2B7G",price:110,currencyCode:"EUR"},7:{id:"7",projectId:"1",type:"train",startDate:m(I,1).toUTCString(),startTime:"09:30",endDate:m(I,2).toUTCString(),endTime:"11:00",provider:"Qatar train services",participants:["1","2","8","9","10"],from:"Qatar central station",to:"Bangalore",image:"assets/booking-images/train1.jpg",confirmationNumber:"A2B7G",price:205,currencyCode:"EUR"},8:{id:"8",projectId:"1",type:"ferry",startDate:m(I,3).toUTCString(),startTime:"09:30",endDate:m(I,3).toUTCString(),endTime:"22:00",provider:"Indian ferry services",participants:["1","2"],from:"Bangalore port",to:"New Zealand",image:"assets/booking-images/ferry2.jpg",confirmationNumber:"A2B7G",price:170,currencyCode:"EUR"},9:{id:"9",projectId:"1",type:"hotel",startDate:m(I,5).toUTCString(),startTime:"12:00",endDate:m(I,7).toUTCString(),endTime:"11:00",provider:"K West Hotel and Spa",participants:["1","2","3","4","8","9","10"],city:"London",address:"Richmond Way, London W14 0AX",image:"assets/booking-images/hotel4.jpg",confirmationNumber:"A2B7G",price:306,currencyCode:"EUR"}},x={1:{id:"1",projectId:"1",firstName:"John",lastName:"Simmons",email:"johns@gmail.com",phone:"447969899667",passportNumber:"123AB78H"},2:{id:"2",projectId:"1",firstName:"Jean",lastName:"Tennesy",email:"jeant@hotmail.com",phone:"441235995998",passportNumber:"123AB78H"},3:{id:"3",projectId:"3",firstName:"Eric",lastName:"Gartner",email:"ericg@hotmail.com",phone:"441229745677",passportNumber:"123AB78H"},4:{id:"4",projectId:"3",firstName:"Vanessa",lastName:"Hughes",email:"vanhughes@gmail.com",phone:"447969888777",passportNumber:"123AB78H"},5:{id:"5",projectId:"2",firstName:"Patrick",lastName:"Rothfuss",email:"nottodaypat@yahoo.com",phone:"447969844776",passportNumber:"123AB78H"},6:{id:"6",projectId:"2",firstName:"Patricia",lastName:"Gates",email:"patgates55@yahoo.com",phone:"447977158757",passportNumber:"123AB78H"},7:{id:"7",projectId:"3",firstName:"Ivan",lastName:"Orlov",email:"luckychicken@gmail.com",phone:"447989555444",passportNumber:"123AB78H"},8:{id:"8",projectId:"1",firstName:"Charlotte",lastName:"Baby",email:"cbaby@hotmail.com",phone:"447475332211",passportNumber:"123AB78H"},9:{id:"9",projectId:"1",firstName:"Jake",lastName:"Heart",email:"jakeh@hotmail.com",phone:"447798554669",passportNumber:"123AB78H"},10:{id:"10",projectId:"1",firstName:"Chloe",lastName:"Fartlec",email:"chloef@hotmail.com",phone:"447897457221",passportNumber:"123AB78H"}};let M=(()=>{class t{constructor(t,e){this.appRouter=t,this.projectService=e,this.participants$=new g.X(x),this.bookings$=new g.X(O),this._favoriteParticipants$=new g.X(["1"]),this.favoriteParticipants$=this._favoriteParticipants$.asObservable(),this.sortParticipantsByFavorites=t=>{const e=this._favoriteParticipants$.getValue();return[...t].sort((t,r)=>{const a=e.includes(t.id),n=e.includes(r.id);return a&&!n?-1:n&&!a?1:0})}}addToFavorites(t){return this.favoriteParticipants$.pipe((0,q.q)(1),(0,s.U)(e=>{const r=[...e,t];return this._favoriteParticipants$.next(r),r}))}removeFromFavorites(t){return this.favoriteParticipants$.pipe((0,q.q)(1),(0,s.U)(e=>{const r=e.filter(e=>e!==t);return this._favoriteParticipants$.next(r),r}))}getParticipants(){return(0,w.aj)([this.participants$,this.projectService.getActiveProject()]).pipe((0,s.U)(([t,e])=>Object.values(t).filter(t=>t.projectId===(null==e?void 0:e.id))),(0,s.U)(this.sortParticipantsByName),(0,s.U)(this.sortParticipantsByFavorites))}getBookingParticipants(t){return(0,w.aj)([this.getParticipants(),this.getBookingById(t)]).pipe((0,s.U)(([t,e])=>t.filter(t=>e.participants.includes(t.id))))}getActiveParticipant(){const t=this.appRouter.getParticipantId();return this.participants$.asObservable().pipe((0,s.U)(e=>e[t]))}getBookings(){return(0,w.aj)([this.bookings$,this.projectService.getActiveProject()]).pipe((0,s.U)(([t,e])=>Object.values(t).filter(t=>t.projectId===(null==e?void 0:e.id))))}getBookingsByParticipantId(t){return this.getBookings().pipe((0,s.U)(e=>e.filter(e=>e.participants.includes(t))))}createBookingGroups(t){const e=t.reduce((t,e)=>{const r=e.startDate,a=e.endDate,n=r!==a,i=t[r]||[],o=t[a]||[];return i.push(e),n&&o.push(e),t[r]=i,n&&(t[a]=o),t},{});return Object.keys(e).map(t=>({date:t,bookings:e[t]}))}getFilteredBookings(){return this.appRouter.getItineraryParams().pipe((0,C.M)(this.getBookings()),(0,s.U)(([t,e])=>e.filter(e=>{const r=(0,S.Z)(t.fromDate),a=(0,S.Z)(t.toDate),n=[t.participantId].reduce((t,e)=>Array.isArray(e)?[...t,...e]:[...t,e],[]).filter(Boolean),i=new Date(e.startDate);return i.setHours(0,0,0,0),(!(0,U.Z)(r)||!B(r,i))&&(!(0,U.Z)(a)||!_(a,i))&&(!(Array.isArray(n)&&n.length>0)||n.some(t=>e.participants.includes(t)))})))}getBookingGroupsByDate(){return this.getFilteredBookings().pipe((0,s.U)(this.createBookingGroups),(0,s.U)(this.sortBookingGroups))}getBookingGroupsForParticipant(){return this.getActiveParticipant().pipe((0,k.w)(t=>this.getBookingsByParticipantId(t.id)),(0,s.U)(t=>this.createBookingGroups(t)),(0,s.U)(this.sortBookingGroups))}sortParticipantsByName(t){return[...t].sort((t,e)=>{const r=t.firstName.charAt(0),a=e.firstName.charAt(0);return r>a?1:a>r?-1:0})}sortBookingGroups(t){return[...t].sort((t,e)=>{const r=new Date(t.date),a=new Date(e.date);return B(r,a)?1:B(a,r)?-1:0})}getActiveBooking(){const t=this.appRouter.getBookingId();return this.bookings$.asObservable().pipe((0,s.U)(e=>e[t]))}getBookingById(t){return this.bookings$.asObservable().pipe((0,s.U)(e=>e[t]))}}return t.\u0275fac=function(e){return new(e||t)(u.LFG(n.So),u.LFG(Z))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac}),t})(),$=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-project-context"]],features:[u._Bn([M])],decls:1,vars:0,template:function(t,e){1&t&&u._UZ(0,"router-outlet")},directives:[a.lC],styles:[""]}),t})();var R=r(6226),G=r(2608),L=r(8583);const F=[{path:"",component:$,children:[{path:"",component:j},{path:":projectId",pathMatch:"exact",component:P},{path:":projectId/itinerary",loadChildren:()=>Promise.all([r.e(592),r.e(829)]).then(r.bind(r,6829)).then(t=>t.ItineraryModule)},{path:":projectId/participants",loadChildren:()=>Promise.all([r.e(592),r.e(850)]).then(r.bind(r,4850)).then(t=>t.ParticipantsModule)},{path:":projectId/sharing",loadChildren:()=>r.e(46).then(r.bind(r,4046)).then(t=>t.DataSharingModule)},{path:"**",redirectTo:""}]}];let H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[n.m8,a.Bz.forChild(F),i.p],a.Bz]}),t})();u.B6R(j,[R.W,G.bk,L.sg,a.yS],[L.Ov,L.uU]),u.B6R(P,[L.O5,R.W,a.yS,G.bk],[L.Ov])}}]);