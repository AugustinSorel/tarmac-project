import { FC } from "react";
import Pagination from "../../../../shared/components/UIElements/Pagination";
import { DeparturePaginationContainer } from "./DeparturePagination.styled";

interface Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  maxPage: number;
}

const DeparturePagination: FC<Props> = ({
  currentPage,
  setCurrentPage,
  maxPage,
}) => {
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
