import{n as h,l as y,M as F,T as b,S as g,k as C}from"./FaceMatcher.94dbf9cd.js";import{d as j}from"./drawDetections.cb76136a.js";import{b as D}from"./bufferToImage.0eb741dc.js";import{d as L,m as M,r as U}from"./resizeResults.b26e0a3c.js";import{_ as R}from"./index.5931beb0.js";import{d as S,y as T,r as n,x as E,E as a,f as s,w as l,F as $,o as z,G as O,H as B,I as r}from"./vendor.43a23b66.js";const N=S({name:"face-landmark-detection",data(){return{showModal:!0,showLoading:!1,checked:!1,minConfidence:.5,scoreThreshold:.5,inputSize:512,imgUrl:"",fileList:[],selectvalue:"bbt1.jpg",facevalue:"ssdMobilenetv1",drawImg:"/images/bbt1.jpg",defaultImgs:[{label:"bbt1.jpg",value:"bbt1.jpg"},{label:"bbt2.jpg",value:"bbt2.jpg"},{label:"bbt3.jpg",value:"bbt3.jpg"},{label:"bbt4.jpg",value:"bbt4.jpg"},{label:"bbt5.jpg",value:"bbt5.jpg"}],faces:[{label:"SSD Mobilenet V1",value:"ssdMobilenetv1"},{label:"Tiny Face Detector",value:"tinyFaceDetector"}],options:null,inputImgEl:null,canvas:null}},watch:{selectvalue(e){this.drawImg=`/images/${e}`,setTimeout(()=>{this.updateResults()},0)},facevalue(e){this.fnInit(),this.updateResults()}},mounted(){this.$nextTick(()=>{this.fnInit().then(()=>this.updateResults())}),this.$message=T(),this.inputImgEl=document.getElementById("inputImg"),this.canvas=document.getElementById("overlay")},methods:{async fnInit(){switch(this.showLoading=!0,await h[this.facevalue].loadFromUri("/models"),await y("/models"),this.facevalue){case"ssdMobilenetv1":this.options=new g({minConfidence:.5});break;case"tinyFaceDetector":this.options=new b({inputSize:512,scoreThreshold:.5});break;case"mtcnn":this.options=new F({minFaceSize:20,scaleFactor:.709});break}this.showLoading=!1},handleChange({event:e,file:t,fileList:o}){this.drawImg=URL.createObjectURL(t.file),this.updateResults(),this.fileList=o},handleUpdateChecked(e){this.checked=e,this.updateResults()},async clickConfirm(){if(this.imgUrl){let e=await this.requestExternalImage(this.imgUrl);this.drawImg=e.src,this.updateResults()}},getCurrentFaceDetectionNet(){if(this.facevalue==="ssdMobilenetv1")return h.ssdMobilenetv1;if(this.facevalue==="tinyFaceDetector")return h.tinyFaceDetector},isFaceDetectionModelLoaded(){return!!this.getCurrentFaceDetectionNet().params},getFaceDetectorOptions(){return this.facevalue==="ssdMobilenetv1"?new g({minConfidence:this.minConfidence}):new b({inputSize:this.inputSize,scoreThreshold:this.scoreThreshold})},async requestExternalImage(e){let t=await fetch(e);try{let o=await t.blob();return await D(o)}catch{throw new Error("failed to load image from url: "+e)}},async updateResults(){if(!this.isFaceDetectionModelLoaded())return;const{canvas:e,inputImgEl:t}=this;e.getContext("2d").clearRect(0,0,e.width,e.height);const o=this.getFaceDetectorOptions(),p=await L(t,o).withFaceLandmarks();e.width=t.width,e.height=t.height,M(e,t);let c=U(p,t);c.length?(this.checked||j(e,c),C(e,c)):this.$message.error("\u8FD9\u53EF\u80FD\u4E0D\u662F\u4E2A\u4EBA\uFF01")}}}),d=e=>(O("data-v-67f95f0d"),e=e(),B(),e),x={style:{position:"relative"},class:"margin"},V={style:{width:"300px","margin-right":"10px"}},q=d(()=>a("h4",null,"\u56FE\u7247\u8F93\u5165",-1)),A=d(()=>a("label",{for:""},"\u9009\u62E9\u4E00\u4E2A\u7167\u7247\u5427\uFF1A",-1)),G=r("\u6216\u8005"),H=d(()=>a("label",{for:""},"\u8F93\u5165\u4E00\u4E2A\u56FE\u7247\u94FE\u63A5\uFF1A",-1)),J=r("\u786E\u5B9A"),K=r("\u6216\u8005"),P=d(()=>a("label",{for:""},"\u4ECE\u672C\u5730\u9009\u4E00\u5F20\u56FE\u7247\uFF1A",-1)),Q=r("\u9009\u62E9\u6587\u4EF6"),W=d(()=>a("h4",null,"\u9009\u62E9\u4EBA\u8138\u68C0\u6D4B\u5668",-1)),X={style:{position:"relative"}},Y=["src"],Z=d(()=>a("canvas",{id:"overlay"},null,-1)),ee=d(()=>a("div",{class:"loader"},"\u52A0\u8F7D\u4E2D...",-1));function te(e,t,o,p,c,se){const m=n("n-select"),u=n("n-divider"),v=n("n-input"),f=n("n-button"),_=n("n-upload"),w=n("n-checkbox"),k=n("n-space"),I=n("n-modal");return z(),E($,null,[a("div",x,[s(k,null,{default:l(()=>[a("div",V,[q,A,s(m,{value:e.selectvalue,"onUpdate:value":t[0]||(t[0]=i=>e.selectvalue=i),options:e.defaultImgs},null,8,["value","options"]),s(u,{"title-placement":"left"},{default:l(()=>[G]),_:1}),H,s(v,{value:e.imgUrl,"onUpdate:value":t[1]||(t[1]=i=>e.imgUrl=i),type:"text",placeholder:"\u56FE\u7247\u94FE\u63A5"},null,8,["value"]),s(f,{onClick:e.clickConfirm},{default:l(()=>[J]),_:1},8,["onClick"]),s(u,{"title-placement":"left"},{default:l(()=>[K]),_:1}),P,s(_,{onChange:e.handleChange,"default-upload":!1,ref:"upload"},{default:l(()=>[s(f,null,{default:l(()=>[Q]),_:1})]),_:1},8,["onChange"]),s(u,{"title-placement":"left"}),W,s(m,{value:e.facevalue,"onUpdate:value":t[2]||(t[2]=i=>e.facevalue=i),options:e.faces},null,8,["value","options"]),s(w,{style:{"margin-top":"10px"},"onUpdate:checked":e.handleUpdateChecked,label:"\u9690\u85CF\u8FB9\u754C\u6846"},null,8,["onUpdate:checked"])]),a("div",X,[a("img",{id:"inputImg",style:{width:"100%",border:"0"},src:e.drawImg},null,8,Y),Z])]),_:1})]),s(I,{show:e.showLoading,"onUpdate:show":t[3]||(t[3]=i=>e.showLoading=i)},{default:l(()=>[ee]),_:1},8,["show"])],64)}var ce=R(N,[["render",te],["__scopeId","data-v-67f95f0d"]]);export{ce as default};
