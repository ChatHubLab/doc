import{d as k,o as v,c as b,k as m,t as P,e as L,r as $,g as x,h,x as V,j as E,a3 as O,N as M,n as N,a4 as U,O as F,a5 as K,M as j,a2 as H,Z as J,U as q,F as G,D as W,l as _,_ as X,s as A,a6 as Z,a7 as Q,a8 as Y,a9 as ee,aa as te,ab as se,ac as ae,ad as ne,ae as oe,af as re,X as le,u as ce,y as ie,ag as ue,ah as pe,ai as de,aj as fe}from"./chunks/framework.8f599c84.js";import{t as _e}from"./chunks/theme.e6fbf697.js";const ve={class:"chat-panel"},be={key:0,class:"controls"},me=m("div",{class:"circle red"},null,-1),ge=m("div",{class:"circle yellow"},null,-1),he=m("div",{class:"circle green"},null,-1),ye={class:"title"},Se={class:"content"},Te=k({__name:"ChatPanel",props:{controls:{type:Boolean,default:!0},title:{default:"聊天记录"}},setup(e){const s=e;return(t,a)=>(v(),b("div",ve,[s.controls?(v(),b("div",be,[me,ge,he,m("div",ye,P(s.title),1)])):L("",!0),m("div",Se,[$(t.$slots,"default")])]))}});const ke=["src"],Pe={class:"nickname"},$e={class:"message-box"},Ce=k({__name:"ChatMessage",props:{nickname:{},color:{},avatar:{}},setup(e,{expose:s}){const t={Alice:"#cc0066",Bot:"#00994d",User:"#1e90ff",Dave:"#f4a460"},a=x(()=>n.color||t[n.nickname[0].toLocaleUpperCase()+n.nickname.slice(1).toLocaleLowerCase()]),n=e,o=h(!1),r=h(!1),c=h(!1),p=h();function d(){let i;for(const g of document.querySelectorAll(".chat-message")){if(g===p.value)return i;i=g}}V(r,i=>{if(!i)return o.value=!1;const g=d();if(!g||g.getBoundingClientRect().bottom<0)return f();const w=g.__vue__.exposed;w.moving.value||!w.shown.value?w.onappear(f):f()});let y=()=>{};function f(){o.value=!0,c.value=!0,setTimeout(()=>{c.value=!1,y()},100)}function u(){p.value.getBoundingClientRect().top<innerHeight&&(r.value=!0)}const l=U();return s({moving:c,shown:o,onappear(i){y=i}}),E(()=>{p.value.__vue__=l,u(),addEventListener("scroll",u),addEventListener("resize",u)}),O(()=>{removeEventListener("scroll",u),removeEventListener("resize",u)}),(i,g)=>(v(),b("div",{ref_key:"root",ref:p,class:N(["chat-message",{shown:o.value}])},[i.avatar?(v(),b("img",{key:0,class:"avatar",src:i.avatar},null,8,ke)):(v(),b("div",{key:1,class:"avatar",style:M({backgroundColor:a.value})},P(i.nickname[0]),5)),m("div",Pe,P(i.nickname),1),m("div",$e,[$(i.$slots,"default")])],2))}});const we=e=>{if(typeof document>"u")return{stabilizeScrollPosition:n=>async(...o)=>n(...o)};const s=document.documentElement;return{stabilizeScrollPosition:a=>async(...n)=>{const o=a(...n),r=e.value;if(!r)return o;const c=r.offsetTop-s.scrollTop;return await F(),s.scrollTop=r.offsetTop-c,o}}},z="vitepress:tabSharedState",T=typeof localStorage<"u"?localStorage:null,B="vitepress:tabsSharedState",Ae=()=>{const e=T==null?void 0:T.getItem(B);if(e)try{return JSON.parse(e)}catch{}return{}},xe=e=>{T&&T.setItem(B,JSON.stringify(e))},Ee=e=>{const s=K({});V(()=>s.content,(t,a)=>{t&&a&&xe(t)},{deep:!0}),e.provide(z,s)},Re=(e,s)=>{const t=j(z);if(!t)throw new Error("[vitepress-plugin-tabs] TabsSharedState should be injected");E(()=>{t.content||(t.content=Ae())});const a=h(),n=x({get(){var p;const r=s.value,c=e.value;if(r){const d=(p=t.content)==null?void 0:p[r];if(d&&c.includes(d))return d}else{const d=a.value;if(d)return d}return c[0]},set(r){const c=s.value;c?t.content&&(t.content[c]=r):a.value=r}});return{selected:n,select:r=>{n.value=r}}};let R=0;const Le=()=>(R++,""+R);function Ve(){const e=H();return x(()=>{var a;const t=(a=e.default)==null?void 0:a.call(e);return t?t.filter(n=>typeof n.type=="object"&&"__name"in n.type&&n.type.__name==="PluginTabsTab"&&n.props).map(n=>{var o;return(o=n.props)==null?void 0:o.label}):[]})}const D="vitepress:tabSingleState",je=e=>{J(D,e)},ze=()=>{const e=j(D);if(!e)throw new Error("[vitepress-plugin-tabs] TabsSingleState should be injected");return e},Be={class:"plugin-tabs"},De=["id","aria-selected","aria-controls","tabindex","onClick"],Ie=k({__name:"PluginTabs",props:{sharedStateKey:{}},setup(e){const s=e,t=Ve(),{selected:a,select:n}=Re(t,q(s,"sharedStateKey")),o=h(),{stabilizeScrollPosition:r}=we(o),c=r(n),p=h([]),d=f=>{var C;const u=t.value.indexOf(a.value);let l;f.key==="ArrowLeft"?l=u>=1?u-1:t.value.length-1:f.key==="ArrowRight"&&(l=u<t.value.length-1?u+1:0),l!==void 0&&(c(t.value[l]),(C=p.value[l])==null||C.focus())},y=Le();return je({uid:y,selected:a}),(f,u)=>(v(),b("div",Be,[m("div",{ref_key:"tablist",ref:o,class:"plugin-tabs--tab-list",role:"tablist",onKeydown:d},[(v(!0),b(G,null,W(_(t),l=>(v(),b("button",{id:`tab-${l}-${_(y)}`,ref_for:!0,ref_key:"buttonRefs",ref:p,key:l,role:"tab",class:"plugin-tabs--tab","aria-selected":l===_(a),"aria-controls":`panel-${l}-${_(y)}`,tabindex:l===_(a)?0:-1,onClick:()=>_(c)(l)},P(l),9,De))),128))],544),$(f.$slots,"default")]))}});const Oe=["id","aria-labelledby"],Me=k({__name:"PluginTabsTab",props:{label:{}},setup(e){const{uid:s,selected:t}=ze();return(a,n)=>_(t)===a.label?(v(),b("div",{key:0,id:`panel-${a.label}-${_(s)}`,class:"plugin-tabs--content",role:"tabpanel",tabindex:"0","aria-labelledby":`tab-${a.label}-${_(s)}`},[$(a.$slots,"default",{},void 0,!0)],8,Oe)):L("",!0)}});const Ne=X(Me,[["__scopeId","data-v-b2b19630"]]),Ue=e=>{Ee(e),e.component("PluginTabs",Ie),e.component("PluginTabsTab",Ne)},Fe={extends:_e,enhanceApp({app:e}){e.component("chat-panel",Te),e.component("chat-message",Ce),Ue(e)}};function I(e){if(e.extends){const s=I(e.extends);return{...s,...e,async enhanceApp(t){s.enhanceApp&&await s.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const S=I(Fe),Ke=k({name:"VitePressApp",setup(){const{site:e}=ce();return E(()=>{ie(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),ue(),pe(),de(),S.setup&&S.setup(),()=>fe(S.Layout)}});async function He(){const e=qe(),s=Je();s.provide(Q,e);const t=Y(e.route);return s.provide(ee,t),s.component("Content",te),s.component("ClientOnly",se),Object.defineProperties(s.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),S.enhanceApp&&await S.enhanceApp({app:s,router:e,siteData:ae}),{app:s,router:e,data:t}}function Je(){return ne(Ke)}function qe(){let e=A,s;return oe(t=>{let a=re(t),n=null;return a&&(e&&(s=a),(e||s===a)&&(a=a.replace(/\.js$/,".lean.js")),n=le(()=>import(a),[])),A&&(e=!1),n},S.NotFound)}A&&He().then(({app:e,router:s,data:t})=>{s.go().then(()=>{Z(s.route,t.site),e.mount("#app")})});export{He as createApp};
