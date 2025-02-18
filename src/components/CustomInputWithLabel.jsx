import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const CustomInputWithLabel = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  rightIcon,
  onRightIconPress,
  editable = true,
  style,
  maxLength
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}*</Text>}
      <View style={[styles.inputContainer, { borderColor: value ? 'green' : 'gray' }]}>

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!isPasswordVisible}
          keyboardType={keyboardType}
          editable={editable}
          maxLength={maxLength}
          
        />
        {value && rightIcon && ( 
          <TouchableOpacity onPress={onRightIconPress} style={styles.iconContainer}>
            <Text style={{ color: "green" }}>✔</Text>
          </TouchableOpacity>
        )}
        {secureTextEntry && (
          <TouchableOpacity
            style={{
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
              width: 60,
              height: 35,
              borderRadius: 5,
              backgroundColor: 'rgba(0,0,0,.2)',
            }}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Text style={styles.toggleText}>{isPasswordVisible ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInputWithLabel;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 10,
  },
  toggleText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
});
