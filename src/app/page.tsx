"use client";
import { Button, BUTTONTYPES } from "@/components/button";
import { Header } from "@/components/header";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div>
      <Header
        logoTitle="My Component Library"
        LogoIcon={DevicePhoneMobileIcon}
        searchList={[
          { label: "Accordion", value: "accordion" },
          { label: "Autocomplete", value: "autocomplete" },
          { label: "Avatar", value: "avatar" },
          { label: "Button", value: "button" },
          { label: "Card", value: "card" },
          { label: "Checkbox", value: "checkbox" },
          { label: "Dialog", value: "dialog" },
          { label: "Drawer", value: "drawer" },
          { label: "Dropdown", value: "dropdown" },
          { label: "Header", value: "header" },
          { label: "Snackbar", value: "snackbar" },
          { label: "Stepper", value: "stepper" },
          { label: "Switch", value: "switch" },
          { label: "Tabs", value: "tabs" },
        ]}
        search={true}
        sectionList={[
          {
            name: "Inputs",
            options: [
              "Autocomplete",
              "Button",
              "Checkbox",
              "Dropdown",
              "Switch",
            ],
          },
          {
            name: "Data",
            options: ["Avatar"],
          },
          {
            name: "Feedback",
            options: ["Dialog", "Snackbar"],
          },
          {
            name: "Surface",
            options: ["Accordion", "Card", "Header", "Drawer"],
          },
          {
            name: "Navigation",
            options: ["Stepper", "Tabs"],
          },
        ]}
      />
      <div
        className="flex flex-row justify-evenly bg-orange-50"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-1/2 p-6 border-1 border-sky-300 rounded-lg">
            <p className="font-mono font-bold text-lg">
              Welcome to My Component library!
            </p>
            <p className="font-mono text-sm pb-6">
              A modern, reusable React component library built with Next.js and
              Tailwind CSS — designed to help you build beautiful, consistent
              UIs faster.
            </p>
            <p className="font-bold text-base font-mono">Features</p>
            <ul className="font-mono text-sm">
              <li>Fully customizable React components</li>
              <li>Styled with Tailwind CSS</li>
              <li>Storybook integration</li>
            </ul>
            <div className="flex gap-3 pt-4">
              <Button variant={BUTTONTYPES.Contained}>Docs</Button>
              <Button
                variant={BUTTONTYPES.Contained}
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_STORYBOOK_URL, "_blank")
                }
              >
                Storybook
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="p-4 border-2 border-sky-300 rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://plus.unsplash.com/premium_photo-1674929042421-b7d8805b7d43?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-150 object-cover w-150"
              alt="Description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
