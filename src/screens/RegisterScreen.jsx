import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BaseLayout from '../components/BaseLayout'
import BaseHeader from '../components/BaseHeader'
import { bonuses } from '../mock/DummyData'
import { DEVICE_STYLES } from '../utils/theme'
import CustomInputWithLabel from '../components/CustomInputWithLabel'

const RegisterScreen = () => {
  const [selectedBonus, setSelectedBonus] = useState(null);

  return (
    <BaseLayout>
      <BaseHeader name={"Login"} />
      <ScrollView>
        <Text style={{ fontSize: 20, color: '#000', fontWeight: '600', paddingHorizontal: 20 }}>Create Account</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, borderTopWidth: .2, borderBottomWidth: .2, borderColor: 'gray', height: 50, marginVertical: 15, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={{ width: 30, height: 30, borderRadius: 20, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 15, fontWeight: '600' }}>1</Text>
            </View>
            <Text style={{ color: '#000', fontSize: 15, fontWeight: '600' }}>Welcome bonus & Account details</Text>
          </View>
          <View style={{ width: 30, height: 30, borderRadius: 20, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 15, fontWeight: '600' }}>1</Text>
          </View>
        </View>
        <View>
          <View style={{ paddingHorizontal: 20, gap: 5, marginTop: 15 }}>
            <Text style={{ fontSize: 25, color: '#000', fontWeight: '500' }}>Welcome Bonus</Text>
            <Text style={{ fontSize: 15, color: '#000', fontWeight: '400' }}>Pick form one of our exclusive welcomes bonuses!</Text>
          </View>
          <View>
            <FlatList
              data={bonuses}
              horizontal
              keyExtractor={(item) => item?.id?.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.bonusCard,
                    selectedBonus === item?.id && styles.selectedBonus
                  ]}
                  onPress={() => setSelectedBonus(item?.id)}
                >
                  {selectedBonus === item?.id && <View style={{ marginVertical: 20, marginHorizontal: 0, marginBottom: 40, alignSelf: 'flex-end', width: 120, height: 30, backgroundColor: 'red', borderRadius: 30, justifyContent: 'center', alignItems: 'center', }}>

                    <Text style={styles.selectedTag}>Selected</Text>
                  </View>}
                  <View style={{ position: 'absolute', bottom: 20, left: 10 }}>
                    <View>
                      <Text style={{ fontSize: 25, }}>{item.text}</Text>
                      <Text style={{ fontSize: 13, bottom: 20 }}>{item.text2}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                      <Text style={{ textDecorationLine: 'underline', fontSize: 15, fontWeight: '500' }}>T&Cs Apply</Text>

                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: '500' }}>18+</Text>
                        <Text style={{ textDecorationLine: 'underline', fontSize: 15, fontWeight: '500' }}>BeGambleAware.org</Text>
                      </View>
                    </View>
                  </View>


                </TouchableOpacity>
              )}
            />

          </View>
          <View style={{ paddingHorizontal: 20, gap: 15, marginTop: 15, paddingVertical: 10 }}>
            <Text style={{ fontSize: 15, color: '#000', fontWeight: '300' }}>Have a Promocode? Enter it here</Text>
            <View style={{ height: 50, backgroundColor: '#fff', borderWidth: .15, borderRadius: 10, justifyContent: 'center', paddingRight: 5 }}>
              <TouchableOpacity style={{ height: 35, width: 100, alignSelf: "flex-end", justifyContent: 'center', backgroundColor: 'rgba(0,0,0,.1)', borderRadius: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 15, color: '#000', fontWeight: '600' }}>USE CODE</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ paddingHorizontal: 20, gap: 5, marginTop: 15 }}>
            <Text style={{ fontSize: 20, color: '#000', fontWeight: '500' }}>Account Details</Text>
            <Text style={{ fontSize: 15, color: '#000', fontWeight: '400' }}>Pick form one of our exclusive welcomes bonuses!</Text>
          </View>
          <View style={{flexDirection:'row',gap:10,alignSelf:'center'}}>
            <CustomInputWithLabel
              label="First Name"
              placeholder="Type here..."
             style={{width:'45%'}}
            />
            <CustomInputWithLabel
              label="Last Name"
              placeholder="Type here..."
             style={{width:'45%'}}
            />
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <CustomInputWithLabel
              label="Email Address"
              placeholder="Type here..."
            //  style={{width:'45%'}}
            />
            <CustomInputWithLabel
              label="Password"
              placeholder="Type here..."
            //  style={{width:'45%'}}
            />
          </View>
        </View>
      </ScrollView>
    </BaseLayout>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  bonusCard: {
    width: DEVICE_STYLES.SCREEN_WIDTH * .8,
    height: DEVICE_STYLES.SCREEN_HEIGHT * .3,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 15,

  },
  selectedBonus: {
    borderColor: "#ff0000",
    // backgroundColor: "#ffe6e6"
  },
  selectedTag: {
    color: "#fff",
    fontWeight: "bold",
    // marginTop: 5,

    // paddingHorizontal: 20
  },
})