import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import BaseLayout from "./BaseLayout";
import CustomInputWithLabel from "./CustomInputWithLabel";
import CustomDropdown from "./CountryOfResidence";
import CustomPhonnumber from "./CustomPhonnumber";
import CustomDatePicker from "./CustomDatePicker";
import GenderSelection from "./GenderSelection";
import CustomCheckbox from "./CustomCheckbox";
import AgreeCheckbox from "./AgreeCheckbox";
import BaseButton from "./BaseButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateAccountStep2 = ({ onNext, onPrevious }) => {
  const [address, setAddress] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [agree, setAgree] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const countries = ['India', 'United States', 'Canada', 'Australia'];

  const handleDayChange = (selectedDay) => setDay(selectedDay);
  const handleMonthChange = (selectedMonth) => setMonth(selectedMonth);
  const handleYearChange = (selectedYear) => setYear(selectedYear);
  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setModalVisible(false);
  };

  const toggleCheckbox = () => {
    setAgree(!agree);
  };



  const handlePhoneInputChange = (phone) => {
    setPhoneNumber(phone); // Update phone number state
  };


  console.log("-------", phoneNumber)

  const isButtonDisabled = !address || !selectedCountry || !phoneNumber || !day || !month || !year || !gender || !agree;


  useEffect(() => {
    const loadData = async () => {
      try {
        const savedAddress = await AsyncStorage.getItem('address');
        const savedCountry = await AsyncStorage.getItem('selectedCountry');
        const savedPhoneNumber = await AsyncStorage.getItem('phoneNumber');
        const savedDay = await AsyncStorage.getItem('day');
        const savedMonth = await AsyncStorage.getItem('month');
        const savedYear = await AsyncStorage.getItem('year');
        const savedGender = await AsyncStorage.getItem('gender');
        const savedAgree = await AsyncStorage.getItem('agree');

        if (savedAddress) setAddress(savedAddress);
        if (savedCountry) setSelectedCountry(savedCountry);
        if (savedPhoneNumber) setPhoneNumber(savedPhoneNumber);
        if (savedDay) setDay(savedDay);
        if (savedMonth) setMonth(savedMonth);
        if (savedYear) setYear(savedYear);
        if (savedGender) setGender(savedGender);
        if (savedAgree !== null) setAgree(JSON.parse(savedAgree)); // Parse agree as it is a boolean
      } catch (error) {
        console.error("Error loading saved data:", error);
      }
    };

    loadData();
  }, []);


  const handleNext = async () => {
    try {
      await AsyncStorage.setItem('address', address);
      await AsyncStorage.setItem('selectedCountry', selectedCountry);
      await AsyncStorage.setItem('phoneNumber', phoneNumber);
      await AsyncStorage.setItem('day', day);
      await AsyncStorage.setItem('month', month);
      await AsyncStorage.setItem('year', year);
      await AsyncStorage.setItem('gender', gender);
      await AsyncStorage.setItem('agree', JSON.stringify(agree));

      // Call the onNext callback function
      onNext();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };


  return (
    <BaseLayout>
      {/* <Text>{phoneNumber}</Text> */}
      <ScrollView>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Welcome Bonus</Text>
            <Text style={styles.sectionSubtitle}>Pick from one of our exclusive welcome bonuses!</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <CustomInputWithLabel
            label="Address"
            placeholder={"Enter your address"}
            value={address}
            onChangeText={setAddress}
          />
          {errors.address && <Text style={[styles.errorText, { bottom: 10 }]}>{errors.address}</Text>}
          <CustomInputWithLabel
            label="Mobile"
            placeholder={"Enter your Number"}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            maxLength={10}
            />
          <CustomDropdown
            label="Select Country"
            options={countries}
            selectedValue={selectedCountry}
            onSelect={setSelectedCountry}
          />
          {errors.selectedCountry && <Text style={[styles.errorText, { top: 30 }]}>{errors.selectedCountry}</Text>}

          {/* <CustomPhonnumber
            value={phoneNumber}
            handlePhoneInputChange={handlePhoneInputChange}
            onChangeText={setPhoneNumber}
          /> */}

          {errors.phoneNumber && <Text style={[styles.errorText, { top: 35 }]}>{errors.phoneNumber}</Text>}

          <CustomDatePicker
            day={day}
            month={month}
            year={year}
            onDayChange={handleDayChange}
            onMonthChange={handleMonthChange}
            onYearChange={handleYearChange}
          />
          {errors.dob && <Text style={styles.errorText}>{errors.dob}</Text>}

          <GenderSelection
            gender={gender}
            onGenderSelect={handleGenderSelect}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          {errors.gender && <Text style={[styles.errorText, { top: 30 }]}>{errors.gender}</Text>}

          <CustomCheckbox
            isChecked={isChecked}
            onToggle={() => setIsChecked(!isChecked)}
          />
          {/* {errors.isChecked && <Text style={styles.errorText}>{errors.isChecked}</Text>} */}

          <View style={{ width: '90%', height: 0.5, backgroundColor: 'gray', marginVertical:15,bottom:10}} />

          <AgreeCheckbox
            isChecked={agree}
            toggleCheckbox={toggleCheckbox}
            onToggle={() => setAgree(!agree)}
          />
          {errors.agree && <Text style={styles.errorText}>{errors.agree}</Text>}

          {/* <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity> */}

          <BaseButton onPress={handleNext} disabled={isButtonDisabled} label={"Continue"} />
          <BaseButton onPress={onPrevious} label={"Back"} />
          <View style={{ height: 100 }} />
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    paddingHorizontal: 20,
    gap: 5,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
  sectionSubtitle: {
    fontSize: 15,
    color: '#000',
    fontWeight: '400',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'left',
    width: '90%',
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateAccountStep2;
