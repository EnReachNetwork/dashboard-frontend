(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{43563:function(e,t,s){Promise.resolve().then(s.bind(s,60491)),Promise.resolve().then(s.bind(s,9371)),Promise.resolve().then(s.bind(s,35802)),Promise.resolve().then(s.bind(s,59404)),Promise.resolve().then(s.bind(s,42351)),Promise.resolve().then(s.bind(s,17861)),Promise.resolve().then(s.bind(s,6419)),Promise.resolve().then(s.bind(s,72361)),Promise.resolve().then(s.bind(s,23857)),Promise.resolve().then(s.bind(s,69085)),Promise.resolve().then(s.bind(s,24714)),Promise.resolve().then(s.bind(s,89121)),Promise.resolve().then(s.bind(s,78526)),Promise.resolve().then(s.bind(s,8221)),Promise.resolve().then(s.bind(s,87844)),Promise.resolve().then(s.bind(s,72714)),Promise.resolve().then(s.bind(s,75473)),Promise.resolve().then(s.bind(s,58648)),Promise.resolve().then(s.bind(s,99250)),Promise.resolve().then(s.bind(s,79361)),Promise.resolve().then(s.bind(s,25366)),Promise.resolve().then(s.bind(s,31871)),Promise.resolve().then(s.bind(s,57250)),Promise.resolve().then(s.bind(s,77469)),Promise.resolve().then(s.bind(s,85353)),Promise.resolve().then(s.bind(s,90917)),Promise.resolve().then(s.bind(s,17075)),Promise.resolve().then(s.bind(s,62850)),Promise.resolve().then(s.bind(s,62223)),Promise.resolve().then(s.bind(s,50398)),Promise.resolve().then(s.bind(s,98967)),Promise.resolve().then(s.bind(s,40022)),Promise.resolve().then(s.bind(s,29277)),Promise.resolve().then(s.bind(s,23222)),Promise.resolve().then(s.bind(s,33233)),Promise.resolve().then(s.bind(s,23320)),Promise.resolve().then(s.bind(s,71305)),Promise.resolve().then(s.t.bind(s,40001,23)),Promise.resolve().then(s.t.bind(s,72324,23)),Promise.resolve().then(s.t.bind(s,43323,23)),Promise.resolve().then(s.bind(s,58782)),Promise.resolve().then(s.t.bind(s,54327,23))},58782:function(e,t,s){"use strict";s.d(t,{PageLayout:function(){return f}});var n=s(81210),r=s(38722),o=s(49755),a=s(36062),i=s(63568),l=s(60164),d=s(20337),c=s(44384),u=s(87106),h=s(65843);s(77422);let m=()=>{let e="light",t="light";return"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?(document.documentElement.classList.remove("dark"),e="light",t="light"):(document.documentElement.classList.add("dark"),e="dark",t="dark"),"theme"in localStorage||(e="system"),{themeMode:e,theme:t}},v=(0,h.U)(e=>({...m(),setThemeMode:t=>e(()=>({themeMode:t})),setTheme:t=>e(()=>({theme:t}))}));u.EWX,u.Dq,u.pUp;let p=new l.S;function b(e){let{children:t}=e;return v(),(0,n.jsx)(r.w,{className:"App overflow-auto",children:(0,n.jsx)(c.rg,{clientId:"425165933886-vpv32tvbhfeqfujnel0fdjm88kfn1lhn.apps.googleusercontent.com",children:(0,n.jsx)(d.aH,{client:p,children:(0,n.jsx)(i.Ho,{children:t})})})})}function f(e){let{children:t}=e,[s,r]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{s||r(!0)},[s]),s)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.x7,{position:"top-right",offset:70,theme:"light"}),(0,n.jsx)(b,{children:t})]}):null}},63568:function(e,t,s){"use strict";s.d(t,{Vo:function(){return d},Ho:function(){return h},Eu:function(){return m}});var n=s(81210),r=s(93271);function o(){return window.EnReachAI}var a=s(95258),i=s(49755),l=s(44761);let d=(0,i.createContext)({login:async()=>{},setUser:()=>{},logout:()=>{}}),c="last-login-user",u=()=>{try{let e=localStorage.getItem(c);if(!e)return null;return JSON.parse(e)}catch(e){return console.error(e),null}},h=e=>{let{children:t}=e,s=(0,a.useRouter)(),[h,m]=(0,i.useState)(u()),v=e=>{var t,n;e?(m(e),localStorage.setItem(c,JSON.stringify(e)),e.token&&(null===(n=o())||void 0===n||n.request({name:"setAccessToken",body:e.token}).catch(console.error)),s.push("/")):(m(null),localStorage.removeItem(c),null===(t=o())||void 0===t||t.request({name:"clearAccessToken"}).catch(console.error),s.push("/signin"))},p=()=>{v()};(0,i.useEffect)(()=>{let e;return h&&h.token&&(e=setInterval(()=>{let e=o();if(!e){console.warn("Extension not installed");return}e.request({name:"getUser"}).then(e=>{e&&"success"===e.status||p()}).catch(console.error)},1e3)),()=>clearInterval(e)},[h]);let b=async e=>{try{if(!e.email||!e.password)return;let t=await r.Z.loginApi(e);v(t),r.Z.setAuth()}catch(e){console.error(e)}};r.Z.setAuth(null==h?void 0:h.token);let f=(0,l.ZP)(["QueryUserInfo",null==h?void 0:h.token],()=>r.Z.userInfo());return(0,n.jsx)(d.Provider,{value:{user:h,login:b,logout:p,setUser:v,queryUserInfo:f},children:t})},m=()=>(0,i.useContext)(d)},77422:function(e,t,s){"use strict";s.d(t,{C:function(){return c},m:function(){return d}});var n=s(81210),r=s(29906),o=s(12014),a=s(21585),i=s(10307),l=s(85947);function d(e){let{children:t,contentProps:s,bodyProps:i,...l}=e;return(0,n.jsx)(r.R,{isDismissable:!1,backdrop:"blur",classNames:{backdrop:"backdrop-blur"},hideCloseButton:!0,...l,children:(0,n.jsx)(o.A,{className:"w-[360px] p-6 bg-m1 rounded-3xl",...s||{},children:(0,n.jsx)(a.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...i||{},children:t})})})}function c(e){let{tit:t,children:s,contentProps:d,bodyProps:c,...u}=e;return(0,n.jsx)(r.R,{hideCloseButton:!0,backdrop:"blur",classNames:{backdrop:"backdrop-blur"},...u,children:(0,n.jsx)(o.A,{className:"w-[500px] bg-m1 gap-6 p-6 rounded-3xl",...d||{},children:e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.k,{className:"justify-between p-0",children:[(0,n.jsx)("span",{className:"text-base font-bold text-left text-white",children:t}),(0,n.jsx)("div",{className:"p-0 rounded-full w-6 h-6 flex justify-center items-center text-xs cursor-pointer bg-white/10 hover:bg-white/30",onClick:e,children:(0,n.jsx)(l.q5L,{})})]}),(0,n.jsx)(a.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...c||{},children:s})]})})})}},93271:function(e,t,s){"use strict";s.d(t,{t:function(){return r},Z:function(){return i}});var n=s(80957);s(45303).env.NEXT_PUBLIC_BASE_PATH;let r="https://dev-api.enreach.network/api",o=n.Z.create({baseURL:r,headers:{"Content-Type":"application/json"}}),a={setAuth:e=>{e?o.defaults.headers.common.Authorization=e.startsWith("Bearer")?e:"Bearer ".concat(e):delete o.defaults.headers.common.Authorization},loginApi:async e=>{let t=await o.post("/user/signIn",e);return a.setAuth(t.data.data.token),t.data.data},loginByGoogleApi:async e=>{let t=await o.post("/user/google/signIn",e);return a.setAuth(t.data.data.token),t.data.data},loginSetReferralApi:async e=>{let t=await o.post("/user/referral/by",e);return a.setAuth(t.data.data.token),t.data.data},registerApi:async e=>(await o.post("/user/signUp",{...e})).data.data,registerByGoogleApi:async e=>(await o.post("/user/google/signUp",{accessToken:e})).data.data,resendRegisterVerifyCode:async e=>(await o.post("/verify/".concat(e,"/resend")),!0),verifyRegisterCode:async(e,t)=>(await o.post("/verify/".concat(e,"/").concat(t))).data.data,userInfo:async()=>(await o.get("/user/profile")).data.data,sendResetPassword:async e=>(await o.post("/user/password/reset/send",{email:e}),!0),resetPassword:async e=>(await o.post("/user/password/reset",e),!0),userUpdate:async e=>(await o.post("/user/profile/update",e),!0),userReward:async()=>(await o.get("/user/reward")).data.data,nodeList:async()=>(await o.get("/node/list")).data.data,trendingRewards:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"month";return(await o.get("/trending/rewards",{params:{type:e}})).data.data},getAccessToken:async()=>(await o.get("/user/accessToken")).data.data.accessToken,getIP:async()=>(await n.Z.get("https://api.bigdatacloud.net/data/client-ip")).data};var i=a},54327:function(){}},function(e){e.O(0,[166,686,720,717,542,510,46,761,614,832,80,521,403,331,744],function(){return e(e.s=43563)}),_N_E=e.O()}]);