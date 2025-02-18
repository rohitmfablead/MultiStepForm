import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CreateAccountStep3 = ({ onPrevious }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step 3: Confirmation</Text>
      <Text>Review and confirm your details.</Text>
      <TouchableOpacity style={styles.button} onPress={onPrevious}>
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  button: { backgroundColor: "#007bff", padding: 10, marginTop: 20, borderRadius: 5 },
  buttonText: { color: "#fff" }
});

export default CreateAccountStep3;
