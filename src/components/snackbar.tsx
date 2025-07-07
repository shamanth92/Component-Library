"use client";
import { ComponentType, useEffect } from "react";

export enum POSITION {
  TOP_LEFT,
  TOP_RIGHT,
  TOP_CENTER,
  CENTER,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  BOTTOM_CENTER,
}

type SnackBarProps = {
  type?: "basic" | "success" | "error";
  content: string;
  Icon?: ComponentType<React.SVGProps<SVGSVGElement>>;
  action?: string;
  autoDismiss?: boolean;
  visible: boolean;
  dismiss?: (value: boolean) => void;
  position?: POSITION;
};

const positionClasses = {
  0: "fixed top-4 left-4",
  1: "fixed top-4 right-4",
  2: "fixed top-4 left-1/2 transform -translate-x-1/2",
  3: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  4: "fixed bottom-4 left-4",
  5: "fixed bottom-4 right-4",
  6: "fixed bottom-4 left-1/2 transform -translate-x-1/2",
};

export const SnackBar = ({
  content,
  type = "basic",
  Icon,
  action,
  visible,
  autoDismiss,
  dismiss,
  position = POSITION.TOP_CENTER,
}: SnackBarProps) => {
  let bgColor = "";
  switch (type) {
    case "basic":
      bgColor = "bg-sky-500";
      break;
    case "success":
      bgColor = "bg-green-500";
      break;
    case "error":
      bgColor = "bg-red-500";
      break;

    default:
      break;
  }

  const visibilityClasses = visible
    ? "opacity-100 scale-100"
    : "opacity-0 scale-95 pointer-events-none";

  useEffect(() => {
    if (visible && autoDismiss) {
      const timer = setTimeout(() => {
        dismiss?.(false);
      }, 5000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [visible, autoDismiss, dismiss]);

  console.log("positionClasses[position]: ", position);

  return (
    visible && (
      <div
        className={`${positionClasses[position]} ${visibilityClasses} 
        transition-all duration-300 ease-out transform z-50`}
      >
        <div
          className={`flex flex-row ${
            autoDismiss ? "justify-center" : "justify-between"
          } w-75 ${bgColor} p-3 rounded-md`}
        >
          <div>
            <p className="font-mono text-white">{content}</p>
          </div>
          <div>
            {action && (
              <button
                className="text-black font-mono text-sm font-bold cursor-pointer"
                onClick={() => dismiss?.(false)}
              >
                {action}
              </button>
            )}
            {Icon && (
              <button>
                <Icon
                  className="size-4 text-black cursor-pointer"
                  onClick={() => dismiss?.(false)}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};
