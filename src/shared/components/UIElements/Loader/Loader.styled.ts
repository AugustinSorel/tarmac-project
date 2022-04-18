import { motion } from "framer-motion";
import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoaderTitle = styled.h1`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);
  text-transform: capitalize;
`;

export const LoaderContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;

export const LoaderElement = styled(motion.span)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: var(--accent-color);
`;
