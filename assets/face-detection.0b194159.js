import{n as h,M as y,T as b,S as g}from"./FaceMatcher.94dbf9cd.js";import{d as j}from"./drawDetections.cb76136a.js";import{b as F}from"./bufferToImage.0eb741dc.js";import{d as C,m as D,r as M}from"./resizeResults.b26e0a3c.js";import{_ as S}from"./index.ef1038d8.js";import{d as U,y as k,r as i,x as L,E as s,f as a,w as l,F as T,o as R,G as E,H as $,I as r}from"./vendor.43a23b66.js";const z=U({name:"face-detection",data(){return{showModal:!0,showLoading:!1,minConfidence:.5,scoreThreshold:.5,inputSize:512,imgUrl:"",fileList:[],selectvalue:"bbt1.jpg",facevalue:"ssdMobilenetv1",drawImg:"images/bbt1.jpg",defaultImgs:[{label:"bbt1.jpg",value:"bbt1.jpg"},{label:"bbt2.jpg",value:"bbt2.jpg"},{label:"bbt3.jpg",value:"bbt3.jpg"},{label:"bbt4.jpg",value:"bbt4.jpg"},{label:"bbt5.jpg",value:"bbt5.jpg"}],faces:[{label:"SSD Mobilenet V1",value:"ssdMobilenetv1"},{label:"Tiny Face Detector",value:"tinyFaceDetector"}],options:null}},watch:{selectvalue(e){this.drawImg=`images/${e}`,this.updateResults()},facevalue(e){this.fnInit(),this.updateResults()}},mounted(){this.$nextTick(()=>{this.fnInit().then(()=>this.updateResults())}),this.$message=k()},methods:{async fnInit(){switch(this.showLoading=!0,await h[this.facevalue].loadFromUri("models"),this.facevalue){case"ssdMobilenetv1":this.options=new g({minConfidence:.5});break;case"tinyFaceDetector":this.options=new b({inputSize:512,scoreThreshold:.5});break;case"mtcnn":this.options=new y({minFaceSize:20,scaleFactor:.709});break}this.showLoading=!1},handleChange({event:e,file:t,fileList:o}){this.drawImg=URL.createObjectURL(t.file),this.updateResults(),this.fileList=o},handleUpdateChecked(){},async clickConfirm(){if(this.imgUrl){let e=await this.requestExternalImage(this.imgUrl);this.drawImg=e.src,this.updateResults()}},getCurrentFaceDetectionNet(){if(this.facevalue==="ssdMobilenetv1")return h.ssdMobilenetv1;if(this.facevalue==="tinyFaceDetector")return h.tinyFaceDetector},isFaceDetectionModelLoaded(){return!!this.getCurrentFaceDetectionNet().params},getFaceDetectorOptions(){return this.facevalue==="ssdMobilenetv1"?new g({minConfidence:this.minConfidence}):new b({inputSize:this.inputSize,scoreThreshold:this.scoreThreshold})},async requestExternalImage(e){let t=await fetch(e);try{let o=await t.blob();return await F(o)}catch{throw new Error("failed to load image from url: "+e)}},async updateResults(){if(!this.isFaceDetectionModelLoaded())return;const e=document.getElementById("inputImg"),t=this.getFaceDetectorOptions(),o=await C(e,t),c=document.getElementById("overlay");c.width=e.width,c.height=e.height,D(c,e);let u=M(o,e);u.length?j(c,u):this.$message.error("\u8FD9\u53EF\u80FD\u4E0D\u662F\u4E2A\u4EBA\uFF01")}}}),d=e=>(E("data-v-3d478f7c"),e=e(),$(),e),O={style:{position:"relative"},class:"margin"},B={style:{width:"300px","margin-right":"10px"}},N=d(()=>s("h4",null,"\u56FE\u7247\u8F93\u5165",-1)),V=d(()=>s("label",{for:""},"\u9009\u62E9\u4E00\u4E2A\u7167\u7247\u5427\uFF1A",-1)),q=r("\u6216\u8005"),x=d(()=>s("label",{for:""},"\u8F93\u5165\u4E00\u4E2A\u56FE\u7247\u94FE\u63A5\uFF1A",-1)),A=r("\u786E\u5B9A"),G=r("\u6216\u8005"),H=d(()=>s("label",{for:""},"\u4ECE\u672C\u5730\u9009\u4E00\u5F20\u56FE\u7247\uFF1A",-1)),J=r("\u9009\u62E9\u6587\u4EF6"),K=d(()=>s("h4",null,"\u9009\u62E9\u4EBA\u8138\u68C0\u6D4B\u5668",-1)),P={style:{position:"relative"}},Q=["src"],W=d(()=>s("canvas",{id:"overlay"},null,-1)),X=d(()=>s("div",{class:"loader"}," \u52A0\u8F7D\u4E2D... ",-1));function Y(e,t,o,c,u,Z){const m=i("n-select"),p=i("n-divider"),v=i("n-input"),f=i("n-button"),_=i("n-upload"),w=i("n-space"),I=i("n-modal");return R(),L(T,null,[s("div",O,[a(w,null,{default:l(()=>[s("div",B,[N,V,a(m,{value:e.selectvalue,"onUpdate:value":t[0]||(t[0]=n=>e.selectvalue=n),options:e.defaultImgs},null,8,["value","options"]),a(p,{"title-placement":"left"},{default:l(()=>[q]),_:1}),x,a(v,{value:e.imgUrl,"onUpdate:value":t[1]||(t[1]=n=>e.imgUrl=n),type:"text",placeholder:"\u56FE\u7247\u94FE\u63A5"},null,8,["value"]),a(f,{onClick:e.clickConfirm},{default:l(()=>[A]),_:1},8,["onClick"]),a(p,{"title-placement":"left"},{default:l(()=>[G]),_:1}),H,a(_,{onChange:e.handleChange,"default-upload":!1,ref:"upload"},{default:l(()=>[a(f,null,{default:l(()=>[J]),_:1})]),_:1},8,["onChange"]),a(p,{"title-placement":"left"}),K,a(m,{value:e.facevalue,"onUpdate:value":t[2]||(t[2]=n=>e.facevalue=n),options:e.faces},null,8,["value","options"])]),s("div",P,[s("img",{id:"inputImg",style:{width:"100%",border:"0"},src:e.drawImg},null,8,Q),W])]),_:1})]),a(I,{show:e.showLoading,"onUpdate:show":t[3]||(t[3]=n=>e.showLoading=n)},{default:l(()=>[X]),_:1},8,["show"])],64)}var ie=S(z,[["render",Y],["__scopeId","data-v-3d478f7c"]]);export{ie as default};