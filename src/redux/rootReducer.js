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
    deleteFghtReducer} from '../redux/ReduxFlight/FlightReducer'


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
  fetchAllFlight: fetchAllFghtsReducer

});

export default rootReducer