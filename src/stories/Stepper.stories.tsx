import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stepper } from "@/components/stepper";
import {
  AcademicCapIcon,
  AtSymbolIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Color of Stepper",
    },
    orientation: {
      control: { type: "text" },
      description: "Orientation of Stepper",
      options: ["Horizontal", "Vertical"],
    },
    activeStep: {
      control: { type: "number" },
      description: "Current active step",
    },
    labels: {
      control: { type: "object" },
      description: "Label of the Stepper steps",
    },
    completedSteps: {
      control: { type: "object" },
      description: "Stepper steps that have been completed",
    },
    Icon: [AcademicCapIcon, AtSymbolIcon, BanknotesIcon],
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const BasicStepper: Story = {
  args: {
    labels: ["Step One", "Step Two", "Step Three"],
    completedSteps: [],
    activeStep: 0,
  },
};

export const VerticalStepper: Story = {
  args: {
    labels: ["Step One", "Step Two", "Step Three"],
    completedSteps: [],
    activeStep: 0,
    orientation: "vertical",
  },
};

export const ColorStepper: Story = {
  args: {
    labels: ["Step One", "Step Two", "Step Three"],
    completedSteps: [0, 1],
    activeStep: 2,
    color: "red",
  },
};

export const IconStepper: Story = {
  args: {
    labels: ["Step One", "Step Two", "Step Three"],
    completedSteps: [],
    activeStep: 0,
    Icon: [AcademicCapIcon, AtSymbolIcon, BanknotesIcon],
  },
};
