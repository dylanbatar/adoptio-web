import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "../shared/components/footer";

describe("Footer Test", () => {
  it("Should be mount", () => {
    const component = render(<Footer />);
    expect(component).not.toBeUndefined();
  });
});
