import { motion } from "framer-motion";
import styled from "styled-components";

export const DepartureFlightItem = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-left: 3px;
  user-select: none;

  padding: 1rem;

  &:hover {
    box-shadow: -3px 0px 0px 0px var(--color);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DepartureFlightItemText = styled.h3`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-light);
  text-transform: capitalize;
  flex: 1;

  &:first-child {
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-regular);

    @media screen and (max-width: 768px) {
      align-self: center;
    }
  }
`;

export const ImageIATA = styled.img`
  width: 100px;
  height: 50px;
`;
