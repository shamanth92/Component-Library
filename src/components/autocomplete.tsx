"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

type Option = { value: string; label: string };

type AutoCompleteProps = {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export const Autocomplete = ({
  label,
  options,
  value,
  onChange,
}: AutoCompleteProps) => {
  const [openList, setOpenList] = useState(false);
  const [letter, setLetter] = useState("");
  const [resultList, setResultList] = useState<Option[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpenList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const autocompleteSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setOpenList(true);
    setLetter(e.target.value);
    const results = options.filter((option) =>
      option.label.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (results.length > 0) {
      setResultList(results);
    } else {
      setResultList([{ label: "No Results", value: "NoResult" }]);
    }
  };

  const setAutoCompleteValue = (option: Option) => {
    setOpenList(false);
    onChange(option.label);
  };

  return (
    <div className="relative w-full max-w-md">
      <label
        htmlFor="autocomplete-input"
        className="block mb-1 text-sm font-mono text-gray-700"
      >
        {label}
      </label>
      <div className="relative" ref={wrapperRef}>
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onInput={autocompleteSearch}
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
          <button
            onClick={() => setOpenList(!openList)}
            className="cursor-pointer"
          >
            <ChevronDownIcon className="w-5 h-5 text-sky-500" />
          </button>
        </div>
      </div>

      {openList && letter.length < 1 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
              key={option.value}
              onMouseDown={() => setAutoCompleteValue(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {openList && letter.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {resultList.map((list) => (
            <li
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
              key={list.value}
              onMouseDown={() => setAutoCompleteValue(list)}
            >
              {list.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
