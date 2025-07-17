import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { POSITION, SnackBar } from "@/components/snackbar";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const meta: Meta<typeof SnackBar> = {
  title: "Components/SnackBar",
  component: SnackBar,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      description: "Type of Snackbar",
      options: ["basic", "success", "error"],
    },
    content: {
      control: { type: "text" },
      description: "Snackbar content",
    },
    action: {
      control: { type: "text" },
      description: "Snackbar dismiss action",
    },
    autoDismiss: {
      control: { type: "boolean" },
      description: "Auto Dismiss Snackbar after 5s",
    },
    visible: {
      control: { type: "boolean" },
      description: "Toggle Snackbar",
    },
    dismiss: {
      action: "clicked",
      description: "Function to dismiss Snackbar",
    },
    position: {
      control: { type: "select" },
      description: "Position of the Snackbar",
      options: [
        "BOTTOM_CENTER",
        "BOTTOM_LEFT",
        "BOTTOM_RIGHT",
        "CENTER",
        "TOP_CENTER",
        "TOP_LEFT",
        "TOP_RIGHT",
      ],
      mapping: {
        BOTTOM_CENTER: POSITION.BOTTOM_CENTER,
        BOTTOM_LEFT: POSITION.BOTTOM_LEFT,
        BOTTOM_RIGHT: POSITION.BOTTOM_RIGHT,
        CENTER: POSITION.CENTER,
        TOP_CENTER: POSITION.TOP_CENTER,
        TOP_LEFT: POSITION.TOP_LEFT,
        TOP_RIGHT: POSITION.TOP_RIGHT,
      },
      labels: {
        Contained: "Contained",
        Outlined: "Outlined",
        Disabled: "Disabled",
        Simple: "Simple",
      },
      Icon: {
        control: false,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SnackBar>;

export const BasicSnackBar: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);

    return (
      <>
        <button
          className="mb-4 px-4 py-2 bg-sky-600 text-white rounded-md"
          onClick={() => setShow(true)}
        >
          Show Snackbar
        </button>
        {show && (
          <SnackBar
            {...args}
            visible={show}
            dismiss={setShow}
            Icon={XMarkIcon}
          />
        )}
      </>
    );
  },
  args: {
    content: "This is a snackbar",
    type: "basic",
    position: POSITION.TOP_CENTER,
  },
};

export const AutoDismissSnackBar: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);

    return (
      <>
        <button
          className="mb-4 px-4 py-2 bg-sky-600 text-white rounded-md"
          onClick={() => setShow(true)}
        >
          Show Snackbar
        </button>
        {show && <SnackBar {...args} visible={show} dismiss={setShow} />}
      </>
    );
  },
  args: {
    content: "This is a snackbar",
    type: "success",
    autoDismiss: true,
    position: POSITION.TOP_CENTER,
  },
};

export const PositionsSnackBar: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);

    return (
      <>
        <button
          className="mb-4 px-4 py-2 bg-sky-600 text-white rounded-md"
          onClick={() => setShow(true)}
        >
          Show Snackbar
        </button>
        {show && <SnackBar {...args} visible={show} dismiss={setShow} />}
      </>
    );
  },
  args: {
    content: "This is a snackbar",
    type: "error",
    autoDismiss: true,
    position: POSITION.BOTTOM_RIGHT,
  },
};
