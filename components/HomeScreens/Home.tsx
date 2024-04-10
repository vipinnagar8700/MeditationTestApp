import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView, FlatList,ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Helper/Colors";
import { useNavigation } from '@react-navigation/native';
import { GetMeditation, GetMeditationPopular } from "../Api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiUrlImage } from "../Api/ApiUrl";

const Home = () => {

  const navigation = useNavigation(); // Get navigation object
  const images = [
    require("../../assets/A.png"),
    require("../../assets/B.png"),
    require("../../assets/C.png"),
    require("../../assets/D.png"),
    // Add more images here as needed
  ];

  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate('Menu'); // Navigate to the Login screen
  };
  const [loading, setLoading] = useState(true); // State variable to track loading state

  // Function to handle login navigation
  
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
      const userDataResponse = await GetMeditationPopular(token);
      setUserData(userDataResponse?.data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  console.log(userData, "Meditations")
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
          <View style={{ width: Dimensions.get("window").width, height: 1 }}>
            <Image
              source={item}
              style={{
                resizeMode: "cover",
              }}
            />
          </View>
        )}
      />

      <View
        style={{
          backgroundColor: "#95CDE5",
          width: "98%",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          margin: 3, borderRadius: 10
        }}
      >
        <View>
          <Text style={{ fontFamily: "appfont-light", color: Colors.WHITE }}>Рекомендуемые медитации</Text>
          <Text style={{ fontFamily: "appfont-medium", fontSize: 15, color: Colors.WHITE }}>
            Прозрение, концентрация,{"\n"}визуализация
          </Text>
        </View>
        <Image source={require('../../assets/G.png')} style={{ width: 100 }} />
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
        <Text style={{ fontFamily: "appfont-medium", fontSize: 18 }}>Популярные</Text>
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

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  menuIconContainer: {
    padding: 10,
    borderRadius: 20,
  },loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
