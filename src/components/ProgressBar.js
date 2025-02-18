import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ProgressBar = ({ step }) => {
    const steps = ["Welcome Bonus & Account Details", "Personal Details"];

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Create Account</Text>
            <View style={styles.stepContainer}>
                {steps.map((desc, index) => (
                    <View key={index} style={styles.stepItem}>
                        <View
                            style={[
                                styles.stepNumber,
                                step > index ? styles.completedStep : step === index ? styles.activeStep : null,
                            ]}
                        >
                            <Text style={styles.stepText}>
                                {step > index ? "✔" : index + 1}
                            </Text>
                        </View>
                        {step === index && <Text style={styles.stepDescription}>{desc}</Text>}
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       
        // backgroundColor: "", 
        // paddingVertical: 20,
        // borderRadius: 10, 
      
        borderColor: "#ddd", 
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        // marginBottom: 10,
        // textAlign: "center",
        paddingHorizontal:20
    },
    stepContainer: {
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-around",
        marginVertical: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#ddd", // Border between the steps
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal:20
    },
    stepItem: {
        flexDirection: "row",
        alignItems: "center",
        // marginHorizontal: 15,
    },
    stepNumber: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        borderWidth: 2, // Adding a border around the step number
        borderColor: "#bbb", // Border color around the step number
    },
    activeStep: {
        backgroundColor: "#4caf50", 
        borderColor: "#388e3c", 
    },
    completedStep: {
        backgroundColor: "#2196F3", 
        borderColor: "#1e88e5", 
    },
    stepText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    stepDescription: {
        color: "#000",
        fontSize: 14,
        fontWeight: "500",
        marginLeft: 10,
    },
});

export default ProgressBar;
