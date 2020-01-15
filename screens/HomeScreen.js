import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native'

import {
  TextInput,
  List,
  Chip,
  Button,
  Card,
  Title,
  Paragraph,
  FAB,
} from 'react-native-paper'
import {MonoText} from '../components/StyledText'
import colors from '../constants/Colors'
import CalendarStrip from 'react-native-calendar-strip'
import moment from 'moment'
import {connect} from 'react-redux'
import {AddItem, setSelectedDate} from '../store/calender/actions'

const _HomeScreen = props => {
  return (
    <View style={styles.container}>
      <CalendarStrip
        style={styles.calender}
        calendarAnimation={{type: 'sequence', duration: 30}}
        daySelectionAnimation={{
          type: 'background',
          duration: 200,
          highlightColor: colors.calenderBorder,
        }}
        onDateSelected={props.setSelectedDate}
        calendarHeaderStyle={{color: colors.calenderHighlight}}
        calendarColor={colors.calenderBackground}
        dateNumberStyle={{color: colors.calenderStyle}}
        dateNameStyle={{color: colors.calenderStyle}}
        highlightDateNumberStyle={{color: colors.calenderHighlight}}
        highlightDateNameStyle={{color: colors.calenderHighlight}}
        disabledDateNameStyle={{color: colors.calenderDisabled}}
        disabledDateNumberStyle={{color: colors.calenderDisabled}}
        iconContainer={{flex: 0.1}}
      />
      <View style={styles.cardContainer}>
        <TextInput label="Carrots" onChangeText={text => console.log({text})} />
        <View style={styles.chipContainer}>
          <Chip
            style={styles.chip}
            mode="outlined"
            onClose={() => console.log('Pressed')}>
            Carrots
          </Chip>
          <Chip
            style={styles.chip}
            mode="outlined"
            onClose={() => console.log('Pressed')}>
            Lettuce
          </Chip>
          <Chip
            style={styles.chip}
            mode="outlined"
            onClose={() => console.log('Pressed')}>
            Burger
          </Chip>
          <Chip
            style={styles.chip}
            mode="outlined"
            onClose={() => console.log('Pressed')}>
            Pepper
          </Chip>
          <Chip
            style={styles.chip}
            mode="outlined"
            onClose={() => console.log('Pressed')}>
            Onions
          </Chip>
          <Chip
            style={styles.chip}
            mode="outlined"
            onClose={() => console.log('Pressed')}>
            Onions
          </Chip>
        </View>
        <Text style={styles.review}>How did you feel today?</Text>
        <View style={styles.starContainer}>
          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            onPress={() => console.log('Pressed')}></Button>

          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            onPress={() => console.log('Pressed')}></Button>

          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            onPress={() => console.log('Pressed')}></Button>

          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            onPress={() => console.log('Pressed')}></Button>

          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            color="grey"
            onPress={() => console.log('Pressed')}></Button>
        </View>
        <Text style={styles.review}>
          How was your bathroom experience today?
        </Text>
        <View style={styles.starContainer}>
          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            onPress={() => console.log('Pressed')}></Button>

          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            onPress={() => console.log('Pressed')}></Button>

          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            color="grey"
            onPress={() => console.log('Pressed')}></Button>

          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            color="grey"
            onPress={() => console.log('Pressed')}></Button>

          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            color="grey"
            onPress={() => console.log('Pressed')}></Button>
        </View>

        <Text style={styles.review}>How was your energy today?</Text>
        <View style={styles.starContainer}>
          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            onPress={() => console.log('Pressed')}></Button>

          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            onPress={() => console.log('Pressed')}></Button>

          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            onPress={() => console.log('Pressed')}></Button>

          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            onPress={() => console.log('Pressed')}></Button>

          <Button
            style={styles.star}
            icon="star"
            mode="outlined"
            color="grey"
            onPress={() => console.log('Pressed')}></Button>
        </View>
      </View>
      <FAB
        style={styles.fab}
        medium
        icon="floppy"
        onPress={() => console.log('Pressed')}
      />
    </View>
  )
}

_HomeScreen.navigationOptions = {
  header: null,
}

const mapStateToProps = state => ({
  items: state.calender.items,
  selectedDate: state.calender.selectedDate,
})

const mapDispatchToProps = {
  AddItem,
  setSelectedDate,
}

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(_HomeScreen)

export default HomeScreen

const styles = StyleSheet.create({
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
  foodContainer: {},
  chipContainer: {
    paddingTop: 15,
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    flexDirection: 'row',
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
  chip: {
    margin: 2,
  },
  calender: {
    height: 100,
    paddingTop: 10,
    paddingBottom: 10,
  },
})
