"use client";
import { Checkbox } from "@/components/checkbox";
import { useState } from "react";

export default function CheckboxComponent() {
  const [checked, setChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(true);
  const [colorChecked, setColorChecked] = useState(true);

  return (
    <div className="p-6 flex flex-col gap-15 bg-orange-50 h-screen">
      <div className="flex flex-row justify-center">
        <p className="font-mono font-bold text-xl">Checkbox Component</p>
      </div>
      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Basic Checkboxes</p>
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
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Color Checkboxes</p>
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
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Checkbox Sizes</p>
          <div className="flex flex-row justify-evenly">
            <Checkbox
              checked={colorChecked}
              onChange={setColorChecked}
              size="sm"
            >
              Small
            </Checkbox>
            <Checkbox checked={colorChecked} onChange={setColorChecked}>
              Normal
            </Checkbox>
            <Checkbox
              checked={colorChecked}
              onChange={setColorChecked}
              size="lg"
            >
              Large
            </Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
}
