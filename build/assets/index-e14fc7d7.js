import{r as u,g as E,h as V,s as g,j as o,i as S,b as M,e as P,k as U,l as F}from"./index-a2fe8114.js";function W(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const T={};function N(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&T[t[0]]||(typeof t[0]=="string"&&(T[t[0]]=new Date),W(...t))}const L=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function I(e,t,n){e.loadNamespaces(t,L(e,n))}function A(e,t,n,a){typeof n=="string"&&(n=[n]),n.forEach(r=>{e.options.ns.indexOf(r)<0&&e.options.ns.push(r)}),e.loadLanguages(t,L(e,a))}function O(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const a=t.languages[0],r=t.options?t.options.fallbackLng:!1,s=t.languages[t.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const l=(w,$)=>{const i=t.services.backendConnector.state[`${w}|${$}`];return i===-1||i===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!l(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(a,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||l(a,e)&&(!r||l(s,e)))}function D(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(N("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(r,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!s(r.isLanguageChangingTo,e))return!1}}):O(e,t,n)}const G=u.createContext();class J{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const K=(e,t)=>{const n=u.useRef();return u.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function C(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:a,defaultNS:r}=u.useContext(G)||{},s=n||a||V();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new J),!s){N("You will need to pass in an i18next instance by using initReactI18next");const c=(p,d)=>typeof d=="string"?d:d&&typeof d=="object"&&typeof d.defaultValue=="string"?d.defaultValue:Array.isArray(p)?p[p.length-1]:p,h=[c,{},!1];return h.t=c,h.i18n={},h.ready=!1,h}s.options.react&&s.options.react.wait!==void 0&&N("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const l={...E(),...s.options.react,...t},{useSuspense:w,keyPrefix:$}=l;let i=e||r||s.options&&s.options.defaultNS;i=typeof i=="string"?[i]:i||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(i);const f=(s.isInitialized||s.initializedStoreOnce)&&i.every(c=>D(c,s,l));function x(){return s.getFixedT(t.lng||null,l.nsMode==="fallback"?i:i[0],$)}const[z,v]=u.useState(x);let b=i.join();t.lng&&(b=`${t.lng}${b}`);const B=K(b),m=u.useRef(!0);u.useEffect(()=>{const{bindI18n:c,bindI18nStore:h}=l;m.current=!0,!f&&!w&&(t.lng?A(s,t.lng,i,()=>{m.current&&v(x)}):I(s,i,()=>{m.current&&v(x)})),f&&B&&B!==b&&m.current&&v(x);function p(){m.current&&v(x)}return c&&s&&s.on(c,p),h&&s&&s.store.on(h,p),()=>{m.current=!1,c&&s&&c.split(" ").forEach(d=>s.off(d,p)),h&&s&&h.split(" ").forEach(d=>s.store.off(d,p))}},[s,b]);const k=u.useRef(!0);u.useEffect(()=>{m.current&&!k.current&&v(x),k.current=!1},[s,$]);const y=[z,s,f];if(y.t=z,y.i18n=s,y.ready=f,f||!f&&!w)return y;throw new Promise(c=>{t.lng?A(s,t.lng,i,()=>c()):I(s,i,()=>c())})}const j=e=>e,X=g.button`
    width: ${e=>e.$isFullWidth?"100%":"fit-content"};

    font-family: ${({theme:e})=>e.typography.fontFamily.roboto}, sans-serif;
    font-weight: ${({theme:e})=>e.typography.weight.medium};

    border: none;
    transition: 0.2s 0.1s ease-in-out;

    &.primary {
        background-color: ${e=>e.theme.palette.primaryButtonBackgroundColor};
        color: ${e=>e.theme.palette.primaryButtonTextColor};
    }

    &.secondary {
        background-color: ${e=>e.theme.palette.secondaryButtonBackgroundColor};
        color: ${e=>e.theme.palette.secondaryButtonTextColor};
    }

    &.danger {
        background-color: ${e=>e.theme.palette.red};
        color: ${e=>e.theme.palette.white};
    }

    &.disable {
        pointer-events: none;
        touch-action: none;
        background-color: ${e=>e.theme.palette.disableButtonBackgroundColor};
        color: ${e=>e.theme.palette.disableButtonTextColor};
    }

    &.extra-small {
        height: 26px;
        border-radius: ${({theme:e})=>e.borderRadius.radius6};
        font-size: ${({theme:e})=>e.typography.fontSize.p12};
        line-height: 14px;
    }

    &.small {
        height: 36px;
        border-radius: ${({theme:e})=>e.borderRadius.radius8};
        font-size: ${({theme:e})=>e.typography.fontSize.p12};
        line-height: 14px;
    }

    &.medium {
        height: 38px;
        border-radius: ${({theme:e})=>e.borderRadius.radius10};
        font-size: ${({theme:e})=>e.typography.fontSize.p14};
        line-height: 16px;
    }

    &.large {
        height: 40px;
        border-radius: ${({theme:e})=>e.borderRadius.radius12};
        font-size: ${({theme:e})=>e.typography.fontSize.p16};
        line-height: 18px;
    }
`,Y=({children:e,type:t="button",variant:n="primary",size:a="medium",isFullWidth:r=!1,className:s="",...l})=>o.jsx(X,{type:t,$isFullWidth:r,className:`${n} ${a} ${s} BS-button shrink-0 cursor-pointer ph-12`,...l,children:e}),q=g.div`
    .BS-page-header--title {
        font-size: ${e=>e.theme.typography.fontSize.p24};
        line-height: 21px;
        text-transform: capitalize;
        color: ${e=>e.theme.palette.accentTextColor};
    }

    .BS-button {
        min-width: 114px;
    }
`,me=({title:e="",buttonText:t="",onRedirect:n})=>{const{t:a}=C();return o.jsxs(q,{className:"BS-page-header flex-between",children:[o.jsx("h6",{className:"BS-page-header--title shrink-0",children:a(j(e))}),o.jsx(Y,{onClick:n,variant:"primary",type:"button",size:"small",children:a(j(t))})]})},Q=g.div`
    border-radius: ${({theme:e})=>e.borderRadius.radius10};
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    filter: drop-shadow(0px 2px 15px rgba(0, 0, 0, 0.05)) drop-shadow(0px 2px 30px rgba(0, 0, 0, 0.05));

    background-color: ${({theme:e})=>e.palette.secondary};

    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;

    .BS-notification--success {
        width: 20px;
        height: 48px;
        background-color: ${({theme:e})=>e.palette.green};
    }

    .BS-notification--text {
        font-size: ${e=>e.theme.typography.fontSize.p16};
        font-weight: ${e=>e.theme.typography.weight.medium};
        text-align: center;
        color: ${({theme:e})=>e.palette.primaryTextColor};
    }
`,R=({text:e="",className:t=""})=>{const{t:n}=C();return o.jsxs(Q,{className:`${t} BS-notification flex items-center`,children:[o.jsx("div",{className:"BS-notification--success"}),o.jsx("div",{className:"BS-notification--text ph-16",children:n(j(e))})]})},Z="/dashboard/assets/user-91e4d07c.webp",_=g.div`
    width: ${e=>e.$isProfileAvatar?"80px":"40px"};
    height: ${e=>e.$isProfileAvatar?"80px":"40px"};
    overflow: hidden;

    border-radius: 50%;
    background-color: ${e=>e.$isProfileAvatar?e.theme.palette.secondary:e.theme.palette.base};
`,ee=({onRedirect:e,isProfileAvatar:t=!1,image:n="",className:a=""})=>o.jsx(_,{onClick:e,$isProfileAvatar:t,className:`${a} BS-avatar flex-center cursor-pointer`,children:o.jsx("img",{src:n,alt:"user",className:"w100 object-cover"})}),te=()=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"10",fill:"currentColor",viewBox:"0 0 18 10",children:o.jsx("path",{fillRule:"evenodd",d:"M11.115 0h6.175v6.175L14.934 3.82 9.88 9.262 5.75 4.94 0 9.88l5.75-7.835 4.13 4.13 3.627-3.782L11.115 0z",clipRule:"evenodd"})}),ne=()=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"15",fill:"currentColor",viewBox:"0 0 17 15",children:o.jsx("path",{d:"M8.333 3.333V0H0v15h16.667V3.333H8.333zm-5 10H1.667v-1.666h1.666v1.666zm0-3.333H1.667V8.333h1.666V10zm0-3.333H1.667V5h1.666v1.667zm0-3.334H1.667V1.667h1.666v1.666zm3.334 10H5v-1.666h1.667v1.666zm0-3.333H5V8.333h1.667V10zm0-3.333H5V5h1.667v1.667zm0-3.334H5V1.667h1.667v1.666zm8.333 10H8.333v-1.666H10V10H8.333V8.333H10V6.667H8.333V5H15v8.333zm-1.667-6.666h-1.666v1.666h1.666V6.667zm0 3.333h-1.666v1.667h1.666V10z"})}),oe=()=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"currentColor",viewBox:"0 0 15 15",children:[o.jsx("path",{d:"M11 3.5c-.937-.75-2.187-1.25-3.5-1.25-.812 0-1.562.187-2.25.5-.312.125-.625.312-.937.5.062.812.062 1.375.062 1.562v.063c.313-.313.625-.563 1-.75C6 3.75 6.75 3.562 7.563 3.562c1.437 0 2.687.688 3.5 1.75C11.625 6.062 12 7 12 8c0 1-.312 1.937-.937 2.688-.813 1.062-2.063 1.75-3.5 1.75-1.5 0-2.875-.75-3.625-1.938A4.268 4.268 0 013.125 8c0-.75.188-1.438.5-2.063-.312.125-.625.313-.75.375l-.25.125-.25-.125c-.062 0-.187-.062-.312-.187-.188.562-.313 1.187-.313 1.75 0 .875.188 1.75.563 2.5.125-1.375.187-2.5.25-3.125.062.75.187 2.312.312 4.063.313.437.688.75 1.063 1.124.937.75 2.187 1.188 3.5 1.188 1.312 0 2.562-.438 3.5-1.25a7.559 7.559 0 001-1V4.5c-.25-.375-.563-.75-.938-1z"}),o.jsx("path",{d:"M7.5 11.063A3.067 3.067 0 014.438 8c0-1.687 1.312-3.125 3.062-3.125 1.75 0 3.063 1.375 3.063 3.063 0 1.687-1.375 3.125-3.063 3.125zm0-4.938a1.814 1.814 0 000 3.625c1 0 1.813-.812 1.813-1.812S8.5 6.125 7.5 6.125zM13.25 8.688c.375.874.625 1.812.688 2.75.062.937-.125 1.874-.438 2.812-.125.25-.25.438-.5.563a1.26 1.26 0 01-.687.187c-.125 0-.313 0-.438-.063-.125-.062-.312-.124-.375-.25-.125-.124-.187-.25-.25-.374a1.159 1.159 0 01-.125-.438V0l.625.188c1.688.562 2.688 1.437 3.063 2.624.562 1.75-.438 3.626-1.375 4.876a.675.675 0 00-.188.437.584.584 0 000 .563z"}),o.jsx("path",{d:"M5.313 4.938C5.188 6 4.125 6.688 3.625 7c.063.875.25 3.563.5 6.25 0 .25 0 .5-.063.688a.91.91 0 01-.375.562c-.062.063-.124.125-.25.188-.25.187-.5.312-.75.312s-.562-.125-.75-.25c-.062-.063-.187-.125-.25-.188a2.245 2.245 0 01-.437-.624c-.063-.25-.125-.438-.063-.688.25-2.625.438-5.313.5-6.25C1.188 6.687.125 5.937 0 4.875c0-1.313.063-2.625.188-4C.25.625.311.437.5.312c.188-.124.375-.25.625-.25h.25v3.376c0 .374.188.687.5.687.063 0 .125 0 .188-.063L2.124 4 2.188.437V.376c0-.125.062-.188.187-.25A.474.474 0 012.625 0c.125 0 .188.063.313.125a.863.863 0 01.187.25V4l.063.063c.062.062.124.062.187.062.25 0 .5-.313.5-.688V.063h.25c.25 0 .438.124.625.25.188.124.25.374.313.625.187 1.312.25 2.625.25 4z"})]}),H=()=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",fill:"currentColor",viewBox:"0 0 17 17",children:o.jsx("path",{d:"M8.5 0A8.503 8.503 0 000 8.5C0 13.192 3.808 17 8.5 17S17 13.192 17 8.5 13.192 0 8.5 0zm3.069 5.389c.909 0 1.64.731 1.64 1.64 0 .91-.731 1.641-1.64 1.641-.91 0-1.641-.731-1.641-1.64a1.63 1.63 0 011.64-1.641zm-5.1-1.343a2.01 2.01 0 012.006 2.006 2.01 2.01 0 01-2.006 2.006 2.01 2.01 0 01-2.006-2.006c0-1.113.892-2.006 2.005-2.006zm0 7.76v3.188a6.806 6.806 0 01-4.37-4.216c.893-.952 3.12-1.437 4.37-1.437.45 0 1.02.069 1.615.188-1.394.739-1.615 1.716-1.615 2.277zM8.5 15.3c-.23 0-.45-.009-.671-.034v-3.46c0-1.206 2.499-1.81 3.74-1.81.909 0 2.481.332 3.263.977-.994 2.525-3.45 4.327-6.332 4.327z"})}),se=[{id:1,icon:o.jsx(te,{}),name:S.t("homepage")},{id:2,icon:o.jsx(H,{}),name:S.t("users")},{id:3,icon:o.jsx(H,{}),name:S.t("premiumUsers")},{id:4,icon:o.jsx(ne,{}),name:S.t("restaurants")},{id:5,icon:o.jsx(oe,{}),name:S.t("cuisine")}],re=g.nav`
    .BS-nav--item {
        height: 42px;
        transition: 0.2s 0.1s ease-in-out;
        color: ${e=>e.theme.palette.primaryTextColor};

        &.active,
        &:hover {
            border-radius: ${e=>e.theme.borderRadius.radius12};
            background-color: ${e=>e.theme.palette.secondary};

            .BS-nav--title {
                color: ${e=>e.theme.palette.primaryTextColor};
            }
        }
    }

    .BS-nav--title {
        font-size: ${e=>e.theme.typography.fontSize.p14};
        line-height: 16px;
        color: ${e=>e.theme.palette.secondaryTextColor};
    }
