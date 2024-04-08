import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Helper/Colors';

const FeedbackScreen = () => {
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const handleEmojiPress = (emoji) => {
    setSelectedEmoji(emoji);
    // You can perform any action here based on the selected emoji, like submitting feedback
  };

  return (
    <View style={styles.container}>
        <View style={{backgroundColor:Colors.PRIMARY,padding:20,justifyContent:'center',alignItems:'center',height:250}}>
      <Text style={styles.title}>Mood counter</Text>
      <Text style={styles.titlea}>Click on the emoticon to choose your current mood 😊</Text>
      </View>

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
  );
};

const styles = StyleSheet.create({
  container: {
flex:1   ,
backgroundColor:"#E3EAFF"
  },
  title: {
    fontSize: 20,
    fontFamily: 'appfont-bold',
    color:Colors.WHITE,textDecorationLine:'underline'
  },
  titlea: {
    fontSize:15,
    fontFamily: 'appfont-light',
    marginBottom: 20,color:Colors.WHITE,textDecorationLine:'underline'
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '20%', // Center vertically
    left: 0,
    right: 0,
    padding: 20,
    borderColor: Colors.WHITE,
    borderWidth: 1,
    paddingHorizontal: 20,margin:20,backgroundColor:Colors.WHITE,borderRadius:20
  },
});

export default FeedbackScreen;