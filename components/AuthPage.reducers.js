export const initialState = {
  token: false,
  isLoading: false,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN': {
      if (action.data) {
        return {
          ...state,
          isLoading: false,
          token: action.data.token,
        }
      }

      return state
    }
    case 'USER_LOGOUT': {
      if (action.data) {
        return {
          ...state,
          isLoading: false,
          token: false,
        }
      }

      return state
    }

    default:
      return state
  }
}
