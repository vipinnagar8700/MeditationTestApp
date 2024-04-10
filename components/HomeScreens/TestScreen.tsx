import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Helper/Colors';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { GetAllTopics } from '../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TestScreen = () => {
  const navigation = useNavigation(); // Get navigation object

  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate('Menu'); // Navigate to the Login screen
  };

  const handleSingleTests = (data) => {
    navigation.navigate('DepressionTest', { testData: data });
  };


  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken !== null) {
          console.log(storedToken, "storedToken")
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
      const userDataResponse = await GetAllTopics(token);
      setUserData(userDataResponse?.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  console.log(userData, "Topica")


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View style={{ padding: 20, flexDirection: "row" }}>
          <View>
            <Text style={{ fontFamily: 'appfont', fontSize: 15, color: Colors.WHITE }}>Budassi methodology</Text>
            <Text style={{ fontFamily: 'appfont-medium', fontSize: 18, color: Colors.WHITE }}>Personality self-esteem{"\n"}test</Text>
          </View>
          <Image source={require("../../assets/F.png")} />
        </View>
      </View>
      <View style={{ backgroundColor: Colors.WHITE, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 5 }}>
        <View>
          <Text style={{ fontFamily: 'appfont-medium', fontSize: 18 }}>
            Tests online
          </Text>
          <Text style={{ fontFamily: 'appfont-light' }}>
            Psychological, educational
          </Text>
        </View>
        <Octicons name="filter" size={24} color="black" style={{ padding: 10 }} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        {
          userData && userData?.map((data, index) => {
            return (
              <TouchableOpacity style={{ padding: 10 }} onPress={() => handleSingleTests(data)} key={index}>
                <View style={{ backgroundColor: "#E6F7EB", padding: 20, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../../assets/user.png')} />
                  <Text style={{ fontFamily: 'appfont-medium', marginLeft: 20, color: Colors.BLACK }}>{data?.title} Test</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }







      </ScrollView>

    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
  },
  imageContainer: {
    width: width,
    height: 200, // Adjust height as needed
    backgroundColor: Colors.PRIMARY,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  menuIconContainer: {
    padding: 10,
    borderRadius: 20,
  },
});

export default TestScreen;
