import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image  } from 'react-native';
import Colors from '../../Helper/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import { RegisterApi } from '../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Registeration = () => {
  const navigation = useNavigation(); // Get navigation object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  // Function to handle login navigation
  const handleLogin = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };
  // Function to handle login navigation
  const Register = async() => {
    try {
      const result = await RegisterApi(email, password);
      console.log(result);

      if (result.status === 'failed') {
        setMessage(result.errors.email[0] || 'Registeration Failed!'); 
      } else if (result.status === 'success' && result.token) {
        await AsyncStorage.setItem('token', result.token); // Store token in AsyncStorage
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>mindtrack</Text>
        <Image  source={require('../../assets/World.png')} style={{width:30,height:30}}/>
      </View>
      <View style={styles.formContainer}>
      <Text style={styles.headerTexta}> рЕГИСТРАЦИЯ</Text>

        <TextInput
          style={styles.input}
          placeholder="e-mail"
          keyboardType="email-address"
          placeholderTextColor={Colors.WHITE}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry={true}
          placeholderTextColor={Colors.WHITE}
          value={password}
          onChangeText={setPassword}
        />
       {message && <Text style={styles.message}>{message}</Text>}
        <TouchableOpacity style={styles.button} onPress={Register}>
          <Text style={styles.buttonText}> рЕГИСТРАЦИЯ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
        <Text style={{fontFamily:'appfont-light',marginTop:5,color:Colors.WHITE,fontSize:11}}>Вход </Text>
        </TouchableOpacity>
        <Text style={{fontFamily:'appfont-light',marginTop:15,textAlign:'center',color:Colors.WHITE}}>Регистрируясь, вы соглашаетесь с пользовательским соглашением и даете согласие на обработку персональных данных </Text>
      </View>

      
      <View style={styles.iconContainer}>
        <View style={styles.buttonTexta}>
      <FontAwesome5 name="whatsapp" size={24} color="#40C351" />
      <Entypo name="facebook-with-circle" size={24} color="#059CE5" />
      <FontAwesome name="instagram" size={24} color="#D61A5F" />
      <Feather name="twitter" size={24} color="#059CE5" />
      <FontAwesome5 name="telegram" size={24} color="#059CE5" />
      </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor:Colors.PRIMARY,width:'100%',padding:5,flexDirection:'row',justifyContent:'center',gap:10
  },
  headerText: {
    fontSize: 24,
    fontFamily:'appfont-light' ,
    textAlign: 'center',color:Colors.BLACK
  },
  headerTexta: {
    fontSize: 24,
    fontFamily:'appfont-medium' ,
    textAlign: 'center',color:Colors.BLACK,marginTop:70
  },
  formContainer: {marginTop:70,
    alignItems: 'center',
    width: '80%',paddingTop:10,
    backgroundColor:Colors.PRIMARY,borderRadius:10,paddingBottom:30,paddingHorizontal:20  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#8FB2C1",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor:"#8FB2C1",fontFamily:'appfont-light',textAlign:'center'
  },
  button: {
    backgroundColor: Colors.SECONDARY,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.BLACK,
    fontSize: 16,
    textAlign: 'center',
    fontFamily:'appfont-medium'
  },message: {
    fontFamily: 'appfont-light',
    color: 'red',
    fontSize:12
  },
  buttonTexta: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap:30,marginTop:100
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',flex:1,borderBottomColor:Colors.BLACK,borderBottomWidth:1,marginBottom:50
  },
});

export default Registeration;
