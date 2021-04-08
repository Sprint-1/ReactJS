import react, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {fetchAllAirportsAction } from '../../redux/reduxairport/AirportActoins'
import Header from '../Header'




function AirportsList({getAirportList,fetchAllAirportsAction})
{
    //const history = useHistory();
    let [del,setDel]=useState(0)
    let [prop,setProp]=useState(" ")
    
    useEffect(()=>
        {
            fetchAllAirportsAction()
        }
    ,[])

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

   

    return getAirportList.loading ? (
        <>
        <Header/>
        <h2>Loading</h2>
        </>
      ) : getAirportList.error ? (
          <>
          <Header/>
        <h2 className='text-danger'>{getAirportList.error}</h2>
        </>
      ) : (
          <Router>
              <Header/>
          <div className="container-fluid" style={{ backgroundColor: "#acb6e5",height:"cover"}}>
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
                    getAirportList &&
                    getAirportList.fAllAirports &&
                    getAirportList.fAllAirports.map(a=>
                        <div id="col" className="column bg-white border border-tomato">
                        
                        <table className="table table-stripped">
                        <thead>
                             <tr className="table-danger">
                                 <th scope="col" >CODE :{a.airportCode}</th> 
                                 <th scope="col" >Location: {a.airportLocation}</th>
                                 <th scope="col" >AirportName :{a.airportName} </th>                                
                            </tr>
                         </thead>
                         <tbody>
                              
                            
                        </tbody>

                        </table>
                   
                        </div>
                    )
                }
           
       
      </div>

      
      </div>
    
      </Router>

    )
            }


const mapStateToProps=state=>{
    return{
        getAirportList:state.fetchAllA
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        fetchAllAirportsAction: ()=> dispatch(fetchAllAirportsAction())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AirportsList)



