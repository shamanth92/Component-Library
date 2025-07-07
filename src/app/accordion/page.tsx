import { Accordion } from "@/components/accordion";

export default function AccordionComponent() {
  const content = [
    {
      title: "Title One",
      content:
        "Dominik Szoboszlai is a Hungarian professional footballer who plays as a midfielder for Premier League club Liverpool and captains the Hungary national team.",
    },
    {
      title: "Title Two",
      content:
        "Alexis Mac Allister is an Argentine professional footballer who plays as a midfielder for Premier League club Liverpool and the Argentina national team.",
    },
    {
      title: "Title Three",
      content:
        "Wataru Endo is a Japanese professional footballer who plays as a defensive midfielder for Premier League club Liverpool and captains the Japan national team.",
    },
  ];

  return (
    <div className="p-6 flex flex-col gap-18 bg-orange-50 h-screen">
      <div className="flex flex-row justify-center">
        <p className="font-mono font-bold text-xl">Accordion Component</p>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Basic Accordion</p>
          <div className="flex flex-row justify-evenly">
            <Accordion content={content} />
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Disabled Buttons</p>
          <div className="flex flex-row justify-evenly">
            <Accordion content={content} disabled={[0, 2]} />
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Expanded Buttons</p>
          <div className="flex flex-row justify-evenly">
            <Accordion content={content} expanded={[0, 2]} />
          </div>
        </div>
      </div>
    </div>
  );
}
