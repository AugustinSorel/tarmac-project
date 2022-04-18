import axios from "axios";
import { Flight } from "../shared/utils/FlightType";

export const getFlights = async (): Promise<Flight[]> => {
  const response = await axios.get(
    "http://api.aviationstack.com/v1/flights?access_key=a6af88356efe725e98ccde3f188d19e2"
  );

  (response.data.data as Flight[]).sort((flightA: Flight, flightB: Flight) => {
    return (
      new Date(flightA.departure.scheduled).getTime() -
      new Date(flightB.departure.scheduled).getTime()
    );
  });

  return response.data.data;
};

export const getAirlineLogo = (airlineIata: string): string => {
  return (
    "https://daisycon.io/images/airline/?width=100&height=50&iata=" +
    airlineIata
  );
};
