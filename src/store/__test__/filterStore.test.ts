import { getDateAsHour } from "../../shared/utils/formatedDate";
import flightMock from "../../shared/utils/__test__/flightMock";
import filterStore from "../filterStore";

describe("filterStore", () => {
  test("should set FlightToBeFiltered correctly", () => {
    const setFlightToBeFiltered = filterStore.getState().setFlightToBeFiltered;
    const data = [flightMock, flightMock];

    setFlightToBeFiltered(data);

    expect(filterStore.getState().flightToBeFiltered).toEqual(data);
  });

  test("should get flightToBeFiltered correctly", () => {
    const setFlightToBeFiltered = filterStore.getState().setFlightToBeFiltered;
    const data = [flightMock, flightMock];

    setFlightToBeFiltered(data);

    const getFilteredFlights = filterStore.getState().getFilteredFlights;

    expect(getFilteredFlights()).toEqual(data);
  });

  test("should set filter option correctly", () => {
    const setFilterOptions = filterStore.getState().setFilterOptions;
    const data = {
      filterByCarrier: "test",
      filterByTime: "test",
    };

    setFilterOptions(data);

    expect(filterStore.getState().filterOptions).toEqual(data);
  });

  test("should get filter option correctly", () => {
    const setFilterOptions = filterStore.getState().setFilterOptions;
    const data = {
      filterByCarrier: "test",
      filterByTime: "test",
    };

    setFilterOptions(data);

    const filterOptions = filterStore.getState().filterOptions;

    expect(filterOptions).toEqual(data);
  });

  test("should filter by carrier correctly", () => {
    const setFlightToBeFiltered = filterStore.getState().setFlightToBeFiltered;

    const flightOne = {
      ...flightMock,
      airline: {
        name: "test",
        iata: "AA",
        icao: "AAL",
      },
    };
    const data = [flightOne, flightMock];

    filterStore.setState({
      filterOptions: {
        filterByCarrier: "test",
        filterByTime: "All",
      },
    });

    setFlightToBeFiltered(data);

    const getFilteredFlights = filterStore.getState().getFilteredFlights();

    expect(getFilteredFlights).toEqual([flightOne]);
  });

  test("should filter by time correctly", () => {
    const setFlightToBeFiltered = filterStore.getState().setFlightToBeFiltered;

    const flightOne = {
      ...flightMock,
      departure: {
        ...flightMock.departure,
        scheduled: "2019-12-12T04:20:10+00:00",
      },
    };
    const data = [flightOne, flightMock];

    filterStore.setState({
      filterOptions: {
        filterByCarrier: "All",
        filterByTime: getDateAsHour("2019-12-12T04:20:10+00:00"),
      },
    });

    setFlightToBeFiltered(data);

    const getFilteredFlights = filterStore.getState().getFilteredFlights();

    expect(getFilteredFlights).toEqual([flightOne]);
  });
});
