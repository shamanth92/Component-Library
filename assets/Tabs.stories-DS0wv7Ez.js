import{j as e}from"./jsx-runtime-B7JQpw7C.js";import{r as d}from"./iframe-DibNyMYy.js";const o=({tabs:a,color:t="sky",disabled:s=-1,onChange:u})=>{const[m,p]=d.useState(0),v=n=>{p(n),u(n)};return e.jsx("div",{children:a.map((n,r)=>e.jsx("button",{className:`font-mono text-lg w-40 h-10 bg ${m===r&&s!==r?`border-b-2 border-${t}-500 text-${t}-500`:"text-black"} ${s===r?" text-gray-300":"cursor-pointer"}`,onClick:()=>v(r),disabled:s===r,children:n},n))})},b=({children:a})=>e.jsx("div",{className:"font-mono tex-base p-10",children:a});o.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"sky"',computed:!1}},disabled:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-1",computed:!1}},value:{required:!0,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"TabContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const g={title:"Components/Tabs",component:o,tags:["autodocs"],argTypes:{tabs:{control:{type:"object"},description:"List of Tab Headers"},color:{control:{type:"select"},options:["sky","red","green","yellow","orange"],description:"Color of Tab Headers"},disabled:{control:{type:"number"},description:"Index of tab to disable (-1 for none)"},value:{control:!1,description:"Index of active tab"},onChange:{control:!1,description:"Function to handle tab selection"}}},i={render:a=>{const[t,s]=d.useState(0);return e.jsxs("div",{className:"max-w-2xl mx-auto p-4",children:[e.jsx(o,{...a,value:t,onChange:s}),e.jsx(b,{children:e.jsxs("p",{className:"text-gray-700",children:["Content for: ",a.tabs[t]]})})]})},args:{tabs:["Overview","Details","Reviews"],disabled:-1}},c={render:a=>{const[t,s]=d.useState(0);return e.jsxs("div",{className:"max-w-2xl mx-auto p-4",children:[e.jsx(o,{...a,value:t,onChange:s}),e.jsx(b,{children:e.jsxs("p",{className:"text-gray-700",children:["Content for: ",a.tabs[t]]})})]})},args:{tabs:["Overview","Details","Reviews"],color:"green"}},l={render:a=>{const[t,s]=d.useState(0);return e.jsxs("div",{className:"max-w-2xl mx-auto p-4",children:[e.jsx(o,{...a,value:t,onChange:s}),e.jsx(b,{children:e.jsxs("p",{className:"text-gray-700",children:["Content for: ",a.tabs[t]]})})]})},args:{tabs:["Overview","Details","Reviews"],disabled:1}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState(0);
    return <div className="max-w-2xl mx-auto p-4">
        <Tabs {...args} value={activeTab} onChange={setActiveTab} />
        <TabContent>
          <p className="text-gray-700">Content for: {args.tabs[activeTab]}</p>
        </TabContent>
      </div>;
  },
  args: {
    tabs: ["Overview", "Details", "Reviews"],
    disabled: -1
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState(0);
    return <div className="max-w-2xl mx-auto p-4">
        <Tabs {...args} value={activeTab} onChange={setActiveTab} />
        <TabContent>
          <p className="text-gray-700">Content for: {args.tabs[activeTab]}</p>
        </TabContent>
      </div>;
  },
  args: {
    tabs: ["Overview", "Details", "Reviews"],
    color: "green"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState(0);
    return <div className="max-w-2xl mx-auto p-4">
        <Tabs {...args} value={activeTab} onChange={setActiveTab} />
        <TabContent>
          <p className="text-gray-700">Content for: {args.tabs[activeTab]}</p>
        </TabContent>
      </div>;
  },
  args: {
    tabs: ["Overview", "Details", "Reviews"],
    disabled: 1
  }
}`,...l.parameters?.docs?.source}}};const f=["BasicTab","ColorTab","DisabledTab"];export{i as BasicTab,c as ColorTab,l as DisabledTab,f as __namedExportsOrder,g as default};
