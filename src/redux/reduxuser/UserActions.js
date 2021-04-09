import axios from 'axios'
import {
   
    USER_REQUEST, USER_SUCCESS, USER_FAILURE,
    DELETE_USER_REQUEST,DELETE_USER_SUCCESS,DELETE_USER_FAILURE,
    UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,UPDATE_USER_FAILURE,
    LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE

  } from './UserTypes'

 //Action Creator
 const registerRequest = () => {
  return {
    type: USER_REQUEST
  }
}

//Action Creator
const registerSuccess = user => {
  return {
    type: USER_SUCCESS,
    payload: user
  }
}

//Action Creator
const registerFailure = error => {
  return {
    type: USER_FAILURE,
    payload: error
  }
}


  export const registerAction = (obj) => {
    return (dispatch)=>  {
      dispatch(registerRequest())
      axios
        .post('http://localhost:9000/ftb/addUser',obj)
        .then(response => {
          // response.data is the users
          const user = response.data
          dispatch(registerSuccess(user))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(registerFailure(error.response.data))
        })
    }
  }
  
 


     //Action Creator
 const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

const loginSuccess =lUser => {
  return {
    type: LOGIN_SUCCESS,
    payload:lUser
  }
}

//Action Creator
const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}


export const loginAction = (userName,Password) => {
  return (dispatch)=>  {
    dispatch(loginRequest())
    axios
      .get(`http://localhost:9000/ftb/login/${userName}/${Password}`)
      .then(response => {
        // response.data is the users
        const lUser= response.data
        dispatch(loginSuccess(lUser))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(loginFailure(error.response.data))
      })
  }
}



// update 


  //Action Creator
  const updateUserRequest = () => {
    return {
      type: UPDATE_USER_REQUEST
    }
  }
  
  //Action Creator
const updateUserSuccess =uUser => {
    return {
      type: UPDATE_USER_SUCCESS,
      payload:uUser
    }
  }
  
  //Action Creator
 const updateUserFailure = error => {
    return {
      type: UPDATE_USER_FAILURE,
      payload: error
    }
  }
  
  export const updateUserAction = (id,obj) => {
    return (dispatch)=>  {
      dispatch(updateUserRequest())
      axios
        .put(`http://localhost:9000/ftb/updateUser/${id}`,obj)
        .then(response => {
          // response.data is the users
          const uUser = response.data
          dispatch(updateUserSuccess(uUser))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(updateUserFailure(error.response.data))
        })
    }
  }



  //Delete


    //Action Creator
const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST
  }
}

//Action Creator
const deleteUserSuccess =dUser => {
  return {
    type: DELETE_USER_SUCCESS,
    payload:dUser
  }
}

//Action Creator
const deleteUserFailure = error => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error
  }
}

export const deleteUserAction = (id) => {
  return (dispatch)=>  {
    dispatch(deleteUserRequest())
    axios
      .delete(`http://localhost:9000/ftb/deleteUser/${id}`)
      .then(response => {
        // response.data is the users
        const dUser = response.data
        dispatch(deleteUserSuccess(dUser))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(deleteUserFailure(error.response.data))
      })
  }
}



