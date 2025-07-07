"use client";
import { Button, BUTTONTYPES } from "@/components/button";
import { Stepper } from "@/components/stepper";
import {
  DocumentChartBarIcon,
  DocumentCheckIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export default function StepperComponent() {
  const [steps, setSteps] = useState<number[]>([]);
  const [active, setActive] = useState(0);
  const [stepsVertical, setStepsVertical] = useState<number[]>([]);
  const [activeVertical, setActiveVertical] = useState(0);
  const [stepsColor, setStepsColor] = useState<number[]>([]);
  const [activeColor, setActiveColor] = useState(0);
  const labels = ["Step One", "Step Two", "Step Three"];

  const activeCompletedSteps = () => {
    setSteps([...steps, active]);
    setActive(active + 1);
  };

  const activeCompletedStepsVertical = () => {
    setStepsVertical([...stepsVertical, activeVertical]);
    setActiveVertical(activeVertical + 1);
  };

  const activeCompletedStepsColor = () => {
    setStepsColor([...stepsColor, activeColor]);
    setActiveColor(activeColor + 1);
  };

  return (
    <div className="p-6 flex flex-col gap-18 bg-orange-50 h-screen">
      <div className="flex flex-row justify-center">
        <p className="font-mono font-bold text-xl">Stepper Component</p>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Basic Stepper</p>
          <div className="flex flex-row justify-evenly">
            <Stepper
              labels={labels}
              completedSteps={steps}
              activeStep={active}
            />
            <Button
              variant={BUTTONTYPES.Contained}
              onClick={activeCompletedSteps}
            >
              {active === labels.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Vertical Stepper</p>
          <div className="flex flex-row justify-evenly">
            <Stepper
              labels={["Step One", "Step Two", "Step Three"]}
              orientation="vertical"
              completedSteps={stepsVertical}
              activeStep={activeVertical}
            />
            <Button
              variant={BUTTONTYPES.Contained}
              onClick={activeCompletedStepsVertical}
            >
              {activeVertical === labels.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Color Stepper</p>
          <div className="flex flex-row justify-evenly">
            <Stepper
              labels={["Step One", "Step Two", "Step Three"]}
              color="green"
              completedSteps={stepsColor}
              activeStep={activeColor}
            />
            <Button
              variant={BUTTONTYPES.Contained}
              onClick={activeCompletedStepsColor}
            >
              {activeColor === labels.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Icon Stepper</p>
          <div className="flex flex-row justify-evenly">
            <Stepper
              labels={["Profile", "Address", "Review"]}
              color="green"
              completedSteps={stepsColor}
              activeStep={activeColor}
              Icon={[DocumentChartBarIcon, HomeIcon, DocumentCheckIcon]}
            />
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Icon Stepper Vertical</p>
          <div className="flex flex-row justify-evenly">
            <Stepper
              labels={["Profile", "Address", "Review"]}
              color="green"
              completedSteps={stepsColor}
              activeStep={activeColor}
              Icon={[DocumentChartBarIcon, HomeIcon, DocumentCheckIcon]}
              orientation="vertical"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
