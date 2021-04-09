import {
   
    USER_REQUEST, USER_SUCCESS, USER_FAILURE,
    DELETE_USER_REQUEST,DELETE_USER_SUCCESS,DELETE_USER_FAILURE,
    UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,UPDATE_USER_FAILURE,
    LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE

  } from './UserTypes'



 //Scheduling a Flight 

 const addUser = {
   loading: false,
   user: {},
   error: ''
 }

 export const addUserReducer = (state = addUser, action) => {
   switch (action.type) {
     case USER_REQUEST:
       return {
         ...state,
         loading: true
       }
     case USER_SUCCESS:
       return {
         loading: false,
         user: action.payload,
         error: ''
       }
     case USER_FAILURE:
       return {
         loading: false,
         user: {},
         error: action.payload
       }
     default: return state
   }
 }



//Delete a Scheduled flight

const deleteUser = {
   loading: false,
   dUser: {},
   error: ''
 }

 export const deleteUserReducer = (state = deleteUser, action) => {
   switch (action.type) {
     case DELETE_USER_REQUEST:
       return {
         ...state,
         loading: true
       }
     case DELETE_USER_SUCCESS:
       return {
         loading: false,
         dUser: action.payload,
         error: ''
       }
     case DELETE_USER_FAILURE:
       return {
         loading: false,
         dUser: {},
         error: action.payload
       }
     default: return state
   }  
 }


 //Update a Scheduled flight

const updateUser = {
   loading: false,
   uUser: {},
   error: ''
 }

 export const updateUserReducer = (state = updateUser, action) => {
   switch (action.type) {
     case UPDATE_USER_REQUEST:
       return {
         ...state,
         loading: true
       }
     case UPDATE_USER_SUCCESS:
       return {
         loading: false,
         uUser: action.payload,
         error: ''
       }
     case UPDATE_USER_FAILURE:
       return {
         loading: false,
         uUser: {},
         error: action.payload
       }
     default: return state
   }  
 }



 //Update a Scheduled flight

const loginUser = {
    loading: false,
    lUser: {},
    error: ''
  }
 
  export const loginUserReducer = (state = loginUser, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true
        }
      case LOGIN_SUCCESS:
        return {
          loading: false,
          lUser: action.payload,
          error: ''
        }
      case LOGIN_FAILURE:
        return {
          loading: false,
          lUser: {},
          error: action.payload
        }
      default: return state
    }  
  }
 


 



 