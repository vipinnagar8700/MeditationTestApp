import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import Colors from "./Colors"; // Import your Colors file

const GenderSelectionModal = ({ isVisible, onSelect, onClose }) => {
  const genders = ["Male", "Female", "Other"]; // Define the available genders

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
        }}
      >
        <View
          style={{
            backgroundColor: Colors.WHITE,
            padding: 20,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          {genders.map((gender) => (
            <TouchableOpacity key={gender} onPress={() => onSelect(gender)}>
              <Text style={{ padding: 10 }}>{gender}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const GenderSelectionButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
    setIsModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleOpenModal}>
        <Text style={{ padding: 10, backgroundColor: Colors.BLACK, color: Colors.WHITE }}>
          {selectedGender ? selectedGender : "Выбрать"}
        </Text>
      </TouchableOpacity>
      <GenderSelectionModal
        isVisible={isModalVisible}
        onSelect={handleSelectGender}
        onClose={handleCloseModal}
      />
    </View>
  );
};

export default GenderSelectionButton;
