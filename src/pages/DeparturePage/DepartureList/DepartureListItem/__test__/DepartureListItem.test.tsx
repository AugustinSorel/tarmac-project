import { render, screen } from "@testing-library/react";
import DepartureListItem from "..";
import { Flight } from "../../../../../shared/utils/FlightType";
import flightMock from "../../../../../shared/utils/__test__/flightMock";

describe("DepartureListItem", () => {
  test("should render delayed if flight estimated is higher than scheduled", () => {
    let currentFlight: Flight = flightMock;

    currentFlight.departure.scheduled = "2020-01-01T00:00:00.000Z";
    currentFlight.departure.estimated = "2020-01-01T00:00:10.000Z";

    render(<DepartureListItem flight={currentFlight} index={0} />);

    const delayedElement = screen.getByText(/delayed/i);

    const isDelayed = delayedElement.innerHTML.split(" ")[1];

    expect(isDelayed).toBe("yes");
  });

  test("should render delayed if flight actual is higher than scheduled", () => {
    let currentFlight: Flight = flightMock;

    currentFlight.departure.actual = "2020-01-01T00:00:00.000Z";
    currentFlight.departure.estimated = "2020-01-01T00:00:10.000Z";

    render(<DepartureListItem flight={currentFlight} index={0} />);

    const delayedElement = screen.getByText(/delayed/i);

    const isDelayed = delayedElement.innerHTML.split(" ")[1];

    expect(isDelayed).toBe("yes");
  });

  test("should render not delayed if flight actual is the same as scheduled", () => {
    let currentFlight: Flight = flightMock;

    currentFlight.departure.actual = "2020-01-01T00:00:00.000Z";
    currentFlight.departure.estimated = "2020-01-01T00:00:00.000Z";
    currentFlight.departure.scheduled = "2020-01-01T00:00:00.000Z";

    render(<DepartureListItem flight={currentFlight} index={0} />);

    const delayedElement = screen.getByText(/delayed/i);

    const isDelayed = delayedElement.innerHTML.split(" ")[1];

    expect(isDelayed).toBe("no");
  });

  test("should render the flight number correctly", () => {
    const currentFlight: Flight = flightMock;

    render(<DepartureListItem flight={currentFlight} index={0} />);

    const flightNumber = screen.getByText(/Nº/i);

    expect(flightNumber.innerHTML).toBe(`Nº: ${currentFlight.flight.number}`);
  });

  test("should render the depart time correctly", () => {
    const currentFlight: Flight = flightMock;

    currentFlight.departure.scheduled = "2019-12-12T04:20:10+15:00";

    render(<DepartureListItem flight={currentFlight} index={0} />);

    const departTime = screen.getByText(/Depart:/i);

    expect(departTime.innerHTML).toBe("Depart: 13:20:10 pm");
  });

  test("should render the flight status correctly", () => {
    const currentFlight: Flight = flightMock;

    render(<DepartureListItem flight={currentFlight} index={0} />);

    const flightStatus = screen.getByText(/Status:/i);

    expect(flightStatus.innerHTML).toBe(
      `Status: ${currentFlight.flight_status}`
    );
  });

  test("should render the departure gate correctly", () => {
    const currentFlight: Flight = flightMock;

    render(<DepartureListItem flight={currentFlight} index={0} />);

    const flightGate = screen.getByText(/Gate:/i);

    expect(flightGate.innerHTML).toBe(`gate: ${currentFlight.departure.gate}`);
  });

  test("should render the airline icon correctly", () => {
    const currentFlight: Flight = flightMock;

    render(<DepartureListItem flight={currentFlight} index={0} />);

    const image = screen.getByAltText(currentFlight.airline.iata) as any;

    expect(image.src).toContain(
      "https://daisycon.io/images/airline/?width=100&height=50&iata=" +
        currentFlight.airline.iata
    );
  });
});
