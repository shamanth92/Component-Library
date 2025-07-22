import{j as s}from"./jsx-runtime-B7JQpw7C.js";import{r}from"./iframe-DibNyMYy.js";function E({title:e,titleId:t,...n},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const S=r.forwardRef(E);var a=function(e){return e[e.TOP_LEFT=0]="TOP_LEFT",e[e.TOP_RIGHT=1]="TOP_RIGHT",e[e.TOP_CENTER=2]="TOP_CENTER",e[e.CENTER=3]="CENTER",e[e.BOTTOM_LEFT=4]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",e[e.BOTTOM_CENTER=6]="BOTTOM_CENTER",e}({});const k={0:"fixed top-4 left-4",1:"fixed top-4 right-4",2:"fixed top-4 left-1/2 transform -translate-x-1/2",3:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",4:"fixed bottom-4 left-4",5:"fixed bottom-4 right-4",6:"fixed bottom-4 left-1/2 transform -translate-x-1/2"},o=({content:e,type:t="basic",Icon:n,action:i,visible:c,autoDismiss:T,dismiss:l,position:b=2})=>{let d="";switch(t){case"basic":d="bg-sky-500";break;case"success":d="bg-green-500";break;case"error":d="bg-red-500";break}const h=c?"opacity-100 scale-100":"opacity-0 scale-95 pointer-events-none";return r.useEffect(()=>{if(c&&T){const f=setTimeout(()=>{l?.(!1)},5e3);return()=>clearTimeout(f)}},[c,T,l]),console.log("positionClasses[position]: ",b),c&&s.jsx("div",{className:`${k[b]} ${h} 
        transition-all duration-300 ease-out transform z-50`,children:s.jsxs("div",{className:`flex flex-row ${T?"justify-center":"justify-between"} w-75 ${d} p-3 rounded-md`,children:[s.jsx("div",{children:s.jsx("p",{className:"font-mono text-white",children:e})}),s.jsxs("div",{children:[i&&s.jsx("button",{className:"text-black font-mono text-sm font-bold cursor-pointer",onClick:()=>l?.(!1),children:i}),n&&s.jsx("button",{children:s.jsx(n,{className:"size-4 text-black cursor-pointer",onClick:()=>l?.(!1)})})]})]})})};o.__docgenInfo={description:"",methods:[],displayName:"SnackBar",props:{type:{required:!1,tsType:{name:"union",raw:'"basic" | "success" | "error"',elements:[{name:"literal",value:'"basic"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"basic"',computed:!1}},content:{required:!0,tsType:{name:"string"},description:""},Icon:{required:!1,tsType:{name:"ComponentType",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}],raw:"ComponentType<React.SVGProps<SVGSVGElement>>"},description:""},action:{required:!1,tsType:{name:"string"},description:""},autoDismiss:{required:!1,tsType:{name:"boolean"},description:""},visible:{required:!0,tsType:{name:"boolean"},description:""},dismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},position:{required:!1,tsType:{name:"POSITION"},description:"",defaultValue:{value:"POSITION.TOP_CENTER",computed:!0}}}};const y={title:"Components/SnackBar",component:o,tags:["autodocs"],argTypes:{type:{control:{type:"select"},description:"Type of Snackbar",options:["basic","success","error"]},content:{control:{type:"text"},description:"Snackbar content"},action:{control:{type:"text"},description:"Snackbar dismiss action"},autoDismiss:{control:{type:"boolean"},description:"Auto Dismiss Snackbar after 5s"},visible:{control:{type:"boolean"},description:"Toggle Snackbar"},dismiss:{action:"clicked",description:"Function to dismiss Snackbar"},position:{control:{type:"select"},description:"Position of the Snackbar",options:["BOTTOM_CENTER","BOTTOM_LEFT","BOTTOM_RIGHT","CENTER","TOP_CENTER","TOP_LEFT","TOP_RIGHT"],mapping:{BOTTOM_CENTER:a.BOTTOM_CENTER,BOTTOM_LEFT:a.BOTTOM_LEFT,BOTTOM_RIGHT:a.BOTTOM_RIGHT,CENTER:a.CENTER,TOP_CENTER:a.TOP_CENTER,TOP_LEFT:a.TOP_LEFT,TOP_RIGHT:a.TOP_RIGHT},labels:{Contained:"Contained",Outlined:"Outlined",Disabled:"Disabled",Simple:"Simple"},Icon:{control:!1}}}},u={render:e=>{const[t,n]=r.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"mb-4 px-4 py-2 bg-sky-600 text-white rounded-md",onClick:()=>n(!0),children:"Show Snackbar"}),t&&s.jsx(o,{...e,visible:t,dismiss:n,Icon:S})]})},args:{content:"This is a snackbar",type:"basic",position:a.TOP_CENTER}},p={render:e=>{const[t,n]=r.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"mb-4 px-4 py-2 bg-sky-600 text-white rounded-md",onClick:()=>n(!0),children:"Show Snackbar"}),t&&s.jsx(o,{...e,visible:t,dismiss:n})]})},args:{content:"This is a snackbar",type:"success",autoDismiss:!0,position:a.TOP_CENTER}},m={render:e=>{const[t,n]=r.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"mb-4 px-4 py-2 bg-sky-600 text-white rounded-md",onClick:()=>n(!0),children:"Show Snackbar"}),t&&s.jsx(o,{...e,visible:t,dismiss:n})]})},args:{content:"This is a snackbar",type:"error",autoDismiss:!0,position:a.BOTTOM_RIGHT}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [show, setShow] = useState(false);
    return <>
        <button className="mb-4 px-4 py-2 bg-sky-600 text-white rounded-md" onClick={() => setShow(true)}>
          Show Snackbar
        </button>
        {show && <SnackBar {...args} visible={show} dismiss={setShow} Icon={XMarkIcon} />}
      </>;
  },
  args: {
    content: "This is a snackbar",
    type: "basic",
    position: POSITION.TOP_CENTER
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [show, setShow] = useState(false);
    return <>
        <button className="mb-4 px-4 py-2 bg-sky-600 text-white rounded-md" onClick={() => setShow(true)}>
          Show Snackbar
        </button>
        {show && <SnackBar {...args} visible={show} dismiss={setShow} />}
      </>;
  },
  args: {
    content: "This is a snackbar",
    type: "success",
    autoDismiss: true,
    position: POSITION.TOP_CENTER
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [show, setShow] = useState(false);
    return <>
        <button className="mb-4 px-4 py-2 bg-sky-600 text-white rounded-md" onClick={() => setShow(true)}>
          Show Snackbar
        </button>
        {show && <SnackBar {...args} visible={show} dismiss={setShow} />}
      </>;
  },
  args: {
    content: "This is a snackbar",
    type: "error",
    autoDismiss: true,
    position: POSITION.BOTTOM_RIGHT
  }
}`,...m.parameters?.docs?.source}}};const g=["BasicSnackBar","AutoDismissSnackBar","PositionsSnackBar"];export{p as AutoDismissSnackBar,u as BasicSnackBar,m as PositionsSnackBar,g as __namedExportsOrder,y as default};
