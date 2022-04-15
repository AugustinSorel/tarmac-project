import axios from "axios";
import { Flight } from "../shared/utils/FlightType";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL as string;
export const getFlights = async (): Promise<Flight[]> => {
  const response = await axios.get(`${REACT_APP_API_URL}`);
  return response.data.data;
};
