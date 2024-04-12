// MenuScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../Helper/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserDetailsApi } from '../Api/Api';
import { apiUrlUserImage } from '../Api/ApiUrl';

const MenuScreen = () => {

  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const menuItems = [
    { id: '1', title: 'Home Page', screen: 'Home' },
    { id: '2', title: 'Tests', screen: 'Tests' },
    { id: '3', title: 'Meditation', screen: 'Meditation' },
    { id: '4', title: 'Calendar', screen: 'Calender' },
    { id: '5', title: 'Feedback', screen: 'Feedback' },
    { id: '6', title: 'About our project', screen: 'About' },
    { id: '7', title: 'Settings', screen: 'MYTest' },
    { id: '8', title: 'Go out', screen: 'Logout' },
  ];

  const handlePress =async (screen) => {
    if (screen === 'Logout') {
      // Remove token from AsyncStorage
      try {
        await AsyncStorage.removeItem('token');
        console.log("Token Remove@")
        // Navigate to Login screen or any other screen you prefer after logout
        navigation.navigate('Login');
      } catch (error) {
        console.error('Error removing token:', error);
      }
    } else {
      navigation.navigate(screen);
    }
  };


  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken !== null) {
         console.log(storedToken,"storedToken")
         fetchUserData(storedToken); 
        }
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    };

    fetchToken();
  }, []);

  const fetchUserData = async (token) => {
    try {
      const userDataResponse = await UserDetailsApi(token);
      setUserData(userDataResponse?.user);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };



  const Setting =()=>{
    navigation.navigate('MYTest')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userContainer} onPress={Setting}>
      {
          userData?.image ? (
            <Image source={{uri:`${apiUrlUserImage}/${userData?.image}`}} style={styles.userImage} />
          ):(
            <Image source={require('../../assets/user.png')} style={styles.userImage} />

          )
        }
     
        <Text style={styles.menuTexta}>{userData?.name || 'User'} </Text>
        <Text style={styles.menuTextaa}>{userData?.email || 'User@gmail.com'}</Text>
      </TouchableOpacity>
      <FlatList 
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.screen)}>
            <View style={styles.menuItem}>
              <Text style={styles.menuText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userContainer: {
    alignItems: 'start',
    marginBottom: 20,
    width: '100%', backgroundColor: "#D3F896", padding: 20
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50, 
  },
  menuItem: {
    paddingHorizontal: 20,
    width: '100%', paddingVertical: 15
  },
  menuText: {
    fontSize: 18, fontFamily: 'appfont-light',
    color: Colors.BLACK
  },
  menuTexta: {
    fontSize: 18,
    fontFamily: 'appfont-medium',
    marginTop: 10, color: Colors.BLACK
  },
  menuTextaa: {
    fontSize: 10,
    fontFamily: 'appfont-light',
    color: Colors.BLACK
  },
});

export default MenuScreen;
