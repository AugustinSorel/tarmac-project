import { motion } from "framer-motion";
import styled from "styled-components";

export const PaginationButton = styled(motion.svg)`
  cursor: pointer;
  fill: var(--color);
  width: 1.5rem;
  height: 1.5rem;
`;

export const PaginationTitle = styled.h3`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-light);
  text-transform: capitalize;
  user-select: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
