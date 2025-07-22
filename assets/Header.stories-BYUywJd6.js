import{j as e}from"./jsx-runtime-B7JQpw7C.js";import{r as a}from"./iframe-DibNyMYy.js";import{A as w}from"./autocomplete-BPxwQgsJ.js";import{A as T}from"./avatar-BsT6Y1bs.js";import{L as f,D as j,S as C,a as L}from"./drawer-CvAJ60_h.js";import{F as c}from"./AcademicCapIcon-Ch-dmkws.js";import"./ChevronDownIcon-BscWg8_b.js";import"./use-merged-ref-etLTZ8cz.js";function k({title:n,titleId:r,...m},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":r},m),n?a.createElement("title",{id:r},n):null,a.createElement("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))}const G=a.forwardRef(k),A=({logoTitle:n,LogoIcon:r,search:m,searchList:s,headerLinks:p,menu:b,menuItems:u,sectionList:y})=>{const[x,v]=a.useState(""),[d,S]=a.useState(!1),[h,g]=a.useState(!1);return e.jsxs("div",{className:"h-20 w-full bg-sky-500 flex flex-row",children:[e.jsxs("div",{className:"flex flex-row  gap-4 items-center w-1/3 h-full p-4 cursor-pointer",children:[e.jsx(G,{className:"size-8 text-white",onClick:()=>g(!h)}),r&&e.jsx(f,{href:"/",children:e.jsx(r,{className:"size-8 text-white"})}),e.jsx(f,{href:"/",children:e.jsx("p",{className:"font-mono font-bold text-2xl text-white",children:n})}),e.jsxs(j,{open:h,onClose:()=>g(!1),children:[e.jsx(C,{title:n,Icon:r}),e.jsx(L,{sections:!0,sectionList:y})]})]}),p&&e.jsx("div",{className:"flex flex-row justify-evenly w-1/2",children:p.map(t=>e.jsx("button",{className:"text-white font-mono font-bold text-lg cursor-pointer",children:t},t))}),m&&s&&e.jsx("div",{className:"ml-auto flex items-center p-4",children:e.jsx(w,{value:x,options:s,onChange:v})}),b&&e.jsx("div",{className:"ml-auto flex items-center p-4",children:e.jsxs("div",{className:"relative inline-block text-left",children:[e.jsx("button",{className:"bg-sky-500 text-white px-4 py-2 rounded",onClick:()=>S(!d),children:e.jsx(T,{type:"alpha",label:"SK"})}),d&&e.jsx("ul",{className:"absolute mt-2 w-40 bg-white border border-sky-500 rounded shadow-lg -right-4",children:u&&u.map(t=>e.jsx("li",{children:e.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-sky-100 font-mono",children:t})},t))})]})})]})};A.__docgenInfo={description:"",methods:[],displayName:"Header",props:{logoTitle:{required:!0,tsType:{name:"string"},description:""},LogoIcon:{required:!1,tsType:{name:"ComponentType",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}],raw:"ComponentType<React.SVGProps<SVGSVGElement>>"},description:""},menu:{required:!1,tsType:{name:"boolean"},description:""},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},search:{required:!1,tsType:{name:"boolean"},description:""},searchList:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Option[]"},description:""},headerLinks:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},sectionList:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  options: string[];
  name: string;
  OptionIconList?: ComponentType<React.SVGProps<SVGSVGElement>>[];
}`,signature:{properties:[{key:"options",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"OptionIconList",value:{name:"Array",elements:[{name:"ComponentType",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}],raw:"ComponentType<React.SVGProps<SVGSVGElement>>"}],raw:"ComponentType<React.SVGProps<SVGSVGElement>>[]",required:!1}}]}}],raw:"SectionList[]"},description:""}}};const M={title:"Components/Header",component:A,tags:["autodocs"],argTypes:{logoTitle:{control:{type:"text"},description:"Main Title of the Header"},menu:{control:{type:"boolean"},description:"True if the header should display menu options"},menuItems:{control:{type:"object"},description:"Menu items when menu is true"},search:{control:{type:"boolean"},description:"True if header should have Search autocomplete"},searchList:{control:{type:"object"},description:"Search items when search is true"},headerLinks:{control:{type:"object"},description:"Navigation items"},LogoIcon:c}},o={args:{logoTitle:"Company Title",LogoIcon:c,search:!0,searchList:[{label:"Alabama",value:"AL"},{label:"Alaska",value:"AK"},{label:"Arizona",value:"AZ"},{label:"Arkansas",value:"AR"},{label:"California",value:"CA"}]}},l={args:{logoTitle:"Company Title",LogoIcon:c,search:!0,searchList:[{label:"Alabama",value:"AL"},{label:"Alaska",value:"AK"},{label:"Arizona",value:"AZ"},{label:"Arkansas",value:"AR"},{label:"California",value:"CA"}],headerLinks:["Home","Products","Account","Support"]}},i={args:{logoTitle:"Company Title",LogoIcon:c,headerLinks:["Home","Products","Account","Support"],menu:!0,menuItems:["Profile","Help","Logout"],search:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    logoTitle: "Company Title",
    LogoIcon: AcademicCapIcon,
    search: true,
    searchList: [{
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
    }]
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    logoTitle: "Company Title",
    LogoIcon: AcademicCapIcon,
    search: true,
    searchList: [{
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
    }],
    headerLinks: ["Home", "Products", "Account", "Support"]
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    logoTitle: "Company Title",
    LogoIcon: AcademicCapIcon,
    headerLinks: ["Home", "Products", "Account", "Support"],
    menu: true,
    menuItems: ["Profile", "Help", "Logout"],
    search: false
  }
}`,...i.parameters?.docs?.source}}};const O=["BasicHeader","NavigationHeader","MenuHeader"];export{o as BasicHeader,i as MenuHeader,l as NavigationHeader,O as __namedExportsOrder,M as default};
