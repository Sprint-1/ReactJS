import react, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {fetchAllFlightsAction } from '../../redux/reduxflight/FlightAction'
import Footer from '../Footer'
// import Delete from './Delete'


function GetList({flightsList,fetchAllFlightsAction})
{
    let [del,setDel]=useState(0)
    let [prop,setProp]=useState(" ")
    
    useEffect(()=>
        {
            fetchAllFlightsAction()
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

   

    return flightsList.loading ? (
        <h2>Loading</h2>
      ) : flightsList.error ? (
        <h2 className='text-danger'>{flightsList.error}</h2>
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
                    flightsList &&
                    flightsList.fAllFlights &&
                    flightsList.fAllFlights.map(f=>
                        <div id="col" className="column bg-white border border-tomato">
                        
                        <table className="table table-stripped">
                        <thead>
                             <tr className="table-danger">
                                 <th scope="col" >Flight ID:{f.flightNumber}</th>                              
                            </tr>
                         </thead>
                         <tbody>
                              <tr>
                                  <th scope="row">FlightNo. {f.flightNumber}</th>
                                    <td scope="col" rowSpan="3">
                                        <div className="mt-2" >
                                          
                                        <button className="btn btn-warning" id="editbtn"> Edit</button>
                                              
                                        </div>
                                        <div className="mt-3">
                                          <Link to="/delete" className="btn btn-danger" 
                                          onClick={() => {
                                          

                                            if(window.confirm("Confirm to delete"))
                                            {
                                                setProp(f.flight.flightNumber)
              
                                            }
                                            
                                            }}
                                        >
                                           Delete</Link>    
                                        </div>
                                        </td> 
                              </tr>
                            <tr>
                                 <th scope="row">{f.carrierName}</th>
                                  
                        
                                </tr>
                            <tr>
                                 <th scope="row">Seats : {f.seatCapacity}</th>
                                 
     
                             </tr>
                        </tbody>

                        </table>
                   
                        </div>
                    )
                }
           
       
      </div>

      
      </div>
    {/* <Switch>
        <Route path="/delete">
            <Delete id={prop}/>
        </Route>
    </Switch> */}
    
      </Router>

    )
}


const mapStateToProps=state=>{
    return{
        flightsList:state.fetchAllFlight
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        fetchAllFlightsAction: ()=> dispatch(fetchAllFlightsAction())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(GetList)



