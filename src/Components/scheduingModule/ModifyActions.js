import {connect} from 'react-redux'
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {updateaSFlightAction } from '../../redux/SFlightActions'


function ModifyActions({updateSFlight,updateaSFlightAction,prop})
{
    const history=useHistory()

    
   
    useEffect(()=>{
        updateaSFlightAction(prop.id,prop.uForm);
        setTimeout( function() {
            myFunction();
        },1000)
    },[])

    function myFunction()
    {
        alert("Updated Successfully")
        history.push({
            pathname:"/SFlightsListModule"
        })

        window.location.reload(false)
    }

    return (
        <></>
    )

    
}
const mapStateToProps=(state,props)=>{
    return{
        prop:props,
        updateSFlight:state.updateF
    }
}

const mapDispatchToProps= (dispatch,props)=>{
    return{
        

        updateaSFlightAction: ()=> dispatch(updateaSFlightAction(props.id,props.uForm))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModifyActions)