import { useState } from "react";
import { Flight } from "../utils/FlightType";

const useDeparturePagination = (filteredFlightList: Flight[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const flightsPerPage = 10;
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = filteredFlightList.slice(
    indexOfFirstFlight,
    indexOfLastFlight
  );
  const maxPage = Math.ceil(filteredFlightList.length / flightsPerPage);

  return { currentFlights, setCurrentPage, currentPage, maxPage };
};

export default useDeparturePagination;
