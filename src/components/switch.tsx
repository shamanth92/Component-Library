"use client";
import { useState } from "react";

type SwitchProps = {
  disabled?: boolean;
  color?: string;
  size?: string;
  enabledSwitch?: boolean;
  onClick?: () => void;
};

const bgColors: Record<string, string> = {
  sky: "bg-sky-500",
  red: "bg-red-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  orange: "bg-orange-500",
};

const sizeSwitch: Record<string, string> = {
  sm: "w-12 h-5",
  md: "w-14 h-6",
  lg: "w-17 h-8",
};

const sizeSmallSwitch: Record<string, string> = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-7 h-7",
};

export const Switch = ({
  disabled,
  color = "sky",
  size = "md",
  enabledSwitch = false,
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(enabledSwitch);

  let position = "7";
  position = size === "lg" ? "8" : size === "sm" ? "6" : position;

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`${
        sizeSwitch[size]
      } flex items-center rounded-full p-1 duration-300 ease-in-out relative
        ${
          enabled
            ? !disabled
              ? bgColors[color]
              : "bg-sky-200"
            : !disabled
            ? "bg-gray-400"
            : "bg-gray-200"
        }`}
      disabled={disabled}
    >
      <div
        className={`bg-white ${
          sizeSmallSwitch[size]
        } rounded-full shadow-md transform duration-300 ease-in-out
          ${enabled ? `translate-x-${position}` : "translate-x-0"}`}
      />
    </button>
  );
};
