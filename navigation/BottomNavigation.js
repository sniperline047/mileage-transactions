import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DrawerToggleButton } from '@react-navigation/drawer'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors as c } from '../theme/Theme'

// screens
import { Home, Timeline } from '../screens'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          paddingBottom: 4,
          paddingTop: 4,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarHideOnKeyboard: true,
        headerLeft: () => <DrawerToggleButton tintColor={c.primary} />,
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: 'home',
            Timeline: 'chart-timeline-variant',
          }

          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={color}
              size={size}
            />
          )
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Timeline" component={Timeline} />
    </Tab.Navigator>
  )
}

export default BottomNavigation
