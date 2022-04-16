import styled from "styled-components";

export const DepartureListContainer = styled.div`
  background-color: var(--background-color);

  & > * {
    padding: 1rem;
  }
`;

export const DepartureFilters = styled.div`
  border-bottom: var(--border-height) solid var(--color);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  backdrop-filter: blur(5px);
`;

export const DepartureFlightList = styled.ul``;

export const DeparturePaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: var(--border-height) solid var(--color);
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);
`;
