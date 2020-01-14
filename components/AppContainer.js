import React from 'react'
import {Text, Platform, View, StatusBar, StyleSheet} from 'react-native'
import AuthPage from './AuthPage'
import AppNavigator from '../navigation/AppNavigator'
import {connect} from 'react-redux'

const _AppContainer = props => {
  const {token} = props

  return (
    <View testID="AppView" style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      {token ? <AppNavigator testID="AppNavigator" /> : <AuthPage />}
    </View>
  )
}

const mapStateToProps = state => ({
  token: state.auth.token,
})

const AppContainer = connect(mapStateToProps)(_AppContainer)

export default AppContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
