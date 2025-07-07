"use client";
import { Dropdown } from "@/components/dropdown";
import { useState } from "react";

export default function DropdownComponent() {
  const [color, setColor] = useState<string | string[]>("red");
  const [city, setCity] = useState<string | string[]>([]);
  const [player, setPlayer] = useState<string | string[]>([]);
  const [food, setFood] = useState<string | string[]>("red");
  const [spot, setSpot] = useState<string | string[]>([]);

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
    <div className="p-6 flex flex-col gap-15 bg-orange-50 h-full">
      <div className="flex flex-row justify-center">
        <p className="font-mono font-bold text-xl">Dropdown Component</p>
      </div>
      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-4 w-full">
          <p className="font-mono text-lg font-bold">Basic Dropdown</p>
          <div className="flex flex-row justify-evenly">
            <Dropdown
              label="Pick a color"
              value={color}
              options={colorOptions}
              onChange={setColor}
            />
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-4 w-full">
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
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-4 w-full">
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
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-4 w-full">
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
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-4 w-full">
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
        </div>
      </div>
    </div>
    // <div className="p-6">
    //   <Dropdown
    //     label="Pick a color"
    //     value={color}
    //     options={colorOptions}
    //     onChange={setColor}
    //   />
    //   <Dropdown
    //     label="Pick favorite cities"
    //     value={city}
    //     options={cityOptions}
    //     multiple={true}
    //     onChange={setCity}
    //   />
    //   <Dropdown
    //     label="Pick favorite players"
    //     value={player}
    //     options={playerOptions}
    //     onChange={setPlayer}
    //     checkbox={true}
    //   />
    //   <Dropdown
    //     label="Pick favorite food"
    //     value={food}
    //     groupOptions={foodOptions}
    //     onChange={setFood}
    //     group={true}
    //   />
    //   <Dropdown
    //     label="Pick favorite tourist spot"
    //     value={spot}
    //     options={spotOptions}
    //     chip={true}
    //     onChange={setSpot}
    //   />
    // </div>
  );
}
