(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{55013:function(e,t,n){Promise.resolve().then(n.bind(n,18310))},59951:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(49755),o=function(e){return(e+1)%1e6};function u(e,t){return"function"==typeof e?e.length?e(t):e():e}function a(e,t,n){void 0===e&&(e=0),void 0===t&&(t=null),void 0===n&&(n=null);var a,s,i,l=u(e);"number"!=typeof l&&console.error("initialValue has to be a number, got "+typeof e),"number"==typeof n?l=Math.max(l,n):null!==n&&console.error("min has to be a number, got "+typeof n),"number"==typeof t?l=Math.min(l,t):null!==t&&console.error("max has to be a number, got "+typeof t);var c=(a=l,s=(0,r.useRef)(u(a)),i=(0,r.useReducer)(o,0)[1],(0,r.useMemo)(function(){return[function(){return s.current},function(e){s.current=u(e,s.current),i()}]},[])),f=c[0],d=c[1];return[f(),(0,r.useMemo)(function(){var e=function(e){var r=f(),o=u(e,r);r!==o&&("number"==typeof n&&(o=Math.max(o,n)),"number"==typeof t&&(o=Math.min(o,t)),r!==o&&d(o))};return{get:f,set:e,inc:function(t){void 0===t&&(t=1);var n=u(t,f());"number"!=typeof n&&console.error("delta has to be a number or function returning a number, got "+typeof n),e(function(e){return e+n})},dec:function(t){void 0===t&&(t=1);var n=u(t,f());"number"!=typeof n&&console.error("delta has to be a number or function returning a number, got "+typeof n),e(function(e){return e-n})},reset:function(t){void 0===t&&(t=l);var n=u(t,f());"number"!=typeof n&&console.error("value has to be a number or function returning a number, got "+typeof n),l=n,e(n)}}},[l,n,t])]}},3762:function(e,t,n){"use strict";var r=n(49755);t.Z=function(e,t){var n=(0,r.useRef)(function(){});(0,r.useEffect)(function(){n.current=e}),(0,r.useEffect)(function(){if(null!==t){var e=setInterval(function(){return n.current()},t||0);return function(){return clearInterval(e)}}},[t])}},18310:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(81210),o=n(27767),u=n(36689),a=n(74572),s=n(47608),i=n(52897),l=n(17528),c=n(95258),f=n(49755),d=n(59951),m=n(3762),p=n(36062),v=n(53179),h=n(53573),g=n(41013),b=n(88918);function x(){let e=(0,c.useSearchParams)(),[t,n]=(0,f.useState)(e.get("email")||""),[x,w]=(0,f.useState)(""),[y,j]=(0,f.useState)(""),[P,N]=(0,f.useState)(""),[C,E]=(0,d.Z)(0,60,0);(0,m.Z)(()=>{E.dec(1)},1e3);let R=(0,c.useRouter)(),Z=(0,v.Eu)(),{mutate:S,isPending:_}=(0,l.D)({onError:s.rV,mutationFn:async e=>{if(e.preventDefault(),!t)throw Error("Please enter email");if(!x||!y)throw Error("Please enter email or password");if(x!==y)throw Error("Please confirm password");if(!P)throw Error("Please enter verify code");await a.Z.resetPassword({email:t,password:x,verifyCode:P}),p.Am.success("Reset Password Success!"),Z.logout(),await (0,s._v)(2e3),R.push("/signin")}}),{mutate:k,isPending:A,isIdle:M}=(0,l.D)({onError:s.rV,mutationFn:async()=>{if(!t)throw Error("Please enter email");await a.Z.sendResetPassword(t),E.reset(60)}}),V=_||!0!==(0,i.jg)(P)||!0!==(0,i.oH)(t)||!0!==(0,i.uo)(x)||!0!==(0,i.S$)(y,x),$=A||C>0||!0!==(0,i.oH)(t);return(0,r.jsx)(g.K,{children:(0,r.jsxs)(h.z,{className:"mx-auto p-5 min-h-full flex flex-col gap-5 items-center w-full max-w-[25rem]",children:[(0,r.jsx)("span",{className:b.U,children:"Reset Password"}),(0,r.jsxs)("form",{onSubmit:S,className:"flex flex-col gap-5 w-full mb-auto",children:[(0,r.jsx)(u.j7,{value:t,setEmail:n}),(0,r.jsx)(u.CM,{label:"New Password",setPassword:w}),(0,r.jsx)(u.CM,{label:"Confirm Password",setPassword:j,validate:e=>(0,i.S$)(e,x)}),(0,r.jsxs)("div",{className:"flex gap-5 items-center",children:[(0,r.jsx)(u.Iv,{setVerifyCode:N}),(0,r.jsx)(o.un,{type:"button",isDisabled:$,isLoading:A,onClick:k,children:A?"":M?"Send":C>0?"".concat(C,"s"):"Resend"})]}),(0,r.jsx)(o.un,{type:"submit",isDisabled:V,isLoading:_,children:"Reset Password"})]})]})})}},53573:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var r=n(81210),o=n(97572),u=n(64558),a=n(49755);function s(e){let t=(0,a.useRef)(null);return(0,o.V)(()=>{u.ZP.set(".flip_item",{alpha:0}),u.ZP.to(".flip_item",{alpha:1,yPercent:0,stagger:.1,duration:.5,ease:"back.out",startAt:{alpha:0}})},{scope:t}),(0,r.jsx)("div",{className:e.className,ref:t,children:e.children})}u.ZP.registerPlugin(o.V)},88918:function(e,t,n){"use strict";n.d(t,{B:function(){return r},U:function(){return o}});let r={item:"rounded-full hover:!bg-white/10",cursor:"rounded-full bg-primary"},o="font-medium text-3xl mt-auto mb-2.5"},36689:function(e,t,n){"use strict";n.d(t,{CM:function(){return f},Fx:function(){return v},Iv:function(){return p},e9:function(){return m},j7:function(){return d}});var r=n(81210),o=n(52897),u=n(37018),a=n(84824),s=n(54957),i=n(29060),l=n.n(i);let c={inputWrapper:"flip_item h-[2.625rem] rounded-full bg-l1 border-none backdrop-blur-lg shadow-1 text-xs",label:"text-xs",input:"text-xs !text-white"};function f(e){let{setPassword:t,label:n,error:i,validate:l=o.uo}=e,[f,d]=(0,s.Z)(!1);return(0,r.jsx)(u.Y,{isRequired:!0,classNames:c,type:f?"text":"password",placeholder:n||"Password",labelPlacement:"inside",variant:"bordered",validate:l,endContent:(0,r.jsx)("button",{className:"focus:outline-none h-full",type:"button",onClick:()=>d(),"aria-label":"toggle password visibility",children:f?(0,r.jsx)(a.VhL,{className:"text-xs text-default-400 pointer-events-none"}):(0,r.jsx)(a.nO8,{className:"text-xs text-default-400 pointer-events-none"})}),errorMessage:i,onChange:e=>t(e.target.value)})}function d(e){let{setEmail:t,value:n}=e;return(0,r.jsx)(u.Y,{value:n,classNames:c,type:"email",placeholder:"Email Address",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:o.oH,onChange:e=>t(e.target.value)})}function m(e){let{setReferalCode:t,value:n}=e;return(0,r.jsx)(u.Y,{value:n,classNames:c,type:"text",placeholder:"Referral code (optional)",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:o.tx,onChange:e=>t(e.target.value)})}function p(e){let{setVerifyCode:t}=e;return(0,r.jsx)(u.Y,{classNames:c,type:"text",placeholder:"Verification Code",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:o.jg,onChange:e=>t(e.target.value)})}function v(e){let{onComplete:t,onChange:n}=e;return(0,r.jsx)(l(),{placeholder:"",onChange:n,onComplete:t,classNames:{container:"flip_item w-full justify-between h-[2.625rem] ",character:"rounded-lg max-w-[2.625rem]  w-[2.625rem] bg-l1 bg-transparent backdrop-blur-[20px] text-white text-xl leading-[2.625rem] uppercase border-0"}})}},41013:function(e,t,n){"use strict";n.d(t,{K:function(){return u}});var r=n(81210),o=n(1994);function u(e){return(0,r.jsxs)("div",{className:"w-full h-full flex",children:[(0,r.jsxs)("div",{className:"flex-[4] min-h-full basis-0 flex flex-col justify-center items-center overflow-auto gap-16 lg:gap-32 bg-[#535252] text-base",children:[(0,r.jsx)(o.w.SvgLogin,{}),(0,r.jsx)(o.w.SvgLogo,{colors:["white","white"]})]}),(0,r.jsx)("div",{className:"flex-[6] min-h-full basis-0 overflow-y-auto bg-[#272727]",children:e.children})]})}},47608:function(e,t,n){"use strict";n.d(t,{G$:function(){return p},N3:function(){return f},Q1:function(){return h},Y:function(){return v},_v:function(){return m},rV:function(){return d}});var r=n(36062),o=n(28672),u=n.n(o),a=n(85542),s=n.n(a),i=n(94782),l=n(13910),c=n.n(l);function f(e){return e.toLowerCase().replaceAll(" ","_")}function d(e){var t,n;let o;r.Am.error(c().upperFirst((o="Unkown","string"==typeof e?o=e:e instanceof i.d7?o=(null===(n=e.response)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.message)||e.message:"string"==typeof(null==e?void 0:e.msg)?o=null==e?void 0:e.msg:"string"==typeof(null==e?void 0:e.message)&&(o=null==e?void 0:e.message),o).trim()))}function m(e){return new Promise(t=>setTimeout(t,e))}function p(e,t){return u()(e).format(t)}function v(e,t){return u().duration(e).format(t)}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return c().round(e/t,4)+"rem"}u().extend(s())},52897:function(e,t,n){"use strict";function r(e){return e?!!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)||"Please enter a vaild email !":null}function o(e){return e?!!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(e)||"Your password must be at least 8 characters long and include: at least one uppercase letter, one lowercase letter, and one number. Special characters (@$!%*?&) are allowed.":null}function u(e,t){return e&&t?e===t||"Passwords do not match!":null}function a(e){return e?6==e.length||"Invalid referral code!":null}function s(e){return e?6==e.length||"Invalid verification code":null}n.d(t,{S$:function(){return u},jg:function(){return s},oH:function(){return r},tx:function(){return a},uo:function(){return o}})}},function(e){e.O(0,[495,863,242,825,364,510,382,968,987,941,403,331,744],function(){return e(e.s=55013)}),_N_E=e.O()}]);