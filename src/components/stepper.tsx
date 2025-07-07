"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import { ComponentType } from "react";

type StepperProps = {
  labels: string[];
  color?: string;
  orientation?: "horizontal" | "vertical";
  completedSteps: number[];
  activeStep: number;
  Icon?: ComponentType<React.SVGProps<SVGSVGElement>>[];
};

export const Stepper = ({
  labels,
  orientation = "horizontal",
  color = "sky",
  completedSteps,
  activeStep,
  Icon,
}: StepperProps) => {
  return orientation === "horizontal" ? (
    <div className="flex flex-row">
      {!Icon &&
        labels.map((label: string, index: number) => (
          <div key={label} className="flex flex-row">
            <div className="inline-flex flex-col items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full ${
                  activeStep === index && !completedSteps.includes(index)
                    ? `bg-${color}-500`
                    : "bg-gray-300"
                } flex items-center justify-center`}
              >
                {completedSteps.includes(index) && (
                  <CheckIcon className="size-6 text-white" />
                )}
                {!completedSteps.includes(index) && (
                  <span className="text-white text-lg font-mono">
                    {index + 1}
                  </span>
                )}
              </div>

              <span className="font-mono text-base">{label}</span>
            </div>
            {labels.length - 1 !== index && (
              <div className="h-10 flex flex-col items-center justify-center">
                <div className="w-50 h-px bg-gray-300" />
              </div>
            )}
          </div>
        ))}
      {Icon &&
        Icon.map(
          (Ic: ComponentType<React.SVGProps<SVGSVGElement>>, index: number) => (
            <div key={index} className="flex flex-row">
              <div className="inline-flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full ${
                    activeStep === index && !completedSteps.includes(index)
                      ? `bg-${color}-500`
                      : "bg-gray-300"
                  } flex items-center justify-center`}
                >
                  {completedSteps.includes(index) && (
                    <CheckIcon className="size-6 text-white" />
                  )}
                  {!completedSteps.includes(index) && (
                    <span className="text-white text-lg font-mono">
                      <Ic className="size-6 text-white" />
                    </span>
                  )}
                </div>

                <span className="font-mono text-base">{labels[index]}</span>
              </div>
              {labels.length - 1 !== index && (
                <div className="h-10 flex flex-col items-center justify-center">
                  <div className="w-50 h-px bg-gray-300" />
                </div>
              )}
            </div>
          )
        )}
    </div>
  ) : (
    <div className="flex flex-col">
      {!Icon &&
        labels.map((label: string, index: number) => (
          <div key={label} className="flex flex-col gap-2">
            <div className="inline-flex flex-col items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full ${
                  activeStep === index && !completedSteps.includes(index)
                    ? `bg-${color}-500`
                    : "bg-gray-300"
                } flex items-center justify-center`}
              >
                {completedSteps.includes(index) && (
                  <CheckIcon className="size-6 text-white" />
                )}
                {!completedSteps.includes(index) && (
                  <span className="text-white text-lg font-mono">
                    {index + 1}
                  </span>
                )}
              </div>

              <span className="font-mono text-base">{label}</span>
            </div>
            {labels.length - 1 !== index && (
              <div className="h-50 flex flex-col items-center justify-center pb-3">
                <div className="h-full w-px bg-gray-300" />
              </div>
            )}
          </div>
        ))}
      {Icon &&
        Icon.map(
          (Ic: ComponentType<React.SVGProps<SVGSVGElement>>, index: number) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="inline-flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full ${
                    activeStep === index && !completedSteps.includes(index)
                      ? `bg-${color}-500`
                      : "bg-gray-300"
                  } flex items-center justify-center`}
                >
                  {completedSteps.includes(index) && (
                    <CheckIcon className="size-6 text-white" />
                  )}
                  {!completedSteps.includes(index) && (
                    <span className="text-white text-lg font-mono">
                      <Ic className="size-6 text-white" />
                    </span>
                  )}
                </div>

                <span className="font-mono text-base">{labels[index]}</span>
              </div>
              {labels.length - 1 !== index && (
                <div className="h-50 flex flex-col items-center justify-center pb-3">
                  <div className="h-full w-px bg-gray-300" />
                </div>
              )}
            </div>
          )
        )}
    </div>
  );
};
