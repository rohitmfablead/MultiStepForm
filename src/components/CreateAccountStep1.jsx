import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import BaseLayout from '../components/BaseLayout';
import { bonuses } from '../mock/DummyData';
import { DEVICE_STYLES } from '../utils/theme';
import CustomInputWithLabel from '../components/CustomInputWithLabel';
import BaseButton from '../components/BaseButton';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const CreateAccountStep1 = ({ onNext }) => {
  const [selectedBonus, setSelectedBonus] = useState(null);


  // Set useState for all the form inputs
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [promocode, setPromocode] = useState('');
  const [emailError, setEmailError] = useState('');



  const validateEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    if (!emailRegex.test(text)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
    setEmail(text);
  };
  // Function to check if all required fields are filled
  const isFormValid = fname && lname && email && password && !emailError;



  // Load data from AsyncStorage when the component mounts
  useEffect(() => {

    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('formData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setFname(parsedData.fname);
          setLname(parsedData.lname);
          setEmail(parsedData.email);
          setPassword(parsedData.password);
          setPromocode(parsedData.promocode);
          setSelectedBonus(parsedData.selectedBonus);
        }
      } catch (error) {
        console.log('Error loading data from AsyncStorage:', error);
      }
    };

    loadData();
  }, []);

  // Save form data to AsyncStorage as a single object
  const saveData = async () => {
    try {
      const formData = {
        fname,
        lname,
        email,
        password,
        promocode,
        selectedBonus,
      };

      // Store the data as a JSON string
      await AsyncStorage.setItem('formData', JSON.stringify(formData));
      console.log('Data saved to AsyncStorage');
    } catch (error) {
      console.log('Error saving data to AsyncStorage:', error);
    }
  };

  return (
    <BaseLayout>
      <ScrollView>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Welcome Bonus</Text>
            <Text style={styles.sectionSubtitle}>Pick from one of our exclusive welcome bonuses!</Text>
          </View>
          <FlatList
            data={bonuses}
            horizontal
            keyExtractor={(item) => item?.id?.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.bonusCard,
                  selectedBonus === item?.id && styles.selectedBonus,
                ]}
                onPress={() => setSelectedBonus(item?.id)}
              >
                {selectedBonus === item?.id && (
                  <View style={styles.selectedTagContainer}>
                    <Text style={styles.selectedTag}>Selected</Text>
                  </View>
                )}
                <View style={styles.bonusContent}>
                  <Text style={styles.bonusTitle}>{item.text}</Text>
                  <Text style={styles.bonusSubtitle}>{item.text2}</Text>
                  <View style={styles.bonusFooter}>
                    <Text style={styles.tcText}>T&Cs Apply</Text>
                    <View style={styles.ageRestriction}>
                      <Text style={styles.ageText}>18+</Text>
                      <Text style={styles.linkText}>BeGambleAware.org</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
          <View style={styles.promocodeSection}>
            <Text style={styles.promocodeText}>Have a Promocode? Enter it here</Text>
            <View style={styles.promocodeInput}>
              <TextInput placeholder='Enter code'
                value={promocode}
                onChangeText={setPromocode}
                placeholderTextColor={"#000"}
                style={{ paddingHorizontal: 10, width: '65%' }} />
              <TouchableOpacity
                style={styles.promocodeButton}
                onPress={() => console.log('Use Promo Code')}
              >
                <Text style={styles.promocodeButtonText}>USE CODE</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Account Details</Text>
            <Text style={styles.sectionSubtitle}>Fill out your account information below.</Text>
          </View>
          <View style={styles.accountDetails}>
            <View style={styles.inputRow}>
              <CustomInputWithLabel
                rightIcon={true}
                label="First Name"
                placeholder="Type here..."
                value={fname}
                onChangeText={setFname}
                style={styles.inputHalf}
              />
              <CustomInputWithLabel
                rightIcon={true}
                label="Last Name"
                placeholder="Type here..."
                value={lname}
                onChangeText={setLname}
                style={styles.inputHalf}
              />
            </View>
            <View style={styles.inputFull}>
              <CustomInputWithLabel
                rightIcon={true}
                label="Email Address"
                placeholder="Type here..."
                value={email}
                onChangeText={validateEmail}
                style={styles.inputFullWidth}
              />
              {emailError ? <Text style={{ color: 'red', left: -68 }}>{emailError}</Text> : null}

              <CustomInputWithLabel
                rightIcon={true}
                label="Password"
                placeholder="Type here..."
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                style={styles.inputFullWidth}
              />
            </View>
          </View>
        </View>
        <BaseButton
          label={'Submit'}
          onPress={() => {
            saveData();
            onNext();
          }}
          disabled={!isFormValid} // Disable button if any field is empty
        />
      </ScrollView>
    </BaseLayout>
  );
};

export default CreateAccountStep1;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    paddingHorizontal: 20,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    gap: 5,
    bottom: 0,
  },
  sectionTitle: {
    fontSize: 25,
    color: '#000',
    fontWeight: '500',
  },
  sectionSubtitle: {
    fontSize: 15,
    color: '#000',
    fontWeight: '400',
  },
  bonusCard: {
    width: DEVICE_STYLES.SCREEN_WIDTH * 0.8,
    height: DEVICE_STYLES.SCREEN_HEIGHT * 0.3,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 15,
  },
  selectedBonus: {
    borderColor: '#ff0000',
  },
  selectedTagContainer: {
    marginVertical: 20,
    marginHorizontal: 0,
    marginBottom: 40,
    alignSelf: 'flex-end',
    width: 120,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTag: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bonusContent: {
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
  bonusTitle: {
    fontSize: 25,
  },
  bonusSubtitle: {
    fontSize: 13,
    bottom: 20,
  },
  bonusFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  tcText: {
    textDecorationLine: 'underline',
    fontSize: 15,
    fontWeight: '500',
  },
  ageRestriction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ageText: {
    fontSize: 15,
    fontWeight: '500',
  },
  linkText: {
    textDecorationLine: 'underline',
    fontSize: 15,
    fontWeight: '500',
  },
  promocodeSection: {
    paddingHorizontal: 20,
    gap: 15,
    marginTop: 15,
    paddingVertical: 10,
  },
  promocodeText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '300',
  },
  promocodeInput: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 0.15,
    borderRadius: 10,
    justifyContent: 'center',
    paddingRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  promocodeButton: {
    height: 35,
    width: 100,
    // alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: 10,
    alignItems: 'center',
  },
  promocodeButtonText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '600',
  },
  accountDetails: {
    paddingHorizontal: 10,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'center',
  },
  inputHalf: {
    width: '45%',
  },
  inputFull: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputFullWidth: {
    width: '92%',
  },
});
