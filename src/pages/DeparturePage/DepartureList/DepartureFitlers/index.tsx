import { ChangeEvent, FC } from "react";
import Filter from "../../../../shared/components/FormElements/Filter";
import { DepartureFiltersContainer } from "./DepartureFilters.styled";
import useFilterOptions from "../../../../shared/hooks/useFilterOption";

interface Props {
  setCurrentPage: (page: number) => void;
  updateFilterOption: (
    key: "filterByCarrier" | "filterByTime",
    value: string
  ) => void;
}

const DepartureFilters: FC<Props> = ({
  setCurrentPage,
  updateFilterOption,
}) => {
  const { getDepartureTimeOptions, getCarrierOptions } = useFilterOptions();

  const filterCarrierHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    updateFilterOption("filterByCarrier", e.target.value);
    setCurrentPage(1);
  };

  const filterTimeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    updateFilterOption("filterByTime", e.target.value);
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
