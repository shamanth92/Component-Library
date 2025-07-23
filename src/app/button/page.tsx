"use client";
import { Button, BUTTONTYPES } from "@/components/button";
import { CodeBlock } from "@/components/codeBlock";
import {
  basicButtonCode,
  coloredButtonCode,
  sizeButtonCode,
} from "./../../rawCode/button";
import { useState } from "react";
import { ComponentLayout } from "@/components/componentLayout";

export default function ButtonComponent() {
  const [showBasicCode, setShowBasicCode] = useState(false);
  const [showColoredCode, setShowColoredCode] = useState(false);
  const [showSizeCode, setShowSizeCode] = useState(false);

  return (
    <ComponentLayout componentType="Button">
      <div className="font-mono">
        A versatile and accessible button component that supports multiple
        variants, sizes, and interaction states. Built for reusability, it can
        be used across forms, modals, toolbars, and interactive UI elements.
        <p className="font-bold pt-4">Key features: </p>
        <ul>
          <li>Supports variant prop</li>
          <li>Optional size prop</li>
          <li>Supports loading/disabled states</li>
        </ul>
      </div>
      <div>
        <p className="font-mono text-lg font-bold">Basic Buttons</p>
        <div className="flex flex-row justify-evenly">
          <Button
            variant={BUTTONTYPES.Contained}
            onClick={() => console.log("Button Clicked")}
          >
            CONTAINED
          </Button>
          <Button variant={BUTTONTYPES.Disabled}>DISABLED</Button>
          <Button variant={BUTTONTYPES.Outlined}>OUTLINED</Button>
          <Button variant={BUTTONTYPES.Simple}>SIMPLE</Button>
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
            <CodeBlock code={basicButtonCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold">Color Buttons</p>
        <div className="flex flex-row justify-evenly">
          <Button variant={BUTTONTYPES.Contained} color="yellow">
            YELLOW
          </Button>
          <Button variant={BUTTONTYPES.Outlined} color="red">
            RED
          </Button>
          <Button variant={BUTTONTYPES.Simple} color="green">
            GREEN
          </Button>
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
            <CodeBlock code={coloredButtonCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold">Button Sizes</p>
        <div className="flex flex-row justify-evenly">
          <Button variant={BUTTONTYPES.Contained} size="lg">
            LARGE
          </Button>
          <Button variant={BUTTONTYPES.Contained} size="sm">
            SMALL
          </Button>
          <Button variant={BUTTONTYPES.Contained}>NORMAL</Button>
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
            <CodeBlock code={sizeButtonCode} />
          </div>
        )}
      </div>
    </ComponentLayout>
  );
}
