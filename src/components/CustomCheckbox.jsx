import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomCheckbox = ({ label, isChecked, onToggle }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onToggle} style={styles.checkbox}>
                {isChecked ? <View style={styles.checkedBox} /> : <View style={styles.uncheckedBox} />}
            </TouchableOpacity>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

const CheckboxExample = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleToggle = (option) => {
        setSelectedOption(option === selectedOption ? null : option);
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.headerText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra ligula quis velit malesuada mattis.
            </Text>

            <View style={styles.checkboxContainer}>
                <CustomCheckbox
                    label="Opt In"
                    isChecked={selectedOption === 'Opt In'}
                    onToggle={() => handleToggle('Opt In')}
                />
                <CustomCheckbox
                    label="No Thanks"
                    isChecked={selectedOption === 'No Thanks'}
                    onToggle={() => handleToggle('No Thanks')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 20,
    },
    headerText: {
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        paddingVertical:5
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedBox: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#000',
    },
    uncheckedBox: {
        width: 16,
        height: 16,
        backgroundColor: '#fff',
    },
    label: {
        marginLeft: 8,
        fontSize: 16,
    },
});

export default CheckboxExample;
