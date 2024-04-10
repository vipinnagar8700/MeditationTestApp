import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity ,Alert} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Helper/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AddTests } from "../Api/Api";
import { apiUrlAddTests } from "../Api/ApiUrl";

const QuestionDepressionScreenSecond = ({ route }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  
  // Example image data
  const { userData,option } = route.params;
  // State to store userData
  console.log(option,"optionoptionoptionoptionoptionoption")
  const [userDataState, setUserDataState] = useState(userData);
console.log(userDataState,"userDataState")

  // UseEffect to update userDataState when route.params changes
  useEffect(() => {
    setUserDataState(userData);
  }, [userData]);

  const navigation = useNavigation(); // Get navigation object
const Opt = [{opt:selectedOption},{opt:option} ];
console.log(Opt,"OptOptOptOptOpt")
  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate('Menu'); // Navigate to the Login screen
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  const [Token, setToken] = useState(null);

  const handleOptionSelect = async (option1) => {
    setSelectedOption(option1);
    try {
      await addNewTestResult(Opt);
      navigation.navigate('Result', { userData: userData });
    } catch (error) {
      console.error("Error adding new test result:", error);
    }
  };
  console.log(Token,"TokenTokenTokenTokenTokenTokenToken")
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken !== null) {
         setToken(storedToken)
        }
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    };
    fetchToken();
  }, []);

  
  const addNewTestResult = async (Opt) => {
    try {
      console.log(Opt, "Optaaaaaaaaaaaa");
      const Token = await AsyncStorage.getItem('token');
      console.log(Token, "TokenToken");
  
      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Authorization", `Bearer ${Token}`);
      
      const formdata = new FormData();
      formdata.append("topic_id", userDataState[0]?.topic_id);
      userDataState.forEach((question, index) => {
        formdata.append(`question_id[${index}]`, question.id); // Assuming each question has an 'id' property
        formdata.append(`answer[${index}]`,Opt[index]?.opt);
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
      };
  
      const response = await fetch(`${apiUrlAddTests}`, requestOptions);
      const data = await response.json();
      console.log(data, "Result!");
      Alert.alert(data?.message)
      return data;
    } catch (error) {
      console.error("Error adding new test result:", error);
      throw error;
    }
  }
  

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuIconContainera} onPress={handleGoBack}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Image
            source={require("../../assets/Second.png")}
            style={{
              position: "absolute",
              bottom: 21,
              left: 130,
              right: 0,
              alignItems: "center",
              width: 120,
              height: "100%",
              resizeMode: "contain", // Adjust image size to fit container
            }}
          />
          <TouchableOpacity style={styles.buttonContainera}>
            <Text style={styles.buttonTexta}>2/10</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            margin: 20,
            backgroundColor: Colors.BUTTON,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            position: "absolute",
            top: 150,
            borderRadius: 10,
            width: '90%'
          }}
        >
          <Text style={{ fontFamily: "appfont-light", color: Colors.WHITE }}>
            {userData[1]?.question}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.card, selectedOption === userData[1]?.option1 && styles.selectedCard, { top: 40 }]}
          onPress={() => handleOptionSelect("option1")}
        >
          <Fontisto name={selectedOption === userData[1]?.option1 ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color={Colors.WHITE} style={{ margin: 10 }} />
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              {userData[1]?.option1}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, selectedOption === userData[1]?.option2 && styles.selectedCard, { top: 40 }]}
          onPress={() => handleOptionSelect("option2")}
        >
          <Fontisto name={selectedOption === userData[1]?.option2 ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color={Colors.WHITE} style={{ margin: 10 }} />
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              {userData[1]?.option2}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, selectedOption === userData[1]?.option3 && styles.selectedCard, { top: 40 }]}
          onPress={() => handleOptionSelect("option3")}
        >
          <Fontisto name={selectedOption === userData[1]?.option3 ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color={Colors.WHITE} style={{ margin: 10 }} />
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              {userData[1]?.option3}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, selectedOption === userData[1]?.option4 && styles.selectedCard, { top: 40 }]}
          onPress={() => handleOptionSelect("option4")}
        >
          <Fontisto name={selectedOption === userData[1]?.option4 ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color={Colors.WHITE} style={{ margin: 10 }} />
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              {userData[1]?.option4}
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    </>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontFamily: "appfont-light",
    fontSize: 16,
    color: "white",
    padding: 10,
    backgroundColor: Colors.BUTTON,
    borderRadius: 5,
  },
  buttonContainera: {
    top: 130,
    left: 10,
    right: 0,
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: Colors.SECONDARY,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
    borderRadius: 10,
  },
  selectedCard: {
    backgroundColor: Colors.BUTTON,
  },
  image: {
    width: 60,
    resizeMode: "contain",
  },
  textContainer: {
    margin: 10,
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
    fontFamily: "appfont-medium",
    fontSize: 16,
    color: "white",
    padding: 10,
  },
  imageContainer: {
    width: width,
    height: 200, // Adjust height as needed
    backgroundColor: Colors.PRIMARY,
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

export default QuestionDepressionScreenSecond;
