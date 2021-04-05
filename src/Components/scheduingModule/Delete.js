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
        <p1 className='text-danger'>{deleteFlight.error} </p1>
      ) : (
                <p className="text-success">Flight with ID : {p} {deleteFlight.dFlight}  Refresh to see Changes </p>
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
