import { FC } from "react";
import { scaleUp, scaleDown } from "../../../framerMotion/whileVariants";
import paths from "../../../utils/paths";
import { PaginationButton, PaginationTitle } from "./Pagination.styled";

interface Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  numberOfPages: number;
}

const Pagination: FC<Props> = ({
  numberOfPages,
  currentPage,
  setCurrentPage,
}) => {
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
          role={"button"}
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

      {currentPage < numberOfPages ? (
        <PaginationButton
          role={"button"}
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
