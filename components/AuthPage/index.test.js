import React from 'react'
import renderer from 'react-test-renderer'
import AuthPage from './index.js'
import {render, fireEvent} from 'react-native-testing-library'

describe('Auth Page', () => {
  jest.useFakeTimers()
  //Use timer because buttons use a timeout then call setAuthComplete

  it(`renders correctly`, () => {
    const tree = renderer.create(<AuthPage />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should call setAuthComplete onPress of Facebook Button', () => {
    const setAuthComplete = jest.fn()
    const {getByTestId} = render(<AuthPage setAuthComplete={setAuthComplete} />)

    fireEvent(getByTestId('facebookButton'), 'onPress', true)
    //console.log(setTimeout.mock.calls[1][0].toString())
    jest.runAllTimers()
    expect(setAuthComplete).toBeCalled()
  })

  it('should call setAuthComplete onPress of Google Button', () => {
    const setAuthComplete = jest.fn()
    const {getByTestId} = render(<AuthPage setAuthComplete={setAuthComplete} />)

    fireEvent(getByTestId('facebookButton'), 'onPress', true)
    //console.log(setTimeout.mock.calls[1][0].toString())
    jest.runAllTimers()
    expect(setAuthComplete).toBeCalled()
  })
})
