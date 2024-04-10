import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView, 
    ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Helper/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetMeditationSingle } from "../Api/Api";
import { apiUrlImage } from "../Api/ApiUrl";

const MeditationVideoScreen = ({ route }) => {
    const { id } = route.params;
    console.log(id, "Med")
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const navigation = useNavigation(); // Get navigation object
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true); // State variable to track loading state

    // Function to handle login navigation
    const handleMenu = () => {
        navigation.navigate('Menu'); // Navigate to the Login screen
    };
    const handleGoBack = () => {
        navigation.goBack();
    };
    const handleComplete= () => {
        navigation.navigate("Home");
    };
    useEffect(() => {
        const fetchToken = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token !== null) {
                    console.log(token, "storedToken")
                    fetchUserData(token, id);
                }
            } catch (error) {
                console.error('Error retrieving token:', error);
            }
        };

        fetchToken();
    }, [id]);

    const fetchUserData = async (token, id) => {
        try {
            const userDataResponse = await GetMeditationSingle(token, id);
            setUserData(userDataResponse);
            setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    console.log(userData, "MeditationsSinge");

    return (
        <>
            {loading ? ( // Show loading indicator while data is loading
                <View style={[styles.container, styles.loadingContainer]}>
                    <ActivityIndicator size="large" color={Colors.PRIMARY} />
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
                            <Ionicons name="menu" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.menuIconContainer, { paddingTop: 0 }]} onPress={handleGoBack}>
                            <AntDesign name="arrowleft" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', width: '95%', marginHorizontal: 20, justifyContent: 'flex-start' }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: 'appfont-medium', color: Colors.WHITE, fontSize: 20 }}>
                                    {userData?.data?.title}
                                </Text>
                                <Text style={{ fontFamily: 'appfont-light', color: Colors.WHITE, flexWrap: 'wrap' }}>
                                    {userData?.data?.description}
                                </Text>
                            </View>
                            <Image
                                source={{ uri: `${apiUrlImage}/${userData?.data?.image}` }}
                                style={{
                                    width: 100,
                                    resizeMode: "cover", // Adjust image size to fit container
                                    marginRight: 20,
                                    borderRadius: 10
                                }}
                            />
                        </View>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={{
                                uri: `${userData?.video_path}/${userData?.data?.video}`,
                            }}
                            useNativeControls
                            resizeMode={ResizeMode.CONTAIN}
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        {userData?.data?.steps && userData?.data?.steps.map((data, index) => {
                            return (
                                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, gap: 10 }}>
                                    <View style={{ borderColor: Colors.WHITE, borderWidth: 2, paddingVertical: 5, paddingHorizontal: 11, borderRadius: 20 }}>
                                        <Text style={{ color: Colors.WHITE, fontFamily: 'appfont-medium' }}>{index + 1}</Text>
                                    </View>
                                    <View style={styles.card}>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.description}>
                                                {data?.title}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        })}
                        <TouchableOpacity onPress={handleComplete}
                            style={{
                                padding: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#D8644BE3",
                                margin: 30,
                                borderRadius: 10,
                            }}
                        >
                            <Text style={{ fontFamily: "appfont-medium", color: Colors.WHITE }}>
                                Завершить
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            )}
        </>
    );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#60CED5"
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: width - 80, // Set the width here
        marginVertical: 5,
        justifyContent: "flex-start",
        padding: 10,
        borderRadius: 10,
    },
    textContainer: {
        marginLeft: 5,
    },
    description: {
        fontFamily: "appfont-light",
        color: Colors.WHITE,
        flexWrap: "wrap",
    },
    imageContainer: {
        width: width,
    },
    menuIconContainer: {
        padding: 10,
        borderRadius: 20,
    },
    menuIconContainera: {
        top: 50,
        left: 15,
        padding: 3,
        borderRadius: 20,
        backgroundColor: Colors.WHITE,
    },
});

export default MeditationVideoScreen;
