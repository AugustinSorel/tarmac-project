import { ChangeEvent } from "react";
import Filter from "../../../../shared/components/FormElements/Filter";
import { DepartureFiltersContainer } from "./DepartureFilters.styled";
import useFilterOptions from "../../../../shared/hooks/useFilterOption";
import paginationStore from "../../../../store/paginationStore";
import filterStore from "../../../../store/filterStore";

const DepartureFilters = () => {
  const { getDepartureTimeOptions, getCarrierOptions } = useFilterOptions();
  const setCurrentPage = paginationStore((state) => state.setCurrentPage);
  const setFilterOptions = filterStore((state) => state.setFilterOptions);

  const filterCarrierHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterOptions({ filterByCarrier: e.target.value });
    setCurrentPage(1);
  };

  const filterTimeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterOptions({ filterByTime: e.target.value });
    setCurrentPage(1);
  };

  return (
    <DepartureFiltersContainer>
      <Filter
        title="carrier"
        data={getCarrierOptions()}
        filterHandler={filterCarrierHandler}
      />

      <Filter
        title="time"
        data={getDepartureTimeOptions()}
        filterHandler={filterTimeHandler}
      />
    </DepartureFiltersContainer>
  );
};

export default DepartureFilters;
