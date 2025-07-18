import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs, TabContent } from "../components/tabs";
import { useState } from "react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    tabs: {
      control: { type: "object" },
      description: "List of Tab Headers",
    },
    color: {
      control: { type: "select" },
      options: ["sky", "red", "green", "yellow", "orange"],
      description: "Color of Tab Headers",
    },
    disabled: {
      control: { type: "number" },
      description: "Index of tab to disable (-1 for none)",
    },
    value: {
      control: false,
      description: "Index of active tab",
    },
    onChange: {
      control: false,
      description: "Function to handle tab selection",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const BasicTab: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <div className="max-w-2xl mx-auto p-4">
        <Tabs {...args} value={activeTab} onChange={setActiveTab} />
        <TabContent>
          <p className="text-gray-700">Content for: {args.tabs[activeTab]}</p>
        </TabContent>
      </div>
    );
  },
  args: {
    tabs: ["Overview", "Details", "Reviews"],
    disabled: -1,
  },
};

export const ColorTab: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <div className="max-w-2xl mx-auto p-4">
        <Tabs {...args} value={activeTab} onChange={setActiveTab} />
        <TabContent>
          <p className="text-gray-700">Content for: {args.tabs[activeTab]}</p>
        </TabContent>
      </div>
    );
  },
  args: {
    tabs: ["Overview", "Details", "Reviews"],
    color: "green",
  },
};

export const DisabledTab: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <div className="max-w-2xl mx-auto p-4">
        <Tabs {...args} value={activeTab} onChange={setActiveTab} />
        <TabContent>
          <p className="text-gray-700">Content for: {args.tabs[activeTab]}</p>
        </TabContent>
      </div>
    );
  },
  args: {
    tabs: ["Overview", "Details", "Reviews"],
    disabled: 1,
  },
};
