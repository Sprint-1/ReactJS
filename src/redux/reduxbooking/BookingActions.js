import axios from 'axios'
import {
    FETCH_BOOKING_REQUEST, FETCH_BOOKING_SUCCESS, FETCH_BOOKING_FAILURE,
    BOOKING_REQUEST, BOOKING_SUCCESS, BOOKING_FAILURE,
    DELETE_BOOKING_REQUEST,DELETE_BOOKING_SUCCESS,DELETE_BOOKING_FAILURE,
    FETCH_BOOKINGS_REQUEST, FETCH_BOOKINGS_SUCCESS, FETCH_BOOKINGS_FAILURE,
    UPDATE_BOOKING_REQUEST,UPDATE_BOOKING_SUCCESS,UPDATE_BOOKING_FAILURE,
    // SEARCH_SFLIGHT_REQUEST,SEARCH_SFLIGHT_SUCCESS,SEARCH_SFLIGHT_FAILURE

  } from './BookingTypes'

 //Action Creator
 const bookingRequest = () => {
  return {
    type: BOOKING_REQUEST
  }
}

//Action Creator
const bookingSuccess = booking => {
  return {
    type: BOOKING_SUCCESS,
    payload: booking
  }
}

//Action Creator
const bookingFailure = error => {
  return {
    type: BOOKING_FAILURE,
    payload: error
  }
}


  export const bookingAction = (obj) => {
    return (dispatch)=>  {
      dispatch(bookingRequest())
      axios
        .post('http://localhost:9000/ftb/addBooking',obj)
        .then(response => {
          // response.data is the users
          const booking = response.data
          dispatch(bookingSuccess(booking))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(bookingFailure(error.response.data))
        })
    }
  }
  
 



  //Fetch All Bookings

   //Action Creator
    const fetchAllBookingsRequest = () => {
    return {
      type: FETCH_BOOKINGS_REQUEST
    }
  }
  
  //Action Creator
  const fetchAllBookingsSuccess =fAllBookings => {
    return {
      type: FETCH_BOOKINGS_SUCCESS,
      payload:fAllBookings
    }
  }
  
  //Action Creator
 const fetchAllBookingsFailure = error => {
    return {
      type: FETCH_BOOKINGS_FAILURE,
      payload: error
    }
  }

  export const fetchAllBookingsAction = (userName) => {
    return (dispatch)=>  {
      dispatch(fetchAllBookingsRequest())
      axios
        .get(`http://localhost:9000/ftb/getBookingsByUserName/${userName}`)
        .then(response => {
          // response.data is the users
          const fAllBookings = response.data
          dispatch(fetchAllBookingsSuccess(fAllBookings))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchAllBookingsFailure(error.response.data))
        })
    }
  }



  //Fetch a single booking

     //Action Creator
 const fetchaBookingRequest = () => {
  return {
    type: FETCH_BOOKING_REQUEST
  }
}

const fetchaBookingSuccess =fBooking => {
  return {
    type: FETCH_BOOKING_SUCCESS,
    payload:fBooking
  }
}

//Action Creator
const fetchaBookingFailure = error => {
  return {
    type: FETCH_BOOKING_FAILURE,
    payload: error
  }
}


export const fetchaBookingAction = (id) => {
  return (dispatch)=>  {
    dispatch(fetchaBookingRequest())
    axios
      .get(`http://localhost:9000/ftb/viewBooking/${id}`)
      .then(response => {
        // response.data is the users
        const fBooking= response.data
        dispatch(fetchaBookingSuccess(fBooking))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchaBookingFailure(error.response.data))
      })
  }
}


// //search a flight

//  //Action Creator
//  const searchforFlightRequest = () => {
//   return {
//     type: SEARCH_SFLIGHT_REQUEST
//   }
// }

// //Action Creator
// const searchforFlightSuccess =sSFlight => {
//   return {
//     type: SEARCH_SFLIGHT_SUCCESS,
//     payload:sSFlight
//   }
// }

// //Action Creator
// const searchforFlightFailure = error => {
//   return {
//     type: SEARCH_SFLIGHT_FAILURE,
//     payload: error
//   }
// }

// export const searchforFlightAction = (src,dstn,date) => {
//   return (dispatch)=>  {
//     dispatch(searchforFlightRequest())
//     axios
//       .get(`http://localhost:9000/ftb/searchScheduledFlight/${src}/${dstn}/${date}`)
//       .then(response => {
//         // response.data is the users
//         const sSFlight= response.data
//         dispatch(searchforFlightSuccess(sSFlight))
//       })
//       .catch(error => {
//         // error.message is the error message
//         dispatch(searchforFlightFailure(error.response.data))
//       })
//   }
// }


// update 


  //Action Creator
  const updateaBookingRequest = () => {
    return {
      type: UPDATE_BOOKING_REQUEST
    }
  }
  
  //Action Creator
const updateaBookingSuccess =uBooking => {
    return {
      type: UPDATE_BOOKING_SUCCESS,
      payload:uBooking
    }
  }
  
  //Action Creator
 const updateaBookingFailure = error => {
    return {
      type: UPDATE_BOOKING_FAILURE,
      payload: error
    }
  }
  
  export const updateaBookingAction = (id,obj) => {
    return (dispatch)=>  {
      dispatch(updateaBookingRequest())
      axios
        .put(`http://localhost:9000/ftb/modifyBooking/${id}`,obj)
        .then(response => {
          // response.data is the users
          const uBooking = response.data
          dispatch(updateaBookingSuccess(uBooking))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(updateaBookingFailure(error.response.data))
        })
    }
  }



  //Delete


    //Action Creator
const deleteaBookingRequest = () => {
  return {
    type: DELETE_BOOKING_REQUEST
  }
}

//Action Creator
const deleteaBookingSuccess =dBooking => {
  return {
    type: DELETE_BOOKING_SUCCESS,
    payload:dBooking
  }
}

//Action Creator
const deleteaBookingFailure = error => {
  return {
    type: DELETE_BOOKING_FAILURE,
    payload: error
  }
}

export const deleteaBookingAction = (id) => {
  return (dispatch)=>  {
    dispatch(deleteaBookingRequest())
    axios
      .delete(`http://localhost:9000/ftb/deleteBooking/${id}`)
      .then(response => {
        // response.data is the users
        const dBooking = response.data
        dispatch(deleteaBookingSuccess(dBooking))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(deleteaBookingFailure(error.response.data))
      })
  }
}



