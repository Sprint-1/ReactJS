import react, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {fetchAllSFlightsAction } from '../../redux/SFlightActions'
import Footer from '../Footer'
import Delete from './Delete'


function FetchList({getFlightList,fetchAllSFlightsAction})
{
    let [del,setDel]=useState(0)
    let [prop,setProp]=useState(" ")
    
    useEffect(()=>
        {
            fetchAllSFlightsAction()
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

   

    return getFlightList.loading ? (
        <h2>Loading</h2>
      ) : getFlightList.error ? (
        <h2 className='text-danger'>{getFlightList.error}</h2>
      ) : (
          <Router>
          <div className="container-fluid" style={{ backgroundColor: "#acb6e5",height:"cover"}}>
     <div id="marq">
     <marquee className="text-dark"> Booked Flights can not be modified and deleted</marquee>
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

      <div id="row" className="container mt-1 ">
           
                {
                    getFlightList &&
                    getFlightList.fAllFlights &&
                    getFlightList.fAllFlights.map(f=>
                        <div id="col" className="column bg-white border border-tomato">
                        
                        <table className="table table-stripped">
                        <thead>
                             <tr className="table-danger">
                                 <th scope="col" >ID:{f.scheduleFlightId}</th>
                                 <th scope="col" >$ {f.costPerHead} /person</th>
                                 <th scope="col" >{f.availableSeats} Seats Left </th>                                
                            </tr>
                         </thead>
                         <tbody>
                              <tr>
                                  <th scope="row">FlightNO. {f.flight.flightNumber}</th>
                                    <td className="font-weight-bold">{f.schedule.srcAirport} -{'>'} {f.schedule.dstnAirport}</td>
                                    <td scope="col" rowSpan="3">
                                        <div className="mt-2" >
                                          
                                        <button className="btn btn-warning" id="editbtn"> Edit</button>
                                              
                                        </div>
                                        <div className="mt-3">
                                          <Link to="/delete" className="btn btn-danger" 
                                          onClick={() => {
                                          

                                            if(window.confirm("Confirm to delete"))
                                            {
                                                setProp(f.scheduleFlightId)
              
                                            }
                                            
                                            }}
                                        >
                                           Delete</Link>    
                                        </div>
                                        </td> 
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

      
      </div>
    <Switch>
        <Route path="/delete">
            <Delete id={prop}/>
        </Route>
    </Switch>
    
      </Router>

    )
}


const mapStateToProps=state=>{
    return{
        getFlightList:state.fetchAllF
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        fetchAllSFlightsAction: ()=> dispatch(fetchAllSFlightsAction())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FetchList)



