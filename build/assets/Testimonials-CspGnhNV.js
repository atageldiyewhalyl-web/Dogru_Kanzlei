import{r as d,j as t}from"./react-core-CqEaB_yT.js";import{u as m}from"./index-DlnZT6zd.js";import{u as p,v as g,n as f}from"./ui-vendor-59PCBjLA.js";import"./react-router-D5deifTW.js";import"./data-services-DzyZvKAE.js";import"./data-blog-B2tARbbP.js";const i=[5,1,2,3,4,6];function j(){const{t:r}=m(),[n,s]=d.useState(0),l=()=>s(e=>e===0?i.length-1:e-1),c=()=>s(e=>e===i.length-1?0:e+1),a=i[n];return t.jsxs("section",{className:"testimonials-section",style:{background:"#F7F5F0"},children:[t.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[t.jsxs("div",{style:{marginBottom:64},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[t.jsx("div",{style:{width:32,height:1,background:"#B8963E"}}),t.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:14,fontWeight:500,letterSpacing:"0.22em",color:"#B8963E",textTransform:"uppercase"},children:r("testimonials_badge")})]}),t.jsxs("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 3.5vw, 44px)",fontWeight:500,color:"#1C3829",lineHeight:1.15,margin:0},children:[r("testimonials_title"),t.jsx("br",{}),t.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:r("testimonials_subtitle")})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:64,alignItems:"center"},className:"testimonial-grid",children:[t.jsxs("div",{className:"testimonial-nav",children:[t.jsx("div",{className:"testimonial-nav-list",style:{marginBottom:40},children:i.map((e,o)=>t.jsxs("button",{onClick:()=>s(o),className:`testimonial-nav-button ${o===n?"active":""}`,style:{display:"block",width:"100%",background:"none",border:"none",borderLeft:`2px solid ${o===n?"#B8963E":"#d4cfc6"}`,padding:"12px 20px",textAlign:"left",cursor:"pointer",marginBottom:4,transition:"border-color 0.2s"},children:[t.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:13,fontWeight:o===n?700:500,color:o===n?"#1C3829":"#9a9a8a",transition:"color 0.2s, font-weight 0.2s"},children:r(`testimonial_${e}_name`)}),t.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:11,color:o===n?"#B8963E":"#bbb8b0",marginTop:2,transition:"color 0.2s"},children:r(`testimonial_${e}_area`)})]},e))}),t.jsxs("div",{className:"testimonial-nav-controls",style:{display:"flex",gap:8},children:[t.jsx("button",{onClick:l,"aria-label":"Vorheriges Testimonial",style:{width:44,height:44,border:"1px solid #d4cfc6",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"border-color 0.2s, background 0.2s"},onMouseEnter:e=>{var o;e.currentTarget.style.borderColor="#1C3829",e.currentTarget.style.background="#1C3829",(o=e.currentTarget.querySelector("svg"))==null||o.setAttribute("color","#fff")},onMouseLeave:e=>{var o;e.currentTarget.style.borderColor="#d4cfc6",e.currentTarget.style.background="none",(o=e.currentTarget.querySelector("svg"))==null||o.setAttribute("color","#1C3829")},children:t.jsx(p,{size:18,color:"#1C3829"})}),t.jsx("button",{onClick:c,"aria-label":"Nächstes Testimonial",style:{width:44,height:44,border:"1px solid #d4cfc6",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"border-color 0.2s, background 0.2s"},onMouseEnter:e=>{var o;e.currentTarget.style.borderColor="#1C3829",e.currentTarget.style.background="#1C3829",(o=e.currentTarget.querySelector("svg"))==null||o.setAttribute("color","#fff")},onMouseLeave:e=>{var o;e.currentTarget.style.borderColor="#d4cfc6",e.currentTarget.style.background="none",(o=e.currentTarget.querySelector("svg"))==null||o.setAttribute("color","#1C3829")},children:t.jsx(g,{size:18,color:"#1C3829"})})]})]}),t.jsxs("div",{className:"testimonial-active-card",style:{background:"#ffffff",position:"relative",borderLeft:"3px solid #B8963E"},children:[t.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:120,fontWeight:400,color:"#f0ece4",lineHeight:.7,marginBottom:24,userSelect:"none"},children:'"'}),t.jsx("div",{style:{display:"flex",gap:4,marginBottom:24},children:Array.from({length:5}).map((e,o)=>t.jsx(f,{size:14,style:{fill:"#B8963E",color:"#B8963E"}},o))}),t.jsxs("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(20px, 2.5vw, 22px)",fontWeight:400,fontStyle:"italic",color:"#2a2a2a",lineHeight:1.6,marginBottom:36},children:['"',r(`testimonial_${a}_text`),'"']}),t.jsxs("div",{style:{borderTop:"1px solid #f0ece4",paddingTop:24},children:[t.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:13,fontWeight:700,color:"#1C3829",letterSpacing:"0.04em"},children:r(`testimonial_${a}_name`)}),t.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:13,fontWeight:600,color:"#555555",marginTop:4,letterSpacing:"0.06em"},children:r(`testimonial_${a}_area`)})]})]},n)]})]}),t.jsx("style",{children:`
        .testimonials-section {
          padding: 100px 32px;
        }
        .testimonial-active-card {
          padding: 56px 52px;
        }
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 64px 24px 100px 24px;
          }
          .testimonial-grid {
            display: flex !important;
            flex-direction: column-reverse;
            gap: 40px !important;
          }
          .testimonial-active-card {
            padding: 32px 24px;
            border-left: none !important;
            border-top: 3px solid #B8963E;
          }
          .testimonial-nav-list {
            display: flex;
            overflow-x: auto;
            padding-bottom: 16px;
            margin-bottom: 24px !important;
            gap: 20px;
            -ms-overflow-style: none;
            scrollbar-width: none;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
          }
          .testimonial-nav-list::-webkit-scrollbar {
            display: none;
          }
          .testimonial-nav-button {
            border-left: none !important;
            border-bottom: 2px solid #e5e5e5 !important;
            min-width: 180px;
            flex-shrink: 0;
            margin-bottom: 0 !important;
            padding: 12px 0 16px 0 !important;
            scroll-snap-align: start;
            display: flex !important;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            white-space: normal;
          }
          .testimonial-nav-button.active {
            border-bottom-color: #B8963E !important;
          }
          .testimonial-nav-controls {
            justify-content: center;
            margin-top: 16px;
          }
        }
      `})]})}export{j as Testimonials};
