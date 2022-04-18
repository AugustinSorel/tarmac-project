import zustand from "zustand";
import { Flight } from "../shared/utils/FlightType";

interface PaginationStore {
  currentPage: number;
  numberOfPages: number;
  setCurrentPage: (currangePage: number) => void;

  getPaginatedFlights: (data: Flight[]) => Flight[];

  maxPage: number;

  dataPerPage: number;
}

const paginationStore = zustand<PaginationStore>((set, get) => ({
  currentPage: 1,
  numberOfPages: 1,
  maxPage: 10,
  dataPerPage: 10,

  setCurrentPage(currangePage: number) {
    if (currangePage > 0 && currangePage <= get().maxPage) {
      set({ currentPage: currangePage });
    }
  },

  /**
   *
   * @param flight the list of flights to paginate
   * @returns the flights for the current page
   */
  getPaginatedFlights(flight: Flight[]) {
    const indexOfLastFlight = get().currentPage * get().dataPerPage;
    const indexOfFirstFlight = indexOfLastFlight - get().dataPerPage;

    set({ numberOfPages: Math.ceil(flight.length / get().dataPerPage) });

    return flight.slice(indexOfFirstFlight, indexOfLastFlight);
  },
}));

export default paginationStore;
