import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { useCallback, useState } from 'react';

import { Alert, FlatList } from 'react-native';

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';
import { ScreenContainer } from '@components/ScreenContainer';

import './styles';

export const Groups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const { navigate } = useNavigation();

  function handleNewGroup() {
    navigate('new');
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);

      const data = await groupsGetAll();
      setGroups(data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert('Turmas', 'Não foi possível carregar as turmas.');
    }
  }

  function handleOpenGroup(group: string) {
    navigate('players', { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, []),
  );

  return (
    <ScreenContainer>
      <Header />
      <Highlight title="Turmas" subTitle="Jogue com sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { marginBottom: 100 },
            groups.length === 0 && { flex: 1 },
          ]}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </ScreenContainer>
  );
};
