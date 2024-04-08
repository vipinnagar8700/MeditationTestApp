import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Helper/Colors';
import { useNavigation } from '@react-navigation/native';

const MeditationScreen = () => {
  const navigation = useNavigation(); // Get navigation object

  // Function to handle login navigation
  const handleMenu = () => {
    navigation.navigate('Menu'); // Navigate to the Login screen
  };

  // Function to handle login navigation
  const handleMeditations = () => {
    navigation.navigate('MeditationVideo'); // Navigate to the Login screen
  };



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View style={{ padding: 20, flexDirection: "row",justifyContent:'space-around' }}>
          <View>
            <Text style={{fontFamily:'appfont',fontSize:15,color:Colors.WHITE}}>Yoga Nidra</Text>
            <Text style={{fontFamily:'appfont-medium',fontSize:22,color:Colors.WHITE}}>Yogic sleep</Text>
          </View>
          <Image source={require("../../assets/H.png")} style={{width:200,height:120,resizeMode:'contain'}}/>
        </View>
      </View>
      <View style={{backgroundColor:Colors.WHITE,width:'100%',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:5}}>
        <View>
        <Text style={{fontFamily:'appfont-medium',fontSize:18}}>
        Meditation
        </Text>
        <Text style={{fontFamily:'appfont-light'}}>
        Psychological, educational
        </Text>
        </View>
      </View>
      
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={handleMeditations}>
        <View style={{padding:10}}>
        <View style={{backgroundColor:Colors.BUTTON,padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.WHITE}}>Conscious Breathing</Text>
        </View>
      </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMeditations}>
      <View style={{padding:10}}>
        <View style={{backgroundColor:Colors.PRIMARY,padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.WHITE}}>Transcendental Meditation</Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMeditations}>
      <View style={{padding:10}}>
        <View style={{backgroundColor:Colors.SECONDARY,padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20}}>Emotional state assessment</Text>
        </View>
      </View>
     
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMeditations}>
        <View style={{padding:10}}>
        <View style={{backgroundColor:Colors.BUTTON,padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.WHITE}}>Conscious Breathing</Text>
        </View>
      </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMeditations}>
      <View style={{padding:10}}>
        <View style={{backgroundColor:Colors.PRIMARY,padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.WHITE}}>Transcendental Meditation</Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMeditations}>
      <View style={{padding:10}}>
        <View style={{backgroundColor:Colors.SECONDARY,padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20}}>Emotional state assessment</Text>
        </View>
      </View>
     
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMeditations}>
        <View style={{padding:10}}>
        <View style={{backgroundColor:Colors.BUTTON,padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.WHITE}}>Conscious Breathing</Text>
        </View>
      </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMeditations}>
      <View style={{padding:10}}>
        <View style={{backgroundColor:Colors.PRIMARY,padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.WHITE}}>Transcendental Meditation</Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMeditations}>
      <View style={{padding:10}}>
        <View style={{backgroundColor:Colors.SECONDARY,padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20}}>Emotional state assessment</Text>
        </View>
      </View>
     
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMeditations}>
        <View style={{padding:10}}>
        <View style={{backgroundColor:Colors.BUTTON,padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.WHITE}}>Conscious Breathing</Text>
        </View>
      </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMeditations}>
      <View style={{padding:10}}>
        <View style={{backgroundColor:Colors.PRIMARY,padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20,color:Colors.WHITE}}>Transcendental Meditation</Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMeditations}>
      <View style={{padding:10,marginBottom:150}}>
        <View style={{backgroundColor:Colors.SECONDARY,padding:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/user.png')}/>
            <Text style={{fontFamily:'appfont-medium',marginLeft:20}}>Emotional state assessment</Text>
        </View>
      </View>
     
      </TouchableOpacity>
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

export default MeditationScreen;
