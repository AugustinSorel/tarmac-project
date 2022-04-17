import zustand from "zustand";
import { Flight } from "../shared/utils/FlightType";

interface PaginationStore {
  currentPage: number;
  setCurrentPage: (currangePage: number) => void;

  getPaginatedFlights: (data: Flight[]) => Flight[];

  maxPage: number;

  dataPerPage: number;
}

const paginationStore = zustand<PaginationStore>((set, get) => ({
  currentPage: 1,
  maxPage: 10,
  dataPerPage: 10,

  setCurrentPage(currangePage: number) {
    if (currangePage > 0 && currangePage <= get().maxPage) {
      set({ currentPage: currangePage });
    }
  },

  getPaginatedFlights(data: Flight[]) {
    const indexOfLastFlight = get().currentPage * get().dataPerPage;
    const indexOfFirstFlight = indexOfLastFlight - get().dataPerPage;
    return data.slice(indexOfFirstFlight, indexOfLastFlight);
  },
}));

export default paginationStore;
