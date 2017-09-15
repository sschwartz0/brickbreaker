const initialState = {
  message: 'yo'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'CHANGE_MESSAGE': {
      console.log(action)
      const { message } = action;
      return {
        ...state,
        message,
      }
    }

    default:
      return state
  }
}

export default reducer;