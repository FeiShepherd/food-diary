import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import {StyleSheet, View} from 'react-native'
import PropTypes from 'prop-types'
import {Button} from 'react-native-paper'
const starSize = 20

export default function ReviewStars(props) {
  return (
    <View style={styles.starContainer}>
      <Button mode="text" style={styles.button} onPress={() => props.set(0)}>
        <Ionicons
          style={props.review >= 0 ? styles.activatedStar : styles.star}
          name="md-star"
          size={starSize}
        />
      </Button>

      <Button mode="text" style={styles.button} onPress={() => props.set(1)}>
        <Ionicons
          style={props.review >= 1 ? styles.activatedStar : styles.star}
          name="md-star"
          size={starSize}
        />
      </Button>

      <Button mode="text" style={styles.button} onPress={() => props.set(2)}>
        <Ionicons
          style={props.review >= 2 ? styles.activatedStar : styles.star}
          name="md-star"
          size={starSize}
        />
      </Button>

      <Button mode="text" style={styles.button} onPress={() => props.set(3)}>
        <Ionicons
          style={props.review >= 3 ? styles.activatedStar : styles.star}
          name="md-star"
          size={starSize}
        />
      </Button>

      <Button mode="text" style={styles.button} onPress={() => props.set(4)}>
        <Ionicons
          style={props.review >= 4 ? styles.activatedStar : styles.star}
          name="md-star"
          size={starSize}
        />
      </Button>
    </View>
  )
}

ReviewStars.propTypes = {
  review: PropTypes.number.isRequired,
  set: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  activatedStar: {
    color: 'blue',
  },
  star: {
    color: 'grey',
  },
  button: {
    backgroundColor: 'white',
  },
})
