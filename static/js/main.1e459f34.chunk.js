(this.webpackJsonpmanojform=this.webpackJsonpmanojform||[]).push([[0],{136:function(e,t,a){},137:function(e,t,a){e.exports=a.p+"static/media/pngguru.com.18cdb459.png"},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),s=a.n(o),l=(a(85),a(86),a(87),a(88),a(89),a(41)),m=a(42),c=a(43),i=a(44),u=a(15),d=a(12),h="http://manojdb.herokuapp.com/",E=function(e){return{type:"COMMENTS_FAILED",payload:e}},p=function(e){return{type:"ADD_COMMENTS",payload:e}},f=a(10),g=a(45),v=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},y=a(140),b=a(141),w=a(142),x=a(143),N=a(77),C=a(144),O=a(145),k=a(146),S=a(147),j=a(148),M=a(149),D=a(150),I=a(151),A=(a(136),function(e){return e&&e.length}),T=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},L=function(e,t){return function(a){return(n=e,function(e){return e&&e.length>=n})(a)&&function(e){return function(t){return!t||t.length<=e}}(t)(a);var n}},F=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isCommentFormOpen:!1,animating:!1,activeIndex:0,toastShow:!1},a.RenderComments=a.RenderComments.bind(Object(f.a)(a)),a.toggleComment=a.toggleComment.bind(Object(f.a)(a)),a.handleComment=a.handleComment.bind(Object(f.a)(a)),a.next=a.next.bind(Object(f.a)(a)),a.previous=a.previous.bind(Object(f.a)(a)),a.setActiveIndex=a.setActiveIndex.bind(Object(f.a)(a)),a.setAnimating=a.setAnimating.bind(Object(f.a)(a)),a.toggleToastShow=a.toggleToastShow.bind(Object(f.a)(a)),a}return Object(m.a)(n,[{key:"toggleComment",value:function(){this.setState({isCommentFormOpen:!this.state.isCommentFormOpen})}},{key:"toggleToastShow",value:function(){this.setState({toastShow:!this.state.toastShow})}},{key:"setActiveIndex",value:function(e){this.setState({activeIndex:e})}},{key:"setAnimating",value:function(e){this.setState({animating:e})}},{key:"next",value:function(){if(!this.state.animating){var e=this.state.activeIndex===this.props.comments.length-1?0:this.state.activeIndex+1;this.setActiveIndex(e)}}},{key:"previous",value:function(){if(!this.state.animating){var e=0===this.state.activeIndex?this.props.comments.length-1:this.state.activeIndex-1;this.setActiveIndex(e)}}},{key:"handleComment",value:function(e){this.props.postComment(e)}},{key:"RenderComments",value:function(e){var t=e.comments.map((function(e){return e.id%2===0?r.a.createElement(g.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement(y.a,{className:"text-secondary innerMessageCardRight",outline:!0,color:"secondary"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"row"},r.a.createElement("strong",null,e.message)),r.a.createElement("p",null,"-- ",e.author," ","   ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))))):r.a.createElement(g.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement(y.a,{className:"text-secondary innerMessageCardLeft",outline:!0,color:"secondary"},r.a.createElement(b.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"row"},r.a.createElement("strong",null,e.message)),r.a.createElement("p",null,"-- ",e.author," ","   ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))))))}));return r.a.createElement(y.a,{outline:!0,color:"secondary",style:{"border-radius":"40px",overflow:"hidden"}},r.a.createElement(w.a,{tag:"h3",className:"text-secondary border-secondary"},"Comments"),r.a.createElement(b.a,null,r.a.createElement("div",{className:"container",style:{padding:"0px 35px 35px 35px"}},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(g.Stagger,{in:!0},t)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{"margin-top":"20px"}},r.a.createElement(x.a,{color:"secondary",style:{"border-radius":"40px",padding:"10px"},onClick:this.toggleComment},"Leave a Comment"," "," ",r.a.createElement("span",{className:"fa fa-comment"})))))))}},{key:"renderCommentsCarousel",value:function(e){var t=this,n=e.comments,o=n.map((function(e){return r.a.createElement(N.a,{inverse:!0,onExiting:function(){return t.setAnimating(!0)},onExited:function(){return t.setAnimating(!1)},key:e.id},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(C.a,{height:250,width:350,src:a(137),alt:"no image"}),r.a.createElement(O.a,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,r.a.createElement("strong",null,e.message.slice(0,20)+"...")),r.a.createElement("p",null," ~ ",e.author," "," ,  ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(k.a,{isOpen:t.state.toastShow},r.a.createElement(y.a,{inverse:!0,color:"dark"},r.a.createElement(b.a,null,r.a.createElement("p",null,r.a.createElement("strong",null,e.message)),r.a.createElement("p",null," ~ ",e.author," "," ,  ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))))))}));return r.a.createElement("div",null,r.a.createElement(S.a,{inverse:!0,color:"dark",activeIndex:this.state.activeIndex,next:this.next,previous:this.previous},r.a.createElement(j.a,{"text-color":"dark",items:n,activeIndex:this.state.activeIndex,onClickHandler:this.setActiveIndex}),o,r.a.createElement(M.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),r.a.createElement(M.a,{direction:"next",directionText:"Next",onClickHandler:this.next})),r.a.createElement("a",{onClick:this.toggleToastShow},this.state.toastShow?r.a.createElement("div",null,"show less"," ",r.a.createElement("span",{className:"fa fa-angle-up"})):r.a.createElement("div",null,"show more"," ",r.a.createElement("span",{className:"fa fa-angle-down"}))))}},{key:"render",value:function(){var e=this;if(this.props.isLoading)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(v,null)));if(this.props.errMess)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,this.props.errMess)));if(null!=this.props.comments){var t=function(){return r.a.createElement(y.a,null,r.a.createElement(w.a,{tag:"h3"},r.a.createElement("strong",null,"Leave us a comment!"),r.a.createElement("textonbutton",null)),r.a.createElement(b.a,null,r.a.createElement(u.LocalForm,{onSubmit:function(t){return e.handleComment(t)}},r.a.createElement(D.a,{className:"form-group"},r.a.createElement(I.a,{xs:{size:10,offset:1}},r.a.createElement(u.Control.text,{className:"form-control",model:".author",id:"author",name:"author",placeholder:"Name",validators:{required:A,validName:L(3,15)}}),r.a.createElement(u.Errors,{className:"alert-danger text-center",model:".author",show:"touched",messages:{required:" required ! .. ",validName:" Please enter a valid name(3-20 characters) "}}))),r.a.createElement(D.a,{className:"form-group"},r.a.createElement(I.a,{xs:{size:10,offset:1}},r.a.createElement(u.Control.text,{className:"form-control",model:".email",id:"email",name:"email",placeholder:"Email ID",validators:{required:A,validEmail:T}}),r.a.createElement(u.Errors,{className:"alert-danger text-center",model:".email",show:"touched",messages:{required:"required ! ..",validEmail:" Please enter a valid email "}}))),r.a.createElement(D.a,{className:"form-group"},r.a.createElement(I.a,{xs:{size:10,offset:1}},r.a.createElement(u.Control.textarea,{className:"form-control",model:".message",id:"message",name:"message",placeholder:"Tell us about your opinion",rows:5,validators:{validName:L(2,500)}}),r.a.createElement(u.Errors,{className:"alert-danger text-center",model:".message",show:"touched",messages:{required:" required ! .. ",validName:" Write something before you submit "}}))),r.a.createElement(D.a,{className:"form-group"},r.a.createElement(I.a,{md:{size:10,offset:1}},r.a.createElement(x.a,{type:"submit",color:"dark"},r.a.createElement("span",{className:"fa fa-pencil "}," ")," ","Submit"))))))};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-12 col-md-8 col-lg-6 offset-md-2",styles:{"margin-bottom":"0"}},r.a.createElement(t,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-8 col-lg-6 offset-md-2 ",styles:{"margin-top":"0"}},r.a.createElement(y.a,null,r.a.createElement(b.a,null,r.a.createElement("a",{onClick:this.toggleComment},!1===this.state.isCommentFormOpen?r.a.createElement("div",null,r.a.createElement("strong",null,"Show Comments ",r.a.createElement("i",{className:"fa fa-lg fa-angle-down"}))):r.a.createElement("div",null,r.a.createElement("strong",null,"Hide Comments ",r.a.createElement("i",{className:"fa fa-lg fa-angle-up"})))),r.a.createElement(k.a,{isOpen:this.state.isCommentFormOpen},r.a.createElement("br",null),this.renderCommentsCarousel({comments:this.props.comments})))))),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-12 col-md-8 col-lg-6 offset-md-2 m-1"},this.RenderComments({comments:this.props.comments}))))}}}]),n}(n.Component),q=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchComments()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(F,{commentsLoading:this.props.comments.isLoading,commentsErrMess:this.props.comments.errMess,comments:this.props.comments.comments,postComment:this.props.postComment}))}}]),a}(n.Component),_=Object(d.connect)((function(e){return{comments:e.comments}}),(function(e){return{postComment:function(t){return e(function(e){return function(t){var a=Object.assign({date:(new Date).toISOString()},e);return fetch(h+"comments",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return t(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("Post comments",e.message),alert("Your comment could not be updated\n Error:"+e.message)}))}}(t))},fetchComments:function(){e((function(e){return fetch(h+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(p(t))})).catch((function(t){return e(E(t.message))}))}))}}}))(q),P=a(13),R=a(78),z=a(79),H=a.n(z),U=a(30),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(U.a)({},e,{isLoading:!1,errMess:null,comments:t.payload});case"COMMENTS_LOADING":return Object(U.a)({},e,{isLoading:!0,errMess:null,comments:[]});case"COMMENTS_FAILED":return Object(U.a)({},e,{isLoading:!1,errMess:t.payload,comments:[]});case"ADD_COMMENT":var a=t.payload;return Object(U.a)({},e,{comments:e.comments.concat(a)});default:return e}},W=Object(P.createStore)(Object(P.combineReducers)({comments:J}),Object(P.applyMiddleware)(R.a,H.a));var Z=function(){return r.a.createElement(d.Provider,{store:W},r.a.createElement("div",{className:"App"},r.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(138)},88:function(e,t,a){},89:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.1e459f34.chunk.js.map