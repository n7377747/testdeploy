(this.webpackJsonpmanojform=this.webpackJsonpmanojform||[]).push([[0],{129:function(e,t,a){},137:function(e,t,a){e.exports=a.p+"static/media/pngguru.com.18cdb459.png"},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),s=a.n(o),c=(a(85),a(86),a(87),a(88),a(89),a(41)),m=a(42),l=a(44),i=a(43),u=a(9),d=a(13),h=" https://manojdbserver.herokuapp.com/",f=function(e){return{type:"COMMENTS_FAILED",payload:e}},p=function(e){return{type:"ADD_COMMENTS",payload:e}},E=a(11),g=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},v=a(76),b=a(140),C=a(141),x=a(142),w=a(143),N=a(144),O=a(145),k=a(146),y=a(147),j=a(148),S=a(149),M=a(150),I=a(151),A=(a(129),function(e){return e&&e.length}),T=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},D=function(e,t){return function(a){return(n=e,function(e){return e&&e.length>=n})(a)&&function(e){return function(t){return!t||t.length<=e}}(t)(a);var n}},F=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={isCommentFormOpen:!1,animating:!1,activeIndex:0,toastShow:!1},a.renderCommentsCarousel=a.renderCommentsCarousel.bind(Object(E.a)(a)),a.toggleComment=a.toggleComment.bind(Object(E.a)(a)),a.handleComment=a.handleComment.bind(Object(E.a)(a)),a.next=a.next.bind(Object(E.a)(a)),a.previous=a.previous.bind(Object(E.a)(a)),a.setActiveIndex=a.setActiveIndex.bind(Object(E.a)(a)),a.setAnimating=a.setAnimating.bind(Object(E.a)(a)),a.toggleToastShow=a.toggleToastShow.bind(Object(E.a)(a)),a}return Object(m.a)(n,[{key:"toggleComment",value:function(){this.setState({isCommentFormOpen:!this.state.isCommentFormOpen})}},{key:"toggleToastShow",value:function(){this.setState({toastShow:!this.state.toastShow})}},{key:"setActiveIndex",value:function(e){this.setState({activeIndex:e})}},{key:"setAnimating",value:function(e){this.setState({animating:e})}},{key:"next",value:function(){if(!this.state.animating){var e=this.state.activeIndex===this.props.comments.length-1?0:this.state.activeIndex+1;this.setActiveIndex(e)}}},{key:"previous",value:function(){if(!this.state.animating){var e=0===this.state.activeIndex?this.props.comments.length-1:this.state.activeIndex-1;this.setActiveIndex(e)}}},{key:"handleComment",value:function(e){this.props.postComment(e),this.props.resetFeedbackForm()}},{key:"renderCommentsCarousel",value:function(e){var t=this,n=e.comments,o=n.map((function(e){return r.a.createElement(v.a,{inverse:!0,onExiting:function(){return t.setAnimating(!0)},onExited:function(){return t.setAnimating(!1)},key:e.id},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b.a,{height:250,width:350,src:a(137),alt:"no image"}),r.a.createElement(C.a,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,r.a.createElement("strong",null,e.message.slice(0,20)+"...")),r.a.createElement("p",null," ~ ",e.author," "," ,  ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(x.a,{isOpen:t.state.toastShow},r.a.createElement(w.a,{className:"roundedBottomCorners",inverse:!0,color:"dark"},r.a.createElement(N.a,null,r.a.createElement("p",null,r.a.createElement("strong",null,e.message)),r.a.createElement("p",null," ~ ",e.author," "," ,  ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))),r.a.createElement("br",null))))))}));return r.a.createElement("div",null,r.a.createElement(O.a,{inverse:!0,color:"dark",activeIndex:this.state.activeIndex,next:this.next,previous:this.previous},r.a.createElement(k.a,{"text-color":"dark",items:n,activeIndex:this.state.activeIndex,onClickHandler:this.setActiveIndex}),o,r.a.createElement(y.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),r.a.createElement(y.a,{direction:"next",directionText:"Next",onClickHandler:this.next})),r.a.createElement("a",{onClick:this.toggleToastShow},this.state.toastShow?r.a.createElement("div",null,"show less"," ",r.a.createElement("span",{className:"fa fa-angle-up fa-lg"})):r.a.createElement("div",null,"show more"," ",r.a.createElement("span",{className:"fa fa-angle-down fa-lg"}))))}},{key:"render",value:function(){var e=this;if(this.props.isLoading)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null)));if(this.props.errMess)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,this.props.errMess)));if(null!=this.props.comments){return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-12 col-md-8 col-lg-5 offset-md-2",styles:{"margin-bottom":"0"}},r.a.createElement(w.a,{className:"roundedTopCorners"},r.a.createElement(j.a,{className:"darkCardHeader bg-dark",tag:"h3"},r.a.createElement("strong",null,"Leave us a comment!"),r.a.createElement("textonbutton",null)),r.a.createElement(N.a,null,r.a.createElement(u.Form,{model:"feedback",onSubmit:function(t){return e.handleComment(t)}},r.a.createElement(S.a,{className:"form-group"},r.a.createElement(M.a,{xs:{size:10,offset:1}},r.a.createElement(u.Control.text,{className:"form-control",model:".author",id:"author",name:"author",placeholder:"Name",validators:{required:A,validName:D(3,15)}}),r.a.createElement(u.Errors,{className:"text-danger text-center",model:".author",show:"touched",messages:{required:" required ! .. ",validName:" Please enter a valid name(3-20 characters) "}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(M.a,{xs:{size:10,offset:1}},r.a.createElement(u.Control.text,{className:"form-control",model:".email",id:"email",name:"email",placeholder:"Email ID",validators:{required:A,validEmail:T}}),r.a.createElement(u.Errors,{className:"text-danger text-center",model:".email",show:"touched",messages:{required:"required ! ..",validEmail:" Please enter a valid email "}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(M.a,{xs:{size:10,offset:1}},r.a.createElement(u.Control.textarea,{className:"form-control",model:".message",id:"message",name:"message",placeholder:"Tell us about your opinion",rows:5,validators:{validName:D(2,500)}}),r.a.createElement(u.Errors,{className:"text-danger text-center",model:".message",show:"touched",messages:{required:" required ! .. ",validName:" Write something before you submit "}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(M.a,{md:{size:10,offset:1}},r.a.createElement(I.a,{type:"submit",color:"dark"},r.a.createElement("span",{className:"fa fa-pencil "}," ")," ","Submit")))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-8 col-lg-5 offset-md-2 ",styles:{"margin-top":"0"}},r.a.createElement(w.a,{className:"roundedBottomCorners"},r.a.createElement(N.a,null,r.a.createElement("a",{onClick:this.toggleComment},!1===this.state.isCommentFormOpen?r.a.createElement("div",null,r.a.createElement("strong",null,"Show Comments ",r.a.createElement("i",{className:"fa fa-lg fa-angle-down"}))):r.a.createElement("div",null,r.a.createElement("strong",null,"Hide Comments ",r.a.createElement("i",{className:"fa fa-lg fa-angle-up"})))),r.a.createElement(x.a,{isOpen:this.state.isCommentFormOpen},r.a.createElement("br",null),this.renderCommentsCarousel({comments:this.props.comments})))))))}}}]),n}(n.Component),L=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchComments()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(F,{commentsLoading:this.props.comments.isLoading,commentsErrMess:this.props.comments.errMess,comments:this.props.comments.comments,postComment:this.props.postComment,resetFeedbackForm:this.props.resetFeedbackForm}))}}]),a}(n.Component),q=Object(d.connect)((function(e){return{comments:e.comments}}),(function(e){return{postComment:function(t){return e(function(e){return function(t){var a=Object.assign({date:(new Date).toISOString()},e);return fetch(h+"comments",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return alert("Thanks for your feedback!"),e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return t(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("Post comments",e.message),alert("Your comment could not be updated\n Error:"+e.message)}))}}(t))},fetchComments:function(){e((function(e){return fetch(h+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(p(t))})).catch((function(t){return e(f(t.message))}))}))},resetFeedbackForm:function(){e(u.actions.reset("feedback"))}}}))(L),_=a(79),P=a(14),H=a(77),z=a(78),B=a.n(z),J=a(30),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(J.a)({},e,{isLoading:!1,errMess:null,comments:t.payload});case"COMMENTS_LOADING":return Object(J.a)({},e,{isLoading:!0,errMess:null,comments:[]});case"COMMENTS_FAILED":return Object(J.a)({},e,{isLoading:!1,errMess:t.payload,comments:[]});case"ADD_COMMENT":var a=t.payload;return Object(J.a)({},e,{comments:e.comments.concat(a)});default:return e}},Z={author:"",email:"",message:""},U=Object(P.createStore)(Object(P.combineReducers)(Object(_.a)({comments:W},Object(u.createForms)({feedback:Z}))),Object(P.applyMiddleware)(H.a,B.a));var $=function(){return r.a.createElement(d.Provider,{store:U},r.a.createElement("div",{className:"App"},r.a.createElement(q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(138)},88:function(e,t,a){},89:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.02446185.chunk.js.map