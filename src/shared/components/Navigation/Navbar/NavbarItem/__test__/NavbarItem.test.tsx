import { render, screen } from "@testing-library/react";
import NavbarItem from "..";
import navbarItems from "../../../../../utils/navbarItems";

describe("NavbarItem", () => {
  test("should render nav bar item correctly with the given parameters", () => {
    render(
      <NavbarItem
        navbarItem={navbarItems[0]}
        selectedNavbarItem=""
        setSelectedNavbarItem={() => null}
      />
    );
    const navbarItem = screen.getByText(navbarItems[0]);

    expect(navbarItem).toBeInTheDocument();
  });
});
