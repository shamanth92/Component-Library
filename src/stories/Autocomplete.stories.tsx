import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Autocomplete } from "@/components/autocomplete";
import { useState } from "react";

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "text" },
      description: "Selected value of Autocomplete",
    },
    options: {
      control: { type: "object" },
      description: "Options List for the Autocomplete",
    },
    label: {
      control: { type: "text" },
      description: "Autocomplete Label",
    },
    onChange: { action: "clicked", description: "Function to select values" },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const BasicAutocomplete: Story = {
  render: (args) => {
    const [val, setVal] = useState("");
    return (
      <div className="max-w-md mx-auto p-6">
        <Autocomplete {...args} value={val} onChange={setVal} />
      </div>
    );
  },
  args: {
    label: "Search Fruits",
    options: [
      { label: "Alabama", value: "AL" },
      { label: "Alaska", value: "AK" },
      { label: "Arizona", value: "AZ" },
      { label: "Arkansas", value: "AR" },
      { label: "California", value: "CA" },
      { label: "Colorado", value: "CO" },
      { label: "Connecticut", value: "CT" },
      { label: "Delaware", value: "DE" },
      { label: "Florida", value: "FL" },
      { label: "Georgia", value: "GA" },
      { label: "Hawaii", value: "HI" },
    ],
  },
};
