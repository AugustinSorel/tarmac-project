import { motion } from "framer-motion";
import styled from "styled-components";

export const NavbarList = styled.li`
  position: relative;
  display: flex;
  cursor: pointer;

  &:first-child {
    flex: 1;
    cursor: default;
  }

  &:first-child > * {
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-regular);
    text-transform: capitalize;
  }
`;

export const NavbarItemTitle = styled.h1`
  color: var(--background-color);
  text-decoration: none;
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-light);
  text-transform: capitalize;
  user-select: none;
`;

export const NavbarUnderline = styled(motion.div)`
  position: absolute;
  background: var(--background-color);
  height: var(--border-height);
  width: 20px;
  left: calc(50% - 10px);
  bottom: -5px;
  border-radius: var(--border-radius);
`;
