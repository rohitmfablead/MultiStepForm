import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AgreeCheckbox = ({isChecked,toggleCheckbox}) => {
   

   

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
                {isChecked ? <View style={styles.checkedBox} /> : <View style={styles.uncheckedBox} />}
            </TouchableOpacity>
            <Text style={styles.label}>
                I agree to the <Text style={styles.link}>terms and conditions</Text>.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        right: 35
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderRadius: 4,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedBox: {
        width: 16,
        height: 16,
        backgroundColor: '#000',
        borderRadius: 4,
    },
    uncheckedBox: {
        width: 16,
        height: 16,
        backgroundColor: 'transparent',
    },
    label: {
        fontSize: 16,
    },
    link: {
        color: 'blue',
    },
});

export default AgreeCheckbox;
