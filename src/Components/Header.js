import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Body from './body/Body'
import FetchList from './scheduingModule/FetchList';
import ScheduleForm from './scheduingModule/ScheduleForm'
import Search from './scheduingModule/Search'

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
                    <button className="dropbtn w3-btn w3-round-xlarge">Schedule</button>
                            <div className="dropdown-content">
                               <Link to="/schedulingModule">Schedule Flight</Link>
                                <Link to="/">View</Link>
                                <Link to="/SFlightsListModule">view All</Link>
                             </div>
            </div>
            <div className="dropdown ">
                    <button className="dropbtn w3-btn w3-round-xlarge">Schedule</button>
                            <div className="dropdown-content">
                               <Link to="/schedulingModule">Schedule Flight</Link>
                                <Link to="/search">Search</Link>
                                <Link to="/SFlightsListModule">view All</Link>
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
         {/* <Route path="/">
            <Sample />
          </Route>

          <Route path="/">
            <Sample/>
          </Route>*/}

          <Route path="/search">
            <Search/>
          </Route> 

           <Route path="/SFlightsListModule">
            <FetchList />
          </Route>

          <Route path="/schedulingModule">
            <ScheduleForm />
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