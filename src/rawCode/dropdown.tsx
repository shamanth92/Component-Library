export const basicDropdownCode = `
import { Dropdown } from "@/components/dropdown";

  const colorOptions = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
  ];

        <div className="flex flex-row justify-evenly">
          <Dropdown
            label="Pick a color"
            value={color}
            options={colorOptions}
            onChange={setColor}
          />
        </div>
`;

export const multiDropdownCode = `
import { Dropdown } from "@/components/dropdown";

 const cityOptions = [
    { value: "NYC", label: "New York City" },
    { value: "CHI", label: "Chicago" },
    { value: "SFO", label: "San Francisco" },
  ];

        <div className="flex flex-row justify-evenly">
          <Dropdown
            label="Pick favorite cities"
            value={city}
            options={cityOptions}
            multiple={true}
            onChange={setCity}
          />
        </div>
`;

export const checkboxDropdownCode = `
import { Dropdown } from "@/components/dropdown";

  const playerOptions = [
    { value: "MO", label: "Mo Salah" },
    { value: "SZO", label: "Szoboszlai" },
    { value: "VVD", label: "Van Dijk" },
  ];

        <div className="flex flex-row justify-evenly">
          <Dropdown
            label="Pick favorite players"
            value={player}
            options={playerOptions}
            onChange={setPlayer}
            checkbox={true}
          />
        </div>
`;

export const groupDropdownCode = `
import { Dropdown } from "@/components/dropdown";

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

        <div className="flex flex-row justify-evenly">
          <Dropdown
            label="Pick favorite food"
            value={food}
            groupOptions={foodOptions}
            onChange={setFood}
            group={true}
          />
        </div>
`;

export const chipDropdownCode = `
import { Dropdown } from "@/components/dropdown";

const spotOptions = [
    { value: "BUD", label: "Budapest" },
    { value: "VIE", label: "Vienna" },
    { value: "PRA", label: "Prague" },
  ];

        <div className="flex flex-row justify-evenly">
          <Dropdown
            label="Pick favorite tourist spot"
            value={spot}
            options={spotOptions}
            chip={true}
            onChange={setSpot}
          />
        </div>
`;
