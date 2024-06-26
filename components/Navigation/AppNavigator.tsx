// AppNavigator.js
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Registeration from '../Auth/Registeration';
import Login from '../Auth/login';
import Home from '../HomeScreens/Home';
import MenuScreen from '../HomeScreens/MenuScreen';
import TestScreen from '../HomeScreens/TestScreen';
import MeditationScreen from '../HomeScreens/MeditationScreen';
import MeditationVideoScreen from '../HomeScreens/MeditationsVideoScreen';
import MYTest from '../HomeScreens/MyTest';
import ProfileTestScreen from '../HomeScreens/ProfileTestScreen';
import FeedbackScreen from '../HomeScreens/FeedbackScreen';
import CalenderScreen from '../HomeScreens/CalenderScreen';
import DepressionTestScreen from '../HomeScreens/DepressionTestScreen';
import QuestionDepressionScreen from '../HomeScreens/QuestionDespressionScreen';
import ResultScreen from '../HomeScreens/Result';
import QuestionDepressionScreenSecond from '../HomeScreens/QuestionDespressionScreenSecond';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Check if token exists in AsyncStorage
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          navigation.navigate('Home');
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Error checking token:', error);
      }
      navigation.navigate('Login');
    };

    checkToken();
  }, [navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Registeration" component={Registeration} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Calender" component={CalenderScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Tests" component={TestScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Meditation" component={MeditationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MeditationVideo" component={MeditationVideoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Setting" component={ProfileTestScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MYTest" component={MYTest} options={{ headerShown: false }} />
      <Stack.Screen name="DepressionTest" component={DepressionTestScreen} options={{ headerShown: false }} />
      <Stack.Screen name="QuestionDepression" component={QuestionDepressionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />
      <Stack.Screen name="QuestionDepressionSecond" component={QuestionDepressionScreenSecond} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
