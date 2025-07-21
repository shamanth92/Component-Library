import { Children, isValidElement, ReactNode } from "react";
import { Header } from "./header";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

type LayoutProps = {
  componentType: string;
  children: ReactNode;
};

export const ComponentLayout = ({ componentType, children }: LayoutProps) => {
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
      <div className="p-6 flex flex-col gap-18 bg-orange-50 min-h-screen">
        <div className="flex flex-row justify-center">
          <p className="font-mono font-bold text-xl">
            {componentType} Component
          </p>
        </div>

        <div className="flex flex-col gap-8 w-full">
          {Children.map(children, (child, index) =>
            isValidElement(child) ? (
              <div
                key={index}
                className="border border-gray-300 rounded-md p-4 bg-white shadow-xl"
              >
                {child}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
