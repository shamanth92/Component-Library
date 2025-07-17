import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Dropdown } from "@/components/dropdown";
import { useState } from "react";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Dropdown Label",
    },
    options: {
      control: { type: "object" },
      description: "Array of Dropdown Options",
    },
    value: {
      control: { type: "text" },
      description: "Selected Dropdown value",
    },
    multiple: {
      control: { type: "boolean" },
      description: "Dropdown type for multiple selection",
    },
    checkbox: {
      control: { type: "boolean" },
      description: "Dropdown with checkbox options",
    },
    groupOptions: {
      control: { type: "object" },
      description: "Group Dropdown Options",
    },
    group: {
      control: { type: "boolean" },
      description: "Group Dropdown",
    },
    chip: {
      control: { type: "boolean" },
      description: "Dropdown with Chip",
    },
    onChange: {
      action: "clicked",
      description: "Function to handle dropdown selection",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const Options = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
];

export const BasicDropdown: Story = {
  render: (args) => {
    const [val, setVal] = useState<string | string[]>("red");
    return (
      <div className="max-w-md mx-auto p-6">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>
    );
  },
  args: {
    label: "Pick a color",
    options: Options,
  },
};

export const MultiSelectDropdown: Story = {
  render: (args) => {
    const [val, setVal] = useState<string | string[]>("red");
    return (
      <div className="max-w-md mx-auto p-6">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>
    );
  },
  args: {
    label: "Pick a color",
    options: Options,
    multiple: true,
  },
};

export const CheckboxDropdown: Story = {
  render: (args) => {
    const [val, setVal] = useState<string | string[]>("red");
    return (
      <div className="max-w-md mx-auto p-6">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>
    );
  },
  args: {
    label: "Pick a color",
    options: Options,
    checkbox: true,
  },
};

export const GroupDropdown: Story = {
  render: (args) => {
    const [val, setVal] = useState<string | string[]>("red");
    return (
      <div className="max-w-md mx-auto p-6">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>
    );
  },
  args: {
    label: "Pick a color",
    groupOptions: [
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
    ],
    group: true,
  },
};

export const ChipDropdown: Story = {
  render: (args) => {
    const [val, setVal] = useState<string | string[]>("red");
    return (
      <div className="max-w-md mx-auto p-6">
        <Dropdown {...args} value={val} onChange={setVal} />
      </div>
    );
  },
  args: {
    label: "Pick a color",
    options: Options,
    chip: true,
  },
};
