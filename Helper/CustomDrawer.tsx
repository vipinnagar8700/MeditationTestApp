// CustomDrawer.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from './Colors';

const CustomDrawer = ({ onClose }) => {
  const handleItemPress = (itemName) => {
    // Handle item press if needed
    console.log(`Pressed: ${itemName}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => handleItemPress('Item 1')}>
        <Text style={styles.itemText}>Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => handleItemPress('Item 2')}>
        <Text style={styles.itemText}>Item 2</Text>
      </TouchableOpacity>
      {/* Add more items as needed */}
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: Colors.BLACK,
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.DARK_GRAY,
  },
  itemText: {
    fontSize: 16,
    color: Colors.BLACK,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: Colors.RED,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: Colors.WHITE,
  },
});

export default CustomDrawer;
