import{s as n,j as e,g as b}from"./index-1a8d0164.js";const y=n.ul`
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
`,s=n.li`
  margin-right: 8px;
  margin-bottom: 8px;

  &:nth-last-of-type(-n + 2) {
    margin-bottom: 0;
  }
`,p=n.button`
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
`;function j(){return e.jsx(e.Fragment,{children:e.jsxs(y,{children:[e.jsx(s,{children:e.jsx(p,{type:"button",children:"All"})}),e.jsx(s,{children:e.jsx(p,{type:"button",children:"Web sites"})}),e.jsx(s,{children:e.jsx(p,{type:"button",children:"Applications"})}),e.jsx(s,{children:e.jsx(p,{type:"button",children:"Design"})}),e.jsx(s,{children:e.jsx(p,{type:"button",children:"Marketing"})})]})})}var g={exports:{}},q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",k=q,I=k;function x(){}function h(){}h.resetWarningCache=x;var R=function(){function i(a,c,d,l,m,w){if(w!==I){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}i.isRequired=i;function r(){return i}var o={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:r,element:i,elementType:i,instanceOf:r,node:i,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:h,resetWarningCache:x};return o.PropTypes=o,o};g.exports=R();var _=g.exports;const t=b(_),T=n.ul`
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
`,P=n.li`
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
`,L=n.div`
  position: relative;
  overflow: hidden;
  width: 370px;
`,N=n.img`
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
`,F=n.p`
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
`,S=n.div`
  padding: 20px 24px;
  border: 1px solid #eeeeee;
  /* max-width: 480px; */
  width: 100%;
`,C=n.p`
  color: #212121;
  font-weight: bold;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.06em;
  margin-bottom: 4px;
`,O=n.p`
  color: #757575;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.03em;
`;function v({id:i,source:r,source2x:o,alt:a,description:c,title:d,type:l}){return e.jsxs(e.Fragment,{children:[e.jsxs(L,{id:i,children:[e.jsx(N,{src:r,srcSet:o,alt:a,width:"370",height:"294"}),e.jsx(F,{className:"description",children:c})]}),e.jsxs(S,{children:[e.jsx(C,{children:d}),e.jsx(O,{children:l})]})]})}v.propTypes={id:t.string.isRequired,source:t.string.isRequired,source2x:t.string.isRequired,alt:t.string.isRequired,description:t.string.isRequired,title:t.string.isRequired,type:t.string.isRequired};function f({projects:i}){return e.jsx(T,{children:i.map(({id:r,src:o,src2x:a,alt:c,description:d,title:l,type:m})=>e.jsx(P,{children:e.jsx(v,{id:r,source:o,source2x:a,alt:c,description:d,title:l,type:m})},r))})}f.propTypes={projects:t.arrayOf(t.shape({src:t.string.isRequired,src2x:t.string.isRequired,alt:t.string.isRequired,description:t.string.isRequired,title:t.string.isRequired,type:t.string.isRequired,id:t.string.isRequired})).isRequired};const W=n.div`
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
`,B=[{id:"1",src:"https://drive.google.com/file/d/1NGmQeWA9WsOEQMp2eFj29EB5lGuXYCmQ/view?usp=drive_link",src2x:"https://drive.google.com/file/d/1KEmpya3dLunNSbdfgwrZfU8ygxFoFCea/view?usp=drive_link",alt:"project",description:"Technocrack is a modern distribution platform coronavirus. Companies use this platform for digital espionage and attacks on the protected servers of competitors.",title:"Technocrack",type:"Web site"},{id:"2",src:"https://drive.google.com/file/d/1URWQLX_RRjK93saAwRHgI59Wuu192ebF/view?usp=drive_link",src2x:"https://drive.google.com/file/d/1Ut1C1Y5wrkWIrAigmB9nC9DWWnVLRAnH/view?usp=drive_link",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"New Orlean vs Golden Star",type:"Design"},{id:"3",src:"https://drive.google.com/file/d/1h3MaIWb0VQvJRvTCn_T-e369YFr7wBXc/view?usp=drive_link",src2x:"https://drive.google.com/file/d/1mHsG3RpkHBOk98HNZe44-v1l9Nr6SwN3/view?usp=drive_link",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Seafood",type:"Application"},{id:"4",src:"https://drive.google.com/file/d/1dIl6pqreM3oM3cFh-ZTouM6BvDuzu0vH/view?usp=drive_link",src2x:"https://drive.google.com/file/d/10mL3Mq57IStZewJ4hvac3-HP8Qf5dnJa/view?usp=drive_link",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Prime",type:"Marketing"},{id:"5",src:"https://drive.google.com/file/d/1-94hirtQsH1YiRXrspPIEmosT9_z4lPk/view?usp=drive_link",src2x:"https://drive.google.com/file/d/12ogUrtbQ36jBw29rQSsB0qcaUrym6ZIP/view?usp=drive_link",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Boxes",type:"Application"},{id:"6",src:"https://drive.google.com/file/d/1n3m31QNNN0D15IjEYBxIFtQmufm8IZbk/view?usp=drive_link",src2x:"https://drive.google.com/file/d/1xebaes-F8fOj6BDAejOk42CGInNSbflg/view?usp=drive_link",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Inspiration has no Borders",type:"Web site"},{id:"7",src:"https://drive.google.com/file/d/1fbp6Kq8e-2fWGA5ZjGw-PYUlm6CoKL_9/view?usp=drive_link",src2x:"https://drive.google.com/file/d/1VQ2NahpV_epUDQ6peGOKaa4p-2YUxEAO/view?usp=drive_link",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Limited Edition",type:"Design"},{id:"8",src:"https://drive.google.com/file/d/1ihOzQVr6YwFr0QHduNQNH9eaIp3ev0C9/view?usp=drive_link",src2x:"https://drive.google.com/file/d/1doC61te_bAq0jXwNrvEcxvhqQJNpSWCk/view?usp=drive_link",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Project LAB",type:"Marketing"},{id:"9",src:"https://drive.google.com/file/d/1Ymv0ik2DnUFfz0nbrzso1a_nsABTKCLf/view?usp=drive_link",src2x:"https://drive.google.com/file/d/17sn4acYT5pkrmYEjc5lyRBuIinvv7VDk/view?usp=drive_link",alt:"project",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque quasi tempore placeat veritatis fugiat. Inventore consequatur deleniti veniam sunt!",title:"Growing Business",type:"Application"}];function E(){return e.jsx(e.Fragment,{children:e.jsxs(W,{children:[e.jsx(j,{}),e.jsx(f,{projects:B})]})})}function A(){return e.jsx(e.Fragment,{children:e.jsx("main",{children:e.jsx(E,{})})})}export{A as default};
