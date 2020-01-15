import React from 'react'
import NavigationTestUtils from 'react-navigation/NavigationTestUtils'
import renderer from 'react-test-renderer'
import {render, fireEvent, act} from 'react-native-testing-library'
import App, {
  loadResourcesAsync,
  handleLoadingError,
  handleFinishLoading,
} from '../App'

import {Asset} from 'expo-asset'
import * as Font from 'expo-font'


jest.mock('expo-asset')
jest.mock('expo-font')

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}))

jest.mock('../navigation/AppNavigator', () => 'AppNavigator')

describe('App', () => {
  jest.useFakeTimers()

  beforeEach(() => {
    NavigationTestUtils.resetInternalState()
  })

  it(`renders the loading screen`, () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`renders the root without loading screen`, () => {
    const tree = renderer.create(<App skipLoadingScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`renders App Navigator after clicking social media buttons`, () => {
    const {getByName, getByTestId} = render(<App skipLoadingScreen />)

    act(() => {
      fireEvent(getByTestId('facebookButton'), 'onPress', true)
      jest.runAllTimers()
    })

    expect(getByTestId('AppNavigator')).toBeDefined()
  })

  it(`renders view after loading`, () => {
    const {getByTestId} = render(<App />)
    act(() => {
      getByTestId('AppLoading').props.onFinish()
    })
    expect(getByTestId('AppView')).toBeDefined()
  })

  it(`sets setLoadingComplete with true`, () => {
    const setLoadingComplete = jest.fn()
    handleFinishLoading(setLoadingComplete)
    expect(setLoadingComplete).toHaveBeenCalledWith(true)
  })

  it(`calls console.warn with error`, () => {
    const consoleWarnMock = jest.fn()
    const originalConsoleWarn = console.warn

    console.warn = consoleWarnMock
    handleLoadingError('error')
    expect(console.warn).toBeCalledWith('error')

    console.warn = originalConsoleWarn
  })
  it(`loads assets`, async () => {
    await loadResourcesAsync()
    expect(Asset.loadAsync.mock.calls[0][0].length).toBeGreaterThan(0)
  })
})
