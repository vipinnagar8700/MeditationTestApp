import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Helper/Colors";
import { useNavigation } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';

const QuestionDepressionScreen = ({route}) => {
  // Example image data
  const { userData } = route.params;
  const navigation = useNavigation(); // Get navigation object

  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate('Menu'); // Navigate to the Login screen
  };
 

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    navigation.navigate('QuestionDepressionSecond',{userData:userData,option:option});
  };



  return (
    <>
      <View style={styles.container}>
              <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
                <Ionicons name="menu" size={24} color="white" />
              </TouchableOpacity>
             
              <View style={{alignItems: "center",justifyContent:'center',}}> 
              <Image
                source={require("../../assets/user1.png")}
                style={{
                  width: 120,
                  resizeMode: "contain", // Adjust image size to fit container
                }}
              />
              </View>
              <TouchableOpacity >
                <Text style={styles.buttonTexta}>1/10</Text>
              </TouchableOpacity>
        <View
          style={{
            margin: 20,
            backgroundColor:  "#8FB1C7",
            padding: 20,
            borderRadius: 10,
            width:'90%'
          }}
        >
          <Text style={{ fontFamily: "appfont-light", color: Colors.WHITE }}>
         {userData[0]?.question}
          </Text>
        </View>
      
              <TouchableOpacity
              style={[styles.card, selectedOption === userData[0]?.option1 && styles.selectedCard]}
              onPress={() => handleOptionSelect("option1")}
            >
              <Fontisto name={selectedOption === userData[0]?.option1 ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color={Colors.WHITE}  style={{margin:10}}/>
              <View style={styles.textContainer}>
                <Text style={styles.description}>
              {userData[0]?.option1}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.card, selectedOption === userData[0]?.option2 && styles.selectedCard]}
              onPress={() => handleOptionSelect("option2")}
            >
              <Fontisto name={selectedOption === userData[0]?.option2 ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color={Colors.WHITE}  style={{margin:10}}/>
              <View style={styles.textContainer}>
                <Text style={styles.description}>
              {userData[0]?.option2}
                </Text>
              </View>
            </TouchableOpacity>
      
            <TouchableOpacity
              style={[styles.card, selectedOption === userData[0]?.option3 && styles.selectedCard]}
              onPress={() => handleOptionSelect("option3")}
            >
              <Fontisto name={selectedOption === userData[0]?.option3 ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color={Colors.WHITE}  style={{margin:10}}/>
              <View style={styles.textContainer}>
                <Text style={styles.description}>
              {userData[0]?.option3}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.card, selectedOption === userData[0]?.option4 && styles.selectedCard]}
              onPress={() => handleOptionSelect("option4")}
            >
              <Fontisto name={selectedOption === userData[0]?.option4 ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color={Colors.WHITE}  style={{margin:10}}/>
              <View style={styles.textContainer}>
                <Text style={styles.description}>
              {userData[0]?.option4}
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
    flex: 1,backgroundColor: "#8FB1C7",
  },
  buttonText: {
    fontFamily: "appfont-light",
    fontSize: 16,
    color: "white",
    padding: 10,
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#8FB1C7",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
    borderRadius: 10,
  },
  selectedCard: {
    backgroundColor: "transparent",
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
  
  menuIconContainer: {
    position: "absolute",
    top: 10,
    left: 5,
    padding: 10,
    borderRadius: 20,
  },
  
});

export default QuestionDepressionScreen;
