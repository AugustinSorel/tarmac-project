import { useState } from "react";
import navbarItems from "../../../utils/navbarItems";
import { Header, HeaderList, HeaderNav } from "./Navbar.styled";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  // the selected link url is used for the underline animation
  const [selectedNavbarItem, setSelectedNavbarItem] = useState(navbarItems[1]);

  return (
    <Header>
      <HeaderNav>
        <HeaderList>
          {navbarItems.map((navbarItem) => (
            <NavbarItem
              key={navbarItem}
              navbarItem={navbarItem}
              selectedNavbarItem={selectedNavbarItem}
              setSelectedNavbarItem={setSelectedNavbarItem}
            />
          ))}
        </HeaderList>
      </HeaderNav>
    </Header>
  );
};

export default Navbar;
