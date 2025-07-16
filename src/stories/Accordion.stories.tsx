import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./../components/accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    expanded: {
      description: "Indexes of panels expanded by default",
      control: { type: "object" },
    },
    disabled: {
      description: "Indexes of panels disabled",
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleContent = [
  {
    title: "Accordion Item 1",
    content: "This is the content of the first item.",
  },
  {
    title: "Accordion Item 2",
    content: "This is the content of the second item.",
  },
  {
    title: "Accordion Item 3",
    content: "This is the content of the third item.",
  },
];

export const Basic: Story = {
  args: {
    content: sampleContent,
  },
};

export const Expanded: Story = {
  args: {
    content: sampleContent,
    expanded: [0, 2],
  },
};

export const Disabled: Story = {
  args: {
    content: sampleContent,
    disabled: [1],
  },
};

export const ExpandedAndDisabled: Story = {
  args: {
    content: sampleContent,
    expanded: [0],
    disabled: [2],
  },
};
