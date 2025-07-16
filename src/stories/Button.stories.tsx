import type { Meta, StoryObj } from "@storybook/react";
import { Button, BUTTONTYPES } from "./../components/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["Contained", "Outlined", "Disabled", "Simple"],
      mapping: {
        Contained: BUTTONTYPES.Contained,
        Outlined: BUTTONTYPES.Outlined,
        Disabled: BUTTONTYPES.Disabled,
        Simple: BUTTONTYPES.Simple,
      },
      labels: {
        Contained: "Contained",
        Outlined: "Outlined",
        Disabled: "Disabled",
        Simple: "Simple",
      },
    },
    color: {
      control: { type: "select" },
      options: ["sky", "red", "green", "yellow", "orange"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "base", "lg"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    variant: BUTTONTYPES.Contained,
    children: "Contained Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: BUTTONTYPES.Outlined,
    children: "Outlined Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: BUTTONTYPES.Disabled,
    children: "Disabled Button",
  },
};

export const Simple: Story = {
  args: {
    variant: BUTTONTYPES.Simple,
    children: "Simple Button",
  },
};
