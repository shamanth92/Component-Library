"use client";

import { ReactNode, useState } from "react";

type TabsProps = {
  tabs: string[];
  color?: string;
  disabled?: number;
  value: number;
  onChange: (value: number) => void;
};

export const Tabs = ({
  tabs,
  color = "sky",
  disabled = -1,
  onChange,
}: TabsProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const selectTab = (index: number) => {
    setTabIndex(index);
    onChange(index);
  };

  return (
    <div>
      {tabs.map((tab, index) => (
        <button
          className={`font-mono text-lg w-40 h-10 bg ${
            tabIndex === index && disabled !== index
              ? `border-b-2 border-${color}-500 text-${color}-500`
              : "text-black"
          } ${disabled === index ? " text-gray-300" : "cursor-pointer"}`}
          onClick={() => selectTab(index)}
          key={tab}
          disabled={disabled === index}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

type TabContentProps = {
  children: ReactNode;
};

export const TabContent = ({ children }: TabContentProps) => {
  return <div className="font-mono tex-base p-10">{children}</div>;
};
