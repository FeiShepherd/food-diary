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
import {
  removeFood,
  addFood,
  setReview,
  setSelectedDate,
} from '../../store/calender/actions'
import styles from './styles.js'
import ReviewStars from '../../components/ReviewStars'
import SearchBox from '../../components/SearchBox'

class _HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.props.setSelectedDate(formatDate(moment().format()))
  }
  render() {
    const renderSearchBox = items => {
      if (items) return <SearchBox items={items} addFood={this.props.addFood} />
      return null
    }
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
          setSelectedDate={() => moment().format()}
          onDateSelected={date => {
            this.setState({foodText: ''})
            this.props.setSelectedDate(formatDate(date))
          }}
          calendarHeaderStyle={{color: colors.calenderHighlight}}
          calendarColor={colors.calenderBackground}
          dateNumberStyle={{color: colors.calenderStyle}}
          dateNameStyle={{color: colors.calenderStyle}}
          highlightDateNumberStyle={{color: colors.calenderHighlight}}
          highlightDateNameStyle={{color: colors.calenderHighlight}}
          disabledDateNameStyle={{color: colors.calenderDisabled}}
          disabledDateNumberStyle={{color: colors.calenderDisabled}}
          iconContainer={{flex: 0.1}}
          markedDates={Object.keys(this.props.items).map((key, index) => {
            return {
              date: convertDate(key),
              dots: [
                {
                  key: `${key}-${index}`,
                  color: 'blue',
                  selectedDotColor: 'blue',
                },
              ],
            }
          })}
        />
        <View style={styles.cardContainer}>
          {renderSearchBox(this.props.items)}
          <ScrollView style={styles.scrollView}>
            <View style={styles.chipContainer}>
              {this.props.selectedDate &&
              this.props.selectedDate in this.props.items
                ? this.props.items[this.props.selectedDate].foods.map(
                    (food, index) => {
                      return (
                        <Chip
                          key={index}
                          style={styles.chip}
                          textStyle={styles.chipText}
                          mode="outlined"
                          onClose={() => this.props.removeFood(index)}>
                          {food}
                        </Chip>
                      )
                    },
                  )
                : null}
            </View>
          </ScrollView>
          {this.props.selectedDate &&
          this.props.selectedDate in this.props.items ? (
            <View>
              <Text style={styles.review}>How did you feel today?</Text>
              <ReviewStars //TODO: Refactor these
                review={this.props.items[this.props.selectedDate].mood}
                set={score => this.props.setReview('mood', score)}
              />
              <Text style={styles.review}>
                How was your bathroom experience today?
              </Text>
              <ReviewStars
                review={this.props.items[this.props.selectedDate].bathroom}
                set={score => this.props.setReview('bathroom', score)}
              />
              <Text style={styles.review}>How was your energy today?</Text>
              <ReviewStars
                review={this.props.items[this.props.selectedDate].energy}
                set={score => this.props.setReview('energy', score)}
              />
            </View>
          ) : null}
        </View>
      </View>
    )
  }
}

_HomeScreen.navigationOptions = {
  header: null,
}

const convertDate = date => {
  return moment(date).format()
}

const formatDate = date => {
  return moment(date).format('LL')
}

const mapStateToProps = state => ({
  items: state.calender.items,
  selectedDate: state.calender.selectedDate,
})

const mapDispatchToProps = {
  setSelectedDate,
  setReview,
  addFood,
  removeFood,
}

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(_HomeScreen)

export default HomeScreen
