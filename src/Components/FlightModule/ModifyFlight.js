import {connect} from 'react-redux'
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {updateaFlightAction } from '../../redux/reduxflight/FlightAction'


function ModifyFlight({updateFlight,updateaFlightAction,prop})
{
    const history=useHistory()

    
   
    useEffect(()=>{
        updateaFlightAction(prop.id,prop.uForm);
        setTimeout( function() {
            myFunction();
        },1000)
    },[])

    function myFunction()
    {
        alert("Updated Successfully")
        history.push({
            pathname:"/flightslist"
        })

        window.location.reload(false)
    }

    return updateFlight.loading ?(
        <div> Loading</div>
        
    ): updateFlight.error ?(
        <div className="alert alert-danger">{updateFlight.error}</div>
    ):
    (
            <div className="alert alert-success">Request Success</div>
    )

    
}
const mapStateToProps=(state,props)=>{
    return{
        prop:props,
        updateFlight:state.updateFlight
    }
}

const mapDispatchToProps= (dispatch,props)=>{
    return{
        

        updateaFlightAction: ()=> dispatch(updateaFlightAction(props.id,props.uForm))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModifyFlight)