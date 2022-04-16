import styled from "styled-components";

export const DepartureContainer = styled.main`
  background-color: var(--background-dark-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  overflow: hidden;
`;

export const DepartureTitle = styled.h2`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-light);
  text-transform: capitalize;
`;

export const DepartureSection = styled.section`
  background-color: var(--background-color);
  overflow: auto;
  flex: 1;

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
  backdrop-filter: blur(5px);
`;

export const DepartureList = styled.ul`
  overflow: auto;
  height: auto;
`;

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

export const PaginationButton = styled.button``;

export const PaginationTitle = styled.h3`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-light);
  text-transform: capitalize;
`;
