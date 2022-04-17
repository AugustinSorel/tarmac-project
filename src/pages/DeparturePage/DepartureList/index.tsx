import { useQuery } from "react-query";
import { getFlights } from "../../../api/flightApi";
import DepartureFilters from "./DepartureFitlers";
import DepartureFlightList from "./DepartureFlightList";
import { DepartureListContainer } from "./DepartureList.styled";
import DeparturePagination from "./DeparturePagination";
import useDeparturePagination from "../../../shared/hooks/useDeparturePagination";
import useFlightFilter from "../../../shared/hooks/useFlightFilter";

const DepartureList = () => {
  const { status } = useQuery("flightList", getFlights, {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const { filteredFlightList, updateFilterOption } = useFlightFilter();

  const { currentFlights, setCurrentPage, currentPage, maxPage } =
    useDeparturePagination(filteredFlightList);

  if (status !== "success" || !currentFlights) {
    return <div>Loading...</div>;
  }

  return (
    <DepartureListContainer>
      <DepartureFilters
        setCurrentPage={setCurrentPage}
        updateFilterOption={updateFilterOption}
      />

      <DepartureFlightList currentFlights={currentFlights} />

      <DeparturePagination
        currentPage={currentPage}
        maxPage={maxPage}
        setCurrentPage={setCurrentPage}
      />
    </DepartureListContainer>
  );
};

export default DepartureList;
