import React, { useState, useRef } from "react";
import {
    StyleSheet,
    View,
    Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const CustomPhonnumber = ({ value, formattedValue, showMessage, handlePhoneInputChange }) => {
    const [valid, setValid] = useState(false);
    
    // Create a ref for the PhoneInput component
    const phoneInputRef = useRef(null);

    // Handle formatted phone number changes
    const handleFormattedTextChange = (formatted) => {
        setValid(phoneInputRef.current?.isValidNumber(formatted));
        handlePhoneInputChange(formatted); // Pass the formatted number to the parent component
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Mobile Number*</Text>

            <View style={styles.box}>
                <PhoneInput
                    ref={phoneInputRef}  // Pass the ref here
                    defaultValue={value}
                    defaultCode="IN"
                    layout="first"
                    onChangeText={handlePhoneInputChange}
                    onChangeFormattedText={handleFormattedTextChange} // This now handles formatted text change
                    withDarkTheme
                    withShadow
                    autoFocus
                    containerStyle={{ width: "90%", overflow: 'hidden' }}
                    textContainerStyle={{ width: "100%", borderRadius: 10, paddingRight: 10, overflow: 'hidden' }}
                    codeTextStyle={{ height: "100%" }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 50,
        marginTop: 50,
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
        fontWeight: '700',
    },
});

export default CustomPhonnumber;
