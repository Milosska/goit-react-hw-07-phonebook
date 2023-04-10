import { RotatingLines } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </Container>
  );
};
