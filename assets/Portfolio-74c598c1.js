import{s,j as e,g as w}from"./index-e2e917ee.js";const v=s.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 60px;
  margin-bottom: 30px;

  /* margin-top: 0; */

  @media screen and (min-width: 768px) {
    justify-content: center;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 50px;
    justify-content: center;
  }
`,n=s.li`
  margin-right: 8px;
  margin-bottom: 8px;

  &:nth-last-of-type(-n + 2) {
    margin-bottom: 0;
  }
`,p=s.button`
  color: #212121;
  background-color: #f5f4fa;
  height: 38px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.63;
  text-align: center;
  letter-spacing: 0.03em;
  border-radius: 4px;
  border: none;
  padding: 6px 22px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
    background-color: #2196f3;
    color: #ffffff;
    cursor: pointer;
  }
`;function y(){return e.jsx(e.Fragment,{children:e.jsxs(v,{children:[e.jsx(n,{children:e.jsx(p,{type:"button",children:"All"})}),e.jsx(n,{children:e.jsx(p,{type:"button",children:"Web sites"})}),e.jsx(n,{children:e.jsx(p,{type:"button",children:"Applications"})}),e.jsx(n,{children:e.jsx(p,{type:"button",children:"Design"})}),e.jsx(n,{children:e.jsx(p,{type:"button",children:"Marketing"})})]})})}var b={exports:{}},q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",k=q,R=k;function g(){}function x(){}x.resetWarningCache=g;var I=function(){function t(c,a,d,u,m,f){if(f!==R){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function r(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:x,resetWarningCache:g};return o.PropTypes=o,o};b.exports=I();var T=b.exports;const i=w(T),P=s.ul`
  /* min-width: 480px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0 auto;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -15px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 1200px;
    margin-bottom: 94px;
  }
`,L=s.li`
  height: auto;
  position: relative;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  width: 100%;
  max-width: 370px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin: 15px;
    width: 354px;
  }
  @media screen and (min-width: 1200px) {
    width: 370px;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);

    .description {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,S=s.div`
  position: relative;
  overflow: hidden;
  width: 370px;
`,O=s.img`
  display: block;
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    max-width: 354px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 370px;

    width: 100%;
  }
`,z=s.p`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateY(100%);
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  height: 100%;
  font-size: 18px;
  line-height: 1.56;
  letter-spacing: 0.03em;
  color: #ffffff;
  background: rgba(33, 150, 243, 0.9);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,F=s.div`
  padding: 20px 24px;
  border: 1px solid #eeeeee;
  /* max-width: 480px; */
  width: 100%;
`,_=s.p`
  color: #212121;
  font-weight: bold;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.06em;
  margin-bottom: 4px;
`,E=s.p`
  color: #757575;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.03em;
`;function h({id:t,source:r,source2x:o,alt:c,description:a,title:d,type:u}){return e.jsxs(e.Fragment,{children:[e.jsxs(S,{id:t,children:[e.jsx(O,{src:r,srcSet:o,alt:c,width:"370",height:"294"}),e.jsx(z,{className:"description",children:a})]}),e.jsxs(F,{children:[e.jsx(_,{children:d}),e.jsx(E,{children:u})]})]})}h.propTypes={id:i.string.isRequired,source:i.string.isRequired,source2x:i.string.isRequired,alt:i.string.isRequired,description:i.string.isRequired,title:i.string.isRequired,type:i.string.isRequired};function j({projects:t}){return e.jsx(P,{children:t.map(({id:r,src:o,src2x:c,alt:a,description:d,title:u,type:m})=>e.jsx(L,{children:e.jsx(h,{id:r,source:o,source2x:c,alt:a,description:d,title:u,type:m})},r))})}j.propTypes={projects:i.arrayOf(i.shape({src:i.string.isRequired,src2x:i.string.isRequired,alt:i.string.isRequired,description:i.string.isRequired,title:i.string.isRequired,type:i.string.isRequired,id:i.string.isRequired})).isRequired};const W=s.div`
  padding: 0 15px;
  margin: 0 auto;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`,A=[{id:"1",src:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project1.jpg",src2x:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project1@2x.jpg",alt:"project",description:"Technocrack is a modern distribution platform coronavirus. Companies use this platform for digital espionage and attacks on the protected servers of competitors.",title:"Technocrack",type:"Web site"},{id:"2",src:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project2.jpg",src2x:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project2@2x.jpg",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"New Orlean vs Golden Star",type:"Design"},{id:"3",src:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project3.jpg",src2x:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project3@2x.jpg",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Seafood",type:"Application"},{id:"4",src:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project4.jpg",src2x:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project4@2x.jpg",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Prime",type:"Marketing"},{id:"5",src:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project5.jpg",src2x:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project5@2x.jpg",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Boxes",type:"Application"},{id:"6",src:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project6.jpg",src2x:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project6@2x.jpg",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Inspiration has no Borders",type:"Web site"},{id:"7",src:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project7.jpg",src2x:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project7@2x.jpg",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Limited Edition",type:"Design"},{id:"8",src:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project8.jpg",src2x:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project8@2x.jpg",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Project LAB",type:"Marketing"},{id:"9",src:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project9.jpg",src2x:"https://github.com/bukreiev/webstudio-project/blob/main/src/assets/project9@2x.jpg",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Growing Business",type:"Application"}];function C(){return e.jsx(e.Fragment,{children:e.jsxs(W,{children:[e.jsx(y,{}),e.jsx(j,{projects:A})]})})}function N(){return e.jsx(e.Fragment,{children:e.jsx("main",{children:e.jsx(C,{})})})}export{N as default};
