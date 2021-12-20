import{s as _,aE as b,r as v,b1 as I}from"./FaceMatcher.94dbf9cd.js";import{b as w}from"./bufferToImage.0eb741dc.js";import{f as C}from"./fetchImage.eb914c85.js";import{_ as y}from"./index.5931beb0.js";import{d as j,y as $,r,x as S,E as s,f as l,w as o,F as U,o as E,J as L,G as k,H as F,I as i}from"./vendor.43a23b66.js";const R=j({name:"bbt-face-similarity",data(){return{showModal:!0,showLoading:!1,minConfidence:.5,scoreThreshold:.5,inputSize:512,imgUrl1:"",imgUrl2:"",fileList1:[],fileList2:[],selectvalue1:"bbt1.jpg",selectvalue2:"bbt1.jpg",facevalue:"ssdMobilenetv1",drawImg1:"/images/bbt1.jpg",drawImg2:"/images/bbt1.jpg",defaultImgs:[{label:"bbt1.jpg",value:"bbt1.jpg"},{label:"bbt2.jpg",value:"bbt2.jpg"},{label:"bbt3.jpg",value:"bbt3.jpg"},{label:"bbt4.jpg",value:"bbt4.jpg"},{label:"bbt5.jpg",value:"bbt5.jpg"}],inputImgEl1:null,inputImgEl2:null,descriptors:{desc1:null,desc2:null},result:"-"}},watch:{selectvalue1(e){this.drawImg1=`/images/${e}`,setTimeout(()=>{this.onSelectionChanged(1)},0)},selectvalue2(e){this.drawImg2=`/images/${e}`,setTimeout(()=>{this.onSelectionChanged(2)},0)},facevalue(e){this.fnInit()}},created(){},async mounted(){this.$message=$(),this.inputImgEl1=document.getElementById("inputImg1"),this.inputImgEl2=document.getElementById("inputImg2"),this.showLoading=!0,await _("/models"),this.showLoading=!1,this.onSelectionChanged(1),this.onSelectionChanged(2)},methods:{handleChange1({event:e,file:t,fileList:d}){this.drawImg1=URL.createObjectURL(t.file),this.onSelectionChanged(1),this.fileList1=d},handleChange2({event:e,file:t,fileList:d}){this.drawImg2=URL.createObjectURL(t.file),this.onSelectionChanged(2),this.fileList2=d},async clickConfirm(e=1){if(this[`imgUrl${e}`]){let t=await this.requestExternalImage(this[`imgUrl${e}`]);this[`drawImg${e}`]=t.src,e==1?this.onSelectionChanged(1):this.onSelectionChanged(2)}},async onSelectionChanged(e){const t=await C(this[`drawImg${e}`]);this[`inputImgEl${e}`].src=t.src,this.descriptors[`desc${e}`]=await b(t),this.descriptors.desc1&&this.descriptors.desc2&&this.updateResults()},async requestExternalImage(e){let t=await fetch(e);try{let d=await t.blob();return await w(d)}catch{throw new Error("failed to load image from url: "+e)}},async updateResults(){let e=v(I(this.descriptors.desc1,this.descriptors.desc2));this.result=e>.6?`\u4E0D\u5339\u914D(${e})`:`\u76F8\u4F3C\u5EA6(${(1-e)*100}%)`}}}),n=e=>(k("data-v-581dc16e"),e=e(),F(),e),T={style:{position:"relative"},class:"margin"},B={style:{width:"300px","margin-right":"10px"}},M=n(()=>s("h4",null,"\u539F\u59CB\u56FE\u7247\u8F93\u5165",-1)),D=n(()=>s("label",{for:""},"\u9009\u62E9\u4E00\u4E2A\u7167\u7247\u5427\uFF1A",-1)),N=i("\u6216\u8005"),V=n(()=>s("label",{for:""},"\u8F93\u5165\u4E00\u4E2A\u56FE\u7247\u94FE\u63A5\uFF1A",-1)),q=i("\u786E\u5B9A"),O=i("\u6216\u8005"),x=n(()=>s("label",{for:""},"\u4ECE\u672C\u5730\u9009\u4E00\u5F20\u56FE\u7247\uFF1A",-1)),z=i("\u9009\u62E9\u6587\u4EF6"),G={style:{width:"300px","margin-right":"10px"}},H=n(()=>s("h4",null,"\u5BF9\u6BD4\u56FE\u7247\u8F93\u5165",-1)),J=n(()=>s("label",{for:""},"\u9009\u62E9\u4E00\u4E2A\u7167\u7247\u5427\uFF1A",-1)),A=i("\u6216\u8005"),K=n(()=>s("label",{for:""},"\u8F93\u5165\u4E00\u4E2A\u56FE\u7247\u94FE\u63A5\uFF1A",-1)),P=i("\u786E\u5B9A"),Q=i("\u6216\u8005"),W=n(()=>s("label",{for:""},"\u4ECE\u672C\u5730\u9009\u4E00\u5F20\u56FE\u7247\uFF1A",-1)),X=i("\u9009\u62E9\u6587\u4EF6"),Y={style:{display:"flex"}},Z={style:{position:"relative","margin-right":"20px"}},ee=["src"],te={style:{position:"relative"}},se=["src"],le=n(()=>s("div",{class:"loader"},"\u52A0\u8F7D\u4E2D...",-1));function oe(e,t,d,ae,ne,ie){const p=r("n-select"),u=r("n-divider"),m=r("n-input"),c=r("n-button"),h=r("n-upload"),g=r("n-space"),f=r("n-modal");return E(),S(U,null,[s("div",T,[l(g,null,{default:o(()=>[s("div",B,[M,D,l(p,{value:e.selectvalue1,"onUpdate:value":t[0]||(t[0]=a=>e.selectvalue1=a),options:e.defaultImgs},null,8,["value","options"]),l(u,{"title-placement":"left"},{default:o(()=>[N]),_:1}),V,l(m,{value:e.imgUrl1,"onUpdate:value":t[1]||(t[1]=a=>e.imgUrl1=a),type:"text",placeholder:"\u56FE\u7247\u94FE\u63A5"},null,8,["value"]),l(c,{onClick:t[2]||(t[2]=a=>e.clickConfirm(1))},{default:o(()=>[q]),_:1}),l(u,{"title-placement":"left"},{default:o(()=>[O]),_:1}),x,l(h,{onChange:e.handleChange1,"default-upload":!1,ref:"upload1"},{default:o(()=>[l(c,null,{default:o(()=>[z]),_:1})]),_:1},8,["onChange"])]),s("div",G,[H,J,l(p,{value:e.selectvalue2,"onUpdate:value":t[3]||(t[3]=a=>e.selectvalue2=a),options:e.defaultImgs},null,8,["value","options"]),l(u,{"title-placement":"left"},{default:o(()=>[A]),_:1}),K,l(m,{value:e.imgUrl2,"onUpdate:value":t[4]||(t[4]=a=>e.imgUrl2=a),type:"text",placeholder:"\u56FE\u7247\u94FE\u63A5"},null,8,["value"]),l(c,{onClick:t[5]||(t[5]=a=>e.clickConfirm(2))},{default:o(()=>[P]),_:1}),l(u,{"title-placement":"left"},{default:o(()=>[Q]),_:1}),W,l(h,{onChange:e.handleChange2,"default-upload":!1,ref:"upload2"},{default:o(()=>[l(c,null,{default:o(()=>[X]),_:1})]),_:1},8,["onChange"]),l(u,{"title-placement":"left"}),s("h4",null,"\u5339\u914D\u7ED3\u679C\uFF1A"+L(e.result),1)]),s("div",Y,[s("div",Z,[s("img",{id:"inputImg1",style:{"max-width":"100%",border:"0"},src:e.drawImg1},null,8,ee)]),s("div",te,[s("img",{id:"inputImg2",style:{"max-width":"100%",border:"0"},src:e.drawImg2},null,8,se)])])]),_:1})]),l(f,{show:e.showLoading,"onUpdate:show":t[6]||(t[6]=a=>e.showLoading=a)},{default:o(()=>[le]),_:1},8,["show"])],64)}var me=y(R,[["render",oe],["__scopeId","data-v-581dc16e"]]);export{me as default};
