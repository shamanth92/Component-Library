"use client";

import { CodeBlock } from "@/components/codeBlock";
import { ComponentLayout } from "@/components/componentLayout";
import { TabContent, Tabs } from "@/components/tabs";
import { basicTabsCode, colorTabsCode, disabledTabsCode } from "@/rawCode/tabs";
import { useState } from "react";

export default function TabsComponent() {
  const [first, setFirst] = useState(0);
  const [showBasicCode, setShowBasicCode] = useState(false);
  const [showColoredCode, setShowColoredCode] = useState(false);
  const [showSizeCode, setShowSizeCode] = useState(false);

  return (
    <ComponentLayout componentType="Tabs">
      <div>
        <p className="font-mono text-lg font-bold pb-8">Basic Tabs</p>
        <div>
          <Tabs
            tabs={["Tab 1", "Tab 2", "Tab 3"]}
            value={first}
            onChange={setFirst}
          />
          {first === 0 && (
            <TabContent>
              Liverpool Football Club is a professional football club based in
              Liverpool, England.
            </TabContent>
          )}
          {first === 1 && (
            <TabContent>
              The club competes in the Premier League, the top tier of English
              football.
            </TabContent>
          )}
          {first === 2 && (
            <TabContent>
              Founded in 1892, the club joined the Football League the following
              year and has played its home games at Anfield since its formation.
            </TabContent>
          )}
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
            <CodeBlock code={basicTabsCode} />
          </div>
        )}
      </div>
      <div>
        <p className="font-mono text-lg font-bold pb-8">Color Tabs</p>
        <div>
          <Tabs
            tabs={["Tab 1", "Tab 2", "Tab 3"]}
            color="red"
            value={first}
            onChange={setFirst}
          />
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
            <CodeBlock code={colorTabsCode} />
          </div>
        )}
      </div>
      <div>
        <p className="font-mono text-lg font-bold pb-8">Disabled Tabs</p>
        <div>
          <Tabs
            tabs={["Tab 1", "Tab 2", "Tab 3"]}
            disabled={1}
            value={first}
            onChange={setFirst}
          />
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
            <CodeBlock code={disabledTabsCode} />
          </div>
        )}
      </div>
    </ComponentLayout>
  );
}
