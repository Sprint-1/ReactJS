import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import logof from './pictures/logof.png'


 function Header()
 {
 
     return (

        <div className="bg">
         <Router>
        <nav id="navbar" className="row navbar navbar-expand-lg navbar-dark">

          <div className="container col-sm-9">
          < div className="col-sm-2">
              <img src={logof} style={{height:"45px",width:"45px",borderRadius:"50%"}}></img>
            <a className="navbar-brand font-weight-bold pl-2"  href="/body">
              Fly Away
            </a>
            </div>
           <a className="nav-link active font-weight-bolder" style={{color:"white"}} aria-current="page" href="/body">
           Home
           </a>
         
           <div className="dropdown">
                    <button className="dropbtn w3-btn w3-round-xlarge">Flight</button>
                            <div className="dropdown-content">
                               <a href="/addflight">Add Flight</a>
                                <a href="/flightslist">All Flights</a>
                             </div>
            </div>
            <div className="dropdown ">
                    <button className="dropbtn w3-btn w3-round-xlarge">Airport</button>
                            <div className="dropdown-content">
                               <a href="/addairport">Add Airport</a>
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
                          <a href="/profile">Profile</a>
                                <a href="/logout">Logout</a>
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