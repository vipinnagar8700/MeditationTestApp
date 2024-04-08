import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Helper/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';

const QuestionDepressionScreen = () => {
  // Example image data
 
  const navigation = useNavigation(); // Get navigation object

  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate('Menu'); // Navigate to the Login screen
  };
  const handleGoBack = () => {
      navigation.goBack();
    };
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    
    navigation.navigate('QuestionDepressionSecond');
  };

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
                source={require("../../assets/user1.png")}
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
                <Text style={styles.buttonTexta}>1/10</Text>
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
            width:'90%'
          }}
        >
          <Text style={{ fontFamily: "appfont-light", color: Colors.WHITE }}>
          I like to spend time alone.
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.card, selectedOption === 'yes' && styles.selectedCard,{top:40}]}
          onPress={() => handleOptionSelect('yes')}
        >
          <Fontisto name={selectedOption === 'yes' ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color={Colors.WHITE}  style={{margin:10}}/>
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              Yes
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, selectedOption === 'probablyYes' && styles.selectedCard,{top:40}]}
          onPress={() => handleOptionSelect('probablyYes')}
        >
          <Fontisto name={selectedOption === 'probablyYes' ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color={Colors.WHITE}  style={{margin:10}}/>
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              Probably Yes
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, selectedOption === 'difficultToAnswer' && styles.selectedCard,{top:40}]}
          onPress={() => handleOptionSelect('difficultToAnswer')}
        >
          <Fontisto name={selectedOption === 'difficultToAnswer' ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color={Colors.WHITE}  style={{margin:10}}/>
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              Difficult to Answer
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, selectedOption === 'mostLikelyNo' && styles.selectedCard,{top:40}]}
          onPress={() => handleOptionSelect('mostLikelyNo')}
        >
          <Fontisto name={selectedOption === 'mostLikelyNo' ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color={Colors.WHITE}  style={{margin:10}}/>
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              Most Likely No
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, selectedOption === 'no' && styles.selectedCard,{top:40}]}
          onPress={() => handleOptionSelect('no')}
        >
          <Fontisto name={selectedOption === 'no' ? 'radio-btn-active' : 'radio-btn-passive'} size={24} color={Colors.WHITE}  style={{margin:10}}/>
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              No
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

export default QuestionDepressionScreen;
