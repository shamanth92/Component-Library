export const basicTabsCode = `
import { TabContent, Tabs } from "@/components/tabs";
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
`;

export const colorTabsCode = `
import { TabContent, Tabs } from "@/components/tabs";

        <div>
          <Tabs
            tabs={["Tab 1", "Tab 2", "Tab 3"]}
            color="red"
            value={first}
            onChange={setFirst}
          />
        </div>
`;

export const disabledTabsCode = `
import { TabContent, Tabs } from "@/components/tabs";

        <div>
          <Tabs
            tabs={["Tab 1", "Tab 2", "Tab 3"]}
            disabled={1}
            value={first}
            onChange={setFirst}
          />
        </div>
`;
