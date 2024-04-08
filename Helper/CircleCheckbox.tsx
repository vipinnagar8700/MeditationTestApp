import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from './Colors';

const CircleCheckbox = ({ isChecked, onChange }) => {
  const toggleCircleCheckbox = () => {
    onChange(!isChecked);
  };

  return (
    <TouchableOpacity style={[styles.circleCheckboxContainer, isChecked && styles.checked]} onPress={toggleCircleCheckbox}>
    
    </TouchableOpacity>
  );
};

export default CircleCheckbox;

const styles = StyleSheet.create({

    circleCheckboxContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24,
      borderRadius: 50, // Half of the width and height to make it circular
      borderWidth: 1,
      borderColor: '#999',
    },
    checked: {
      backgroundColor: Colors.YELLOW, // Color when checked
      borderColor: Colors.YELLOW,
    },
  });
  
