import React, {useState} from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {
  Title,
  Subheading,
  Button,
  Text,
  ActivityIndicator,
  Colors,
} from 'react-native-paper'

import {connect} from 'react-redux'
import {FakeLogin} from '../../store/auth/actions'


const _AuthPage = props => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo2.png')}
        style={styles.logoImage}
      />
      <Image
        source={require('../../assets/images/welcome-food.jpg')}
        style={styles.welcomeImage}
      />
      {props.isLoading? (
        <View style={styles.authContainer}>
          <ActivityIndicator animating={true} color={Colors.red800} />
        </View>
      ) : (
        <View style={styles.authContainer}>
          <Button
            icon="google"
            mode="contained"
            color="white"
            testID="googleButton"
            style={styles.authButton}
            onPress={props.FakeLogin}>
            Login With Google
          </Button>
          <Button
            testID="facebookButton"
            icon="facebook"
            mode="contained"
            color="blue"
            style={styles.authButton}
            onPress={props.FakeLogin}>
            Login With Facebook
          </Button>
        </View>
      )}
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          These buttons are just fake buttons, I haven't connected it to any
          providers. Also this is an aesthetic bottom text filler sentence.
        </Text>
      </View>
    </View>
  )
}

_AuthPage.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(246, 237, 228)',
  },
  logoImage: {
    resizeMode: 'contain',
    flex: 3,
    paddingTop: 20,
    backgroundColor: 'rgb(241, 201, 162)',
  },
  bottomTextContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  authContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  sloganContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    margin: 10,
    padding: 10,
  },
  bottomText: {
    color: 'grey',
    fontSize: 10,
    textAlign: 'center',
    padding: 10,
  },
  welcomeImage: {
    marginTop: 20,
    resizeMode: 'contain',
    flex: 3,
    marginBottom: 50,
  },
})

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  token: state.auth.token,
})

const mapDispatchToProps = {
  FakeLogin,
}

const AuthPage = connect(mapStateToProps, mapDispatchToProps)(_AuthPage)

export default AuthPage
