import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


 function BookingHeader()
 {
 
     return (

        <div className="bg">
         <Router>
        <nav id="navbar" className="row navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}}>

          <div className="container col-sm-9">
            <Link className="navbar-brand font-weight-bold" to="/">
              Fly Away
            </Link>
            <a className="nav-link active font-weight-bolder text-white" aria-current="page" href="/booking">
                Home
           </a>
          
            <div className="dropdown ">
                    <button className="dropbtn w3-btn w3-round-xlarge">Booking</button>
                            <div className="dropdown-content">
                                <a href="/searchflights">Search</a>
                                <a href="/mybookings">MyBookings</a>
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

 export default BookingHeader;