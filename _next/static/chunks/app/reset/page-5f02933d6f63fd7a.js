(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{55013:function(e,t,n){Promise.resolve().then(n.bind(n,18310))},59951:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(49755),a=function(e){return(e+1)%1e6};function o(e,t){return"function"==typeof e?e.length?e(t):e():e}function s(e,t,n){void 0===e&&(e=0),void 0===t&&(t=null),void 0===n&&(n=null);var s,u,i,l=o(e);"number"!=typeof l&&console.error("initialValue has to be a number, got "+typeof e),"number"==typeof n?l=Math.max(l,n):null!==n&&console.error("min has to be a number, got "+typeof n),"number"==typeof t?l=Math.min(l,t):null!==t&&console.error("max has to be a number, got "+typeof t);var c=(s=l,u=(0,r.useRef)(o(s)),i=(0,r.useReducer)(a,0)[1],(0,r.useMemo)(function(){return[function(){return u.current},function(e){u.current=o(e,u.current),i()}]},[])),d=c[0],f=c[1];return[d(),(0,r.useMemo)(function(){var e=function(e){var r=d(),a=o(e,r);r!==a&&("number"==typeof n&&(a=Math.max(a,n)),"number"==typeof t&&(a=Math.min(a,t)),r!==a&&f(a))};return{get:d,set:e,inc:function(t){void 0===t&&(t=1);var n=o(t,d());"number"!=typeof n&&console.error("delta has to be a number or function returning a number, got "+typeof n),e(function(e){return e+n})},dec:function(t){void 0===t&&(t=1);var n=o(t,d());"number"!=typeof n&&console.error("delta has to be a number or function returning a number, got "+typeof n),e(function(e){return e-n})},reset:function(t){void 0===t&&(t=l);var n=o(t,d());"number"!=typeof n&&console.error("value has to be a number or function returning a number, got "+typeof n),l=n,e(n)}}},[l,n,t])]}},3762:function(e,t,n){"use strict";var r=n(49755);t.Z=function(e,t){var n=(0,r.useRef)(function(){});(0,r.useEffect)(function(){n.current=e}),(0,r.useEffect)(function(){if(null!==t){var e=setInterval(function(){return n.current()},t||0);return function(){return clearInterval(e)}}},[t])}},63568:function(e,t,n){"use strict";n.d(t,{Vo:function(){return l},Ho:function(){return f},Eu:function(){return m}});var r=n(81210),a=n(93271);function o(){return window.EnReachAI}var s=n(95258),u=n(49755),i=n(44761);let l=(0,u.createContext)({login:async()=>{},setUser:()=>{},logout:()=>{}}),c="last-login-user",d=()=>{try{let e=localStorage.getItem(c);if(!e)return null;return JSON.parse(e)}catch(e){return console.error(e),null}},f=e=>{let{children:t}=e,n=(0,s.useRouter)(),[f,m]=(0,u.useState)(d()),p=e=>{var t,r;e?(m(e),localStorage.setItem(c,JSON.stringify(e)),e.token&&(null===(r=o())||void 0===r||r.request({name:"setAccessToken",body:e.token}).catch(console.error)),n.push("/")):(m(null),localStorage.removeItem(c),null===(t=o())||void 0===t||t.request({name:"clearAccessToken"}).catch(console.error),n.push("/signin"))};(0,u.useEffect)(()=>{let e;return f&&f.token&&(e=setInterval(()=>{let e=o();if(!e){console.warn("Extension not installed");return}e.request({name:"getUser"}).then(t=>{t&&"success"===t.status||e.request({name:"setAccessToken",body:f.token})})},1e3)),()=>clearInterval(e)},[f]);let g=async e=>{try{if(!e.email||!e.password)return;let t=await a.Z.loginApi(e);p(t),a.Z.setAuth()}catch(e){console.error(e)}};a.Z.setAuth(null==f?void 0:f.token);let h=(0,i.ZP)(["QueryUserInfo",null==f?void 0:f.token],()=>a.Z.userInfo());return(0,r.jsx)(l.Provider,{value:{user:f,login:g,logout:()=>{p()},setUser:p,queryUserInfo:h},children:t})},m=()=>(0,u.useContext)(l)},18310:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(81210),a=n(27767),o=n(36689),s=n(93271),u=n(17528),i=n(95258),l=n(49755),c=n(36062),d=n(63568),f=n(47608),m=n(59951),p=n(3762);function g(){let e=(0,i.useSearchParams)(),[t,n]=(0,l.useState)(e.get("email")||""),[g,h]=(0,l.useState)(""),[v,w]=(0,l.useState)(""),[b,x]=(0,l.useState)(""),[y,j]=(0,m.Z)(0,60,0);(0,p.Z)(()=>{j.dec(1)},1e3);let P=(0,i.useRouter)(),A=(0,d.Eu)(),{mutate:k,isPending:N}=(0,u.D)({onError:f.rV,mutationFn:async e=>{if(e.preventDefault(),!t)throw Error("Please enter email");if(!g||!v)throw Error("Please enter email or password");if(g!==v)throw Error("Please confirm password");if(!b)throw Error("Please enter verify code");await s.Z.resetPassword({email:t,password:g,verifyCode:b}),c.Am.success("Reset Password Success!"),A.logout(),await (0,f._v)(2e3),P.push("/signin")}}),{mutate:C,isPending:R,isIdle:E}=(0,u.D)({onError:f.rV,mutationFn:async()=>{if(!t)throw Error("Please enter email");await s.Z.sendResetPassword(t),j.reset(60)}});return(0,r.jsxs)("div",{className:"mx-auto p-5 min-h-full flex flex-col gap-5 items-center w-full max-w-[25rem]",children:[(0,r.jsx)("img",{src:"logo.svg",alt:"Logo",className:"mt-auto h-[79px]"}),(0,r.jsxs)("form",{onSubmit:k,className:"flex flex-col gap-5 w-full mb-auto",children:[(0,r.jsx)(o.j7,{value:t,setEmail:n}),(0,r.jsx)(o.CM,{label:"New Password",setPassword:h}),(0,r.jsx)(o.CM,{label:"Confirm Password",setPassword:w}),(0,r.jsxs)("div",{className:"flex gap-5",children:[(0,r.jsx)(o.Iv,{setVerifyCode:x}),(0,r.jsx)(a.un,{type:"button",isDisabled:y>0||R,isLoading:R,onClick:C,children:E?"Send":y>0?"Resend(".concat(y,"s)"):"Resend"})]}),(0,r.jsx)(a.un,{type:"submit",isLoading:N,children:"Reset Password"})]})]})}},27767:function(e,t,n){"use strict";n.d(t,{a5:function(){return l},uU:function(){return i},un:function(){return u}});var r=n(81210),a=n(11013),o=n(41551),s=n(62365);function u(e){let{children:t,className:n,...s}=e;return(0,r.jsx)(a.A,{color:"primary",className:(0,o.cn)("h-[42px] hover:bg-default",n),...s,children:t})}function i(e){let{children:t,className:n,...s}=e;return(0,r.jsx)(a.A,{color:"primary",className:(0,o.cn)("h-[42px] bg-l1 shadow-1 backdrop-blur-lg hover:bg-primary",n),...s,children:t})}function l(e){let{children:t,className:n,tip:u,...i}=e;return(0,r.jsx)(s.S,{content:u,children:(0,r.jsx)(a.A,{color:"primary",className:(0,o.cn)("h-8 w-8 min-w-8 max-w-8 rounded-full p-0 hover:bg-default",n),...i,children:t})})}},36689:function(e,t,n){"use strict";n.d(t,{CM:function(){return d},Fx:function(){return g},Iv:function(){return p},e9:function(){return m},j7:function(){return f}});var r=n(81210),a=n(52897),o=n(37018),s=n(84824),u=n(54957),i=n(29060),l=n.n(i);let c={inputWrapper:"h-[42px] rounded-lg bg-l1 border-none backdrop-blur-lg shadow-1 text-xs",label:"text-xs",input:"text-xs"};function d(e){let{setPassword:t,label:n,error:i}=e,[l,d]=(0,u.Z)(!1);return(0,r.jsx)(o.Y,{isRequired:!0,classNames:c,type:l?"text":"password",placeholder:n||"Password",labelPlacement:"inside",variant:"bordered",validate:a.uo,endContent:(0,r.jsx)("button",{className:"focus:outline-none h-full",type:"button",onClick:()=>d(),"aria-label":"toggle password visibility",children:l?(0,r.jsx)(s.VhL,{className:"text-xs text-default-400 pointer-events-none"}):(0,r.jsx)(s.nO8,{className:"text-xs text-default-400 pointer-events-none"})}),errorMessage:i,onChange:e=>t(e.target.value)})}function f(e){let{setEmail:t,value:n}=e;return(0,r.jsx)(o.Y,{value:n,classNames:c,type:"email",placeholder:"Email",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:a.oH,onChange:e=>t(e.target.value)})}function m(e){let{setReferalCode:t,value:n}=e;return(0,r.jsx)(o.Y,{value:n,classNames:c,type:"text",placeholder:"Referral code",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:a.tx,onChange:e=>t(e.target.value)})}function p(e){let{setVerifyCode:t}=e;return(0,r.jsx)(o.Y,{classNames:c,type:"text",placeholder:"Verification Code",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:a.jg,onChange:e=>t(e.target.value)})}function g(e){let{onComplete:t,onChange:n}=e;return(0,r.jsx)(l(),{placeholder:"",onChange:n,onComplete:t,classNames:{container:"w-full justify-between h-[42px] ",character:"rounded-lg max-w-[42px]  w-[42px] bg-l1 bg-transparent backdrop-blur-lg shadow-1 text-white text-xl leading-[42px] uppercase"}})}},62365:function(e,t,n){"use strict";n.d(t,{S:function(){return s}});var r=n(81210),a=n(62216),o=n(47048);function s(e){let{content:t,children:n}=e;return(0,r.jsx)(a.e,{showArrow:!1,content:t,color:"default",className:" min-h-9 min-w-[4.5rem]",classNames:{content:"bg-[#40414F] border border-solid border-[rgba(255,255,255,0.1)] min-h-9 min-w-[4.5rem] text-xs"},children:n||(0,r.jsx)("button",{className:"outline-none border-none",children:(0,r.jsx)(o.nj5,{})})})}},93271:function(e,t,n){"use strict";n.d(t,{t:function(){return a},Z:function(){return u}});var r=n(80957);n(45303).env.NEXT_PUBLIC_BASE_PATH;let a="https://dev-api.enreach.network/api",o=r.Z.create({baseURL:a,headers:{"Content-Type":"application/json"}}),s={setAuth:e=>{e?o.defaults.headers.common.Authorization=e.startsWith("Bearer")?e:"Bearer ".concat(e):delete o.defaults.headers.common.Authorization},loginApi:async e=>{let t=await o.post("/user/signIn",e);return s.setAuth(t.data.data.token),t.data.data},loginByGoogleApi:async e=>{let t=await o.post("/user/google/signIn",e);return s.setAuth(t.data.data.token),t.data.data},loginSetReferralApi:async e=>{let t=await o.post("/user/referral/by",e);return s.setAuth(t.data.data.token),t.data.data},registerApi:async e=>(await o.post("/user/signUp",{...e})).data.data,registerByGoogleApi:async e=>(await o.post("/user/google/signUp",{accessToken:e})).data.data,resendRegisterVerifyCode:async e=>(await o.post("/verify/".concat(e,"/resend")),!0),verifyRegisterCode:async(e,t)=>(await o.post("/verify/".concat(e,"/").concat(t))).data.data,userInfo:async()=>(await o.get("/user/profile")).data.data,sendResetPassword:async e=>(await o.post("/user/password/reset/send",{email:e}),!0),resetPassword:async e=>(await o.post("/user/password/reset",e),!0),userUpdate:async e=>(await o.post("/user/profile/update",e),!0),userReward:async()=>(await o.get("/user/reward")).data.data,nodeList:async()=>(await o.get("/node/list")).data.data,trendingRewards:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"month";return(await o.get("/trending/rewards",{params:{type:e}})).data.data},getAccessToken:async()=>(await o.get("/user/accessToken")).data.data.accessToken,getIP:async()=>(await r.Z.get("https://api.bigdatacloud.net/data/client-ip")).data};var u=s},47608:function(e,t,n){"use strict";n.d(t,{G$:function(){return d},N3:function(){return i},Y:function(){return f},_v:function(){return c},rV:function(){return l}});var r=n(36062),a=n(28672),o=n.n(a),s=n(85542),u=n.n(s);function i(e){return e.toLowerCase().replaceAll(" ","_")}function l(e){let t;r.Am.error((t="Unkown","string"==typeof e?t=e:"string"==typeof(null==e?void 0:e.msg)?t=null==e?void 0:e.msg:"string"==typeof(null==e?void 0:e.message)&&(t=null==e?void 0:e.message),t))}function c(e){return new Promise(t=>setTimeout(t,e))}function d(e,t){return o()(e).format(t)}function f(e,t){return o().duration(e).format(t)}o().extend(u())},52897:function(e,t,n){"use strict";function r(e){return e?!!/\S+@\S+\.\S+/.test(e)||"Please enter a vaild email !":null}function a(e){return e?!!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(e)||"Please enter a vaild password (@$!%*?&,number,a-z,A-Z,>=8) !":null}function o(e){return e?6==e.length||"Please enter a vaild referral code !":null}function s(e){return e?6==e.length||"Please enter a vaild verify code !":null}n.d(t,{jg:function(){return s},oH:function(){return r},tx:function(){return o},uo:function(){return a}})}},function(e){e.O(0,[825,242,510,46,761,270,403,331,744],function(){return e(e.s=55013)}),_N_E=e.O()}]);