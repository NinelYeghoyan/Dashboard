import{j as t,s as d,r as n,a as B,b as w,e as v,f as C}from"./index-a2fe8114.js";import{u,n as T,B as g,A as z,P as R,a as U}from"./index-e14fc7d7.js";const D=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"7",height:"9",fill:"currentColor",viewBox:"0 0 7 9",children:t.jsx("path",{fillRule:"evenodd",d:"M5.497 8.988a.517.517 0 01-.32-.113L.218 4.888a.512.512 0 010-.797L5.155.124a.511.511 0 01.64.797l-4.44 3.568 4.462 3.59a.511.511 0 01-.32.909z",clipRule:"evenodd"})}),L=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"7",height:"9",fill:"currentColor",viewBox:"0 0 7 9",children:t.jsx("path",{fillRule:"evenodd",d:"M.54 8.988a.517.517 0 00.32-.113l4.957-3.987a.512.512 0 000-.797L.881.124a.511.511 0 00-.64.797l4.44 3.568L.22 8.079a.511.511 0 00.32.909z",clipRule:"evenodd"})}),E=d.ul`
    margin-right: -4px;
    margin-left: -4px;

    > li {
        min-width: 28px;
        height: 28px;
        margin-right: 4px;
        margin-left: 4px;

        font-size: ${e=>e.theme.typography.fontSize.p12};

        border-radius: ${e=>e.theme.borderRadius.radius4};
        background-color: ${e=>e.theme.palette.secondary};
        color: ${e=>e.theme.palette.primaryTextColor};
        transition: 0.2s 0.1s ease-in-out;
    }

    .BS-pagination--item {
        &:hover,
        &.active {
            border-color: transparent;
            background-color: ${e=>e.theme.palette.accent};
            color: ${e=>e.theme.palette.base};
        }
    }
`,M=({totalPages:e,currentPage:s,handlePageChange:o,className:l=""})=>{const i=()=>{s<e&&o(s+1)},a=()=>{s>1&&o(s-1)};return t.jsxs(E,{className:`${l} BS-pagination flex item-center`,children:[t.jsx("li",{role:"presentation",className:`BS-pagination--item flex-center cursor-pointer ${s===1?"disabled":""}`,onClick:a,children:t.jsx(D,{})}),[...Array(e)].map((p,c)=>t.jsx("li",{role:"presentation",className:`BS-pagination--item flex-center cursor-pointer ${s===c+1?"active":""}`,onClick:()=>o(c+1),children:c+1},c+1)),t.jsx("li",{role:"presentation",className:`BS-pagination--item flex-center cursor-pointer ${s===e?"disabled":""}`,onClick:i,children:t.jsx(L,{})})]})},H=d.div`
    .BS-pagination-wrapper--text {
        font-size: ${e=>e.theme.typography.fontSize.p18};
        line-height: 21px;
        color: ${e=>e.theme.palette.primaryTextColor};

        > span {
            font-weight: ${e=>e.theme.typography.weight.bold};
            color: ${e=>e.theme.palette.accent};
        }
    }
`,_=({totalUsers:e,totalPages:s,currentPage:o,handlePageChange:l,className:i=""})=>{const{t:a}=u();return t.jsxs(H,{className:`${i} BS-pagination-wrapper flex-between`,children:[t.jsx(M,{totalPages:s,currentPage:o,handlePageChange:l}),t.jsxs("p",{className:"BS-pagination-wrapper--text",children:[a("totalNumberOfUsers"),t.jsx("span",{className:"ml-16",children:e})]})]})},P=n.memo(_),h=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"5",fill:"currentColor",viewBox:"0 0 8 5",children:t.jsx("path",{d:"M4 5L.536.5h6.928L4 5z"})}),x=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"5",fill:"currentColor",viewBox:"0 0 8 5",children:t.jsx("path",{d:"M4 0l3.464 4.5H.536L4 0z"})}),A=d.div`
    width: 100%;
    min-width: 100%;
    overflow-y: auto;

    border-radius: ${e=>e.theme.borderRadius.radius20};
    background-color: ${e=>e.theme.palette.secondary};
`,I=d.ul`
    color: ${e=>e.theme.palette.primaryTextColor};

    > li {
        height: 54px;

        font-size: ${e=>e.theme.typography.fontSize.p12};
        font-weight: ${e=>e.theme.typography.weight.medium};
        line-height: 14px;

        border-bottom: 2px solid ${e=>e.theme.palette.accent};
    }

    .BS-table-head--icons {
        display: flex;
        flex-direction: column;

        > button {
            width: 8px;
            height: 6px;

            border: none;
            margin: 1px 0;
            padding: 0;
            background-color: transparent;
            color: ${e=>e.theme.palette.secondaryIconColor};
        }
    }
`,V=d.ul`
    > li {
        height: 60px;

        font-size: ${e=>e.theme.typography.fontSize.p12};
        line-height: 14px;
        color: ${e=>e.theme.palette.secondaryTextColor};

        border-bottom: 2px solid ${e=>e.theme.palette.base};
    }
`,X=d.ul`
    width: 100%;
    border-radius: ${e=>e.theme.borderRadius.radius20};
    overflow: hidden;

    .BS-table--skeleton-head {
        height: 54px;
        border-bottom: 2px solid ${e=>e.theme.palette.accent};
    }

    .BS-table--skeleton-row {
        height: 60px;
        border-bottom: 2px solid ${e=>e.theme.palette.base};
    }
`,q=({handleSortChange:e})=>{const{t:s}=u();return t.jsxs(I,{className:"BS-table-head flex items-center",children:[t.jsxs("li",{className:"width-130 flex items-center pl-34",children:[s("photo"),t.jsxs("div",{className:"BS-table-head--icons ml-12",children:[t.jsx("button",{type:"button",className:"flex-center cursor-pointer",onClick:()=>e("photo","asc"),children:t.jsx(x,{})}),t.jsx("button",{type:"button",className:"flex-center cursor-pointer",onClick:()=>e("photo","desc"),children:t.jsx(h,{})})]})]}),t.jsxs("li",{className:"width-226 flex items-center grow pl-24",children:[s("name"),t.jsxs("div",{className:"BS-table-head--icons ml-12 cursor-pointer",children:[t.jsx("button",{type:"button",className:"flex-center cursor-pointer",onClick:()=>e("name","asc"),children:t.jsx(x,{})}),t.jsx("button",{type:"button",className:"flex-center cursor-pointer",onClick:()=>e("name","desc"),children:t.jsx(h,{})})]})]}),t.jsxs("li",{className:"width-220 flex items-center pl-24",children:[s("location"),t.jsxs("div",{className:"BS-table-head--icons ml-12 cursor-pointer",children:[t.jsx("button",{type:"button",className:"flex-center cursor-pointer",onClick:()=>e("location","asc"),children:t.jsx(x,{})}),t.jsx("button",{type:"button",className:"flex-center cursor-pointer",onClick:()=>e("location","desc"),children:t.jsx(h,{})})]})]}),t.jsxs("li",{className:"width-280 flex items-center pl-24",children:[s("registeredDate"),t.jsxs("div",{className:"BS-table-head--icons ml-12 cursor-pointer",children:[t.jsx("button",{type:"button",className:"flex-center cursor-pointer",onClick:()=>e("registeredDate","asc"),children:t.jsx(x,{})}),t.jsx("button",{type:"button",className:"flex-center cursor-pointer",onClick:()=>e("registeredDate","desc"),children:t.jsx(h,{})})]})]}),t.jsxs("li",{className:"width-390 flex items-center pl-24",children:[s("lastActiveDate"),t.jsxs("div",{className:"BS-table-head--icons ml-12 cursor-pointer",children:[t.jsx("button",{type:"button",className:"flex-center cursor-pointer",onClick:()=>e("lastActiveDate","asc"),children:t.jsx(x,{})}),t.jsx("button",{type:"button",className:"flex-center cursor-pointer",onClick:()=>e("lastActiveDate","desc"),children:t.jsx(h,{})})]})]}),t.jsx("li",{className:"width-146 flex items-center pl-24",children:s("email")}),t.jsx("li",{className:"width-140 flex-center pr-34",children:s("actions")})]})},O=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:[t.jsx("g",{clipPath:"url(#clip0_1_215)",children:t.jsx("path",{fill:"#788195",d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_1_215",children:t.jsx("path",{fill:"#fff",d:"M0 0H24V24H0z"})})})]}),W=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:[t.jsx("g",{clipPath:"url(#clip0_1_129)",children:t.jsx("path",{fill:"#F54745",d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_1_129",children:t.jsx("path",{fill:"#fff",d:"M0 0H24V24H0z"})})})]}),F=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M19.172 2c-.724 0-1.448.276-2 .828L16 4l4 4 1.172-1.172a2.83 2.83 0 00-2-4.828zM14.5 5.5L3 17v4h4L18.5 9.5l-4-4z"})}),G=d.div`
    color: ${e=>e.theme.palette.orange};
`,K=({onRedirect:e,className:s})=>t.jsx(G,{onClick:e,className:`${s} BS-edit-action cursor-pointer`,children:t.jsx(F,{})}),Q=d.label`
    width: 20px;
    height: 10px;
    display: inline-block;
    position: relative;

    > input {
        display: none;
    }

    .BS-switch--slider {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        border-radius: 34px;
        background-color: ${e=>e.theme.palette.green};
        transition: 0.4s;
        cursor: pointer;

        &:before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 50%;

            position: absolute;
            bottom: 2px;
            left: 2px;

            background-color: ${e=>e.theme.palette.white};
            transition: 0.4s;
        }
    }

    &.disable {
        .BS-switch--slider {
            background-color: ${e=>e.theme.palette.red};

            &:before {
                left: calc(100% - 2px);
                transform: translateX(-100%);
            }
        }
    }

    .teeest {
        .BS-switch--slider {
            background-color: orange;

            &:before {
                left: calc(100% - 2px);
                transform: translateX(-100%);
            }
        }
    }
`,J=({state:e=!1,id:s,onUpdateState:o,className:l})=>t.jsxs(Q,{onClick:o,className:`${l} ${e?"disable":"teeest"} BS-switch shrink-0`,htmlFor:`switch-${s}`,children:[t.jsx("input",{type:"checkbox",id:`switch-${s}`}),t.jsx("div",{className:"BS-switch--slider"})]}),Y=()=>{const[e,s]=n.useState(!1),o=n.useRef(null),l=n.useCallback(()=>{s(a=>!a)},[]),i=n.useCallback(a=>{o.current&&!o.current.contains(a.target)&&s(!1)},[]);return n.useEffect(()=>(document.addEventListener("click",i),()=>{document.removeEventListener("click",i)}),[]),{tooltipRef:o,showTooltip:e,toggleTooltip:l}},Z=d.div`
    width: max-content;

    .BS-tooltip--icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;

        > svg {
            cursor: pointer;
        }
    }

    .BS-tooltip--content {
        position: absolute;
        bottom: 32px;
        z-index: 1;

        transition: 0.2s 0.1s ease-in-out;

        border-radius: ${({theme:e})=>e.borderRadius.radius10};
        box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
        filter: drop-shadow(0px 2px 15px rgba(0, 0, 0, 0.05)) drop-shadow(0px 2px 30px rgba(0, 0, 0, 0.05));

        background-color: ${({theme:e})=>e.palette.tooltipBackgroundColor};
        color: ${({theme:e})=>e.palette.tooltipTextColor};

        &:after {
            content: "";

            position: absolute;
            top: 100%;

            border-width: 10px;
            border-style: solid;
            border-color: ${({theme:e})=>e.palette.tooltipBackgroundColor} transparent transparent transparent;
        }

        &.center {
            left: 50%;
            transform: translateX(-50%);

            &:after {
                left: 50%;
                transform: translateX(-50%);
            }
        }

        &.right {
            right: -16px;

            &:after {
                right: 16px;
            }
        }

        &.left {
            left: -16px;

            &:after {
                left: 16px;
            }
        }
    }
`,f=({children:e,icon:s,mode:o="center",onCopy:l=()=>{},className:i=""})=>{const{tooltipRef:a,showTooltip:p,toggleTooltip:c}=Y(),r=n.useCallback(()=>{c(),l()},[l,c]);return t.jsxs(Z,{ref:a,className:`${i} BS-tooltip relative inline-block`,children:[t.jsx("div",{role:"button",tabIndex:0,onClick:r,onKeyDown:r,className:"BS-tooltip--icon flex-center cursor-pointer",children:s}),p&&t.jsx("div",{className:`${o} BS-tooltip--content ph-16 pv-10`,children:n.cloneElement(e,{onCloseTooltip:c})})]})},ee=d.div`
    font-size: ${e=>e.theme.typography.fontSize.p12};
    line-height: 14px;
    text-align: center;
`,te=({text:e="",email:s=""})=>{const{t:o}=u();return t.jsxs(ee,{className:"BS-tooltip-copy",children:[t.jsx("span",{children:s}),t.jsx("span",{children:o(T(e))})]})},se=d.div`
    .BS-tooltip-trash--title {
        font-size: ${e=>e.theme.typography.fontSize.p12};
        line-height: 14px;
        text-align: center;
    }
`,oe=({onCloseTooltip:e,onDeleteUser:s})=>{const{t:o}=u();return t.jsxs(se,{className:"BS-tooltip-trash",children:[t.jsx("h6",{className:"BS-tooltip-trash--title space-pre-line mb-16",children:o("deleteThisUser")}),t.jsxs("div",{className:"flex-between",children:[t.jsx(g,{onClick:e,size:"extra-small",children:o("cancel")}),t.jsx(g,{onClick:s,variant:"danger",size:"extra-small",className:"ml-10",children:o("delete")})]})]})},le=e=>{const[s,o]=n.useState(!1),l=n.useCallback(()=>{navigator.clipboard.writeText(e).then(()=>{o(!0)}).catch(()=>{o(!1)})},[e]);return{isCopied:s,handleCopy:l}},re=(e,s,o,l)=>`/users?_page=${e}&_limit=${s}&_sort=${o}&_order=${l}`,ie=e=>`/users/${e}`,ne=e=>`/users/${e}`,ae=B.injectEndpoints({endpoints:e=>({getUsers:e.query({query:({page:s,limit:o,sort:l,order:i})=>({url:re(s,o,l,i),method:"GET"}),transformResponse(s,o){var i;const l=Number((i=o==null?void 0:o.response)==null?void 0:i.headers.get("X-Total-Count"));return{usersData:s,totalCount:l}},transformErrorResponse:s=>{var o;return(o=s.data)==null?void 0:o.error},providesTags:["User"]}),updateState:e.mutation({query:({id:s,state:o})=>({url:ie(s),method:"PATCH",body:{disabled:o}}),invalidatesTags:["User"]}),deleteUser:e.mutation({query:({id:s})=>({url:ne(s),method:"DELETE"}),invalidatesTags:["User"]})}),overrideExisting:!1}),{useGetUsersQuery:ce,useUpdateStateMutation:de,useDeleteUserMutation:pe}=ae,he=({item:e})=>{const s=w(),{handleCopy:o}=le(e==null?void 0:e.email),[l]=pe(),[i]=de(),a=()=>{s(v.editUser.getPath(e==null?void 0:e.id))},p=r=>{l({id:r})},c=(r,m)=>{i({id:r,state:m})};return t.jsxs(V,{className:"BS-table-row flex items-center",children:[t.jsx("li",{className:"width-130 flex items-center pl-34",children:t.jsx(z,{image:e.photo})}),t.jsx("li",{className:"width-226 flex items-center grow pl-24",children:e.name}),t.jsx("li",{className:"width-220 flex items-center pl-24",children:e.location}),t.jsx("li",{className:"width-280 flex items-center pl-24",children:e.registeredDate}),t.jsx("li",{className:"width-390 flex items-center pl-24",children:e.lastActiveDate}),t.jsx("li",{className:"width-146 flex items-center relative pl-24",children:t.jsx(f,{onCopy:o,icon:t.jsx(O,{}),children:t.jsx(te,{text:"isCopied",email:e.email})})}),t.jsxs("li",{className:"width-140 flex-between pr-34",children:[t.jsx(J,{id:e.id,state:e.disabled,onUpdateState:r=>{r.preventDefault(),c(e.id,!e.disabled)}}),t.jsx(K,{onRedirect:a,className:"mh-16"}),t.jsx(f,{icon:t.jsx(W,{}),mode:"right",children:t.jsx(oe,{onDeleteUser:()=>p(e.id)})})]})]})},xe=n.memo(he),me=({data:e,handleSortChange:s,className:o=""})=>t.jsxs(A,{className:`${o} BS-table`,children:[t.jsx(q,{handleSortChange:s}),t.jsx("div",{className:"BS-table--body",children:e==null?void 0:e.map(l=>t.jsx(xe,{item:l},l.id))})]}),ue=n.memo(me),be=C`
  to {
    background-position: right -40px top 0;
  }
`,ge=d.div`
    width: 100%;
    height: 100%;

    border-radius: ${e=>e.$hasBorderRadius?({theme:s})=>s.borderRadius.radius10:"0"};

    background-color: ${({theme:e})=>e.palette.secondary};
    background-image: linear-gradient(
        90deg,
        ${e=>e.theme.palette.transparent},
        ${e=>e.theme.palette.transparent05},
        ${e=>e.theme.palette.transparent}
    );

    background-repeat: no-repeat;
    background-position: left -40px top 0;
    background-size: 40px 100%;

    animation: ${be} 1s ease infinite;
`,j=({hasBorderRadius:e=!1})=>t.jsx(ge,{$hasBorderRadius:e,className:"BS-skeleton"}),fe=({className:e=""})=>{const s=[0,1,2,3,4,5,6,7,8,9];return t.jsxs(X,{className:`${e} BS-table--skeleton`,children:[t.jsx("li",{className:"BS-table--skeleton-head",children:t.jsx(j,{})}),s.map(o=>t.jsx("li",{className:"BS-table--skeleton-row",children:t.jsx(j,{})},o))]})},ve=()=>{const e=w(),[s,o]=n.useState(1),[l,i]=n.useState("registeredDate"),[a,p]=n.useState("desc"),c=10,{data:r,isLoading:m}=ce({page:s,limit:c,sort:l,order:a}),S=r?Math.ceil(r.totalCount/c):0,y=(b,k)=>{i(b),p(k),o(1)},N=b=>{o(b)},$=()=>{e(v.newUser.path)};return t.jsxs(R,{className:"BS-home",children:[t.jsxs("div",{className:"grow",children:[t.jsx(U,{title:"allUsers",buttonText:"newUser",onRedirect:$}),!r&&m&&t.jsx(fe,{className:"mt-26"}),r&&!m&&t.jsx(ue,{data:r==null?void 0:r.usersData,handleSortChange:y,className:"mt-26"})]}),r&&t.jsx(P,{totalUsers:r.totalCount,totalPages:S,currentPage:s,handlePageChange:N,className:"mt-60"})]})};export{ve as default};
