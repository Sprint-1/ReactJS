import react, { useState,useEffect } from 'react'
import {connect} from 'react-redux'
import {deleteaFlightAction} from '../../redux/reduxflight/FlightAction'
import { useHistory } from "react-router-dom";

function Delete({deleteFlight,deleteaFlightAction,p})
{
    const history=useHistory()
    
     useEffect(()=>
     { 
        deleteaFlightAction(p)

        setTimeout( function() {
            myFunction();
        },1000)
     }
 ,[])

 function myFunction()
 {
     
   
     history.push({
         pathname:"/flightslist"
     })

     window.location.reload(false)
 }

    return deleteFlight.loading ? (
        <></>
      ) : deleteFlight.error ? (
        <p1 className='text-danger'>{deleteFlight.error} </p1>
      ) : (
                <p className="text-success">Flight with ID :  {deleteFlight.dFlight.flightNumber}  deleted successfully</p>
    )
}
const mapStateToProps=(state,props)=>{
    return{
        p:props.id,
        deleteFlight:state.deleteFght
    }
}

const mapDispatchToProps= (dispatch,props)=>{
    return{
        deleteaFlightAction: ()=> dispatch(deleteaFlightAction(props.id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Delete)
