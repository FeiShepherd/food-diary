export const initialState = {
  items: {}, //use obj/key that way can just overwrite for update/remove
  selectedDate: '',
}

export default function calender(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FOOD': {
      if (action.data) {
        const {food} = action.data
        return {
          ...state,
          items: {
            ...state.items,
            [state.selectedDate]: {
              ...state.items[state.selectedDate],
              foods: [
                ...state.items[state.selectedDate].foods || [], //add empty array if doesnt exist, temp fix
                food
              ]
            },
          },
        }
      }
      return state
    }

    case 'SET_REVIEW': {
      if (action.data) {
        const {review, score} = action.data
        return {
          ...state,
          items: {
            ...state.items,
            [state.selectedDate]: {
              ...state.items[state.selectedDate],
              [review]: score,
            },
          },
        }
      }
      return state
    }

    case 'SET_DATE': {
      if (action.data) {
        const {date} = action.data

        if (date in state.items) {
          return {
            ...state,
            selectedDate: date,
          }
        } else {
          return {
            ...state,
            items: {
              ...state.items,
              [date]: {
                foods: [],
                energy: -1,
                mood: -1,
                bathroom: -1,
              },
            },
            selectedDate: date,
          }
        }
      }
      return state
    }
    case 'RESET_CALENDER': {
      return initialState
    }

    default:
      return state
  }
}
