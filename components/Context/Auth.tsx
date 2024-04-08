// utils/auth.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserDetailsApi } from '../Api/Api';

export const fetchUserData = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    console.log(token,"tokentoken")
    if (token) {
      const userDataResponse = await UserDetailsApi(token);
      return userDataResponse;
    }
    return null; // No token found
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.error('Error removing token:', error);
  }
};
