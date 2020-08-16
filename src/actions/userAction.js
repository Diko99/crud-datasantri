import axios from 'axios'

export const GET_USERS_LIST = 'GET_USERS_LIST'
export const GET_USERS_DETAIL = 'GET_USERS_DETAIL'
export const POST_USER_CREATE = 'POST_USER_CREATE'

export const getUsersList = () => {
  return dispatch => {
    axios.get('https://my-json-server.typicode.com/diko99/react-redux-json/users')
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

export const getUsersDetail = (id) => {
  return dispatch => {
    axios.get('https://my-json-server.typicode.com/diko99/react-redux-json/users/' + id)
      .then(response => {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(error => {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}

export const postUserCreate = (data) => {
  return dispatch => {
    axios.get('https://my-json-server.typicode.com/diko99/react-redux-json/users', data)
      .then(response => {
        console.log(response)
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(error => {
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}

export const deleteDataUser = () => {
  return dispatch => {
    dispatch({
      type: GET_USERS_DETAIL,
      payload: {
        data: false,
        errorMessage: false
      }
    })

    dispatch({
      type: POST_USER_CREATE,
      payload: {
        data: false,
        errorMessage: false
      }
    })
  }
}
