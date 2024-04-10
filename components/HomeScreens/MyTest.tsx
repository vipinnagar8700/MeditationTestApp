import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../Helper/Colors";
import { TabView, TabBar } from 'react-native-tab-view'; // Import TabView components
import AuthContext from '../Context/AuthContext';
import { Entypo } from "@expo/vector-icons";


const MYTest = () => {
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
    { id: 1, name: "Mon", backgroundColor: Colors.PRIMARY },
    { id: 2, name: "Tue", backgroundColor: Colors.BUTTON },
    { id: 3, name: "Wed", backgroundColor: Colors.SECONDARY },
    { id: 4, name: "Thu", backgroundColor: Colors.PRIMARY },
    { id: 5, name: "Fri", backgroundColor: Colors.BUTTON },
    { id: 6, name: "Sat", backgroundColor: Colors.SECONDARY },
    { id: 7, name: "Sun", backgroundColor: Colors.PRIMARY },
  ];


  const [selectedEmoji, setSelectedEmoji] = useState('');

  const handleEmojiPress = (emoji) => {
    setSelectedEmoji(emoji);
    // You can perform any action here based on the selected emoji, like submitting feedback
  };

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
                  <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', gap: 100 }}>
                    <Text
                      style={{
                        fontSize: 26,
                        fontFamily: "appfont-medium",
                        color: Colors.SECONDARY,
                      }}
                    >
                      Calendar
                    </Text>
                    <TouchableOpacity onPress={toggleModal}>
                      <Text
                        style={{
                          fontSize: 26,
                          fontFamily: "appfont-medium",
                          color: Colors.PRIMARY,
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
                              {data.name}
                            </Text>
                          </View>
                        ))}
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 1,
                        alignItems: "center",
                        marginTop: 3,
                        marginLeft: 4,
                      }}
                    >
                      <Text style={{ fontSize: 20 }}>
                        <Entypo name="emoji-sad" size={24} color={Colors.PRIMARY} />
                      </Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 10,
                          paddingVertical: 10,
                        }}
                      > <Entypo name="emoji-sad" size={18} color={Colors.PRIMARY} />
                      </Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 1,
                        alignItems: "center",
                        marginTop: 3,
                      }}
                    >
                      <Text style={{ fontSize: 20 }}> <Entypo name="emoji-sad" size={24} color={Colors.BUTTON} /></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>

                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 10,
                          paddingVertical: 10,
                        }}
                      >
                        <Entypo name="emoji-sad" size={18} color={Colors.BUTTON} />
                      </Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 1,
                        alignItems: "center",
                        marginTop: 3,

                      }}
                    >
                      <Text style={{ fontSize: 20 }}> <Entypo name="emoji-sad" size={24} color={Colors.SECONDARY} /></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>

                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 10,
                          paddingVertical: 10,
                        }}
                      >
                        <Entypo name="emoji-sad" size={18} color={Colors.SECONDARY} />
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 1,
                        alignItems: "center",
                        marginTop: 3,

                      }}
                    >
                      <Text style={{ fontSize: 20 }}> <Entypo name="emoji-sad" size={24} color={Colors.PRIMARY} /></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 10,
                          paddingVertical: 10,
                        }}
                      >
                        <Entypo name="emoji-sad" size={18} color={Colors.PRIMARY} />
                      </Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 1,
                        alignItems: "center",
                        marginTop: 3,

                      }}
                    >
                      <Text style={{ fontSize: 20 }}> <Entypo name="emoji-sad" size={24} color={Colors.BUTTON} /></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>

                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 10,
                          paddingVertical: 10,
                        }}
                      >
                        <Entypo name="emoji-sad" size={18} color={Colors.BUTTON} />
                      </Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
                      <Text
                        style={{
                          borderRadius: 5,
                          borderWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}
                      ></Text>
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
                <View style={styles.modalContent}>
                  <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
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
                          color: Colors.PRIMARY,
                        }}
                      >
                        x
                      </Text></TouchableOpacity>
                  </View>

                  <View>
                    <View style={styles.emojiContainer}>
                      <TouchableOpacity onPress={() => handleEmojiPress('😊')}>
                        <Ionicons name="happy-outline" size={50} color={selectedEmoji === '😊' ? '#8A62E1' : '#8A62E1'} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleEmojiPress('😐')}>
                        <Ionicons name="sad-outline" size={50} color={selectedEmoji === '😐' ? '#31C059' : '#31C059'} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleEmojiPress('😡')}>
                        <Ionicons name="sad-outline" size={50} color={selectedEmoji === '😡' ? '#2DA8ED' : '#2DA8ED'} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleEmojiPress('😡')}>
                        <Ionicons name="sad-outline" size={50} color={selectedEmoji === '😡' ? '#8A62E1' : '#8A62E1'} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleEmojiPress('😡')}>
                        <Ionicons name="sad-outline" size={50} color={selectedEmoji === '😡' ? 'red' : 'red'} />
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
                  <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                    <Text
                      style={{
                        fontSize: 26,
                        fontFamily: "appfont-medium",
                        color: Colors.SECONDARY,
                      }}
                    >
                      Изменить аватар
                    </Text>
                    <TouchableOpacity onPress={toggleModalB}>
                      <Text
                        style={{
                          fontSize: 26,
                          fontFamily: "appfont-medium",
                          color: Colors.PRIMARY,
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
                        <TextInput style={{ borderBottomWidth: 1, width: '80%', padding: 10 }} />
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <Text>
                          Описание
                        </Text>
                        <TextInput style={{ borderBottomWidth: 1, width: '80%', padding: 10 }} />
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 100, marginTop: 10 }}>
                        <Text>
                          Пол
                        </Text>
                        <View>
                          <Text style={{ padding: 10, backgroundColor: Colors.BLACK, color: Colors.WHITE }}>
                            Выбрать
                          </Text>
                        </View>
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
                <Text style={{ color: Colors.WHITE, fontFamily: 'appfont-medium' }}>Completed 1</Text>
              </TouchableOpacity>
            </View>
            <View style={{ borderBottomWidth: 1, marginTop: 30 }}>

            </View>
            <View style={{ flexDirection: 'row', borderRadius: 10, padding: 10, marginTop: 3, alignItems: "center", gap: 20, backgroundColor: "#D7C461" }}>
              <Image source={require('../../assets/user.png')} style={{ borderRadius: 40, width: 50 }} />
              <Text style={{ fontFamily: 'appfont-medium' }}>
                Тест на депрессию
              </Text>
            </View>

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
        <Image source={require("../../assets/user.png")} style={styles.userImage} />
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
    marginBottom: 20,
    width: "100%",
  }, emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderColor: Colors.WHITE,
    borderWidth: 1,
    paddingHorizontal: 20, margin: 20, backgroundColor: Colors.WHITE, borderRadius: 20
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
    alignItems: "center",
  },
});

export default MYTest;
