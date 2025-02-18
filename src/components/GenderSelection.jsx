import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { down } from '../assest/Image';

const GenderSelection = ({ gender, onGenderSelect, modalVisible, setModalVisible }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Gender</Text>
      <View style={[styles.box, { borderColor: gender ? 'green' : 'gray' }]}>
        <TouchableOpacity style={[styles.button, { borderColor: gender ? 'green' : 'gray' }]} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>{gender || 'Choose Gender'}</Text>
          <Image style={styles.icon} source={down} />
        </TouchableOpacity>
      </View>

      {/* Modal for selecting gender */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Gender</Text>
            <TouchableOpacity onPress={() => onGenderSelect('Male')} style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onGenderSelect('Female')} style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 50,
    marginTop: 10,
    borderRadius: 10,
  },
  box: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingLeft: 10,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    color: '#000',
    fontSize: 15,
    fontWeight: '700'
  },
  button: {
    width: "100%",
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  modalOptionText: {
    fontSize: 16,
  },
});

export default GenderSelection;
