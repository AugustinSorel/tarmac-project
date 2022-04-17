import { useQueryClient } from "react-query";
import { Flight } from "../utils/FlightType";
import { getDateAsHour } from "../utils/formatedDate";

const useFilterOption = () => {
  const queryClient = useQueryClient();
  const flightsList = queryClient.getQueryData("flightList") as Flight[];

  const getDepartureTimeOptions = () => {
    const departureAirportList = new Set<string>(["All"]);
    flightsList.forEach((flight) => {
      departureAirportList.add(getDateAsHour(flight.departure.scheduled));
    });
    return Array.from(departureAirportList);
  };

  const getCarrierOptions = (): string[] => {
    const airlineList = new Set<string>(["All"]);
    flightsList.forEach((flight) => {
      airlineList.add(flight.airline.name);
    });
    return Array.from(airlineList);
  };

  return { getDepartureTimeOptions, getCarrierOptions };
};

export default useFilterOption;
