import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomNavigation from './BottomNavigation'
import { Colors as c } from '../theme/Theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { AddorEdit } from '../screens'

const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        drawerStyle: {
          width: 200,
        },
        drawerActiveBackgroundColor: c.secondary,
        drawerInactiveBackgroundColor: c.background,
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={BottomNavigation}
        options={{
          title: 'Home',
          drawerItemStyle: {
            elevation: 10,
          },
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="home"
              size={size}
              color={focused ? c.primary : c.secondary}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Add"
        component={AddorEdit}
        options={{
          title: 'Add Expense',
          drawerItemStyle: {
            elevation: 10,
          },
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="comment-plus"
              size={size}
              color={focused ? c.primary : c.secondary}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}
