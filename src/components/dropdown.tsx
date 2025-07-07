"use client";
import { useState, useRef, useEffect } from "react";
import { Checkbox } from "./checkbox";

type Option = { value: string; label: string };
type GroupOption = { group: string; items: Option[] };

type DropdownProps = {
  label?: string;
  options?: Option[];
  value: string | string[];
  multiple?: boolean;
  checkbox?: boolean;
  groupOptions?: GroupOption[];
  group?: boolean;
  chip?: boolean;
  onChange: (value: string | string[]) => void;
};

export const Dropdown = ({
  label,
  options,
  value,
  multiple,
  checkbox,
  groupOptions,
  group,
  chip,
  onChange,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string[]>([]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //   const selectedOption = options.find((opt) => opt.value === value);

  const dropdownAction = (opt: Option) => {
    if (!multiple && !checkbox && !chip) {
      setIsOpen(false);
      onChange(opt.value);
    } else {
      const alreadySelected = Array.isArray(value) && value.includes(opt.value);
      const updated = alreadySelected
        ? (value as string[]).filter((v) => v !== opt.value) // remove
        : [...(value as string[]), opt.value]; // add

      onChange(updated);
    }
  };

  const toggleSelection = (value: string, checked: boolean) => {
    setSelected((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  const isSelected = (opt: Option) => {
    return multiple || checkbox
      ? !checkbox
        ? Array.isArray(value) && value.includes(opt.value)
        : Array.isArray(selected) && selected.includes(opt.value)
      : value === opt.value;
  };

  return (
    <div className="relative inline-block text-left w-64" ref={wrapperRef}>
      {label && (
        <label className="block mb-1 text-sm text-gray-700">{label}</label>
      )}
      <button
        type="button"
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!group &&
          !chip &&
          (multiple || checkbox
            ? Array.isArray(value) && value.length > 0
              ? options!
                  .filter((opt) => value.includes(opt.value))
                  .map((opt) => opt.label)
                  .join(", ")
              : "Select options"
            : options?.find((opt) => opt.value === value)?.label ||
              "Select an option")}
        {group &&
          (groupOptions
            ?.flatMap((group) => group.items)
            .find((item) => item.value === value)?.label ||
            "Select an option")}
        {chip &&
          (Array.isArray(value) && value.length > 0
            ? options!
                .filter((opt) => value.includes(opt.value))
                .map((opt) => (
                  <span key={opt.value} className="pr-2">
                    <span className="bg-sky-300 p-1 rounded-md">
                      {opt.label}
                    </span>
                  </span>
                ))
            : "Select options")}
        <span className="float-right">▾</span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {!group &&
            options?.map((opt) => (
              <li
                key={opt.value}
                onClick={(e) => {
                  if (checkbox) {
                    e.stopPropagation();
                    return;
                  }
                  dropdownAction(opt);
                }}
                className={`px-4 py-2 cursor-pointer font-mono hover:bg-sky-100 ${
                  isSelected(opt) ? "bg-sky-100 font-medium" : ""
                }`}
              >
                {!checkbox ? (
                  opt.label
                ) : (
                  <Checkbox
                    key={opt.value}
                    checked={selected.includes(opt.value)}
                    onChange={(checked) => toggleSelection(opt.value, checked)}
                  >
                    {opt.label}
                  </Checkbox>
                )}
              </li>
            ))}
          {group &&
            groupOptions?.map((gr, i) => (
              <div key={i}>
                <div className="bg-sky-500 flex flex-row justify-center text-white">
                  <label className="font-mono font-bold">{gr.group}</label>
                </div>
                {gr.items.map((item) => (
                  <li
                    className={`px-4 py-2 cursor-pointer font-mono hover:bg-sky-100 ${
                      isSelected(item) ? "bg-sky-100 font-medium" : ""
                    }`}
                    key={item.value}
                    onClick={() => {
                      dropdownAction(item);
                    }}
                  >
                    {item.label}
                  </li>
                ))}
              </div>
            ))}
        </ul>
      )}
    </div>
  );
};

//Chips
