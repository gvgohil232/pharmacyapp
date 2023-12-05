(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[676],{7289:function(e,t,i){"use strict";i.d(t,{Ao:function(){return u},tO:function(){return v},I0:function(){return h},v9:function(){return m},is:function(){return d}});var l=i(64),r=i(3198);let o=l.hg.withTypes(),a=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=await fetch("http://localhost:3000/api/identity-count",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:e})}),i=await t.json();return i},n=o("counter/fetchIdentityCount",async e=>{let t=await a(e);return t.data}),s=(0,l.oM)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},incrementByAmount:(e,t)=>{e.value+=t.payload}},extraReducers:e=>{e.addCase(n.pending,e=>{e.status="loading"}).addCase(n.fulfilled,(e,t)=>{e.status="idle",e.value+=t.payload})}}),d=(0,l.oM)({name:"wishlist",initialState:{value:[],status:"idle"},reducers:{addtowishlist:(e,t)=>{e={...e,value:[...e.value,null==t?void 0:t.payload]}},removefromwishlist:(e,t)=>{e={...e,value:[...e.value.filter(e=>e!==(null==t?void 0:t.payload))]}}}}),u=(0,l.oM)({name:"cart",initialState:{value:[],status:"idle"},reducers:{addtocart:(e,t)=>{e={...e,value:[...e.value,t.payload]}},decrementfromcart:(e,t)=>{e={...e,value:[...e.value.filter(e=>e!==(null==t?void 0:t.payload))]}}}}),c={counter:s.reducer,wishlist:d.reducer,cart:u.reducer};var x=i(3944);let p=[(0,x.createLogger)({duration:!0,timestamp:!1,collapsed:!0,colors:{title:()=>"#139BFE",prevState:()=>"#1C5FAF",action:()=>"#149945",nextState:()=>"#A47104",error:()=>"#ff0005"},predicate:()=>!0})],v=(0,l.xC)({reducer:c,middleware:e=>e().concat(p)}),h=()=>(0,r.I0)(),m=r.v9},7331:function(e,t,i){"use strict";var l=i(7437),r=i(2265),o=i(5133),a=i(8469),n=i(5461),s=i(3226),d=i(2653),u=i(2353),c=i.n(u),x=i(9522),p=i(4033),v=i(7289);t.Z=e=>{var t,i;let{item:u}=e,h=(0,p.useRouter)();(0,v.I0)();let m=(0,v.v9)(e=>e.wishlist.value);(0,v.v9)(e=>e.cart);let[g,f]=(0,r.useState)(m.includes(null==u?void 0:u.id)),y=e=>{g?g&&(f(!1),removefromwishlist(e)):(f(!0),addtowishlist(e))};return(0,l.jsxs)(o.Z,{sx:{maxWidth:250,margin:"10px 5px",padding:"10px",borderRadius:"8px",boxShadow:"1px 0 0 1px rgb(255 255 255), 0.1em 0.1em 0.5em rgb(0 0 0 / 20%)",position:"relative"},className:c().ProductCarouselCard,children:[(0,l.jsx)(n.Z,{sx:{height:140,borderRadius:"8px"},image:null==u?void 0:u.img,title:"Click To View"}),(0,l.jsxs)(a.Z,{sx:{textTransform:"capitalize",cursor:"pointer"},onClick:()=>h.push("/product/".concat(null==u?void 0:u.id)),children:[(0,l.jsx)(s.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",color:"text.primary",title:null==u?void 0:null===(t=u.name)||void 0===t?void 0:t.replaceAll("_"," "),children:"".concat(null==u?void 0:null===(i=u.name)||void 0===i?void 0:i.replaceAll("_"," ").slice(0,35)," ...")}),(0,l.jsx)(s.Z,{gutterBottom:!0,variant:"body2",color:"text.secondary",component:"div",children:null==u?void 0:u.category}),(0,l.jsxs)(s.Z,{variant:"string",color:"text.primary",sx:{marginRight:"5px",fontSize:"16px"},children:["₹",null==u?void 0:u.price]}),(0,l.jsxs)(s.Z,{variant:"body2",color:"lightgray",sx:{display:"inline-block",textDecoration:"line-through"},children:["₹",null==u?void 0:u.originalPrice]})]}),(0,l.jsx)(d.Z,{size:"large","aria-label":"wishlistbutton",color:"inherit",title:"Add to Wishlist",sx:{position:"absolute",right:"3px",top:"3px",color:g?"green":"white"},onClick:()=>{y(null==u?void 0:u.id)},children:(0,l.jsx)(x.Z,{})})]})}},1676:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return b}});var l=i(7437),r=i(2265),o=i(6055),a=i(3955),n=i(8874),s=i(2057),d=i(5873),u=i(3226),c=i(8768),x=i(2582),p=i(182),v=i(7760),h=i(1344),m=i(8186),g=i(7331),f=i(5843),y=i(33),j=e=>{let{minPrice:t,maxPrice:i}=e,[o,a]=(0,r.useState)([t,100]);return(0,l.jsx)(y.ZP,{getAriaLabel:()=>"Price range",value:o,onChange:(e,t)=>{a(t)},valueLabelDisplay:"auto",color:"success"})};let Z=(0,f.ZP)(o.Z)(e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff",...t.typography.body2,padding:t.spacing(1),color:t.palette.text.secondary,boxShadow:"none"}});var b=e=>{let{category:t}=e,[i,f]=(0,r.useState)([]);return(0,r.useEffect)(()=>{f(null===m.QI||void 0===m.QI?void 0:m.QI.filter(e=>(null==e?void 0:e.category)===t))},[]),(0,l.jsx)(a.Z,{sx:{marginY:"14px"},children:(0,l.jsxs)(n.ZP,{container:!0,spacing:2,children:[(0,l.jsx)(n.ZP,{item:!0,xs:2,sx:{display:{xs:"none",md:"block"}},children:(0,l.jsxs)(Z,{children:["Filter",null===m.z$||void 0===m.z$?void 0:m.z$.map((e,t)=>{var i,r;return(0,l.jsxs)(s.Z,{sx:{boxShadow:"none",border:"none"},className:"ProductListingFilterItem",children:[(0,l.jsx)(d.Z,{expandIcon:(0,l.jsx)(h.Z,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",sx:{padding:"0"},children:(0,l.jsx)(u.Z,{sx:{width:"33%",flexShrink:0},children:null==e?void 0:e.title})}),(0,l.jsx)(c.Z,{sx:{padding:"0",textTransform:"capitalize"},children:(0,l.jsx)(u.Z,{children:(null==e?void 0:null===(i=e.options)||void 0===i?void 0:i.length)>0?(0,l.jsx)(x.Z,{children:null==e?void 0:null===(r=e.options)||void 0===r?void 0:r.map((e,t)=>(0,l.jsx)(p.Z,{control:(0,l.jsx)(v.Z,{color:"success",size:"small"}),label:e},t))}):(0,l.jsx)(j,{min:null==e?void 0:e.minPrice,max:null==e?void 0:e.maxPrice})})})]})})]})}),(0,l.jsxs)(n.ZP,{item:!0,xs:10,children:[(0,l.jsxs)(o.Z,{elevation:0,children:[null==i?void 0:i.length," Products"]}),(0,l.jsx)(Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:null==i?void 0:i.map((e,t)=>(0,l.jsx)(g.Z,{item:e},t))})]})]})})}},2353:function(e){e.exports={ProductCarouselArrows:"ProductCarousel_ProductCarouselArrows__pCBsK",ProductCarouselCard:"ProductCarousel_ProductCarouselCard__5alqv"}}}]);