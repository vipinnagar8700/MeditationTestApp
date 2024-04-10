import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,Modal,Button,TextInput
} from "react-native";
import Colors from "../../Helper/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AuthContext  from '../Context/AuthContext';

const MYTest = () => {
  const navigation = useNavigation(); // Get navigation object
  const { userData } = useContext(AuthContext );
  const [Users, setUser] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [name, setName] = useState(userData?.name || '');
  const [about, setabout] = useState(userData?.about_me || '');
  const [description, setDescription] = useState(userData?.description || '');
  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate("Menu"); // Navigate to the Login screen
  };

  useEffect(()=>{
    setUser(userData)

  },[])

  const handleEditProfile = () => {
    setEditModalVisible(true);
  };

  const handleSaveProfile = () => {
    // Handle saving the edited profile here, e.g., calling an API
    console.log("Saving profile...");
    setEditModalVisible(false);
  };

  // Function to handle login navigation
  const handleComplete = () => {
    navigation.navigate("Setting"); // Navigate to the Login screen
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
      <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center" }} onPress={handleEditProfile}>
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
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
      </View>
      <View style={{ padding: 10, marginTop: 10 }}>
        <View
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 10,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../../assets/user.png")} />
          <Text
            style={{
              fontFamily: "appfont-medium",
              marginLeft: 20,
              color: Colors.WHITE,
            }}
          >
            Depression test
          </Text>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => {
          setEditModalVisible(!editModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.userContainer}>
        <Image
          source={require("../../assets/user.png")}
          style={styles.userImage}
        />
        <Text style={styles.menuTextaa}> {Users?.name || "User"}</Text>

      </View>
            <Text style={{fontFamily:'appfont-light'}}>About you</Text>
            <TextInput
              value={Users?.about_me}
              onChangeText={setabout}
              style={styles.input}
            />
            <Text style={{fontFamily:'appfont-light',marginVertical:5}}>Description</Text>
            <TextInput
              value={Users?.about_me}
              onChangeText={setDescription}
              style={styles.input}
            />
            <Button title="Save" onPress={handleSaveProfile} />
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    margin:20
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width:'100%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,fontFamily:'appfont-light'
  },
  input: {
    height: 40,
    borderColor: '#8A62E114',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',backgroundColor:"#8A62E114",fontFamily:'appfont-light',borderRadius:10
  },
});

export default MYTest;
