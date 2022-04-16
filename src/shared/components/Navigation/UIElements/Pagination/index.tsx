import { FC } from "react";
import { scaleDown, scaleUp } from "../../../../framerMotion/whileVariants";
import paths from "../../../../utils/paths";
import { PaginationButton, PaginationTitle } from "./Pagination.styled";

interface Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  maxPage: number;
}

const Pagination: FC<Props> = ({ maxPage, currentPage, setCurrentPage }) => {
  const goBackHandler = () => {
    setCurrentPage(currentPage - 1);
  };

  const goForwardHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {currentPage > 1 ? (
        <PaginationButton
          onClick={goBackHandler}
          whileHover={{ ...scaleUp }}
          whileTap={{ ...scaleDown }}
        >
          <path d={paths.backArrow} />
        </PaginationButton>
      ) : (
        <div />
      )}

      <PaginationTitle>page: {currentPage}</PaginationTitle>

      {currentPage < maxPage ? (
        <PaginationButton
          onClick={goForwardHandler}
          whileHover={{ ...scaleUp }}
          whileTap={{ ...scaleDown }}
        >
          <path d={paths.forwardArrow} />
        </PaginationButton>
      ) : (
        <div />
      )}
    </>
  );
};

export default Pagination;
