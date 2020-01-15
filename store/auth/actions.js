export function FakeLogin() {
  return dispatch =>
    new Promise(async (resolve, reject) => {
      //TODO: check login here
      const response = {
        token: true, //bool for temporarily
      }

      dispatch({
        type: 'USER_LOADING',
        data: null
      })

      setTimeout(() => {
        return resolve(
          dispatch({
            type: 'USER_LOGIN',
            data: response,
          }),
        )
      }, 1500)
    }).catch(async err => {
      throw err.message
    })
}

export function FakeLogout() {
  return dispatch =>
    new Promise(async (resolve, reject) => {
      return resolve(
        dispatch({
          type: 'USER_LOGOUT',
          data: null, //temp logout system
        }),
      )
    }).catch(async err => {
      throw err.message
    })
}
