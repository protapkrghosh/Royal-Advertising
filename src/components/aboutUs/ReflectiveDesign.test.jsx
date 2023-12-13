import React from "react";
import { render, screen } from "@testing-library/react";
import ReflectiveDesign from "./ReflectiveDesign";

jest.mock("../../hooks/useAosInit", () => () => {});

describe("ReflectiveDesign Component", () => {
  test("renders component with correct content", () => {
    render(<ReflectiveDesign />);

    const headingElement = screen.getByText(/About Us/i);
    expect(headingElement).toBeInTheDocument();

    const aboutHeadingElement = screen.getByText(/ABOUT REFLECTIVE DESIGN/i);
    expect(aboutHeadingElement).toBeInTheDocument();
    const lottieElement = screen.getByTestId("lottie-animation");
    expect(lottieElement).toBeInTheDocument();

  });
});
