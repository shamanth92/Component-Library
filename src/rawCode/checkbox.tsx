export const basicCheckboxCode = `
import { Checkbox } from "@/components/checkbox";

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
`;

export const coloredCheckboxCode = `
import { Checkbox } from "@/components/checkbox";

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
`;

export const sizeCheckboxCode = `
import { Checkbox } from "@/components/checkbox";

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
`;
