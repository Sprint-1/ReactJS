import react, { useState,useEffect } from 'react'
import {connect} from 'react-redux'
import {deleteaSFlightAction} from '../../redux/SFlightActions'

function Delete({deleteFlight,deleteaSFlightAction,p})
{
    

     useEffect(()=>
     {
       
        deleteaSFlightAction(p)
     
     }
 ,[])


    return deleteFlight.loading ? (
        <></>
      ) : deleteFlight.error ? (
        // <div  className="alert alert-danger" role="alert"> </div> 
        <></>
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
