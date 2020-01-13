import React from 'react'
import renderer from 'react-test-renderer'
import {render, fireEvent, act} from 'react-native-testing-library'
import AppNavigator from './AppNavigator'
import {createSwitchNavigator} from 'react-navigation'
import MainTabNavigator from './MainTabNavigator'

describe('Home Screen', () => {
  it(`has 3 routes for navigation`, () => {
    createSwitchNavigator({
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainTabNavigator,
    })
    expect(Object.keys(MainTabNavigator.router.childRouters).length).toBe(3)
  })
})
