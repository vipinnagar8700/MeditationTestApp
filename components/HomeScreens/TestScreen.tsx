import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Helper/Colors';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { GetAllTopics } from '../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiUrlTopicImage } from '../Api/ApiUrl';

const TestScreen = () => {
  const navigation = useNavigation(); // Get navigation object
  const [loading, setLoading] = useState(true);
  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate('Menu'); // Navigate to the Login screen
  };

  const handleSingleTests = (data) => {
    navigation.navigate('DepressionTest', { testData: data });
  };

  const images = [
    require("../../assets/A.png"),
    require("../../assets/B.png"),
    require("../../assets/C.png"),
    require("../../assets/D.png"),
    // Add more images here as needed
  ];
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken !== null) {
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
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  console.log(userData, "Topica")
  return (
    <View style={styles.container}>
      <View >
        <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
          <Ionicons name="menu" size={24} color={Colors.SECONDARY} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ width: Dimensions.get("window").width, height: 280 }}>
            <Image
              source={item}
              style={{
                resizeMode: "cover",
              }}
            />
          </View>
        )}
      />
      <View style={{ backgroundColor: Colors.WHITE, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 5 }}>
        <View>
          <Text style={{ fontFamily: 'appfont-medium', fontSize: 18 }}>
            Тесты онлайн
          </Text>
          <Text style={{ fontFamily: 'appfont-light' }}>
            Психологичекие, образовательные
          </Text>
        </View>
        <Octicons name="filter" size={24} color="black" style={{ padding: 10 }} />
      </View>
      {loading ? ( // Show loading indicator while data is loading
        <View style={[styles.container, styles.loadingContainer]}>
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
        </View>
      ) : (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          {
            userData && userData?.map((data, index) => {
              console.log(`${apiUrlTopicImage}/${data?.image}`)
              return (
                <TouchableOpacity style={{ padding: 10 }} onPress={() => handleSingleTests(data)} key={index}>
                  <View style={{
                    backgroundColor: "#DCDBDB", padding: 20, borderRadius: 10, flexDirection: 'row', alignItems: 'center', elevation: 10,
                  }}>
                    <Image source={{uri:`${apiUrlTopicImage}/${data?.image}`}} style={{width:60 ,height:60,borderRadius:10}} />
                    <Text style={{ fontFamily: 'appfont-medium', marginLeft: 20, color: Colors.BLACK }}>{data?.title} Test</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
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
    backgroundColor: Colors.PRIMARY,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  menuIconContainer: {
    padding: 10,
    borderRadius: 20,
  }, loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TestScreen;
