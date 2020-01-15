import auth from './auth/reducers'
import calender from './calender/reducers'

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true
    default:
      return state
  }
}

export default {
  rehydrated,
  auth,
  calender
}
