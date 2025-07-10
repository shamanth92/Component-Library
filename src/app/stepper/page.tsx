"use client";
import { Button, BUTTONTYPES } from "@/components/button";
import { CodeBlock } from "@/components/codeBlock";
import { ComponentLayout } from "@/components/componentLayout";
import { Stepper } from "@/components/stepper";
import {
  basicStepperCode,
  colorStepperCode,
  iconStepperCode,
  iconVerticalStepperCode,
  verticalStepperCode,
} from "@/rawCode/stepper";
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
  const [showBasicCode, setShowBasicCode] = useState(false);
  const [showVerticaldCode, setShowVerticalCode] = useState(false);
  const [showColorCode, setShowColorCode] = useState(false);
  const [showIconCode, setShowIconCode] = useState(false);
  const [showIconVerticalCode, setShowIconVerticalCode] = useState(false);
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
    <ComponentLayout componentType="Stepper">
      <div>
        <p className="font-mono text-lg font-bold pb-8">Basic Stepper</p>
        <div className="flex flex-row justify-evenly">
          <Stepper labels={labels} completedSteps={steps} activeStep={active} />
          <Button
            variant={BUTTONTYPES.Contained}
            onClick={activeCompletedSteps}
          >
            {active === labels.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowBasicCode(!showBasicCode)}
          >
            Show code
          </button>
        </div>
        {showBasicCode && (
          <div>
            <CodeBlock code={basicStepperCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold pb-8">Vertical Stepper</p>
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
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowVerticalCode(!showVerticaldCode)}
          >
            Show code
          </button>
        </div>
        {showVerticaldCode && (
          <div>
            <CodeBlock code={verticalStepperCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold pb-8">Color Stepper</p>
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
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowColorCode(!showColorCode)}
          >
            Show code
          </button>
        </div>
        {showColorCode && (
          <div>
            <CodeBlock code={colorStepperCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold pb-8">Icon Stepper</p>
        <div className="flex flex-row justify-evenly">
          <Stepper
            labels={["Profile", "Address", "Review"]}
            color="green"
            completedSteps={stepsColor}
            activeStep={activeColor}
            Icon={[DocumentChartBarIcon, HomeIcon, DocumentCheckIcon]}
          />
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowIconCode(!showIconCode)}
          >
            Show code
          </button>
        </div>
        {showIconCode && (
          <div>
            <CodeBlock code={iconStepperCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold pb-8">
          Icon Stepper Vertical
        </p>
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
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowIconVerticalCode(!showIconVerticalCode)}
          >
            Show code
          </button>
        </div>
        {showIconVerticalCode && (
          <div>
            <CodeBlock code={iconVerticalStepperCode} />
          </div>
        )}
      </div>
    </ComponentLayout>
  );
}
