import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ScreenContainer } from '@components/ScreenContainer';

import { Content, Icon } from './styles';

export const NewGroup = () => {
  return (
    <ScreenContainer>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subTitle="Crie uma turma para jogar com seus amigos"
        />

        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginVertical: 20 }} />
      </Content>
    </ScreenContainer>
  );
};
