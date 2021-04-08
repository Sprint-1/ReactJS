import {useEffect} from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router'
import {registerAction} from '../../redux/reduxuser/UserActions'

function SignUpAction({adduser,registerAction,SgUForm})
{

    const history=useHistory()

     useEffect(()=>
    {
       
        registerAction(SgUForm)
         
        setTimeout(function(){

            myFunction()
        },1000)
        
    },[])

    function myFunction()
    {
        history.push(
            {
                pathname:"/login"
            }
        )
        window.location.reload(false)
    }


    return adduser.loading?(
        <div className="text-warning">{adduser.loading}</div>
    ) : adduser.error ?(
        <div className="alert alert-danger">{adduser.error}</div>
    ):
    (
            <div className="alert alert-success">Success ! proceed to login </div>
    )

    
}

const mapStateToProps=(state,props)=>{
    return{

        SgUForm:props.SgUForm,
        adduser:state.addU
    }
}

const mapDispatchToProps= (dispatch,props)=>{
    return{
        registerAction: (SgUForm)=> dispatch(registerAction(props.SgUForm))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUpAction)