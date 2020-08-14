import axios from 'axios'

export const GET_USERS_LIST = 'GET_USERS_LIST'

export const getUsersList = () => {
  return dispatch => {
    axios.get('https://my-json-server.typicode.com/diko99/react-redux-json/userss')
      .then(response => {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(error => {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}
