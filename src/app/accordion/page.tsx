"use client";
import { Accordion } from "@/components/accordion";
import { CodeBlock } from "@/components/codeBlock";
import { ComponentLayout } from "@/components/componentLayout";
import {
  basicAccordionCode,
  disabledAccordionCode,
  expandedAccordionCode,
} from "@/rawCode/accordion";
import { useState } from "react";

export default function AccordionComponent() {
  const [showBasicCode, setShowBasicCode] = useState(false);
  const [showDisabledCode, setShowDisabledCode] = useState(false);
  const [showExpandedCode, setShowExpandedCode] = useState(false);
  const content = [
    {
      title: "Title One",
      content:
        "Dominik Szoboszlai is a Hungarian professional footballer who plays as a midfielder for Premier League club Liverpool and captains the Hungary national team.",
    },
    {
      title: "Title Two",
      content:
        "Alexis Mac Allister is an Argentine professional footballer who plays as a midfielder for Premier League club Liverpool and the Argentina national team.",
    },
    {
      title: "Title Three",
      content:
        "Wataru Endo is a Japanese professional footballer who plays as a defensive midfielder for Premier League club Liverpool and captains the Japan national team.",
    },
  ];

  return (
    <ComponentLayout componentType="Accordion">
      <div>
        <p className="font-mono text-lg font-bold">Basic Accordion</p>
        <div className="flex flex-row justify-evenly">
          <Accordion content={content} />
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
            <CodeBlock code={basicAccordionCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold">Disabled Accordion</p>
        <div className="flex flex-row justify-evenly">
          <Accordion content={content} disabled={[0, 2]} />
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowDisabledCode(!showDisabledCode)}
          >
            Show code
          </button>
        </div>
        {showDisabledCode && (
          <div>
            <CodeBlock code={disabledAccordionCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold">Expanded Accordion</p>
        <div className="flex flex-row justify-evenly">
          <Accordion content={content} expanded={[0, 2]} />
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowExpandedCode(!showExpandedCode)}
          >
            Show code
          </button>
        </div>
        {showExpandedCode && (
          <div>
            <CodeBlock code={expandedAccordionCode} />
          </div>
        )}
      </div>
    </ComponentLayout>
  );
}
