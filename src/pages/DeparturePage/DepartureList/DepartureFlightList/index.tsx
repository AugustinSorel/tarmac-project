import { useEffect, useState } from "react";
import { Flight } from "../../../../shared/utils/FlightType";
import filterStore from "../../../../store/filterStore";
import paginationStore from "../../../../store/paginationStore";
import DepartureListItem from "../DepartureListItem";
import {
  DepartureFlightListContainer,
  DepartureFlightListNoResults,
} from "./DepartureFlightList.styled";

const DepartureFlightList = () => {
  const { getFilteredFlights, filterOptions } = filterStore((state) => state);

  const [flightToDisplay, setFlightToDisplay] = useState<Flight[]>([]);

  const { getPaginatedFlights, currentPage } = paginationStore(
    (state) => state
  );

  useEffect(() => {
    // every time the current page is changing or the filter options are changing, we need to update the flightToDisplay
    // getPageFlights returns the flights for the current page
    setFlightToDisplay(getPaginatedFlights(getFilteredFlights()));
  }, [getFilteredFlights, currentPage, filterOptions, getPaginatedFlights]);

  if (flightToDisplay.length === 0) {
    return (
      <DepartureFlightListNoResults>
        no flight found
      </DepartureFlightListNoResults>
    );
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
