"use client";
import { CodeBlock } from "@/components/codeBlock";
import { ComponentLayout } from "@/components/componentLayout";
import { Switch } from "@/components/switch";
import {
  basicSwitchCode,
  colorSwitchCode,
  sizeSwitchCode,
} from "@/rawCode/switch";
import { useState } from "react";

export default function SwitchComponent() {
  const [showBasicCode, setShowBasicCode] = useState(false);
  const [showColoredCode, setShowColoredCode] = useState(false);
  const [showSizeCode, setShowSizeCode] = useState(false);

  return (
    <ComponentLayout componentType="Switch">
      <div>
        <p className="font-mono text-lg font-bold pb-4">Basic Switch</p>
        <div className="flex flex-row justify-evenly">
          <Switch></Switch>
          <Switch disabled={true}></Switch>
          <Switch disabled={true} enabledSwitch={true}></Switch>
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
            <CodeBlock code={basicSwitchCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold pb-4">Color Switch</p>
        <div className="flex flex-row justify-evenly">
          <Switch color="red" enabledSwitch={true}></Switch>
          <Switch color="green" enabledSwitch={true}></Switch>
          <Switch color="yellow" enabledSwitch={true}></Switch>
          <Switch color="orange" enabledSwitch={true}></Switch>
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
            <CodeBlock code={colorSwitchCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold pb-4">Size Switch</p>
        <div className="flex flex-row justify-evenly">
          <Switch color="red"></Switch>
          <Switch size="sm"></Switch>
          <Switch size="lg"></Switch>
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
            <CodeBlock code={sizeSwitchCode} />
          </div>
        )}
      </div>
    </ComponentLayout>
  );
}
