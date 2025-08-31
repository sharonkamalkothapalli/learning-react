import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import Header from "../Header";

it("should load header component", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});
