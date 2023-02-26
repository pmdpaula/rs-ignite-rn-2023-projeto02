import { useNavigation } from '@react-navigation/native';

import { BackButton, BackIcon, Container, Logo } from './styles';

import LogoImg from '@assets/logo.png';

type HeaderProps = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: HeaderProps) => {
  const { navigate } = useNavigation();

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={() => navigate('groups')}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
};
