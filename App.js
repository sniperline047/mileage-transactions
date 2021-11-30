import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './navigation/DrawerNavigation'
import { AppTheme, ComponentTheme } from './theme/Theme'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store/store'

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={ComponentTheme}>
        <NavigationContainer theme={AppTheme}>
          <StatusBar style="light" />
          <DrawerNavigation />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  )
}