`,ae=({className:e})=>{const n=M(),a=u.useCallback(r=>{r===2&&n(P.home.path)},[n]);return o.jsx(re,{className:`${e} BS-nav`,children:se.map(r=>o.jsx("div",{className:"mv-4",children:o.jsxs("div",{role:"button",tabIndex:0,onClick:()=>a(r.id),onKeyDown:()=>a(r.id),className:`${r.id===2?"active":""} BS-nav--item flex items-center ph-16 cursor-pointer`,children:[r.icon,o.jsx("span",{className:"BS-nav--title ml-16",children:r.name})]})},r.id))})},ie="/dashboard/assets/moon-87556925.svg",ce="/dashboard/assets/sun-f6254a7b.svg",le=g.div`
    .BS-theme-controller--text {
        font-size: ${e=>e.theme.typography.fontSize.p12};
        line-height: 14px;
        color: ${e=>e.theme.palette.secondaryTextColor};
    }

    .BS-theme-controller--inner {
        width: 80px;
        border: 2px solid ${e=>e.theme.palette.borderColor};
        border-radius: ${({theme:e})=>e.borderRadius.radius20};
    }

    .BS-theme-controller--button {
        width: 26px;
        height: 26px;

        border: none;
        margin: 0;
        padding: 0;
        background-color: transparent;

        > img {
            width: 100%;
        }
    }
