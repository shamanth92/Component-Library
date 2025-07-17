import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "@/components/checkbox";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Checked status of the checkbox",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disabled status of the checkbox",
    },
    size: {
      control: { type: "text" },
      description: "Size of the Checkbox",
    },
    color: {
      control: { type: "text" },
      description: "Color of the checkbox",
    },
    onChange: { action: "clicked", description: "Function to handle checkbox" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const BasicCheckbox: Story = {
  render: (args) => {
    const [val, setVal] = useState(false);
    return (
      <div className="max-w-md mx-auto p-6">
        <Checkbox {...args} checked={val} onChange={setVal} />
      </div>
    );
  },
  args: {
    children: "This is a checkbox",
  },
};

export const ColorCheckbox: Story = {
  args: {
    children: "This is a checkbox",
    color: "red",
    checked: true,
  },
};

export const CheckboxSizes: Story = {
  args: {
    children: "This is a checkbox",
    size: "lg",
  },
};

export const DisabledCheckbox: Story = {
  args: {
    children: "This is a checkbox",
    disabled: true,
  },
};
