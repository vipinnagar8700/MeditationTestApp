import { createStackNavigator } from "@react-navigation/stack";
import Registeration from "../Auth/Registeration";

import Login from "../Auth/login";
import Home from "../HomeScreens/Home";
import MenuScreen from "../HomeScreens/MenuScreen";
import TestScreen from "../HomeScreens/TestScreen";
import MeditationScreen from "../HomeScreens/MeditationScreen";
import MeditationVideoScreen from "../HomeScreens/MeditationsVideoScreen";
import MYTest from "../HomeScreens/MyTest";
import ProfilTestScreen from "../HomeScreens/ProfileTestScreen";
import FeedbackScreen from "../HomeScreens/FeedbackScreen";
import CalenderScreen from "../HomeScreens/CalenderScreen";
import DepressionTestScreen from "../HomeScreens/DepressionTestScreen";
import QuestionDepressionScreen from "../HomeScreens/QuestionDespressionScreen";
import ResultScreen from "../HomeScreens/Result";
import QuestionDepressionScreenSecond from "../HomeScreens/QuestionDespressionScreenSecond";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Check if token exists in AsyncStorage
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        console.log(token,"token")
        if (token && token) {
          // Token exists, navigate to Home screen
          navigation.navigate('Home');
        } else {
          // Token does not exist, navigate to Login screen
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Error checking token:', error);
      }
    };

    checkToken();
  }, [navigation]);

  return (
    <Stack.Navigator  > 
   
      <Stack.Screen
        name="Registeration"
        component={Registeration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Calender"
        component={CalenderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tests"
        component={TestScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Meditation"
        component={MeditationScreen}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name="MeditationVideo"
        component={MeditationVideoScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Setting"
        component={ProfilTestScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Setting-myProfile"
        component={MYTest}
        options={{ headerShown: false }}
      />
           <Stack.Screen
        name="DepressionTest"
        component={DepressionTestScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="QuestionDepression"
        component={QuestionDepressionScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Result"
        component={ResultScreen}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name="QuestionDepressionSecond"
        component={QuestionDepressionScreenSecond}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>

  );
};

export default AppNavigator;
