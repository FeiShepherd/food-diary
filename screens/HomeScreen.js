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

import {MonoText} from '../components/StyledText'
import colors from '../constants/Colors'
import CalendarStrip from 'react-native-calendar-strip'

export default function HomeScreen() {
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
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.homeBackground,
  },
  calender: {
    height: 100,
    paddingTop: 10,
    paddingBottom: 10,
  },
})
