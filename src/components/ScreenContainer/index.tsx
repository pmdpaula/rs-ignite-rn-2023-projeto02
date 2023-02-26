import { Container } from './styles';

type ScreenContainerProps = {
  children?: React.ReactNode;
};

export const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return <Container>{children}</Container>;
};
