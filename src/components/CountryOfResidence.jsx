import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Image } from 'react-native';
import { down } from '../assest/Image';

const CustomDropdown = ({ label, options, selectedValue, onSelect }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown Label */}
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Touchable to show the dropdown options */}
      <TouchableOpacity
      
      onPress={toggleModal} style={[
        styles.dropdownButton,
        { borderColor: selectedValue ? 'green' : 'gray' }, 
      ]}>
      <View >
        <Text style={styles.selectedText}>{selectedValue || 'Select an option'}</Text>
      </View>
       <Image style={{width:20,height:20,resizeMode:'contain'}} source={down}/>
      </TouchableOpacity>

     
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <TouchableOpacity
                       activeOpacity={1}
                       onPress={() => setIsModalVisible(false)} 
                        style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <FlatList
              data={options}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => {
                    onSelect(item);
                    toggleModal();
                  }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};


export default CustomDropdown


const styles = StyleSheet.create({
  container: {
    width:"90%",
    height:50,
    
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdownButton: {
    height: 50,
    borderColor:'gray',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    paddingHorizontal:20
  },
  selectedText: {
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 5,
    padding: 20,
    maxHeight: 300,
    
  },
  optionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },

})