(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{56:function(e,t,a){},61:function(e,t,a){e.exports=a.p+"static/media/program.09ba2146.jpg"},66:function(e,t,a){e.exports=a(88)},71:function(e,t,a){},85:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(38),s=a.n(o),r=(a(71),a(7)),c=a(8),i=a(10),u=a(9),m=a(11),h=a(62),p=a(24),d=a(34),f=a(27),v=(a(28),function(e){function t(e,a){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e,a))).state={login:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(d.a.Brand,{href:"#/landing"},"StudyLink"),l.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(f.a,{className:"mr-auto"},l.a.createElement(f.a.Link,{href:"#/home"},"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"),l.a.createElement(f.a.Link,{href:"#/temes"},"\u041d\u0430\u0432\u0430\u043d\u043d\u044f")),console.log(this.props),"false"!==this.props?l.a.createElement(f.a,null,l.a.createElement(f.a.Link,{href:"#/SignIn"},"\u0423\u0432\u0456\u0439\u0442\u0438")):l.a.createElement(f.a,null,l.a.createElement(f.a.Link,{href:"#/SignIn"},"\u0412\u0438\u0439\u0442\u0438"))))}}]),t}(n.Component)),b=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,{signOut:"false"}))}}]),t}(n.Component),g=a(19),E=(a(56),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={loaded:!1,username:"",userInfo:[],temesOpen:null,debt:null},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=g.database().ref().child("schools"),n=JSON.parse(localStorage.getItem("studyLinkuser"));console.log(n),a.on("value",(function(a){e=a.val(),t.setState({userInfo:e}),setTimeout((function(){t.state.userInfo.map((function(e){e.school===n.school&&e.groups.map((function(e){e.name===n.group&&(e.pupils.map((function(e){e.name===n.name&&t.setState({debt:e.debt})})),t.setState({username:n.name,temesOpen:e.temes_open,temesPass:e.temes_pass}))}))}))}),2e3)})),setTimeout((function(){return t.setState({loaded:!0})}),2e3)}},{key:"render",value:function(){var e;return""!==this.state.debt&&(e=l.a.createElement("div",null,"\u0423\u0432\u0430\u0433\u0430 \u0443 \u0432\u0430\u0441 \u0454 \u0437\u0437\u0430\u0431\u043e\u0440\u0433\u043e\u0432\u0430\u043d\u0456\u0441\u0442\u044c ",this.state.debt,"\u0433\u0440\u043d")),""===this.state.debt&&(e=l.a.createElement("div",null)),this.state.loaded?this.state.loaded?l.a.createElement("div",null,l.a.createElement("h1",null,"Hello ",this.state.username),l.a.createElement("h3",null,"\u0412\u0456\u0434\u0432\u0456\u0434\u0430\u043d\u043e ",this.state.temesPass," \u0437\u0430\u043d\u044f\u0442\u044c"),l.a.createElement("h3",null,"\u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043e ",4*Math.ceil(this.state.temesPass/4)," \u0437\u0430\u043d\u044f\u0442\u044c"),l.a.createElement("h3",null,"\u041d\u0430\u0441\u0442\u0443\u043f\u043d\u0430 \u043e\u043f\u043b\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 ",4*Math.ceil(this.state.temesPass/4)-this.state.temesPass," \u0437\u0430\u043d\u044f\u0442\u0442\u044f"),e):void 0:l.a.createElement("div",{className:"lds-facebook"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))}}]),t}(n.Component)),O=a(35),k=(a(85),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={loaded:!1,schools:null},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;g.database().ref().child("schools").on("value",(function(a){e=a.val(),t.setState({schools:e,loaded:!0})}))}},{key:"render",value:function(){return this.state.loaded?this.state.loaded?l.a.createElement("div",null,l.a.createElement("h1",{className:"ff-c"},"\u0423\u0441\u0456 \u0448\u043a\u043e\u043b\u0438 \u0456 \u0433\u0443\u043f\u0438"),this.state.schools.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h1",{className:"blue ff-c"},e.school),l.a.createElement("div",null,e.groups.map((function(e){return l.a.createElement("div",{key:e.name},l.a.createElement("h3",{align:"left",className:"gray ff-c ml-30 mt-20"},e.name),e.pupils.map((function(e){return l.a.createElement(O.a,{horizontal:!0,key:e.name},l.a.createElement(O.a.Item,{className:"width-250"},e.name),l.a.createElement(O.a.Item,{className:"width-250"},e.password),l.a.createElement(O.a.Item,{className:"width-100"},e.debt))})))}))))}))):void 0:l.a.createElement("div",{className:"lds-facebook"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))}}]),t}(n.Component)),y=a(25),j=a(16),S=a(60),w=a(65),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={signOut:!1,login:null,phone:"",password:"",schools:[],groups:[],school:"",groupSeleced:"",schoolChuse:!1},a.groupSelect=a.groupSelect.bind(Object(y.a)(a)),a.schoolSelect=a.schoolSelect.bind(Object(y.a)(a)),a.onSubmit=a.onSubmit.bind(Object(y.a)(a)),a.onPhoneChange=a.onPhoneChange.bind(Object(y.a)(a)),a.onPasswordChange=a.onPasswordChange.bind(Object(y.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=g.database().ref().child("schools"),a=[];t.on("value",(function(t){t.val().map((function(e){a.push(e.school)})),e.setState({schools:a})}))}},{key:"schoolSelect",value:function(e){var t=g.database().ref().child("schools"),a=[];t.on("value",(function(t){t.val().map((function(t){t.school===e.target.value&&t.groups.map((function(e){a.push(e.name)}))}))})),this.setState({school:e.target.value,groups:a,schoolChuse:!0})}},{key:"groupSelect",value:function(e){this.setState({group:e.target.value})}},{key:"onPhoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=g.database().ref().child("schools"),n={};a.on("value",(function(e){e.val().map((function(e){e.school===t.state.school&&e.groups.map((function(e){e.name===t.state.group&&e.pupils.map((function(e){t.state.phone===e.phone&&t.state.password===e.password?(n.name=e.name,n.school=t.state.school,n.group=t.state.group,n.phone=e.phone,n.debt=e.debt,n.password=e.password,localStorage.setItem("studyLinkuser",JSON.stringify(n)),window.location.hash="#/home",t.setState({signOut:!0})):t.setState({login:!1})}))}))}))}))}},{key:"render",value:function(){var e,t,a=this;return!1===this.state.login&&(e=l.a.createElement(w.a,{variant:"danger"}," Wrong phone number or passwor"),setTimeout((function(){e=l.a.createElement("div",null),a.setState({login:null})}),3e3)),!0===this.state.login&&(e=l.a.createElement("div",null)),this.state.schoolChuse&&(t=l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect2"},l.a.createElement(j.a.Label,null,"\u041d\u0430\u0437\u0432\u0430 \u0433\u0440\u0443\u043f\u0438"),l.a.createElement(j.a.Control,{as:"select",onChange:this.groupSelect},l.a.createElement("option",null,"\u041c\u043e\u044f \u0433\u0440\u0443\u043f\u0430"),this.state.groups.map((function(e){return l.a.createElement("option",{key:e},e)}))))),l.a.createElement("div",{className:"container w-50"},l.a.createElement("br",null),l.a.createElement(j.a,{onSubmit:this.onSubmit},l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(j.a.Label,null,"\u041d\u0430\u0437\u0432\u0430 \u0437\u0430\u043a\u043b\u0430\u0434\u0443"),l.a.createElement(j.a.Control,{as:"select",onChange:this.schoolSelect},l.a.createElement("option",null,"\u041c\u0456\u0439 \u0437\u0430\u043a\u043b\u0430\u0434"),this.state.schools.map((function(e){return l.a.createElement("option",{key:e},e)})))),t,e,l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Phone"),l.a.createElement(j.a.Control,{name:"name",type:"text",placeholder:"Enter phone",onChange:this.onPhoneChange,value:this.state.phone})),l.a.createElement(j.a.Group,{controlId:"formBasicPassword"},l.a.createElement(j.a.Label,null,"Password"),l.a.createElement(j.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:this.onPasswordChange,value:this.state.password})),l.a.createElement(S.a,{variant:"primary",type:"submit"},"Sign in")))}}]),t}(n.Component),I=a(61),P=a.n(I),L=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={login:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",{src:P.a}))}}]),t}(n.Component),N=a(46),x=a(47),D=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={loaded:!1,temes:null,username:null,temesOpen:null},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=g.database().ref(),n=a.child("temes"),l=a.child("schools"),o=JSON.parse(localStorage.getItem("studyLinkuser"));console.log(o),l.on("value",(function(e){e.val().map((function(e){e.school===o.school&&e.groups.map((function(e){e.name===o.group&&t.setState({temesOpen:e.temes_open})}))}))})),n.on("value",(function(a){for(e=a.val(),console.log(e.length,e);e.length>t.state.temesOpen;)e.pop();console.log(e.length,e),t.setState({temes:e,username:o.name,loaded:!0})}))}},{key:"render",value:function(){return this.state.loaded?this.state.loaded?l.a.createElement("div",null,l.a.createElement("h1",null,"\u0422\u0435\u043c\u0438 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0456 \u0434\u043b\u044f ",this.state.username),l.a.createElement(N.a,{defaultActiveKey:"0",align:"left"},this.state.temes.map((function(e){return l.a.createElement(x.a,{key:e.tema},l.a.createElement(N.a.Toggle,{as:x.a.Header,eventKey:e.tema},e.tema),l.a.createElement(N.a.Collapse,{eventKey:e.tema},l.a.createElement(x.a.Body,null,""!==e.task[0]?l.a.createElement("div",null,l.a.createElement("h5",{align:"left"},"\u0417\u0430\u0432\u0434\u0430\u043d\u043d\u044f"),l.a.createElement("ol",null,e.task.map((function(e){return l.a.createElement("li",{align:"left",key:e},l.a.createElement("a",{href:"https://kosaniakmarianone.github.io/"+e,target:"blank"},"\u0417\u0430\u0432\u0434\u0430\u043d\u043d\u044f"))})))):"",""!==e.materials?l.a.createElement("h5",{align:"left"},l.a.createElement("a",{href:e.materials,target:"blank"},"\u041c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438")):"",""!==e.video?l.a.createElement("h5",{align:"left"},l.a.createElement("a",{href:e.video,target:"blank"},"\u0412\u0456\u0434\u0435\u043e")):"",""===e.video&&""===e.materials&&""===e.task[0]?"\u0422\u0435\u043c\u0430 \u043d\u0435 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0430, \u0430\u0431\u043e \u0440\u043e\u0437\u0433\u043b\u044f\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u043b\u0438\u0448\u0435 \u043d\u0430 \u0437\u0430\u043d\u044f\u0442\u0442\u0456":"")))})))):void 0:l.a.createElement("div",null,"Loading...")}}]),t}(n.Component),B=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,{basename:"/"},l.a.createElement("div",{className:"App",align:"center"},l.a.createElement(p.a,{path:"/",component:b}),l.a.createElement(p.a,{exact:!0,path:"/",component:L}),l.a.createElement(p.a,{exact:!0,path:"/landing",component:L}),l.a.createElement(p.a,{exact:!0,path:"/home",component:E}),l.a.createElement(p.a,{exact:!0,path:"/temes",component:D}),l.a.createElement(p.a,{exact:!0,path:"/admin",component:k}),l.a.createElement(p.a,{path:"/SignIn",component:C})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.initializeApp({apiKey:"AIzaSyDHAQfudekbBrh4WeEyhi9XZ4tPyuU-nHQ",authDomain:"studylink-62a6b.firebaseapp.com",databaseURL:"https://studylink-62a6b.firebaseio.com",projectId:"studylink-62a6b",storageBucket:"studylink-62a6b.appspot.com",messagingSenderId:"710063505158",appId:"1:710063505158:web:4573c8d89733fc2025e887"}),s.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.10d0e27d.chunk.js.map