import filterStore from "../../store/filterStore";
import { getDateAsHour } from "../utils/formatedDate";

const useFilterOption = () => {
  const { flightToBeFiltered } = filterStore();

  const getDepartureTimeOptions = () => {
    const departureAirportList = new Set<string>(["All"]);
    flightToBeFiltered.forEach((flight) => {
      departureAirportList.add(getDateAsHour(flight.departure.scheduled));
    });
    return Array.from(departureAirportList);
  };

  const getCarrierOptions = (): string[] => {
    const airlineList = new Set<string>(["All"]);
    flightToBeFiltered.forEach((flight) => {
      airlineList.add(flight.airline.name);
    });
    return Array.from(airlineList);
  };

  const getDestinationOptions = () => {
    const destinationList = new Set<string>(["All"]);
    flightToBeFiltered.forEach((flight) => {
      if (flight.arrival.airport) {
        destinationList.add(flight.arrival.airport);
      }
    });
    return Array.from(destinationList);
  };

  return {
    getDepartureTimeOptions,
    getCarrierOptions,
    getDestinationOptions,
  };
};

export default useFilterOption;
