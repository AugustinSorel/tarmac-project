import { useEffect, useState } from "react";
import navbarLinks, { NavbarLink } from "../../../utils/navbarLink";
import { Header, HeaderList, HeaderNav } from "./Navbar.styled";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  // the selected link url is used for the underline animation
  const [selectedLinkUrl, setSelectedLinkUrl] = useState("");

  useEffect(() => {
    setSelectedLinkUrl(window.location.pathname);
  }, []);

  return (
    <Header>
      <HeaderNav>
        <HeaderList>
          {navbarLinks.map((navbarLink: NavbarLink) => (
            <NavbarItem
              key={navbarLink.name}
              link={navbarLink}
              selectedLinkUrl={selectedLinkUrl}
              setSelectedLinkUrl={setSelectedLinkUrl}
            />
          ))}
        </HeaderList>
      </HeaderNav>
    </Header>
  );
};

export default Navbar;
