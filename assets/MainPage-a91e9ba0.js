import{s as n,c as a,b as t,j as e,n as j,r as b}from"./index-1dff2cf5.js";const S=n.input`
margin-left: auto;
margin-right: auto;
text-align: left;
margin-bottom: 20px;
    box-sizing: border-box;
    width: 100%;
    padding: 17px ;
    padding-right: auto;
    border-radius: 15px;
    border: 1px solid ${r=>r.error?a.mainTextColor:"red"};
    font-size: 16px;
    background: transparent;
    color: ${a.mainTextColor};
    outline: none;
    position: relative;
     @media only screen and (min-width: ${t.tablet}) {
    padding: 25px;
  }
  /* @media only screen and (min-width: ${t.desktop}) {
    width: 375px;
  } */
:focus{
      border: 2px solid ${a.mainTextColor};
    }
  ::placeholder{
        color: ${a.placeholderColor};
        font-size: 16px;
        padding: 17px;
        padding-right: auto;
        @media only screen and (min-width: ${t.tablet}){

  }
    } 
`,E=n.span`
    font-size: 10px;
    margin-bottom: 10px;
    color: ${a.mainTextColor};
    outline: none;
    display: flex;
    flex-direction: column;
position: absolute;
top: 65%;
left: 15%;

@media only screen and (min-width: ${t.secondMobile}){
left: 30%;
font-size: 1px;
  }
 @media only screen and (min-width: ${t.tablet}){
left: 40%;
font-size: 14px;
  }
   @media only screen and (min-width: ${t.desktop}){
top: 75%;
left: 45%;
  }
`;n.span`
    font-size: 14px;
    color: ${a.mainTextColor};
    /* border: red; */
    outline: none;

`;const v=({value:r="",name:l="",label:s="",placeholder:x="",type:p="text",onChange:d,error:m})=>{const $=s.replace(/\s+/g,"-").toLowerCase(),f=h=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h),u=h=>/^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z]).{5,}$/.test(h),y=h=>{const{value:c}=h.target;let g={isValid:!0,message:""};if(!c.trim())return d({value:c,error:g});p==="email"&&!f(c)?g={isValid:!1,message:"Invalid email format (example@mail.com)."}:p==="password"&&!u(c)&&(g={isValid:!1,message:"Invalid password format (The password must contain at least one uppercase alphabetical character, one figure and must be at least 5 characters in length)."}),d({value:c,error:g})};return e.jsxs(e.Fragment,{children:[s&&e.jsx("label",{htmlFor:$,children:s}),e.jsx(S,{id:$,type:p,value:r,placeholder:x,name:l,onChange:y,error:m.isValid}),!m.isValid&&e.jsx(E,{children:m.message})]})},M=n.section`
width: 100%;
height: auto;
background-color:  ${a.menuLayoutColor};
position: relative;
`,C=n.div`
padding: 95px 15px 56px 15px;
text-align: center;
max-width: 344px;
margin-left: auto;
margin-right: auto;
z-index: 1;
@media only screen and (min-width: ${t.tablet}) {
  min-width: 375px;
  }
  @media only screen and (min-width: ${t.desktop}) {
    display: flex;
    align-items: center;
    max-width: 1440px;
  }
`,z=n.div`
width: 230px;
height: auto;
text-align: center;
margin-left: auto;
margin-right: auto;
@media only screen and (min-width: ${t.tablet}) {
  width: 282px;
  }
  @media only screen and (min-width: ${t.desktop}) {
  width: 343px;
  margin-right: 87px;
  margin-left: 80px;
  }
`,T=n.p`
font-size: 16px;
line-height: 145%;
font-weight: 600;
text-align: center;
margin-bottom: 12px;
@media only screen and (min-width: ${t.tablet}) {
  font-size: 20px;
  }
  @media only screen and (min-width: ${t.desktop}) {
  font-size: 24px;
  width: inherit;
  }
`,k=n.p`
font-size: 12px;
margin-bottom: 20px;
@media only screen and (min-width: ${t.tablet}) {
  font-size: 16px;
  }
    @media only screen and (min-width: ${t.desktop}) {
  font-size: 20px;
  }
`,w=j`
margin: 0;
width: 100%;
font-weight: 600;
font-size: 20px;
line-height: auto;
cursor: pointer;
transition: 0.5s;
border-radius: 15px;
border: 1px solid ${a.btnActiveColor};
padding: 16px 112px 16px 112px;
cursor: pointer;
transition: 0.5s;
  @media only screen and (min-width: ${t.tablet}) {
    padding: 22px 127px 22px 127px;
  }
  @media only screen and (min-width: ${t.desktop}) {
    padding: 22px 127px 22px 127px;
    width: fit-content;
    height: 100%;
    margin-left: 99px;
  }
`,B=n.button`
 ${w}
  color: ${a.whiteColor};
  background-color: ${a.btnActiveColor};
`,A=n.button`
${w}
color: ${a.whiteColor};
background-color: ${a.hoverBtnColor};
box-shadow: 0px 5px 16px rgba(151, 100, 39, 0.7);
`,P=n.button`
${w}
color: ${a.whiteColor};
background-color: ${a.grayColor};
`,F=n.button`
${w}
color: ${a.mainTextColor};
background-color: transparent;
border: 1px solid ${a.mainTextColor};
`,V=({type:r,buttonName:l,onClick:s,disabled:x,buttonStyle:p})=>{let d;return p==="disabled"?d=e.jsx(P,{type:r,onClick:s,disabled:x,children:l}):p==="active"?d=e.jsx(B,{type:r,onClick:s,disabled:x,children:l}):p==="hover"?d=e.jsx(A,{type:r,onClick:s,disabled:x,children:l}):d=e.jsx(F,{type:r,onClick:s,disabled:x,children:l}),d},I=n.div`
  position: relative;
  pointer-events: none;
`,o=n.img`
 position: absolute;
 content: '';
transition: filter 0.3s ease;
  fill: #FEAF50;
width: 16px;
height: 16px;

`,L=n(o)`
top: 19px;
left: 17px;
@media only screen and (min-width: ${t.secondMobile}) {
  top:28px;
left: 2px;
  }
@media only screen and (min-width: ${t.tablet}) {
top:32px;
left: 35px;
  }
`,H=n(o)`
top: 8px;
left: 156px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 13px;
left: 110px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:21px;
left: 198px;
  }
`,R=n(o)`
top: 4px;
right: 0px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 5px;
left: 375px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:20px;
left: 340px;
  }
`,Z=n(o)`
top: 19px;
left: 293px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 25px;
left: 275px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:29px;
left: 549px;
  }
`,D=n(o)`
top: 64px;
right: 105px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 47px;
right: 54px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:9px;
right: 30px;
  }
`,O=n(o)`
top: 76px;
right:8px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 70px;
right: 121px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:45px;
right: 245px;
  }
`,W=n(o)`
top: 113px;
left:247px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 59px;
left: 197px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:68px;
right: 59px;
  }
`,Y=n(o)`
top: 113px;
left:171px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 70px;
left: 58px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:102px;
left: 26px;
  }
`,_=n(o)`
top: 114px;
left:47px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 165px;
left: 15px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:113px;
left: 120px;
  }
`,q=n(o)`
top: 215px;
left:270px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 127px;
left: 384px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:126px;
left: 480px;
  }
`,G=n(o)`
top: 226px;
left:58px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 164px;
left: 87px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:107px;
right: 209px;
  }
`,J=n(o)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 172px;
right: 37px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:106px;
right: 136px;
  }
