(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{123:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(10),c=t.n(i),a=t(160),o=t(4),s=t(5);function d(){var n=Object(o.a)(["\n  border-radius: 5px;\n  background: ",";\n  white-space: nowrap;\n  padding: ",";\n  color: var(--white);\n  font-size: 16px;\n  font-weight: 600;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  \n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n  &:hover {\n    transition: all 0.3s ease-out;\n    background: #fff;\n    background-color: ",";\n    color: ",";\n  }\n  @media screen and (max-width: 768px) {\n    width: 80%;\n  }\n"]);return d=function(){return n},n}function l(){var n=Object(o.a)(["\n  z-index: 1;\n  width: 100%;\n  max-width: 1300px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 50px;\n  padding-left: 50px;\n  @media screen and (max-width: 768px) {\n    padding-right: 30px;\n    padding-left: 30px;\n  }\n"]);return l=function(){return n},n}function b(){var n=Object(o.a)(["\n  font-size: 36px;\n  color: var(--primary);\n  font-weight: bold;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  text-align: center;\n  margin-bottom: 20px;\n"]);return b=function(){return n},n}function j(){var n=Object(o.a)(["\n*{\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Nunito', sans-serif;\n  --primary : #5C0090;\n  --blue : #2D283E;\n  --grey: #777;\n  --white: #fff;\n  --black: #000;\n}\n"]);return j=function(){return n},n}var x=Object(s.a)(j()),u=s.b.h1(b()),h=s.b.div(l()),p=s.b.button(d(),(function(n){return n.blue?"var(--blue)":"var(--primary)"}),(function(n){return n.big?"12px 50px":"10px 30px"}),(function(n){return n.blue?"var(--primary)":"var(--blue)"}),(function(n){return n.white?"var(--primary)":"var(--white)"})),f=x,g=t(82),O=Object(g.a)({palette:{primary:{main:"#5C0090"},secondary:{main:"#2D283E"}},typography:{fontFamily:"Nunito",fontSize:"14",h1:{fontSize:36,fontFamily:"Skranji",fontWeight:"500",textShadow:"0 4 4rem rgba(0, 0, 0, .25)"},p:{fontsize:14,fontWeight:600}}}),m=t(2),v=t.n(m),w=t(21),y=t(54),k=t(164),S=t(153),C=Object(k.a)((function(n){n.color;var e=Object(y.a)(n,["color"]);return Object(r.jsx)(S.a,Object(w.a)({},e))}))({background:function(n){return"secondary"===n.color?"linear-gradient(45deg, #2D283E 30%, #2D283E 90%)":"linear-gradient(45deg, #5C0090 30%, #5C0090 90%)"},border:0,borderRadius:5,boxShadow:function(n){return"secondary"===n.color?"0 3px 5px 2px rgba(45, 40, 62, .2)":"0 3px 5px 2px rgba(92, 0, 144, .2)"},color:"white",height:40,padding:"0 30px",margin:8,fontWeight:600}),N=t(62),T=t(33),z=t(155),B=t(156),E=t(157),L=t(159),R=t(158),I=t(163),F=t(161),A=t(77),D=t.n(A),P=t(7),U=t(11),M=Object(z.a)((function(n){return{navsolid:{background:"#fff",color:"#5C0090"},nav:{background:function(n){return"transparent"===n.color?"transparent":"#fff"},color:function(n){return"transparent"===n.color?"#ffffff":"#5C0090"},justifyContent:"center",boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .1)",height:80,width:"100%"},toolbar:Object(T.a)({marginLeft:"10%",marginRight:"10%"},n.breakpoints.down("sm"),{marginLeft:"0%",marginRight:"0%"}),grow:{flexGrow:1},menuButton:{marginRight:n.spacing(2)},title:Object(T.a)({display:"none"},n.breakpoints.up("md"),{display:"block"}),sectionDesktop:Object(T.a)({display:"none"},n.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(T.a)({display:"flex"},n.breakpoints.up("md"),{display:"none"}),link:Object(T.a)({textDecoration:"none",color:"inherit"},n.breakpoints.down("sm"),{color:"inherit"})}}));function W(n){n.color;var e=Object(y.a)(n,["color"]),t=M(n),i=M(),c=v.a.useState(null),a=Object(N.a)(c,2),o=a[0],s=a[1],d=Boolean(o),l=v.a.useState("navsolid"),b=Object(N.a)(l,2),j=b[0],x=b[1],u=v.a.useRef();u.current=j;window.addEventListener("scroll",(function(){window.scrollY>100?x("nav"):x("navsolid")}));var h="primary-search-account-menu-mobile",p=Object(r.jsxs)(F.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:h,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:function(){s(null)},children:[Object(r.jsx)(I.a,{children:Object(r.jsx)(U.b,{className:i.link,to:"/",children:"Courses"})}),Object(r.jsx)(I.a,{children:Object(r.jsx)(U.b,{className:i.link,to:"/",children:"Tracks"})}),Object(r.jsx)(I.a,{children:Object(r.jsx)(U.b,{className:i.link,to:"/",children:"Blog"})}),Object(r.jsx)(I.a,{children:Object(r.jsx)(U.b,{className:i.link,to:"/login",children:"Login"})}),Object(r.jsx)(I.a,{children:Object(r.jsx)(U.b,{className:i.link,to:"/signup",children:"Signup"})})]});return Object(r.jsxs)("div",{className:i.grow,children:[Object(r.jsx)(B.a,Object(w.a)(Object(w.a)({position:"fixed",className:Object(P.a)(t.nav,i[u.current])},e),{},{children:Object(r.jsxs)(E.a,{className:i.toolbar,children:[Object(r.jsx)(U.b,{className:i.link,path:"/",children:Object(r.jsx)(R.a,{variant:"h1",noWrap:!0,children:"COURSENATOR"})}),Object(r.jsx)("div",{className:i.grow}),Object(r.jsxs)("div",{className:i.sectionDesktop,children:[Object(r.jsx)(I.a,{children:Object(r.jsx)(U.b,{className:i.link,to:"/",children:"Courses"})}),Object(r.jsx)(I.a,{children:Object(r.jsx)(U.b,{className:i.link,to:"/",children:"Tracks"})}),Object(r.jsx)(I.a,{children:Object(r.jsx)(U.b,{className:i.link,to:"/",children:"Blogs"})}),Object(r.jsx)(I.a,{children:Object(r.jsx)(U.b,{className:i.link,to:"/login",children:"Login"})}),Object(r.jsx)(C,{color:"white",children:Object(r.jsx)(U.b,{className:i.link,to:"/signup",children:"Signup"})})]}),Object(r.jsx)("div",{className:i.sectionMobile,children:Object(r.jsx)(L.a,{"aria-label":"show more","aria-controls":h,"aria-haspopup":"true",onClick:function(n){s(n.currentTarget)},color:"inherit",children:Object(r.jsx)(D.a,{})})})]})})),p]})}var Y=t.p+"static/media/desktopBg.6473ab7f.png";function _(){var n=Object(o.a)(["\n  margin-right: -43%;\n  @media screen and (max-width: 960px){\n    margin-right: 0;\n    width: 50%;\n  }\n"]);return _=function(){return n},n}function G(){var n=Object(o.a)(["\n    width: 850px;\n    height : 50px;\n    padding: 8px 30px;\n    border-radius: 25px;\n    margin-top: 25px;\n    outline: none;\n    font-size: 16px;\n    margin-bottom: 25px;\n    border: 0.5px solid var(--primary);\n    filter: drop-shadow(10px 10px 40px rgba(0, 0, 0, 0.30));\n    @media screen and (max-width: 960px){\n        width: 80%;\n        height: auto;\n    }\n"]);return G=function(){return n},n}function H(){var n=Object(o.a)(["\n  margin-top: -65px;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);\n  color: var(--white);\n  @media screen and (max-width: 960px){\n    font-size: 20px;\n  }\n"]);return H=function(){return n},n}function J(){var n=Object(o.a)(["\n  background: url(",") center center/cover no-repeat; \n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);\n  object-fit: contain;\n"]);return J=function(){return n},n}var K=s.b.div(J(),Y),Q=Object(s.b)(u)(H()),V=s.b.input(G()),X=Object(s.b)(p)(_());var $=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(K,{children:[Object(r.jsx)(Q,{children:"KICKSTART YOUR LEARNING TODAY!"}),Object(r.jsx)(V,{placeholder:"Search thousands of courses"}),Object(r.jsx)(X,{big:!0,primary:!0,children:"Search"})]})})};function q(){var n=Object(o.a)(["\n  padding: ",";\n  margin-left: 25px;\n  @media screen and (max-width: 960px){\n    margin-top: 10px;\n    margin-left: 10%;\n    width: 80%;\n  }\n\n"]);return q=function(){return n},n}function Z(){var n=Object(o.a)(["\n  text-align:center;\n  max-width: 440px;\n  margin-bottom: 25px;\n  font-size: 18px;\n  line-height: 24px;\n  color: ",";\n  text-shadow: ",";\n  font-weight: ",";\n"]);return Z=function(){return n},n}function nn(){var n=Object(o.a)(["\n  padding-right: 0;\n  border: 0;\n  max-width: 100%;\n  vertical-align: middle;\n  display: inline-block;\n  max-height: 500px;\n  @media screen and (max-width : 768px){\n    padding : 25px;\n    max-height: 450px;\n    max-width : 500px;\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(o.a)(["\n  max-width: 700px;\n  display: flex;\n  justify-content: ",";\n"]);return en=function(){return n},n}function tn(){var n=Object(o.a)(["\n  max-width: 500  px;\n  padding-top: 0;\n  padding-left : 15%;\n  @media screen and (max-width : 768px){\n    padding-left : 0;\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(o.a)(["\n  margin-bottom: 15px;\n  padding-right: 15px;\n  padding-left: 15px;\n  flex: 1;\n  max-width: 50%;\n  flex-basis: 50%;\n  @media screen and (max-width: 768px) {\n    max-width: 100%;\n    flex-basis: 100%;\n    display: flex;\n    justify-content: center;\n  }\n"]);return rn=function(){return n},n}function cn(){var n=Object(o.a)(["\n  display: flex;\n  margin: 0 -15px -15px -15px;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: ",";\n"]);return cn=function(){return n},n}function an(){var n=Object(o.a)(["\n  color: var(--white);\n  padding: 160px 0;\n  background: var(--white);\n"]);return an=function(){return n},n}var on=s.b.div(an()),sn=s.b.div(cn(),(function(n){return n.imgStart?"row-reverse":"row"})),dn=s.b.div(rn()),ln=s.b.div(tn()),bn=s.b.div(en(),(function(n){return n.start?"flex-start":"flex-end"})),jn=s.b.img(nn()),xn=s.b.p(Z(),(function(n){return n.black?"#000; ":"var(--grey)"}),(function(n){return n.dropshadow?"5px 4px 4px rgba(0, 0, 0, 0.20); ":"none"}),(function(n){return n.bold?"bold; ":"none"})),un=Object(s.b)(p)(q(),(function(n){return n.bigger?"10px 55px":"10px 30px"})),hn=t.p+"static/media/logos.f75148cb.svg";var pn=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(on,{children:Object(r.jsx)(h,{children:Object(r.jsxs)(sn,{imgStart:!0,children:[Object(r.jsx)(dn,{children:Object(r.jsxs)(ln,{children:[Object(r.jsx)(xn,{bold:!0,dropshadow:!0,children:"Coursenator aggregates courses from the best online learning platforms including edX, Coursera, Udemy, NPTEL and over 15 others."}),Object(r.jsx)(xn,{black:!0,children:"Browse from thousands of indexed courses from the best providers. All in one catalogue. Search by popularity, reviews, languages, teacher, pricing, and start date. See our list of curated courses handpicked by our team of MOOC enthusiasts."}),Object(r.jsx)(U.b,{to:"/",children:Object(r.jsx)(un,{blue:!0,big:!0,children:"Explore Catalogue"})}),Object(r.jsx)(U.b,{to:"/",children:Object(r.jsx)(un,{blue:!0,bigger:!0,children:"Read Blog"})})]})}),Object(r.jsx)(dn,{children:Object(r.jsx)(bn,{start:!0,children:Object(r.jsx)(jn,{src:hn,alt:"Websites"})})})]})})})})},fn=t(23),gn=t(79),On=t(78);function mn(){var n=Object(o.a)(["\n    width: 28px;\n    height: 28px;\n"]);return mn=function(){return n},n}function vn(){var n=Object(o.a)(["\n    width: 32px;\n    height: 32px;\n"]);return vn=function(){return n},n}function wn(){var n=Object(o.a)(["\n    width: 32px;\n    height: 32px;\n"]);return wn=function(){return n},n}function yn(){var n=Object(o.a)(["\n  margin-bottom: 5px;\n  font-size: 20px;\n  color: #000;\n"]);return yn=function(){return n},n}function kn(){var n=Object(o.a)(["\n  font-size: 16px;\n  margin-bottom: 24px;\n  text-align: center;\n  margin-top: 15px;\n"]);return kn=function(){return n},n}function Sn(){var n=Object(o.a)(["\n  color: var(--primary);\n  margin: 15px 0;\n"]);return Sn=function(){return n},n}function Cn(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 270px;\n  padding: 24px;\n  align-items: center;\n  color: var(--grey);\n"]);return Cn=function(){return n},n}function Nn(){var n=Object(o.a)(["\n  background: var(--white);\n  box-shadow: 0px 4px 15px rgba(125, 125, 125, 0.5);\n  width: 280px;\n  height: 270px;\n  text-decoration: none;\n  border-radius: 30px;\n  &:nth-child(2) {\n    margin: 24px;\n  }\n  &:hover {\n    transform: scale(1.06);\n    transition: all 0.3s ease-out;\n  }\n  @media screen and (max-width: 768px) {\n    width: 90%;\n    &:hover {\n      transform: none;\n    }\n  }\n"]);return Nn=function(){return n},n}function Tn(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    padding-bottom : 25px;\n  }\n"]);return Tn=function(){return n},n}function zn(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  @media screen and (max-width: 768px) {\n    margin: 0 30px;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return zn=function(){return n},n}function Bn(){var n=Object(o.a)(["\n  padding: 0 0 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: var(--white);\n"]);return Bn=function(){return n},n}var En=s.b.div(Bn()),Ln=s.b.div(zn()),Rn=s.b.div(Tn()),In=Object(s.b)(U.b)(Nn()),Fn=s.b.div(Cn()),An=s.b.div(Sn()),Dn=s.b.p(kn()),Pn=s.b.h3(yn()),Un=Object(s.b)(On.a)(wn()),Mn=Object(s.b)(gn.a)(vn()),Wn=Object(s.b)(fn.e)(mn());var Yn=function(){return Object(r.jsx)(En,{children:Object(r.jsx)(Ln,{children:Object(r.jsxs)(Rn,{children:[Object(r.jsx)(In,{to:"/",children:Object(r.jsxs)(Fn,{children:[Object(r.jsx)(An,{children:Object(r.jsx)(Un,{})}),Object(r.jsx)(Pn,{children:"Discover"}),Object(r.jsx)(Dn,{children:"Browse from our curated list of courses. New courses added everday."})]})}),Object(r.jsx)(In,{to:"/",children:Object(r.jsxs)(Fn,{children:[Object(r.jsx)(An,{children:Object(r.jsx)(Mn,{})}),Object(r.jsx)(Pn,{children:"Tracks"}),Object(r.jsx)(Dn,{children:"Create custom learning paths. See what others are learning and share your own journey."})]})}),Object(r.jsx)(In,{to:"/",children:Object(r.jsxs)(Fn,{children:[Object(r.jsx)(An,{children:Object(r.jsx)(Wn,{})}),Object(r.jsx)(Pn,{children:"Share"}),Object(r.jsx)(Dn,{children:"Share your achievements with others. One-click share to LinkedIn and YourAcclaim."})]})})]})})})},_n=t(27),Gn=t(28),Hn=t(31),Jn=t(29),Kn=t(80),Qn=t.n(Kn),Vn=(t(69),t.p+"static/media/arrowRight.96a7fd32.svg"),Xn=t.p+"static/media/arrowLeft.0b4efe05.svg";function $n(){var n=Object(o.a)(["\n    margin-top : 50px;\n    margin-left : 40%;\n    @media screen and (max-width : 768px){\n      margin-left : 10%;\n      width : 80%;\n    }\n"]);return $n=function(){return n},n}function qn(){var n=Object(o.a)(["\n  height : 750px;\n  ","\n"]);return qn=function(){return n},n}function Zn(){var n=Object(o.a)(["\n  padding : 30px;\n  text-align: center;\n  color : var(--grey);\n"]);return Zn=function(){return n},n}function ne(){var n=Object(o.a)(["\n  height: 160px;\n  ","\n"]);return ne=function(){return n},n}var ee=Object(s.b)(h)(ne(),h),te=s.b.p(Zn()),re=Object(s.b)(h)(qn(),h),ie=Object(s.b)(p)($n()),ce=[{name:"Data Science"},{name:"Business"},{name:"Humanities"},{name:"Art and Design"},{name:"Programming"},{name:"Personal Development"},{name:"Health & Nutrition"},{name:"Language Learning"},{name:"Computer Science"},{name:"Information Technology"},{name:"Social Science"},{name:"Physical Science & Engineering"},{name:"Education & Teaching"}],ae=function(n){var e=n.text,t=n.selected;return Object(r.jsx)("div",{className:"menu-item ".concat(t?"active":" "),children:e})},oe="Data Science",se=function(n){Object(Hn.a)(t,n);var e=Object(Jn.a)(t);function t(n){var i,c;return Object(_n.a)(this,t),(i=e.call(this,n)).state={selected:oe},i.onSelect=function(n){i.setState({selected:n})},i.menuItems=(c=oe,ce.map((function(n){var e=n.name;return Object(r.jsx)(ae,{text:e,selected:c},e)}))),i}return Object(Gn.a)(t,[{key:"render",value:function(){var n=this.state.selected,e=this.menuItems;return Object(r.jsx)(ee,{children:Object(r.jsxs)("div",{className:"item",children:[Object(r.jsx)(Qn.a,{data:e,arrowLeft:Object(r.jsx)("div",{style:{width:"24px",height:"24px"},children:Object(r.jsx)("img",{src:Xn,alt:"<"})}),arrowRight:Object(r.jsx)("div",{style:{width:"24px",height:"24px"},children:Object(r.jsx)("img",{src:Vn,alt:">"})}),selected:n,onSelect:this.onSelect,wheel:!1,alignCenter:!1}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{onChange:this.setSelected,children:Object(r.jsx)(te,{children:n})})})]})})}}]),t}(m.Component),de=t.p+"static/media/Left.248a423f.svg",le=t.p+"static/media/Right.423c62de.svg",be=t.p+"static/media/placeholder.08399b54.png",je=(t(104),t(105),t(81)),xe=t.n(je),ue=function(n){Object(Hn.a)(t,n);var e=Object(Jn.a)(t);function t(){return Object(_n.a)(this,t),e.apply(this,arguments)}return Object(Gn.a)(t,[{key:"render",value:function(){var n={arrows:!0,infinite:!1,speed:500,slidesToShow:3,slidesToScroll:3,nextArrow:Object(r.jsx)("img",{src:le,alt:" > "}),prevArrow:Object(r.jsx)("img",{src:de,alt:" < "}),responsive:[{breakpoint:1920,settings:{slidesToShow:3,slidesToScroll:3,dots:!0}},{breakpoint:1080,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2,dots:!0}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(xe.a,Object(w.a)(Object(w.a)({},n),{},{children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:be,alt:"imageOne"})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:be,alt:"imageTwo"})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:be,alt:"imageOne"})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:be,alt:"imageOne"})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:be,alt:"imageTwo"})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:be,alt:"imageOne"})})]}))})}}]),t}(m.Component);var he=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(re,{children:[Object(r.jsx)(u,{children:" Subjects "}),Object(r.jsx)(se,{}),Object(r.jsx)(ue,{}),Object(r.jsx)(ie,{children:" Browse all subjects"})]})})};function pe(){var n=Object(o.a)(["\n  color: #fff;\n  font-size: 32px;\n"]);return pe=function(){return n},n}function fe(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 240px;\n  margin-left: 37%;\n  @media screen and (max-width: 1100px){\n    margin-right : 37%;\n  }\n"]);return fe=function(){return n},n}function ge(){var n=Object(o.a)(["\n  background : #fff;\n  color : #fff;\n  border: 0.2px solid rgba(255, 255, 255, 0.5);\n  opacity : 0.2 ;\n  width : 300px;  \n"]);return ge=function(){return n},n}function Oe(){var n=Object(o.a)(["\n  color: #fff;\n  margin-bottom: 16px;\n"]);return Oe=function(){return n},n}function me(){var n=Object(o.a)(["\n  margin-right: 10px;\n"]);return me=function(){return n},n}function ve(){var n=Object(o.a)(["\n  color: #fff;\n  justify-self: start;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n"]);return ve=function(){return n},n}function we(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  max-width: 1000px;\n  margin: 40px auto 0 auto;\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  }\n"]);return we=function(){return n},n}function ye(){var n=Object(o.a)(["\n  max-width: 1000px;\n  width: 100%;\n"]);return ye=function(){return n},n}function ke(){var n=Object(o.a)(["\n  color: #fff;\n  text-decoration: none;\n  margin-bottom: 0.5rem;\n  &:hover {\n    color: var(--grey);\n    transition: 0.3s ease-out;\n  }\n  \n"]);return ke=function(){return n},n}function Se(){var n=Object(o.a)(["\n  font-size : 16px;\n  margin-bottom: 16px;\n"]);return Se=function(){return n},n}function Ce(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 20px;\n  text-align: left;\n  width: 240px;\n  box-sizing: border-box;\n  color: #fff;\n  @media screen and (max-width: 1100px) {\n    margin: 0;\n    padding: 10px;\n    width: 80%;\n  }\n"]);return Ce=function(){return n},n}function Ne(){var n=Object(o.a)(["\n  display: flex;\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items : center;\n  }\n"]);return Ne=function(){return n},n}function Te(){var n=Object(o.a)(["\n  width: 100%;\n  max-width: 1000px;\n  display: flex;\n  justify-content: center;\n  @media screen and (max-width: 768px) {\n    padding-top: 32px;\n  }\n"]);return Te=function(){return n},n}function ze(){var n=Object(o.a)(["\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin-right: 10px;\n  outline: none;\n  border: none;\n  font-size: 16px;\n  border: 1px solid #fff;\n  &::placeholder {\n    color: #242424;\n  }\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    margin: 0 0 16px 0;\n  }\n"]);return ze=function(){return n},n}function Be(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    width: 80%;\n  }\n"]);return Be=function(){return n},n}function Ee(){var n=Object(o.a)(["\n  font-size: 14px;\n"]);return Ee=function(){return n},n}function Le(){var n=Object(o.a)(["\n  margin-bottom: 24px;\n  font-size: 24px;\n  @media screen and (max-width : 980 px){\n    align-items : center;\n  }\n"]);return Le=function(){return n},n}function Re(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 24px;\n  padding: 24px;\n  color: #fff;\n"]);return Re=function(){return n},n}function Ie(){var n=Object(o.a)(["\n  background-color: #101522;\n  padding: 4rem 0 2rem 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Ie=function(){return n},n}var Fe=s.b.div(Ie()),Ae=s.b.section(Re()),De=s.b.p(Le()),Pe=s.b.p(Ee()),Ue=s.b.form(Be()),Me=s.b.input(ze()),We=s.b.div(Te()),Ye=s.b.div(Ne()),_e=s.b.div(Ce()),Ge=s.b.h2(Se()),He=Object(s.b)(U.b)(ke()),Je=s.b.section(ye()),Ke=s.b.div(we()),Qe=(Object(s.b)(U.b)(ve()),Object(s.b)(fn.d)(me()),s.b.small(Oe()),s.b.div(ge())),Ve=s.b.div(fe()),Xe=s.b.a(pe());function $e(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n  }\n"]);return $e=function(){return n},n}function qe(){var n=Object(o.a)(["\n  background : var(--white);\n  color : #4B4E54;\n  margin-left: 30%;\n  @media screen and (max-width : 768px){\n    width : 50% ;\n    margin-left : 25%;\n  }\n"]);return qe=function(){return n},n}function Ze(){var n=Object(o.a)(["\n  width: 340px;\n  height : 45px;\n  padding: 8px 30px;\n  border-radius: 15px;\n  outline: none;\n  font-size: 14px;\n  margin-bottom: 25px;\n  color : var(--grey);\n  @media screen and (max-width: 768px){\n      margin-left:25%;\n    }\n"]);return Ze=function(){return n},n}function nt(){var n=Object(o.a)(["\n  margin-top : -60px;\n  padding: 45px;\n"]);return nt=function(){return n},n}function et(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  @media screen and (max-width: 768px) {\n    margin: 0 30px;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return et=function(){return n},n}function tt(){var n=Object(o.a)(["\n  color : var(--white);\n  text-align : center;\n"]);return tt=function(){return n},n}function rt(){var n=Object(o.a)(["\n  padding : 25px;\n  margin-left:20%;\n"]);return rt=function(){return n},n}function it(){var n=Object(o.a)(["\n  color : var(--white);\n  font-weight : 300px;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  text-align: center;\n"]);return it=function(){return n},n}function ct(){var n=Object(o.a)(["\n  background: #4B4E54;\n  box-shadow: 0px 0px 30px rgba(125, 125, 125, 0.5);\n  border-radius: 49.4986px 2.23542px;\n  text-decoration: none;\n  height : 420px;\n  width : 420px;\n"]);return ct=function(){return n},n}function at(){var n=Object(o.a)(["\n  margin-top : -10% ;\n  color: var(--white);\n  padding: 80px 0;\n  background: var(--white);\n"]);return at=function(){return n},n}var ot=s.b.div(at()),st=s.b.div(ct()),dt=(s.b.h2(it()),s.b.div(rt())),lt=s.b.p(tt()),bt=s.b.div(et()),jt=s.b.div(nt()),xt=s.b.input(Ze()),ut=Object(s.b)(p)(qe()),ht=s.b.div($e()),pt=t.p+"static/media/blogs.2603b6aa.svg",ft=t.p+"static/media/Newsletter.dbca1993.svg";var gt=function(){return Object(r.jsxs)(ot,{children:[Object(r.jsx)(u,{children:"Get all the latest news and articles"}),Object(r.jsx)(ht,{children:Object(r.jsxs)(sn,{children:[Object(r.jsx)(dn,{children:Object(r.jsx)(bt,{children:Object(r.jsxs)(st,{children:[Object(r.jsx)(dt,{children:Object(r.jsx)("img",{src:ft,alt:"Coursenator Newsletter"})}),Object(r.jsx)(jt,{children:Object(r.jsx)(lt,{children:"Subscribe to our Coursenator NewsLetter for the latest updates on Online Education news and articles"})}),Object(r.jsx)(Ue,{children:Object(r.jsx)(xt,{placeholder:"Enter your email and recieve our newsletter"})}),Object(r.jsx)(ut,{children:"Sign up for free"})]})})}),Object(r.jsx)(dn,{children:Object(r.jsx)(bn,{children:Object(r.jsx)(jn,{src:pt,alt:"Blogs"})})})]})})]})},Ot=t.p+"static/media/SubjectPlaceholder.37481394.svg";function mt(){var n=Object(o.a)(["\n    width : 225px;\n    height : 250px;\n    border-radius : 0;\n    margin: 3%;\n"]);return mt=function(){return n},n}function vt(){var n=Object(o.a)(["\n    margin-top: -20px;\n    width : 225px;\n    height: 175px;\n\n"]);return vt=function(){return n},n}var wt=s.b.img(vt()),yt=Object(s.b)(In)(mt());var kt=function(){return Object(r.jsxs)(En,{children:[Object(r.jsx)(u,{children:" Top courses of all time "}),Object(r.jsxs)(Ln,{children:[Object(r.jsxs)(Rn,{children:[Object(r.jsx)(yt,{to:"/",children:Object(r.jsx)(Fn,{children:Object(r.jsx)(wt,{src:Ot})})}),Object(r.jsx)(yt,{to:"/",children:Object(r.jsx)(Fn,{children:Object(r.jsx)(wt,{src:Ot})})}),Object(r.jsx)(yt,{to:"/",children:Object(r.jsx)(Fn,{children:Object(r.jsx)(wt,{src:Ot})})}),Object(r.jsx)(yt,{to:"/",children:Object(r.jsx)(Fn,{children:Object(r.jsx)(wt,{src:Ot})})})]}),Object(r.jsxs)(Rn,{children:[Object(r.jsx)(yt,{to:"/",children:Object(r.jsx)(Fn,{children:Object(r.jsx)(wt,{src:Ot})})}),Object(r.jsx)(yt,{to:"/",children:Object(r.jsx)(Fn,{children:Object(r.jsx)(wt,{src:Ot})})}),Object(r.jsx)(yt,{to:"/",children:Object(r.jsx)(Fn,{children:Object(r.jsx)(wt,{src:Ot})})}),Object(r.jsx)(yt,{to:"/",children:Object(r.jsx)(Fn,{children:Object(r.jsx)(wt,{src:Ot})})})]}),Object(r.jsx)(p,{big:!0,children:"Browse top courses"})]})]})};function St(){var n=Object(o.a)(["\n    flex-direction: row;\n    width : auto;\n    padding-bottom : 15px;\n\n"]);return St=function(){return n},n}function Ct(){var n=Object(o.a)(["\n    border : none;\n    outline : none;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 5px;\n    margin-right : 10px;\n"]);return Ct=function(){return n},n}function Nt(){var n=Object(o.a)(["\n    padding-bottom : 15px;\n"]);return Nt=function(){return n},n}function Tt(){var n=Object(o.a)(["\n    width: 500px;\n    height : 50px;\n    padding: 8px 30px;\n    border-radius: 25px;\n    outline: none;\n    font-size: 16px;\n    margin-bottom: 25px;\n    border: 0.5px solid grey;\n    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));\n    @media screen and (max-width: 960px){\n        width : auto;\n        height: auto;\n    }\n"]);return Tt=function(){return n},n}function zt(){var n=Object(o.a)(["\n    margin-top : 25px;\n    background: var(--white);\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);\n    border-radius: 30px;\n    position : flex;\n    flex-direction : column;\n    justify-content : center;\n    align-items : center;\n    display : flex;\n    width : fit-content;\n    height : fit-content ;\n    padding : 50px;\n    color : var(--grey);\n"]);return zt=function(){return n},n}function Bt(){var n=Object(o.a)(["\n  background-color: whitesmoke  ; \n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  object-fit: contain;\n  color : white;\n"]);return Bt=function(){return n},n}var Et=s.b.div(Bt()),Lt=s.b.form(zt()),Rt=s.b.input(Tt()),It=s.b.label(Nt()),Ft=(s.b.input(Ct()),s.b.div(St())),At=t(162),Dt=Object(z.a)({root:{"&:hover":{backgroundColor:"transparent"}},icon:{borderRadius:3,width:20,height:20,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"var(--primary)",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:20,height:20,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",content:'""'},"input:hover ~ &":{backgroundColor:"var(--blue)"}}});var Pt=function(n){var e=Dt();return Object(r.jsx)(At.a,Object(w.a)({className:e.root,disableRipple:!0,color:"default",checkedIcon:Object(r.jsx)("span",{className:Object(P.a)(e.icon,e.checkedIcon)}),icon:Object(r.jsx)("span",{className:e.icon}),inputProps:{"aria-label":"decorative checkbox"}},n))},Ut=function(n){Object(Hn.a)(t,n);var e=Object(Jn.a)(t);function t(){return Object(_n.a)(this,t),e.apply(this,arguments)}return Object(Gn.a)(t,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Et,{children:Object(r.jsxs)(Lt,{children:[Object(r.jsx)(u,{children:"Sign Up"}),Object(r.jsx)(Rt,{placeholder:"Username"}),Object(r.jsx)(Rt,{placeholder:"E-mail"}),Object(r.jsx)(Rt,{placeholder:"Password"}),Object(r.jsx)(Rt,{placeholder:"Confirm Password"}),Object(r.jsxs)(Ft,{children:[Object(r.jsx)(Pt,{}),Object(r.jsx)(It,{children:"Accept terms and conditions"})]}),Object(r.jsx)(p,{to:"/",children:"Sign Up"})]})})})}}]),t}(m.Component),Mt=function(n){Object(Hn.a)(t,n);var e=Object(Jn.a)(t);function t(){return Object(_n.a)(this,t),e.apply(this,arguments)}return Object(Gn.a)(t,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Et,{children:Object(r.jsxs)(Lt,{children:[Object(r.jsx)(u,{children:"Login"}),Object(r.jsx)(Rt,{placeholder:"Username"}),Object(r.jsx)(Rt,{placeholder:"Password"}),Object(r.jsxs)(Ft,{children:[Object(r.jsx)(Pt,{}),Object(r.jsx)(It,{children:"Remember me"})]}),Object(r.jsx)(p,{to:"/",children:"Login"})]})})})}}]),t}(m.Component);function Wt(){var n=Object(o.a)(["\n    color : var(--grey);\n    align-items : left;\n    text-decoration : none;\n    padding : 5px;\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n    :hover{\n        transform: scale(1.01);\n        transition: all 0.1s;\n    }\n"]);return Wt=function(){return n},n}function Yt(){var n=Object(o.a)(["\n  color : var(--primary);\n  font-style : 16px;\n  font-weight : 600;\n  align-items : left;\n  padding : 5px;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n"]);return Yt=function(){return n},n}function _t(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  width: 350px;\n  box-sizing: border-box;\n  background: var(--white);\n  text-decoration: none;\n  padding : 50px;\n  @media screen and (max-width: 768px) { }\n"]);return _t=function(){return n},n}function Gt(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  margin-left : 8%;\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    padding-bottom : 25px;\n    margin : 0;\n  }\n"]);return Gt=function(){return n},n}function Ht(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  \n  @media screen and (max-width: 768px) {\n    margin: 0 30px;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return Ht=function(){return n},n}function Jt(){var n=Object(o.a)(["\n  padding: 0 0 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return Jt=function(){return n},n}s.b.div(Jt()),s.b.div(Ht()),s.b.div(Gt()),s.b.div(_t()),s.b.p(Yt()),Object(s.b)(U.b)(Wt());var Kt=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(W,{color:"transparent"}),Object(r.jsx)($,{}),Object(r.jsx)(pn,{}),Object(r.jsx)(Yn,{}),Object(r.jsx)(he,{}),Object(r.jsx)(gt,{}),Object(r.jsx)(kt,{})]})};function Qt(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(W,{}),Object(r.jsx)(Ut,{})]})}function Vt(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(W,{}),Object(r.jsx)(Mt,{})]})}var Xt=t(13),$t=t.p+"static/media/FooterLogo.92da9a65.svg";var qt=function(){return Object(r.jsxs)(Fe,{children:[Object(r.jsxs)(Ae,{children:[Object(r.jsx)(De,{children:"Sign up for Coursenator Newsletter"}),Object(r.jsxs)(Ue,{children:[Object(r.jsx)(Me,{name:"email",type:"email",placeholder:"Your Email"}),Object(r.jsx)(p,{fontBig:!0,primary:!0,children:"Subscribe"})]})]}),Object(r.jsx)(We,{children:Object(r.jsxs)(Ye,{children:[Object(r.jsxs)(_e,{children:[Object(r.jsx)(Ge,{children:Object(r.jsx)("img",{src:$t,alt:"Coursenator"})}),Object(r.jsx)(Pe,{children:"Lorem ipsum dolor sit amet, fabulas molestiae nam ad, eos an sonet deleniti volutpat. Mel sonet persecuti complectitur ut."})]}),Object(r.jsxs)(_e,{children:[Object(r.jsx)(He,{to:"/",children:"About Us"}),Object(r.jsx)(He,{to:"/",children:"Blogs"}),Object(r.jsx)(He,{to:"/",children:"FAQs"}),Object(r.jsx)(He,{to:"/",children:"Contact Us"}),Object(r.jsx)(He,{to:"/",children:"Terms and Conditions"})]}),Object(r.jsxs)(_e,{children:[Object(r.jsx)(Ge,{children:"Search Courses By"}),Object(r.jsx)(He,{to:"/",children:"Subjects"}),Object(r.jsx)(He,{to:"/",children:"Providers"}),Object(r.jsx)(He,{to:"/",children:"Languages"}),Object(r.jsx)(He,{to:"/",children:"Institutions"}),Object(r.jsx)(He,{to:"/",children:"Universities"})]}),Object(r.jsxs)(_e,{children:[Object(r.jsx)(Ge,{children:"Quick Links"}),Object(r.jsx)(He,{to:"/",children:"Top courses"}),Object(r.jsx)(He,{to:"/",children:"Best paid courses"}),Object(r.jsx)(He,{to:"/",children:"Best language courses"}),Object(r.jsx)(He,{to:"/",children:"Free certificate courses"}),Object(r.jsx)(He,{to:"/",children:"Online MBA from top B-Schools"})]})]})}),Object(r.jsx)(Qe,{}),Object(r.jsx)(Je,{children:Object(r.jsx)(Ke,{children:Object(r.jsxs)(Ve,{children:[Object(r.jsx)(Xe,{href:"/",target:"_blank","aria-label":"LinkedIn",children:Object(r.jsx)(fn.c,{})}),Object(r.jsx)(Xe,{href:"/",target:"_blank","aria-label":"Facebook",children:Object(r.jsx)(fn.a,{})}),Object(r.jsx)(Xe,{href:"/",target:"_blank","aria-label":"Twitter",children:Object(r.jsx)(fn.g,{})}),Object(r.jsx)(Xe,{href:"/",target:"_blank","aria-label":"Instagram",children:Object(r.jsx)(fn.b,{})}),Object(r.jsx)(Xe,{href:"/",target:"_blank","aria-label":"Telegram",children:Object(r.jsx)(fn.f,{})})]})})})]})};var Zt=function(){return t(121),t(122),Object(r.jsxs)(a.a,{theme:O,children:[Object(r.jsx)(f,{}),Object(r.jsxs)(U.a,{children:[Object(r.jsx)(Xt.a,{exact:!0,path:"/",children:Object(r.jsx)(Kt,{})}),Object(r.jsxs)(Xt.a,{path:"/signup",children:[Object(r.jsx)(W,{}),Object(r.jsx)(Qt,{})]}),Object(r.jsxs)(Xt.a,{path:"/login",children:[Object(r.jsx)(W,{}),Object(r.jsx)(Vt,{})]}),Object(r.jsx)(qt,{})]})]})};c.a.render(Object(r.jsx)(Zt,{}),document.getElementById("root"))},69:function(n,e,t){}},[[123,1,2]]]);
//# sourceMappingURL=main.f3fb9d93.chunk.js.map