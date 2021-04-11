import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import wallpaper from '../pictures/adminbg.jpg'

function Body()
{
    return (
            <>
            <Header/>
       
        <div  id="bimg" className="container-fluid "  style={{
            backgroundImage: `url(${wallpaper})`,
            backgroundSize: "cover",
            height:"87vh"}} >
                <div class="container admincard pt-5" >
  <div class="row align-items-start">
    <div class="col mr-3">
  <p className="font-weight-bold">  Users </p>
A users scope is limited to viewing available flights,booking,viewing his booking <br></br>
Total users on flyaway- 12,000 <br></br>
Active users at this time-3,000
    </div>
    <div class="col mr-3">
    <p className="font-weight-bold">  Admin</p>
    An admin can view flights,schedule of flights,airports and add the same. Can also modify flights and schedule of flights.<br></br>
Total admins on flyaway- 200
    </div>
    <div class="col">
    <p className="font-weight-bold">  Staff</p>
    Flyaway has now recruited its 1000th employee to help spread the joy of flying
    </div>
  </div>
  <div class="row align-items-center mt-3">
    <div class="col mr-3">
    <p className="font-weight-bold">  Flights</p>
    A total of 2000 flights are available on the database open for booking to its customers 
    </div>
    <div class="col mr-3">
    <p className="font-weight-bold"> Airports</p>
    Flyaway provides a connect for its users between 6+ airports.
    </div>
    <div class="col">
    <p className="font-weight-bold"> Schedule</p>
    Flyaway successfully booked an average of 150 tickets per day .
    </div>
  </div>
  <div class="row align-items-end mt-3">
    <div class="col mr-3">
    <p className="font-weight-bold"> Active Runways</p>
    Click to see the active runway at each airport 
    </div>
    <div class="col mr-3">
    <p className="font-weight-bold">Total Bookings</p>
    Up to date, flyaway has successfully helped 10,000+ experience the joy of flying
    </div>
    <div class="col">
    <p className="font-weight-bold">Partner-Airlines</p>
    FlyAway is a proud partner with 
     <br></br>
     Indigo <br></br>AirIndia  <br></br>Asian Airways  <br></br>and many more
    </div>
  </div>
</div> 

        </div>
       
        <Footer/>
 </>
    )
}

export default Body;