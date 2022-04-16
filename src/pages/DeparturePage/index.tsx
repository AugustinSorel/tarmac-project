import { useState } from "react";
import { useQuery } from "react-query";
import { getFlights } from "../../api/flightApi";
import Pagination from "../../shared/components/Navigation/UIElements/Pagination";
import {
  DepartureContainer,
  DepartureFilters,
  DepartureList,
  DeparturePaginationContainer,
  DepartureSection,
  DepartureTitle,
} from "./DeparturePage.styled";

const DeparturePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(10);

  const { isLoading, data } = useQuery("flightList", getFlights, {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = data.slice(indexOfFirstFlight, indexOfLastFlight);
  const maxPage = Math.ceil(data.length / flightsPerPage);

  return (
    <DepartureContainer>
      <DepartureTitle>departure</DepartureTitle>

      <DepartureSection>
        <DepartureFilters>filters...</DepartureFilters>

        <DepartureList>
          {currentFlights.map((flight, index) => {
            return (
              <div key={index}>
                <h1>{flight.flight.number}</h1>
              </div>
            );
          })}
        </DepartureList>

        <DeparturePaginationContainer>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPage={maxPage}
          />
        </DeparturePaginationContainer>
      </DepartureSection>
    </DepartureContainer>
  );
};

export default DeparturePage;
