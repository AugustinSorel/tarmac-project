import { useEffect, useState } from "react";
import { Flight } from "../../../../shared/utils/FlightType";
import filterStore from "../../../../store/filterStore";
import paginationStore from "../../../../store/paginationStore";
import DepartureListItem from "../DepartureListItem";
import { DepartureFlightListContainer } from "./DepartureFlightList.styled";

const DepartureFlightList = () => {
  const { getFilteredFlights, filterOptions } = filterStore((state) => state);

  const [flightToDisplay, setFlightToDisplay] = useState<Flight[]>([]);

  const { getPaginatedFlights, currentPage } = paginationStore(
    (state) => state
  );

  useEffect(() => {
    setFlightToDisplay(getPaginatedFlights(getFilteredFlights()));
  }, [getFilteredFlights, currentPage, filterOptions, getPaginatedFlights]);

  if (flightToDisplay.length === 0) {
    return <div>no flight found</div>;
  }

  return (
    <DepartureFlightListContainer>
      {flightToDisplay.map((flight, index) => (
        <DepartureListItem key={index} index={index} flight={flight} />
      ))}
    </DepartureFlightListContainer>
  );
};

export default DepartureFlightList;
