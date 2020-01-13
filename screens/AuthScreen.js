import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {Title, Subheading, Button, Text} from 'react-native-paper'

class AuthPage extends component() {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo2.png')}
          style={styles.logoImage}
        />
        <Image
          source={require('../assets/images/welcome-food.jpg')}
          style={styles.welcomeImage}
        />
        <View style={styles.authContainer}>
          <Button
            icon="google"
            mode="contained"
            color="white"
            style={styles.authButton}
            onPress={handleSocialPress}>
            Login With Google
          </Button>
          <Button
            icon="facebook"
            mode="contained"
            color="blue"
            style={styles.authButton}
            onPress={handleSocialPress}>
            Login With Facebook
          </Button>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>
            These buttons are just fake buttons, I haven't connected it to any
            providers. Also this is an aesthetic bottom text filler sentence.
          </Text>
        </View>
      </View>
    )
  }
}

function handleSocialPress() {}

AuthScreen.navigationOptions = {
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
    marginTop: 20,
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
    resizeMode: 'contain',
    flex: 3,
    marginBottom: 50,
  },
})

module.exports = authPage
