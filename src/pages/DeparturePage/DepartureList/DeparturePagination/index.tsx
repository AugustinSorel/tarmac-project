import Pagination from "../../../../shared/components/UIElements/Pagination";
import paginationStore from "../../../../store/paginationStore";
import { DeparturePaginationContainer } from "./DeparturePagination.styled";

const DeparturePagination = () => {
  const { currentPage, maxPage, setCurrentPage } = paginationStore(
    (state) => state
  );

  return (
    <DeparturePaginationContainer>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPage={maxPage}
      />
    </DeparturePaginationContainer>
  );
};

export default DeparturePagination;
