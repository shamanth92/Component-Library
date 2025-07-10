"use client";
import { CodeBlock } from "@/components/codeBlock";
import { ComponentLayout } from "@/components/componentLayout";
import { Dropdown } from "@/components/dropdown";
import {
  basicDropdownCode,
  checkboxDropdownCode,
  chipDropdownCode,
  groupDropdownCode,
  multiDropdownCode,
} from "@/rawCode/dropdown";
import { useState } from "react";

export default function DropdownComponent() {
  const [color, setColor] = useState<string | string[]>("red");
  const [city, setCity] = useState<string | string[]>([]);
  const [player, setPlayer] = useState<string | string[]>([]);
  const [food, setFood] = useState<string | string[]>("red");
  const [spot, setSpot] = useState<string | string[]>([]);
  const [showBasicCode, setShowBasicCode] = useState(false);
  const [showMultiCode, setShowMultiCode] = useState(false);
  const [showCheckboxCode, setShowCheckboxCode] = useState(false);
  const [showGroupCode, setShowGroupCode] = useState(false);
  const [showChipCode, setShowChipCode] = useState(false);

  const colorOptions = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
  ];

  const cityOptions = [
    { value: "NYC", label: "New York City" },
    { value: "CHI", label: "Chicago" },
    { value: "SFO", label: "San Francisco" },
  ];

  const playerOptions = [
    { value: "MO", label: "Mo Salah" },
    { value: "SZO", label: "Szoboszlai" },
    { value: "VVD", label: "Van Dijk" },
  ];

  const spotOptions = [
    { value: "BUD", label: "Budapest" },
    { value: "VIE", label: "Vienna" },
    { value: "PRA", label: "Prague" },
  ];

  const foodOptions = [
    {
      group: "Indian",
      items: [
        { value: "dose", label: "Dose" },
        { value: "idli", label: "Idli" },
        { value: "naan", label: "Naan" },
      ],
    },
    {
      group: "Italian",
      items: [
        { value: "pasta", label: "Pasta" },
        { value: "pizza", label: "Pizza" },
        { value: "tiramisu", label: "Tiramisu" },
      ],
    },
    {
      group: "Mexican",
      items: [
        { value: "taco", label: "Taco" },
        { value: "burrito", label: "Burrito" },
      ],
    },
  ];

  return (
    <ComponentLayout componentType="Dropdown">
      <div>
        <p className="font-mono text-lg font-bold">Basic Dropdown</p>
        <div className="flex flex-row justify-evenly">
          <Dropdown
            label="Pick a color"
            value={color}
            options={colorOptions}
            onChange={setColor}
          />
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
            <CodeBlock code={basicDropdownCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold">Multi Select Dropdown</p>
        <div className="flex flex-row justify-evenly">
          <Dropdown
            label="Pick favorite cities"
            value={city}
            options={cityOptions}
            multiple={true}
            onChange={setCity}
          />
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowMultiCode(!showMultiCode)}
          >
            Show code
          </button>
        </div>
        {showMultiCode && (
          <div>
            <CodeBlock code={multiDropdownCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold">Dropdown with Checkbox</p>
        <div className="flex flex-row justify-evenly">
          <Dropdown
            label="Pick favorite players"
            value={player}
            options={playerOptions}
            onChange={setPlayer}
            checkbox={true}
          />
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowCheckboxCode(!showCheckboxCode)}
          >
            Show code
          </button>
        </div>
        {showCheckboxCode && (
          <div>
            <CodeBlock code={checkboxDropdownCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold">Group Dropdown</p>
        <div className="flex flex-row justify-evenly">
          <Dropdown
            label="Pick favorite food"
            value={food}
            groupOptions={foodOptions}
            onChange={setFood}
            group={true}
          />
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowGroupCode(!showGroupCode)}
          >
            Show code
          </button>
        </div>
        {showGroupCode && (
          <div>
            <CodeBlock code={groupDropdownCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold">Chip Dropdown</p>
        <div className="flex flex-row justify-evenly">
          <Dropdown
            label="Pick favorite tourist spot"
            value={spot}
            options={spotOptions}
            chip={true}
            onChange={setSpot}
          />
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowChipCode(!showChipCode)}
          >
            Show code
          </button>
        </div>
        {showChipCode && (
          <div>
            <CodeBlock code={chipDropdownCode} />
          </div>
        )}
      </div>
    </ComponentLayout>
  );
}
