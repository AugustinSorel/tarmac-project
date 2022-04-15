import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavbarItem from "..";
import { NavbarLink } from "../../../../../utils/navbarLink";

const NavbarItemMock = (navbarLink: NavbarLink) => {
  return (
    <BrowserRouter>
      <NavbarItem
        link={navbarLink}
        selectedLinkUrl={""}
        setSelectedLinkUrl={() => null}
      />
    </BrowserRouter>
  );
};

describe("NavbarItem", () => {
  test("should render nav bar item correctly with the given parameters", () => {
    const navbarLink: NavbarLink = {
      name: "tarmac",
      url: "/",
    };

    render(<NavbarItemMock name={navbarLink.name} url={navbarLink.url} />);

    const navbarItem = screen.getByRole("link");

    expect(navbarItem.textContent).toBe(navbarLink.name);
  });
});
