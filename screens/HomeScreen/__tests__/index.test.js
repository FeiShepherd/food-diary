import React from 'react'
import renderer from 'react-test-renderer'
import {render, fireEvent, act} from 'react-native-testing-library'
import HomeScreen from '../index.js'

describe('Home Screen', () => {
  it(`renders the home screen`, () => {
    const tree = renderer.create(<HomeScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
