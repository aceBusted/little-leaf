(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7607:function(e,t,a){Promise.resolve().then(a.bind(a,821))},821:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return M}});var s=a(6811),r=a(3501),l=a(8840),n=a(8327);function o(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.m6)((0,l.W)(t))}let i=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:o("rounded-xl border bg-card text-card-foreground shadow",a),...r})});i.displayName="Card",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:o("flex flex-col space-y-1.5 p-6",a),...r})}).displayName="CardHeader";let d=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("h3",{ref:t,className:o("font-semibold leading-none tracking-tight",a),...r})});d.displayName="CardTitle";let c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("p",{ref:t,className:o("text-sm text-muted-foreground",a),...r})});c.displayName="CardDescription";let x=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:o("p-6 pt-0",a),...r})});x.displayName="CardContent",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:o("flex items-center p-6 pt-0",a),...r})}).displayName="CardFooter";var m=a(782),u=a(2158),f=a(1608);let h=(0,a(7991).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),p=r.forwardRef((e,t)=>{let{className:a,variant:r,size:l,asChild:n=!1,...i}=e,d=n?f.g7:"button";return(0,s.jsx)(d,{className:o(h({variant:r,size:l,className:a})),ref:t,...i})});p.displayName="Button";let g=r.createContext(null);function v(){let e=r.useContext(g);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let b=r.forwardRef((e,t)=>{let{orientation:a="horizontal",opts:l,setApi:n,plugins:i,className:d,children:c,...x}=e,[m,f]=(0,u.Z)({...l,axis:"horizontal"===a?"x":"y"},i),[h,p]=r.useState(!1),[v,b]=r.useState(!1),j=r.useCallback(e=>{e&&(p(e.canScrollPrev()),b(e.canScrollNext()))},[]),y=r.useCallback(()=>{null==f||f.scrollPrev()},[f]),w=r.useCallback(()=>{null==f||f.scrollNext()},[f]),N=r.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),y()):"ArrowRight"===e.key&&(e.preventDefault(),w())},[y,w]);return r.useEffect(()=>{f&&n&&n(f)},[f,n]),r.useEffect(()=>{if(f)return j(f),f.on("reInit",j),f.on("select",j),()=>{null==f||f.off("select",j)}},[f,j]),(0,s.jsx)(g.Provider,{value:{carouselRef:m,api:f,opts:l,orientation:a||((null==l?void 0:l.axis)==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:w,canScrollPrev:h,canScrollNext:v},children:(0,s.jsx)("div",{ref:t,onKeyDownCapture:N,className:o("relative",d),role:"region","aria-roledescription":"carousel",...x,children:c})})});b.displayName="Carousel";let j=r.forwardRef((e,t)=>{let{className:a,...r}=e,{carouselRef:l,orientation:n}=v();return(0,s.jsx)("div",{ref:l,className:"overflow-hidden",children:(0,s.jsx)("div",{ref:t,className:o("flex","horizontal"===n?"-ml-4":"-mt-4 flex-col",a),...r})})});j.displayName="CarouselContent";let y=r.forwardRef((e,t)=>{let{className:a,...r}=e,{orientation:l}=v();return(0,s.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:o("min-w-0 shrink-0 grow-0 basis-full","horizontal"===l?"pl-4":"pt-4",a),...r})});y.displayName="CarouselItem";let w=r.forwardRef((e,t)=>{let{className:a,variant:r="outline",size:l="icon",...n}=e,{orientation:i,scrollPrev:d,canScrollPrev:c}=v();return(0,s.jsxs)(p,{ref:t,variant:r,size:l,className:o("absolute  h-8 w-8 rounded-full","horizontal"===i?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!c,onClick:d,...n,children:[(0,s.jsx)(m.Y4O,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});w.displayName="CarouselPrevious";let N=r.forwardRef((e,t)=>{let{className:a,variant:r="outline",size:l="icon",...n}=e,{orientation:i,scrollNext:d,canScrollNext:c}=v();return(0,s.jsxs)(p,{ref:t,variant:r,size:l,className:o("absolute h-8 w-8 rounded-full","horizontal"===i?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!c,onClick:d,...n,children:[(0,s.jsx)(m.LZ3,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Next slide"})]})});N.displayName="CarouselNext";var k=JSON.parse('[{"name":"Feature1","img":"/feature2.avif","title":"Planet Over Profit","desc":"Maximize your power efficiency to minimize pollution and contribute to a cleaner planet."},{"name":"Feature2","img":"/feature2.avif","title":"Planet Over Profit","desc":"Our sustainable solutions empower you to lessen your environmental impact."},{"name":"Feature3","img":"/feature2.avif","title":"Planet Over Profit","desc":"Empower yourself with eco-conscious choices to decrease pollution and foster a sustainable world."}]'),z=function(){return(0,s.jsx)("div",{className:"flex justify-center hover:scale-105 transform transition-transform ease-in-out duration-100",children:(0,s.jsxs)(b,{className:"w-full md:w-30 max-w-lg md:max-w-lg",children:[(0,s.jsx)(j,{children:k.map(e=>(0,s.jsx)(y,{children:(0,s.jsx)("div",{className:"p-1",children:(0,s.jsxs)(i,{children:[(0,s.jsx)(x,{className:"flex w-100 h-100 items-center justify-center p-4",children:(0,s.jsx)("span",{className:" font-semibold",children:(0,s.jsx)("img",{className:"w-full h-[300px]  sm:h-[350px] rounded",src:e.img,alt:""})})}),(0,s.jsxs)(x,{children:[(0,s.jsx)(d,{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:e.title}),(0,s.jsx)(c,{className:"mb-3 font-normal text-gray-700 dark:text-gray-400",children:e.desc}),(0,s.jsx)(p,{className:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-700 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-800",children:"Learn More"})]})]})})},e.name))}),(0,s.jsx)(w,{}),(0,s.jsx)(N,{})]})})};a(4197);var C=()=>((0,r.useEffect)(()=>{a.e(25).then(a.t.bind(a,4025,23)).then(e=>{e.init({duration:600})})},[]),(0,s.jsx)("div",{children:(0,s.jsx)("section",{className:"bg-gray-50",children:(0,s.jsx)("div",{className:"mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center",children:(0,s.jsxs)("div",{className:"mx-auto max-w-xl text-center",children:[(0,s.jsxs)("h1",{className:"text-3xl font-extrabold sm:text-5xl","data-aos":"fade-down","data-aos-delay":"20","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true",children:["Optimize your Power To",(0,s.jsx)("strong",{className:"font-extrabold text-green-500 sm:block",children:" Reduce Pollution "})]}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"mt-4 sm:text-xl/relaxed","data-aos":"zoom-in","data-aos-delay":"20","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true",children:"We are giving the best solution to reduce your footprint on the environment.\uD83D\uDC63"})}),(0,s.jsxs)("div",{className:"mt-8 flex flex-wrap justify-center gap-4","data-aos":"fade-right","data-aos-delay":"20","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"false",children:[(0,s.jsx)("a",{className:"block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto",href:"/get-started",children:"Get Started"}),(0,s.jsx)("a",{className:"block w-full rounded px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto",href:"/about",children:"Learn More"})]})]})})})})),_=a(5345),E=()=>(0,s.jsx)("nav",{className:"bg-white p-4 shadow-md",children:(0,s.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,s.jsxs)("a",{href:"#",className:"flex items-center space-x-3 rtl:space-x-reverse transition-transform transform hover:scale-105",children:[(0,s.jsx)("div",{className:"w-10 h-10 relative",children:(0,s.jsx)(_.default,{src:"/logo.png",alt:"Logo",layout:"fill",objectFit:"fill",className:"rounded-md"})}),(0,s.jsx)("span",{className:"self-center text-3xl font-extrabold whitespace-nowrap text-black dark:text-white transition-colors hover:text-green-700",children:"Little Leaf"})]}),(0,s.jsxs)("div",{className:"hidden lg:flex space-x-4 lg:items-center",children:[(0,s.jsx)("a",{href:"/",className:"text-black hover:text-green-700 hover:font-bold font-bold hover:outline-none rounded-full px-4 py-2 dark:hover:bg-green-100 dark:text-green-700 dark:hover:text-white transform transition-transform hover:scale-105",children:"Home"}),(0,s.jsx)("a",{href:"/about",className:"text-black hover:text-green-700 hover:font-bold font-bold hover:outline-none rounded-full px-4 py-2 dark:hover:bg-green-100 dark:text-green-700 dark:hover:text-white transform transition-transform hover:scale-105",children:"About"}),(0,s.jsx)("a",{href:"/services",className:"text-black hover:text-green-700 hover:font-bold font-bold hover:outline-none rounded-full px-4 py-2 dark:hover:bg-green-100 dark:text-green-700 dark:hover:text-white transform transition-transform hover:scale-105",children:"Services"}),(0,s.jsx)("a",{href:"/contact",className:"text-black hover:text-green-700 hover:font-bold font-bold hover:outline-none rounded-full px-4 py-2 dark:hover:bg-green-100 dark:text-green-700 dark:hover:text-white transform transition-transform hover:scale-105",children:"Contact"})]}),(0,s.jsx)("div",{className:"hidden md:flex items-center space-x-3",children:(0,s.jsx)("div",{className:"w-16 h-16 relative"})})]})}),P=a(4041),D=a(1043),L=a(4647),F=function(){return(0,s.jsx)("main",{className:"flex items-center justify-center",children:(0,s.jsxs)("section",{className:"grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-2",children:[(0,s.jsxs)("div",{className:"p-20 border border-green-400 rounded-md flex flex-col gap-2 lg:col-span-3 lg:row-span-2 md:col-span-3 md:row-span-2 sm:col-span-1",children:[(0,s.jsx)("span",{className:"text-[32px] font-Poppins font-bold text-center",children:"Title 1"}),(0,s.jsx)("span",{className:"text-[18px] text-center",children:"Description"})]}),(0,s.jsxs)("div",{className:"p-20 border border-green-400 rounded-md flex flex-col gap-2 lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 sm:col-span-1",children:[(0,s.jsx)("span",{className:"text-[32px] font-Poppins font-bold text-center",children:"Title 2"}),(0,s.jsx)("span",{className:"text-[18px] text-center",children:"Description"})]}),(0,s.jsxs)("div",{className:"p-20 border border-green-400 rounded-md flex flex-col gap-2 lg:col-span-2 md:col-span-2 sm:col-span-1",children:[(0,s.jsx)("span",{className:"text-[32px] font-Poppins font-bold text-center",children:"Title 3"}),(0,s.jsx)("span",{className:"text-[18px] text-center",children:"Description"})]}),(0,s.jsxs)("div",{className:"p-20 border border-green-400 rounded-md flex flex-col gap-2 lg:col-span-2 md:col-span-2 sm:col-span-1",children:[(0,s.jsx)("span",{className:"text-[32px] font-Poppins font-bold text-center",children:"Title 4"}),(0,s.jsx)("span",{className:"text-[18px] text-center",children:"Description"})]})]})})},R=a(3623);function O(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.m6)((0,l.W)(t))}let S=e=>{let{children:t,title:a,href:l,className:n,containerClassName:o}=e,[i,d]=(0,r.useState)("translate(-50%,-50%) rotateX(0deg)");return(0,s.jsxs)("div",{className:O("relative group/pin z-50  cursor-pointer",o),onMouseEnter:()=>{d("translate(-50%,-50%) rotateX(40deg) scale(0.8)")},onMouseLeave:()=>{d("translate(-50%,-50%) rotateX(0deg) scale(1)")},children:[(0,s.jsx)("div",{style:{perspective:"1000px",transform:"rotateX(70deg) translateZ(0deg)"},className:"absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2",children:(0,s.jsx)("div",{style:{transform:i},className:"absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden",children:(0,s.jsx)("div",{className:O(" relative z-50 ",n),children:t})})}),(0,s.jsx)(T,{title:a,href:l})]})},T=e=>{let{title:t,href:a}=e;return(0,s.jsx)(R.E.div,{className:"pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500",children:(0,s.jsxs)("div",{className:" w-full h-full -mt-7 flex-none  inset-0",children:[(0,s.jsx)("div",{className:"absolute top-0 inset-x-0  flex justify-center",children:(0,s.jsxs)("a",{href:a,target:"_blank",className:"relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ",children:[(0,s.jsx)("span",{className:"relative z-20 text-white text-xs font-bold inline-block py-0.5",children:t}),(0,s.jsx)("span",{className:"absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"})]})}),(0,s.jsx)("div",{style:{perspective:"1000px",transform:"rotateX(70deg) translateZ(0)"},className:"absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(R.E.div,{initial:{opacity:0,scale:0,x:"-50%",y:"-50%"},animate:{opacity:[0,1,.5,0],scale:1,z:0},transition:{duration:6,repeat:1/0,delay:0},className:"absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"}),(0,s.jsx)(R.E.div,{initial:{opacity:0,scale:0,x:"-50%",y:"-50%"},animate:{opacity:[0,1,.5,0],scale:1,z:0},transition:{duration:6,repeat:1/0,delay:2},className:"absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"}),(0,s.jsx)(R.E.div,{initial:{opacity:0,scale:0,x:"-50%",y:"-50%"},animate:{opacity:[0,1,.5,0],scale:1,z:0},transition:{duration:6,repeat:1/0,delay:4},className:"absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"})]})}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(R.E.div,{className:"absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]"}),(0,s.jsx)(R.E.div,{className:"absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  "}),(0,s.jsx)(R.E.div,{className:"absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"}),(0,s.jsx)(R.E.div,{className:"absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 "})]})]})})};function A(){return(0,s.jsx)("div",{className:"h-[40rem] w-full flex items-center justify-center ",children:(0,s.jsx)("a",{href:"googel.com",children:(0,s.jsx)(S,{title:"Solar Power Calculator(Click here)",children:(0,s.jsxs)("div",{className:"flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ",children:[(0,s.jsx)("h3",{className:"max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100",children:"Check your Solar-Heat map"}),(0,s.jsx)("div",{className:"text-base !m-0 !p-0 font-normal",children:(0,s.jsx)("span",{className:"text-slate-500 ",children:"Calacuate your total savings @your location."})}),(0,s.jsx)("div",{className:"flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-yellow-400 via-orange-300-500 to-orange-500"})]})})})})}function M(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(E,{}),(0,s.jsxs)(P.V,{pages:7,children:[(0,s.jsx)(P._,{offset:0,speed:1,children:(0,s.jsx)(C,{})}),(0,s.jsx)(P._,{offset:1,speed:1,children:(0,s.jsx)(z,{})}),(0,s.jsx)(P._,{offset:2,speed:1,children:(0,s.jsx)(L.Z,{})}),(0,s.jsx)(P._,{offset:4,speed:1,children:(0,s.jsx)(F,{})}),(0,s.jsx)(P._,{offset:5,speed:2}),(0,s.jsx)(P._,{offset:6,speed:2,children:(0,s.jsx)(A,{})})]}),(0,s.jsx)(D.Wi,{gaId:"G-C8T4WZVMKH"})]})}},4647:function(e,t,a){"use strict";var s=a(6811),r=a(3501);a(4197);var l=a(4019);let n=e=>{let{title:t,description:a}=e;return(0,s.jsxs)("div",{className:"w-full p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105",children:[(0,s.jsx)("h3",{className:"text-lg sm:text-2xl hover:font-bold font-bold text-gray-800",children:t}),(0,s.jsx)("p",{className:"mt-2 text-sm sm:text-lg text-gray-800 leading-tight",children:a})]})};t.Z=()=>((0,r.useEffect)(()=>{a.e(25).then(a.t.bind(a,4025,23)).then(e=>{e.init({duration:600})})},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"bg-green-500 dark:bg-green-500",id:"section-features",children:[(0,s.jsx)("div",{className:"mx-auto max-w-2xl py-12 px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8",children:(0,s.jsxs)("div",{className:"mx-auto max-w-3xl text-center",children:[(0,s.jsx)("h2",{className:"text-2xl font-medium tracking-tight text-white sm:text-4xl",children:"Features"}),(0,s.jsx)("p",{className:" mt-4 text-white text-xl"})]})}),(0,s.jsxs)("div",{className:"mt-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8",children:[(0,s.jsxs)("div",{className:"lg:col-start-1 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4",children:[(0,s.jsx)("h3",{className:"text-lg sm:text-2xl  font-extrabold text-white",children:"Optimized Power Generation"}),(0,s.jsx)("p",{className:"mt-2 text-sm sm:text-lg  font-semibold text-white",children:"Maximize energy efficiency with our advanced algorithms that optimize power generation based on environmental conditions."})]}),(0,s.jsx)("div",{className:"lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end","data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true",children:(0,s.jsx)(n,{title:"Optimized Power Generation \uD83C\uDF1E",description:"Little Leaf ensures efficient utilization of solar energy, contributing to a sustainable and eco-friendly future.",icon:(0,s.jsx)(l.f38,{size:40})})})]}),(0,s.jsxs)("div",{className:"mt-16 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8",children:[(0,s.jsxs)("div",{className:"lg:col-start-8 xl:col-start-9 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4",children:[(0,s.jsx)("h3",{className:"text-lg sm:text-2xl  font-extrabold text-white",children:"Empowering the Future with Sustainable Energy"}),(0,s.jsx)("p",{className:"mt-2 text-sm sm:text-lg font-semibold text-white",children:"Get insights into future power generation trends through advanced forecasting techniques. Discover the innovative features that make Little Leaf a leader in sustainable energy solutions. From optimized power generation to predictive analysis, we're committed to creating a greener and more efficient world."})]}),(0,s.jsx)("div",{className:"lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end",children:(0,s.jsx)(n,{title:"Future Prediction of Power Generation \uD83D\uDD2E",description:"Little Leaf's predictive analysis helps you plan efficiently and adapt to changing energy demands.",icon:(0,s.jsx)(l.Op,{size:40})})})]}),(0,s.jsxs)("div",{className:"mt-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8",children:[(0,s.jsxs)("div",{className:"lg:col-start-1 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4",children:[(0,s.jsx)("h3",{className:"text-lg sm:text-2xl font-extrabold text-white",children:"Solving Climatal Issues"}),(0,s.jsx)("p",{className:"mt-2 text-sm sm:text-lg font-semibold text-white",children:"Little Leaf tackles climatal issues by harnessing the power of renewable sources near you. Our clean energy solutions contribute to saving the planet, creating a sustainable and eco-friendly environment for generations to come."})]}),(0,s.jsx)("div",{className:"lg:col-start-8 xl:col-start-5 flex-auto xl:col-span-4 flex justify-end",children:(0,s.jsx)(n,{title:"Renewable Energy Solutions \uD83C\uDF3F",description:"Utilize clean energy from local sources to combat climatal issues. Little Leaf's renewable energy solutions are designed to make a positive impact on the environment and promote a greener planet.",icon:(0,s.jsx)(l.SRP,{size:40})})})]}),(0,s.jsxs)("div",{className:"mt-16 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8",children:[(0,s.jsxs)("div",{className:"lg:col-start-8 xl:col-start-9 mt-6 lg;mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4",children:[(0,s.jsx)("h3",{className:"text-lg sm:text-2xl  font-extrabold text-white",children:"Feature 4: 24*7 Availability, Reliable and Trustworthy Product"}),(0,s.jsx)("p",{className:"mt-2 text-sm sm:text-lg  font-semibold text-white",children:"Experience the unparalleled advantages of Little Leaf's energy solutions, ensuring 24*7 availability, reliability, and a trustworthy product. Our commitment to accessibility, sustainability, and scalability sets us apart in the industry."})]}),(0,s.jsx)("div",{className:"lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end pb-10",children:(0,s.jsx)(n,{title:"Uninterrupted Availability \uD83C\uDF10",description:"Little Leaf provides round-the-clock availability, ensuring a continuous and reliable energy supply. Experience peace of mind with our commitment to accessibility and sustainability, offering a trustworthy and scalable product for your energy needs.",icon:(0,s.jsx)(l.qyc,{size:40})})})]})]})}))}},function(e){e.O(0,[125,253,86,715,726,733,708,744],function(){return e(e.s=7607)}),_N_E=e.O()}]);