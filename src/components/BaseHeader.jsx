import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DEVICE_STYLES } from '../utils/theme'
import { Menu } from '../assest/Image'

const BaseHeader = ({ name }) => {
  return (
    <View
      style={{
        height: DEVICE_STYLES.SCREEN_HEIGHT * 0.1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
      }}>
      <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
        <Image resizeMode='contain' style={{ width: "100%", height: "100%", }} source={Menu} />
      </View>
      <View style={{ width: 100, height: 40, backgroundColor: '#fff', elevation: 10, borderWidth: .2, borderColor: 'gray', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#000', fontSize: 15, fontWeight: '600' }}>{name}</Text>
      </View>
    </View>
  )
}

export default BaseHeader

const styles = StyleSheet.create({})