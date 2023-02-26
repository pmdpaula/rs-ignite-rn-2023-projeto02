import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import { ButtonIconTypeStyleProps, Container, Icon } from './styles';

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export const ButtonIcon = ({
  icon,
  type = 'PRIMARY',
  ...rest
}: ButtonIconProps) => {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
};
