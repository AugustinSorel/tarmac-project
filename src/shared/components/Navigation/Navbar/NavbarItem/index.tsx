import { FC } from "react";
import navbarItems from "../../../../utils/navbarItems";
import {
  HeaderLink,
  HeaderListItem,
  NavbarUnderline,
} from "./NavbarItem.styled";

interface Props {
  navbarItem: string;
  selectedNavbarItem: string;
  setSelectedNavbarItem: (url: string) => void;
}

const NavbarItem: FC<Props> = ({
  navbarItem,
  selectedNavbarItem,
  setSelectedNavbarItem,
}) => {
  const clickHandler = () => {
    if (navbarItem === navbarItems[0]) {
      setSelectedNavbarItem(navbarItems[1]);
    } else {
      setSelectedNavbarItem(navbarItem);
    }
  };

  const HeaderLinkUnderline = () => {
    if (navbarItem !== navbarItems[0] && navbarItem === selectedNavbarItem) {
      return <NavbarUnderline layoutId="underline" />;
    }
    return null;
  };

  return (
    <HeaderListItem>
      <HeaderLink onClick={clickHandler}>{navbarItem}</HeaderLink>
      <HeaderLinkUnderline />
    </HeaderListItem>
  );
};

export default NavbarItem;
