import axios from "axios";
import { Flight } from "../shared/utils/FlightType";

export const getFlights = async (): Promise<Flight[]> => {
  const response = await axios.get(
    "http://api.aviationstack.com/v1/flights?access_key=112f8e2410f542c81fcf1265e331c607"
  );
  return response.data.data;
};
