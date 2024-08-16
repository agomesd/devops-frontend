import { render, screen } from "@testing-library/react";
import { WorkersTable } from "../WorkersTable";
import { Workers } from "../../utils/types";
import { generateMockWorkers } from "../../utils/mocks/utils";

describe("WorkersTable", () => {
  it("renders the workers table component", () => {
    const workersNum = 5;
    const mockWorkers: Workers = generateMockWorkers(workersNum);
    render(<WorkersTable workers={mockWorkers} />);
    for (const worker of mockWorkers) {
      const workerName = screen.getByText(worker[0]);
      expect(workerName).toBeInTheDocument();
    }
  });
});
