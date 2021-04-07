import {
    FETCH_AIRPORT_REQUEST, FETCH_AIRPORT_SUCCESS, FETCH_AIRPORT_FAILURE,
    AIRPORT_REQUEST, AIRPORT_SUCCESS, AIRPORT_FAILURE,
    
} from  './AirportTypes'



 //Adding An Airport 

 const scheduleA = {
   loading: false,
   Airport: {},
   error: ''
 }

 export const airportReducer = (state = scheduleA, action) => {
   switch (action.type) {
     case AIRPORT_REQUEST:
       return {
         ...state,
         loading: true
       }
     case AIRPORT_SUCCESS:
       return {
         loading: false,
         sFlight: action.payload,
         error: ''
       }
     case AIRPORT_FAILURE:
       return {
         loading: false,
         sFlight: {},
         error: action.payload
       }
     default: return state
   }
 }



 //Fetch All Flights

 const fetchAllA = {
   loading: false,
   fAllAirports: [],
   error: ''
 }

 export const fetchAllAirportsReducer = (state = fetchAllA, action) => {
   switch (action.type) {
     case FETCH_AIRPORT_REQUEST:
       return {
         ...state,
         loading: true
       }
     case FETCH_AIRPORT_SUCCESS:
       return {
         loading: false,
         fAllAirports: action.payload,
         error: ''
       }
     case FETCH_AIRPORT_FAILURE:
       return {
         loading: false,
         fAllAirports: [],
         error: action.payload
       }
     default: return state
   }
 }