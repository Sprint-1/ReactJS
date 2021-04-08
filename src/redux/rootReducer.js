import { combineReducers } from 'redux'
import  {fetchAllSFlightsReducer,
  fetchSFlightReducer,
  scheduleSFlightReducer,
  searchscheduleFlightReducer,
  updatescheduleFlightReducer,
  deletescheduleFlightReducer} from './SFlightReducers'


import  {fetchAllFghtsReducer,
    fetchFghtReducer,
    addFlightsReducer,
    updateFghtReducer,
    deleteFghtReducer} from './reduxflight/FlightReducer'

import {
      airportReducer,fetchAllAirportsReducer} from './reduxairport/AirportReducers'



 import {addUserReducer,deleteUserReducer,updateUserReducer,loginUserReducer} from './reduxuser/UserReducers'     
  


const rootReducer = combineReducers({
  
  scheduleF: scheduleSFlightReducer,
  updateF:updatescheduleFlightReducer,
  searchF: searchscheduleFlightReducer,
  deleteF: deletescheduleFlightReducer,
  fetchF: fetchSFlightReducer,
  fetchAllF: fetchAllSFlightsReducer,


  addFlight: addFlightsReducer,
  updateFlight: updateFghtReducer,
  deleteFght: deleteFghtReducer,
  fetchFlight: fetchFghtReducer,
  fetchAllFlight: fetchAllFghtsReducer,


  scheduleA: airportReducer,
  fetchAllA: fetchAllAirportsReducer,


  addU:addUserReducer,
  deleteU:deleteUserReducer,
  updateU:updateUserReducer,
  loginU:loginUserReducer

});

export default rootReducer