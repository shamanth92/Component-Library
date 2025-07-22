import{j as a}from"./jsx-runtime-B7JQpw7C.js";import{A as l}from"./autocomplete-BPxwQgsJ.js";import{r}from"./iframe-DibNyMYy.js";import"./ChevronDownIcon-BscWg8_b.js";const p={title:"Components/Autocomplete",component:l,tags:["autodocs"],argTypes:{value:{control:{type:"text"},description:"Selected value of Autocomplete"},options:{control:{type:"object"},description:"Options List for the Autocomplete"},label:{control:{type:"text"},description:"Autocomplete Label"},onChange:{action:"clicked",description:"Function to select values"}}},e={render:n=>{const[o,t]=r.useState("");return a.jsx("div",{className:"max-w-md mx-auto p-6",children:a.jsx(l,{...n,value:o,onChange:t})})},args:{label:"Search Fruits",options:[{label:"Alabama",value:"AL"},{label:"Alaska",value:"AK"},{label:"Arizona",value:"AZ"},{label:"Arkansas",value:"AR"},{label:"California",value:"CA"},{label:"Colorado",value:"CO"},{label:"Connecticut",value:"CT"},{label:"Delaware",value:"DE"},{label:"Florida",value:"FL"},{label:"Georgia",value:"GA"},{label:"Hawaii",value:"HI"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState("");
    return <div className="max-w-md mx-auto p-6">
        <Autocomplete {...args} value={val} onChange={setVal} />
      </div>;
  },
  args: {
    label: "Search Fruits",
    options: [{
      label: "Alabama",
      value: "AL"
    }, {
      label: "Alaska",
      value: "AK"
    }, {
      label: "Arizona",
      value: "AZ"
    }, {
      label: "Arkansas",
      value: "AR"
    }, {
      label: "California",
      value: "CA"
    }, {
      label: "Colorado",
      value: "CO"
    }, {
      label: "Connecticut",
      value: "CT"
    }, {
      label: "Delaware",
      value: "DE"
    }, {
      label: "Florida",
      value: "FL"
    }, {
      label: "Georgia",
      value: "GA"
    }, {
      label: "Hawaii",
      value: "HI"
    }]
  }
}`,...e.parameters?.docs?.source}}};const m=["BasicAutocomplete"];export{e as BasicAutocomplete,m as __namedExportsOrder,p as default};
