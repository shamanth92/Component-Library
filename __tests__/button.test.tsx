import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button, BUTTONTYPES } from "./../src/components/button";

describe("Page", () => {
  it("renders a heading", () => {
    render(
      <Button
        variant={BUTTONTYPES.Contained}
        onClick={() => console.log("Button Clicked")}
      >
        CONTAINED
      </Button>
    );

    const button = screen.getByRole("button", {
      name: "CONTAINED",
    });

    expect(button).toBeInTheDocument();
  });
});
