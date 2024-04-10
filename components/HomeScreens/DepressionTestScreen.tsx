import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Helper/Colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetAllTopicsTests } from '../Api/Api';

const DepressionTestScreen = ({ route }) => {
  const { testData } = route.params;
  // Use testData in your component

  const navigation = useNavigation(); // Get navigation object

  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate('Menu'); // Navigate to the Login screen
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleStarttest = (userData) => {
    navigation.navigate('QuestionDepression', { userData: userData });
  };

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken !== null) {
          console.log(storedToken, "storedToken")
          fetchUserData(storedToken,testData);
        }
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    };

    fetchToken();
  }, [testData]);

  const fetchUserData = async (token, testData) => {
    try {
      console.log(token, testData,"token, testData")
      const userDataResponse = await GetAllTopicsTests(token, testData);
      setUserData(userDataResponse?.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  console.log(userData, "TopicaTests1111")

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuIconContainera} onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../assets/user1.png')} style={{
            alignItems: 'center', width: 120,
            resizeMode: 'contain', // Adjust image size to fit container
          }} />
          <TouchableOpacity style={styles.buttonContainera}>
            <Text style={styles.buttonTexta}>{testData?.title} Test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => handleStarttest(userData)}>
            <Text style={styles.buttonText}>Start test</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ margin: 20, backgroundColor: Colors.SECONDARY, flexDirection: 'row', justifyContent: 'space-between', padding: 20, position: 'absolute', top: 250, borderRadius: 10 }}>
        <Text style={{ fontFamily: 'appfont-light', color: Colors.WHITE }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla assumenda ipsum sunt quidem veniam possimus quas doloremque quod ducimus provident tempore fuga quis iure et quae sint, laborum praesentium?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea unde facilis exercitationem nobis, possimus necessitatibus repellat id consequatur dicta nostrum sapiente aliquam illo ad laboriosam, nam velit quam soluta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, assumenda dicta? Autem eaque, aperiam eveniet, adipisci, magni quos dolore nesciunt hic placeat similique doloribus tenetur mollitia corrupti id? Excepturi, voluptas.
        </Text>

      </View>

    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    alignItems: 'center',

  },
  buttonText: {
    fontFamily: 'appfont-light',
    fontSize: 16,
    color: 'white',
    padding: 10, backgroundColor: Colors.BUTTON, borderRadius: 5
  },
  buttonContainera: {
    alignItems: 'center',

  },
  buttonTexta: {
    fontFamily: 'appfont-light',
    fontSize: 16,
    color: 'white',
    padding: 10,
  },
  imageContainer: {
    width: width,
    height: 380, // Adjust height as needed
    backgroundColor: Colors.PRIMARY
  },
  menuIconContainer: {
    padding: 10,
    borderRadius: 20,
  }, menuIconContainera: {
    position: 'absolute',
    top: 50,
    left: 15,
    padding: 3,
    borderRadius: 20, backgroundColor: Colors.WHITE
  },
});

export default DepressionTestScreen;
