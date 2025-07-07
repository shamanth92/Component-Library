"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type Content = {
  title: string;
  content: string;
};

type AccordionProps = {
  content: Content[];
  icon?: string;
  expanded?: number[];
  disabled?: number[];
};

export const Accordion = ({
  content,
  expanded = [],
  disabled = [],
}: AccordionProps) => {
  const [openStates, setOpenStates] = useState<boolean[]>(
    content.map((_, index) => expanded.includes(index))
  );

  const toggleItem = (index: number) => {
    const newStates = [...openStates];
    newStates[index] = !newStates[index];
    setOpenStates(newStates);
  };

  const isDisabled = (i: number) => {
    return disabled?.includes(i);
  };

  return (
    <div className="w-full">
      {content.map((con, index) => (
        <div
          key={index}
          className={`${openStates[index] ? "py-6" : ""} drop-shadow-xl`}
        >
          <button
            className={`w-full border-b border-gray-300 text-left px-4 py-3 cursor-pointer flex flex-row justify-between transition-colors duration-300 ${
              !isDisabled(index) ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => toggleItem(index)}
            disabled={isDisabled(index)}
          >
            <span className="font-mono">{con.title}</span>
            <ChevronDownIcon className="size-6 text-sky-500" />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openStates[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-3 text-gray-700 bg-gray-50 font-mono">
              {con.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
