// App.js
import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './components/Navigation/AppNavigator';
import { AuthProvider } from './components/Context/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    'appfont-semi': require('./assets/fonts/Inter-Black.ttf'),
    'appfont-bold': require('./assets/fonts/Inter-Bold.ttf'),
    'appfont-extraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'appfont-extraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'appfont-light': require('./assets/fonts/Inter-Light.ttf'),
    'appfont-medium': require('./assets/fonts/Inter-Medium.ttf'),
    'appfont': require('./assets/fonts/Inter-Regular.ttf'),
    'appfont-semiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'appfont-thin': require('./assets/fonts/Inter-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }

  return (
    <NavigationContainer>
        <StatusBar hidden />
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
