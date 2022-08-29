import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("ContactFrom component", () => {
  // baseline test
  it("renders", () => {
    render(<ContactForm />);
  });

  //snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("button is visible", () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId("submit")).toHaveTextContent("Submit");
})
