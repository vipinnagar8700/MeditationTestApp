import React, { useEffect,useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Helper/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetReslut } from "../Api/Api";

const ResultScreen = ({route}) => {
 
  const { userData } = route.params;
  const [AB,setAB]=useState(null)
  const navigation = useNavigation(); // Get navigation object
  const [userDataa, setUserDataa] = useState(null);
  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate('Menu'); // Navigate to the Login screen
  };

  const handleGoBack = () => {
      navigation.goBack();
    };

    useEffect(() => {
      const fetchToken = async () => {
        try {
          const storedToken = await AsyncStorage.getItem('token');
          if (storedToken !== null) {
           fetchUserData(storedToken,AB); 
           setAB(userData)
          }
        } catch (error) {
          console.error('Error retrieving token:', error);
        }
      };
      fetchToken();
    }, [userData,AB]);
console.log(AB,"AB")
    const fetchUserData = async (token,AB) => {
      try {
        console.log(token,AB,"token,userData")
        const userDataResponse = await GetReslut(token,AB);
        console.log(userDataResponse,"mkdhwbhs")
        setUserDataa(userDataResponse);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  return (
    <>
      <View style={styles.container}>
              <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
                <Ionicons name="menu" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuIconContainera} onPress={handleGoBack}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image
                source={require("../../assets/user1.png")}
                style={{
                  resizeMode: "contain", // Adjust image size to fit container
                }}
              />
              </View>
          
              <TouchableOpacity style={styles.buttonContainera}>
                <Text style={styles.buttonTexta}>Ваши результаты</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContaineraa}>
                <Text style={styles.buttonTextaa}>Correct  {userDataa?.correct_count}, Incorrect {userDataa?.incorrect_count}</Text>
              </TouchableOpacity>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 10
          }}
        >
          <Text style={{ fontFamily: "appfont-light", color: Colors.WHITE }}>
          Глубокая депрессия. У вас могут периодически появляться галлюцинации, а временами посещать мысли о самоубийстве. Не исключено наличие психических расстройств. Данная стадия депрессии обязательно должна лечиться под присмотром специалистов, причем нередко в условиях стационара. Однако вот вам несколько советов:
          </Text>
        </View>

        <View style={[styles.card]}>
          <Image
            source={require("../../assets/Man.png")}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Healthy lifestyle</Text>
            <Text style={styles.description}>
              Regular exercise, a healthy diet {"\n"} and adequate sleep can
              have{"\n"} a positive impact on your mood {"\n"}and overall
              well-being.
            </Text>
          </View>
        </View>
        <View style={[styles.card]}>
          <Image
            source={require("../../assets/Man.png")}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Setting realistic goals</Text>
            <Text style={styles.description}>
              Gradually set yourself small,{"\n"} achievable goals and reward{" "}
              {"\n"} yourself for achieving them.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../../assets/Man.png")}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Healthy lifestyle</Text>
            <Text style={styles.description}>
              Learn relaxation techniques and {"\n"} stress management
              strategies,{"\n"} such as meditation, yoga, or{"\n"} breathing
              exercises.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#D8644BE3",
            margin: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontFamily: "appfont-medium", color: Colors.WHITE }}>
          Сохранить результат
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor:"#8FB1C7"
  },
  buttonContainera: {
    alignItems: "center",
  },
  buttonContaineraa: {
    alignItems: "center",
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding:5,
    borderRadius: 10,
  },
  image: {
    width: 80,
    resizeMode: "contain",
  },
  textContainer: {
    marginLeft: 20,
  },
  title: {
    fontFamily: "appfont-medium",
    color: Colors.WHITE,
  },
  description: {
    fontFamily: "appfont-light",
    color: Colors.WHITE,
    flexWrap: "wrap",
  },
  buttonTexta: {
    fontFamily: "appfont-light",
    fontSize: 16,
    color: "white",
    padding: 2,
  },
  buttonTextaa: {
    fontFamily: "appfont-light",
    fontSize: 16,
    color: "white",
    padding: 2,
  },
  menuIconContainer: {
    position: "absolute",
    top: 10,
    left: 5,
    padding: 10,
    borderRadius: 20,
  },
  menuIconContainera: {
    position: "absolute",
    top: 50,
    left: 15,
    padding: 3,
    borderRadius: 20,
    backgroundColor: Colors.WHITE,
  },
});

export default ResultScreen;
