import moment from "moment";
import { useQueryClient } from "react-query";
import { Flight } from "../utils/FlightType";

const useFilterOption = () => {
  const queryClient = useQueryClient();
  const flightsList = queryClient.getQueryData("flightList") as Flight[];

  const getDepartureTimeOptions = () => {
    const departureAirportList = new Set<string>(["All"]);
    flightsList.forEach((flight) => {
      departureAirportList.add(
        moment(flight.departure.scheduled as string)
          .utc()
          .format("HH:mm:ss")
      );
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
