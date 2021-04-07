import react, { useState,useEffect } from 'react'
import {connect} from 'react-redux'
import {searchforFlightAction} from '../../redux/SFlightActions'

function SearchActions({searchFlight,searchforFlightAction,credentials})
{

     useEffect(()=>
     {
       
        searchforFlightAction(credentials.src,credentials.dstn,credentials.date)
     }
 ,[credentials])

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
                         <th scope="row">Seats: {f.flight.seatCapacity}</th>
                         <td className="font-weight-bold">{f.schedule.deptTime}</td>

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


export default connect(mapStateToProps,mapDispatchToProps)(SearchActions)
