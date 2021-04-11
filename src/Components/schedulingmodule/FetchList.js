import react, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {fetchAllSFlightsAction } from '../../redux/SFlightActions'
import Footer from '../Footer'
import Delete from './Delete'
import Modify from './Modify'
import { useHistory } from "react-router-dom";
import Header from '../Header'


function FetchList({getFlightList,fetchAllSFlightsAction})
{
    const history = useHistory();

    let [del,setDel]=useState(0)
    let [prop,setProp]=useState("0")
    
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


   
    function handledit(f) {

        if(f.flight.seatCapacity!=f.availableSeats)
        {
            alert("Passengers already booked this flight")
        }
        else{
        history.push({
            pathname: '/modify',
            state:f
            
      },)
    }
    }

   

    return getFlightList.loading ? (
        <>
        <Header/>
        <h2>Loading</h2>
        </>
      ) : getFlightList.error ? (
          <>
          <Header/>
        <h2 className='text-danger'>{getFlightList.error}</h2>
        </>
      ) : (
          <Router>
              <Header/>
          <div className="container-fluid list" style={{minHeight:"90vh"}}>
     <div id="marq">
     <marquee className="text-dark"
      style={{backgroundColor:"#f3d250"}}> Booked Flights can not be modified and deleted</marquee>
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

      <Switch>
        <Route path="/delete">
            <Delete id={prop}/>
        </Route>
       
    </Switch>

      <div id="row" className="container mt-1 ">
           
                {
                    getFlightList &&
                    getFlightList.fAllFlights &&
                    getFlightList.fAllFlights.map(f=>
                        <>
                       
    
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
                {  (f.flight.seatCapacity===f.availableSeats)?(
                                        <><div className="mt-2" >
                                          
                                        <button  className="btn btn-warning" id="editbtn" onClick={()=>handledit(f)}> Edit</button>
                                              
                                        </div>
                                        <div className="mt-3">
                                          <Link to="/delete" className="btn btn-danger" id="deletebtn"
                                          onClick={() => {
                                          

                                            if(window.confirm("Confirm to delete"))
                                            {
                                                setProp(f.scheduleFlightId)
              
                                            }
                                            
                                            }}
                                        >
                                           Delete</Link>    
                                        </div>   </>
                 ): ( <><div className="mt-2" >
                                          
                 <button  className="btn btn-warning" id="editbtn" disabled onClick={()=>handledit(f)}> Edit</button>
                       
                 </div>
                 <div className="mt-3">
                   <Link to="/delete" className="btn btn-danger" style={{pointerEvents:"none"}} id="deletebtn"
                   onClick={() => {
                   

                     if(window.confirm("Confirm to delete"))
                     {
                         setProp(f.scheduleFlightId)

                     }
                     
                     }}
                 >
                    Delete</Link>    
                 </div>   </>) }  </td>  
                              </tr>
                            <tr>
                                 <th scope="row"> {f.flight.carrierName}</th>
                                  <td className="font-weight-bold">{f.schedule.deptDate}</td>
                        
                                </tr>
                            <tr>
                                 <th scope="row">Seats: {f.flight.seatCapacity}</th>
                                 <td className="font-weight-bold">{f.schedule.deptTime}</td>
     
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
        getFlightList:state.fetchAllF
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        fetchAllSFlightsAction: ()=> dispatch(fetchAllSFlightsAction())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FetchList)



