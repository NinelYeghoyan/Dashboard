import{j as o,a as b,s as y,r as h,u as $,b as U,c as v,d as m,e as x}from"./index-a2fe8114.js";import{u as f,B as j,P as w,a as z}from"./index-e14fc7d7.js";const T=()=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 18 18",children:o.jsx("path",{d:"M5.5 10.5l2.5 3L11.5 9l4.5 6H2l3.5-4.5zM18 16V2a2 2 0 00-2-2H2a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z"})}),B=e=>`/users/${e}`,C="/users",E=e=>`/users/${e}`,N="/images",R=b.injectEndpoints({endpoints:e=>({getUser:e.query({query:({id:a})=>({url:B(a),method:"GET"})}),createUser:e.mutation({query:a=>({url:C,method:"POST",body:a}),invalidatesTags:["User"]}),editUser:e.mutation({query:({id:a,body:i})=>({url:E(a),method:"PUT",body:i}),invalidatesTags:["User"]}),uploadUserImage:e.mutation({query:a=>({url:N,method:"POST",headers:{"Content-Type":"multipart/form-data"},body:a}),invalidatesTags:["User"]})}),overrideExisting:!1}),{useGetUserQuery:D,useCreateUserMutation:k,useEditUserMutation:M,useUploadUserImageMutation:P}=R,F=y.div`
    .BS-image-upload--input {
        width: 100%;
        height: 42px;
        overflow: hidden;

        border: 1px solid ${e=>e.theme.palette.accent};
        border-radius: ${e=>e.theme.borderRadius.radius10};
        background-color: ${e=>e.theme.palette.secondary};
        color: ${e=>e.theme.palette.accent};
    }

    .BS-image-upload--text {
        font-size: ${e=>e.theme.typography.fontSize.p14};
        line-height: 16px;
    }

    .BS-image-upload--input-hidden {
        height: 100%;

        position: absolute;
        top: 0;
        right: 0;
        z-index: 99;

        opacity: 0;
        -moz-opacity: 0;
    }

    .BS-image-upload--selected {
        width: 150px;
        height: 150px;
        overflow: hidden;

        border-radius: 50%;
        background-color: ${e=>e.theme.palette.primary};
    }
`,O=({className:e="",initialImage:a})=>{const{t:i}=f(),[t,s]=h.useState(a),[d]=P(),n=async p=>{var c;const r=(c=p.target.files)==null?void 0:c[0];if(r)try{const l=new FormData;l.append("file",r);const g=await d(l);if("data"in g){const S=g.data.photo;s(S)}else console.error("Error uploading image:",g.error)}catch(l){console.error("Error uploading image:",l)}};return o.jsxs(F,{className:`${e} BS-image-upload`,children:[!t&&o.jsxs("div",{className:"BS-image-upload--input flex items-center relative pl-20 cursor-pointer",children:[o.jsx(T,{}),o.jsx("span",{className:"BS-image-upload--text ml-10",children:i("photo")}),o.jsx("input",{className:"BS-image-upload--input-hidden cursor-pointer",type:"file",accept:"image/png, image/gif, image/jpeg",onChange:n})]}),t&&o.jsx("div",{className:"BS-image-upload--selected",children:o.jsx("img",{src:t,alt:"Selected",className:"w100 object-cover"})})]})},_=y.div`
    > input {
        width: 100%;
        height: 35px;

        font-family: ${({theme:e})=>e.typography.fontFamily.roboto}, sans-serif;
        font-weight: ${({theme:e})=>e.typography.weight.regular};
        line-height: 14px;
        letter-spacing: 0.5px;

        border: none;

        &::placeholder {
            font-family: ${({theme:e})=>e.typography.fontFamily.roboto}, sans-serif;
            line-height: 14px;
            letter-spacing: 0.5px;
        }

        &:focus {
            outline: none;
        }

        &.primary {
            background-color: ${({theme:e})=>e.palette.primary};
            color: ${({theme:e})=>e.palette.secondaryTextColor};

            &::placeholder {
                color: ${({theme:e})=>e.palette.secondaryTextColor};
            }
        }

        &.secondary {
            background-color: ${({theme:e})=>e.palette.secondary};
            color: ${({theme:e})=>e.palette.secondaryTextColor};

            &::placeholder {
                color: ${({theme:e})=>e.palette.secondaryTextColor};
            }
        }

        &.disable {
            pointer-events: none;
            touch-action: none;
            background-color: ${({theme:e})=>e.palette.disableButtonBackgroundColor};
            color: ${({theme:e})=>e.palette.disableButtonTextColor};

            &::placeholder {
                color: ${({theme:e})=>e.palette.disableButtonTextColor};
            }
        }

        &.small {
            font-size: ${({theme:e})=>e.typography.fontSize.p12};
            border-radius: ${({theme:e})=>e.borderRadius.radius8};

            &::placeholder {
                font-size: ${({theme:e})=>e.typography.fontSize.p12};
            }
        }

        &.medium {
            font-size: ${({theme:e})=>e.typography.fontSize.p16};
            border-radius: ${({theme:e})=>e.borderRadius.radius10};

            &::placeholder {
                font-size: ${({theme:e})=>e.typography.fontSize.p16};
            }
        }

        &.large {
            font-size: ${({theme:e})=>e.typography.fontSize.p18};
            border-radius: ${({theme:e})=>e.borderRadius.radius12};

            &::placeholder {
                font-size: ${({theme:e})=>e.typography.fontSize.p18};
            }
        }
    }
