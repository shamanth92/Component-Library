import{j as e}from"./jsx-runtime-B7JQpw7C.js";import{r as p}from"./iframe-DibNyMYy.js";import{a,B as r}from"./button-B-F-Te6c.js";const s=({children:t,open:n})=>n&&e.jsx("div",{className:"fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50",children:e.jsx("div",{className:"w-fit border-1 border-gray-300",children:t})}),l=({children:t})=>e.jsx("div",{className:"bg-white h-15 font-mono font-bold text-lg flex flex-row items-center p-6",children:t}),c=({children:t})=>e.jsx("div",{className:"bg-white  p-10 font-mono",children:t}),d=({children:t})=>e.jsx("div",{className:"bg-white  p-4 flex justify-end",children:e.jsx("div",{className:"flex flex-row gap-4",children:t})});s.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"DialogTitle",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"DialogActions",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const x={title:"Components/Dialog",component:s,tags:["autodocs"],argTypes:{open:{control:{type:"boolean"},description:"Toggle for Dialog"}}},o={render:t=>{const[n,i]=p.useState(!1);return e.jsxs("div",{className:"max-w-2xl mx-auto p-4",children:[e.jsx("button",{className:"mb-4 px-4 py-2 bg-sky-600 text-white rounded-md cursor-pointer",onClick:()=>i(!0),children:"Open Dialog"}),e.jsxs(s,{...t,open:n,children:[e.jsx(l,{children:"Dialog Title"}),e.jsx("hr",{className:"text-gray-300"}),e.jsx(c,{children:"Illinois is a midwestern state"}),e.jsx("hr",{className:"text-gray-300"}),e.jsxs(d,{children:[e.jsx(a,{variant:r.Contained,children:"SUBMIT"}),e.jsx(a,{variant:r.Outlined,onClick:()=>i(!1),children:"CLOSE"})]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [openDialog, setOpenDialog] = useState(false);
    return <div className="max-w-2xl mx-auto p-4">
        <button className="mb-4 px-4 py-2 bg-sky-600 text-white rounded-md cursor-pointer" onClick={() => setOpenDialog(true)}>
          Open Dialog
        </button>
        <Dialog {...args} open={openDialog}>
          <DialogTitle>Dialog Title</DialogTitle>
          <hr className="text-gray-300"></hr>
          <DialogContent>Illinois is a midwestern state</DialogContent>
          <hr className="text-gray-300"></hr>
          <DialogActions>
            <Button variant={BUTTONTYPES.Contained}>SUBMIT</Button>
            <Button variant={BUTTONTYPES.Outlined} onClick={() => setOpenDialog(false)}>
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const h=["BasicDialog"];export{o as BasicDialog,h as __namedExportsOrder,x as default};
