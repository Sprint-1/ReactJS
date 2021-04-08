import {
    FETCH_FLIGHT_REQUEST, FETCH_FLIGHT_SUCCESS, FETCH_FLIGHT_FAILURE,
   FLIGHT_REQUEST, FLIGHT_SUCCESS, FLIGHT_FAILURE,
   DELETE_FLIGHT_REQUEST,DELETE_FLIGHT_SUCCESS,DELETE_FLIGHT_FAILURE,
   FETCH_FLIGHTS_REQUEST, FETCH_FLIGHTS_SUCCESS, FETCH_FLIGHTS_FAILURE,
   UPDATE_FLIGHT_REQUEST,UPDATE_FLIGHT_SUCCESS,UPDATE_FLIGHT_FAILURE
   //SEARCH_FLIGHT_REQUEST,SEARCH_FLIGHT_SUCCESS,SEARCH_FLIGHT_FAILURE
} from  './FlightTypes'



 //Add a Flight 

 const addFlight = {
   loading: false,
   aFlight: {},
   error: ''
 }

 export const addFlightsReducer = (state = addFlight, action) => {
   switch (action.type) {
     case FLIGHT_REQUEST:
       return {
         ...state,
         loading: true
       }
     case FLIGHT_SUCCESS:
       return {
         loading: false,
         aFlight: action.payload,
         error: ''
       }
     case FLIGHT_FAILURE:
       return {
         loading: false,
         aFlight: {},
         error: action.payload
       }
     default: return state
   }
 }


// Fetching a Flight By Id

const fetchFlight = {
   loading: false,
   vFlight: {},
   error: ''
 }

export const fetchFghtReducer = (state = fetchFlight, action) => {
   switch (action.type) {
     case FETCH_FLIGHT_REQUEST:
       return {
         ...state,
         loading: true
       }
     case FETCH_FLIGHT_SUCCESS:
       return {
         loading: false,
         vFlight: action.payload,
         error: ''
       }
     case FETCH_FLIGHT_FAILURE:
       return {
         loading: false,
         vFlight: {},
         error: action.payload
       }
     default: return state
   }
 }


 //Fetch All Flights

 const fetchAllFlights = {
   loading: false,
   fAllFlights: [],
   error: ''
 }

 export const fetchAllFghtsReducer = (state = fetchAllFlights, action) => {
   switch (action.type) {
     case FETCH_FLIGHTS_REQUEST:
       return {
         ...state,
         loading: true
       }
     case FETCH_FLIGHTS_SUCCESS:
       return {
         loading: false,
         fAllFlights: action.payload,
         error: ''
       }
     case FETCH_FLIGHTS_FAILURE:
       return {
         loading: false,
         fAllFlights: [],
         error: action.payload
       }
     default: return state
   }
 }


//Delete a Scheduled flight

const deleteFlight = {
   loading: false,
   dFlight: {},
   error: ''
 }

 export const deleteFghtReducer = (state = deleteFlight, action) => {
   switch (action.type) {
     case DELETE_FLIGHT_REQUEST:
       return {
         ...state,
         loading: true
       }
     case DELETE_FLIGHT_SUCCESS:
       return {
         loading: false,
         dFlight: action.payload,
         error: ''
       }
     case DELETE_FLIGHT_FAILURE:
       return {
         loading: false,
         dFlight: {},
         error: action.payload
       }
     default: return state
   }  
 }


 //Update a Scheduled flight

const updateFlight = {
   loading: false,
   uFlight: {},
   error: ''
 }

 export const updateFghtReducer = (state = updateFlight, action) => {
   switch (action.type) {
     case UPDATE_FLIGHT_REQUEST:
       return {
         ...state,
         loading: true
       }
     case UPDATE_FLIGHT_SUCCESS:
       return {
         loading: false,
         uFlight: action.payload,
         error: ''
       }
     case UPDATE_FLIGHT_FAILURE:
       return {
         loading: false,
         uFlight: {},
         error: action.payload
       }
     default: return state
   }  
 }





 