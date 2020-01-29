(this["webpackJsonpexpress-react-test"]=this["webpackJsonpexpress-react-test"]||[]).push([[0],{72:function(e,t,a){e.exports=a(84)},77:function(e,t,a){},78:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(9),o=a.n(s),i=(a(77),a(15)),l=a(16),c=a(18),p=a(17),u=a(19),m=a(130),h=a(62),d=(a(78),a(38)),g=a(26),E=a(28),b=a(43),f=a(86),O=a(133),v=a(85),j=a(126),y=a(131),_=a(127),N=a(125),R=a(122),M=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement(R.a,{color:"default",className:e.appBar},n.a.createElement(N.a,null,n.a.createElement(j.a,{container:!0,spacing:6,alignItems:"baseline"},n.a.createElement(j.a,{item:!0,xs:12,className:e.flex},n.a.createElement("div",{className:e.inline},n.a.createElement(_.a,{variant:"h6",color:"inherit",noWrap:!0},n.a.createElement(d.b,{to:"/",className:e.link},n.a.createElement("span",{className:e.tagline},"Prime Number App"))))))))}}]),t}(r.Component),k=Object(g.f)(Object(f.a)((function(e){return{appBar:{position:"relative",boxShadow:"none",borderBottom:"1px solid ".concat(e.palette.grey[100]),backgroundColor:"white"},inline:{display:"inline"},flex:Object(E.a)({display:"flex"},e.breakpoints.down("sm"),{display:"flex",justifyContent:"space-evenly",alignItems:"center"}),link:{textDecoration:"none",color:"inherit"},tagline:Object(E.a)({display:"inline-block",marginLeft:10},e.breakpoints.up("md"),{paddingTop:"0.8em"})}}))(M)),x=a(128),w=a(129),L=a(45),T=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement(n.a.Fragment,null,n.a.createElement(O.a,null),n.a.createElement("span",{className:e.wrapper},n.a.createElement(x.a,{onClick:this.props.onClick,variant:this.props.variant,color:this.props.color,className:this.props.className,style:this.props.style,disabled:this.props.disabled||this.props.loading},this.props.label),this.props.loading&&n.a.createElement(w.a,{size:24,className:e.buttonProgress})))}}]),t}(r.Component),C=Object(f.a)((function(e){return{button:{margin:e.spacing(.5)},buttonProgress:{color:L.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},wrapper:{margin:e.spacing(1),position:"relative"}}}))(T),P=a(132),S=a(134),B=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement(n.a.Fragment,null,n.a.createElement(O.a,null),n.a.createElement("span",{className:e.wrapper},n.a.createElement(S.a,{color:"default",label:this.props.number})))}}]),t}(r.Component),I=Object(f.a)((function(e){return{wrapper:{margin:e.spacing(.5),position:"relative"}}}))(B);var q=a(44),F=Object(h.a)({palette:{primary:L.a,secondary:q.a}}),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).handleOnChange=function(e){a.setState({number:e.target.value})},a.handleOnSubmit=function(){a.props.getPrimeNumbers(a.state.number)},a.handleOnClear=function(){a.setState({number:0}),a.props.reset()},a.state={number:0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.location.pathname;return n.a.createElement(n.a.Fragment,null,n.a.createElement(O.a,null),n.a.createElement(k,{currentPath:a}),n.a.createElement(m.a,{theme:F},n.a.createElement("div",{className:t.root},n.a.createElement(j.a,{container:!0,justify:"center"},n.a.createElement(j.a,{alignItems:"center",justify:"center",container:!0,className:t.grid},n.a.createElement(j.a,{item:!0,xs:12,md:12,sm:12},n.a.createElement(v.a,{className:t.paper},n.a.createElement("div",{className:t.blockCenter},n.a.createElement(y.a,{type:"number",label:"Prime Numbers until",inputProps:{style:{textAlign:"right"}},className:t.textField,margin:"normal",value:this.state.number,onChange:this.handleOnChange,onKeyPress:function(t){"Enter"===t.key&&e.handleOnSubmit(t)}})),n.a.createElement("div",{className:t.blockCenter},n.a.createElement(C,{variant:"contained",color:"default",className:t.button,onClick:this.handleOnClear,label:"Clear",disabled:this.props.isLoading}),n.a.createElement(C,{variant:"contained",color:this.props.error?"secondary":"primary",className:t.button,onClick:this.handleOnSubmit,label:"Request",loading:this.props.isLoading,disabled:!this.state.number})),this.props.error?this.props.errorMessage?n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,{elevation:3,variant:"filled",severity:"warning"},this.props.errorMessage),n.a.createElement("br",null),n.a.createElement(P.a,{elevation:3,variant:"filled",severity:"info"},"If Express api is not running, open another shell on the root directory and execute 'npm start'")):n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,{elevation:3,variant:"filled",severity:"warning"},"An error occurred. Perhaps check if the Express api is running!"),n.a.createElement("br",null),n.a.createElement(P.a,{elevation:3,variant:"filled",severity:"info"},"If Express api is not running, open another shell on the root directory and execute 'npm start'")):n.a.createElement(n.a.Fragment,null)))))),!this.props.error&&this.props.response&&"object"===typeof this.props.response&&this.props.response.length>0?n.a.createElement("div",null,n.a.createElement(j.a,{container:!0,justify:"center",className:t.responseHeader},n.a.createElement(_.a,{variant:"h3",color:"primary",noWrap:!0},"Median of all prime numbers under ",this.props.request)),n.a.createElement(j.a,{container:!0,justify:"center"},n.a.createElement("br",null),this.props.response.map((function(e){return n.a.createElement(I,{key:e,number:e})})))):!this.props.request||this.props.isLoading||this.props.error?n.a.createElement(n.a.Fragment,null):n.a.createElement(n.a.Fragment,null,n.a.createElement(j.a,{container:!0,justify:"center",className:t.responseHeader},n.a.createElement(_.a,{variant:"h3",color:"primary",noWrap:!0},"There are no prime numbers under ",this.props.request)))))}}]),t}(r.Component);var A=Object(b.b)((function(e){return{request:e.request,response:e.response,isLoading:e.isLoading,error:e.error,errorMessage:e.errorMessage}}),{getPrimeNumbers:function(e){return function(t){return t({type:"START_GET_PRIME_LT_NUMBER_REQUEST",request:e}),fetch("http://localhost:8080/api/primes/median/get?number="+e).then((function(e){return e.json()})).then((function(e){if(!e||e&&e.errorMessage)throw e.errorMessage;t({type:"GET_PRIME_LT_NUMBER",response:e})})).catch((function(e){!function(e){console.error(e)}(e),t({type:"GET_PRIME_LT_NUMBER_ERROR",error:e.message||e})}))}},reset:function(){return function(e){e({type:"CLEAR_PRIME_LT_NUMBER_RESPONSE"})}}})(Object(g.f)(Object(f.a)((function(e){return{textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},root:{flexGrow:1,backgroundColor:e.palette.grey[100],overflow:"hidden",backgroundSize:"cover",backgroundPosition:"0 400px",paddingBottom:50,paddingTop:50},grid:Object(E.a)({width:1200,margin:"0 ".concat(e.spacing(2),"px")},e.breakpoints.down("sm"),{width:"calc(100% - 20px)"}),paper:{padding:e.spacing(3),margin:e.spacing(2),textAlign:"left",color:e.palette.text.secondary},blockCenter:{padding:e.spacing(2),textAlign:"center"},button:{margin:e.spacing(.5)},responseHeader:{marginBottom:e.spacing(3)}}}))(U))),G=function(e){return n.a.createElement(d.a,null,n.a.createElement(g.c,null,n.a.createElement(g.a,{exact:!0,path:"/",component:A})))},W=Object(h.a)({typography:{fontFamily:['"Lato"',"sans-serif"].join(",")}}),D=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(m.a,{theme:W},n.a.createElement(G,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(32),z=a(61),J=a(35),Q={request:null,response:null,isLoading:!1,error:!1,errorMessage:null};var X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.c,K=Object(H.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRIME_LT_NUMBER":return Object(J.a)({},e,{response:t.response,isLoading:!1,error:!1,errorMessage:null});case"START_GET_PRIME_LT_NUMBER_REQUEST":return Object(J.a)({},e,{request:t.request,response:[],isLoading:!0,error:!1,errorMessage:null});case"GET_PRIME_LT_NUMBER_ERROR":return Object(J.a)({},e,{error:!0,errorMessage:t.error,isLoading:!1,response:[]});case"CLEAR_PRIME_LT_NUMBER_RESPONSE":return Object(J.a)({},e,{request:null,response:[],error:!1,errorMessage:null,isLoading:!1});default:return Object(J.a)({},e,{isLoading:!1,error:!1,errorMessage:null})}}),X(Object(H.a)(z.a)));o.a.render(n.a.createElement(b.a,{store:K},n.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[72,1,2]]]);
//# sourceMappingURL=main.c60628c1.chunk.js.map