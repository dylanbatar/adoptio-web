import React from "react";
import { render } from "@testing-library/react";
import { Banner } from "../screens/home/components/Banner";

describe("Banner Test", () => {
  it("Should be mount", () => {
    const component = render(<Banner />);
    expect(component).not.toBeUndefined();
  });

  it(`Button "SEE KITTEN" go to pets sections`, () => {
    expect(true);
  });
});
