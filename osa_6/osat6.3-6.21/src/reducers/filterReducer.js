const filterReducer = (state = null, action) => {
  switch (action.type) {
    case ('CHANGE'):
      return action.filter
    default:
      return state
  }
}

export const filterChange = filter => {
  if (filter === '') {
    filter = null
  }
  return {
    type: 'CHANGE',
    filter
  }
}

export default filterReducer