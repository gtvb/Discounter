import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  max-height: 180px;
  background: var(--card);
  border: 0;
  border-radius: 5px;
  padding: 16px;
  transition-duration: 0.3s;
`;

export const Group = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

export const From = styled(motion.h2)`
  font: 600 2.4rem Inter;
  color: var(--main-blue);
  padding: 4px 6px;
`;

export const Availability = styled(motion.div)`
  font: 600 1rem Inter;
  color: var(--secondary-text);

  padding: 4px 6px;
`;

export const Content = styled(motion.div)`
  width: 100%;

  padding: 4px 6px;
`;

export const Original = styled(motion.p)`
  color: var(--secondary-text);
  font: 500 1.4rem Inter;
  padding: 8px 0;
`;

export const Code = styled(motion.p)`
  color: var(--secondary-text);
  font: 500 1.4rem Inter;
  padding: 8px 0;
`;

export const Full = styled(motion.h4)`
  text-align: center;
  color: var(--main-text);
  font: 500 1.4rem Inter;

  padding: 8px;

  > a {
    color: var(--main-blue);
    text-decoration: none;
    transition: 0.2s linear;
    padding: 4px 0;
  }

  > a:hover {
    color: var(--strong-blue);
  }
`;

export const StillValid = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  > section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 20px;
    padding: 4px;
    margin-top: 16px;
    border: 0;
    border-radius: 4px;
  }

  > section p {
    font: 600 1rem Inter;
  }

  > p {
    font: 600 1rem Inter;
  }
`;
