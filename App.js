import { StyleSheet, StatusBar } from "react-native";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import AppNavigator from "./components/Navigation/AppNavigator";
import { AuthProvider } from "./components/Context/AuthContext";


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

  // Render SplashScreen if fonts are not loaded or while checking user login status
  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  // Render different screens based on user login status
  return (
    <>
      <NavigationContainer >
        <AuthProvider>
          <StatusBar hidden />
          <AppNavigator />
        </AuthProvider>
      </NavigationContainer >


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Change this to your preferred background color
  },
});
