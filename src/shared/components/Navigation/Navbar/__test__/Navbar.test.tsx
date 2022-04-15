import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "..";
import navbarLinks from "../../../../utils/navbarLink";

const NavbarMock = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

describe("Navbar", () => {
  test("should render the correct number of links", () => {
    render(<NavbarMock />);
    const listElement = screen.getByRole("list");

    const numberOfLinksRendered = listElement.childElementCount;
    const expectedNumberOfLinks = navbarLinks.length;

    expect(numberOfLinksRendered).toBe(expectedNumberOfLinks);
  });

  test("should render the links file text correctly", () => {
    render(<NavbarMock />);
    const listElement = screen.getByRole("list");

    let areLinksCorrect = true;

    navbarLinks.forEach((link) => {
      const linkElement = listElement.querySelector(
        `[href="${link.url}"]`
      ) as HTMLElement;

      if (linkElement.textContent !== link.name) {
        areLinksCorrect = false;
      }
    });

    expect(areLinksCorrect).toBe(true);
  });

  test("should render the links file path correctly", () => {
    render(<NavbarMock />);
    const listElement = screen.getByRole("list");

    let areLinksCorrect = true;

    navbarLinks.forEach((link) => {
      const linkElement = listElement.querySelector(
        `[href="${link.url}"]`
      ) as HTMLElement;

      if (linkElement.getAttribute("href") !== link.url) {
        areLinksCorrect = false;
      }
    });

    expect(areLinksCorrect).toBe(true);
  });
});
