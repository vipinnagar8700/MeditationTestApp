import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../../Helper/Colors";
import { Entypo } from "@expo/vector-icons";

const CalendarScreen = () => {
  const day = [
    { id: 1, name: "Mon", backgroundColor: Colors.PRIMARY },
    { id: 2, name: "Tue", backgroundColor: Colors.BUTTON },
    { id: 3, name: "Wed", backgroundColor: Colors.SECONDARY },
    { id: 4, name: "Thu", backgroundColor: Colors.PRIMARY },
    { id: 5, name: "Fri", backgroundColor: Colors.BUTTON },
    { id: 6, name: "Sat", backgroundColor: Colors.SECONDARY },
    { id: 7, name: "Sun", backgroundColor: Colors.PRIMARY },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontFamily: "appfont-medium",
            color: Colors.PRIMARY,
          }}
        >
          Calendar
        </Text>
      </View>
      <View>
        <View style={{ flexDirection: "row", gap: 12, marginLeft: 30 }}>
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
            gap: 5,
            alignItems: "center",
            marginTop: 10,
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
            gap: 5,
            alignItems: "center",
            marginTop: 10,
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
            gap: 5,
            alignItems: "center",
            marginTop: 10,
           
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
            gap: 5,
            alignItems: "center",
            marginTop: 10,
          
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
            gap: 5,
            alignItems: "center",
            marginTop: 10,
          
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Adjust as needed
  },
});

export default CalendarScreen;
