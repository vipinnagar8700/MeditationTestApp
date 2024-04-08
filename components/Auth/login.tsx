import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import Colors from '../../Helper/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginApi } from '../Api/Api';


const Login = () => {
  const navigation = useNavigation(); // Get navigation object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login navigation
  const Registeration = () => {
    navigation.navigate('Registeration'); // Navigate to the Login screen
  };

  // Function to handle login navigation
  const HandleHome = async () => {
    try {
      const response = await LoginApi(email, password); // Call the LoginApi function
      console.log(response, "response")
      if (response.status === 'Success') {
        // Login successful
        await AsyncStorage.setItem('token', response.token); // Store token in AsyncStorage
        navigation.navigate('Home');
      } else {
        // Login failed
        Alert.alert('Error', response.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'An error occurred while logging in. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>mindtrack</Text>
        <Image source={require('../../assets/World.png')} style={{ width: 30, height: 30 }} />
      </View>
      <Text style={styles.headerTexta}>Login</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor={Colors.WHITE}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputa}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={Colors.WHITE}
          value={password}
          onChangeText={setPassword}
        />
        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row' }}>
          <Text style={{ fontFamily: 'appfont-light', marginTop: 0, color: Colors.WHITE, padding: 0 }}> </Text>
          <Text style={{ fontFamily: 'appfont-light', marginTop: 0, color: Colors.WHITE, padding: 0 }}></Text>
          <Text style={{ fontFamily: 'appfont-light', marginTop: 0, color: Colors.WHITE, padding: 0 }}>Forgot Password </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={HandleHome}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Registeration}>
          <Text style={{ fontFamily: 'appfont-light', marginTop: 10, color: Colors.WHITE }}>Registeration</Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: 'appfont-light', marginTop: 15, textAlign: 'center', color: Colors.WHITE }}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
      </View>


      <View style={styles.iconContainer}>
        <View style={styles.buttonTexta}>
          <FontAwesome5 name="whatsapp" size={24} color="#40C351" />
          <Entypo name="facebook-with-circle" size={24} color="#059CE5" />
          <FontAwesome name="instagram" size={24} color="#D61A5F" />
          <Feather name="twitter" size={24} color="#059CE5" />
          <FontAwesome5 name="telegram" size={24} color="#059CE5" />
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: Colors.PRIMARY, width: '100%', padding: 5, flexDirection: 'row', justifyContent: 'center', gap: 10
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'appfont-light',
    textAlign: 'center', color: Colors.WHITE
  },
  headerTexta: {
    fontSize: 24,
    fontFamily: 'appfont-light',
    textAlign: 'center', color: Colors.PRIMARY, marginTop: 70
  },
  formContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '80%', paddingTop: 40,
    backgroundColor: Colors.SECONDARY, borderRadius: 10, paddingBottom: 70, paddingHorizontal: 20
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: Colors.PRIMARY, fontFamily: 'appfont-light', textAlign: 'center'
  },
  inputa: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 5,
    marginBottom: 2,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: Colors.PRIMARY, fontFamily: 'appfont-light', textAlign: 'center'
  },
  button: {
    backgroundColor: Colors.BUTTON,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: Colors.BLACK,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'appfont-medium'
  },
  buttonTexta: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30, marginTop: 100
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', flex: 1, borderBottomColor: Colors.BLACK, borderBottomWidth: 1, marginBottom: 50
  },
});

export default Login;
