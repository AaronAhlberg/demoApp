(this.webpackJsonpfriendsofuglcc=this.webpackJsonpfriendsofuglcc||[]).push([[0],{23:function(e,t,i){},33:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){},53:function(e,t,i){},54:function(e,t,i){},55:function(e,t,i){},56:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i(1),a=i.n(n),o=i(15),r=i.n(o),c=(i(33),i(8)),l=i.n(c),h=i(10),d=i(2),u=i(3),b=i(6),j=i(5),p=i(4),g=i(16),m=i.n(g),x=i(24),f=(i(40),i.p+"static/media/toggle_icon.745580e9.png"),O=i.p+"static/media/union_gap_logo.c768cb21.png",v=i.p+"static/media/letterheadInvert.0468d77a.png",w=function(e){Object(j.a)(i,e);var t=Object(p.a)(i);function i(e){var s;return Object(d.a)(this,i),(s=t.call(this,e)).state={sidebarOpen:!1},s.onSetSidebarOpen=s.onSetSidebarOpen.bind(Object(b.a)(s)),s.handlePageClick=s.handlePageClick.bind(Object(b.a)(s)),s}return Object(u.a)(i,[{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e})}},{key:"handlePageClick",value:function(e){this.onSetSidebarOpen(!1),this.props.FlipToPage(e)}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"header",children:Object(s.jsx)(x.a,{sidebar:Object(s.jsxs)("div",{navButtonContainer:!0,children:[Object(s.jsx)("img",{src:O,alt:"logo",className:"unionGapLogo"}),Object(s.jsx)("button",{className:"navButton",onClick:function(){e.handlePageClick(0)},children:"Home"}),Object(s.jsx)("button",{className:"navButton",onClick:function(){e.handlePageClick(1)},children:"Donate"}),Object(s.jsx)("button",{className:"navButton",onClick:function(){e.handlePageClick(2)},children:"Building Plans"}),Object(s.jsx)("button",{className:"navButton",onClick:function(){e.handlePageClick(5)},children:"Members"})]}),open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"white",zIndex:3}},children:Object(s.jsxs)("div",{className:"navbar",children:[this.props.ScreenWidth<=800&&Object(s.jsx)("input",{className:"toggleBtn",type:"image",src:f,alt:"toggle button",onClick:function(){return e.onSetSidebarOpen(!0)}}),this.props.ScreenWidth>800&&Object(s.jsxs)("div",{className:"fullNavBar",children:[Object(s.jsx)("img",{src:v,alt:"friendsoflgcc",className:"letterHeadFullscreen"}),Object(s.jsx)("button",{className:"fullNavButton",onClick:function(){e.handlePageClick(0)},children:"Home"}),Object(s.jsx)("button",{className:"fullNavButton",onClick:function(){e.handlePageClick(1)},children:"Donate"}),Object(s.jsx)("button",{className:"fullNavButton",onClick:function(){e.handlePageClick(2)},children:"Building Plans"}),Object(s.jsx)("button",{className:"fullNavButton",onClick:function(){e.handlePageClick(3)},children:"Members"})]}),this.props.ScreenWidth<=800&&Object(s.jsx)("img",{src:v,alt:"friendsoflgcc",className:"letterHeadMobile"})]})})})}}]),i}(a.a.Component),y=i.p+"static/media/point_arrow_up.6a88aec7.png",C=i.p+"static/media/point_arrow_down.f399de42.png",k=i(13),N=i(12);i(41),i(42);function P(e){return new Promise((function(t){return setTimeout(t,e)}))}var D=new Date("05/1/2021"),S=function(e){Object(j.a)(i,e);var t=Object(p.a)(i);function i(e){var s;return Object(d.a)(this,i),(s=t.call(this,e)).state={percentage:0,current:0,goal:5e5,daysLeft:0,animationRan:!1},s.increaseProgress=s.increaseProgress.bind(Object(b.a)(s)),s.calculatePerentage=s.calculatePerentage.bind(Object(b.a)(s)),s.calculateDaysLeft=s.calculateDaysLeft.bind(Object(b.a)(s)),s}return Object(u.a)(i,[{key:"componentDidMount",value:function(e){this.calculateDaysLeft()}},{key:"componentDidUpdate",value:function(e){this.prevProps!==this.props&&(1!==this.props.Index||this.state.animationRan||(this.setState({animationRan:!0}),this.increaseProgress(22e4)),1!==this.props.Index&&this.state.animationRan&&this.setState({animationRan:!1,current:0}))}},{key:"calculateDaysLeft",value:function(){var e=new Date,t=Math.abs(D-e);this.setState({daysLeft:Math.ceil(t/864e5)})}},{key:"calculatePerentage",value:function(){this.setState({percentage:Math.floor(this.state.current/this.state.goal*100)})}},{key:"increaseProgress",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.current<t)){e.next=9;break}return i=this.state.current,i+=1e3,this.setState({current:i}),e.next=6,P(10);case 6:this.calculatePerentage(),e.next=0;break;case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"progressBarContainer",children:[Object(s.jsxs)("div",{id:"amountRaised",children:["$",this.state.current.toLocaleString()]}),Object(s.jsx)("div",{className:"thermometer",children:Object(s.jsx)("div",{className:"progress",style:{width:this.state.percentage+"%"}})}),Object(s.jsxs)("div",{className:"statsParent",children:[Object(s.jsxs)("div",{className:"stats",children:[Object(s.jsx)("b",{className:"statText",children:"Progress"}),Object(s.jsxs)("div",{id:"percentage",children:[" ",this.state.percentage,"%"]})]}),Object(s.jsxs)("div",{className:"stats",children:[Object(s.jsx)("b",{className:"statText",children:"Days Left"}),Object(s.jsxs)("div",{id:"daysLeft",children:[this.state.daysLeft," "]})]}),Object(s.jsxs)("div",{className:"stats",children:[Object(s.jsx)("b",{className:"statText",children:" Goal"}),Object(s.jsxs)("div",{id:"goal",children:["$",this.state.goal.toLocaleString()]})]})]})]})}}]),i}(a.a.Component),I=i(26),M=i(9);var L={iconStyle:"solid",style:{base:{iconColor:"#c4f0ff",color:"#fff",fontWeight:500,fontFamily:"Roboto, Open Sans, Segoe UI, sans-serif",fontSize:"16px",fontSmoothing:"antialiased",":-webkit-autofill":{color:"#fce883"},"::placeholder":{color:"#87BBFD"}},invalid:{iconColor:"#FFC7EE",color:"#FFC7EE"}}},T=function(e){var t=e.onChange;return Object(s.jsx)("div",{className:"FormRow",children:Object(s.jsx)(M.CardElement,{options:L,onChange:t})})},H=function(e){var t=e.label,i=e.id,n=e.type,a=e.placeholder,o=e.required,r=e.autoComplete,c=e.value,l=e.onChange;return Object(s.jsxs)("div",{className:"FormRow",children:[Object(s.jsx)("label",{htmlFor:i,className:"FormRowLabel",children:t}),Object(s.jsx)("input",{className:"FormRowInput",id:i,type:n,placeholder:a,required:o,autoComplete:r,value:c,onChange:l,onClick:function(){return function(e){document.getElementById(e).focus()}(i)}})]})},F=function(e){var t=e.processing,i=e.error,n=e.children,a=e.disabled;return Object(s.jsx)("button",{className:"SubmitButton ".concat(i?"SubmitButton--error":""),type:"submit",disabled:t||a,children:t?"Processing...":n})},J=function(e){var t=e.children;return Object(s.jsxs)("div",{className:"ErrorMessage",role:"alert",children:[Object(s.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 17 17",children:[Object(s.jsx)("path",{fill:"#FFF",d:"M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"}),Object(s.jsx)("path",{fill:"#6772e5",d:"M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"})]}),t]})},B=function(e){var t=e.onClick;return Object(s.jsx)("button",{type:"button",className:"ResetButton",onClick:t,children:Object(s.jsx)("svg",{width:"32px",height:"32px",viewBox:"0 0 32 32",children:Object(s.jsx)("path",{fill:"#FFF",d:"M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"})})})},E=function(){var e=Object(M.useStripe)(),t=Object(M.useElements)(),i=Object(n.useState)(null),a=Object(N.a)(i,2),o=a[0],r=a[1],c=Object(n.useState)(!1),d=Object(N.a)(c,2),u=d[0],b=d[1],j=Object(n.useState)(!1),p=Object(N.a)(j,2),g=p[0],m=p[1],x=Object(n.useState)(null),f=Object(N.a)(x,2),O=f[0],v=f[1],w=Object(n.useState)({email:"",phone:"",name:""}),y=Object(N.a)(w,2),C=y[0],P=y[1],D=function(){var i=Object(h.a)(l.a.mark((function i(s){var n;return l.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(s.preventDefault(),e&&t){i.next=3;break}return i.abrupt("return");case 3:if(!o){i.next=6;break}return t.getElement("card").focus(),i.abrupt("return");case 6:return u&&m(!0),i.next=9,e.createPaymentMethod({type:"card",card:t.getElement(M.CardElement),billing_details:C});case 9:n=i.sent,m(!1),n.error?r(n.error):v(n.paymentMethod);case 12:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}();return O?Object(s.jsxs)("div",{className:"Result",children:[Object(s.jsx)("div",{className:"ResultTitle",role:"alert",children:"Payment successful"}),Object(s.jsxs)("div",{className:"ResultMessage",children:["Thanks for trying Stripe Elements. No money was charged, but we generated a PaymentMethod: ",O.id]}),Object(s.jsx)(B,{onClick:function(){r(null),m(!1),v(null),P({email:"",phone:"",name:""})}})]}):Object(s.jsxs)("form",{className:"Form",onSubmit:D,onFocus:function(e){e.preventDefault()},children:[Object(s.jsxs)("fieldset",{className:"FormGroup",children:[Object(s.jsx)(H,{label:"Name",id:"name",type:"text",placeholder:"Jane Doe",required:!0,autoComplete:"name",value:C.name,onChange:function(e){P(Object(k.a)(Object(k.a)({},C),{},{name:e.target.value}))}}),Object(s.jsx)(H,{label:"Email",id:"email",type:"email",placeholder:"janedoe@gmail.com",required:!0,autoComplete:"email",value:C.email,onChange:function(e){P(Object(k.a)(Object(k.a)({},C),{},{email:e.target.value}))}}),Object(s.jsx)(T,{onChange:function(e){r(e.error),b(e.complete)}})]}),Object(s.jsxs)("div",{className:"payButtonContainer",children:["  ",Object(s.jsx)(F,{processing:g,error:o,disabled:!e,children:"$5"}),Object(s.jsx)(F,{processing:g,error:o,disabled:!e,children:"$10"}),Object(s.jsx)(F,{processing:g,error:o,disabled:!e,children:"$25"}),Object(s.jsx)(F,{processing:g,error:o,disabled:!e,children:"$50"}),Object(s.jsx)(F,{processing:g,error:o,disabled:!e,children:"Other"})]}),o&&Object(s.jsx)(J,{children:o.message})]})},A={fonts:[{cssSrc:"https://fonts.googleapis.com/css?family=Roboto"}]},R=Object(I.a)("pk_test_6pRNASCoBOKtIshFeQd4XMUh"),W=function(e){Object(j.a)(i,e);var t=Object(p.a)(i);function i(e){var s;return Object(d.a)(this,i),(s=t.call(this,e)).state={runAnimation:!1},s}return Object(u.a)(i,[{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[this.props.Mobile&&Object(s.jsxs)("div",{className:"parentContainerDonate",style:{height:this.props.height-50+"px",position:"relative",bottom:"0px"},children:[Object(s.jsx)("div",{className:"donationCardParentMobile",id:"donationCardParentMobile",children:Object(s.jsx)("div",{className:"donationCardMobile",id:"donationCardMobile",children:Object(s.jsx)(M.Elements,{stripe:R,options:A,children:Object(s.jsx)(E,{})})})}),Object(s.jsx)("div",{className:"infoCardParentMobile",children:Object(s.jsx)("div",{className:"infoCard",children:Object(s.jsx)(S,{Index:this.props.Index})})})]}),!this.props.Mobile&&Object(s.jsxs)("div",{className:"parentContainerDonate",children:[Object(s.jsx)("div",{className:"donationCardParent",children:Object(s.jsx)("div",{className:"donationCard",children:Object(s.jsx)(M.Elements,{stripe:R,options:A,children:Object(s.jsx)(E,{})})})}),Object(s.jsx)("div",{className:"infoCardParent",children:Object(s.jsxs)("div",{className:"infoCard",children:[Object(s.jsx)("h1",{children:"Donation Tracker"}),Object(s.jsx)(S,{Index:this.props.Index})]})})]})]})}}]),i}(a.a.Component),z=(i(43),i(44),i(27)),_=i.p+"static/media/designplan1.e99da2a4.jpg",q=i.p+"static/media/design2.7f43397f.jpg",U=i.p+"static/media/design3.a85ca7e2.jpg",$=i.p+"static/media/design4.da0cc5a1.jpg",G=(i(50),function(e){Object(j.a)(i,e);var t=Object(p.a)(i);function i(e){var s;return Object(d.a)(this,i),(s=t.call(this,e)).state={},s}return Object(u.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"parentContainerBuilding",style:{height:this.props.height-50+"px",position:"relative",bottom:"0px"},children:[Object(s.jsx)("div",{className:"carouselParent",children:Object(s.jsxs)(z.Carousel,{className:"carousel",showThumbs:!1,dynamicHeight:!1,autoPlay:!0,emulateTouch:!0,swipeable:!0,stopOnHover:!0,interval:3e3,infiniteLoop:!0,showStatus:!0,showIndicators:!0,useKeyboardArrows:!0,transitionTime:200,swipeScrollTolerance:5,children:[Object(s.jsx)("div",{className:"picDiv",children:Object(s.jsx)("img",{className:"image",src:_,alt:""})}),Object(s.jsx)("div",{className:"picDiv",children:Object(s.jsx)("img",{className:"image",src:q,alt:""})}),Object(s.jsx)("div",{className:"picDiv",children:Object(s.jsx)("img",{className:"image",src:U,alt:""})}),Object(s.jsx)("div",{className:"picDiv",children:Object(s.jsx)("img",{className:"image",src:$,alt:""})})]})}),!this.props.Mobile&&Object(s.jsxs)("div",{className:"designInfoParent",children:[Object(s.jsxs)("div",{className:" floorPlanParent",children:[Object(s.jsx)("h1",{className:"buildingHeader",children:" Floor Plan"}),Object(s.jsx)("p",{className:"buildingP",children:"The new Union Gap Library/Community Center will be accessed via an entry courtyard designed to welcome visitors as well as to host gatherings and casual public use. The lobby serves both the Library and Community Center, providing restrooms and support facilities for both sides. The Library (west wing) is just over 2,000 square feet and will feature a generous Children\u2019s Area with a reading corner, fun furnishings and mobile shelving to allow the flexibility to support a wide range of programs. The Teen Area will house a connection bar for use of electronic devices as well as booth seating for study and team projects. A nook on the south side is set aside as a Reading Area which may include a fireplace if budget allows. A focal Check-Out (Circulation) Desk provides ease of access for patrons as well as full visibility for staff. The Community Center (east wing) has been designed at roughly 2,000 square feet and features a nice sized gathering space facing south for presentations and performances. A double-sided fireplace is shown facing both the gathering space and an exterior patio to the east which is again dependent on available funding. A kitchen has been included to support Meals on Wheels and other community functions. The floor plan is rounded out with an office and support spaces."})]}),Object(s.jsxs)("div",{className:"exteriorParent",children:[Object(s.jsx)("h1",{className:"buildingHeader",children:"Exterior Elevations"}),Object(s.jsx)("p",{className:"buildingP",style:{fontSize:"min(1.5vw, 16px)"},children:"The exterior of the building is designed to blend with City Hall in both the use of shed roofs and similar cladding materials. Windows will predominately face City Hall and the courtyard and include built-in sunshades to aid in sun control. Doors will be provided to allow ample access to exterior areas intended to host community activities."}),Object(s.jsxs)("div",{className:"downloadLinkContainer",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"downloadLink",children:"Design Plans "}),Object(s.jsx)("i",{children:"hereisthenameofthedocument.pdf"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"downloadLink",children:"Construction Costs"})," ",Object(s.jsx)("i",{children:"hereisthenameofthedocument.pdf"})]})]})]})]}),this.props.Mobile&&Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"floorPlanParentMobile",style:{fontSize:this.props.height/38},children:[Object(s.jsx)("h1",{className:"buildingHeader",children:" Floor Plan"}),Object(s.jsx)("p",{className:"buildingPMobile",children:"The new Union Gap Library/Community Center will be accessed via an entry courtyard designed to welcome visitors as well as to host gatherings and casual public use. The lobby serves both the Library and Community Center, providing restrooms and support facilities for both sides. The Library (west wing) is just over 2,000 square feet and will feature a generous Children\u2019s Area with a reading corner, fun furnishings and mobile shelving to allow the flexibility to support a wide range of programs."})]})})]})}}]),i}(a.a.Component)),Z=(i(51),function(e){Object(j.a)(i,e);var t=Object(p.a)(i);function i(e){var s;return Object(d.a)(this,i),(s=t.call(this,e)).state={},s}return Object(u.a)(i,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"buildingPlans2Parent",style:{height:this.props.height-50+"px",position:"relative",bottom:"0px"},children:Object(s.jsx)("div",{className:"floorPlanParent2",style:{fontSize:this.props.height/38},children:Object(s.jsx)("p",{className:"buildingPMobile",children:"The Teen Area will house a connection bar for use of electronic devices as well as booth seating for study and team projects. A nook on the south side is set aside as a Reading Area which may include a fireplace if budget allows. A focal Check-Out (Circulation) Desk provides ease of access for patrons as well as full visibility for staff. The Community Center (east wing) has been designed at roughly 2,000 square feet and features a nice sized gathering space facing south for presentations and performances. A double-sided fireplace is shown facing both the gathering space and an exterior patio to the east which is again dependent on available funding. A kitchen has been included to support Meals on Wheels and other community functions. The floor plan is rounded out with an office and support spaces."})})})}}]),i}(a.a.Component)),K=(i(52),function(e){Object(j.a)(i,e);var t=Object(p.a)(i);function i(e){var s;return Object(d.a)(this,i),(s=t.call(this,e)).state={},s}return Object(u.a)(i,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"buildingPlans3Parent",style:{height:this.props.height-50+"px",position:"relative",bottom:"0px"},children:Object(s.jsxs)("div",{className:"floorPlanParent3",style:{fontSize:this.props.height/38},children:[" ",Object(s.jsx)("div",{className:"exteriorParent2",children:Object(s.jsx)("h1",{style:{marginTop:"30px"},children:"Exterior Elevations"})}),Object(s.jsx)("p",{className:"buildingPMobile",children:"The exterior of the building is designed to blend with City Hall in both the use of shed roofs and similar cladding materials. Windows will predominately face City Hall and the courtyard and include built-in sunshades to aid in sun control. Doors will be provided to allow ample access to exterior areas intended to host community activities."}),Object(s.jsxs)("div",{className:"downloadLinkContainer3",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"downloadLink",children:"Design Plans "}),Object(s.jsx)("i",{children:"hereisthenameofthedocument.pdf"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"downloadLink",children:"Construction Costs"})," ",Object(s.jsx)("i",{children:"hereisthenameofthedocument.pdf"})]})]})]})})}}]),i}(a.a.Component)),Q=(i(23),i(53),i.p,i.p,function(e){Object(j.a)(i,e);var t=Object(p.a)(i);function i(e){var s;return Object(d.a)(this,i),(s=t.call(this,e)).state={},s}return Object(u.a)(i,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"profileParent",style:{width:this.props.width,height:this.props.height},children:Object(s.jsxs)("div",{className:"profilePicDiv",children:[Object(s.jsx)("img",{className:"profilePicture",src:this.props.Image,alt:"profile pic"}),Object(s.jsx)("h2",{className:"name",children:this.props.Name}),Object(s.jsx)("i",{className:"title",children:" Underwater basket weaver"})]})})}}]),i}(a.a.Component)),X=i.p+"static/media/profileIcon.07300db7.png",Y=function(e){Object(j.a)(i,e);var t=Object(p.a)(i);function i(e){var s;return Object(d.a)(this,i),(s=t.call(this,e)).state={},s}return Object(u.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"parentContainerMembersMobile",style:{height:this.state.height-50+"px",postion:"relative",bottom:"0px"},children:[Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"50%",height:"30%"}),Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"50%",height:"30%"}),Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"50%",height:"30%"}),Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"50%",height:"30%"})]})}}]),i}(a.a.Component),V=function(e){Object(j.a)(i,e);var t=Object(p.a)(i);function i(e){var s;return Object(d.a)(this,i),(s=t.call(this,e)).state={},s}return Object(u.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"parentContainerMembersMobile",style:{height:this.state.height-50+"px",postion:"relative",bottom:"0px"},children:[Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"50%",height:"30%"}),Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"50%",height:"30%"}),Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"50%",height:"30%"}),Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"50%",height:"30%"})]})}}]),i}(a.a.Component),ee=(i(54),a.a.Component,i(55),function(e){Object(j.a)(i,e);var t=Object(p.a)(i);function i(e){var s;return Object(d.a)(this,i),(s=t.call(this,e)).state={},s}return Object(u.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"parentContainerMembers",children:[Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"25%",height:"30%"}),Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"25%",height:"30%"}),Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"25%",height:"30%"}),Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"25%",height:"30%"}),Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"25%",height:"30%"}),Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"25%",height:"30%"}),Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"25%",height:"30%"}),Object(s.jsx)(Q,{Name:"John Doe",Description:"here is a very long descripton. John doe is a senior specialist at doing nothing. he is responsible for absolutley nothing. He doesnt even exist. I just used him as a placeholder to show what some text looks like. Poor john doe, no one likes him.",Image:X,width:"25%",height:"30%"})]})}}]),i}(a.a.Component)),te=400;function ie(e){return new Promise((function(t){return setTimeout(t,e)}))}var se=function(e){Object(j.a)(i,e);var t=Object(p.a)(i);function i(e){var s;return Object(d.a)(this,i),(s=t.call(this,e)).state={pageIndex:0,scrollIndex:0,width:0,height:0,pageFlipping:!1,greatestHeight:0},s.updatePageState=s.updatePageState.bind(Object(b.a)(s)),s.flipToPage=s.flipToPage.bind(Object(b.a)(s)),s.upPage=s.upPage.bind(Object(b.a)(s)),s.downPage=s.downPage.bind(Object(b.a)(s)),s.detectScroll=s.detectScroll.bind(Object(b.a)(s)),s.updateWindowDimensions=s.updateWindowDimensions.bind(Object(b.a)(s)),s.pageFlipStarted=s.pageFlipStarted.bind(Object(b.a)(s)),s}return Object(u.a)(i,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"detectScroll",value:function(e){e.preventDefault();var t=e.deltaY;t<-1&&this.setState({scrollIndex:this.state.scrollIndex+t}),t>1&&this.setState({scrollIndex:this.state.scrollIndex+t}),this.state.scrollIndex>=500&&(this.upPage(),this.setState({scrollIndex:0})),this.state.scrollIndex<=-500&&(this.downPage(),this.setState({scrollIndex:0}))}},{key:"pageFlipStarted",value:function(e){this.setState({pageFlipping:!0})}},{key:"updatePageState",value:function(e){this.setState({pageIndex:e,pageFlipping:!1})}},{key:"upPage",value:function(){this.flipPage.gotoNextPage()}},{key:"downPage",value:function(){this.flipPage.gotoPreviousPage()}},{key:"flipToPage",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=t-this.state.pageIndex)>0)){e.next=9;break}case 2:if(0===i){e.next=9;break}return this.flipPage.gotoNextPage(),i-=1,e.next=7,ie(500);case 7:e.next=2;break;case 9:if(!(i<0)){e.next=17;break}case 10:if(0===i){e.next=17;break}return this.flipPage.gotoPreviousPage(),i+=1,e.next=15,ie(500);case 15:e.next=10;break;case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"App",onWheel:function(t){return e.detectScroll(t)},children:[Object(s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"}),Object(s.jsxs)("body",{style:{height:this.state.height},children:[Object(s.jsx)(w,{FlipToPage:this.flipToPage,ScreenWidth:this.state.width}),this.state.width>800&&Object(s.jsx)("div",{className:"flipPage",style:{height:this.state.height-50+"px"},children:Object(s.jsxs)(m.a,{responsive:!0,uncutPages:!1,animationDuration:te,showTouchHint:!0,showHint:!0,showSwipeHint:!0,loopForever:!0,style:{zIndex:0},onPageChange:function(t){e.updatePageState(t)},ref:function(t){e.flipPage=t},children:[Object(s.jsx)("div",{className:"topPage",style:{height:this.state.height-50+"px"},children:Object(s.jsxs)("div",{alt:"image3d",className:"drawing3d",style:{height:this.state.height-50+"px"},children:[Object(s.jsxs)("div",{className:"homeTextParent",children:[Object(s.jsx)("h1",{className:"homeHeading",children:"Here is a super awesome statement to get people to give money ya."}),Object(s.jsx)("p",{className:"homeP",children:"here is some supporting text to go along with the heading"})]}),Object(s.jsx)("button",{className:"donateButton",onClick:function(){e.flipToPage(1)},children:"DONATE"})]})}),Object(s.jsx)(W,{Mobile:!1,Index:this.state.pageIndex}),Object(s.jsx)(G,{style:{height:this.state.height-50+"px"},Mobile:!1}),Object(s.jsx)(ee,{style:{height:this.state.height-50+"px"},Mobile:!1})]})}),this.state.width<=800&&Object(s.jsx)("div",{className:"flipPage",style:{height:this.state.height-50+"px"},children:Object(s.jsxs)(m.a,{responsive:!0,uncutPages:!1,animationDuration:te,showTouchHint:!0,showHint:!0,showSwipeHint:!0,loopForever:!0,style:{zIndex:0},onPageChange:function(t){e.updatePageState(t)},ref:function(t){e.flipPage=t},children:[Object(s.jsx)("div",{className:"topPage",style:{height:this.state.height-50+"px"},children:Object(s.jsxs)("div",{alt:"image3d",className:"drawing3dMobile",style:{height:this.state.height-50+"px"},children:[Object(s.jsxs)("div",{className:"homeTextParentMobile",children:[Object(s.jsx)("h1",{className:"homeHeading",children:"Here is a super awesome statement to get people to give money ya."}),Object(s.jsx)("p",{className:"homeP",children:"here is some supporting text to go along with the heading"})]}),Object(s.jsx)("button",{className:"donateButton",onClick:function(){e.flipToPage(1)},children:"DONATE"})]})}),Object(s.jsx)(W,{width:this.state.width,height:this.state.height,Mobile:!0,Index:this.state.pageIndex}),Object(s.jsx)(G,{width:this.state.width,height:this.state.height,Mobile:!0}),Object(s.jsx)(Z,{width:this.state.width,height:this.state.height,Mobile:!0}),Object(s.jsx)(K,{width:this.state.width,height:this.state.height,Mobile:!0}),Object(s.jsx)(Y,{width:this.state.width,height:this.state.height,Mobile:!0}),Object(s.jsx)(V,{width:this.state.width,height:this.state.height,Mobile:!0})]})}),Object(s.jsxs)("div",{className:"arrowContainer",children:[Object(s.jsx)("input",{alt:"upArrow",type:"image",src:y,className:"arrow",onClick:function(){return e.downPage()}}),Object(s.jsxs)("text",{className:"pageNumber",children:[" ",this.state.pageIndex+1]}),Object(s.jsx)("input",{alt:"upArrow",type:"image",src:C,className:"arrow",onClick:function(){return e.upPage()}})]})]})]})}}]),i}(n.Component),ne=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,57)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;i(e),s(e),n(e),a(e),o(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(se,{})}),document.getElementById("root")),ne()}},[[56,1,2]]]);
//# sourceMappingURL=main.2c19e8e3.chunk.js.map