export const loginSuccess = (email,password) =>({
  type:'LOGIN_SUCCESS',
  payload:{email,password}
})

export const loginFailure = () =>({
  type:'LOGIN_FAILURE'
})
