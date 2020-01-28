import {StyleSheet} from 'react-native'
import colors from '../../constants/Colors'

module.exports = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  textInput: {
    flex:10,
    height: 40,
    fontSize: 13
  },
  addInput: {
    flex:1,
    backgroundColor: 'blue'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.homeBackground,
  },
  cardContainer: {
    padding: 20,
  },
  scrollView: {
    backgroundColor: '#cccccc',
    height: 100,
  },
  foodContainer: {},
  chipContainer: {
    padding: 5,
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    height: 100,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  star: {
    paddingLeft: 14,
  },
  review: {
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  chipText: {
    fontSize: 12,
  },
  chip: {
    margin: 1,
    padding: 0,
  },
  calender: {
    height: 150,
    paddingTop: 20,
    paddingBottom: 10,
  },
})
