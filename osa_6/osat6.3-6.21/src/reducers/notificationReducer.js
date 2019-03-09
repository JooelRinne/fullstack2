const initialState = {
  notification: null
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('SHOW'):
      const newState = {
        notification: action.notification
      }
      return newState
    case ('HIDE'):
      return initialState
    default:
      return state
  }
}

export const setNotification = (content, seconds) => {
  const time = seconds * 1000
  return async dispatch => {
    await dispatch({
      type: 'SHOW',
      notification: content
    })
    await setTimeout(() => {
      dispatch({
        type: 'HIDE'
      })
    }, time)
  }
}

export default notificationReducer