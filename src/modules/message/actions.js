export const changeMessage = message => dispatch => {
  console.log(message)
  dispatch({
    type: 'CHANGE_MESSAGE',
    message,
  })
}