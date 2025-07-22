import{j as n}from"./jsx-runtime-B7JQpw7C.js";import{r as f}from"./iframe-DibNyMYy.js";import{F as x}from"./ChevronDownIcon-BscWg8_b.js";const p=({content:i,expanded:m=[],disabled:u=[]})=>{const[c,g]=f.useState(i.map((t,e)=>m.includes(e))),b=t=>{const e=[...c];e[t]=!e[t],g(e)},l=t=>u?.includes(t);return n.jsx("div",{className:"w-full",children:i.map((t,e)=>n.jsxs("div",{className:`${c[e]?"py-6":""} drop-shadow-xl`,children:[n.jsxs("button",{className:`w-full border-b border-gray-300 text-left px-4 py-3 cursor-pointer flex flex-row justify-between transition-colors duration-300 ${l(e)?"bg-gray-300":"bg-white"}`,onClick:()=>b(e),disabled:l(e),children:[n.jsx("span",{className:"font-mono",children:t.title}),n.jsx(x,{className:"size-6 text-sky-500"})]}),n.jsx("div",{className:`overflow-hidden transition-all duration-300 ease-in-out ${c[e]?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,children:n.jsx("div",{className:"px-4 py-3 text-gray-700 bg-gray-50 font-mono",children:t.content})})]},e))})};p.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{content:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  content: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"string",required:!0}}]}}],raw:"Content[]"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},expanded:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[]",computed:!1}},disabled:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const w={title:"Components/Accordion",component:p,tags:["autodocs"],argTypes:{expanded:{description:"Indexes of panels expanded by default",control:{type:"object"}},disabled:{description:"Indexes of panels disabled",control:{type:"object"}}}},d=[{title:"Accordion Item 1",content:"This is the content of the first item."},{title:"Accordion Item 2",content:"This is the content of the second item."},{title:"Accordion Item 3",content:"This is the content of the third item."}],s={args:{content:d}},a={args:{content:d,expanded:[0,2]}},r={args:{content:d,disabled:[1]}},o={args:{content:d,expanded:[0],disabled:[2]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: sampleContent
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: sampleContent,
    expanded: [0, 2]
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: sampleContent,
    disabled: [1]
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    content: sampleContent,
    expanded: [0],
    disabled: [2]
  }
}`,...o.parameters?.docs?.source}}};const A=["Basic","Expanded","Disabled","ExpandedAndDisabled"];export{s as Basic,r as Disabled,a as Expanded,o as ExpandedAndDisabled,A as __namedExportsOrder,w as default};
