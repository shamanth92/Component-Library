import { Accordion } from "@/components/accordion";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Accordion", () => {
  it("renders an accordion", () => {
    const content = [
      {
        title: "Title One",
        content:
          "Dominik Szoboszlai is a Hungarian professional footballer who plays as a midfielder for Premier League club Liverpool and captains the Hungary national team.",
      },
    ];
    render(<Accordion content={content} />);

    const button = screen.getByRole("button", {
      name: "Title One",
    });

    const text = screen.getByText(
      "Dominik Szoboszlai is a Hungarian professional footballer who plays as a midfielder for Premier League club Liverpool and captains the Hungary national team."
    );

    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
