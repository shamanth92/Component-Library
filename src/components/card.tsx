"use client";
import { Button, BUTTONTYPES } from "./button";

type CardProps = {
  title?: string;
  imageUrl?: string;
  content?: string;
  actionLabels?: string[];
  color?: string;
  size?: string;
};

export const Card = ({
  title,
  imageUrl,
  actionLabels,
  color,
  size = "sm",
}: CardProps) => {
  return (
    <div
      className={`border-1 rounded-md border-gray-300 max-w-${size} w-full flex flex-col gap-4 shadow-xl bg-white hover:drop-shadow-lg`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt="card image"
        // height={imageHeight}
        // width={imageWidth}
        className="rounded-t-md w-full"
      />
      <div>
        <label className="font-mono text-lg font-bold p-3">{title}</label>
      </div>
      <div>
        <p className="pb-3 pr-3 pl-3 font-mono">
          Cricket is a bat-and-ball game that is played between two teams of
          eleven players on a field, at the centre of which is a 22-yard
          (20-metre; 66-foot) pitch with a wicket at each end, each comprising
          two bails (small sticks) balanced on three stumps.
        </p>
      </div>
      {actionLabels && <hr className="border-t border-gray-300" />}
      {actionLabels && (
        <div className="flex flex-row justify-evenly pb-4">
          {actionLabels?.map((action) => (
            <Button
              variant={BUTTONTYPES.Contained}
              onClick={() => console.log("Button Clicked")}
              key={action}
              color={color}
            >
              {action}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
