import React from 'react'
import renderer from 'react-test-renderer'
import {render, fireEvent, act} from 'react-native-testing-library'
import SettingsScreen from './SettingsScreen.js'

describe('Settings Screen', () => {
  it(`renders the settings screen`, () => {
    const tree = renderer.create(<SettingsScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
