import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Checkbox = ({ isChecked, onChange }) => {
  const toggleCheckbox = () => {
    onChange(!isChecked);
  };

  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
      {isChecked ? (
        <MaterialIcons name="check-box" size={24} color="blue" />
      ) : (
        <MaterialIcons name="check-box-outline-blank" size={24} color="gray"  />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkboxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#999',
    borderRadius: 5,
  },
});
