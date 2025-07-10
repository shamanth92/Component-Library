export const basicSwitchCode = `
import { Switch } from "@/components/switch";

        <div className="flex flex-row justify-evenly">
          <Switch></Switch>
          <Switch disabled={true}></Switch>
          <Switch disabled={true} enabledSwitch={true}></Switch>
        </div>
`;

export const colorSwitchCode = `
import { Button, BUTTONTYPES } from "@/components/button";

        <div className="flex flex-row justify-evenly">
          <Switch color="red" enabledSwitch={true}></Switch>
          <Switch color="green" enabledSwitch={true}></Switch>
          <Switch color="yellow" enabledSwitch={true}></Switch>
          <Switch color="orange" enabledSwitch={true}></Switch>
        </div>
`;

export const sizeSwitchCode = `
import { Button, BUTTONTYPES } from "@/components/button";

        <div className="flex flex-row justify-evenly">
          <Switch color="red"></Switch>
          <Switch size="sm"></Switch>
          <Switch size="lg"></Switch>
        </div>
`;
