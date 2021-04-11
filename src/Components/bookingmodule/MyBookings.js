import react, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {fetchAllBookingsAction } from '../../redux/reduxbooking/BookingActions'
import { useHistory } from "react-router-dom";
import BookingHeader from './BookingHeader';
import Footer from '../Footer';



function MyBookings({bookingsList,fetchAllBookingsAction})
{
    const history = useHistory();

    let [del,setDel]=useState(0)
    let [prop,setProp]=useState("0")
    
    useEffect(()=>
        {
            fetchAllBookingsAction(sessionStorage.getItem("name"))
        }
    ,[del])

    var elements = document.getElementsByClassName("column");

    var i;


    const listView=()=>{
        for (i = 0; i < elements.length; i++) {
            elements[i].style.width = "100%";
          }
    }

    const gridView=()=>{

        for (i = 0; i < elements.length; i++) {
            elements[i].style.width = "50%";
          }

    }


   
    function handledit(f) {

    //     if(f.flight.seatCapacity!=f.availableSeats)
    //     {
    //         alert("Passengers already booked this flight")
    //     }
    //     else{
    //     history.push({
    //         pathname: '/modify',
    //         state:f
            
    //   },)
   // }
    }

   

    return bookingsList.loading ? (
        <>
        <BookingHeader/>
        <h2>Loading</h2>
        </>
      ) : bookingsList.error ? (
          <>
           <BookingHeader/>
        <h2 className='text-danger'>{bookingsList.error}</h2>
        </>
      ) : (
          <Router>
              <BookingHeader/>
          <div className="container-fluid list" style={{ backgroundColor: "#acb6e5",minHeight:"90vh"}}>
     <div id="marq">
     <marquee className="text-dark" style={{backgroundColor:"#f3d250"}}>Bookings made by you</marquee>
     </div>
         <div id="btnContainer" className="container-fluid" >
            <div className="container  col-sm-9" style={{ backgroundColor: "#acb6e5"}}>
        <button className=" btn btn-outline-dark m-1 text-dark font-weight-bold " style={{ backgroundColor: "Aqua"}} onClick={listView}>List </button> 
        <button className=" btn btn-outline-dark ml-3 text-dark font-weight-bold" style={{ backgroundColor: "Aqua"}}  onClick={gridView}> Grid</button>
        <button id="refreshbtn" className=" btn btn-outline-dark m-1 text-dark font-weight-bold float-right" style={{ backgroundColor: "Aqua"}} 
         onClick={()=>
            setDel(prevDel=>prevDel+1)}> R</button>
     
      </div>
      </div>

      {/* <Switch>
        <Route path="/delete">
            <Delete id={prop}/>
        </Route> 
       
    </Switch>*/}

      <div id="row" className="container mt-1 ">
           
                {
                    bookingsList &&
                    bookingsList.fAllBookings &&
                    bookingsList.fAllBookings.map(b=>
                        <>
                       
    
                        <div id="col" className="column bg-white border border-tomato">
                        <table className="table table-stripped">
                        <thead>
                             <tr className="table-danger">
                                 <th scope="col" >Booking ID:{b.bookingId}</th>
                                 <th scope="col" >Date: {b.bookingDate} </th>
                                 <th scope="col" >Amount:{b.ticketCost}  </th>                                
                            </tr>
                         </thead>
                         <tbody>
                              <tr>
                                  <th scope="row">Flight No. {b.scheduledFlightId}</th>
                                    <td className="font-weight-bold">Pasenger Name :{b.passengerList[0].passengerName}</td>
                                    <td scope="col" rowSpan="3">
              
                                        <div className="mt-2" >
                                          
                                        <button  className="btn btn-warning" id="editbtn" onClick={()=>handledit(b)}> Edit</button>
                                              
                                        </div>
                                        <div className="mt-3">
                                          <Link to="/delete" className="btn btn-danger" id="deletebtn"
                                          onClick={() => {
                                          

                                            if(window.confirm("Confirm to delete"))
                                            {
                                                setProp(b.bookingId)
              
                                            }
                                            
                                            }}
                                        >
                                           Delete</Link>  
                                           </div>  
                                        </td>  
                              </tr>
                            <tr>
                                 <th scope="row">Age : {b.passengerList[0].passengerAge}</th>
                                  <td className="font-weight-bold">Passport ID: {b.passengerList[0].passengerUIN}</td>
                        
                                </tr>
                            <tr>
                                 <th scope="row">Luggage: {b.passengerList[0].luggage} kgs</th>
                                 <td className="font-weight-bold">PNR Number :{b.passengerList[0].pnrNumber}</td>
     
                             </tr>
                        </tbody>

                        </table>
                   
                        </div>
                        </>
                    )
                }
           
       
      </div>

      </div>
   <Footer/>
      </Router>

    )
}


const mapStateToProps=state=>{
    return{
        bookingsList:state.fetchAllB
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        fetchAllBookingsAction: ()=> dispatch(fetchAllBookingsAction(sessionStorage.getItem("name")))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MyBookings)



