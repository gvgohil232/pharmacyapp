(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1812:function(e,t,o){Promise.resolve().then(o.bind(o,3358))},7289:function(e,t,o){"use strict";o.d(t,{Ao:function(){return c},tO:function(){return h},I0:function(){return m},v9:function(){return v},is:function(){return d}});var r=o(64),i=o(3198);let s=r.hg.withTypes(),l=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=await fetch("http://localhost:3000/api/identity-count",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:e})}),o=await t.json();return o},n=s("counter/fetchIdentityCount",async e=>{let t=await l(e);return t.data}),a=(0,r.oM)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},incrementByAmount:(e,t)=>{e.value+=t.payload}},extraReducers:e=>{e.addCase(n.pending,e=>{e.status="loading"}).addCase(n.fulfilled,(e,t)=>{e.status="idle",e.value+=t.payload})}}),d=(0,r.oM)({name:"wishlist",initialState:{value:[],status:"idle"},reducers:{addtowishlist:(e,t)=>{e={...e,value:[...e.value,null==t?void 0:t.payload]}},removefromwishlist:(e,t)=>{e={...e,value:[...e.value.filter(e=>e!==(null==t?void 0:t.payload))]}}}}),c=(0,r.oM)({name:"cart",initialState:{value:[],status:"idle"},reducers:{addtocart:(e,t)=>{e={...e,value:[...e.value,t.payload]}},decrementfromcart:(e,t)=>{e={...e,value:[...e.value.filter(e=>e!==(null==t?void 0:t.payload))]}}}}),u={counter:a.reducer,wishlist:d.reducer,cart:c.reducer};var x=o(3944);let p=[(0,x.createLogger)({duration:!0,timestamp:!1,collapsed:!0,colors:{title:()=>"#139BFE",prevState:()=>"#1C5FAF",action:()=>"#149945",nextState:()=>"#A47104",error:()=>"#ff0005"},predicate:()=>!0})],h=(0,r.xC)({reducer:u,middleware:e=>e().concat(p)}),m=()=>(0,i.I0)(),v=i.v9},3358:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return D}});var r=o(7437),i=o(3955);o(2265);var s=o(4741),l=o(6055),n=o(5577),a=e=>{let{item:t}=e;return(0,r.jsxs)(l.Z,{sx:{marginY:"10px",border:"none",position:"relative",boxShadow:"none"},children:[(0,r.jsx)(n.Z,{component:"img",sx:{width:"100%",height:{xs:200,sm:350,md:500},borderRadius:"8px"},src:null==t?void 0:t.image,alt:t.name}),(0,r.jsxs)(i.Z,{sx:{position:"absolute",bottom:"15%",left:"5%",color:"#fff"},children:[(0,r.jsx)("h2",{children:t.name}),(0,r.jsx)("p",{children:null==t?void 0:t.desc})]})]})},d=o(8186),c=o(4670),u=o.n(c);function x(e){let{className:t,style:o,onClick:i}=e;return(0,r.jsx)("div",{className:"".concat(t," ").concat(u().HomeCarouselArrows),style:{...o,display:"block"},onClick:i})}function p(e){let{className:t,style:o,onClick:i}=e;return(0,r.jsx)("div",{className:"".concat(t," ").concat(u().HomeCarouselArrows),style:{...o,display:"block"},onClick:i})}var h=()=>{let e={initialSlide:0,infinite:!0,slidesToShow:1,slidesToScroll:1,speed:500,autoplay:!0,autoplaySpeed:4e3,prevArrow:(0,r.jsx)(x,{}),nextArrow:(0,r.jsx)(p,{}),dots:!0,appendDots:e=>(0,r.jsx)("div",{style:{position:"absolute",bottom:"10px"},children:(0,r.jsxs)("ul",{style:{margin:"45px"},children:[" ",e," "]})}),responsive:[{breakpoint:1424,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.Z,{...e,className:u().forCarouselArrowBtns,children:null===d.KQ||void 0===d.KQ?void 0:d.KQ.map((e,t)=>(0,r.jsx)(a,{item:e},t))})})},m=e=>{let{item:t}=e;return(0,r.jsxs)("div",{style:{textAlign:"center",cursor:"pointer",marginLeft:"5px",marginRight:"5px",fontSize:"14px"},children:[(0,r.jsx)("img",{src:null==t?void 0:t.img,alt:"category",style:{height:65,width:65,maxHeight:{xs:233,md:167},maxWidth:{xs:350,md:250},margin:"auto",borderRadius:"50%",border:"1px solid #dbebe1",padding:"8px",marginBottom:"5px",cursor:"pointer"}}),(0,r.jsx)("span",{children:null==t?void 0:t.name})]})},v=o(4277),g=o.n(v);function f(e){let{className:t,style:o,onClick:i}=e;return(0,r.jsx)("div",{className:"".concat(t," ").concat(g().CategoryCarouselArrows),style:{...o,display:"block"},onClick:i})}function j(e){let{className:t,style:o,onClick:i}=e;return(0,r.jsx)("div",{className:"".concat(t," ").concat(g().CategoryCarouselArrows),style:{...o,display:"block"},onClick:i})}var w=()=>{let e={initialSlide:0,infinite:!0,slidesToShow:5,slidesToScroll:1,speed:500,prevArrow:(0,r.jsx)(f,{}),nextArrow:(0,r.jsx)(j,{}),responsive:[{breakpoint:1424,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]};return(0,r.jsx)(i.Z,{sx:{padding:"8px",marginY:"14px"},children:(0,r.jsx)(s.Z,{...e,children:null===d.nI||void 0===d.nI?void 0:d.nI.map((e,t)=>(0,r.jsx)(m,{item:e},t))})})},b=o(7942),y=o(5133),C=o(8469),S=o(5461),k=o(3226),Z=o(5843),T=o(3724);let A=(0,Z.ZP)(l.Z)(e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff",...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}});var _=e=>{let{item:t}=e;return(0,r.jsx)(b.Z,{xs:12,sm:6,children:(0,r.jsx)(A,{sx:{boxShadow:"none",padding:"8px 0"},children:(0,r.jsxs)(y.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(C.Z,{sx:{flex:"1 0 auto",textAlign:"left"},children:[(0,r.jsx)(k.Z,{component:"div",variant:"h5",children:null==t?void 0:t.title}),(0,r.jsx)(k.Z,{variant:"subtitle1",color:"text.secondary",component:"div",children:null==t?void 0:t.desc})]}),(0,r.jsx)(n.Z,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},children:(0,r.jsx)(T.Z,{variant:"text",color:"success",children:null==t?void 0:t.btnText})})]}),(0,r.jsx)(S.Z,{component:"img",sx:{width:151},image:null==t?void 0:t.img,alt:"Live from space album cover"})]})})})};function P(){return(0,r.jsx)(n.Z,{sx:{width:"100%",padding:"8px",marginY:"14px"},children:(0,r.jsx)(b.Z,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:null===d.G1||void 0===d.G1?void 0:d.G1.map((e,t)=>(0,r.jsx)(_,{item:e},t))})})}var I=o(7331),N=o(2353),B=o.n(N);function R(e){let{className:t,style:o,onClick:i}=e;return(0,r.jsx)("div",{className:"".concat(t," ").concat(B().ProductCarouselArrows),style:{...o,display:"block"},onClick:i})}function H(e){let{className:t,style:o,onClick:i}=e;return(0,r.jsx)("div",{className:"".concat(t," ").concat(B().ProductCarouselArrows),style:{...o,display:"block"},onClick:i})}function z(){let e={initialSlide:0,infinite:!0,slidesToShow:5,slidesToScroll:1,speed:500,prevArrow:(0,r.jsx)(R,{}),nextArrow:(0,r.jsx)(H,{}),responsive:[{breakpoint:1424,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return(0,r.jsx)(i.Z,{sx:{padding:"8px",marginY:"14px"},children:(0,r.jsx)(s.Z,{...e,className:"ProductCarouselSlider",children:null===d.QI||void 0===d.QI?void 0:d.QI.map((e,t)=>(0,r.jsx)(I.Z,{item:e},t))})})}var Q=o(8075),O=o(7224),W=o(5280);let Y=(0,Z.ZP)(l.Z)(e=>{let{theme:t}=e;return{...t.typography.h5,padding:t.spacing(1),height:"180px",backgroundColor:"#fff",backgroundImage:"url('".concat(O.U,"/assets/images/emmapollard.jpg')"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px",textAlign:"center",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}),E=(0,Z.ZP)(l.Z)(e=>{let{theme:t}=e;return{color:"#fff",margin:"3px",padding:"3px",background:"transparent",display:"inline-block",boxShadow:"none",textTransform:"uppercase"}});function F(){return(0,r.jsx)(n.Z,{sx:{width:"100%",margin:"8px 0"},children:(0,r.jsx)(Q.Z,{spacing:2,children:(0,r.jsxs)(Y,{children:[(0,r.jsx)(E,{children:"You're Always Welcome To"}),(0,r.jsx)(E,{children:(0,r.jsx)(W.Z,{children:"Contact us"})})]})})})}var K=o(7883);function D(){return(0,r.jsx)(K.default,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(h,{}),(0,r.jsx)(w,{}),(0,r.jsx)(P,{}),(0,r.jsx)(z,{}),(0,r.jsx)(F,{})]})})}},7331:function(e,t,o){"use strict";var r=o(7437),i=o(2265),s=o(5133),l=o(8469),n=o(5461),a=o(3226),d=o(2653),c=o(2353),u=o.n(c),x=o(9522),p=o(4033),h=o(7289);t.Z=e=>{var t,o;let{item:c}=e,m=(0,p.useRouter)();(0,h.I0)();let v=(0,h.v9)(e=>e.wishlist.value);(0,h.v9)(e=>e.cart);let[g,f]=(0,i.useState)(v.includes(null==c?void 0:c.id)),j=e=>{g?g&&(f(!1),removefromwishlist(e)):(f(!0),addtowishlist(e))};return(0,r.jsxs)(s.Z,{sx:{maxWidth:250,margin:"10px 5px",padding:"10px",borderRadius:"8px",boxShadow:"1px 0 0 1px rgb(255 255 255), 0.1em 0.1em 0.5em rgb(0 0 0 / 20%)",position:"relative"},className:u().ProductCarouselCard,children:[(0,r.jsx)(n.Z,{sx:{height:140,borderRadius:"8px"},image:null==c?void 0:c.img,title:"Click To View"}),(0,r.jsxs)(l.Z,{sx:{textTransform:"capitalize",cursor:"pointer"},onClick:()=>m.push("/product/".concat(null==c?void 0:c.id)),children:[(0,r.jsx)(a.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",color:"text.primary",title:null==c?void 0:null===(t=c.name)||void 0===t?void 0:t.replaceAll("_"," "),children:"".concat(null==c?void 0:null===(o=c.name)||void 0===o?void 0:o.replaceAll("_"," ").slice(0,35)," ...")}),(0,r.jsx)(a.Z,{gutterBottom:!0,variant:"body2",color:"text.secondary",component:"div",children:null==c?void 0:c.category}),(0,r.jsxs)(a.Z,{variant:"string",color:"text.primary",sx:{marginRight:"5px",fontSize:"16px"},children:["₹",null==c?void 0:c.price]}),(0,r.jsxs)(a.Z,{variant:"body2",color:"lightgray",sx:{display:"inline-block",textDecoration:"line-through"},children:["₹",null==c?void 0:c.originalPrice]})]}),(0,r.jsx)(d.Z,{size:"large","aria-label":"wishlistbutton",color:"inherit",title:"Add to Wishlist",sx:{position:"absolute",right:"3px",top:"3px",color:g?"green":"white"},onClick:()=>{j(null==c?void 0:c.id)},children:(0,r.jsx)(x.Z,{})})]})}},5280:function(e,t,o){"use strict";var r=o(5843),i=o(3724);let s=(0,r.ZP)(i.Z)(e=>{let{theme:t}=e;return{background:"#198754",color:"#fff","&:hover":{background:"#198754"}}});t.Z=s},4277:function(e){e.exports={CategoryCarouselArrows:"CategoryCarousel_CategoryCarouselArrows___nt9z"}},4670:function(e){e.exports={HomeCarouselArrows:"HomeCarousel_HomeCarouselArrows__B6vtH",forCarouselArrowBtns:"HomeCarousel_forCarouselArrowBtns__V9Hws"}},2353:function(e){e.exports={ProductCarouselArrows:"ProductCarousel_ProductCarouselArrows__pCBsK",ProductCarouselCard:"ProductCarousel_ProductCarouselCard__5alqv"}}},function(e){e.O(0,[72,137,573,997,244,979,883,971,472,744],function(){return e(e.s=1812)}),_N_E=e.O()}]);