import styled from "styled-components";

export const DepartureFiltersContainer = styled.div`
  border-bottom: var(--border-height) solid var(--color);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: end;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    & > * {
      justify-content: space-between;
    }
  }
`;
