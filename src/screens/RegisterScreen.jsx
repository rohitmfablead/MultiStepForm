// import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'
// import BaseLayout from '../components/BaseLayout'
// import BaseHeader from '../components/BaseHeader'
// import { bonuses } from '../mock/DummyData'
// import { DEVICE_STYLES } from '../utils/theme'
// import CustomInputWithLabel from '../components/CustomInputWithLabel'
// import BaseButton from '../components/BaseButton'

// const RegisterScreen = () => {
//   const [selectedBonus, setSelectedBonus] = useState(null);

//   return (
//     <BaseLayout>
//       <BaseHeader name={"Login"} />
//       <ScrollView>
//         <Text style={styles.headerText}>Create Account</Text>
//         <View style={styles.stepContainer}>
//           <View style={styles.stepItem}>
//             <View style={styles.stepNumber}>
//               <Text style={styles.stepText}>1</Text>
//             </View>
//             <Text style={styles.stepDescription}>Welcome bonus & Account details</Text>
//           </View>
//           <View style={styles.stepNumber}>
//             <Text style={styles.stepText}>2</Text>
//           </View>
//         </View>
//         <View>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>Welcome Bonus</Text>
//             <Text style={styles.sectionSubtitle}>Pick from one of our exclusive welcome bonuses!</Text>
//           </View>
//           <FlatList
//             data={bonuses}
//             horizontal
//             keyExtractor={(item) => item?.id?.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={[
//                   styles.bonusCard,
//                   selectedBonus === item?.id && styles.selectedBonus
//                 ]}
//                 onPress={() => setSelectedBonus(item?.id)}
//               >
//                 {selectedBonus === item?.id && <View style={styles.selectedTagContainer}>
//                   <Text style={styles.selectedTag}>Selected</Text>
//                 </View>}
//                 <View style={styles.bonusContent}>
//                   <Text style={styles.bonusTitle}>{item.text}</Text>
//                   <Text style={styles.bonusSubtitle}>{item.text2}</Text>
//                   <View style={styles.bonusFooter}>
//                     <Text style={styles.tcText}>T&Cs Apply</Text>
//                     <View style={styles.ageRestriction}>
//                       <Text style={styles.ageText}>18+</Text>
//                       <Text style={styles.linkText}>BeGambleAware.org</Text>
//                     </View>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             )}
//           />
//           <View style={styles.promocodeSection}>
//             <Text style={styles.promocodeText}>Have a Promocode? Enter it here</Text>
//             <View style={styles.promocodeInput}>
//               <TouchableOpacity style={styles.promocodeButton}>
//                 <Text style={styles.promocodeButtonText}>USE CODE</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>Account Details</Text>
//             <Text style={styles.sectionSubtitle}>Fill out your account information below.</Text>
//           </View>
//           <View style={styles.accountDetails}>
//             <View style={styles.inputRow}>
//               <CustomInputWithLabel
//                 rightIcon
//                 label="First Name"
//                 placeholder="Type here..."
//                 style={styles.inputHalf}
//               />
//               <CustomInputWithLabel
//                 rightIcon
//                 label="Last Name"
//                 placeholder="Type here..."
//                 style={styles.inputHalf}
//               />
//             </View>
//             <View style={styles.inputFull}>
//               <CustomInputWithLabel
//                 rightIcon
//                 label="Email Address"
//                 placeholder="Type here..."
//                 style={styles.inputFullWidth}
//               />
//               <CustomInputWithLabel
//                 rightIcon
//                 label="Password"
//                 placeholder="Type here..."
//                 secureTextEntry={true}
//                 style={styles.inputFullWidth}
//               />
//             </View>
//           </View>
//         </View>
//         <BaseButton label={"Submit"} />
//       </ScrollView>
//     </BaseLayout>
//   )
// }

// export default RegisterScreen

