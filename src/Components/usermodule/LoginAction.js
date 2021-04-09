import {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router'
import axios from 'axios'
// import {loginAction} from '../../redux/reduxuser/UserActions'

function LoginAction(props)
{

    const history=useHistory()

        const [msg,setMsg]=useState("")

     useEffect(()=>
    {     
        axios
        .get(`http://localhost:9000/ftb/login/${props.userName}/${props.password}`)
        .then((response) => {

         if(response.data.userType==="admin")
         {
             sessionStorage.setItem("name",response.data.userName)
             sessionStorage.setItem("id",response.data.userId)
            history.push({
                pathname:'/body'
            })
  
            setTimeout(function(){
                myFunction()
              },1000)
        }
        else{
            sessionStorage.setItem("name",response.data.userName)
            sessionStorage.setItem("id",response.data.userId)
            history.push({
                pathname:'/booking'
            })
  
            setTimeout(function(){
                myFunction()
              },1000)
        }

        })
        .catch((error) => {
          setMsg(error.response.data);
         
        });
      
    },[])


    function myFunction()
    {
     window.location.reload(false)
    }
   

     return (
         <>
         <div className="alert alert-success">{msg}</div>
         </>
     )
    //loginuser.loading?(
    //     <div className="text-warning">{loginuser.loading}</div>
    // ) : loginuser.error ?(
    //     <div className="alert alert-danger">{loginuser.error}</div>
    // ):
    // (
    //         <div className="alert alert-success">Welcome {loginuser.lUser.userName} </div>
    // )

    
}

// const mapStateToProps=(state,props)=>{
//     return{

//         prop:props,
//         loginuser:state.loginU
//     }
// }

// const mapDispatchToProps= (dispatch,props)=>{
//     return{
//         loginAction: ()=> dispatch(loginAction(props.userName,props.password))
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(LoginAction)


export default LoginAction