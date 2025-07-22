import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Switch } from "@/components/switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Color of the Switch",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disabled Switch",
    },
    size: {
      control: { type: "text" },
      description: "Size of the Switch",
    },
    enabledSwitch: {
      control: { type: "boolean" },
      description: "Switch enabled by default",
    },
    onClick: {
      action: "clicked",
      description: "Function to handle switch toggle",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const BasicSwitch: Story = {};

export const ColorSwitch: Story = {
  args: {
    color: "green",
  },
};

export const DisabledSwitch: Story = {
  args: {
    disabled: true,
  },
};

export const SizeSwitch: Story = {
  args: {
    size: "lg",
  },
};

export const EnabledSwitch: Story = {
  args: {
    enabledSwitch: true,
  },
};
