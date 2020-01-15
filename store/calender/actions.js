export function addFood(food) {
  return dispatch =>
    new Promise(async (resolve, reject) => {
      const payload = {
        food,
      }

      return resolve(
        dispatch({
          type: 'ADD_FOOD',
          data: payload,
        }),
      )
    })
}

export function setSelectedDate(date) {
  return dispatch =>
    new Promise(async (resolve, reject) => {
      const payload = {
        date,
      }

      return resolve(
        dispatch({
          type: 'SET_DATE',
          data: payload,
        }),
      )
    })
}

export function setReview(review, score) {
  return dispatch =>
    new Promise(async (resolve, reject) => {
      const payload = {
        review,
        score,
      }
      return resolve(
        dispatch({
          type: 'SET_REVIEW',
          data: payload,
        }),
      )
    })
}

export function resetCalender() {
  return dispatch =>
    new Promise(async (resolve, reject) => {
      return resolve(
        dispatch({
          type: 'RESET_CALENDER',
          data: null,
        }),
      )
    })
}
