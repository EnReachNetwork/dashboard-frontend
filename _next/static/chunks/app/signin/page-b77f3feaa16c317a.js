(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{1107:function(e,t,n){Promise.resolve().then(n.bind(n,62985))},44384:function(e,t,n){"use strict";n.d(t,{Nq:function(){return i},rg:function(){return s}});var r=n(49755);let l=(0,r.createContext)(null);function s(e){let{clientId:t,nonce:n,onScriptLoadSuccess:s,onScriptLoadError:i,children:a}=e,o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{nonce:t,onScriptLoadSuccess:n,onScriptLoadError:l}=e,[s,i]=(0,r.useState)(!1),a=(0,r.useRef)(n);a.current=n;let o=(0,r.useRef)(l);return o.current=l,(0,r.useEffect)(()=>{let e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=t,e.onload=()=>{var e;i(!0),null===(e=a.current)||void 0===e||e.call(a)},e.onerror=()=>{var e;i(!1),null===(e=o.current)||void 0===e||e.call(o)},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[t]),s}({nonce:n,onScriptLoadSuccess:s,onScriptLoadError:i}),c=(0,r.useMemo)(()=>({clientId:t,scriptLoadedSuccessfully:o}),[t,o]);return r.createElement(l.Provider,{value:c},a)}function i(e){let{flow:t="implicit",scope:n="",onSuccess:s,onError:i,onNonOAuthError:a,overrideScope:o,state:c,...u}=e,{clientId:d,scriptLoadedSuccessfully:f}=function(){let e=(0,r.useContext)(l);if(!e)throw Error("Google OAuth components must be used within GoogleOAuthProvider");return e}(),x=(0,r.useRef)(),m=(0,r.useRef)(s);m.current=s;let h=(0,r.useRef)(i);h.current=i;let p=(0,r.useRef)(a);p.current=a,(0,r.useEffect)(()=>{var e,r;if(!f)return;let l="implicit"===t?"initTokenClient":"initCodeClient",s=null===(r=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===r?void 0:r.oauth2[l]({client_id:d,scope:o?n:"openid profile email ".concat(n),callback:e=>{var t,n;if(e.error)return null===(t=h.current)||void 0===t?void 0:t.call(h,e);null===(n=m.current)||void 0===n||n.call(m,e)},error_callback:e=>{var t;null===(t=p.current)||void 0===t||t.call(p,e)},state:c,...u});x.current=s},[d,f,t,n,c]);let g=(0,r.useCallback)(e=>{var t;return null===(t=x.current)||void 0===t?void 0:t.requestAccessToken(e)},[]),v=(0,r.useCallback)(()=>{var e;return null===(e=x.current)||void 0===e?void 0:e.requestCode()},[]);return"implicit"===t?g:v}},62985:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(81210),l=n(53573),s=n(27767),i=n(88918),a=n(36689),o=n(41013),c=n(13882),u=n(2793),d=n(47608),f=n(52897),x=n(17528),m=n(49755),h=n(53179),p=n(95258);function g(){let[e,t]=(0,m.useState)(""),[n,g]=(0,m.useState)(""),v=(0,m.useContext)(h.Vo),b=(0,p.useSearchParams)().get("referral"),{mutate:w,isPending:j}=(0,x.D)({onError:d.rV,mutationFn:async t=>{t.preventDefault(),await v.login({email:e,password:n})}}),N=j||!0!==(0,f.oH)(e)||!n;return(0,r.jsx)(o.K,{children:(0,r.jsxs)(l.z,{className:"mx-auto px-5 min-h-full flex flex-col gap-4 items-center w-full max-w-[25rem]",children:[(0,r.jsx)("span",{className:i.U,children:"Sign In"}),(0,r.jsxs)("form",{onSubmit:w,className:"flex flex-col gap-5 w-full",children:[(0,r.jsx)(a.j7,{setEmail:t}),(0,r.jsx)(a.CM,{setPassword:g,validate:()=>null}),(0,r.jsx)(s.un,{type:"submit",isDisabled:N,isLoading:j,children:"Sign In"}),(0,r.jsx)(u.e,{})]}),(0,r.jsxs)("div",{className:"flip_item mb-auto flex items-center w-full text-xs text-white/60",children:["Don’t have an account?",(0,r.jsx)(c.g,{href:b?"/signup?referral=".concat(b):"/signup",className:"ml-2 text-xs",children:"Sign Up"}),(0,r.jsx)(c.g,{href:"/reset?email=".concat(e),className:"ml-auto text-xs",children:"Forget Password?"})]})]})})}},2793:function(e,t,n){"use strict";n.d(t,{e:function(){return b}});var r=n(81210),l=n(84200),s=n(27767),i=n(77422),a=n(36689),o=n(17528),c=n(49755),u=n(44384),d=n(47608),f=n(54957),x=n(52897),m=n(74572),h=n(53179),p=n(83332),g=n(13882),v=n(95258);function b(e){let{defReferralCode:t,btn:n="Sign in with Google",isDisabled:b}=e,w=(0,h.Eu)(),[j,N]=(0,c.useState)(""),[k,C]=(0,f.Z)(!1),[y,P]=(0,c.useState)(!1),R=(0,c.useRef)(""),S=(0,v.useSearchParams)().get("referral");(0,v.useRouter)();let{mutate:E,isPending:_}=(0,o.D)({onError:d.rV,mutationFn:async e=>{P(!1),R.current=e.access_token;let n=await m.Z.loginByGoogleApi({accessToken:e.access_token});console.log("resultresultresult",n);let r=t||S;if(n.token)w.setUser(n);else if(r&&!0===(0,x.tx)(r)){let e=await m.Z.loginSetReferralApi({accessToken:R.current,referralCode:r}).catch(d.rV);e?w.setUser(e):C()}else C()}}),A=(0,u.Nq)({flow:"implicit",onError:e=>{P(!1),(0,d.rV)(e.error_description)},onSuccess:E}),{mutate:Z,isPending:V}=(0,o.D)({onError:d.rV,mutationFn:async()=>{if(!0!==(0,x.tx)(j)||!R.current)return;let e=await m.Z.loginSetReferralApi({accessToken:R.current,referralCode:j});w.setUser(e),C(!1)}}),{mutate:D,isPending:q}=(0,o.D)({onError:d.rV,mutationFn:async()=>{if(!R.current)return;let e=await m.Z.loginSetReferralApi({accessToken:R.current});w.setUser(e),C(!1)}}),F=V||_||!0!==(0,x.tx)(j)||!R.current,z=b||_||y;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.un,{color:"default",type:"button",isDisabled:z,isLoading:_||y,onClick:()=>{P(!0),A()},children:[(0,r.jsx)(l.JM8,{})," ",n]}),(0,r.jsxs)(i.m,{isOpen:k,children:[(0,r.jsx)("p",{className:"self-stretch flex-grow-0 flex-shrink-0  text-base text-center text-white",children:"A Special Welcome"}),(0,r.jsx)("p",{className:"self-stretch flex-grow-0 flex-shrink-0  text-sm text-center text-white/50",children:"Join in EnReach's Open Edge journey and earn BERRY rewards with extra boost!"}),(0,r.jsx)(a.Fx,{onChange:N}),(0,r.jsx)(s.un,{isDisabled:F,className:"w-full",onClick:()=>Z(),isLoading:V,children:"Get Boosted"}),(0,r.jsx)("div",{className:"flex justify-center text-white/80  text-sm h-5 items-center",children:(0,r.jsx)(g.g,{onClick:()=>D(),className:"ml-2 text-xs",children:q?(0,r.jsx)(p.c,{size:"sm"}):"Skip"})})]})]})}},53573:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(81210),l=n(97572),s=n(64558),i=n(49755);function a(e){let t=(0,i.useRef)(null);return(0,l.V)(()=>{s.ZP.set(".flip_item",{alpha:0}),s.ZP.to(".flip_item",{alpha:1,yPercent:0,stagger:.1,duration:.5,ease:"back.out",startAt:{alpha:0}})},{scope:t}),(0,r.jsx)("div",{className:e.className,ref:t,children:e.children})}s.ZP.registerPlugin(l.V)},88918:function(e,t,n){"use strict";n.d(t,{B:function(){return r},U:function(){return l}});let r={item:"rounded-full hover:!bg-white/10",cursor:"rounded-full bg-primary"},l="font-medium text-3xl mt-auto mb-2.5"},77422:function(e,t,n){"use strict";n.d(t,{C:function(){return d},m:function(){return u}});var r=n(81210),l=n(29906),s=n(12014),i=n(21585),a=n(41551),o=n(10307),c=n(85947);function u(e){let{children:t,contentProps:n,bodyProps:a,...o}=e;return(0,r.jsx)(l.R,{isDismissable:!1,backdrop:"blur",classNames:{backdrop:"backdrop-blur"},hideCloseButton:!0,...o,children:(0,r.jsx)(s.A,{className:"w-[22.5rem] p-6 bg-[#404040] rounded-3xl",...n||{},children:(0,r.jsx)(i.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...a||{},children:t})})})}function d(e){let{tit:t,children:n,contentProps:u,bodyProps:d,className:f,...x}=e;return(0,r.jsx)(l.R,{hideCloseButton:!0,backdrop:"blur",className:f,classNames:{backdrop:"backdrop-blur-[6px]"},...x,children:(0,r.jsx)(s.A,{className:(0,a.cn)("w-[31.25rem] bg-[#404040] gap-6 p-6 rounded-3xl",f),...u||{},children:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.k,{className:"justify-between p-0  ",children:[(0,r.jsx)("span",{className:"text-base font-semibold text-left text-white",children:t}),(0,r.jsx)("div",{className:"p-0 rounded-full w-6 h-6 flex justify-center items-center text-xs cursor-pointer bg-white/10 hover:bg-white/30",onClick:e,children:(0,r.jsx)(c.q5L,{})})]}),(0,r.jsx)(i.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...d||{},children:n})]})})})}},36689:function(e,t,n){"use strict";n.d(t,{CM:function(){return d},Fx:function(){return h},Iv:function(){return m},e9:function(){return x},j7:function(){return f}});var r=n(81210),l=n(52897),s=n(37018),i=n(84824),a=n(54957),o=n(29060),c=n.n(o);let u={inputWrapper:"flip_item h-[2.625rem] rounded-full bg-l1 border-none backdrop-blur-lg shadow-1 text-xs",label:"text-xs",input:"text-xs !text-white"};function d(e){let{setPassword:t,label:n,error:o,validate:c=l.uo}=e,[d,f]=(0,a.Z)(!1);return(0,r.jsx)(s.Y,{isRequired:!0,classNames:u,type:d?"text":"password",placeholder:n||"Password",labelPlacement:"inside",variant:"bordered",validate:c,endContent:(0,r.jsx)("button",{className:"focus:outline-none h-full",type:"button",onClick:()=>f(),"aria-label":"toggle password visibility",children:d?(0,r.jsx)(i.VhL,{className:"text-xs text-default-400 pointer-events-none"}):(0,r.jsx)(i.nO8,{className:"text-xs text-default-400 pointer-events-none"})}),errorMessage:o,onChange:e=>t(e.target.value)})}function f(e){let{setEmail:t,value:n}=e;return(0,r.jsx)(s.Y,{value:n,classNames:u,type:"email",placeholder:"Email Address",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:l.oH,onChange:e=>t(e.target.value)})}function x(e){let{setReferalCode:t,value:n}=e;return(0,r.jsx)(s.Y,{value:n,classNames:u,type:"text",placeholder:"Referral code (optional)",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:l.tx,onChange:e=>t(e.target.value)})}function m(e){let{setVerifyCode:t}=e;return(0,r.jsx)(s.Y,{classNames:u,type:"text",placeholder:"Verification Code",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:l.jg,onChange:e=>t(e.target.value)})}function h(e){let{onComplete:t,onChange:n}=e;return(0,r.jsx)(c(),{placeholder:"",onChange:n,onComplete:t,classNames:{container:"flip_item w-full justify-between h-[2.625rem] ",character:"rounded-lg max-w-[2.625rem]  w-[2.625rem] bg-l1 bg-transparent backdrop-blur-[20px] text-white text-xl leading-[2.625rem] uppercase border-0"}})}},41013:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var r=n(81210),l=n(34028);function s(e){return(0,r.jsxs)("div",{className:"w-full h-full flex",children:[(0,r.jsxs)("div",{className:"flex-[4] min-h-full basis-0 flex flex-col justify-center items-center overflow-auto gap-16 lg:gap-32 bg-[#535252] text-base",children:[(0,r.jsx)(l.w.SvgLogin,{}),(0,r.jsx)(l.w.SvgLogo,{colors:["white","white"]})]}),(0,r.jsx)("div",{className:"flex-[6] min-h-full basis-0 overflow-y-auto bg-[#272727]",children:e.children})]})}},13882:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(81210),l=n(41551),s=n(36805);function i(e){let{children:t,target:n="_self",className:i,onClick:a,isDisable:o,href:c="javascript:void(0);",...u}=e;return(0,r.jsx)(s.default,{target:n,href:c,onClick:e=>{o||null==a||a(e)},className:(0,l.cn)("underline text-white/60 hover:text-primary cursor-pointer",{"cursor-not-allowed hover:text-white/60":o},i),...u,children:t})}},52897:function(e,t,n){"use strict";function r(e){return e?!!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)||"Please enter a vaild email !":null}function l(e){return e?!!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(e)||"Your password must be at least 8 characters long and include: at least one uppercase letter, one lowercase letter, and one number. Special characters (@$!%*?&) are allowed.":null}function s(e,t){return e&&t?e===t||"Passwords do not match!":null}function i(e){return e?6==e.length||"Invalid referral code!":null}function a(e){return e?6==e.length||"Invalid verification code":null}n.d(t,{S$:function(){return s},jg:function(){return a},oH:function(){return r},tx:function(){return i},uo:function(){return l}})}},function(e){e.O(0,[495,863,242,720,825,364,862,510,664,832,538,477,369,805,90,403,331,744],function(){return e(e.s=1107)}),_N_E=e.O()}]);