"use client";
import { Checkbox } from "@/components/checkbox";
import { CodeBlock } from "@/components/codeBlock";
import { ComponentLayout } from "@/components/componentLayout";
import {
  basicCheckboxCode,
  coloredCheckboxCode,
  sizeCheckboxCode,
} from "@/rawCode/checkbox";
import { useState } from "react";

export default function CheckboxComponent() {
  const [checked, setChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(true);
  const [colorChecked, setColorChecked] = useState(true);
  const [showBasicCode, setShowBasicCode] = useState(false);
  const [showColoredCode, setShowColoredCode] = useState(false);
  const [showSizeCode, setShowSizeCode] = useState(false);

  return (
    <ComponentLayout componentType="Checkbox">
      <div>
        <p className="font-mono text-lg font-bold pb-8">Basic Checkboxes</p>
        <div className="flex flex-row justify-evenly">
          <Checkbox onChange={setChecked} checked={checked}>
            Enable Checkbox
          </Checkbox>
          <Checkbox checked={secondChecked} onChange={setSecondChecked}>
            Checked Checkbox
          </Checkbox>
          <Checkbox disabled={true}>Disabled Checkbox</Checkbox>
          <Checkbox disabled={true} checked={true}>
            Disabled Checkbox
          </Checkbox>
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowBasicCode(!showBasicCode)}
          >
            Show code
          </button>
        </div>
        {showBasicCode && (
          <div>
            <CodeBlock code={basicCheckboxCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold pb-8">Color Checkboxes</p>
        <div className="flex flex-row justify-evenly">
          <Checkbox
            color="red"
            checked={colorChecked}
            onChange={setColorChecked}
          >
            Red
          </Checkbox>
          <Checkbox
            color="green"
            checked={colorChecked}
            onChange={setColorChecked}
          >
            Green
          </Checkbox>
          <Checkbox
            color="yellow"
            checked={colorChecked}
            onChange={setColorChecked}
          >
            Yellow
          </Checkbox>
          <Checkbox
            color="orange"
            checked={colorChecked}
            onChange={setColorChecked}
          >
            Orange
          </Checkbox>
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowColoredCode(!showColoredCode)}
          >
            Show code
          </button>
        </div>
        {showColoredCode && (
          <div>
            <CodeBlock code={coloredCheckboxCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold pb-8">Checkbox Sizes</p>
        <div className="flex flex-row justify-evenly">
          <Checkbox checked={colorChecked} onChange={setColorChecked} size="sm">
            Small
          </Checkbox>
          <Checkbox checked={colorChecked} onChange={setColorChecked}>
            Normal
          </Checkbox>
          <Checkbox checked={colorChecked} onChange={setColorChecked} size="lg">
            Large
          </Checkbox>
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowSizeCode(!showSizeCode)}
          >
            Show code
          </button>
        </div>
        {showSizeCode && (
          <div>
            <CodeBlock code={sizeCheckboxCode} />
          </div>
        )}
      </div>
    </ComponentLayout>
  );
}
