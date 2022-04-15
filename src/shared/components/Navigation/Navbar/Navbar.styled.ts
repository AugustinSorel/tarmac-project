import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--accent-color);
  padding: 1rem;

  * > ::selection {
    background-color: var(--background-color);
    color: var(--accent-color);
  }
`;

export const HeaderNav = styled.nav``;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1rem;
`;
