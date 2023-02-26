import { useNavigation, useRoute } from '@react-navigation/native';
import { AppError } from '@utils/appError';

import { useEffect, useRef, useState } from 'react';

import { Alert, FlatList, Keyboard, TextInput } from 'react-native';

import { groupRemoveByName } from '@storage/group/groupRemoveByName';
import { PlayerStorageDTO } from '@storage/players/PlayerStorageDTO';
import { playerAddByGroup } from '@storage/players/playerAddByGroup';
import { playerRemoveByGroup } from '@storage/players/playerRemoveByGroup';
import { playersGetByGroupAndTeam } from '@storage/players/playersGetByGroupAndTeam';

import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';
import { PlayerCard } from '@components/PlayerCard';
import { ScreenContainer } from '@components/ScreenContainer';

import { Form, HeaderList, NumberOfPlayers } from './styles';

type RouteParams = {
  group: string;
};

export const Players = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState<string>('');
  const [team, setTeam] = useState<string>('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;
  const { navigate } = useNavigation();

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayerName.trim() === '') {
      return Alert.alert('Nova Pessoa', 'Digite o nome do jogador.');
    }

    const newPlayer = {
      name: newPlayerName.trim(),
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      // newPlayerNameInputRef.current?.blur();
      Keyboard.dismiss();

      setNewPlayerName('');
      fetchPlayersByTeam(team);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Pessoa', error.message);
      } else {
        Alert.alert('Nova Pessoa', 'Não foi possível adicionar a pessoa.');
      }
    }
  }

  async function fetchPlayersByTeam(team: string) {
    try {
      setIsLoading(true);

      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);

      setIsLoading(false);
    } catch (error) {
      if (error instanceof AppError) {
        console.log(error.message);
        Alert.alert(
          'Pessoas',
          'Não foi possível carregar as pessoas do time selecionado.',
        );
      }
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam(team);
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível remover a pessoa.');
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigate('groups');
    } catch (error) {
      console.log(error);
      Alert.alert('Remover turma', 'Não foi possível remover a turma.');
    }
  }

  async function handleRemoveGroup() {
    Alert.alert('Remover', 'Deseja remover a turma?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => groupRemove(),
      },
    ]);
  }

  useEffect(() => {
    fetchPlayersByTeam(team);
  }, [team]);

  return (
    <ScreenContainer>
      <Header showBackButton />
      <Highlight title={group} subTitle="adicione a galera e separe os times" />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => {
                handleRemovePlayer(item.name);
              }}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Não há pessoas nesse time" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 50 },
            players.length === 0 && { flex: 1 },
          ]}
        />
      )}
      <Button
        title="Remover turma"
        type="SECONDARY"
        onPress={handleRemoveGroup}
      />
    </ScreenContainer>
  );
};
