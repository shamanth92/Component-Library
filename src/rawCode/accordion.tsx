export const basicAccordionCode = `
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

import { Accordion } from "@/components/accordion";

<div>
    <p className="font-mono text-lg font-bold">Basic Accordion</p>
    <div className="flex flex-row justify-evenly">
        <Accordion content={content} />
    </div>
</div>
`;

export const disabledAccordionCode = `
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

import { Accordion } from "@/components/accordion";

<div>
    <p className="font-mono text-lg font-bold">Basic Accordion</p>
    <div className="flex flex-row justify-evenly">
        <Accordion content={content} disabled={[0, 2]} />
    </div>
</div>
`;

export const expandedAccordionCode = `
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

import { Accordion } from "@/components/accordion";

<div>
    <p className="font-mono text-lg font-bold">Basic Accordion</p>
    <div className="flex flex-row justify-evenly">
        <Accordion content={content} expanded={[0, 2]} />
    </div>
</div>
`;
