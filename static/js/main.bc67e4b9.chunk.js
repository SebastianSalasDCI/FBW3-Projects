(this.webpackJsonpprojects=this.webpackJsonpprojects||[]).push([[0],{167:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(16),m=t.n(i),r=(t(89),t(90),t(83)),s=t(22),c=t(5),o=t(30);function g(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),t=a[0],i=a[1],m=o.groups.map((function(e){return l.a.createElement(c.h,{key:e.name,className:"navItem"},l.a.createElement(s.c,{className:"navlink",activeClassName:"linkActive",style:{textDecoration:"none"},to:"/group/".concat(e.link)},e.name))}));return l.a.createElement(c.i,{type:"dark",theme:"dark",expand:"md"},l.a.createElement(s.c,{to:"/"},l.a.createElement(c.j,null,"FBW3 Projects")),l.a.createElement(c.k,{onClick:function(){i(!t)}}),l.a.createElement(c.e,{open:t,navbar:!0},l.a.createElement(c.g,{navbar:!0},m)))}var u=t(8);function p(){var e=o.groups.map((function(e){return l.a.createElement(c.d,{key:e.name,xs:"12",sm:"12",md:"6",lg:"6"},l.a.createElement(s.b,{style:{textDecoration:"none"},to:"/group/".concat(e.link)},l.a.createElement("h4",{className:"projectTitle"}," ",e.name," "),l.a.createElement(c.a,{className:"cardClass"},l.a.createElement(c.c,{className:"homeImg",src:""+e["front-image"]}))))}));return l.a.createElement("div",null,l.a.createElement("div",{className:"titleCont"},l.a.createElement("h1",null,"Welcome to FBW3 Projects"),l.a.createElement("h5",null,"Here you will find a small description of the projects presented to you on Thurday 2nd of July 2020")),l.a.createElement(c.f,null,l.a.createElement(c.l,null,e)))}function d(e){var a=o.groups.filter((function(a){return a.link===e.match.params.gname}));console.log(a);var t=a[0].members.map((function(e){return l.a.createElement(c.a,{key:e.name,className:"cardClass"},l.a.createElement(c.c,{className:"profImg",src:""+e["profile-image"]}),l.a.createElement(c.b,null,l.a.createElement("h5",null,e.name),l.a.createElement("ul",{style:{listStyleType:"none"}},e.email?l.a.createElement("li",null,l.a.createElement("i",{class:"fas fa-envelope-square"})," ",e.email):null,e.linkedin?l.a.createElement("li",null,l.a.createElement("i",{class:"fab fa-linkedin"})," ",l.a.createElement("a",{href:e.linkedin},"Linkedin")):null,e.xing?l.a.createElement("li",null,l.a.createElement("i",{class:"fab fa-xing-square"})," ",l.a.createElement("a",{href:e.xing},"Xing")):null,e.github?l.a.createElement("li",null,l.a.createElement("i",{class:"fab fa-github-square"})," ",l.a.createElement("a",{href:e.github},"Github")):null)))})),n=a[0].pageImages.map((function(e){return l.a.createElement(c.a,{className:"cardClass"},l.a.createElement(c.c,{className:"homeImg",src:""+e}))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"titleCont"},l.a.createElement("h1",null,a[0].name)),l.a.createElement(c.f,null,l.a.createElement(c.l,null,l.a.createElement(c.d,{xs:"12",sm:"12",md:"5",lg:"5"},l.a.createElement("h4",{className:"titleSection"},"Group members: "),t),l.a.createElement(c.d,{xs:"12",sm:"12",md:"7",lg:"7"},l.a.createElement("h4",{className:"titleSection"},"Project images example: "),n))))}function E(){return l.a.createElement("div",{className:"main"},l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/group/:gname",component:d}),l.a.createElement(u.a,{exact:!0,path:"/",component:p})))}var h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(g,null),l.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(165),t(166);m.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e){e.exports=JSON.parse('{"groups":[{"name":"Food App","link":"food-app","front-image":"/assets/cat.jpg","members":[{"name":"Daniel Lewis","email":"dan@gmail.com","linkedin":"linkedin url","xing":"xing url","github":"github url","profile-image":"/assets/cat2.jpg"},{"name":"Rania","email":"rania@gmail.com","linkedin":"linkedin url","xing":"xing url","github":"github url","profile-image":"/assets/cat2.jpg"},{"name":"Mahdieh","email":"mahdie@gmail.com","linkedin":"linkedin url","xing":"xing url","github":"github url","profile-image":"/assets/cat2.jpg"}],"pageImages":["/assets/cat.jpg","/assets/cat2.jpg","/assets/cat3.jpg","/assets/cat4.jpg"]},{"name":"EstefiMakeUp","link":"estefimakeup","front-image":"/assets/cat.jpg","members":[{"name":"Maria Waleska","email":"waleska@gmail.com","linkedin":"linkedin url","xing":"xing url","github":"github url","profile-image":"/assets/cat2.jpg"}],"pageImages":["/assets/cat3.jpg","/assets/cat4.jpg"]},{"name":"Scount","link":"scount","front-image":"/assets/cat.jpg","members":[{"name":"Wisam","email":"wisam@gmail.com","linkedin":"linkedin url","xing":"xing url","github":"github url","profile-image":"/assets/cat2.jpg"},{"name":"Ahmad Suleiman","email":"suleiman@gmail.com","linkedin":"linkedin url","xing":"xing url","github":"github url","profile-image":"/assets/cat2.jpg"},{"name":"Ahmad Nahalawi","email":"nahalawi@gmail.com","linkedin":"linkedin url","xing":"xing url","github":"github url","profile-image":"/assets/cat2.jpg"}],"pageImages":["/assets/cat.jpg","/assets/cat2.jpg","/assets/cat3.jpg","/assets/cat4.jpg"]},{"name":"Event organization","link":"event-org","front-image":"/assets/cat.jpg","members":[{"name":"Romal","email":"romal@gmail.com","linkedin":"linkedin url","xing":"xing url","github":"github url","profile-image":"/assets/cat2.jpg"},{"name":"Amit","email":"amit@gmail.com","linkedin":"linkedin url","xing":"xing url","profile-image":"/assets/cat2.jpg"}],"pageImages":["/assets/cat.jpg","/assets/cat3.jpg","/assets/cat4.jpg"]}]}')},84:function(e,a,t){e.exports=t(167)},89:function(e,a,t){},90:function(e,a,t){}},[[84,1,2]]]);
//# sourceMappingURL=main.bc67e4b9.chunk.js.map