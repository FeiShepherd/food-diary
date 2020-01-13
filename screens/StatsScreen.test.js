import React from 'react'
import renderer from 'react-test-renderer'
import {render, fireEvent, act} from 'react-native-testing-library'
import StatsScreen from './StatsScreen.js'

describe('Stats Screen', () => {
  it(`renders the Stats screen`, () => {
    const tree = renderer.create(<StatsScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
