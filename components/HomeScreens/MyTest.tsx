import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput,Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../Helper/Colors";
import { TabView, TabBar } from 'react-native-tab-view'; // Import TabView components
import AuthContext from '../Context/AuthContext';
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AddFeedback, GetFeedback, GetReslut } from "../Api/Api";
import { apiUrlImage, apiUrlTopic, apiUrlTopicImage, apiUrlUserImage } from "../Api/ApiUrl";


const MYTest = () => {
  const [token,setToken]= useState(null)
  const navigation = useNavigation(); // Get navigation object
  const { userData } = useContext(AuthContext);
  const [Users, setUser] = useState(null);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'tab1', title: 'I' },
    { key: 'tab2', title: 'My tests' },
  ]);

  useEffect(() => {
    setUser(userData);
  }, []);

  const handleMenu = () => {
    navigation.navigate("Menu"); // Navigate to the Menu screen
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleA, setModalVisibleA] = useState(false);
  const [modalVisibleB, setModalVisibleB] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const toggleModalA = () => {
    setModalVisibleA(!modalVisibleA);
  };

  const toggleModalB = () => {
    setModalVisibleB(!modalVisibleB);
  };

  const day = [
    { id: 1, name: "Monday", backgroundColor: Colors.PRIMARY },
    { id: 2, name: "Tuesday", backgroundColor: Colors.BUTTON },
    { id: 3, name: "Wednesday", backgroundColor: Colors.SECONDARY },
    { id: 4, name: "Thursday", backgroundColor: Colors.PRIMARY },
    { id: 5, name: "Friday", backgroundColor: Colors.BUTTON },
    { id: 6, name: "Saturday", backgroundColor: Colors.SECONDARY },
    { id: 7, name: "Sunday", backgroundColor: Colors.PRIMARY },
  ];
  const [userDataa, setUserDataa] = useState(null);

  const [selectedEmoji, setSelectedEmoji] = useState('');
