import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import logof from '../pictures/logof.png'

 function BookingHeader()
 {
 
     return (

        <div className="bg">
         <Router>
        <nav id="navbar" className="row navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}}>

          <div className="container col-sm-12">
         < div className="col-sm-2">
              <img src={logof} style={{height:"45px",width:"45px",borderRadius:"50%"}}></img>
            <a className="navbar-brand font-weight-bold pl-2"  href="/boking">
              Fly Away
            </a>
            </div>
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
          
          

         
        

          <div className="dropdown ">
                    <button className="dropbtn w3-btn w3-round-xlarge profile1">Profile</button>
                            <div className="dropdown-content profile">
                                <a href="/profilebooking">Profile</a>
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

 export default BookingHeader;