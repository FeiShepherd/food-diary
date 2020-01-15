import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import {StyleSheet, View} from 'react-native'

const starSize = 20

export default function TabBarIcon(props) {
  return (
    <View style={styles.starContainer}>
      <Ionicons name="md-star" size={starSize} style={styles.star} />
      <Ionicons name="md-star" size={starSize} style={styles.star} />
      <Ionicons name="md-star" size={starSize} style={styles.star} />
      <Ionicons name="md-star" size={starSize} style={styles.star} />
      <Ionicons name="md-star" size={starSize} style={styles.star} />
    </View>
  )
}

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    marginBottom:10
  },
  star: {
    color: 'grey'
  },
})
