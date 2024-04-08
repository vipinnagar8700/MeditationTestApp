import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView, Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Helper/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const MeditationVideoScreen = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const navigation = useNavigation(); // Get navigation object

    // Function to handle login navigation
    const handleMenu = () => {
      navigation.navigate('Menu'); // Navigate to the Login screen
    };
    const handleGoBack = () => {
        navigation.goBack();
      };
    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity style={styles.menuIconContainer} onPress={handleMenu}>
                        <Ionicons name="menu" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menuIconContainer, { paddingTop: 0 }]} onPress={handleGoBack}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', marginHorizontal: 20, justifyContent: 'flex-start' }}>
                    <View>
                        <Text style={{ fontFamily: 'appfont-medium' }}>
                            Conscious Breathing
                        </Text>
                        <Text style={{ fontFamily: 'appfont-light' }}>
                            It is a simple yet powerful{"\n"}meditation technique that{"\n"}helps reduce stress, improve{"\n"}concentration and promote {"\n"}emotional well-being.
                        </Text>
                    </View>
                    <Image
                        source={require("../../assets/meditatingwoman.png")}
                        style={{
                            alignItems: "center",
                            width: 120,
                            height: "100%",
                            resizeMode: "contain", // Adjust image size to fit container
                            marginLeft: 20
                        }}
                    />
                </View>

                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20,gap:10 }}>
                    <View style={{ borderColor: Colors.BUTTON, borderWidth: 2, paddingVertical: 5, paddingHorizontal: 11, borderRadius: 20 }}>
                        <Text style={{ color: Colors.BUTTON, fontFamily: 'appfont-medium' }}>1</Text>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.textContainer}>
                            <Text style={styles.description}>
                                Focus on your breathing. Notice how air enters through your nose, fills your lungs, and exits. Feel how your body reacts to each inhalation and exhalation.
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center',marginHorizontal: 20,gap:10}}>
                    <View style={{ borderColor: Colors.SECONDARY, borderWidth: 2, paddingVertical: 5, paddingHorizontal: 11, borderRadius: 20 }}>
                        <Text style={{ color: Colors.SECONDARY, fontFamily: 'appfont-medium' }}>2</Text>
                    </View>
                    <View style={[styles.card,{backgroundColor:Colors.SECONDARY}]}>
                        <View style={styles.textContainer}>
                            <Text style={styles.description}>
                            As you inhale, focus your attention on the feeling of air passing through your nostrils, the expansion of your chest, and the rise of your abdomen. As you exhale, notice the sensations of your abdomen collapsing and your chest relaxing.
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20,gap:10}}>
                    <View style={{ borderColor: Colors.BUTTON, borderWidth: 2, paddingVertical: 5, paddingHorizontal: 11, borderRadius: 40 }}>
                        <Text style={{ color: Colors.BUTTON, fontFamily: 'appfont-medium' }}>3</Text>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.textContainer}>
                            <Text style={styles.description}>
                            Your mind may start to wander, and that's normal. When you notice that your attention has wandered, gently but firmly bring it back to your breath. It is important to approach your distracting thoughts without judgment or criticism.</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        padding: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: Colors.BUTTON,
                        margin: 30,
                        borderRadius: 10,marginBottom:100
                    }}
                >
                    <Text style={{ fontFamily: "appfont-medium", color: Colors.WHITE }}>
                    Complete
                    </Text>
                </TouchableOpacity>
                </ScrollView>

            </View>
        </>
    );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        position: "absolute",
        top: 200,
        left: 0,
        right: 0,
        alignItems: "center",
    },
    buttonText: {
        fontFamily: "appfont-light",
        fontSize: 16,
        color: "white",
        padding: 10,
        backgroundColor: Colors.BUTTON,
        borderRadius: 5,
    },
    buttonContainera: {
        position: "absolute",
        top: 110,
        left: 0,
        right: 0,
        alignItems: "center",
    },
    card: {
        width: width - 80, // Set the width here
        marginVertical: 5,
        backgroundColor: Colors.BUTTON,
        justifyContent: "flex-start",
        padding: 10,
        borderRadius: 10,
    },
    image: {
        width: 60,
        resizeMode: "contain",
    },
    textContainer: {
        marginLeft: 5,
    },
    title: {
        fontFamily: "appfont-medium",
        color: Colors.WHITE,
    },
    description: {
        fontFamily: "appfont-light",
        color: Colors.WHITE,
        flexWrap: "wrap",
    },
    buttonTexta: {
        fontFamily: "appfont-light",
        fontSize: 16,
        color: "white",
        padding: 10,
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