console.log(selectedEmoji,"selectedEmoji")
  const handleEmojiPress = async(emoji) => {
    setSelectedEmoji(emoji);
    const data = await AddFeedback(token,emoji);
    if(data){
      console.log(data,"smejnj")
      Alert.alert(data?.message)
      toggleModalA()
    }
    // You can perform any action here based on the selected emoji, like submitting feedback
  };

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken !== null) {
          console.log(storedToken, "storedToken")
          fetchUserData(storedToken);
          fetchUserDataFeed(storedToken);
          setToken(storedToken)

        }
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    };

    fetchToken();
  }, []);
  const [Feed, setFeed] = useState(null);
  const fetchUserData = async (token) => {
    try {
      const userDataResponse = await GetReslut(token);
      setUserDataa(userDataResponse);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const fetchUserDataFeed = async (token) => {
    try {
      const userDataResponse = await GetFeedback(token);
      setFeed(userDataResponse?.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  console.log(Feed, "Feed")
  const emojis = [
    { id: 1, name: "😊" }, // Smile emoji
    { id: 2, name: "😂" }, // Laughing emoji
    { id: 3, name: "😡" }, // Heart eyes emoji
    { id: 4, name: "😭" }, // Smiling with hearts emoji
    { id: 5, name: "😤" }, // Sunglasses emoji
  ];

  // console.log(Users, "Users")
  // console.log(userDataa?.data,"userDataauserDataa")
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Colors.PRIMARY }}
      style={{ backgroundColor: Colors.WHITE }}
      labelStyle={{ color: Colors.BLACK }}
    />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'tab1':
        return (
          <View style={{ flex: 1, backgroundColor: Colors.WHITE, padding: 20 }}>
            <TouchableOpacity style={{ backgroundColor: Colors.SECONDARY, padding: 10, borderRadius: 10 }} onPress={toggleModal}>
              <Text style={{ fontFamily: 'appfont-medium', color: Colors.WHITE }}>Calender</Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: "#F9F9E0", padding: 10, borderRadius: 10, marginTop: 3, height: 80 }}>
              <Text style={{ fontFamily: 'appfont-light', color: Colors.BLACK }}>
                Ежедневная календарь для ваших эмоций
              </Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: Colors.SECONDARY, padding: 10, borderRadius: 10, marginTop: 10 }} onPress={toggleModalA}>
              <Text style={{ fontFamily: 'appfont-medium', color: Colors.WHITE }}>How are you?</Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: "#F9F9E0", padding: 10, borderRadius: 10, marginTop: 3, height: 80 }}>
              <Text style={{ fontFamily: 'appfont-light', color: Colors.BLACK }}>
                Выберите настроение..
              </Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: Colors.SECONDARY, padding: 10, borderRadius: 10, marginTop: 10 }}>
              <Text style={{ fontFamily: 'appfont-medium', color: Colors.WHITE }}>Statistics and graphs</Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: "#F9F9E0", padding: 10, borderRadius: 10, marginTop: 3, height: 80 }}>
              <Text style={{ fontFamily: 'appfont-light', color: Colors.BLACK }}>
                Для визуализации данных о психологическом состоянии пользователя
              </Text>
            </View>
            <Modal animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={toggleModal}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <View style={{ flexDirection:'row',justifyContent:'space-between',gap:10,marginBottom:13}}>
                    <View></View>
                    <View >
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: "appfont-medium",
                        color: Colors.SECONDARY,
                      }}
                    >
                      Calendar
                    </Text>
                    </View>
                    <TouchableOpacity onPress={toggleModal}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: "appfont-medium",
                          color: Colors.BLACK,
                        }}
                      >
                        x
                      </Text></TouchableOpacity>
                  </View>
                  <View>
  <View style={{ flexDirection: "row", gap: 9, marginLeft: 30 }}>
    {day &&
      day.map((data, index) => (
        <View key={index}>
          <Text
            style={{
              backgroundColor: data.backgroundColor,
              padding: 5,
              color: Colors.WHITE,
              borderRadius: 10,
              fontFamily: "appfont-medium",
            }}
          >
            {data.name.substring(0, 3)}
          </Text>
        </View>
      ))}
  </View>
  <View style={{ flexDirection: 'row' }}>
    <View style={{ flexDirection: 'col' }}>
      {
        emojis && emojis.map((data, index) => {
          return (
            <Text style={{ padding: 7, fontSize: 20 }} key={index}>{data?.name}</Text>
          )
        })
      }
    </View>
    <View style={{ flexDirection: 'col' }}>
      {Array.from(Array(5).keys()).map((colIndex) => (
        <View key={colIndex} style={{ flexDirection: "row", gap: 1, alignItems: "center", marginTop: 3 }}>
          {Array.from(Array(7).keys()).map((rowIndex) => (
            <Text
              key={rowIndex}
              style={{
                borderRadius: 5,
                borderWidth: 1,
                paddingHorizontal: Feed && Feed[day[rowIndex].name] === colIndex + 1?18 : 18,
                paddingVertical: 9,padding:0,margin:0
              }}
            >
            {Feed && Feed[day[rowIndex].name] === colIndex ? (
  emojis.find(emoji => emoji.id === colIndex + 1)?.name
) : null}
            </Text>
          ))}
        </View>
      ))}
    </View>
  </View>
</View>




                </View>
              </View>
            </Modal>
            <Modal animationType="slide"
              transparent={true}
              visible={modalVisibleA}
              onRequestClose={toggleModalA}>
              <View style={styles.modalContainer}>
                <View style={[styles.modalContent,{backgroundColor:'#47FAC4'}]}>
                  <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                    <Text>

                    </Text>
                    <Text
                      style={{
                        fontSize: 26,
                        fontFamily: "appfont-medium",
                        color: Colors.SECONDARY,
                      }}
                    >
                      Счетчик настроения
                    </Text>
                    <TouchableOpacity onPress={toggleModalA}>
                      <Text
                        style={{
                          fontSize: 26,
                          fontFamily: "appfont-medium",
                          color: Colors.WHITE,
                        }}
                      >
                        x
                      </Text></TouchableOpacity>
                  </View>

                  <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../assets/Tri.png')} style={{width:250,height:200,resizeMode:'contain'}}/>
                  <View style={styles.emojiContainer}>
  <TouchableOpacity onPress={() => handleEmojiPress(1)}>
    <Text style={{fontSize:30}}>
    😊</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => handleEmojiPress(2)}>
    <Text style={{fontSize:30}}>
    😂</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => handleEmojiPress(3)}>
    <Text style={{fontSize:30}}>
    😡</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => handleEmojiPress(4)}>
    <Text style={{fontSize:30}}>
    😭</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => handleEmojiPress(5)}>
    <Text style={{fontSize:30}}>
  😤</Text>
  </TouchableOpacity>
 
