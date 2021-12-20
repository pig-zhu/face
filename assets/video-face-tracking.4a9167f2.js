import{n as h,l as k,M as F,T as v,S as _}from"./FaceMatcher.94dbf9cd.js";import{d as I}from"./drawDetections.cb76136a.js";import{d as R,m as D,r as M}from"./resizeResults.b26e0a3c.js";import{_ as T}from"./index.5931beb0.js";import{d as S,y as U,r as a,x as V,E as s,f as i,w as n,F as L,o as z,I as c,J as j,G as E,H as O}from"./vendor.43a23b66.js";const $=S({name:"video-face-tracking",data(){return{videoPlay:!1,showModal:!0,showLoading:!1,checked:!1,minConfidence:.5,scoreThreshold:.5,inputSize:512,imgUrl:"",drawImg:"/media/test.mp4",facevalue:"ssdMobilenetv1",faces:[{label:"SSD Mobilenet V1",value:"ssdMobilenetv1"},{label:"Tiny Face Detector",value:"tinyFaceDetector"}],options:null,inputVideo:null,canvas:null,timeout:null}},watch:{facevalue(e){this.fnInit(),this.updateResults()}},mounted(){this.$nextTick(()=>{this.fnInit()}),this.$message=U(),this.inputVideo=document.getElementById("inputVideo"),this.canvas=document.getElementById("overlay")},methods:{play(){this.inputVideo.paused?(this.inputVideo.play(),this.videoPlay=!0,setTimeout(()=>this.updateResults(),100)):(this.videoPlay=!1,this.inputVideo.pause())},async fnInit(){switch(this.showLoading=!0,await h[this.facevalue].loadFromUri("/models"),await k("/models"),this.facevalue){case"ssdMobilenetv1":this.options=new _({minConfidence:.5});break;case"tinyFaceDetector":this.options=new v({inputSize:512,scoreThreshold:.5});break;case"mtcnn":this.options=new F({minFaceSize:20,scaleFactor:.709});break}this.showLoading=!1},handleChange({event:e,file:t,fileList:l}){this.drawImg=URL.createObjectURL(t.file),this.updateResults(),this.fileList=l},handleUpdateChecked(e){this.checked=e,this.updateResults()},async clickConfirm(){if(this.videoPlay=!1,this.inputVideo.pause(),this.canvas.getContext("2d").clearRect(0,0,this.canvas.width,this.canvas.height),this.imgUrl){let e=await this.requestExternalImage(this.imgUrl);this.drawImg=URL.createObjectURL(e),this.updateResults()}},getCurrentFaceDetectionNet(){if(this.facevalue==="ssdMobilenetv1")return h.ssdMobilenetv1;if(this.facevalue==="tinyFaceDetector")return h.tinyFaceDetector},getFaceDetectorOptions(){return this.facevalue==="ssdMobilenetv1"?new _({minConfidence:this.minConfidence}):new v({inputSize:this.inputSize,scoreThreshold:this.scoreThreshold})},async requestExternalImage(e){let t=await fetch(e);try{return await t.blob()}catch{throw new Error("failed to load image from url: "+e)}},async updateResults(){const{canvas:e,inputVideo:t}=this;if(t.paused)return clearTimeout(this.timeout);const l=this.getFaceDetectorOptions(),p=await R(t,l),m=D(e,t,!0),r=M(p,m);r.length&&I(e,r),this.timeout=setTimeout(()=>this.updateResults())}}}),o=e=>(E("data-v-2b8ce47c"),e=e(),O(),e),B={style:{position:"relative"},class:"margin"},P={style:{width:"300px","margin-right":"10px"}},N=o(()=>s("h4",null,"\u89C6\u9891\u8F93\u5165",-1)),x=o(()=>s("label",{for:""},"\u8F93\u5165\u4E00\u4E2A\u89C6\u9891\u94FE\u63A5\uFF1A",-1)),q=c("\u786E\u5B9A"),A=c("\u6216\u8005"),G=o(()=>s("label",{for:""},"\u4ECE\u672C\u5730\u9009\u4E00\u4E2A\u89C6\u9891\uFF1A",-1)),H=c("\u9009\u62E9\u6587\u4EF6"),J=o(()=>s("h4",null,"\u9009\u62E9\u4EBA\u8138\u68C0\u6D4B\u5668",-1)),K=o(()=>s("h4",null,"\u89C6\u9891\u63A7\u5236",-1)),Q={style:{position:"relative"}},W=["src"],X=o(()=>s("canvas",{id:"overlay"},null,-1)),Y=o(()=>s("div",{class:"loader"},"\u52A0\u8F7D\u4E2D...",-1));function Z(e,t,l,p,m,r){const g=a("n-input"),u=a("n-button"),f=a("n-divider"),w=a("n-upload"),b=a("n-select"),y=a("n-space"),C=a("n-modal");return z(),V(L,null,[s("div",B,[i(y,null,{default:n(()=>[s("div",P,[N,x,i(g,{value:e.imgUrl,"onUpdate:value":t[0]||(t[0]=d=>e.imgUrl=d),type:"text",placeholder:"\u89C6\u9891\u94FE\u63A5"},null,8,["value"]),i(u,{onClick:e.clickConfirm},{default:n(()=>[q]),_:1},8,["onClick"]),i(f,{"title-placement":"left"},{default:n(()=>[A]),_:1}),G,i(w,{onChange:e.handleChange,"default-upload":!1,ref:"upload"},{default:n(()=>[i(u,null,{default:n(()=>[H]),_:1})]),_:1},8,["onChange"]),i(f,{"title-placement":"left"}),J,i(b,{value:e.facevalue,"onUpdate:value":t[1]||(t[1]=d=>e.facevalue=d),options:e.faces},null,8,["value","options"]),K,i(u,{onClick:e.play},{default:n(()=>[c(j(e.videoPlay?"\u6682\u505C\u64AD\u653E":"\u5F00\u59CB\u64AD\u653E"),1)]),_:1},8,["onClick"])]),s("div",Q,[s("video",{id:"inputVideo",src:e.drawImg,muted:"",playsinline:""},null,8,W),X])]),_:1})]),i(C,{show:e.showLoading,"onUpdate:show":t[2]||(t[2]=d=>e.showLoading=d)},{default:n(()=>[Y]),_:1},8,["show"])],64)}var ne=T($,[["render",Z],["__scopeId","data-v-2b8ce47c"]]);export{ne as default};
