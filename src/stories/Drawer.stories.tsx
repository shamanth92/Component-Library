import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Drawer, SideBarTitle, SideBarOptions } from "../components/drawer";
import {
  ArrowUpCircleIcon,
  BookOpenIcon,
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    logout: { control: "boolean" },
    open: { control: false },
    onClose: { control: false },
  },
};
export default meta;
type Story = StoryObj<typeof Drawer>;

export const BasicDrawer: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
      <div className="p-4">
        <button
          className="mb-4 px-4 py-2 bg-sky-600 text-white rounded-md"
          onClick={() => setOpen(true)}
        >
          Open Drawer
        </button>
        <Drawer {...args} open={open} onClose={handleClose}>
          <SideBarTitle
            title="Company Title"
            Icon={ClipboardDocumentCheckIcon}
          />
          <SideBarOptions
            optionList={[
              "Overview",
              "Payments",
              "Account",
              "Analytics",
              "Settings",
            ]}
            OptionIconList={[
              ClipboardDocumentCheckIcon,
              ArrowUpCircleIcon,
              BookOpenIcon,
              CalculatorIcon,
              Cog8ToothIcon,
            ]}
          />
        </Drawer>
      </div>
    );
  },
  args: {
    position: "left",
    logout: true,
  },
};

export const DrawerWithSections: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
      <div className="p-4">
        <button
          className="mb-4 px-4 py-2 bg-sky-600 text-white rounded-md"
          onClick={() => setOpen(true)}
        >
          Open Drawer
        </button>
        <Drawer {...args} open={open} onClose={handleClose}>
          <SideBarTitle
            title="Company Title"
            Icon={ClipboardDocumentCheckIcon}
          />
          <SideBarOptions
            sections={true}
            sectionList={[
              {
                name: "Payment",
                options: ["Cards", "History"],
                OptionIconList: [ClipboardDocumentCheckIcon, ArrowUpCircleIcon],
              },
              {
                name: "Account",
                options: ["Profile", "Settings", "Address"],
                OptionIconList: [BookOpenIcon, CalculatorIcon, Cog8ToothIcon],
              },
            ]}
          />
        </Drawer>
      </div>
    );
  },
  args: {
    position: "left",
    logout: true,
  },
};

export const DrawerRightPosition: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
      <div className="p-4">
        <button
          className="mb-4 px-4 py-2 bg-sky-600 text-white rounded-md"
          onClick={() => setOpen(true)}
        >
          Open Drawer
        </button>
        <Drawer {...args} open={open} onClose={handleClose}>
          <SideBarTitle
            title="Company Title"
            Icon={ClipboardDocumentCheckIcon}
          />
          <SideBarOptions
            optionList={[
              "Overview",
              "Payments",
              "Account",
              "Analytics",
              "Settings",
            ]}
            OptionIconList={[
              ClipboardDocumentCheckIcon,
              ArrowUpCircleIcon,
              BookOpenIcon,
              CalculatorIcon,
              Cog8ToothIcon,
            ]}
          />
        </Drawer>
      </div>
    );
  },
  args: {
    position: "right",
    logout: true,
  },
};
