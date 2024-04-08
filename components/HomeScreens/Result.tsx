import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Helper/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const ResultScreen = () => {
 

  
  const navigation = useNavigation(); // Get navigation object

  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate('Menu'); // Navigate to the Login screen
  };
  const handleGoBack = () => {
      navigation.goBack();
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
                <Text style={styles.buttonTexta}>Your results</Text>
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
            top: 180,
            borderRadius: 10,width:'88%'
          }}
        >
          <Text style={{ fontFamily: "appfont-light", color: Colors.WHITE }}>
            High level of introversion: Your answers indicate that you have a
            high level of introversion. You prefer to spend time alone or in
            small groups, tend to think deeply, and prefer deep conversations
            with a small circle of close people.
          </Text>
        </View>

        <View style={[styles.card,{marginTop:105}]}>
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
        <View style={[styles.card, { backgroundColor: Colors.BUTTON }]}>
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
            backgroundColor: Colors.BUTTON,
            margin: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontFamily: "appfont-medium", color: Colors.WHITE }}>
            Save result
          </Text>
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
  buttonContainera: {
    top: 150,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: Colors.SECONDARY,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 60,
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
    padding: 10,
  },
  imageContainer: {
    width: width,
    height: 250, // Adjust height as needed
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

export default ResultScreen;
