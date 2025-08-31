import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //assertion
  expect(heading).toBeInTheDocument();
});

test("should load button inside Contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  //assertion
  expect(button).toBeInTheDocument();
});

test("should check for text inside Contact component", () => {
  render(<Contact />);

  const submit = screen.getByText("Submit");

  //assertion
  expect(submit).toBeInTheDocument();
});

test("should check for place holder text inside Contact component", () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText("Name");

  //assertion
  expect(nameInput).toBeInTheDocument();
});

test("should check for multiple input boxes inside Contact component", () => {
  render(<Contact />);

  //querying
  const inputBoxes = screen.getAllByRole("textbox");

  //assertion
  expect(inputBoxes.length).toBe(2);

  expect(inputBoxes.length).not.toBe(3);
});