</View>

                  </View>
                </View>
              </View>
            </Modal>
            <Modal animationType="slide"
              transparent={true}
              visible={modalVisibleB}
              onRequestClose={toggleModalB}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>

                  <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', }}>
                    <View style={styles.userContainer}>
                    {
          Users?.image ? (
            <Image source={{ uri: `${apiUrlUserImage}/${Users?.image}` }} style={styles.userImage} />
          ) : (
            <Image source={require("../../assets/user.png")} style={styles.userImage} />

          )
        }
                      <Text >Изменить аватар</Text>
                    </View>
                    <TouchableOpacity onPress={toggleModalB}>
                      <Text
                        style={{
                          fontSize: 26,
                          fontFamily: "appfont-medium",
                          color: Colors.BLACK,
                          position: 'absolute', bottom: 20
                        }}
                      >
                        x
                      </Text></TouchableOpacity>
                  </View>

                  <View>
                    <View style={{ padding: 20 }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <Text>
                          ФИО
                        </Text>
                        <TextInput style={{ borderBottomWidth: 1, width: '80%', padding: 10 }} value={Users?.name} />
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <Text>
                          Описание
                        </Text>
                        <TextInput style={{ borderBottomWidth: 1, width: '80%', padding: 10 }} value={Users?.about_me} />
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <Text>
                          Пол
                        </Text>
                        <TouchableOpacity>
                          <Text style={{ padding: 10, backgroundColor: Colors.BLACK, color: Colors.WHITE }}>
                            Выбрать
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        );
      case 'tab2':
        return (
          <View style={{ flex: 1, backgroundColor: Colors.WHITE, padding: 20 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: Colors.SECONDARY, borderRadius: 10, width: 250 }}>
                <Text style={{ color: Colors.WHITE, fontFamily: 'appfont-medium' }}>Completed {userDataa?.count}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ borderBottomWidth: 1, marginTop: 30 }}>
            </View>
            {
              userDataa?.data && userDataa?.data.map((data, index) => {
                console.log(data)
                console.log(`${apiUrlTopicImage}/${data?.image}`)
                return (
                  <View key={index} style={{ flexDirection: 'row', borderRadius: 10, padding: 10, marginTop: 3, alignItems: "center", gap: 20, backgroundColor: "#D7C461" }}>
                    <Image source={{ uri: `${apiUrlTopicImage}/${data?.topic?.image}` }} style={{ width: 60, height: 60, borderRadius: 10 }} />
                    <Text style={{ fontFamily: 'appfont-medium' }}>
                      {data?.topic?.title}
                    </Text>
                  </View>
                )
              })
            }


          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
        <Ionicons name="menu" size={24} color={Colors.BLACK} />
      </TouchableOpacity>
      <View style={styles.userContainer}>
        {
          Users?.image ? (
            <Image source={{ uri: `${apiUrlUserImage}/${Users?.image}` }} style={styles.userImage} />
          ) : (
            <Image source={require("../../assets/user.png")} style={styles.userImage} />

          )
        }
        <Text style={styles.menuTextaa}>Profile / {Users?.name || "User"}</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={toggleModalB} style={{ justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: Colors.SECONDARY, borderRadius: 10 }}>
          <Text style={{ color: Colors.WHITE, fontFamily: 'appfont-medium' }}>Edit profile</Text>
        </TouchableOpacity>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  userContainer: {
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  }, emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:15
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  menuItem: {
    paddingHorizontal: 20,
    width: "100%",
    paddingVertical: 15,
  },
  menuIconContainer: {
    padding: 20,
  },
  menuTextaa: {
    fontSize: 15,
    fontFamily: 'appfont-medium',
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10,
    elevation: 5, justifyContent: "center",
  },
});

export default MYTest;
