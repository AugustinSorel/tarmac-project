import { useState } from "react";
import { useQuery } from "react-query";
import { getFlights } from "../../../api/flightApi";
import Pagination from "../../../shared/components/Navigation/UIElements/Pagination";
import {
  DepartureFilters,
  DepartureFlightList,
  DepartureListContainer,
  DeparturePaginationContainer,
} from "./DepartureList.styled";
import DepartureListItem from "./DepartureListItem";

const DepartureList = () => {
  const { isLoading, data: flightsList } = useQuery("flightList", getFlights, {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(10);

  if (isLoading || !flightsList) {
    return <div>Loading...</div>;
  }

  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flightsList.slice(
    indexOfFirstFlight,
    indexOfLastFlight
  );
  const maxPage = Math.ceil(flightsList.length / flightsPerPage);

  return (
    <DepartureListContainer>
      <DepartureFilters>filters...</DepartureFilters>

      <DepartureFlightList role={"list"}>
        {currentFlights.map((flight, index) => (
          <DepartureListItem key={index} index={index} flight={flight} />
        ))}
      </DepartureFlightList>

      <DeparturePaginationContainer>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maxPage={maxPage}
        />
      </DeparturePaginationContainer>
    </DepartureListContainer>
  );
};

export default DepartureList;
