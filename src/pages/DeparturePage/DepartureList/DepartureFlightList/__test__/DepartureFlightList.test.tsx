import { render, screen } from "@testing-library/react";
import DepartureFlightList from "..";
import flightMock from "../../../../../shared/utils/__test__/flightMock";
import filterStore from "../../../../../store/filterStore";

describe("DepartureFlightList", () => {
  test("should render the list of flight correctly", () => {
    filterStore.setState({
      getFilteredFlights: () => [flightMock, flightMock, flightMock],
    });

    render(<DepartureFlightList />);

    const list = screen.getByRole("list");

    expect(list.children.length).toBe(3);
  });
});
