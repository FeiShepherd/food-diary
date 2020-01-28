import React, {useState} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Button, Searchbar} from 'react-native-paper'
import PropTypes from 'prop-types'

export default function SearchBox(props) {
  const [query, setQuery] = useState('')

  const addFood = text => {
    props.addFood(text)
    setQuery('')
  }

  const renderResults = () => {
    const queryButton = (
      <Button
        key={`-1-btn`}
        style={styles.btn}
        color="white"
        mode="contained"
        onPress={() => addFood(query)}>
        {query}
      </Button>
    )

    if (query === '') {
      return null
    } else if (props.items) {
      let searchList = []

      Object.keys(props.items).map(item => {
        props.items[item].foods.map(food => {
          if (food.indexOf(query) >= 0 && searchList.indexOf(food) === -1 && food !== query) {
            searchList.push(food)
          }
        })
      })
      console.log(searchList)
      return [
        queryButton,
        ...searchList.map((text, index) => (
          <Button
            color="white"
            mode="contained"
            key={`${index}-btn`}
            style={styles.btn}
            onPress={() => addFood(text)}>
            {text}
          </Button>
        )),
      ]
    } else {
      return queryButton
    }
  }

  return (
    <View>
      <Searchbar placeholder="Search" onChangeText={setQuery} value={query} />
      <View style={styles.container}>{renderResults()}</View>
    </View>
  )
}

/*...Object.keys(props.items)
          .reduce((total, element) => {
            if (props.items[element].foods.length) {
              return total.concat(
                props.items[element].foods.filter(food => {
                  if (food === query) return false
                  return food.indexOf(query) >= 0
                }),
              )
            } else {
              return total
            }
          }, [])*/

const styles = StyleSheet.create({
  btn: {
    margin: 5,
  },
  container: {
    flexDirection: 'row',
  },
})

SearchBox.propTypes = {
  items: PropTypes.object.isRequired,
}
