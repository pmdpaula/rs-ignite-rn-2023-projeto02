import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ScreenContainer } from '@components/ScreenContainer';

import { Content, Icon } from './styles';

// type NewGroupProps = {
//   group: string;
// };

export const NewGroup = () => {
  const [group, setGroup] = useState<string>('');

  const { navigate } = useNavigation();

  function handleNewGroup() {
    navigate('players', { group });
  }

  return (
    <ScreenContainer>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subTitle="Crie uma turma para jogar com seus amigos"
        />

        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />
        <Button
          title="Criar"
          style={{ marginVertical: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </ScreenContainer>
  );
};
