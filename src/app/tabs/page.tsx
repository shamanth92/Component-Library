"use client";

import { TabContent, Tabs } from "@/components/tabs";
import { useState } from "react";

export default function TabsComponent() {
  const [first, setFirst] = useState(0);
  console.log("first: ", first);

  return (
    <div className="p-6 flex flex-col gap-18 bg-orange-50 h-screen">
      <div className="flex flex-row justify-center">
        <p className="font-mono font-bold text-xl">Tabs Component</p>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Basic Tabs</p>
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
                Founded in 1892, the club joined the Football League the
                following year and has played its home games at Anfield since
                its formation.
              </TabContent>
            )}
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Color Tabs</p>
          <div>
            <Tabs
              tabs={["Tab 1", "Tab 2", "Tab 3"]}
              color="red"
              value={first}
              onChange={setFirst}
            />
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Disabled Tabs</p>
          <div>
            <Tabs
              tabs={["Tab 1", "Tab 2", "Tab 3"]}
              disabled={1}
              value={first}
              onChange={setFirst}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
