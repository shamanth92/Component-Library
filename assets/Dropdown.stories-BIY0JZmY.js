import{j as n}from"./jsx-runtime-B7JQpw7C.js";import{r as l}from"./iframe-DibNyMYy.js";import{C as q}from"./checkbox-DAzKRPUd.js";const i=({label:s,options:a,value:r,multiple:x,checkbox:u,groupOptions:j,group:c,chip:w,onChange:S})=>{const[D,y]=l.useState(!1),h=l.useRef(null),[f,O]=l.useState([]);l.useEffect(()=>{const e=t=>{h.current&&!h.current.contains(t.target)&&y(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const C=e=>{if(!x&&!u&&!w)y(!1),S(e.value);else{const o=Array.isArray(r)&&r.includes(e.value)?r.filter(k=>k!==e.value):[...r,e.value];S(o)}},A=(e,t)=>{O(o=>t?[...o,e]:o.filter(k=>k!==e))},N=e=>x||u?u?Array.isArray(f)&&f.includes(e.value):Array.isArray(r)&&r.includes(e.value):r===e.value;return n.jsxs("div",{className:"relative inline-block text-left w-64",ref:h,children:[s&&n.jsx("label",{className:"block mb-1 text-sm text-gray-700",children:s}),n.jsxs("button",{type:"button",className:"w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono",onClick:()=>y(!D),children:[!c&&!w&&(x||u?Array.isArray(r)&&r.length>0?a.filter(e=>r.includes(e.value)).map(e=>e.label).join(", "):"Select options":a?.find(e=>e.value===r)?.label||"Select an option"),c&&(j?.flatMap(e=>e.items).find(e=>e.value===r)?.label||"Select an option"),w&&(Array.isArray(r)&&r.length>0?a.filter(e=>r.includes(e.value)).map(e=>n.jsx("span",{className:"pr-2",children:n.jsx("span",{className:"bg-sky-300 p-1 rounded-md",children:e.label})},e.value)):"Select options"),n.jsx("span",{className:"float-right",children:"▾"})]}),D&&n.jsxs("ul",{className:"absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto",children:[!c&&a?.map(e=>n.jsx("li",{onClick:t=>{if(u){t.stopPropagation();return}C(e)},className:`px-4 py-2 cursor-pointer font-mono hover:bg-sky-100 ${N(e)?"bg-sky-100 font-medium":""}`,children:u?n.jsx(q,{checked:f.includes(e.value),onChange:t=>A(e.value,t),children:e.label},e.value):e.label},e.value)),c&&j?.map((e,t)=>n.jsxs("div",{children:[n.jsx("div",{className:"bg-sky-500 flex flex-row justify-center text-white",children:n.jsx("label",{className:"font-mono font-bold",children:e.group})}),e.items.map(o=>n.jsx("li",{className:`px-4 py-2 cursor-pointer font-mono hover:bg-sky-100 ${N(o)?"bg-sky-100 font-medium":""}`,onClick:()=>{C(o)},children:o.label},o.value))]},t))]})]})};i.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Option[]"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},checkbox:{required:!1,tsType:{name:"boolean"},description:""},groupOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ group: string; items: Option[] }",signature:{properties:[{key:"group",value:{name:"string",required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Option[]",required:!0}}]}}],raw:"GroupOption[]"},description:""},group:{required:!1,tsType:{name:"boolean"},description:""},chip:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""}}};const z={title:"Components/Dropdown",component:i,tags:["autodocs"],argTypes:{label:{control:{type:"text"},description:"Dropdown Label"},options:{control:{type:"object"},description:"Array of Dropdown Options"},value:{control:{type:"text"},description:"Selected Dropdown value"},multiple:{control:{type:"boolean"},description:"Dropdown type for multiple selection"},checkbox:{control:{type:"boolean"},description:"Dropdown with checkbox options"},groupOptions:{control:{type:"object"},description:"Group Dropdown Options"},group:{control:{type:"boolean"},description:"Group Dropdown"},chip:{control:{type:"boolean"},description:"Dropdown with Chip"},onChange:{action:"clicked",description:"Function to handle dropdown selection"}}},b=[{value:"red",label:"Red"},{value:"green",label:"Green"},{value:"blue",label:"Blue"}],d={render:s=>{const[a,r]=l.useState("red");return n.jsx("div",{className:"max-w-md mx-auto p-6",children:n.jsx(i,{...s,value:a,onChange:r})})},args:{label:"Pick a color",options:b}},p={render:s=>{const[a,r]=l.useState("red");return n.jsx("div",{className:"max-w-md mx-auto p-6",children:n.jsx(i,{...s,value:a,onChange:r})})},args:{label:"Pick a color",options:b,multiple:!0}},m={render:s=>{const[a,r]=l.useState("red");return n.jsx("div",{className:"max-w-md mx-auto p-6",children:n.jsx(i,{...s,value:a,onChange:r})})},args:{label:"Pick a color",options:b,checkbox:!0}},g={render:s=>{const[a,r]=l.useState("red");return n.jsx("div",{className:"max-w-md mx-auto p-6",children:n.jsx(i,{...s,value:a,onChange:r})})},args:{label:"Pick a color",groupOptions:[{group:"Indian",items:[{value:"dose",label:"Dose"},{value:"idli",label:"Idli"},{value:"naan",label:"Naan"}]},{group:"Italian",items:[{value:"pasta",label:"Pasta"},{value:"pizza",label:"Pizza"},{value:"tiramisu",label:"Tiramisu"}]},{group:"Mexican",items:[{value:"taco",label:"Taco"},{value:"burrito",label:"Burrito"}]}],group:!0}},v={render:s=>{const[a,r]=l.useState("red");return n.jsx("div",{className:"max-w-md mx-auto p-6",children:n.jsx(i,{...s,value:a,onChange:r})})},args:{label:"Pick a color",options:b,chip:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<string | string[]>("red");
    return <div className="max-w-md mx-auto p-6">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>;
  },
  args: {
    label: "Pick a color",
    options: Options
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<string | string[]>("red");
    return <div className="max-w-md mx-auto p-6">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>;
  },
  args: {
    label: "Pick a color",
    options: Options,
    multiple: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<string | string[]>("red");
    return <div className="max-w-md mx-auto p-6">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>;
  },
  args: {
    label: "Pick a color",
    options: Options,
    checkbox: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<string | string[]>("red");
    return <div className="max-w-md mx-auto p-6">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>;
  },
  args: {
    label: "Pick a color",
    groupOptions: [{
      group: "Indian",
      items: [{
        value: "dose",
        label: "Dose"
      }, {
        value: "idli",
        label: "Idli"
      }, {
        value: "naan",
        label: "Naan"
      }]
    }, {
      group: "Italian",
      items: [{
        value: "pasta",
        label: "Pasta"
      }, {
        value: "pizza",
        label: "Pizza"
      }, {
        value: "tiramisu",
        label: "Tiramisu"
      }]
    }, {
      group: "Mexican",
      items: [{
        value: "taco",
        label: "Taco"
      }, {
        value: "burrito",
        label: "Burrito"
      }]
    }],
    group: true
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<string | string[]>("red");
    return <div className="max-w-md mx-auto p-6">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>;
  },
  args: {
    label: "Pick a color",
    options: Options,
    chip: true
  }
}`,...v.parameters?.docs?.source}}};const I=["BasicDropdown","MultiSelectDropdown","CheckboxDropdown","GroupDropdown","ChipDropdown"];export{d as BasicDropdown,m as CheckboxDropdown,v as ChipDropdown,g as GroupDropdown,p as MultiSelectDropdown,I as __namedExportsOrder,z as default};
