import axios from 'axios'
import {
    FETCH_AIRPORT_REQUEST, FETCH_AIRPORT_SUCCESS, FETCH_AIRPORT_FAILURE,
    AIRPORT_REQUEST, AIRPORT_SUCCESS, AIRPORT_FAILURE

  } from './AirportTypes'

 //Action Creator
 const AirportRequest = () => {
  return {
    type: AIRPORT_REQUEST
  }
}

//Action Creator
const AirportSuccess = aAirport => {
  return {
    type: AIRPORT_SUCCESS,
    payload: aAirport
  }
}

//Action Creator
const AirportFailure = error => {
  return {
    type: AIRPORT_FAILURE,
    payload: error
  }
}


  export const AirportAction = (obj) => {
    return (dispatch)=>  {
      dispatch(AirportRequest())
      axios
        .post('http://localhost:9000/ftb/addAirport',obj)
        .then(response => {
          // response.data is the users
          const aAirport = response.data
          dispatch(AirportSuccess(aAirport))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(AirportFailure(error.response.data))
        })
      }
  }
  

  //Fetch All Airports

   //Action Creator
    const fetchAllAirportsRequest = () => {
    return {
      type: FETCH_AIRPORT_REQUEST
    }
  }
  
  //Action Creator
  const fetchAllAirportsSuccess =fAllAirports => {
    return {
      type: FETCH_AIRPORT_SUCCESS, 
      payload:fAllAirports
    }
  }
  
  //Action Creator
 const fetchAllAirportsFailure = error => {
    return {
      type: FETCH_AIRPORT_FAILURE,
      payload: error
    }
  }

  export const fetchAllAirportsAction = () => {
    return (dispatch)=>  {
      dispatch(fetchAllAirportsRequest())
      axios
        .get('http://localhost:9000/ftb/viewAllAirports')
        .then(response => {
          // response.data is the users
          const fAllAirports = response.data
          dispatch(fetchAllAirportsSuccess(fAllAirports))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchAllAirportsFailure(error.response.data))
        })
    }
  }