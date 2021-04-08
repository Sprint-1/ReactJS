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
            <a className="nav-link active font-weight-bolder text-white" aria-current="page" href="/">
                Home
           </a>
           <div className="dropdown ">
                    <button className="dropbtn w3-btn w3-round-xlarge">Flight</button>
                            <div className="dropdown-content">
                               <a href="/addflight">Add Flight</a>
                                <a href="/flightslist">All Flights</a>
                             </div>
            </div>
            <div className="dropdown ">
                    <button className="dropbtn w3-btn w3-round-xlarge">Airport</button>
                            <div className="dropdown-content">
                               <a href="/">Add Airport</a>
                                <a href="/airportslist">All Airports</a>
                             </div>
            </div>
            <div className="dropdown ">
                    <button className="dropbtn w3-btn w3-round-xlarge">Schedule</button>
                            <div className="dropdown-content">
                               <a href="/scheduleflight">Schedule Flight</a>
                                <a href="/search">Search</a>
                                <a href="/scheduledflightslist">view All</a>
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
         
       
        </div>
      </Router>
      </div>
     
     )
 }

 export default Header;