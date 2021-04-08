
import './App.css';
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import store from './redux/Store'
import Body from './Components/body/Body'
import FetchList from './Components/schedulingmodule/FetchList';
import Modify from './Components/schedulingmodule/Modify';
import ScheduleForm from './Components/schedulingmodule/ScheduleForm'
import Search from './Components/schedulingmodule/Search'
import ModifyActions from './Components/schedulingmodule/ModifyActions'
import GetList from'./Components/flightmodule/GetList'
import AddFlight from './Components/flightmodule/AddFlight'
import AirportsList from './Components/airportmodule/AirportsList';
import SignUp from './Components/usermodule/SignUp'
import Home from './Components/Home'
import SignUpAction from './Components/usermodule/SignUpAction'
import Login from './Components/usermodule/Login';
import AddAirport from './Components/airportmodule/AddAirport';
import ModifyFlight from './Components/flightmodule/ModifyFlight';
import ModifyFlightAction from './Components/flightmodule/ModifyFlightAction';




function App() {
  return (
    <Router>
    <Provider store={store}>
    <div className="App">
      <Switch>

        <Route exact path="/"  component={Body}/>

        {/* <Route exact path="/" component={Home}/> */}
        <Route  path="/addflight" component={AddFlight }/>
        <Route path="/flightslist" component={GetList}/>
        <Route path="/airportslist" component={AirportsList}/>

          <Route path="/modify"  component={Modify} />

          <Route path="/search" component={Search} />

           <Route path="/scheduledflightslist" component={FetchList}/>   

          <Route path="/scheduleflight" component={ScheduleForm} />

          <Route path="/modifyactions" component={ModifyActions }/>
         
          <Route path="/signupactions" component={SignUpAction} />
    
          <Route path="/signup" component={SignUp}/>
        
          <Route path="/login" component={Login}/>

          <Route path="/addairport" component={AddAirport}/>

          <Route path="/modifyflight" component={ModifyFlight}/>

        <Route path="/modifyflightactions" component={ModifyFlightAction}/>
      </Switch>
     
    </div>
    </Provider>
    </Router>
  );
}

export default App;
