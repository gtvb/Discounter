import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  background: var(--background);
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ImgHolder = styled.div`
  width: 50%;
  padding: 0 8px;

  > img {
    width: 100%;
  }

  @media (max-width: 1124px) {
    display: none;
  }
`;

export const About = styled(motion.button)`
  font: 600 1.9rem Inter;
  padding: 16px;
  border: 2px solid var(--main-blue);
  border-radius: 5px;
  background: var(--background);
  box-shadow: 0 4px 14px 0 var(--shadow);
  color: var(--main-blue);
  cursor: pointer;
  margin: 24px 16px;
`;

export const ContentContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  @media (max-width: 1124px) {
    width: 100vw;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 24px;

  > p {
    font: 500 1rem Inter;
    color: var(--secondary-text);
  }
`;

export const Heading = styled.div`
  font: 800 3.4rem Inter;
  color: var(--main-blue);
`;

export const Original = styled(motion.button)`
  font: 600 1.9rem Inter;
  padding: 16px;
  border: 0;
  border-radius: 5px;
  background: var(--main-blue);
  box-shadow: 0 4px 14px 0 var(--shadow);
  color: var(--background);
  cursor: pointer;
  margin: 24px 16px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Code = styled(motion.div)`
  padding: 24px 0;
  text-align: center;

  > p {
    font: 500 1.4rem Inter;
    padding: 8px 0;
  }

  > h1 {
    font: 800 3.4rem Inter;
    color: var(--main-blue);
  }
`;

export const AboutModalWrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--overlay);
`;

export const AboutModal = styled(motion.div)`
  width: 325px;
  background: var(--card);

  border: 0;
  border-radius: 5px;

  padding: 16px;

  > p {
    text-align: center;
    padding: 4px 0 16px 0;
    color: var(--main-blue);
    font: 700 1.8rem Inter;
  }

  > h3 {
    text-align: justify;
    color: var(--modal-text);
    font: 700 1.2rem Inter;
    padding: 24px;
  }
`;
