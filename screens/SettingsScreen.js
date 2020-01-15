import React from 'react'
import {ExpoConfigView} from '@expo/samples'
import {View} from 'react-native'
import {Button} from 'react-native-paper'
import {connect} from 'react-redux'
import {FakeLogout} from '../store/auth/actions'

const _SettingsScreen = props => {
  return (
    <View>
      <Button onPress={props.FakeLogout}>Logout</Button>
    </View>
  )
}

_SettingsScreen.navigationOptions = {
  header: null,
}

const mapDispatchToProps = {
  FakeLogout,
}

const SettingsScreen = connect(null, mapDispatchToProps)(_SettingsScreen)

export default SettingsScreen
