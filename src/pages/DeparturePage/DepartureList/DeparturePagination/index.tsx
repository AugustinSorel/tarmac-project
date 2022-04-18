import Pagination from "../../../../shared/components/UIElements/Pagination";
import paginationStore from "../../../../store/paginationStore";
import { DeparturePaginationContainer } from "./DeparturePagination.styled";

const DeparturePagination = () => {
  const { currentPage, setCurrentPage, numberOfPages } = paginationStore(
    (state) => state
  );

  return (
    <DeparturePaginationContainer>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfPages={numberOfPages}
      />
    </DeparturePaginationContainer>
  );
};

export default DeparturePagination;
