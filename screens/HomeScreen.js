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

import {Chip, Button, Card, Title, Paragraph} from 'react-native-paper'
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
      <Card style={styles.card}>
        <Card.Title subtitle={moment(props.selectedDate).format('MMM Do YY')} />
        <Card.Content>
          <Title>Food</Title>
          <View style={styles.foodContainer}>
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
          </View>
        </Card.Content>
        <Card.Content>
          <Title>Mood</Title>
          <Paragraph>carrots</Paragraph>
        </Card.Content>
        <Card.Content>
          <Title>Poop</Title>
          <Paragraph>carrots</Paragraph>
        </Card.Content>
        <Card.Content>
          <Title>Energy</Title>
          <Paragraph>carrots</Paragraph>
        </Card.Content>

        <Card.Actions>
          <Button
            widthn
            icon="floppy"
            mode="outlined"
            onPress={() => console.log('Pressed')}>
            Save
          </Button>
        </Card.Actions>
      </Card>
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
  container: {
    flex: 1,
    backgroundColor: colors.homeBackground,
  },
  card: {
    padding: 20,
    margin: 20,
  },
  foodContainer: {
  },
  chip: {},
  calender: {
    height: 100,
    paddingTop: 10,
    paddingBottom: 10,
  },
})
