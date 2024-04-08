import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Colors from "../../Helper/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import AuthContext  from '../Context/AuthContext';

const ProfilTestScreen = () => {
  const navigation = useNavigation(); // Get navigation object
  const { userData } = useContext(AuthContext );
  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate("Menu"); // Navigate to the Login screen
  };
  const [Users,setUser]= useState(null)
  useEffect(()=>{
    console.log(userData,"userData121")
    setUser(userData)

  },[])
 
  const handleComplete = () => {
    navigation.navigate("Setting-myProfile"); // Navigate to the Login screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
        <Ionicons name="menu" size={24} color={Colors.BLACK} />
      </TouchableOpacity>
      <View style={styles.userContainer}>
      <Text style={styles.menuTextaa}>Profile / {Users?.name || "User"}</Text>
        <Image
          source={require("../../assets/user.png")}
          style={styles.userImage}
        />
      </View>

      <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center" }} >
        <Text
          style={{
            padding: 10,
            backgroundColor: Colors.PRIMARY,
            color: Colors.WHITE,
            fontFamily: "appfont-medium",
            borderRadius: 20,
            paddingHorizontal: 30,
          }}
        >
          Edit profile
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 20,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            padding: 10,
            backgroundColor: Colors.SECONDARY,
            color: Colors.WHITE,
            fontFamily: "appfont-medium",
            borderRadius: 20,
            paddingHorizontal: 50,
          }}
        >
          I
        </Text>
        <Text
          style={{
            padding: 10,
            backgroundColor: Colors.SECONDARY,
            color: Colors.WHITE,
            fontFamily: "appfont-medium",
            borderRadius: 20,
            paddingHorizontal: 30,
          }}
        >
          My tests
        </Text>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
        onPress={handleComplete}
      >
        <Text
          style={{
            padding: 10,
            backgroundColor: Colors.BUTTON,
            color: Colors.WHITE,
            fontFamily: "appfont-medium",
            borderRadius: 20,
            paddingHorizontal: 30,
          }}
        >
          Completed 1
        </Text>
      </TouchableOpacity>
      <View style={{ padding: 10, marginTop: 10 }}>
        <Text style={{fontFamily:'appfont-medium'}}>Calendar</Text>
        <TextInput style={{padding:10,borderColor:"#F6F2FD",borderWidth:1,borderRadius:10,marginVertical:10,backgroundColor:"#F6F2FD"}}  multiline={true}  placeholder="Daily calendar for your emotions"
      numberOfLines={2}  />
       <Text style={{fontFamily:'appfont-medium'}}>How are you?</Text>
        <TextInput style={{padding:10,borderColor:"#F6F2FD",borderWidth:1,borderRadius:10,marginVertical:10,backgroundColor:"#F6F2FD"}}  multiline={true}  placeholder="Choose your mood.."
      numberOfLines={2}  />
       <Text style={{fontFamily:'appfont-medium'}}>Statistics and graphs</Text>
        <TextInput style={{padding:10,borderColor:"#F6F2FD",borderWidth:1,borderRadius:10,marginVertical:10,backgroundColor:"#F6F2FD"}}  multiline={true}  placeholder="To visualize data about the user's psychological state"
      numberOfLines={2}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    backgroundColor: Colors.WHITE,
  },
  userContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
  },
  menuItem: {
    paddingHorizontal: 20,
    width: "100%",
    paddingVertical: 15,
  },
  menuIconContainer: {
    padding: 20,
  },
  menuText: {
    fontSize: 18,
    fontFamily: "appfont-light",
    color: Colors.BLACK,
  },
  menuTexta: {
    fontSize: 18,
    fontFamily: "appfont-medium",
    marginTop: 10,
    color: Colors.WHITE,
  },
  menuTextaa: {
    fontSize: 14,
    fontFamily: "appfont-medium",
    color: Colors.BLACK,
    margin: 15,
  },
});

export default ProfilTestScreen;
