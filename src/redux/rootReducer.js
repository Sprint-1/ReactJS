import { combineReducers } from 'redux'
import  {fetchAllFlightsReducer,
  fetchFlightReducer,
  scheduleFlightReducer,
  searchscheduleFlightReducer,
  updatescheduleFlightReducer,
  deletescheduleFlightReducer} from './SFlightReducers'


const rootReducer = combineReducers({
  
  scheduleF: scheduleFlightReducer,
  updateF:updatescheduleFlightReducer,
  searchF: searchscheduleFlightReducer,
  deleteF: deletescheduleFlightReducer,
  fetchF: fetchFlightReducer,
  fetchAllF: fetchAllFlightsReducer

});

export default rootReducer