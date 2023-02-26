import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { ScreenContainer } from '@components/ScreenContainer';

import './styles';

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([
    'Galera da Rocketseat',
    'Galera do TRT1',
    'Pessoal da Petrobras',
    'Pessoal da Vale',
    'Família',
    'Amigos',
    'Casa',
    'Galera do Canadá',
  ]);

  useEffect(() => {
    setGroups([]);
  }, []);

  return (
    <ScreenContainer>
      <Header />
      <Highlight title="Turmas" subTitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { marginBottom: 100 },
          groups.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button type="SECONDARY" title="Criar nova turma" />
    </ScreenContainer>
  );
};
