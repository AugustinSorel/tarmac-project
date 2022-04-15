export type NavbarLink = {
  name: string;
  url: string;
};

const navbarLinks: NavbarLink[] = [
  {
    name: "tarmac",
    url: "/arrival",
  },
  {
    name: "arrival",
    url: "/arrival",
  },
  {
    name: "departure",
    url: "/departure",
  },
];

export default navbarLinks;
