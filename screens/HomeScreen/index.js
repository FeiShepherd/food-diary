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
import {MonoText} from '../../components/StyledText'
import colors from '../../constants/Colors'
import CalendarStrip from 'react-native-calendar-strip'
import moment from 'moment'
import {connect} from 'react-redux'
import {AddItem, setSelectedDate} from '../../store/calender/actions'
import styles from './styles.js'
import ReviewStars from '../../components/ReviewStars'

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
            textStyle={styles.chipText}
            mode="outlined"
            onClose={() => console.log('Pressed')}>
            Carrots
          </Chip>
          <Chip
            style={styles.chip}
            textStyle={styles.chipText}
            mode="outlined"
            onClose={() => console.log('Pressed')}>
            Lettuce
          </Chip>
          <Chip
            style={styles.chip}
            textStyle={styles.chipText}
            mode="outlined"
            onClose={() => console.log('Pressed')}>
            Burger
          </Chip>
          <Chip
            style={styles.chip}
            textStyle={styles.chipText}
            mode="outlined"
            onClose={() => console.log('Pressed')}>
            Pepper
          </Chip>
          <Chip
            style={styles.chip}
            textStyle={styles.chipText}
            mode="outlined"
            onClose={() => console.log('Pressed')}>
            Onions
          </Chip>
          <Chip
            style={styles.chip}
            textStyle={styles.chipText}
            mode="outlined"
            onClose={() => console.log('Pressed')}>
            Sausages
          </Chip>
        </View>
        <Text style={styles.review}>How did you feel today?</Text>
        <ReviewStars />
        <Text style={styles.review}>
          How was your bathroom experience today?
        </Text>

        <ReviewStars />
        <Text style={styles.review}>How was your energy today?</Text>

        <ReviewStars />
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
