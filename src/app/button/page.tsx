"use client";
import { Button, BUTTONTYPES } from "@/components/button";

export default function ButtonComponent() {
  return (
    <div className="p-6 flex flex-col gap-18 bg-orange-50 h-screen">
      <div className="flex flex-row justify-center">
        <p className="font-mono font-bold text-xl">Button Component</p>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Basic Buttons</p>
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
        </div>
      </div>
      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Color Buttons</p>
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
        </div>
      </div>
      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Button Sizes</p>
          <div className="flex flex-row justify-evenly">
            <Button variant={BUTTONTYPES.Contained} size="lg">
              LARGE
            </Button>
            <Button variant={BUTTONTYPES.Contained} size="sm">
              SMALL
            </Button>
            <Button variant={BUTTONTYPES.Contained}>NORMAL</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
