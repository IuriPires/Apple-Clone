import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

const renderButton = (props = {}) => {
  return render(<Button {...props}>Click me</Button>);
};

describe("Button component", () => {
  it("Should render the button with children text", () => {
    renderButton();
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
  });

  it("Should render with the default styles (non-outline)", () => {
    renderButton();
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("bg-[#0071e3]");
    expect(button).toHaveClass("text-white");
  });

  it("Should apply 'outline' styles when the outline prop is true", () => {
    renderButton({ outline: true });
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("bg-transparent");
    expect(button).toHaveClass("border-[#0071e3]");
    expect(button).toHaveClass("text-[#0071e3]");
  });

  it("Should render the button with the correct type", () => {
    renderButton();
    const button = screen.getByText("Click me");
    expect(button).toHaveAttribute("type", "button");
  });

  it("Should handle click events", () => {
    const onClick = jest.fn();
    renderButton({ onClick });
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("Should accept additional props and pass them down", () => {
    renderButton({ "data-testid": "custom-button" });
    const button = screen.getByTestId("custom-button");
    expect(button).toBeInTheDocument();
  });

  it("Should have the correct class when hovered", () => {
    renderButton();
    const button = screen.getByText("Click me");
    fireEvent.mouseOver(button);
    expect(button).toHaveClass("hover:bg-[#0077ED]");
  });

  it("Should have the correct class when active (clicked)", () => {
    renderButton();
    const button = screen.getByText("Click me");
    fireEvent.mouseDown(button);
    expect(button).toHaveClass("active:bg-[#006EDB]");
  });
});
