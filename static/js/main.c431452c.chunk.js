(this.webpackJsonpreact_dim=this.webpackJsonpreact_dim||[]).push([[0],{128:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(32),a=n(5),o={dialogs:[{name:"Sveta",id:"1"},{name:"Andrey",id:"2"},{name:"Anna",id:"3"},{name:"Dmitriy",id:"4"},{name:"Vladimir",id:"5"}],messages:[{message:"What do you do?",id:"1"},{message:"Where are you?",id:"2"},{message:"What is your name?",id:"3"}]},s=function(e){return{type:"SEND-MESSAGE",newMessageElement:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageElement;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:"4",message:n}])});default:return e}}},133:function(e,t,n){e.exports={photo:"Users_photo__2hOPg",selectedPage:"Users_selectedPage__J63sh",usersInfo:"Users_usersInfo__3m434"}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(99),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"59fb2a23-d971-4bf4-856d-efb67c5dbeba"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),s.getProfile(e)}},s={getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),a.get("profile/"+e)},getStatus:function(e){return console.warn("Obsolete method. Please profileAPI object."),a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.delete("auth/login",{email:e,password:t,rememberMe:n})}}},167:function(e,t,n){},168:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},27:function(e,t,n){e.exports={navbar:"Navbar_navbar__CLYHD",active:"Navbar_active__3mbhk"}},296:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,306)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),o(e),s(e)}))},a=n(0),o=n.n(a),s=n(63),i=n.n(s),c=(n(167),n(34)),u=n(35),l=n(37),d=n(36),b=(n(168),n(13)),j=n(27),f=n.n(j),A=n(1),g=function(){return Object(A.jsxs)("nav",{className:f.a.navbar,children:[Object(A.jsx)("div",{children:Object(A.jsx)(b.b,{to:"/profile",activeClassName:f.a.active,children:"Profile"})}),Object(A.jsx)("div",{children:Object(A.jsx)(b.b,{to:"/dialogs",activeClassName:f.a.active,children:"Messages"})}),Object(A.jsx)("div",{children:Object(A.jsx)(b.b,{to:"/news",activeClassName:f.a.active,children:"News"})}),Object(A.jsx)("div",{children:Object(A.jsx)(b.b,{to:"/music",activeClassName:f.a.active,children:"Music"})}),Object(A.jsx)("div",{children:Object(A.jsx)(b.b,{to:"/settings",activeClassName:f.a.active,children:"Settings"})}),Object(A.jsx)("div",{children:Object(A.jsx)(b.b,{to:"/users",activeClassName:f.a.active,children:"Users"})})]})},h=(n(174),function(){return Object(A.jsx)("div",{children:"News"})}),O=(n(175),function(){return Object(A.jsx)("div",{children:"Music"})}),p=(n(176),function(){return Object(A.jsx)("div",{children:"Settings"})}),m=n(9),x=n(12),v=n(32),I=n(5),C=n(15),S="FOLLOW",Q="UNFOLLOW",w="SET_ USERS",P="SET_CURRENT_PAGE",U="SET_TOTAL_USERS_COUNT",D="TOGGLE_IS_FETCHING",E="TOGGLE_IS_FOLLOWING_PROGRESS",B={users:[],pageSize:10,totalUsersCount:0,currentPage:1,ifFetching:!0,followingInProgress:[20663]},N=function(e){return{type:P,currentPage:e}},q=function(e){return{type:D,isFetching:e}},k=function(e,t){return{type:E,isFetching:e,userId:t}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(I.a)(Object(I.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(I.a)(Object(I.a)({},e),{},{followed:!0}):e}))});case Q:return Object(I.a)(Object(I.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(I.a)(Object(I.a)({},e),{},{followed:!1}):e}))});case w:return Object(I.a)(Object(I.a)({},e),{},{users:Object(v.a)(t.users)});case P:return Object(I.a)(Object(I.a)({},e),{},{currentPage:t.currentPage});case U:return Object(I.a)(Object(I.a)({},e),{},{totalUsersCount:t.count});case D:return Object(I.a)(Object(I.a)({},e),{},{ifFetching:t.isFetching});case E:return Object(I.a)(Object(I.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(v.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}},H=n(51),F=n(68),y=n(97),R=n(70),V=n.n(R),K=n(132),T=n.n(K),Z=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,o=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,c=Math.ceil(t/n),u=[],l=1;l<=c;l++)u.push(l);var d=Math.ceil(c/i),b=Object(a.useState)(1),j=Object(y.a)(b,2),f=j[0],g=j[1],h=(f-1)*i+1,O=f*i;return Object(A.jsxs)("div",{className:V.a.paginator,children:[f>1&&Object(A.jsx)("button",{onClick:function(){g(f-1)},children:"PREV"}),u.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(A.jsx)("span",{className:T()(Object(F.a)({},V.a.selectedPage,r===e),V.a.pageNumber),onClick:function(t){o(e)},children:e},e)})),d>f&&Object(A.jsx)("button",{onClick:function(){g(f+1)},children:"NEXT"})]})},L=n(133),z=n.n(L),W=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(A.jsxs)("div",{children:[Object(A.jsxs)("span",{children:[Object(A.jsx)("div",{children:Object(A.jsx)(b.b,{to:"/profile/"+t.id,children:Object(A.jsx)("img",{className:z.a.photo,src:null!=t.photos.small?t.photos.small:"data:image/jpeg;base64,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"})})}),Object(A.jsx)("div",{children:t.followed?Object(A.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"unfollow"}):Object(A.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"follow"})})]}),Object(A.jsxs)("span",{children:[Object(A.jsxs)("span",{children:[Object(A.jsx)("div",{children:t.name}),Object(A.jsx)("div",{children:t.status})]}),Object(A.jsxs)("span",{children:[Object(A.jsx)("div",{children:"user.location.city"}),Object(A.jsx)("div",{children:"user.location.country"})]})]})]})},Y=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],J=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,o=e.users,s=Object(H.a)(e,Y);return Object(A.jsxs)("div",{children:[Object(A.jsx)(Z,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),Object(A.jsx)("div",{children:o.map((function(e){return Object(A.jsx)(W,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},e.id)}))})]})},X=n(66),M=n(10),_=n(137),$=Object(_.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ee=function(e){return e.usersPage.pageSize},te=function(e){return e.usersPage.totalUsersCount},ne=function(e){return e.usersPage.currentPage},re=function(e){return e.usersPage.ifFetching},ae=function(e){return e.usersPage.followingInProgress},oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(A.jsxs)(A.Fragment,{children:[this.props.isFetching?Object(A.jsx)(X.a,{}):null,Object(A.jsx)(J,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(o.a.Component),se=Object(M.d)(Object(x.b)((function(e){return{users:$(e),pageSize:ee(e),totalUsersCount:te(e),currentPage:ne(e),isFetching:re(e),followingInProgress:ae(e)}}),{follow:function(e){return function(t){t(k(!0,e)),C.c.follow(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:S,userId:e}}(e)),t(k(!1,e))}))}},unfollow:function(e){return function(t){t(k(!0,e)),C.c.unfollow(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:Q,userId:e}}(e)),t(k(!1,e))}))}},setCurrentPage:N,toggleFollowingInProgress:k,requestUsers:function(e,t){return function(n){n(q(!0)),n(N(e)),C.c.getUsers(e,t).then((function(e){var t,r;n(q(!1)),n((t=e.items,{type:w,users:t})),n((r=e.totalCount,{type:U,count:r}))}))}}}))(oe),ie=n(71),ce=n.n(ie),ue=function(e){return Object(A.jsxs)("header",{className:ce.a.header,children:[Object(A.jsx)("img",{className:ce.a.headerImg,alt:"",src:"data:image/png;base64,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"}),Object(A.jsx)("div",{className:ce.a.loginBlock,children:e.isAuth?Object(A.jsxs)("div",{children:[e.login," - ",Object(A.jsx)("button",{onClick:e.logout,children:"logout"})]}):Object(A.jsx)(b.b,{to:"/login",children:"login"})})]})},le=n(28),de="FOLLOW",be={id:null,email:null,login:null,isAuth:!1},je=function(e,t,n,r){return{type:de,payload:{id:e,email:t,login:n,isAuth:r}}},fe=function(){return function(e){return C.a.me().then((function(t){if(0===t.data.resultCode){var n=t.data.data,r=n.id,a=n.email,o=n.login;e(je(r,a,o,!0))}}))}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(I.a)(Object(I.a)({},e),t.payload);default:return e}},ge=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(A.jsx)(ue,Object(I.a)({},this.props))}}]),n}(o.a.Component),he=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){C.a.logout().then((function(t){0===t.data.resultCode&&e(je(null,null,null,!1))}))}}})(ge),Oe=n(33),pe=n.n(Oe),me=n(90),xe=n(129),ve=n(54),Ie=n(87),Ce=Object(xe.a)({form:"login"})((function(e){return Object(A.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(A.jsx)("div",{children:Object(A.jsx)(me.a,{placeholder:"Email",name:"email",component:ve.a,validate:[Ie.b]})}),Object(A.jsx)("div",{children:Object(A.jsx)(me.a,{placeholder:"Password",name:"password",component:ve.a,validate:[Ie.b],type:"password"})}),Object(A.jsxs)("div",{children:["remeber me",Object(A.jsx)(me.a,{component:ve.a,name:"rememberMe",type:"checkbox"})]}),e.error&&Object(A.jsx)("div",{className:pe.a.formSummaryError,children:e.error}),Object(A.jsx)("div",{children:Object(A.jsx)("button",{children:"Login"})})]})})),Se=Object(x.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(r){C.a.login(e,t,n).then((function(e){if(0===e.data.resultCode)r(fe());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";r(Object(le.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(A.jsx)(m.a,{to:"/profile"}):Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"Login"}),Object(A.jsx)(Ce,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Qe="INITIALIZED_SUCCSESS",we={initialized:!1},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Qe:return Object(I.a)(Object(I.a)({},e),{},{initialized:!0});default:return e}},Ue=n(128),De=n(96),Ee=n(136),Be=n(130),Ne=Object(M.c)({profilesPage:De.b,dialogsPage:Ue.a,usersPage:G,auth:Ae,form:Be.a,app:Pe}),qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.d,ke=Object(M.e)(Ne,qe(Object(M.a)(Ee.a)));window.store=ke;var Ge=ke,He=o.a.lazy((function(){return n.e(4).then(n.bind(null,308))})),Fe=o.a.lazy((function(){return n.e(3).then(n.bind(null,307))})),ye=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(A.jsxs)("div",{className:"App-wrapper",children:[Object(A.jsx)(he,{}),Object(A.jsx)(g,{}),Object(A.jsxs)("div",{className:"App-wrapper-content",children:[Object(A.jsx)(m.b,{path:"/profile/:userId?",render:function(){return Object(A.jsx)(a.Suspense,{fallback:Object(A.jsx)("div",{children:"Loading..."}),children:Object(A.jsx)(Fe,{})})}}),Object(A.jsx)(m.b,{path:"/dialogs",render:function(){return Object(A.jsx)(a.Suspense,{fallback:Object(A.jsx)("div",{children:"Loading..."}),children:Object(A.jsx)(He,{})})}}),Object(A.jsx)(m.b,{path:"/news",component:h}),Object(A.jsx)(m.b,{path:"/music",component:O}),Object(A.jsx)(m.b,{path:"/settings",component:p}),Object(A.jsx)(m.b,{path:"/users",render:function(){return Object(A.jsx)(se,{})}}),Object(A.jsx)(m.b,{path:"/login",render:function(){return Object(A.jsx)(Se,{})}})]})]}):Object(A.jsx)(X.a,{})}}]),n}(o.a.Component),Re=Object(M.d)(m.f,Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(fe()).then((function(){e({type:Qe})}))}}}))(ye),Ve=function(e){return Object(A.jsx)(b.a,{children:Object(A.jsx)(x.a,{store:Ge,children:Object(A.jsx)(Re,{})})})};i.a.render(Object(A.jsx)(Ve,{}),document.getElementById("root")),r()},33:function(e,t,n){e.exports={formControl:"FormsControl_formControl__WE9ql",error:"FormsControl_error__eY5EU",formSummaryError:"FormsControl_formSummaryError__3Uy6X"}},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return j}));var r=n(5),a=n(51),o=n(90),s=n(33),i=n.n(s),c=n(1),u=["input","meta"],l=["input","meta"],d=function(e){var t=e.input,n=e.meta,o=Object(a.a)(e,u),s=n.touched&&n.error;return Object(c.jsxs)("div",{className:i.a.formControl+" "+(s?i.a.error:""),children:[Object(c.jsx)("div",{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),o))}),s&&Object(c.jsx)("span",{children:n.error})]})},b=function(e){var t=e.input,n=e.meta,o=Object(a.a)(e,l),s=n.touched&&n.error;return Object(c.jsxs)("div",{className:i.a.formControl+" "+(s?i.a.error:""),children:[Object(c.jsx)("div",{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),o))}),s&&Object(c.jsx)("span",{children:n.error})]})},j=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return Object(c.jsx)("div",{children:Object(c.jsx)(o.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},s))})}},66:function(e,t,n){"use strict";n.p;var r=n(1);t.a=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{children:"...Loading"})})}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki"}},71:function(e,t,n){e.exports={header:"Header_header__1VCKf",headerImg:"Header_headerImg__2Xn2T",loginBlock:"Header_loginBlock__6mma5"}},87:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return v}));var r=n(95),a=n.n(r),o=n(135),s=n(32),i=n(5),c=n(15),u=n(28),l="PROFILE/ADD_POST",d="PROFILE/DELETE_POST",b="PROFILE/SET_USER_PROFILE",j="PROFILE/SET_STATUS",f="PROFILE/SEVE_PHOTO_SUCCESS",A={posts:[{id:"1",message:"How are you?",likeCount:"20"},{id:"2",message:"Are you ok?",likeCount:"225"},{id:"3",message:"What is your name?",likeCount:"3"},{id:"4",message:"Where do you live?",likeCount:"45"}],profile:null,status:""},g=function(e){return{type:l,newPostText:e}},h=function(e){return{type:j,status:e}},O=function(e){return function(t){c.c.getProfile(e).then((function(e){var n;t((n=e.data,{type:b,profile:n}))}))}},p=function(e){return function(t){c.b.getStatus(e).then((function(e){t(h(e.data))}))}},m=function(e){return function(t){c.b.updateStatus(e).then((function(n){0===n.data.resultCode&&t(h(e))}))}},x=function(e){return function(t){c.b.savePhoto(e).then((function(e){var n;0===e.data.resultCode&&t((n=e.data.data.photos,{type:f,photos:n}))}))}},v=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var o,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.id,t.next=3,c.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(O(o)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n=t.newPostText;return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[{id:"5",message:n,likeCount:"0"}])});case d:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case j:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case b:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case f:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[296,1,2]]]);
//# sourceMappingURL=main.c431452c.chunk.js.map