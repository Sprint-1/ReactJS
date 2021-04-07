import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Body from './body/Body'
import FetchList from './schedulingmodule/FetchList';
import Modify from './schedulingmodule/Modify';
import ScheduleForm from './schedulingmodule/ScheduleForm'
import Search from './schedulingmodule/Search'
import ModifyActions from './schedulingmodule/ModifyActions'
import GetList from'./flightmodule/GetList'
import AddFlight from './flightmodule/AddFlight'
import AirportsList from './airportmodule/AirportsList';

 function Header()
 {
     return (

        <div className="bg">
         <Router>
        <nav id="navbar" className="row navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}}>

          <div className="container col-sm-9">
            <Link className="navbar-brand font-weight-bold" to="/">
              Fly Away
            </Link>
            <Link className="nav-link active font-weight-bolder text-white" aria-current="page" to="/">
                Home
           </Link>
           <div className="dropdown ">
                    <button className="dropbtn w3-btn w3-round-xlarge">Flight</button>
                            <div className="dropdown-content">
                               <Link to="/addflight">Add Flight</Link>
                                <Link to="/flightslist">All Flights</Link>
                             </div>
            </div>
            <div className="dropdown ">
                    <button className="dropbtn w3-btn w3-round-xlarge">Airport</button>
                            <div className="dropdown-content">
                               <Link to="/addairport">Add Airport</Link>
                                <Link to="/airportslist">All Airports</Link>
                             </div>
            </div>
            <div className="dropdown ">
                    <button className="dropbtn w3-btn w3-round-xlarge">Schedule</button>
                            <div className="dropdown-content">
                               <Link to="/scheduleflight">Schedule Flight</Link>
                                <Link to="/search">Search</Link>
                                <Link to="/scheduledflightslist">view All</Link>
                             </div>
            </div>
          
          </div>

          <div className="col-sm-3 ">
        

                <div className="dropdown float-right mr-5">
                      <button className="dropbtn">Logout</button>
                          <div className="dropdown-content">
                               <Link to="/">Profile</Link>
                                <Link to="/">Delete</Link>
                                <Link to="/">Logout</Link>
                          </div>
                </div>

          </div>
      </nav>
        
        <div >
         
        <Switch>
          <Route path="/addflight">
            <AddFlight />
          </Route>

          <Route path="/flightslist">
            <GetList/>
          </Route>

          <Route path="/airportslist">
            <AirportsList/>
          </Route>

          <Route path="/modify" > 
          <Modify />
          </Route>

          <Route path="/search">
            <Search/>
          </Route> 

           <Route path="/scheduledflightslist">
            <FetchList />
          </Route>

          <Route path="/scheduleflight">
            <ScheduleForm />
          </Route> 

          <Route path="/modifyactions" > 
          <ModifyActions />
          </Route>

          <Route path="/">
              <Body />
          </Route>
        </Switch>
        </div>
      </Router>
      </div>
     
     )
 }

 export default Header;