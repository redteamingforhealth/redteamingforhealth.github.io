(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{962:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logistics",function(){return s(2226)}])},6794:function(e,t,s){"use strict";s.d(t,{Z:function(){return b}});var i=s(5893),n=s(1762),r=s.n(n),a=s(1822),l=s.n(a),o=s(7294),c=s(1571),d=s(7917),h=s(2405),x=s(5369),p=()=>{let{theme:e,setTheme:t}=(0,c.F)(),[s,n]=(0,o.useState)("dark"===e),[r,a]=(0,o.useState)(!1);return((0,o.useEffect)(()=>a(!0),[]),(0,o.useEffect)(()=>{t(s?"dark":"light")},[s,t]),r)?(0,i.jsx)(x.Z,{style:{maxWidth:"30px",maxHeight:"30px",minWidth:"30px",minHeight:"30px"},value:"check",selected:s,onChange:()=>{n(!s)},children:s?(0,i.jsx)(h.Z,{style:{height:"20px",fill:"white"}}):(0,i.jsx)(d.Z,{style:{height:"20px",fill:"black"}})}):null},m=s(4440),g=s(8069),j=s(4246),u=s(9603),f=s(3367),y=s(3024),w=s(9485);class b extends o.Component{componentDidMount(){this.setState({isMobile:this.props.isMobile})}componentDidUpdate(e){e.isMobile!==this.props.isMobile&&this.setState({isMobile:this.props.isMobile})}render(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css",className:"jsx-8ccc2f01db78c603"}),(0,i.jsx)(m.Z,{className:"dark:bg-gray-900 bg-white",style:{position:"fixed",bottom:0,width:"100%",zIndex:1e3},children:(0,i.jsxs)(g.Z,{variant:"dense",children:[(0,i.jsx)(f.Z,{color:"inherit",href:"https://x.com/RedteamHealthLM",children:(0,i.jsx)(w.Z,{title:"X (Twitter)",placement:"top",arrow:!0,children:(0,i.jsx)(u.G,{icon:y.NCc,size:"1x"})})}),(0,i.jsx)(j.Z,{variant:"h6",component:"div",sx:{flexGrow:1},className:r().className,style:{textAlign:"center",fontSize:"14px"},children:this.state.isMobile?(0,i.jsx)(i.Fragment,{children:"Made with ❤️ at UofT"}):(0,i.jsxs)(i.Fragment,{children:["Made with ❤️ at UofT (w/ a little help from ",(0,i.jsx)("a",{href:"https://nextjs.org",className:"jsx-8ccc2f01db78c603",children:"next.js"}),")."]})}),(0,i.jsx)(p,{})]})}),(0,i.jsx)(l(),{id:"8ccc2f01db78c603",children:"#heart.jsx-8ccc2f01db78c603{font-size:14px;text-decoration:none;cursor:text}"})]})}constructor(e){super(e),this.state={isMobile:e.isMobile}}}},1641:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var i=s(5893),n=s(2664),r=s.n(n);s(7294);var a=s(4440),l=s(8069),o=s(4246),c=s(8163);function d(){return(0,i.jsx)(a.Z,{children:(0,i.jsxs)(l.Z,{variant:"dense",children:[(0,i.jsx)(o.Z,{variant:"h6",component:"div",sx:{flexGrow:1}}),(0,i.jsx)(c.Z,{color:"inherit",href:"/",className:r().className+" text-md",children:"Home"}),(0,i.jsx)(c.Z,{color:"inherit",href:"/background",className:r().className+" text-md",children:"Background"}),(0,i.jsx)(c.Z,{color:"inherit",href:"/logistics",className:r().className+" text-md",children:"Logistics"}),(0,i.jsx)(c.Z,{color:"inherit",href:"/instructions",className:r().className+" text-md",children:"Instructions"})]})})}},2226:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d},obfuscate:function(){return c}});var i=s(5893),n=s(6794),r=s(1641),a=s(7294),l=s(8163),o=s(4440);function c(e,t){return t+"@"+e}class d extends a.Component{componentDidMount(){this.setState({isMobile:window.innerWidth<600}),window.addEventListener("resize",()=>{this.setState({isMobile:window.innerWidth<600})})}render(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("title",{children:"Red Teaming Large Language Models"}),(0,i.jsx)(r.Z,{}),(0,i.jsxs)("main",{style:{width:this.state.isMobile?"90%":"75%",margin:"auto"},children:[this.state.isMobile?(0,i.jsxs)(o.Z,{className:"center",display:"flex",justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(o.Z,{width:.4,p:2,alignContent:"center",children:(0,i.jsxs)("center",{children:[(0,i.jsx)("img",{src:"llm_redteam_icon_light.png",alt:"Light Mode",className:"block dark:hidden",style:{width:"125px"}}),(0,i.jsx)("img",{src:"llm_redteam_icon_dark.png",alt:"Dark Mode",className:"hidden dark:block",style:{width:"125px"}})]})}),(0,i.jsxs)(o.Z,{width:.6,p:1,children:[(0,i.jsx)("h1",{className:"text-xl",style:{paddingBottom:"8px"},children:"Red Teaming Large Language Models for Healthcare"}),(0,i.jsx)("p",{className:"text-sm",children:"Workshop at Machine Learning for Healthcare (MLHC), 2024"}),(0,i.jsx)("p",{className:"text-sm",children:"August 15, 2024, 1:00PM — 5:00PM"}),(0,i.jsx)("p",{className:"text-sm",children:(0,i.jsx)("a",{href:"https://map.utoronto.ca/?id=1809#!m/494470?share",children:"Room 1190, Bahen Centre for Information Technology, University of Toronto, Toronto, Ontario"})}),(0,i.jsx)("br",{}),(0,i.jsx)(l.Z,{variant:"contained",color:"primary",style:{backgroundColor:"secondary",color:"white",fontFamily:"latin"},href:"https://events.eventzilla.net/e/mlhc-preconference-workshop-2138630204",children:"Register Here"})]})]}):(0,i.jsxs)(o.Z,{className:"center",display:"flex",justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(o.Z,{width:.3,p:2,alignContent:"center",children:(0,i.jsxs)("center",{children:[(0,i.jsx)("img",{src:"llm_redteam_icon_light.png",alt:"Light Mode",className:"block dark:hidden",style:{width:"125px"}}),(0,i.jsx)("img",{src:"llm_redteam_icon_dark.png",alt:"Dark Mode",className:"hidden dark:block",style:{width:"125px"}})]})}),(0,i.jsxs)(o.Z,{width:.8,p:1,children:[(0,i.jsx)("h1",{className:"text-xl",style:{paddingBottom:"8px"},children:"Red Teaming Large Language Models for Healthcare"}),(0,i.jsx)("p",{className:"text-sm",children:"Workshop at Machine Learning for Healthcare (MLHC), 2024"}),(0,i.jsx)("p",{className:"text-sm",children:"August 15, 2024, 1:00PM — 5:00PM"}),(0,i.jsx)("p",{className:"text-sm",children:(0,i.jsx)("a",{href:"https://map.utoronto.ca/?id=1809#!m/494470?share",children:"Room 1190, Bahen Centre for Information Technology, University of Toronto, Toronto, Ontario"})}),(0,i.jsx)("br",{}),(0,i.jsx)(l.Z,{variant:"contained",color:"primary",style:{backgroundColor:"secondary",color:"white",fontFamily:"latin"},href:"https://events.eventzilla.net/e/mlhc-preconference-workshop-2138630204",children:"Register Here"})]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("hr",{style:{width:"70%",margin:"auto"}}),(0,i.jsx)("br",{}),(0,i.jsx)("h2",{style:{paddingBottom:"8px"},className:"text-xl",children:"Location"}),(0,i.jsxs)("p",{style:{paddingBottom:"6px"},children:["We will begin by convening in Room 1190 of the Bahen Centre at the University of Toronto. The Bahen Centre is located at 40 St. George Street. An interactive map of the campus highlighting the Bahen Centre is available ",(0,i.jsx)("a",{href:"https://map.utoronto.ca/?id=1809#!m/494470?share",children:"here"}),"."]}),(0,i.jsx)("p",{children:"The red teaming portion of the workshop will comprise breakout sessions hosted in Rooms 2185 and 2195 of the Bahen Centre. After introductions and splitting into red teaming small groups, directions to these rooms will be provided."}),(0,i.jsx)("h2",{style:{paddingBottom:"8px",paddingTop:"8px"},className:"text-xl",children:"Workshop Schedule"}),(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{style:{width:"150px"},children:"1:00PM — 2:00PM"}),(0,i.jsx)("td",{style:{paddingLeft:"15px"},children:"Sponsored Talks by the American Medical Association"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"2:00PM — 2:30PM"}),(0,i.jsx)("td",{style:{paddingLeft:"15px"},children:"Activity Overview; Getting Acquainted with Language Models"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"2:30PM — 4:00PM"}),(0,i.jsx)("td",{style:{paddingLeft:"15px"},children:"Interactive Red Teaming Exercise in Breakout Groups"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"4:00PM — 4:30PM"}),(0,i.jsx)("td",{style:{paddingLeft:"15px"},children:"Sharing Harmful Prompts; Discussion of Safeguards"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"4:30PM — 5:00PM"}),(0,i.jsx)("td",{style:{paddingLeft:"15px"},children:"Conclusion"})]})]})}),(0,i.jsx)("br",{}),(0,i.jsx)("h2",{style:{paddingBottom:"8px"},className:"text-xl",children:"What to Bring"}),(0,i.jsxs)("ul",{style:{paddingLeft:"15px"},children:[(0,i.jsx)("li",{style:{listStyleType:"disc"},children:"All Participants: Laptop"}),(0,i.jsx)("li",{style:{listStyleType:"disc"},children:"Clinicians: come prepared to share with your group your daily workflow and to brainstorm ways in which LLMs may integrate with these processes. This will help ground the exercise in real-world use cases."})]}),(0,i.jsx)("br",{}),(0,i.jsx)("h2",{style:{paddingBottom:"8px"},className:"text-xl",children:"Red Teaming Overview"}),"The below slides present an overview of the activity and some exemplar classes of vulnerability. We'll go over them during the workshop, but they make for some handy pre-workshop reading.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{children:(0,i.jsx)("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vRNyN3ybP9iETPVG310AxYF6lQWJs_P5guxGG8xSUty2ZsSwY3F49G6Wfpkp5RSSxDnnG927cS6PyNA/embed?start=false&loop=false&delayms=3000",width:"100%",height:"450",allowFullScreen:!0})}),(0,i.jsx)("br",{})]}),(0,i.jsx)(n.Z,{isMobile:this.state.isMobile})]})}constructor(e){super(e),this.state={isMobile:!1}}}}},function(e){e.O(0,[948,594,888,774,179],function(){return e(e.s=962)}),_N_E=e.O()}]);