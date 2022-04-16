import { useState } from "react";
import navbarItems from "../../../utils/navbarItems";
import { Header, NavbarList, Nav } from "./Navbar.styled";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  // the selected link url is used for the underline animation
  const [selectedNavbarItem, setSelectedNavbarItem] = useState(navbarItems[2]);

  return (
    <Header>
      <Nav>
        <NavbarList>
          {navbarItems.map((navbarItem) => (
            <NavbarItem
              key={navbarItem}
              navbarItem={navbarItem}
              selectedNavbarItem={selectedNavbarItem}
              setSelectedNavbarItem={setSelectedNavbarItem}
            />
          ))}
        </NavbarList>
      </Nav>
    </Header>
  );
};

export default Navbar;
