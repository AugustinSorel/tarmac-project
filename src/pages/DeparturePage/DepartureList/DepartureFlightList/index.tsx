import { useEffect, useState } from "react";
import filterStore from "../../../../store/filterStore";
import paginationStore from "../../../../store/paginationStore";
import DepartureListItem from "../DepartureListItem";
import { DepartureFlightListContainer } from "./DepartureFlightList.styled";

const DepartureFlightList = () => {
  const { getPaginatedFlights, currentPage } = paginationStore(
    (state) => state
  );

  const { getFilteredFlights, filterOptions } = filterStore((state) => state);

  const [flightToDisplay, setFlightToDisplay] = useState(getFilteredFlights);

  useEffect(() => {
    setFlightToDisplay(getPaginatedFlights(getFilteredFlights()));
  }, [getFilteredFlights, currentPage, filterOptions, getPaginatedFlights]);

  if (flightToDisplay.length === 0) {
    return <div>No flights found</div>;
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