`,u=({type:e="text",variant:a="secondary",sizeType:i="medium",className:t="",...s})=>o.jsx(_,{className:`${t} BS-input`,children:o.jsx("input",{className:`${a} ${i} ph-18`,type:e,...s})}),q=y.div`
    max-width: 1140px;
    min-height: 610px;
    border: 1px solid ${e=>e.theme.palette.borderColor};
    border-radius: ${e=>e.theme.borderRadius.radius20};

    > form {
        width: 396px;
    }
`,A=({onSubmit:e=()=>{},userItem:a})=>{const{t:i}=f(),[t,s]=h.useState({name:"",photo:"",email:"",location:""}),d=h.useCallback(p=>{const{name:r,value:c}=p.target;s(l=>({...l,[r]:c}))},[]),n=h.useCallback(p=>{p.preventDefault();const r={...t,id:(a==null?void 0:a.id)??0,photo:(a==null?void 0:a.photo)??"",disabled:(a==null?void 0:a.disabled)||!1,registeredDate:new Date().toISOString(),lastActiveDate:new Date().toISOString()};e(r,a==null?void 0:a.id)},[t,e,a==null?void 0:a.disabled,a==null?void 0:a.id,a==null?void 0:a.photo]);return h.useEffect(()=>{a&&s({name:a==null?void 0:a.name,photo:a==null?void 0:a.photo,email:a==null?void 0:a.email,location:a==null?void 0:a.location})},[a]),o.jsx(q,{className:"BS-form mt-26 pv-52 ph-54",children:o.jsxs("form",{onSubmit:n,children:[o.jsx(u,{type:"text",name:"name",value:t.name,onChange:d,placeholder:i("userName"),sizeType:"small"}),o.jsx(O,{initialImage:t.photo,className:"mt-16"}),o.jsx(u,{type:"email",name:"email",value:t.email,onChange:d,placeholder:i("email"),sizeType:"small",className:"mt-16"}),o.jsx(u,{type:"text",name:"location",value:t.location,onChange:d,placeholder:i("location"),sizeType:"small",className:"mt-16"}),o.jsx(j,{type:"submit",size:"small",className:"mt-28",isFullWidth:!0,children:i("save")})]})})},L=()=>{const{id:e}=$(),a=U(),i=v(),[t]=M(),[s]=k(),{data:d}=D({id:Number(e)}),n=!!e,p=()=>{a(x.home.path)},r=h.useCallback((c,l)=>{n&&l?(t({id:l,body:c}),i(m("SHOW_EDIT_USER_MESSAGE"))):(s(c),i(m("SHOW_NEW_USER_MESSAGE"))),a(x.home.path),setTimeout(()=>{i(m(""))},2e3)},[t,s,a,n]);return o.jsxs(w,{className:`BS-${n?"edit":"new"}-user`,children:[o.jsx(z,{title:n?"editUser":"newUser",buttonText:"allUsers",onRedirect:p}),o.jsx(A,{onSubmit:r,userItem:d})]})};export{L as default};
