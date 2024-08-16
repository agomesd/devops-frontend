import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Header", () => {
  it("renders the header component", () => {
    render(<Header />);

    const header = screen.getByText("DevOps");
    expect(header).toBeInTheDocument();
  });
});
