import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigations/StackNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
   <SafeAreaProvider>
    <NavigationContainer>
    <StackNavigation/>
   </NavigationContainer>
   </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})