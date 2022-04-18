import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "..";

describe("Pagination", () => {
  test("should not render the back button if first page is hit", () => {
    const curentPage = 1;
    const setCurrentPage = jest.fn();

    render(
      <Pagination
        currentPage={curentPage}
        numberOfPages={10}
        setCurrentPage={setCurrentPage}
      />
    );

    const backButton = screen.getAllByRole("button");

    expect(backButton.length).toBe(1);
  });

  test("should not render the forward button if the last page is hit", () => {
    const curentPage = 10;
    const setCurrentPage = jest.fn();

    render(
      <Pagination
        currentPage={curentPage}
        numberOfPages={10}
        setCurrentPage={setCurrentPage}
      />
    );

    const backButton = screen.getAllByRole("button");

    expect(backButton.length).toBe(1);
  });

  test("should move to the page + 1 if next button pressed", () => {
    const curentPage = 1;
    const setCurrentPage = jest.fn();

    render(
      <Pagination
        currentPage={curentPage}
        numberOfPages={10}
        setCurrentPage={setCurrentPage}
      />
    );

    const nextButton = screen.getByRole("button");
    fireEvent.click(nextButton);

    expect(setCurrentPage).toHaveBeenCalledWith(2);
  });

  test("should move to the page - 1 if back button pressed", () => {
    const curentPage = 10;
    const setCurrentPage = jest.fn();
    render(
      <Pagination
        currentPage={curentPage}
        numberOfPages={10}
        setCurrentPage={setCurrentPage}
      />
    );

    const nextButton = screen.getByRole("button");
    fireEvent.click(nextButton);

    expect(setCurrentPage).toHaveBeenCalledWith(9);
  });
});
