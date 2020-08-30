import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
  z-index: 0;
`;

export const Filters = styled(motion.div)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BtnGroup = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin-top: 50px;
`;

export const DiscountGrid = styled(motion.main)`
  width: 90%;
  max-width: 980px;
  margin: 50px auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px;
`;
