import moment from "moment";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { Flight } from "../utils/FlightType";

const useFlightFilter = () => {
  const queryClient = useQueryClient();
  const flightsList = queryClient.getQueryData("flightList") as Flight[];

  const [filteredFlightList, setFilteredFlightList] = useState<Flight[]>([]);
  const [filterOptions, setFilterOption] = useState({
    filterByCarrier: "All",
    filterByTime: "All",
  });

  useEffect(() => {
    if (flightsList) {
      setFilteredFlightList(flightsList);
    }
  }, [flightsList]);

  useEffect(() => {
    if (!flightsList) {
      return;
    }

    const filteredFlights = flightsList.filter((flight) => {
      if (
        filterOptions.filterByCarrier === "All" &&
        filterOptions.filterByTime === "All"
      ) {
        return true;
      }

      if (
        filterOptions.filterByCarrier !== "All" &&
        filterOptions.filterByTime !== "All"
      ) {
        return (
          flight.airline.name === filterOptions.filterByCarrier &&
          moment(flight.departure.scheduled).utc().format("HH:mm:ss") ===
            filterOptions.filterByTime
        );
      }

      if (filterOptions.filterByCarrier !== "All") {
        return flight.airline.name === filterOptions.filterByCarrier;
      }

      if (filterOptions.filterByTime !== "All") {
        return (
          moment(flight.departure.scheduled).utc().format("HH:mm:ss") ===
          filterOptions.filterByTime
        );
      }
    });

    setFilteredFlightList(filteredFlights);
  }, [filterOptions]);

  const updateFilterOption = (
    key: keyof typeof filterOptions,
    value: string
  ) => {
    setFilterOption({
      ...filterOptions,
      [key]: value,
    });
  };

  return { updateFilterOption, filteredFlightList };
};

export default useFlightFilter;
