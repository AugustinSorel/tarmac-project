import { useQuery } from "react-query";
import { getFlights } from "../../../api/flightApi";
import DepartureFilters from "./DepartureFitlers";
import DepartureFlightList from "./DepartureFlightList";
import { DepartureListContainer } from "./DepartureList.styled";
import DeparturePagination from "./DeparturePagination";
import { useEffect } from "react";
import filterStore from "../../../store/filterStore";

const DepartureList = () => {
  const { status, data: flights } = useQuery("flightList", getFlights, {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const setFlightToBeFiltered = filterStore(
    (state) => state.setFlightToBeFiltered
  );

  useEffect(() => {
    if (flights) {
      setFlightToBeFiltered(flights);
    }
  }, [flights, setFlightToBeFiltered]);

  if (status !== "success") {
    return <div>Loading...</div>;
  }

  return (
    <DepartureListContainer>
      <DepartureFilters />

      <DepartureFlightList />

      <DeparturePagination />
    </DepartureListContainer>
  );
};

export default DepartureList;
