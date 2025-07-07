"use client";

import { ReactNode } from "react";

type CheckBoxProps = {
  children: ReactNode;
  disabled?: boolean;
  checked?: boolean;
  size?: string;
  color?: string;
  onChange?: (checked: boolean) => void;
};

const checkboxColors: Record<string, string> = {
  sky: "accent-sky-600",
  red: "accent-red-600",
  green: "accent-green-600",
  yellow: "accent-yellow-700",
  orange: "accent-orange-600",
};

const checkboxSizes: Record<string, string> = {
  sm: "w-3 h-3",
  md: "w-5 h-5",
  lg: "w-7 h-7",
};

export const Checkbox = ({
  disabled,
  checked = false,
  color = "sky",
  size = "md",
  onChange = () => {},
  children,
}: CheckBoxProps) => {
  const checkboxStyles = `${checkboxSizes[size]} ${checkboxColors[color]}`;

  return (
    <div>
      <label className="flex items-center font-mono text-base gap-2">
        <input
          type="checkbox"
          className={checkboxStyles}
          disabled={disabled}
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        {children}
      </label>
    </div>
  );
};