`,K=n(o)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 260px;
right: 42px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:106px;
right: 12px;
  }
`,Q=n(o)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 318px;
right: 302px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:174px;
left: 147px;
  }
`,U=n(o)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 330px;
right: 178px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:187px;
right: 26px;
  }
`,X=n(o)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 335px;
right: 37px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:209px;
left: 97px;
  }
`,N=n(o)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 347px;
right: 94px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:187px;
left: 1px;
  }
`,tt=n(o)`
top: 0px;
right:-18px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 350px;
right: 265px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:239px;
right: 125px;
  }
`,et=n(o)`
top: 0px;
left:-18px;
@media only screen and (min-width: ${t.secondMobile}) {
  top: 345px;
left: 46px;
  }
    @media only screen and (min-width: ${t.tablet}) {
  top:260px;
right: 71px;
  }
`,nt=n(o)`
top: 0px;
left:-18px;
    @media only screen and (min-width: ${t.tablet}) {
  top:272px;
right: 710px;
  }
`,it=n(o)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${t.tablet}) {
  top:304px;
right: 632px;
  }
`,ot=n(o)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${t.tablet}) {
  top:287px;
right: 178px;
  }
`,at=n(o)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${t.tablet}) {
  top:292px;
right: 33px;
  }
`,dt=n(o)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${t.tablet}) {
  top:344px;
right: 106px;
  }
`,rt=n(o)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${t.tablet}) {
  top:349px;
right: 467px;
  }
