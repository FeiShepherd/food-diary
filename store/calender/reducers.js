export const initialState = {
  items: {}, //use obj/key that way can just overwrite for update/remove
  selectedDate: ''
}

export default function calender(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      if (action.data) {
        const {item} = action.data
        return {
          ...state,
          items: {
            ...items,
            [item.date]: item,
          },
        }
      }
      return state
    }
    case 'SET_DATE': {
      if(action.data){
        const {date} = action.data
        return {
          ...state,
          selectedDate: date
        }
      }
    }

    default:
      return state
  }
}
