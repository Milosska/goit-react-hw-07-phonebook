import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 240px;
  transform: translate(-50%, -50%);
  background-color: rgba(171, 169, 169, 0.7);
`;
