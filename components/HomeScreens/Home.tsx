import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Helper/Colors";
import { useNavigation } from '@react-navigation/native'; 

const Home = () => {

  const navigation = useNavigation(); // Get navigation object

  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate('Menu'); // Navigate to the Login screen
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View style={{ padding: 20, flexDirection: "row" }}>
          <View>
            <Text style={{fontFamily:'appfont',fontSize:15}}>Budassi methodology</Text>
            <Text style={{fontFamily:'appfont-medium',fontSize:18}}>Personality self-esteem{"\n"}test</Text>
          </View>
          <Image source={require("../../assets/F.png")} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.BUTTON,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <View>
          <Text style={{ fontFamily: "appfont-light" }}>Recommended Meditations</Text>
          <Text style={{ fontFamily: "appfont-medium", fontSize: 18 }}>
            Insight, concentration, {"\n"}visualization
          </Text>
        </View>
       <Image source={require('../../assets/G.png')} style={{width:100}}/>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
        <Text style={{ fontFamily: "appfont-medium",fontSize:18 }}>Popular</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>

        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#FCEBE9",
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/user.png")} />
            <Text style={{ fontFamily: "appfont-medium", marginLeft: 20 }}>
              Emotional state assessment
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    width: width,
    height: 200, // Adjust height as needed
    backgroundColor: Colors.PRIMARY,
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  menuIconContainer: {
    padding: 10,
    borderRadius: 20,
  },
});

export default Home;