`,de=()=>{const{t:e}=C(),{setDarkMode:t,setLightMode:n}=U();return o.jsxs(le,{className:"BS-theme-controller flex items-center",children:[o.jsx("div",{className:"BS-theme-controller--text mr-6",children:e("Light")}),o.jsxs("div",{className:"BS-theme-controller--inner flex justify-between pv-4 ph-4",children:[o.jsx("button",{type:"button",onClick:n,className:"BS-theme-controller--button flex-center cursor-pointer",children:o.jsx("img",{src:ce,alt:"sun"})}),o.jsx("button",{type:"button",onClick:t,className:"BS-theme-controller--button flex-center cursor-pointer",children:o.jsx("img",{src:ie,alt:"moon"})})]}),o.jsx("div",{className:"BS-theme-controller--text ml-6",children:e("Dark")})]})},ue=g.aside`
    width: 240px;
    background-color: ${e=>e.theme.palette.base};
    border-right: 1px solid ${e=>e.theme.palette.borderColor};
`,he=()=>o.jsxs(ue,{className:"BS-aside flex flex-col ph-16 pv-50",children:[o.jsxs("div",{className:"grow",children:[o.jsx(ee,{className:"margin-center",image:Z,isProfileAvatar:!0}),o.jsx(ae,{className:"mt-42"})]}),o.jsx("div",{className:"margin-center",children:o.jsx(de,{})})]}),pe=g.div`
    .BS-main {
        height: 100vh;
        width: calc(100% - 240px);
        overflow-y: auto;
        background-color: ${e=>e.theme.palette.base};
    }
`,fe=({children:e,className:t=""})=>{const n=F(a=>a.user.message);return o.jsxs(pe,{className:`${t} flex`,children:[o.jsx(he,{}),o.jsxs("main",{className:"BS-main flex flex-col pv-50 ph-50",children:[n==="SHOW_NEW_USER_MESSAGE"&&o.jsx(R,{text:"newUserSuccessfullyMessage"}),n==="SHOW_EDIT_USER_MESSAGE"&&o.jsx(R,{text:"editUserSuccessfullyMessage"}),e]})]})};export{ee as A,Y as B,fe as P,me as a,j as n,C as u};
