import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button, BUTTONTYPES } from "./../src/components/button";

describe("Button", () => {
  it("renders a contained button", () => {
    render(<Button variant={BUTTONTYPES.Contained}>CONTAINED</Button>);

    const button = screen.getByRole("button", {
      name: "CONTAINED",
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-sky-500");
    expect(button).toHaveClass("text-white");
  });

  it("renders a contained button", () => {
    render(<Button variant={BUTTONTYPES.Simple}>SIMPLE</Button>);

    const button = screen.getByRole("button", {
      name: "SIMPLE",
    });

    expect(button).toBeInTheDocument();
  });

  it("renders a red outlined button", () => {
    render(
      <Button variant={BUTTONTYPES.Outlined} color="red">
        OUTLINED
      </Button>
    );

    const button = screen.getByRole("button", {
      name: "OUTLINED",
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("border-red-500");
    expect(button).toHaveClass("text-red-500");
  });

  it("renders a disabled button", () => {
    render(
      <Button variant={BUTTONTYPES.Disabled} color="red">
        Disabled
      </Button>
    );

    const button = screen.getByRole("button", {
      name: "Disabled",
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-gray-500");
    expect(button).toHaveClass("cursor-not-allowed");
  });

  it("renders a contained button and tests the on click function", () => {
    render(
      <Button variant={BUTTONTYPES.Contained} onClick={() => testClick()}>
        Contained
      </Button>
    );

    const logSpy = jest.spyOn(console, "log").mockImplementation();

    const testClick = () => {
      console.log("abcd");
    };

    const button = screen.getByRole("button", {
      name: "Contained",
    });

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(logSpy).toHaveBeenCalledWith("abcd");
  });
});
