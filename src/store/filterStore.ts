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

    const filterByTime = (flight: Flight) => {
      if (filterOptions.filterByTime === "All") {
        return true;
      }

      const departureTime = getDateAsHour(flight.departure.scheduled);
      return departureTime === filterOptions.filterByTime;
    };

    const filterByAirline = (flight: Flight) => {
      if (filterOptions.filterByCarrier === "All") {
        return true;
      }

      return flight.airline.name === filterOptions.filterByCarrier;
    };

    const filteredFlights: Flight[] = get().flightToBeFiltered;

    return filteredFlights.filter(filterByAirline).filter(filterByTime);
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
