import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FilterTitle = styled.h3`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-regaular);
  text-transform: capitalize;
  user-select: none;
`;

export const FilterSelect = styled.select`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-light);
  outline: none;
  border: none;
  border-bottom: var(--border-height) solid var(--color);
  cursor: pointer;
  background-color: transparent;
  width: 100px;
`;

export const FilterOption = styled.option`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-light);
`;
