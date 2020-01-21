import React, {useState} from 'react'
import {View, Text} from 'react-native'
import {Button, Searchbar} from 'react-native-paper'
import PropTypes from 'prop-types'

export default function SearchBox(props) {
  const [query, setQuery] = useState('')

  const renderResults = () => {
    const history = [query]

    if (props.items) {
      return Object.keys(props.items)
        .reduce((total, element) => {
          if (props.items[element].foods.length) {
            return total.concat(
              props.items[element].foods.filter(food => {
                return food.indexOf(query) >= 0
              }),
            )
          } else {
            return total
          }
        }, [])
        .map((text, index) => (
          <Button key={`${index}-btn`} mode="contained">
            {text}
          </Button>
        ))
    } else {
      return (
        <Button key={`${index}-btn`} mode="contained">
          {query}
        </Button>
      )
    }
  }

  return (
    <View>
      <Searchbar placeholder="Search" onChangeText={setQuery} value={query} />
      {renderResults()}
    </View>
  )
}

SearchBox.propTypes = {
  items: PropTypes.object.isRequired,
}
