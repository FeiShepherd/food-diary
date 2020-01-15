import {StyleSheet} from 'react-native'

module.exports = StyleSheet.create({
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
