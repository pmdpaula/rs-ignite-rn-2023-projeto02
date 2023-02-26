import { TextInput, TextInputProps } from 'react-native';

import { Container } from './styles';

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export const Input = ({ inputRef, ...rest }: InputProps) => {
  return <Container {...rest} ref={inputRef} />;
};
