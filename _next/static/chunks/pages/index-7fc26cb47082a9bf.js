(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(903)}])},903:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return L},obfuscate:function(){return z}});var s=i(5893),r=i(1762),n=i.n(r),o=i(1822),a=i.n(o),l=i(7294),c=i(1571),h=i(7917),d=i(2405),x=i(5369),m=()=>{let{theme:e,setTheme:t}=(0,c.F)(),[i,r]=(0,l.useState)("dark"===e),[n,o]=(0,l.useState)(!1);return((0,l.useEffect)(()=>o(!0),[]),(0,l.useEffect)(()=>{t(i?"dark":"light")},[i,t]),n)?(0,s.jsx)(x.Z,{style:{maxWidth:"30px",maxHeight:"30px",minWidth:"30px",minHeight:"30px"},value:"check",selected:i,onChange:()=>{r(!i)},children:i?(0,s.jsx)(d.Z,{style:{height:"20px",fill:"white"}}):(0,s.jsx)(h.Z,{style:{height:"20px",fill:"black"}})}):null},p=i(4440),j=i(8069),g=i(4246);class u extends l.Component{componentDidMount(){this.setState({isMobile:this.props.isMobile})}componentDidUpdate(e){e.isMobile!==this.props.isMobile&&this.setState({isMobile:this.props.isMobile})}render(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css",className:"jsx-8ccc2f01db78c603"}),(0,s.jsx)(p.Z,{className:"dark:bg-gray-900 bg-white",style:{position:"fixed",bottom:0,width:"100%",zIndex:1e3},children:(0,s.jsxs)(j.Z,{variant:"dense",children:[(0,s.jsx)(g.Z,{variant:"h6",component:"div",sx:{flexGrow:1},className:n().className,style:{textAlign:"center",fontSize:"14px"},children:this.state.isMobile?(0,s.jsx)(s.Fragment,{children:"Made with ❤️ at UofT"}):(0,s.jsxs)(s.Fragment,{children:["Made with ❤️ at UofT (w/ a little help from ",(0,s.jsx)("a",{href:"https://nextjs.org",className:"jsx-8ccc2f01db78c603",children:"next.js"}),")."]})}),(0,s.jsx)(m,{})]})}),(0,s.jsx)(a(),{id:"8ccc2f01db78c603",children:"#heart.jsx-8ccc2f01db78c603{font-size:14px;text-decoration:none;cursor:text}"})]})}constructor(e){super(e),this.state={isMobile:e.isMobile}}}var w=i(2664),f=i.n(w),Z=i(8163);function y(){return(0,s.jsx)(p.Z,{children:(0,s.jsxs)(j.Z,{variant:"dense",children:[(0,s.jsx)(g.Z,{variant:"h6",component:"div",sx:{flexGrow:1}}),(0,s.jsx)(Z.Z,{color:"inherit",href:"/",className:f().className+" text-md",children:"Home"})]})})}var b=i(9603),v=i(9417),N=i(3367),k=i(3024),P=i(9485),M=i(4466);function z(e,t){return t+"@"+e}class L extends l.Component{componentDidMount(){this.setState({isMobile:window.innerWidth<600}),window.addEventListener("resize",()=>{this.setState({isMobile:window.innerWidth<600})})}render(){return(0,s.jsxs)("div",{children:[(0,s.jsx)("title",{children:"Red Teaming Large Language Models"}),(0,s.jsx)(y,{}),(0,s.jsxs)("main",{style:{width:this.state.isMobile?"90%":"75%",margin:"auto"},children:[this.state.isMobile?(0,s.jsxs)(p.Z,{className:"center",display:"flex",justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(p.Z,{width:.4,p:2,alignContent:"center",children:(0,s.jsxs)("center",{children:[(0,s.jsx)("img",{src:"llm_redteam_icon_light.png",alt:"Light Mode",className:"block dark:hidden",style:{width:"125px"}}),(0,s.jsx)("img",{src:"llm_redteam_icon_dark.png",alt:"Dark Mode",className:"hidden dark:block",style:{width:"125px"}})]})}),(0,s.jsxs)(p.Z,{width:.6,p:1,children:[(0,s.jsx)("h1",{className:"text-xl",style:{paddingBottom:"8px"},children:"Red Teaming Large Language Models for Healthcare"}),(0,s.jsx)("p",{className:"text-sm",children:"Workshop at Machine Learning for Healthcare (MLHC), 2024"}),(0,s.jsx)("p",{className:"text-sm",children:"August 16, 2024"}),(0,s.jsx)("p",{className:"text-sm",children:"Arcadian Court, Toronto, ON"})]})]}):(0,s.jsxs)(p.Z,{className:"center",display:"flex",justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(p.Z,{width:.3,p:2,alignContent:"center",children:(0,s.jsxs)("center",{children:[(0,s.jsx)("img",{src:"llm_redteam_icon_light.png",alt:"Light Mode",className:"block dark:hidden",style:{width:"125px"}}),(0,s.jsx)("img",{src:"llm_redteam_icon_dark.png",alt:"Dark Mode",className:"hidden dark:block",style:{width:"125px"}})]})}),(0,s.jsxs)(p.Z,{width:.8,p:1,children:[(0,s.jsx)("h1",{className:"text-xl",style:{paddingBottom:"8px"},children:"Red Teaming Large Language Models for Healthcare"}),(0,s.jsx)("p",{className:"text-sm",children:"Workshop at Machine Learning for Healthcare (MLHC), 2024"}),(0,s.jsx)("p",{className:"text-sm",children:"August 16, 2024"}),(0,s.jsx)("p",{className:"text-sm",children:"Arcadian Court, Toronto, ON"})]})]}),(0,s.jsx)("br",{}),(0,s.jsx)("hr",{style:{width:"70%",margin:"auto"}}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:"Large language models (LLMs) trained on massive data have demonstrated exciting capabilities in information retrieval, decision-making, and text generation. Despite their many strengths, these language models are imperfect, and their deployment in healthcare settings poses risk: language models may hallucinate incorrect responses to factual inquiries, provide inaccurate responses to queries that lie outside of the distribution of training data, or incorrectly apply mathematical formulae (e.g., risk score equations) to clinical data. The goal of this workshop is for teams of clinicians and computer scientists to jointly explore the limitations of the present generation of large language models in realistic healthcare scenarios to inform responsible deployment of LLMs in healthcare and to highlight areas of improvement in the machine learning methods underlying modern LLMs."}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:"This exercise will take the form of a workshop at the Machine Learning for Healthcare Conference (MLHC), 2024. Working in teams of clinicians and computer scientists, workshop participants will undertake a “red teaming” exercise. Red teaming is an established set of techniques within the physical and digital security communities, wherein a group (the “red team”; typically composed of security practitioners) pretends to be a malicious actor and attempts to gain access to the secured location or information. The process of doing so highlights potential limitations of the existing security systems and informs areas of improvement."}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:"Within our workshop, participants will place themselves in the shoes of clinical users of LLM-based healthcare systems. Unlike in a traditional red-teaming exercise, where participants pretend to be malicious users, the healthcare context yields the unique restriction that users (clinicians, nurses, hospital administrators) are almost exclusively using the system with the goal of eliciting a useful, positive outcome. In this vein, our “red team” will not play the role of a malicious actor by, say, attempting to elicit racist or sexist behaviour from the LLM that circumvents its system prompt. Rather, our participants will brainstorm realistic clinical scenarios in which LLMs may support information retrieval or decision-making, and highlight the subset of those scenarios in which the limitations of modern LLMs yield harm when prompted by well-intentioned users. For example, an LLM that incorrectly applies a clinical risk score equation to a series of patient biomarkers may lead the user to improperly estimate patient risk – and potentially result in inferior treatment decisions downstream – even though the user prompted the LLM without malicious intent."}),(0,s.jsx)("br",{}),this.state.isMobile?(0,s.jsxs)(p.Z,{p:2,border:1,boxShadow:3,children:[(0,s.jsx)("center",{style:{paddingBottom:"8px"},className:"text-lg",children:"Organizing Team"}),(0,s.jsx)("hr",{style:{paddingBottom:"8px"}}),(0,s.jsxs)(M.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(M.ZP,{item:!0,xs:12,children:(0,s.jsxs)(M.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(M.ZP,{item:!0,xs:6,children:(0,s.jsx)("center",{children:(0,s.jsx)("img",{src:"michael.jpg",style:{width:"50%"}})})}),(0,s.jsxs)(M.ZP,{item:!0,xs:6,children:[(0,s.jsx)("p",{className:"text-xl",children:"Michael Cooper"}),(0,s.jsx)("p",{className:"text-sm",children:"Ph.D. Student, University of Toronto"}),(0,s.jsx)(N.Z,{color:"inherit",href:"mailto:"+z("cs.toronto.edu","coopermj"),children:(0,s.jsx)(P.Z,{title:z("cs.toronto.edu","coopermj"),placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.FU$,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"https://michaeljohncooper.com",children:(0,s.jsx)(P.Z,{title:"Homepage",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.wp6,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"https://x.com/coopermj_aiml",children:(0,s.jsx)(P.Z,{title:"X (Twitter)",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:k.NCc,size:"xs"})})})]})]})}),(0,s.jsx)(M.ZP,{item:!0,xs:12,children:(0,s.jsxs)(M.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(M.ZP,{item:!0,xs:6,children:(0,s.jsx)("center",{children:(0,s.jsx)("img",{src:"vahid.png",style:{width:"50%"}})})}),(0,s.jsxs)(M.ZP,{item:!0,xs:6,children:[(0,s.jsx)("p",{className:"text-xl",children:"Vahid Balazadeh"}),(0,s.jsx)("p",{className:"text-sm",children:"Ph.D. Student, University of Toronto"}),(0,s.jsx)(N.Z,{color:"inherit",href:"mailto:"+z("cs.toronto.edu","vahid"),children:(0,s.jsx)(P.Z,{title:z("cs.toronto.edu","vahid"),placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.FU$,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"https://vahidbalazadeh.me",children:(0,s.jsx)(P.Z,{title:"Homepage",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.wp6,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"https://twitter.com/vahidbalazadeh",children:(0,s.jsx)(P.Z,{title:"X (Twitter)",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:k.NCc,size:"xs"})})})]})]})}),(0,s.jsx)(M.ZP,{item:!0,xs:12,children:(0,s.jsxs)(M.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(M.ZP,{item:!0,xs:6,children:(0,s.jsx)("center",{children:(0,s.jsx)("img",{src:"david.jpeg",style:{width:"50%"}})})}),(0,s.jsxs)(M.ZP,{item:!0,xs:6,children:[(0,s.jsx)("p",{className:"text-xl",children:"David Pellow"}),(0,s.jsx)("p",{className:"text-sm",children:"Postdoctoral Fellow, Vector Institute"}),(0,s.jsx)(N.Z,{color:"inherit",href:"mailto:"+z("vectorinstitute.ai","david.pellow"),children:(0,s.jsx)(P.Z,{title:z("vectorinstitute.ai","david.pellow"),placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.FU$,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"http://www.cs.tau.ac.il/~dpellow/",children:(0,s.jsx)(P.Z,{title:"Homepage",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.wp6,size:"xs"})})})]})]})}),(0,s.jsx)(M.ZP,{item:!0,xs:12,children:(0,s.jsxs)(M.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(M.ZP,{item:!0,xs:6,children:(0,s.jsx)("center",{children:(0,s.jsx)("img",{src:"rahul.jpg",style:{width:"50%"}})})}),(0,s.jsxs)(M.ZP,{item:!0,xs:6,children:[(0,s.jsx)("p",{className:"text-xl",children:"Rahul G. Krishnan"}),(0,s.jsx)("p",{className:"text-sm",children:"Assistant Professor, University of Toronto"}),(0,s.jsx)(N.Z,{color:"inherit",href:"mailto:"+z("cs.toronto.edu","rahulgk"),children:(0,s.jsx)(P.Z,{title:z("cs.toronto.edu","rahulgk"),placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.FU$,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"https://www.cs.toronto.edu/~rahulgk/",children:(0,s.jsx)(P.Z,{title:"Homepage",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.wp6,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"https://twitter.com/rahulgk",children:(0,s.jsx)(P.Z,{title:"X (Twitter)",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:k.NCc,size:"xs"})})})]})]})})]})]}):(0,s.jsxs)(p.Z,{p:2,border:1,boxShadow:3,children:[(0,s.jsx)("center",{style:{paddingBottom:"8px"},className:"text-lg",children:"Organizing Team"}),(0,s.jsx)("hr",{style:{paddingBottom:"8px"}}),(0,s.jsxs)(M.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(M.ZP,{item:!0,xs:6,children:(0,s.jsxs)(M.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(M.ZP,{item:!0,xs:4,children:(0,s.jsx)("img",{src:"michael.jpg",style:{width:"100%"}})}),(0,s.jsxs)(M.ZP,{item:!0,xs:8,children:[(0,s.jsx)("p",{className:"text-xl",children:"Michael Cooper"}),(0,s.jsx)("p",{className:"text-sm",children:"Ph.D. Student, University of Toronto"}),(0,s.jsxs)("center",{children:[(0,s.jsx)(N.Z,{color:"inherit",href:"mailto:"+z("cs.toronto.edu","coopermj"),children:(0,s.jsx)(P.Z,{title:z("cs.toronto.edu","coopermj"),placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.FU$,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"https://michaeljohncooper.com",children:(0,s.jsx)(P.Z,{title:"Homepage",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.wp6,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"https://x.com/coopermj_aiml",children:(0,s.jsx)(P.Z,{title:"X (Twitter)",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:k.NCc,size:"xs"})})})]})]})]})}),(0,s.jsx)(M.ZP,{item:!0,xs:6,children:(0,s.jsxs)(M.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(M.ZP,{item:!0,xs:4,children:(0,s.jsx)("img",{src:"vahid.png",style:{width:"100%"}})}),(0,s.jsxs)(M.ZP,{item:!0,xs:8,children:[(0,s.jsx)("p",{className:"text-xl",children:"Vahid Balazadeh"}),(0,s.jsx)("p",{className:"text-sm",children:"Ph.D. Student, University of Toronto"}),(0,s.jsxs)("center",{children:[(0,s.jsx)(N.Z,{color:"inherit",href:"mailto:"+z("cs.toronto.edu","vahid"),children:(0,s.jsx)(P.Z,{title:z("cs.toronto.edu","vahid"),placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.FU$,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"https://vahidbalazadeh.me",children:(0,s.jsx)(P.Z,{title:"Homepage",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.wp6,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"https://twitter.com/vahidbalazadeh",children:(0,s.jsx)(P.Z,{title:"X (Twitter)",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:k.NCc,size:"xs"})})})]})]})]})}),(0,s.jsx)(M.ZP,{item:!0,xs:12,children:(0,s.jsx)("hr",{})}),(0,s.jsx)(M.ZP,{item:!0,xs:6,children:(0,s.jsxs)(M.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(M.ZP,{item:!0,xs:4,children:(0,s.jsx)("img",{src:"david.jpeg",style:{width:"100%"}})}),(0,s.jsxs)(M.ZP,{item:!0,xs:8,children:[(0,s.jsx)("p",{className:"text-xl",children:"David Pellow"}),(0,s.jsx)("p",{className:"text-sm",children:"Postdoctoral Fellow, Vector Institute"}),(0,s.jsxs)("center",{children:[(0,s.jsx)(N.Z,{color:"inherit",href:"mailto:"+z("vectorinstitute.ai","david.pellow"),children:(0,s.jsx)(P.Z,{title:z("vectorinstitute.ai","david.pellow"),placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.FU$,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"http://www.cs.tau.ac.il/~dpellow/",children:(0,s.jsx)(P.Z,{title:"Homepage",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.wp6,size:"xs"})})})]})]})]})}),(0,s.jsx)(M.ZP,{item:!0,xs:6,children:(0,s.jsxs)(M.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(M.ZP,{item:!0,xs:4,children:(0,s.jsx)("img",{src:"rahul.jpg",style:{width:"100%"}})}),(0,s.jsxs)(M.ZP,{item:!0,xs:8,children:[(0,s.jsx)("p",{className:"text-xl",children:"Rahul G. Krishnan"}),(0,s.jsx)("p",{className:"text-sm",children:"Assistant Professor, University of Toronto"}),(0,s.jsxs)("center",{children:[(0,s.jsx)(N.Z,{color:"inherit",href:"mailto:"+z("cs.toronto.edu","rahulgk"),children:(0,s.jsx)(P.Z,{title:z("cs.toronto.edu","rahulgk"),placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.FU$,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"https://www.cs.toronto.edu/~rahulgk/",children:(0,s.jsx)(P.Z,{title:"Homepage",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:v.wp6,size:"xs"})})}),(0,s.jsx)(N.Z,{color:"inherit",href:"https://twitter.com/rahulgk",children:(0,s.jsx)(P.Z,{title:"X (Twitter)",placement:"top",arrow:!0,children:(0,s.jsx)(b.G,{icon:k.NCc,size:"xs"})})})]})]})]})})]})]})]}),(0,s.jsx)(u,{isMobile:this.state.isMobile})]})}constructor(e){super(e),this.state={isMobile:!1}}}}},function(e){e.O(0,[976,948,263,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);