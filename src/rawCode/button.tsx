export const basicButtonCode = `
import { Button, BUTTONTYPES } from "@/components/button";

          <div className="flex flex-row justify-evenly">
            <Button
              variant={BUTTONTYPES.Contained}
              onClick={() => console.log("Button Clicked")}
            >
              CONTAINED
            </Button>
            <Button variant={BUTTONTYPES.Disabled}>DISABLED</Button>
            <Button variant={BUTTONTYPES.Outlined}>OUTLINED</Button>
            <Button variant={BUTTONTYPES.Simple}>SIMPLE</Button>
          </div>
`;

export const coloredButtonCode = `
import { Button, BUTTONTYPES } from "@/components/button";

          <div className="flex flex-row justify-evenly">
            <Button variant={BUTTONTYPES.Contained} color="yellow">
              YELLOW
            </Button>
            <Button variant={BUTTONTYPES.Outlined} color="red">
              RED
            </Button>
            <Button variant={BUTTONTYPES.Simple} color="green">
              GREEN
            </Button>
          </div>
`;

export const sizeButtonCode = `
import { Button, BUTTONTYPES } from "@/components/button";

          <div className="flex flex-row justify-evenly">
            <Button variant={BUTTONTYPES.Contained} size="lg">
              LARGE
            </Button>
            <Button variant={BUTTONTYPES.Contained} size="sm">
              SMALL
            </Button>
            <Button variant={BUTTONTYPES.Contained}>NORMAL</Button>
          </div>
`;
