import react, { useState,useEffect } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {searchforFlightAction} from '../../redux/SFlightActions'

function SearchFlightAction({searchFlight,searchforFlightAction,credentials})
{

    function preback()
        {
          window.history.forward();
        }
        setTimeout(preback(),0);
      
        window.onunlod=()=>(null);
  

    const history=useHistory()

     useEffect(()=>
     {
      
       
        searchforFlightAction(credentials.src,credentials.dstn,credentials.date)
     }
 ,[credentials])



 function handleBook(id)
 {
    
    history.push({
        pathname:'/addbooking',
        state:{id}

    })
  window.location.reload(false)

 }

    return searchFlight.loading ? (
        <></>
      ) : searchFlight.error ? (
        <div  className="alert alert-danger" role="alert">{searchFlight.error} </div>
      ) : (
        <div id="row" className="container mt-1 ">
           
        {
            searchFlight &&
            searchFlight.sSFlight &&
            searchFlight.sSFlight.map(f=>
                <div id="col" className="column bg-white border border-tomato">
                
                <table className="table table-stripped">
                <thead>
                     <tr className="table-danger">
                         <th scope="col" >ID:{f.scheduleFlightId}</th>
                         <th scope="col" >$ {f.costPerHead} /person *  {f.availableSeats} Seats Left</th>
                                            
                    </tr>
                 </thead>
                 <tbody>
                      <tr>
                          <th scope="row">FlightNO. {f.flight.flightNumber}</th>
                            <td className="font-weight-bold">{f.schedule.srcAirport} -{'>'} {f.schedule.dstnAirport}</td>
                            
                      </tr>
                    <tr>
                         <th scope="row">CarrierName: {f.flight.carrierName}</th>
                          <td className="font-weight-bold">{f.schedule.deptDate}</td>
                
                        </tr>
                    <tr>
                         <th scope="row" className="mr-5"> Seats: {f.flight.seatCapacity}  
                </th>
                         <td className="font-weight-bold">{f.schedule.deptTime}</td>

                     </tr>
                     <tr>
                         <td colspan="2">
                         <div className="btn">
                {
                    (f.availableSeats<1)?
                    (
                        <button className="btn btn-primary" disabled onClick={()=>handleBook(f.scheduleFlightId)}>Book</button>
                    ):
                    (
                        <button className="btn btn-primary" onClick={()=>handleBook(f.scheduleFlightId)}>Book</button>
                    )
                }
                </div>
                         </td>

                     </tr>
                    
                </tbody>
             
                </table>
           
                </div>
            )
        }
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    return{
        credentials:props.cred,
        searchFlight:state.searchF
    }
}

const mapDispatchToProps= (dispatch,props)=>{
    return{
        searchforFlightAction: ()=> dispatch(searchforFlightAction(props.cred.src,props.cred.dstn,props.cred.date))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchFlightAction)
