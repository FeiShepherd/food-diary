export function AddItem(item) {
  return dispatch =>
    new Promise(async (resolve, reject) => {
      const payload = {
        item,
      }
      return resolve(
        dispatch({
          type: 'ADD_ITEM',
          data: payload,
        }),
      )
    }).catch(async err => {
      throw err.message
    })
}

export function setSelectedDate(date) {
  return dispatch =>
    new Promise(async (resolve, reject) => {
      const payload = {
        date
      }

      return resolve(
        dispatch({
          type: 'SET_DATE',
          data: payload,
        }),
      )
    })
}
