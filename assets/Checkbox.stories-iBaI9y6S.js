import{j as r}from"./jsx-runtime-B7JQpw7C.js";import{C as a}from"./checkbox-DAzKRPUd.js";import{r as d}from"./iframe-DibNyMYy.js";const x={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{checked:{control:{type:"boolean"},description:"Checked status of the checkbox"},disabled:{control:{type:"boolean"},description:"Disabled status of the checkbox"},size:{control:{type:"text"},description:"Size of the Checkbox"},color:{control:{type:"text"},description:"Color of the checkbox"},onChange:{action:"clicked",description:"Function to handle checkbox"}}},e={render:t=>{const[n,i]=d.useState(!1);return r.jsx("div",{className:"max-w-md mx-auto p-6",children:r.jsx(a,{...t,checked:n,onChange:i})})},args:{children:"This is a checkbox"}},o={args:{children:"This is a checkbox",color:"red",checked:!0}},s={args:{children:"This is a checkbox",size:"lg"}},c={args:{children:"This is a checkbox",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState(false);
    return <div className="max-w-md mx-auto p-6">
        <Checkbox {...args} checked={val} onChange={setVal} />
      </div>;
  },
  args: {
    children: "This is a checkbox"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "This is a checkbox",
    color: "red",
    checked: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "This is a checkbox",
    size: "lg"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "This is a checkbox",
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};const m=["BasicCheckbox","ColorCheckbox","CheckboxSizes","DisabledCheckbox"];export{e as BasicCheckbox,s as CheckboxSizes,o as ColorCheckbox,c as DisabledCheckbox,m as __namedExportsOrder,x as default};
