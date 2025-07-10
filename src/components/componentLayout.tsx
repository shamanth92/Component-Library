import { Children, isValidElement, ReactNode } from "react";

type LayoutProps = {
  componentType: string;
  children: ReactNode;
};

export const ComponentLayout = ({ componentType, children }: LayoutProps) => {
  return (
    <div className="p-6 flex flex-col gap-18 bg-orange-50 min-h-screen">
      <div className="flex flex-row justify-center">
        <p className="font-mono font-bold text-xl">{componentType} Component</p>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {Children.map(children, (child, index) =>
          isValidElement(child) ? (
            <div
              key={index}
              className="border border-gray-300 rounded-md p-4 bg-white shadow-xl"
            >
              {child}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
