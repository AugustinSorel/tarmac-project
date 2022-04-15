import { render, screen } from "@testing-library/react";
import Navbar from "..";
import navbarItems from "../../../../utils/navbarItems";

describe("Navbar", () => {
  test("should render the correct number of nav bar items", () => {
    render(<Navbar />);
    const listElement = screen.getByRole("list");

    const numberOfLinksRendered = listElement.childElementCount;
    const expectedNumberOfLinks = navbarItems.length;

    expect(numberOfLinksRendered).toBe(expectedNumberOfLinks);
  });

  test("should render the nav bar item from the file  correctly", () => {
    render(<Navbar />);
    const listElement = screen.getByRole("list");

    navbarItems.forEach((item, index) => {
      const navbarItem = listElement.children[index];
      expect(navbarItem.textContent).toBe(item);
    });
  });
});
