import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL as string;

export const getFlights = async () => {
  const response = await axios.get(`${REACT_APP_API_URL}`);
  return response.data.data;
};
