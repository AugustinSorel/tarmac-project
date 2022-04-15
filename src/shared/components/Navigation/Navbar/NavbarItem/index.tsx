import { FC } from "react";
import { NavbarLink } from "../../../../utils/navbarLink";
import {
  HeaderLink,
  HeaderListItem,
  NavbarUnderline,
} from "./NavbarItem.styled";

interface Props {
  link: NavbarLink;
  selectedLinkUrl: string;
  setSelectedLinkUrl: (url: string) => void;
}

const NavbarItem: FC<Props> = ({
  link,
  selectedLinkUrl,
  setSelectedLinkUrl,
}) => {
  const clickHandler = () => {
    setSelectedLinkUrl(link.url);
  };

  const HeaderLinkUnderline = () => {
    if (link.url !== "/" && link.url === selectedLinkUrl) {
      return <NavbarUnderline layoutId="underline" />;
    }
    return null;
  };

  return (
    <HeaderListItem>
      <HeaderLink to={link.url} onClick={clickHandler}>
        {link.name}
        <HeaderLinkUnderline />
      </HeaderLink>
    </HeaderListItem>
  );
};

export default NavbarItem;
