import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "./../components/dialog";
import { useState } from "react";
import { Button, BUTTONTYPES } from "@/components/button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "Toggle for Dialog",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const BasicDialog: Story = {
  render: (args) => {
    const [openDialog, setOpenDialog] = useState(false);

    return (
      <div className="max-w-2xl mx-auto p-4">
        <button
          className="mb-4 px-4 py-2 bg-sky-600 text-white rounded-md cursor-pointer"
          onClick={() => setOpenDialog(true)}
        >
          Open Dialog
        </button>
        <Dialog {...args} open={openDialog}>
          <DialogTitle>Dialog Title</DialogTitle>
          <hr className="text-gray-300"></hr>
          <DialogContent>Illinois is a midwestern state</DialogContent>
          <hr className="text-gray-300"></hr>
          <DialogActions>
            <Button variant={BUTTONTYPES.Contained}>SUBMIT</Button>
            <Button
              variant={BUTTONTYPES.Outlined}
              onClick={() => setOpenDialog(false)}
            >
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  },
};
