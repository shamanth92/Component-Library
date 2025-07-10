export const basicStepperCode = `
import { Button, BUTTONTYPES } from "@/components/button";
import { Stepper } from "@/components/stepper";

        <div className="flex flex-row justify-evenly">
          <Stepper labels={labels} completedSteps={steps} activeStep={active} />
          <Button
            variant={BUTTONTYPES.Contained}
            onClick={activeCompletedSteps}
          >
            {active === labels.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
`;

export const verticalStepperCode = `
import { Button, BUTTONTYPES } from "@/components/button";
import { Stepper } from "@/components/stepper";

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
`;

export const colorStepperCode = `
import { Button, BUTTONTYPES } from "@/components/button";
import { Stepper } from "@/components/stepper";

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
`;

export const iconStepperCode = `
import { Button, BUTTONTYPES } from "@/components/button";
import { Stepper } from "@/components/stepper";
import {
  DocumentChartBarIcon,
  DocumentCheckIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

       <div className="flex flex-row justify-evenly">
          <Stepper
            labels={["Profile", "Address", "Review"]}
            color="green"
            completedSteps={stepsColor}
            activeStep={activeColor}
            Icon={[DocumentChartBarIcon, HomeIcon, DocumentCheckIcon]}
          />
        </div>
`;

export const iconVerticalStepperCode = `
import { Button, BUTTONTYPES } from "@/components/button";
import { Stepper } from "@/components/stepper";
import {
  DocumentChartBarIcon,
  DocumentCheckIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

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
`;
