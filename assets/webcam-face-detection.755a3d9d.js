import{_ as w,v as k,w as y,x as P,y as q,D as H,z as J,A as X,k as x,C as K,E as Q,q as M,G as L,H as S,S as D,I as C,M as b,J as E,K as A,L as Z,N as ee,O as ae,Q as te,R as se,B as ne,c as oe,F as ie,j as ce,U as de,V as re,W as le,X as ue,Y as he,Z as me,P as pe,$ as Fe,a0 as ve,a1 as fe,a2 as ge,a3 as we,u as B,a4 as ke,a5 as _e,a6 as Te,g as Me,a7 as De,a8 as be,a9 as ye,aa as xe,ab as Le,ac as Se,ad as Ce,ae as Ee,e as Ae,af as Be,ag as Ne,o as We,ah as Oe,ai as Ie,aj as Re,ak as Ve,i as je,h as Ue,p as Ye,al as $e,d as ze,f as Ge,am as Pe,an as qe,ao as He,ap as Je,aq as Xe,ar as Ke,as as Qe,at as Ze,au as ea,a as aa,b as ta,av as sa,aw as na,ax as oa,t as ia,n as N,ay as ca,az as da,aA as ra,aB as la,aC as ua,aD as ha,aE as ma,aF as pa,aG as Fa,aH as va,aI as fa,aJ as ga,aK as wa,l as W,aL as ka,s as _a,m as O,aM as I,aN as Ta,aO as Ma,aP as Da,aQ as ba,aR as ya,aS as xa,aT as La,aU as Sa,aV as Ca,aW as Ea,aX as Aa,aY as Ba,aZ as Na,a_ as Wa,T as R,a$ as Oa,b0 as Ia,b1 as Ra,b2 as Va}from"./FaceMatcher.94dbf9cd.js";import{d as V}from"./drawDetections.cb76136a.js";import{d as j}from"./drawFaceExpressions.fbbe264f.js";import{b as ja}from"./bufferToImage.0eb741dc.js";import{f as Ua}from"./fetchImage.eb914c85.js";import{d as _,m as U,a as Ya,r as Y}from"./resizeResults.b26e0a3c.js";import{_ as $a}from"./index.5a24fc79.js";import{d as za,y as Ga,r as p,x as Pa,E as c,f as s,w as n,F as qa,o as Ha,G as Ja,H as Xa,I as h}from"./vendor.43a23b66.js";function Ka(e){for(var a=e.slice(),t=a.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),l=a[t];a[t]=a[i],a[i]=l}return a}function Qa(e){return w(this,void 0,void 0,function(){var a;return k(this,function(t){switch(t.label){case 0:return a=Float32Array.bind,[4,y(e)];case 1:return[4,t.sent().arrayBuffer()];case 2:return[2,new(a.apply(Float32Array,[void 0,t.sent()]))]}})})}var Za=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",drawContour:P,drawDetections:V,drawFaceExpressions:j,DrawBoxOptions:q,DrawBox:H,DrawFaceLandmarksOptions:J,DrawFaceLandmarks:X,drawFaceLandmarks:x,get AnchorPosition(){return K},DrawTextFieldOptions:Q,DrawTextField:M});function et(e){var a=new L;return a.extractWeights(e),a}function at(e,a){a===void 0&&(a=!0);var t=new S(a);return t.extractWeights(e),t}function $(e,a){return w(this,void 0,void 0,function(){return k(this,function(t){switch(t.label){case 0:return console.warn("allFacesSsdMobilenetv1 is deprecated and will be removed soon, use the high level api instead"),[4,_(e,new D(a?{minConfidence:a}:{})).withFaceLandmarks().withFaceDescriptors()];case 1:return[2,t.sent()]}})})}function tt(e,a){return a===void 0&&(a={}),w(this,void 0,void 0,function(){return k(this,function(t){switch(t.label){case 0:return console.warn("allFacesTinyYolov2 is deprecated and will be removed soon, use the high level api instead"),[4,_(e,new C(a)).withFaceLandmarks().withFaceDescriptors()];case 1:return[2,t.sent()]}})})}function st(e,a){return a===void 0&&(a={}),w(this,void 0,void 0,function(){return k(this,function(t){switch(t.label){case 0:return console.warn("allFacesMtcnn is deprecated and will be removed soon, use the high level api instead"),[4,_(e,new b(a)).withFaceLandmarks().withFaceDescriptors()];case 1:return[2,t.sent()]}})})}var nt=$;function ot(e){var a=new E;return a.extractWeights(e),a}function it(e){var a=new A;return a.extractWeights(e),a}var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",draw:Za,utils:Z,tf:ee,AgeGenderNet:ae,get Gender(){return te},BoundingBox:se,Box:ne,Dimensions:oe,FaceDetection:ie,FaceLandmarks:ce,FaceLandmarks5:de,FaceLandmarks68:re,FaceMatch:le,LabeledBox:ue,LabeledFaceDescriptors:he,ObjectDetection:me,Point:pe,PredictedBox:Fe,Rect:ve,awaitMediaLoaded:fe,bufferToImage:ja,createCanvas:ge,createCanvasFromMedia:we,extractFaces:B,extractFaceTensors:ke,fetchImage:Ua,fetchJson:_e,fetchNetWeights:Qa,fetchOrThrow:y,getContext2dOrThrow:Te,getMediaDimensions:Me,imageTensorToCanvas:De,imageToSquare:be,isMediaElement:ye,isMediaLoaded:xe,loadWeightMap:Le,matchDimensions:U,NetInput:Se,resolveInput:Ce,toNetInput:Ee,env:Ae,FaceExpressionNet:Be,FACE_EXPRESSION_LABELS:Ne,FaceExpressions:We,FaceLandmark68Net:Oe,FaceLandmark68TinyNet:Ie,FaceLandmarkNet:Re,FaceRecognitionNet:L,createFaceRecognitionNet:et,extendWithFaceDescriptor:Ve,isWithFaceDetection:je,extendWithFaceDetection:Ue,isWithFaceExpressions:Ye,extendWithFaceExpressions:$e,isWithFaceLandmarks:ze,extendWithFaceLandmarks:Ge,isWithAge:Pe,extendWithAge:qe,isWithGender:He,extendWithGender:Je,allFacesSsdMobilenetv1:$,allFacesTinyYolov2:tt,allFacesMtcnn:st,allFaces:nt,ComposableTask:Xe,ComputeFaceDescriptorsTaskBase:Ke,ComputeAllFaceDescriptorsTask:Qe,ComputeSingleFaceDescriptorTask:Ze,detectSingleFace:Ya,detectAllFaces:_,DetectFacesTaskBase:ea,DetectAllFacesTask:aa,DetectSingleFaceTask:ta,DetectFaceLandmarksTaskBase:sa,DetectAllFaceLandmarksTask:na,DetectSingleFaceLandmarksTask:oa,FaceMatcher:ia,nets:N,ssdMobilenetv1:ca,tinyFaceDetector:da,tinyYolov2:ra,mtcnn:la,detectFaceLandmarks:ua,detectFaceLandmarksTiny:ha,computeFaceDescriptor:ma,recognizeFaceExpressions:pa,predictAgeAndGender:Fa,loadSsdMobilenetv1Model:va,loadTinyFaceDetectorModel:fa,loadMtcnnModel:ga,loadTinyYolov2Model:wa,loadFaceLandmarkModel:W,loadFaceLandmarkTinyModel:ka,loadFaceRecognitionModel:_a,loadFaceExpressionModel:O,loadAgeGenderModel:I,loadFaceDetectionModel:Ta,locateFaces:Ma,detectLandmarks:Da,Mtcnn:E,MtcnnOptions:b,createMtcnn:ot,iou:ba,minBbox:ya,nonMaxSuppression:xa,normalize:La,padToSquare:Sa,shuffleArray:Ka,sigmoid:Ca,inverseSigmoid:Ea,SsdMobilenetv1:Aa,SsdMobilenetv1Options:D,createSsdMobilenetv1:Ba,createFaceDetectionNet:Na,FaceDetectionNet:Wa,TinyFaceDetector:A,TinyFaceDetectorOptions:R,createTinyFaceDetector:it,get TinyYolov2SizeType(){return Oa},TinyYolov2Options:C,validateConfig:Ia,TinyYolov2:S,createTinyYolov2:at,euclideanDistance:Ra,NeuralNetwork:Va,resizeResults:Y});const ct=za({name:"webcam-face-detection",data(){return{detection:"landmark",showModal:!0,facesContainer:null,showLoading:!1,facevalue:"ssdMobilenetv1",faces:[{label:"SSD Mobilenet V1",value:"ssdMobilenetv1"},{label:"Tiny Face Detector",value:"tinyFaceDetector"}],options:null,inputVideo:null,canvas:null,timeout:null,constraints:{audio:!1,video:{width:{min:320,ideal:1280,max:1920},height:{min:240,ideal:720,max:1080},frameRate:{min:15,ideal:30,max:60},facingMode:"environment"}},download:!1,withBox:!1,detectFace:"detectAllFaces"}},watch:{detection(e){this.inputVideo.pause(),setTimeout(()=>{this.inputVideo.play(),setTimeout(()=>this.updateResults(),100)},100)},facevalue(e){this.fnInit(),this.updateResults()},detectFace(e){this.updateResults()},"constraints.video.facingMode":{handler(e){this.updateResults()}}},mounted(){this.$nextTick(()=>{this.fnInit()}),this.$message=Ga(),this.inputVideo=document.getElementById("myVideo"),this.canvas=document.getElementById("overlay"),this.facesContainer=document.getElementById("facesContainer")},methods:{async fnInit(){switch(this.showLoading=!0,await N[this.facevalue].loadFromUri("/models"),await W("/models"),await O("/models"),await I("/models"),this.facevalue){case"ssdMobilenetv1":this.options=new D({minConfidence:.5});break;case"tinyFaceDetector":this.options=new R({inputSize:512,scoreThreshold:.5});break;case"mtcnn":this.options=new b({minFaceSize:20,scaleFactor:.709});break}this.showLoading=!1},handleUpdateChecked(e){this.download=e},handleChecked(e){this.withBox=e},displayExtractedFaces(e){const{canvas:a,inputVideo:t,facesContainer:i}=this;i.children.length>50&&(i.innerHTML=""),e.forEach(l=>{if(l.style.margin="10px",i.append(l),this.download){var g=l.toDataURL("image/png"),o=document.createElement("a"),u=new MouseEvent("click");o.download=new Date().getTime()||"\u4E0B\u8F7D\u56FE\u7247\u540D\u79F0",o.href=g,o.dispatchEvent(u)}})},fnOpen(){typeof window.stream!="object"&&(clearTimeout(this.timeout),this.timeout=setTimeout(()=>{clearTimeout(this.timeout),navigator.mediaDevices.getUserMedia(this.constraints).then(e=>{window.stream=e,this.inputVideo.srcObject=e,this.inputVideo.play()}).catch(()=>{this.$message.error("\u89C6\u9891\u5A92\u4F53\u6D41\u83B7\u53D6\u9519\u8BEF\uFF01")})},100))},fnClose(){this.canvas.getContext("2d").clearRect(0,0,this.canvas.width,this.canvas.height),this.inputVideo.pause(),clearTimeout(this.timeout),typeof window.stream=="object"&&(window.stream.getTracks().forEach(e=>e.stop()),window.stream="",this.inputVideo.srcObject=null)},async updateResults(){const{canvas:e,inputVideo:a}=this;if(a.paused)return clearTimeout(this.timeout);let t=null;switch(this.detection){case"landmark":t=await f[this.detectFace](a,this.options).withFaceLandmarks();break;case"expression":t=await f[this.detectFace](a,this.options).withFaceLandmarks().withFaceExpressions();break;case"age_gender":t=await f[this.detectFace](a,this.options).withFaceLandmarks().withAgeAndGender();break;default:t=await f[this.detectFace](a,this.options);break}let i=await f[this.detectFace](a,this.options);i=i instanceof Array?i:[i];const l=await B(a,i);if(l.length&&this.displayExtractedFaces(l),t&&!a.paused){const g=U(e,a,!0),o=Y(t,g);if(!this.withBox&&V(e,o),x(e,o),this.detection==="expression")j(e,o,.05);else if(this.detection==="age_gender")if(Array.isArray(o))o.forEach(u=>{const{age:F,gender:d,genderProbability:v}=u;new M([`${Math.round(F,0)} years`,`${d} (${Math.round(v)})`],u.detection.box.bottomLeft).draw(e)});else{const{age:u,gender:F,genderProbability:d}=o;new M([`${Math.round(u,0)} years`,`${F} (${Math.round(d)})`],o.detection.box.bottomLeft).draw(e)}}else e.getContext("2d").clearRect(0,0,e.width,e.height);this.timeout=setTimeout(()=>this.updateResults())}},beforeUnmount(){this.fnClose()}}),m=e=>(Ja("data-v-396892dc"),e=e(),Xa(),e),dt={style:{position:"relative"},class:"margin"},rt={style:{width:"300px","margin-right":"10px"}},lt=m(()=>c("h4",null,"\u89C6\u9891\u8F93\u5165",-1)),ut=h("\u542F\u52A8\u6444\u50CF\u5934"),ht=h("\u7ED3\u675F\u6444\u50CF\u5934"),mt=m(()=>c("h4",null,"\u5207\u6362\u6444\u50CF\u5934",-1)),pt=h("\u524D\u7F6E\u6444\u50CF\u5934"),Ft=h("\u540E\u7F6E\u6444\u50CF\u5934"),vt=m(()=>c("h4",null,"\u68C0\u6D4B\u8BC6\u522B\u7C7B\u578B",-1)),ft=h("\u8F6E\u5ED3\u68C0\u6D4B"),gt=h("\u8868\u60C5\u68C0\u6D4B"),wt=h("\u5E74\u9F84\u6027\u522B\u68C0\u6D4B"),kt=m(()=>c("h4",null,"\u9009\u62E9\u4EBA\u8138\u68C0\u6D4B\u5668",-1)),_t=m(()=>c("h4",null,"\u89C6\u9891\u63A7\u5236",-1)),Tt=h("\u5355\u4EBA\u68C0\u6D4B"),Mt=h("\u591A\u4EBA\u68C0\u6D4B"),Dt=m(()=>c("h4",null,"\u4E0B\u8F7D\u63A7\u5236",-1)),bt={style:{position:"relative"}},yt=m(()=>c("canvas",{id:"overlay"},null,-1)),xt=m(()=>c("div",{id:"facesContainer"},null,-1)),Lt=m(()=>c("div",{class:"loader"},"\u52A0\u8F7D\u4E2D...",-1));function St(e,a,t,i,l,g){const o=p("n-button"),u=p("n-checkbox"),F=p("n-divider"),d=p("n-radio"),v=p("n-space"),T=p("n-radio-group"),z=p("n-select"),G=p("n-modal");return Ha(),Pa(qa,null,[c("div",dt,[s(v,null,{default:n(()=>[c("div",rt,[lt,s(o,{onClick:e.fnOpen},{default:n(()=>[ut]),_:1},8,["onClick"]),s(o,{style:{"margin-left":"10px"},onClick:e.fnClose},{default:n(()=>[ht]),_:1},8,["onClick"]),s(u,{style:{"margin-top":"10px"},"onUpdate:checked":e.handleChecked,label:"\u9690\u85CF\u8FB9\u754C\u6846"},null,8,["onUpdate:checked"]),s(F,{"title-placement":"left"}),mt,s(T,{value:e.constraints.video.facingMode,"onUpdate:value":a[0]||(a[0]=r=>e.constraints.video.facingMode=r),name:"radiogroup"},{default:n(()=>[s(v,null,{default:n(()=>[s(d,{value:"user"},{default:n(()=>[pt]),_:1}),s(d,{value:"environment"},{default:n(()=>[Ft]),_:1})]),_:1})]),_:1},8,["value"]),s(F,{"title-placement":"left"}),vt,s(T,{value:e.detection,"onUpdate:value":a[1]||(a[1]=r=>e.detection=r),name:"radiogroup"},{default:n(()=>[s(v,null,{default:n(()=>[s(d,{value:"landmark"},{default:n(()=>[ft]),_:1}),s(d,{value:"expression"},{default:n(()=>[gt]),_:1}),s(d,{value:"age_gender"},{default:n(()=>[wt]),_:1})]),_:1})]),_:1},8,["value"]),s(F,{"title-placement":"left"}),kt,s(z,{value:e.facevalue,"onUpdate:value":a[2]||(a[2]=r=>e.facevalue=r),options:e.faces},null,8,["value","options"]),_t,s(T,{value:e.detectFace,"onUpdate:value":a[3]||(a[3]=r=>e.detectFace=r),name:"radiogroup2"},{default:n(()=>[s(v,null,{default:n(()=>[s(d,{value:"detectSingleFace"},{default:n(()=>[Tt]),_:1}),s(d,{value:"detectAllFaces"},{default:n(()=>[Mt]),_:1})]),_:1})]),_:1},8,["value"]),Dt,s(u,{style:{"margin-top":"10px"},"onUpdate:checked":e.handleUpdateChecked,label:"\u542F\u7528\u4E0B\u8F7D"},null,8,["onUpdate:checked"])]),c("div",bt,[c("video",{id:"myVideo",poster:"https://dummyimage.com/1280x720",muted:"",loop:"",playsinline:"",onLoadedmetadata:a[4]||(a[4]=(...r)=>e.updateResults&&e.updateResults(...r))},null,32),yt,xt])]),_:1})]),s(G,{show:e.showLoading,"onUpdate:show":a[5]||(a[5]=r=>e.showLoading=r)},{default:n(()=>[Lt]),_:1},8,["show"])],64)}var Rt=$a(ct,[["render",St],["__scopeId","data-v-396892dc"]]);export{Rt as default};
