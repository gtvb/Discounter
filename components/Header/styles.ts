import styled from 'styled-components';

export const Heading = styled.div`
  width: 100vw;
  background: var(--background);
  border: 1px solid var(--border);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

  > h1 {
    font: 700 2.4rem Inter;
    line-height: 2.4rem;
    color: var(--main-blue);
    padding: 18px;
    text-align: start;
    cursor: pointer;
  }
`;
