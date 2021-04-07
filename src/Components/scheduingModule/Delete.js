import react, { useState,useEffect } from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {deleteaSFlightAction} from '../../redux/SFlightActions'

function Delete({deleteFlight,deleteaSFlightAction,p})
{
    
    const history=useHistory()
     useEffect(()=>
     {
       
        deleteaSFlightAction(p)
        setTimeout( function() {
            myFunction();
        },1000)
     
     }
 ,[])

 function myFunction()
 {
     
   
     history.push({
         pathname:"/scheduledflightslist"
     })

     window.location.reload(false)
 }


    return deleteFlight.loading ? (
        <></>
      ) : deleteFlight.error ? (
         <div  className="alert alert-danger" role="alert">{deleteFlight.error} </div> 
      
      ) : (
        <div  className="alert alert-success" role="alert">Flight with ID : {p} {deleteFlight.dFlight}  Refresh to see Changes </div>
    )
}
const mapStateToProps=(state,props)=>{
    return{
        p:props.id,
        deleteFlight:state.deleteF
    }
}

const mapDispatchToProps= (dispatch,props)=>{
    return{
        deleteaSFlightAction: ()=> dispatch(deleteaSFlightAction(props.id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Delete)
