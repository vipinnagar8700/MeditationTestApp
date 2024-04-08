import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Helper/Colors';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const TestScreen = () => {
  const navigation = useNavigation(); // Get navigation object

  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate('Menu'); // Navigate to the Login screen
  };
  const handleSingleTests = () => {
    navigation.navigate('DepressionTest'); // Navigate to the Login screen
  };
  return (
    <View style={styles.container}>
       <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View style={{ padding: 20, flexDirection: "row" }}>
          <View>
            <Text style={{fontFamily:'appfont',fontSize:15,color:Colors.WHITE}}>Budassi methodology</Text>
            <Text style={{fontFamily:'appfont-medium',fontSize:18,color:Colors.WHITE}}>Personality self-esteem{"\n"}test</Text>
          </View>
          <Image source={require("../../assets/F.png")} />
        </View>
      </View>
      <View style={{backgroundColor:Colors.WHITE,width:'100%',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:5}}>
        <View>
        <Text style={{fontFamily:'appfont-medium',fontSize:18}}>
        Tests online
        </Text>
        <Text style={{fontFamily:'appfont-light'}}>
        Psychological, educational
        </Text>
        </View>
        <Octicons name="filter" size={24} color="black" style={{padding:10}} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={{padding:10}} onPress={handleSingleTests}>
        <View style={{backgroundColor:"#E6F7EB",padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.BLACK}}>Emotional state assessment</Text>
        </View>
      </TouchableOpacity>
      <View style={{padding:10}}>
        <View style={{backgroundColor:"#E6F7EB",padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.BLACK}}>Are you depressed?</Text>
        </View>
      </View>
      <View style={{padding:10}}>
        <View style={{backgroundColor:"#E6F7EB",padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20}}>Emotional state assessment</Text>
        </View>
      </View>
      <View style={{padding:10}}>
        <View style={{backgroundColor:"#E6F7EB",padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.BLACK}}>Conscious Breathing</Text>
        </View>
      </View>
      <View style={{padding:10}}>
        <View style={{backgroundColor:"#E6F7EB",padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.BLACK}}>Are you depressed?</Text>
        </View>
      </View>
      <View style={{padding:10}}>
        <View style={{backgroundColor:"#E6F7EB",padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20}}>Emotional state assessment</Text>
        </View>
      </View>
      <View style={{padding:10}}>
        <View style={{backgroundColor:"#E6F7EB",padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.BLACK}}>Conscious Breathing</Text>
        </View>
      </View>
     
      <View style={{padding:10}}>
        <View style={{backgroundColor:"#E6F7EB",padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.BLACK}}>Are you depressed?</Text>
        </View>
      </View>
      <View style={{padding:10}}>
        <View style={{backgroundColor:"#E6F7EB",padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20}}>Emotional state assessment</Text>
        </View>
      </View>
      <View style={{padding:10,marginBottom:150}}>
        <View style={{backgroundColor:"#E6F7EB",padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.BLACK}}>Conscious Breathing</Text>
        </View>
      </View>
     
     
    
    
      </ScrollView>
   
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
  },
  imageContainer: {
    width: width,
    height: 200, // Adjust height as needed
    backgroundColor: Colors.PRIMARY,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  menuIconContainer: {
    padding: 10,
    borderRadius: 20,
  },
});

export default TestScreen;
