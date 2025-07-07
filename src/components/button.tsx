"use client";
import clsx from "clsx";
import { ReactNode } from "react";

export enum BUTTONTYPES {
  Contained,
  Outlined,
  Disabled,
  Simple,
}

type ButtonProps = {
  children: ReactNode;
  variant: BUTTONTYPES;
  color?: string;
  size?: string;
  onClick?: () => void;
};

const bgColors: Record<string, string> = {
  sky: "bg-sky-500",
  red: "bg-red-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  orange: "bg-orange-500",
};

const borderColors: Record<string, string> = {
  sky: "border-sky-500",
  red: "border-red-500",
  green: "border-green-500",
  yellow: "border-yellow-500",
  orange: "border-orange-500",
};

const textColors: Record<string, string> = {
  sky: "text-sky-500",
  red: "text-red-500",
  green: "text-green-500",
  yellow: "text-yellow-500",
  orange: "text-orange-500",
};

const sizeStyles: Record<string, string> = {
  sm: "h-8 px-3 text-sm flex items-center justify-center",
  base: "h-10 px-5 text-base flex items-center justify-center",
  lg: "h-12 px-6 text-lg flex items-center justify-center",
};

export const Button = ({
  variant,
  color = "sky",
  size = "base",
  onClick = () => {},
  children,
}: ButtonProps) => {
  const buttonTextStyles = `font-mono`;
  const buttonTextColor =
    variant === BUTTONTYPES.Outlined || variant === BUTTONTYPES.Simple
      ? textColors[color]
      : "text-white";
  const buttonContentStyle = `${sizeStyles[size]} rounded-md`;
  const outlineButtonStyles = `border-3 ${borderColors[color]}`;
  const containedButtonStyles = `${outlineButtonStyles} ${bgColors[color]}`;
  const disabledButtonStyles = `border-3 border-gray-500 pr-5 pl-5 pt-2 pb-2 rounded-md bg-gray-500`;
  const cursorStyles =
    variant !== BUTTONTYPES.Disabled ? "cursor-pointer" : "cursor-not-allowed";

  let buttonTypeStyle = "";

  switch (variant) {
    case BUTTONTYPES.Outlined:
      buttonTypeStyle = outlineButtonStyles;
      break;
    case BUTTONTYPES.Contained:
      buttonTypeStyle = containedButtonStyles;
      break;
    case BUTTONTYPES.Disabled:
      buttonTypeStyle = disabledButtonStyles;
    default:
      break;
  }

  const buttonClick = () => {
    onClick();
  };

  return (
    <button
      className={clsx(
        buttonTextStyles,
        buttonTextColor,
        buttonContentStyle,
        buttonTypeStyle,
        cursorStyles,
        "hover:shadow-xl"
      )}
      disabled={variant === BUTTONTYPES.Disabled}
      onClick={buttonClick}
    >
      {children}
    </button>
  );
};
