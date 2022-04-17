import { Flight } from "../../shared/utils/FlightType";
import flightMock from "../../shared/utils/__test__/flightMock";
import paginationStore from "../paginationStore";

describe("paginationStore", () => {
  test("should set the current page correctly", () => {
    const setCurrentPage = paginationStore.getState().setCurrentPage;
    setCurrentPage(2);
    expect(paginationStore.getState().currentPage).toBe(2);
  });

  test("should getPaginatedFlights return the correct list of flight", () => {
    const differentFlight = {
      ...flightMock,
      airline: {
        ...flightMock.airline,
        name: "test",
      },
    };

    const data: Flight[] = [
      ...Array(10).fill(flightMock),
      ...Array(10).fill(differentFlight),
      ...Array(10).fill(flightMock),
    ];

    paginationStore.setState({
      currentPage: 2,
      maxPage: 10,
      dataPerPage: 10,
    });

    const paginated = paginationStore.getState().getPaginatedFlights(data);

    expect(paginated).toStrictEqual(Array(10).fill(differentFlight));
  });
});
