import axios from 'axios'
import {
    FETCH_FLIGHT_REQUEST, FETCH_FLIGHT_SUCCESS, FETCH_FLIGHT_FAILURE,
   FLIGHT_REQUEST, FLIGHT_SUCCESS, FLIGHT_FAILURE,
   DELETE_FLIGHT_REQUEST,DELETE_FLIGHT_SUCCESS,DELETE_FLIGHT_FAILURE,
   FETCH_FLIGHTS_REQUEST, FETCH_FLIGHTS_SUCCESS, FETCH_FLIGHTS_FAILURE,
   UPDATE_FLIGHT_REQUEST,UPDATE_FLIGHT_SUCCESS,UPDATE_FLIGHT_FAILURE
   //SEARCH_FLIGHT_REQUEST,SEARCH_FLIGHT_SUCCESS,SEARCH_FLIGHT_FAILURE

  } from  './FlightTypes'

 //Action Creator
 const FlightRequest = () => {
  return {
    type: FLIGHT_REQUEST
  }
}

//Action Creator
const FlightSuccess = fFlight => {
  return {
    type: FLIGHT_SUCCESS,
    payload: fFlight
  }
}

//Action Creator
const FlightFailure = error => {
  return {
    type: FLIGHT_FAILURE,
    payload: error
  }
}


  export const FlightAction = (obj) => {
    return (dispatch)=>  {
      dispatch(FlightRequest())
      axios
        .post('http://localhost:9000/ftb/addFlight',obj)
        .then(response => {
          // response.data is the users
          const fFlight = response.data
          dispatch(FlightSuccess(fFlight))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(FlightFailure(error.response.data))
        })
    }
  }
  
 



  //Fetch All Flights

   //Action Creator
    const fetchAllFlightRequest = () => {
    return {
      type: FETCH_FLIGHTS_REQUEST
    }
  }
  
  //Action Creator
  const fetchAllFlightSuccess =fAllFlights => {
    return {
      type: FETCH_FLIGHTS_SUCCESS,
      payload:fAllFlights
    }
  }
  
  //Action Creator
 const fetchAllFlightFailure = error => {
    return {
      type: FETCH_FLIGHTS_FAILURE,
      payload: error
    }
  }

  export const fetchAllFlightsAction = () => {
    return (dispatch)=>  {
      dispatch(fetchAllFlightRequest())
      axios
        .get('http://localhost:9000/ftb/viewAllFlights')
        .then(response => {
          // response.data is the users
          const fAllFlights = response.data
          dispatch(fetchAllFlightSuccess(fAllFlights))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchAllFlightFailure(error.response.data))
        })
    }
  }



  //Fetch a single flight

     //Action Creator
 const fetchaFlightRequest = () => {
  return {
    type: FETCH_FLIGHT_REQUEST
  }
}

const fetchaFlightSuccess =fFlight => {
  return {
    type: FETCH_FLIGHT_SUCCESS,
    payload:fFlight
  }
}

//Action Creator
const fetchaFlightFailure = error => {
  return {
    type: FETCH_FLIGHT_FAILURE,
    payload: error
  }
}


export const fetchaFlightAction = (id) => {
  return (dispatch)=>  {
    dispatch(fetchaFlightRequest())
    axios
      .get(`http://localhost:9000/ftb/viewFlight/${id}`)
      .then(response => {
        // response.data is the users
        const fFlight= response.data
        dispatch(fetchaFlightSuccess(fFlight))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchaFlightFailure(error.response.data))
      })
  }
}





// update 


  //Action Creator
  const updateaFlightRequest = () => {
    return {
      type: UPDATE_FLIGHT_REQUEST
    }
  }
  
  //Action Creator
const updateaFlightSuccess =uFlight => {
    return {
      type: UPDATE_FLIGHT_SUCCESS,
      payload:uFlight
    }
  }
  
  //Action Creator
 const updateaFlightFailure = error => {
    return {
      type: UPDATE_FLIGHT_FAILURE,
      payload: error
    }
  }
  
  export const updateaFlightAction = (id,obj) => {
    return (dispatch)=>  {
      dispatch(updateaFlightRequest())
      axios
        .put(`http://localhost:9000/ftb/modifyFlight/${id}`,obj)
        .then(response => {
          // response.data is the users
          const uFlight = response.data
          dispatch(updateaFlightSuccess(uFlight))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(updateaFlightFailure(error.response.data))
        })
    }
  }



  //Delete


    //Action Creator
const deleteaFlightRequest = () => {
  return {
    type: DELETE_FLIGHT_REQUEST
  }
}

//Action Creator
const deleteaFlightSuccess =dFlight => {
  return {
    type: DELETE_FLIGHT_SUCCESS,
    payload:dFlight
  }
}

//Action Creator
const deleteaFlightFailure = error => {
  return {
    type: DELETE_FLIGHT_FAILURE,
    payload: error
  }
}

export const deleteaFlightAction = (id) => {
  return (dispatch)=>  {
    dispatch(deleteaFlightRequest())
    axios
      .delete(`http://localhost:9000/ftb/deleteFlight/${id}`)
      .then(response => {
        // response.data is the users
        const dFlight = response.data
        dispatch(deleteaFlightSuccess(dFlight))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(deleteaFlightFailure(error.response.data))
      })
  }
}



