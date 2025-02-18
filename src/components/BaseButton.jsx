import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BaseButton = ({ label, onPress, disabled }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[
                { 
                    width: "90%",
                    borderRadius: 10, 
                    height: 50, 
                    alignSelf: 'center', 
                    marginVertical: 20, 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                },
                disabled 
                    ? { backgroundColor: '#ccc' } 
                    : { backgroundColor: 'red' }   
            ]}
        >
            <Text 
                style={{ 
                    fontSize: 20, 
                    color: disabled ? '#888' : '#fff' 
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default BaseButton

const styles = StyleSheet.create({})
