import axios from "axios";
import { Flight } from "../shared/utils/FlightType";

export const getFlights = async (): Promise<Flight[]> => {
  const response = await axios.get(
    "http://api.aviationstack.com/v1/flights?access_key=d6170c700237b7947acb3f25e57cbd4f"
  );
  return response.data.data;
};