`,st=n(o)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${t.tablet}) {
  top:367px;
right: 586px;
  }
`,pt=n(o)`
bottom: 0px;
right:-18px;
    @media only screen and (min-width: ${t.tablet}) {
  top:374px;
right: 330px;
  }
`,lt=n(o)`
bottom: 0px;
left:-18px;
    @media only screen and (min-width: ${t.tablet}) {
  top:378px;
left: 73px;
  }
`,xt=n(o)`
bottom: 0px;
left:-18px;
    @media only screen and (min-width: ${t.tablet}) {
  top:384px;
left: 309px;
  }
`,ct=n(o)`
bottom: 0px;
left:-18px;
    @media only screen and (min-width: ${t.tablet}) {
  top:382px;
left: 564px;
  }
`,mt=n(o)`
bottom: 0px;
left:-18px;
    @media only screen and (min-width: ${t.tablet}) {
  top:382px;
left: 688px;
  }
`,i="/OHCRAFT/assets/sign-cbe263c3.svg",ht=()=>e.jsxs(I,{children:[e.jsx(L,{src:i,alt:"decoration"}),e.jsx(H,{src:i,alt:"decoration"}),e.jsx(R,{src:i,alt:"decoration"}),e.jsx(Z,{src:i,alt:"decoration"}),e.jsx(D,{src:i,alt:"decoration"}),e.jsx(O,{src:i,alt:"decoration"}),e.jsx(W,{src:i,alt:"decoration"}),e.jsx(Y,{src:i,alt:"decoration"}),e.jsx(_,{src:i,alt:"decoration"}),e.jsx(q,{src:i,alt:"decoration"}),e.jsx(G,{src:i,alt:"decoration"}),e.jsx(J,{src:i,alt:"decoration"}),e.jsx(K,{src:i,alt:"decoration"}),e.jsx(Q,{src:i,alt:"decoration"}),e.jsx(U,{src:i,alt:"decoration"}),e.jsx(X,{src:i,alt:"decoration"}),e.jsx(N,{src:i,alt:"decoration"}),e.jsx(tt,{src:i,alt:"decoration"}),e.jsx(et,{src:i,alt:"decoration"}),e.jsx(nt,{src:i,alt:"decoration"}),e.jsx(it,{src:i,alt:"decoration"}),e.jsx(ot,{src:i,alt:"decoration"}),e.jsx(at,{src:i,alt:"decoration"}),e.jsx(dt,{src:i,alt:"decoration"}),e.jsx(rt,{src:i,alt:"decoration"}),e.jsx(st,{src:i,alt:"decoration"}),e.jsx(pt,{src:i,alt:"decoration"}),e.jsx(lt,{src:i,alt:"decoration"}),e.jsx(xt,{src:i,alt:"decoration"}),e.jsx(ct,{src:i,alt:"decoration"}),e.jsx(mt,{src:i,alt:"decoration"})]}),gt=()=>{b.useState(null);const[r,l]=b.useState("");b.useState(!1);const[s,x]=b.useState({isValid:!0,message:""}),p=(d,m)=>{l(d),x(m)};return e.jsxs(M,{children:[e.jsx(ht,{}),e.jsxs(C,{children:[e.jsxs(z,{children:[e.jsx(T,{children:"Хочеш першим отримувати актуальні новини від нас?"}),e.jsx(k,{children:"Залиш свою електронну пошту"})]}),e.jsx(v,{"aria-label":"Your email address",name:"email_address",placeholder:"Електронна пошта",type:"email",onChange:d=>{p(d.value,d.error)},value:r,error:s}),e.jsx(V,{type:"submit",buttonName:"Відправити",buttonStyle:"active"})]})]})},wt=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Main page"}),e.jsx(gt,{})]});export{wt as default};
