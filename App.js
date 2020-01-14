import {AppLoading} from 'expo'
import {Asset} from 'expo-asset'
import * as Font from 'expo-font'
import React, {useState} from 'react'
import {Platform, StatusBar, StyleSheet, View} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

//redux
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/es/integration/react'
import configureStore from './app/store'

import AppContainer from './components/AppContainer'

const {persistor, store} = configureStore()

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false)
  const [isAuthComplete, setAuthComplete] = useState(false)

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        testID="AppLoading"
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    )
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    )
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      ...Ionicons.font,
    }),
  ])
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error)
}

function handleFinishLoading(setLoadingComplete) {
  console.log('finished')
  setLoadingComplete(true)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export {App, handleLoadingError, handleFinishLoading, loadResourcesAsync}
