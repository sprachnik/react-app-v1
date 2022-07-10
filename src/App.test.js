import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the word search", () => {
  render(<App />);
  const linkElement = screen.getByText(/button/i);
  expect(linkElement).toBeInTheDocument();
});
