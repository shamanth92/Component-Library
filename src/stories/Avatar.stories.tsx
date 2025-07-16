import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "@/components/avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "text" },
      description: "Image or Alpha Avatar",
    },
    color: {
      control: { type: "text" },
      description: "Color of the Avatar",
    },
    size: {
      control: { type: "text" },
      description: "Size of the Avatar",
    },
    label: {
      control: { type: "text" },
      description: "Label of the Alpha Avatar",
    },
    url: {
      control: { type: "text" },
      description: "Image url of the Avatar",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AlphaAvatar: Story = {
  args: {
    type: "alpha",
    label: "SK",
  },
};

export const ImageAvatar: Story = {
  args: {
    type: "image",
    url: "https://images.unsplash.com/photo-1613145997970-db84a7975fbb",
  },
};

export const ColorAvatar: Story = {
  args: {
    type: "alpha",
    color: "green",
    label: "SK",
  },
};

export const SizeAvatar: Story = {
  args: {
    type: "alpha",
    label: "SK",
    size: "lg",
  },
};
