import React from 'react'
import {Platform} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import StatsScreen from '../screens/StatsScreen'
import SettingsScreen from '../screens/SettingsScreen'

import colors from '../constants/Colors'

const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {},
})

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config,
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
  tabBarOptions: {
    activeTintColor: colors.tabIconSelected,
  },
}

HomeStack.path = ''

const StatsStack = createStackNavigator(
  {
    Stats: StatsScreen,
  },
  config,
)

StatsStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
  tabBarOptions: {
    activeTintColor: colors.tabIconSelected,
  },
}

StatsStack.path = ''

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config,
)

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
  tabBarOptions: {
    activeTintColor: colors.tabIconSelected,
  },
}

SettingsStack.path = ''

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  StatsStack,
  SettingsStack,
})

tabNavigator.path = ''

export default tabNavigator
