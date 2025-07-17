import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "@/components/header";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    logoTitle: {
      control: { type: "text" },
      description: "Main Title of the Header",
    },
    menu: {
      control: { type: "boolean" },
      description: "True if the header should display menu options",
    },
    menuItems: {
      control: { type: "object" },
      description: "Menu items when menu is true",
    },
    search: {
      control: { type: "boolean" },
      description: "True if header should have Search autocomplete",
    },
    searchList: {
      control: { type: "object" },
      description: "Search items when search is true",
    },
    headerLinks: {
      control: { type: "object" },
      description: "Navigation items",
    },
    LogoIcon: AcademicCapIcon,
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const BasicHeader: Story = {
  args: {
    logoTitle: "Company Title",
    LogoIcon: AcademicCapIcon,
    search: true,
    searchList: [
      { label: "Alabama", value: "AL" },
      { label: "Alaska", value: "AK" },
      { label: "Arizona", value: "AZ" },
      { label: "Arkansas", value: "AR" },
      { label: "California", value: "CA" },
    ],
  },
};

export const NavigationHeader: Story = {
  args: {
    logoTitle: "Company Title",
    LogoIcon: AcademicCapIcon,
    search: true,
    searchList: [
      { label: "Alabama", value: "AL" },
      { label: "Alaska", value: "AK" },
      { label: "Arizona", value: "AZ" },
      { label: "Arkansas", value: "AR" },
      { label: "California", value: "CA" },
    ],
    headerLinks: ["Home", "Products", "Account", "Support"],
  },
};

export const MenuHeader: Story = {
  args: {
    logoTitle: "Company Title",
    LogoIcon: AcademicCapIcon,
    headerLinks: ["Home", "Products", "Account", "Support"],
    menu: true,
    menuItems: ["Profile", "Help", "Logout"],
    search: false
  },
};
