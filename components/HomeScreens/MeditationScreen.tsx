import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Helper/Colors';
import { useNavigation } from '@react-navigation/native';
import { GetMeditation } from '../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiUrlImage } from '../Api/ApiUrl';

const MeditationScreen = () => {
  const navigation = useNavigation(); // Get navigation object
  const [loading, setLoading] = useState(true); // State variable to track loading state

  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate('Menu'); // Navigate to the Login screen
  };

  // Function to handle login navigation
  const handleMeditations = (id) => {
    console.log(id, "Meditationid")
    navigation.navigate('MeditationVideo', { id: id }); // Navigate to the Login screen
  };

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
          console.log(token, "storedToken")
          fetchUserData(token);
        }
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    };

    fetchToken();
  }, []);

  const fetchUserData = async (token) => {
    try {
      const userDataResponse = await GetMeditation(token);
      setUserData(userDataResponse?.data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  console.log(userData, "Meditations")

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View style={{ padding: 20, flexDirection: "row", justifyContent: 'space-around' }}>
          <View>
            <Text style={{ fontFamily: 'appfont', fontSize: 15, color: Colors.WHITE }}>Yoga Nidra</Text>
            <Text style={{ fontFamily: 'appfont-medium', fontSize: 22, color: Colors.WHITE }}>Yogic sleep</Text>
          </View>
          <Image source={require("../../assets/H.png")} style={{ width: 200, height: 120, resizeMode: 'contain' }} />
        </View>
      </View>
      <View style={{ backgroundColor: Colors.WHITE, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 5 }}>
        <View>
          <Text style={{ fontFamily: 'appfont-medium', fontSize: 18 }}>
            Meditation
          </Text>
          <Text style={{ fontFamily: 'appfont-light' }}>
            Psychological, educational
          </Text>
        </View>
      </View>

      {loading ? ( // Render loading indicator if loading state is true
        <ActivityIndicator size="large" color={Colors.PRIMARY} style={styles.loadingIndicator} />
      ) : (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          {userData && userData.length > 0 ? (
  <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
    {userData.map((data, index) => {
      return (
        <TouchableOpacity onPress={() => handleMeditations(data.id)} key={index}>
          <View style={{ padding: 10 }}>
            <View style={{ backgroundColor: Colors.BUTTON, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: `${apiUrlImage}/${data?.image}` }} style={{ width: 60, height: 60, borderRadius: 20 }} />
              <Text style={{ fontFamily: 'appfont-medium', marginLeft: 20, color: Colors.WHITE }}>{data?.title} Meditation</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    })}
  </ScrollView>
) : (
  <Text>No meditation data available</Text>
)}

        </ScrollView>
      )}

    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    width: width,
    height: 200, // Adjust height as needed
    backgroundColor: Colors.SECONDARY,
  },
  image: {
    resizeMode: 'contain',
  },
  menuIconContainer: {
    padding: 10,
    borderRadius: 20,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MeditationScreen;
