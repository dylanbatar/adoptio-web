import React from "react";
import { render } from "@testing-library/react";
import { Navbar } from "../shared/components/navbar";

describe("Navbar Test", () => {
  it("Should be mount", () => {
    const component = render(<Navbar />);
    expect(component).not.toBeUndefined();
  });
});
