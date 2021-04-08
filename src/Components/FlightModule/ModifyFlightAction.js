import react from 'react'
import {useLocation} from 'react-router-dom'
import {useState} from 'react'
import ModifyFlight from './ModifyFlight'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from '../Header'

function ModifyFlightAction()
{
    const location = useLocation();
    const [fForm,setFForm]=useState(
        {
                flightNumber: location.state.flightNumber,
                carrierName: location.state.carrierName,
                flightModel: location.state.flightModel,
                seatCapacity: location.state.seatCapacity
        } )


        function handleSubmit()
        { 
           
            var fcarriername=document.getElementById("cn").value
            var fmodelname=document.getElementById("fm").value
            var fseats=document.getElementById("sc").value
        
            var link=document.getElementById("link")
            var error=document.getElementById("error")
            var error1=document.getElementById("error1")
            error1.innerHTML=""
            

      if(fcarriername.length<3)
      {
        error.innerHTML="Carrier Name must be minimum 3 char"
        //document.getElementById("cn").focus()
       
       
      }
      else if(fmodelname.length<3)
      {
        error.innerHTML="Model Name must be minimum 3 char"
        //document.getElementById("fm").focus()
        
      }
      else if(fseats<30)
      {
        error.innerHTML="Minimum seats 30"
      
      }
      else{ 
      
        error.innerHTML=""
        
       error1.innerHTML="Ready to Submit"
       link.style.display="block"

        }

      }


    return(
        <Router>
            <Header/>
        <div id="fform" className="container-fluid pt-4" style={{ backgroundColor: "#acb6e5",height:"100vh"}}>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <Switch>
          <Route path="/modifyflight">
              <ModifyFlight id={location.state.flightNumber} uForm={fForm}/>
          </Route>
      </Switch>
                    <h4 className="font-weight-bold mb-2"> Update Details </h4>
        <form  id="form">
       

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="text"   name="carriername" id="cn"  onInput={()=>handleSubmit()} value={fForm.carrierName}   className="form-control"  onChange={e => setFForm({...fForm,carrierName : e.target.value})} />
        <label className="form-label" >carrier Name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text"  name="flightmodel"  id="fm"   onInput={()=>handleSubmit()} value={fForm.flightModel} onChange={e => setFForm({...fForm,flightModel : e.target.value})}  className="form-control" />
        <label className="form-label" >Flight Model</label>
      </div>
    </div>
  </div>


  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="number" min="30" max="200" onInput={()=>handleSubmit()}   id="sc" value={fForm.seatCapacity}  name="seatcapacity" className="form-control" onChange={e => setFForm({...fForm,seatCapacity : e.target.value})} />
        <label className="form-label" >Seat Capacity</label>
      </div>
    </div>
  </div>
  
<div className="text-danger" >

  <p id="error"></p>

</div>

 
  <div className="text-warning">
      {/* <input type="reset" id="formreset"  /> */}
    <p id="error1" className="bg-dark">Fill the Form</p>
  </div>
  <div id="link" className="btn" style={{display:"none"}}>
        <Link to="/modifyflight" className="btn btn-primary font-weight-bold" >Update</Link>
        </div>
      </form>
     
      <div>
      </div>
      </div>
      </div>
      </div>
      </Router>
      
    )
}

export default ModifyFlightAction;