/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/appError';

import { GROUP_COLLECTION } from '../storageConfig';
import { groupsGetAll } from './groupsGetAll';

export const groupCreate = async (newGroupName: string) => {
  try {
    const storedGroups = await groupsGetAll();

    const groupAlreadyExists = storedGroups.includes(newGroupName.trim());

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo com esse nome.');
    }

    const storage = JSON.stringify([...storedGroups, newGroupName.trim()]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
};
