import axios from 'axios'
import {
    FETCH_SFLIGHT_REQUEST, FETCH_SFLIGHT_SUCCESS, FETCH_SFLIGHT_FAILURE,
    SFLIGHT_REQUEST, SFLIGHT_SUCCESS, SFLIGHT_FAILURE,
    DELETE_SFLIGHT_REQUEST,DELETE_SFLIGHT_SUCCESS,DELETE_SFLIGHT_FAILURE,
    FETCH_SFLIGHTS_REQUEST, FETCH_SFLIGHTS_SUCCESS, FETCH_SFLIGHTS_FAILURE,
    UPDATE_SFLIGHT_REQUEST,UPDATE_SFLIGHT_SUCCESS,UPDATE_SFLIGHT_FAILURE,
    SEARCH_SFLIGHT_REQUEST,SEARCH_SFLIGHT_SUCCESS,SEARCH_SFLIGHT_FAILURE

  } from './SFlightTypes'

 //Action Creator
 const scheduleFlightRequest = () => {
  return {
    type: SFLIGHT_REQUEST
  }
}

//Action Creator
const scheduleFlightSuccess = sFlight => {
  return {
    type: SFLIGHT_SUCCESS,
    payload: sFlight
  }
}

//Action Creator
const scheduleFlightFailure = error => {
  return {
    type: SFLIGHT_FAILURE,
    payload: error
  }
}


  export const scheduleFlightAction = (obj) => {
    return (dispatch)=>  {
      dispatch(scheduleFlightRequest())
      axios
        .post('http://localhost:9000/ftb/addScheduledFlight',obj)
        .then(response => {
          // response.data is the users
          const sFlight = response.data
          dispatch(scheduleFlightSuccess(sFlight))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(scheduleFlightFailure(error.response.data))
        })
    }
  }
  
 



  //Fetch All SFlights

   //Action Creator
    const fetchAllFlighsRequest = () => {
    return {
      type: FETCH_SFLIGHTS_REQUEST
    }
  }
  
  //Action Creator
  const fetchAllFlighsSuccess =fAllFlights => {
    return {
      type: FETCH_SFLIGHTS_SUCCESS,
      payload:fAllFlights
    }
  }
  
  //Action Creator
 const fetchAllFlighsFailure = error => {
    return {
      type: FETCH_SFLIGHTS_FAILURE,
      payload: error
    }
  }

  export const fetchAllSFlightsAction = () => {
    return (dispatch)=>  {
      dispatch(fetchAllFlighsRequest())
      axios
        .get('http://localhost:9000/ftb/viewAllScheduledFlights')
        .then(response => {
          // response.data is the users
          const fAllFlights = response.data
          dispatch(fetchAllFlighsSuccess(fAllFlights))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchAllFlighsFailure(error.response.data))
        })
    }
  }



  //Fetch a single flight

     //Action Creator
 const fetchaFlighRequest = () => {
  return {
    type: FETCH_SFLIGHT_REQUEST
  }
}

const fetchaFlighSuccess =fFlight => {
  return {
    type: FETCH_SFLIGHT_SUCCESS,
    payload:fFlight
  }
}

//Action Creator
const fetchaFlighFailure = error => {
  return {
    type: FETCH_SFLIGHT_FAILURE,
    payload: error
  }
}


export const fetchaSFlightAction = (id) => {
  return (dispatch)=>  {
    dispatch(fetchaFlighRequest())
    axios
      .get(`http://localhost:9000/ftb/viewScheduledFlight/${id}`)
      .then(response => {
        // response.data is the users
        const fFlight= response.data
        dispatch(fetchaFlighSuccess(fFlight))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchaFlighFailure(error.response.data))
      })
  }
}


//search a flight

 //Action Creator
 const searchforFlightRequest = () => {
  return {
    type: SEARCH_SFLIGHT_REQUEST
  }
}

//Action Creator
const searchforFlightSuccess =sSFlight => {
  return {
    type: SEARCH_SFLIGHT_SUCCESS,
    payload:sSFlight
  }
}

//Action Creator
const searchforFlightFailure = error => {
  return {
    type: SEARCH_SFLIGHT_FAILURE,
    payload: error
  }
}

export const searchforFlightAction = (src,dstn,date) => {
  return (dispatch)=>  {
    dispatch(searchforFlightRequest())
    axios
      .get(`http://localhost:9000/ftb/searchScheduledFlight/${src}/${dstn}/${date}`)
      .then(response => {
        // response.data is the users
        const sSFlight= response.data
        dispatch(searchforFlightSuccess(sSFlight))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(searchforFlightFailure(error.response.data))
      })
  }
}


// update 


  //Action Creator
  const updateaFlighRequest = () => {
    return {
      type: UPDATE_SFLIGHT_REQUEST
    }
  }
  
  //Action Creator
const updateaFlighSuccess =uFlight => {
    return {
      type: UPDATE_SFLIGHT_SUCCESS,
      payload:uFlight
    }
  }
  
  //Action Creator
 const updateaFlighFailure = error => {
    return {
      type: UPDATE_SFLIGHT_FAILURE,
      payload: error
    }
  }
  
  export const updateaSFlightAction = (id,obj) => {
    return (dispatch)=>  {
      dispatch(updateaFlighRequest())
      axios
        .put(`http://localhost:9000/ftb/modifyScheduledFlight/${id}`,obj)
        .then(response => {
          // response.data is the users
          const uFlight = response.data
          dispatch(updateaFlighSuccess(uFlight))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(updateaFlighFailure(error.response.data))
        })
    }
  }



  //Delete


    //Action Creator
const deleteaFlighRequest = () => {
  return {
    type: DELETE_SFLIGHT_REQUEST
  }
}

//Action Creator
const deleteaFlighSuccess =dFlight => {
  return {
    type: DELETE_SFLIGHT_SUCCESS,
    payload:dFlight
  }
}

//Action Creator
const deleteaFlighFailure = error => {
  return {
    type: DELETE_SFLIGHT_FAILURE,
    payload: error
  }
}

export const deleteaSFlightAction = (id) => {
  return (dispatch)=>  {
    dispatch(deleteaFlighRequest())
    axios
      .delete(`http://localhost:9000/ftb/removeScheduledFlight/${id}`)
      .then(response => {
        // response.data is the users
        const dFlight = response.data
        dispatch(deleteaFlighSuccess(dFlight))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(deleteaFlighFailure(error.response.data))
      })
  }
}



