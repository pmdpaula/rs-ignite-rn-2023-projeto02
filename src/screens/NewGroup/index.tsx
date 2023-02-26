import { useNavigation } from '@react-navigation/native';
import { AppError } from '@utils/appError';

import { useState } from 'react';

import { Alert } from 'react-native';

import { groupCreate } from '@storage/group/groupCreate';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ScreenContainer } from '@components/ScreenContainer';

import { Content, Icon } from './styles';

export const NewGroup = () => {
  const [group, setGroup] = useState<string>('');

  const { navigate } = useNavigation();

  async function handleNewGroup() {
    try {
      if (group.trim().length === 0) {
        if (group.includes(' ')) {
          throw new AppError(
            'Não é permitido espaços em branco como nome da turma.',
          );
        } else {
          throw new AppError('Informe o nome da turma.');
        }
      }

      await groupCreate(group);
      navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar o novo grupo.');
        console.log(error);
      }
    }
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
          onSubmitEditing={handleNewGroup}
          returnKeyType="done"
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
