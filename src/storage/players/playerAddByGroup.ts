/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/appError';

import { PLAYER_COLLECTION } from '../storageConfig';
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';

export const playerAddByGroup = async (
  newPlayer: PlayerStorageDTO,
  group: string,
) => {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name.trim() === newPlayer.name.trim(),
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já está adicionada em outro time.');
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
};
