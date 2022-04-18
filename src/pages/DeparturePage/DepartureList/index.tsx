import { useEffect } from "react";
import { useQuery } from "react-query";
import { getFlights } from "../../../api/flightApi";
import Loader from "../../../shared/components/UIElements/Loader";
import filterStore from "../../../store/filterStore";
import DepartureFilters from "./DepartureFitlers";
import DepartureFlightList from "./DepartureFlightList";
import { DepartureListContainer } from "./DepartureList.styled";
import DeparturePagination from "./DeparturePagination";

const DepartureList = () => {
  const { status, data: initialFlights } = useQuery("flightList", getFlights, {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { setFlightToBeFiltered, flightToBeFiltered } = filterStore(
    (state) => state
  );

  useEffect(() => {
    if (initialFlights) {
      setFlightToBeFiltered(initialFlights);
    }
  }, [initialFlights, setFlightToBeFiltered]);

  if (status !== "success" || flightToBeFiltered.length === 0) {
    return <Loader />;
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
