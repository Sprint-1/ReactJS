import {
     FETCH_SFLIGHT_REQUEST, FETCH_SFLIGHT_SUCCESS, FETCH_SFLIGHT_FAILURE,
    SFLIGHT_REQUEST, SFLIGHT_SUCCESS, SFLIGHT_FAILURE,
    DELETE_SFLIGHT_REQUEST,DELETE_SFLIGHT_SUCCESS,DELETE_SFLIGHT_FAILURE,
    FETCH_SFLIGHTS_REQUEST, FETCH_SFLIGHTS_SUCCESS, FETCH_SFLIGHTS_FAILURE,
    UPDATE_SFLIGHT_REQUEST,UPDATE_SFLIGHT_SUCCESS,UPDATE_SFLIGHT_FAILURE,
    SEARCH_SFLIGHT_REQUEST,SEARCH_SFLIGHT_SUCCESS,SEARCH_SFLIGHT_FAILURE
 } from  './SFlightTypes'



  //Scheduling a Flight 

  const scheduleFlight = {
    loading: false,
    sFlight: {},
    error: ''
  }

  export const scheduleSFlightReducer = (state = scheduleFlight, action) => {
    switch (action.type) {
      case SFLIGHT_REQUEST:
        return {
          ...state,
          loading: true
        }
      case SFLIGHT_SUCCESS:
        return {
          loading: false,
          sFlight: action.payload,
          error: ''
        }
      case SFLIGHT_FAILURE:
        return {
          loading: false,
          sFlight: {},
          error: action.payload
        }
      default: return state
    }
  }


// Fetching a Flight By Id

const fetchSFlight = {
    loading: false,
    fFlight: {},
    error: ''
  }

export const fetchSFlightReducer = (state = fetchSFlight, action) => {
    switch (action.type) {
      case FETCH_SFLIGHT_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_SFLIGHT_SUCCESS:
        return {
          loading: false,
          fFlight: action.payload,
          error: ''
        }
      case FETCH_SFLIGHT_FAILURE:
        return {
          loading: false,
          fFlight: {},
          error: action.payload
        }
      default: return state
    }
  }


  //Fetch All Flights

  const fetchAllSFlights = {
    loading: false,
    fAllFlights: [],
    error: ''
  }

  export const fetchAllSFlightsReducer = (state = fetchAllSFlights, action) => {
    switch (action.type) {
      case FETCH_SFLIGHTS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_SFLIGHTS_SUCCESS:
        return {
          loading: false,
          fAllFlights: action.payload,
          error: ''
        }
      case FETCH_SFLIGHTS_FAILURE:
        return {
          loading: false,
          fAllFlights: [],
          error: action.payload
        }
      default: return state
    }
  }


 //Delete a Scheduled flight

 const deleteSFlight = {
    loading: false,
    dFlight: '',
    error: ''
  }

  export const deletescheduleFlightReducer = (state = deleteSFlight, action) => {
    switch (action.type) {
      case DELETE_SFLIGHT_REQUEST:
        return {
          ...state,
          loading: true
        }
      case DELETE_SFLIGHT_SUCCESS:
        return {
          loading: false,
          dFlight: action.payload,
          error: ''
        }
      case DELETE_SFLIGHT_FAILURE:
        return {
          loading: false,
          dFlight: '',
          error: action.payload
        }
      default: return state
    }  
  }


  //Update a Scheduled flight

 const updateSFlight = {
    loading: false,
    uFlight: {},
    error: ''
  }

  export const updatescheduleFlightReducer = (state = updateSFlight, action) => {
    switch (action.type) {
      case UPDATE_SFLIGHT_REQUEST:
        return {
          ...state,
          loading: true
        }
      case UPDATE_SFLIGHT_SUCCESS:
        return {
          loading: false,
          uFlight: action.payload,
          error: ''
        }
      case UPDATE_SFLIGHT_FAILURE:
        return {
          loading: false,
          uFlight: {},
          error: action.payload
        }
      default: return state
    }  
  }


  //Search a Scheduled flight

 const searchSFlight = {
    loading: false,
    sSFlight: [],
    error: ''
  }

  export const searchscheduleFlightReducer = (state = searchSFlight, action) => {
    switch (action.type) {
      case SEARCH_SFLIGHT_REQUEST:
        return {
          ...state,
          loading: true
        }
      case SEARCH_SFLIGHT_SUCCESS:
        return {
          loading: false,
          sSFlight: action.payload,
          error: ''
        }
      case SEARCH_SFLIGHT_FAILURE:
        return {
          loading: false,
          sSFlight: [],
          error: action.payload
        }
      default: return state
    }  
  }



  