// const styles = StyleSheet.create({
//   headerText: {
//     fontSize: 20,
//     color: '#000',
//     fontWeight: '600',
//     paddingHorizontal: 20
//   },
//   stepContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     borderTopWidth: 0.2,
//     borderBottomWidth: 0.2,
//     borderColor: 'gray',
//     height: 50,
//     marginVertical: 15,
//     alignItems: 'center'
//   },
//   stepItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10
//   },
//   stepNumber: {
//     width: 30,
//     height: 30,
//     borderRadius: 20,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   stepText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '600'
//   },
//   stepDescription: {
//     color: '#000',
//     fontSize: 15,
//     fontWeight: '600'
//   },
//   sectionHeader: {
//     paddingHorizontal: 20,
//     gap: 5,
//     marginTop: 15
//   },
//   sectionTitle: {
//     fontSize: 25,
//     color: '#000',
//     fontWeight: '500'
//   },
//   sectionSubtitle: {
//     fontSize: 15,
//     color: '#000',
//     fontWeight: '400'
//   },
//   bonusCard: {
//     width: DEVICE_STYLES.SCREEN_WIDTH * 0.8,
//     height: DEVICE_STYLES.SCREEN_HEIGHT * 0.3,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     marginTop: 20,
//     marginHorizontal: 20,
//     paddingHorizontal: 15
//   },
//   selectedBonus: {
//     borderColor: "#ff0000"
//   },
//   selectedTagContainer: {
//     marginVertical: 20,
//     marginHorizontal: 0,
//     marginBottom: 40,
//     alignSelf: 'flex-end',
//     width: 120,
//     height: 30,
//     backgroundColor: 'red',
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   selectedTag: {
//     color: "#fff",
//     fontWeight: "bold"
//   },
//   bonusContent: {
//     position: 'absolute',
//     bottom: 20,
//     left: 10
//   },
//   bonusTitle: {
//     fontSize: 25,
//   },
//   bonusSubtitle: {
//     fontSize: 13,
//     bottom: 20
//   },
//   bonusFooter: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 20
//   },
//   tcText: {
//     textDecorationLine: 'underline',
//     fontSize: 15,
//     fontWeight: '500'
//   },
//   ageRestriction: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 5
//   },
//   ageText: {
//     fontSize: 15,
//     fontWeight: '500'
//   },
//   linkText: {
//     textDecorationLine: 'underline',
//     fontSize: 15,
//     fontWeight: '500'
//   },
//   promocodeSection: {
//     paddingHorizontal: 20,
//     gap: 15,
//     marginTop: 15,
//     paddingVertical: 10
//   },
//   promocodeText: {
//     fontSize: 15,
//     color: '#000',
//     fontWeight: '300'
//   },
//   promocodeInput: {
//     height: 50,
//     backgroundColor: '#fff',
//     borderWidth: 0.15,
//     borderRadius: 10,
//     justifyContent: 'center',
//     paddingRight: 5
//   },
//   promocodeButton: {
//     height: 35,
//     width: 100,
//     alignSelf: "flex-end",
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,.1)',
//     borderRadius: 10,
//     alignItems: 'center'
//   },
//   promocodeButtonText: {
//     fontSize: 15,
//     color: '#000',
//     fontWeight: '600'
//   },
//   accountDetails: {
//     paddingHorizontal: 10
//   },
//   inputRow: {
//     flexDirection: 'row',
//     gap: 10,
//     alignSelf: 'center'
//   },
//   inputHalf: {
//     width: '45%'
//   },
//   inputFull: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   inputFullWidth: {
//     width: '92%'
//   }
// })



import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CreateAccountStep1 from "../components/CreateAccountStep1";
import CreateAccountStep2 from "../components/CreateAccountStep2";
import CreateAccountStep3 from "../components/CreateAccountStep3";
import ProgressBar from "../components/ProgressBar";
import BaseLayout from "../components/BaseLayout";
import BaseHeader from "../components/BaseHeader";



const RegisterScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const screens = [
    <CreateAccountStep1 onNext={() => setCurrentStep(1)} />,
    <CreateAccountStep2 onNext={() => setCurrentStep(2)} onPrevious={() => setCurrentStep(0)} />,
    <CreateAccountStep3 onPrevious={() => setCurrentStep(1)} />
  ];

  return (
    <BaseLayout>
      <BaseHeader name={"Login"} />
      <ProgressBar step={currentStep} />
      {screens[currentStep]}
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }
});

export default RegisterScreen;
