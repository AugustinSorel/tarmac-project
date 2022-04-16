import { FC } from "react";
import navbarItems from "../../../../utils/navbarItems";
import {
  NavbarItemTitle,
  NavbarList,
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
    // title is not part of the nav bar item
    if (navbarItem !== navbarItems[0]) {
      setSelectedNavbarItem(navbarItem);
    }
  };

  const NavbarTitleUnderline = () => {
    // if the navbar item is the the selected one then add the underline
    if (navbarItem === selectedNavbarItem) {
      return <NavbarUnderline layoutId="underline" />;
    }
    return null;
  };

  return (
    <NavbarList>
      <NavbarItemTitle onClick={clickHandler}>{navbarItem}</NavbarItemTitle>
      <NavbarTitleUnderline />
    </NavbarList>
  );
};

export default NavbarItem;
