import {
    FETCH_BOOKING_REQUEST, FETCH_BOOKING_SUCCESS, FETCH_BOOKING_FAILURE,
   BOOKING_REQUEST, BOOKING_SUCCESS, BOOKING_FAILURE,
   DELETE_BOOKING_REQUEST,DELETE_BOOKING_SUCCESS,DELETE_BOOKING_FAILURE,
   FETCH_BOOKINGS_REQUEST, FETCH_BOOKINGS_SUCCESS, FETCH_BOOKINGS_FAILURE,
   UPDATE_BOOKING_REQUEST,UPDATE_BOOKING_SUCCESS,UPDATE_BOOKING_FAILURE,
//    SEARCH_SFLIGHT_REQUEST,SEARCH_SFLIGHT_SUCCESS,SEARCH_SFLIGHT_FAILURE
} from  './BookingTypes'



 //Booking a Flight

 const booking = {
   loading: false,
   booking: {},
   error: ''
 }

 export const bookingReducer = (state = booking, action) => {
   switch (action.type) {
     case BOOKING_REQUEST:
       return {
         ...state,
         loading: true
       }
     case BOOKING_SUCCESS:
       return {
         loading: false,
         booking: action.payload,
         error: ''
       }
     case BOOKING_FAILURE:
       return {
         loading: false,
         booking: {},
         error: action.payload
       }
     default: return state
   }
 }


// Fetching a Booking By Id

const fetchBooking = {
   loading: false,
   fBooking: {},
   error: ''
 }

export const fetchBookingReducer = (state = fetchBooking, action) => {
   switch (action.type) {
     case FETCH_BOOKING_REQUEST:
       return {
         ...state,
         loading: true
       }
     case FETCH_BOOKING_SUCCESS:
       return {
         loading: false,
         fBooking: action.payload,
         error: ''
       }
     case FETCH_BOOKING_FAILURE:
       return {
         loading: false,
         fBooking: {},
         error: action.payload
       }
     default: return state
   }
 }


 //Fetch All Bookings

 const fetchAllBookings = {
   loading: false,
   fAllBookings: [],
   error: ''
 }

 export const fetchAllBookingsReducer = (state = fetchAllBookings, action) => {
   switch (action.type) {
     case FETCH_BOOKINGS_REQUEST:
       return {
         ...state,
         loading: true
       }
     case FETCH_BOOKINGS_SUCCESS:
       return {
         loading: false,
         fAllBookings: action.payload,
         error: ''
       }
     case FETCH_BOOKINGS_FAILURE:
       return {
         loading: false,
         fAllBookings: [],
         error: action.payload
       }
     default: return state
   }
 }


//Delete a Booking

const deleteBooking = {
   loading: false,
   dBooking: '',
   error: ''
 }

 export const deleteBookingReducer = (state = deleteBooking, action) => {
   switch (action.type) {
     case DELETE_BOOKING_REQUEST:
       return {
         ...state,
         loading: true
       }
     case DELETE_BOOKING_SUCCESS:
       return {
         loading: false,
         dBooking: action.payload,
         error: ''
       }
     case DELETE_BOOKING_FAILURE:
       return {
         loading: false,
         dBooking: '',
         error: action.payload
       }
     default: return state
   }  
 }


 //Update a Booking

const updateBooking = {
   loading: false,
   uBooking: {},
   error: ''
 }

 export const updateBookingReducer = (state = updateBooking, action) => {
   switch (action.type) {
     case UPDATE_BOOKING_REQUEST:
       return {
         ...state,
         loading: true
       }
     case UPDATE_BOOKING_SUCCESS:
       return {
         loading: false,
         uBooking: action.payload,
         error: ''
       }
     case UPDATE_BOOKING_FAILURE:
       return {
         loading: false,
         uBooking: {},
         error: action.payload
       }
     default: return state
   }  
 }


//  //Search a Scheduled flight

// const searchSFlight = {
//    loading: false,
//    sSFlight: [],
//    error: ''
//  }

//  export const searchscheduleFlightReducer = (state = searchSFlight, action) => {
//    switch (action.type) {
//      case SEARCH_SFLIGHT_REQUEST:
//        return {
//          ...state,
//          loading: true
//        }
//      case SEARCH_SFLIGHT_SUCCESS:
//        return {
//          loading: false,
//          sSFlight: action.payload,
//          error: ''
//        }
//      case SEARCH_SFLIGHT_FAILURE:
//        return {
//          loading: false,
//          sSFlight: [],
//          error: action.payload
//        }
//      default: return state
//    }  
//  }



 