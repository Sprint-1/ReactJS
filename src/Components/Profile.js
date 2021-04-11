import BookingHeader from "./bookingmodule/BookingHeader";
import react, { useRef, useState ,useEffect} from 'react'
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios'
import kalam from './pictures/kalam.png'

function Profile()
{
    const [profile,setProfile]=useState(
        {
          userType: "",
          userName: "",
          password: "",
          mobileNumber: "",
          email: ""
        } )


    useEffect(()=>
    {     
        axios
        .get(`http://localhost:9000/ftb/login/${sessionStorage.getItem("name")}/${sessionStorage.getItem("password")}`)
        .then((response) => {

            setProfile(response.data)
        })
        .catch((error) => {
          
         
        });
      
    },[])


    return (
<>
<Header/>
<div className="container-fluid " id="pro" >
<div className="procontainer">

<div className="row">
    <div className="col-sm-4 p-4 mt-2">
 <img style={{height:"300px",width:"300px",borderRadius:"50%"}} src={kalam}></img>
    </div>
    <div className="col-sm-8 p-5">
      <h4 className="font-weight-bold " style={{color:"white"}}><u>Profile Details</u></h4>
      <br></br>
      <p style={{color:"white"}}> User Name : {profile.userName}</p>
      <p style={{color:"white"}}> Email : {profile.email}</p>
      <p style={{color:"white"}}> contact : {profile.mobileNumber}</p>
    </div>

</div>
</div>

</div>
<Footer/>
</>
    )
}

export default Profile