import React from 'react'
import renderer from 'react-test-renderer'
import AuthPage from './index.js'
import {render, fireEvent} from 'react-native-testing-library'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

import {FakeLogin} from '../../store/auth/actions'
jest.mock('../../store/auth/actions')

const mockStore = configureStore([])

describe('Auth Page', () => {
  jest.useFakeTimers()

  beforeEach(() => {
    store = mockStore({
      auth: {isLoading: false, token: false},
    })
  })

  it(`renders correctly`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <AuthPage />
        </Provider>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('dispatches FakeLogin function on Facebook Button Click', () => {
    store.dispatch = jest.fn()
    const {getByTestId} = render(
      <Provider store={store}>
        <AuthPage />
      </Provider>,
    )

    fireEvent(getByTestId('facebookButton'), 'onPress', true)
    jest.runAllTimers()
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith(FakeLogin())
  })

  it('dispatches FakeLogin function on Google Button Click', () => {
    store.dispatch = jest.fn()
    const {getByTestId} = render(
      <Provider store={store}>
        <AuthPage />
      </Provider>,
    )

    fireEvent(getByTestId('googleButton'), 'onPress', true)
    jest.runAllTimers()
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith(FakeLogin())
  })
})
