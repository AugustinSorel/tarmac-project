import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import DepartureList from "..";

const DepartureListMock = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DepartureList />
    </QueryClientProvider>
  );
};

describe("DepartureList", () => {
  test("should fetch and render elements", async () => {
    render(<DepartureListMock />);
  });
});
