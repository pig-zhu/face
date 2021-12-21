var R=Object.defineProperty,k=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var v=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))T.call(t,n)&&v(e,n,t[n]);return e},E=(e,t)=>k(e,I(t));import{h as m,d as b,N as j,R as x,r as s,c as y,w as u,A as $,a as N,b as V,B as F,C as S,e as z,D as H,o as D,f as d,g as A,i as q,j as W,k as Z,l as K,m as M,z as G,n as J,p as Q,q as U,s as X,t as Y,u as ee,v as te}from"./vendor.43a23b66.js";const ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};ne();const oe="modulepreload",C={},ae="/face/",c=function(t,n){return!n||n.length===0?t():Promise.all(n.map(a=>{if(a=`${ae}${a}`,a in C)return;C[a]=!0;const o=a.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":oe,o||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),o)return new Promise((l,_)=>{i.addEventListener("load",l),i.addEventListener("error",_)})})).then(()=>t())},B=[{path:"/",name:"home",component:()=>c(()=>import("./index.ebf4e65e.js"),["assets/index.ebf4e65e.js","assets/vendor.43a23b66.js"]),meta:{title:"\u9996\u9875"}},{path:"/face1",name:"face1",component:()=>c(()=>import("./index.a8d2b9d7.js"),["assets/index.a8d2b9d7.js","assets/vendor.43a23b66.js"]),meta:{title:"\u4EBA\u8138\u68C0\u6D4B"},children:[{path:"/face-detection",name:"face-detection",component:()=>c(()=>import("./face-detection.6885d6ab.js"),["assets/face-detection.6885d6ab.js","assets/face-detection.664f07c7.css","assets/FaceMatcher.94dbf9cd.js","assets/drawDetections.cb76136a.js","assets/bufferToImage.0eb741dc.js","assets/resizeResults.b26e0a3c.js","assets/vendor.43a23b66.js"]),meta:{title:"\u4EBA\u8138\u68C0\u6D4B"}},{path:"/face-landmark-detection",name:"face-landmark-detection",component:()=>c(()=>import("./face-landmark-detection.456be9b0.js"),["assets/face-landmark-detection.456be9b0.js","assets/face-landmark-detection.e89c99d5.css","assets/FaceMatcher.94dbf9cd.js","assets/drawDetections.cb76136a.js","assets/bufferToImage.0eb741dc.js","assets/resizeResults.b26e0a3c.js","assets/vendor.43a23b66.js"]),meta:{title:"\u4EBA\u8138\u6807\u5FD7\u68C0\u6D4B"}},{path:"/face-expression-recognition",name:"face-expression-recognition",component:()=>c(()=>import("./face-expression-recognition.5d3cd0ed.js"),["assets/face-expression-recognition.5d3cd0ed.js","assets/face-expression-recognition.9cbfc45b.css","assets/FaceMatcher.94dbf9cd.js","assets/drawDetections.cb76136a.js","assets/drawFaceExpressions.fbbe264f.js","assets/bufferToImage.0eb741dc.js","assets/resizeResults.b26e0a3c.js","assets/vendor.43a23b66.js"]),meta:{title:"\u9762\u90E8\u8868\u60C5\u8BC6\u522B"}},{path:"/face-recognition",name:"face-recognition",component:()=>c(()=>import("./face-recognition.e216d9ba.js"),["assets/face-recognition.e216d9ba.js","assets/face-recognition.a0e7197e.css","assets/FaceMatcher.94dbf9cd.js","assets/bufferToImage.0eb741dc.js","assets/resizeResults.b26e0a3c.js","assets/vendor.43a23b66.js"]),meta:{title:"\u4EBA\u8138\u8BC6\u522B\u5BF9\u6BD4"}},{path:"/face-extraction",name:"face-extraction",component:()=>c(()=>import("./face-extraction.6eadae25.js"),["assets/face-extraction.6eadae25.js","assets/face-extraction.6fd3a6db.css","assets/FaceMatcher.94dbf9cd.js","assets/drawDetections.cb76136a.js","assets/bufferToImage.0eb741dc.js","assets/resizeResults.b26e0a3c.js","assets/vendor.43a23b66.js"]),meta:{title:"\u4EBA\u8138\u63D0\u53D6"}}]},{path:"/webcamAge",name:"webcamAge",component:()=>c(()=>import("./index.cef739a6.js"),["assets/index.cef739a6.js","assets/vendor.43a23b66.js"]),meta:{title:"\u7F51\u7EDC\u6444\u50CF\u5934\u68C0\u6D4B"},children:[{path:"/video-face-tracking",name:"video-face-tracking",component:()=>c(()=>import("./video-face-tracking.632ada58.js"),["assets/video-face-tracking.632ada58.js","assets/video-face-tracking.dcb645bb.css","assets/FaceMatcher.94dbf9cd.js","assets/drawDetections.cb76136a.js","assets/resizeResults.b26e0a3c.js","assets/vendor.43a23b66.js"]),meta:{title:"\u89C6\u9891\u4EBA\u8138\u8DDF\u8E2A"}},{path:"/webcam-face-detection",name:"webcam-face-detection",component:()=>c(()=>import("./webcam-face-detection.1a38ea72.js"),["assets/webcam-face-detection.1a38ea72.js","assets/webcam-face-detection.cbe86f93.css","assets/FaceMatcher.94dbf9cd.js","assets/drawDetections.cb76136a.js","assets/drawFaceExpressions.fbbe264f.js","assets/bufferToImage.0eb741dc.js","assets/fetchImage.eb914c85.js","assets/resizeResults.b26e0a3c.js","assets/vendor.43a23b66.js"]),meta:{title:"\u7F51\u7EDC\u6444\u50CF\u5934\u4EBA\u8138\u68C0\u6D4B"}}]},{path:"/bbt",name:"bbt",component:()=>c(()=>import("./index.7cf17c3c.js"),["assets/index.7cf17c3c.js","assets/vendor.43a23b66.js"]),meta:{title:"BBT\u68C0\u6D4B"},children:[{path:"/bbt-face-similarity",name:"bbt-face-similarity",component:()=>c(()=>import("./bbt-face-similarity.54ce48b1.js"),["assets/bbt-face-similarity.54ce48b1.js","assets/bbt-face-similarity.f8da8711.css","assets/FaceMatcher.94dbf9cd.js","assets/bufferToImage.0eb741dc.js","assets/fetchImage.eb914c85.js","assets/vendor.43a23b66.js"]),meta:{title:"BBT\u76F8\u4F3C\u6027\u68C0\u6D4B"}}]},{path:"/login",name:"login",component:()=>c(()=>import("./index.cb77bce9.js"),["assets/index.cb77bce9.js","assets/vendor.43a23b66.js"]),meta:{},hidden:!0},{path:"/404",component:()=>c(()=>import("./404.7805a0c9.js"),["assets/404.7805a0c9.js","assets/vendor.43a23b66.js"]),meta:{},hidden:!0}],re=[{path:"/:pathMatch(.*)",redirect:"/404",hidden:!0}];var P=(e,t)=>{const n=e.__vccOpts||e;for(const[a,o]of t)n[a]=o;return n};let ie=[$,N,V,F,S,z,H];function ce(e){return()=>m(j,null,{default:()=>m(e)})}function O(e){var n;let t;return((n=e.children)==null?void 0:n.length)?t=e.meta.title:t=()=>m(x,{to:{name:e.name,params:{lang:"zh-CN"}}},{default:()=>e.meta.title}),{label:t,key:e.path,path:e.path,name:e.name}}let se=B.map((e,t)=>{var a;if(e.hidden)return!1;let n;return((a=e.children)==null?void 0:a.length)&&(n=e.children.map(o=>O(o))),E(g({},O(e)),{children:n,icon:ce(ie[t])})});const ue=b({setup(){let e=window.location.pathname;return{menuOptions:se.filter(t=>t),defaultPath:e}}});function de(e,t,n,a,o,r){const i=s("n-menu"),l=s("n-layout-sider"),_=s("n-layout-content"),p=s("n-layout"),L=s("n-space");return D(),y(L,{vertical:""},{default:u(()=>[d(p,{"has-sider":""},{default:u(()=>[d(l,{bordered:"","show-trigger":"","collapse-mode":"width","collapsed-width":64,width:240,"native-scrollbar":!1,style:{"max-height":"320px"}},{default:u(()=>[d(i,{"default-value":e.defaultPath,"default-expand-all":"","collapsed-width":64,"collapsed-icon-size":22,options:e.menuOptions},null,8,["default-value","options"])]),_:1}),d(_,{"content-style":"padding: 24px;"},{default:u(()=>[A(e.$slots,"default",{},void 0,!0)]),_:3})]),_:3})]),_:3})}var le=P(ue,[["render",de],["__scopeId","data-v-c2441ed4"]]);const _e=b({components:{NConfigProvider:q,NInput:W,NDatePicker:Z,NSpace:K,PageHeader:le},setup(){return{darkTheme:M([Q,U]),zhCN:G,dateZhCN:J}}});function pe(e,t,n,a,o,r){const i=s("router-view"),l=s("n-message-provider"),_=s("page-header"),p=s("n-config-provider");return D(),y(p,{locale:e.zhCN,"date-locale":e.dateZhCN},{default:u(()=>[d(_,null,{default:u(()=>[A(e.$slots,"default",{},()=>[d(l,null,{default:u(()=>[d(i)]),_:1})])]),_:3})]),_:3},8,["locale","date-locale"])}var me=P(_e,[["render",pe]]);const fe=X({history:Y(),routes:B.concat(re)}),f=ee(me);f.use(fe);f.use(te);f.mount("#app");export{P as _};