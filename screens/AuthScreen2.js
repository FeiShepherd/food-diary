import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {Title, Subheading, Button, Text} from 'react-native-paper'

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/food-diary2.png')}
        style={styles.logoImage}
      />

      <Image
        source={require('../assets/images/welcome-food.jpg')}
        style={styles.welcomeImage}
      />
      <View style={styles.subheadingContainer}>
        <Subheading>Keep track of all your meals and feels.</Subheading>
      </View>
      <View style={styles.authContainer}>
        <Button
          icon="google"
          mode="contained"
          color="white"
          onPress={() => console.log('Pressed')}>
          Login With Google
        </Button>

        <Button
          icon="facebook"
          mode="contained"
          color="blue"
          style={{marginTop: 10}}
          onPress={() => console.log('Pressed')}>
          Login With Facebook
        </Button>
      </View>
      <Text style={styles.bottomText}>These buttons are just fake buttons, I haven't connected it to any providers. Also this is an aesthetic bottom text filler sentence.
      </Text>
    </View>
  )
}

AuthScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  logoImage: {
    resizeMode: 'contain',
    width: 350,
    height: 200
  },
  bottomText: {
    color: 'grey',
    padding: 20,
    fontSize: 10,
    marginTop: 20,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(246, 237, 228)',
  },
  welcomeImage: {
    width: 350,
    height: 230,
    resizeMode: 'contain',
    marginBottom: 80,
    marginTop: 0,
  },
  authcontainer: {},
  subheadingContainer: {
    marginBottom: 130,
  },
})
