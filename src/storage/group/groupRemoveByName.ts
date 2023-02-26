/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';

import { groupsGetAll } from './groupsGetAll';

export const groupRemoveByName = async (groupName: string) => {
  try {
    const storadGroups = await groupsGetAll();
    const filtered = storadGroups.filter((group) => group !== groupName);
    const groups = JSON.stringify(filtered);

    await AsyncStorage.setItem(GROUP_COLLECTION, groups);

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`);
  } catch (error) {
    throw error;
  }
};
