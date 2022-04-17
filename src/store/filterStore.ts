import zustand from "zustand";
import { Flight } from "../shared/utils/FlightType";
import { getDateAsHour } from "../shared/utils/formatedDate";

interface FilterStore {
  flightToBeFiltered: Flight[];
  setFlightToBeFiltered: (flights: Flight[]) => void;

  getFilteredFlights: () => Flight[];

  filterOptions: {
    [key: string]: string;
  };
  setFilterOptions: (newValue: { [key: string]: string }) => void;
}

const filterStore = zustand<FilterStore>((set, get) => ({
  flightToBeFiltered: [],

  getFilteredFlights: () => {
    const filterOptions = get().filterOptions;

    const filteredFlights = get().flightToBeFiltered.filter((flight) => {
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
          getDateAsHour(flight.departure.scheduled) ===
            filterOptions.filterByTime
        );
      }

      if (filterOptions.filterByCarrier !== "All") {
        return flight.airline.name === filterOptions.filterByCarrier;
      }

      if (filterOptions.filterByTime !== "All") {
        return (
          getDateAsHour(flight.departure.scheduled) ===
          filterOptions.filterByTime
        );
      }

      return false;
    });

    return filteredFlights;
  },

  setFlightToBeFiltered: (flights) => {
    set(() => ({
      flightToBeFiltered: flights,
    }));
  },

  filterOptions: {
    filterByCarrier: "All",
    filterByTime: "All",
  },

  setFilterOptions: (newValue: { [key: string]: string }) => {
    set(() => ({
      filterOptions: {
        ...get().filterOptions,
        ...newValue,
      },
    }));
  },
}));

export default filterStore;
