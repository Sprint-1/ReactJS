import react from 'react'
import {useLocation} from 'react-router-dom'
import {useState} from 'react'
import ModifyActions from './ModifyActions';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Modify()
{
    const location = useLocation();

   
    const [sForm,setSForm]=useState(
        {
            scheduleFlightId: location.state.scheduleFlightId,
            flight: {
                flightNumber: location.state.flight.flightNumber,
                carrierName: location.state.flight.carrierName,
                flightModel: location.state.flight.flightModel,
                seatCapacity: location.state.flight.seatCapacity
            },
            availableSeats: location.state.flight.seatCapacity,
            schedule: {
                scheduleId: location.state.schedule.scheduleFlightId,
                srcAirport: location.state.schedule.srcAirport,
                dstnAirport: location.state.schedule.dstnAirport,
                deptDate: location.state.schedule.deptDate,
                arrDate: location.state.schedule.arrDate,
                arrTime: location.state.schedule.arrTime,
                deptTime: location.state.schedule.deptTime
            },
            costPerHead: location.state.costPerHead
        } )


        function handleSubmit()
        { 
           
            var fsourceairport=document.getElementById("sairport").value
            var fdestinationairport=document.getElementById("dairport").value
            var farrivaldate=document.getElementById("adate").value
            var fdeparturedate=document.getElementById("ddate").value
            var farrivaltime=document.getElementById("atime").value
            var fdeparturetime=document.getElementById("dtime").value
            var fcost=document.getElementById("cph").value
            var link=document.getElementById("link")

            var error1=document.getElementById("error1")
            error1.innerHTML=""
            var today = new Date();
            farrivaldate=new Date(farrivaldate);
            fdeparturedate=new Date(fdeparturedate);

          


     if(fsourceairport===fdestinationairport || fsourceairport==="select" || fdestinationairport==="select")
      {
        error1.innerHTML="Source and Destination cannot be same"
        
       
      }
      else if(farrivaldate>fdeparturedate)
      {
        error1.innerHTML="Arrival cannot be greater than Departure date"
      
       
      }
      else if(fdeparturedate<today)
      {
        error1.innerHTML="Departure date cannot be today or previous days"
        
       
      }
     else if(today===fdeparturedate)
      {
        error1.innerHTML="Departure date cannot be today or previous days"
   
       
      }
      else if(fcost<500.0)
      {
        error1.innerHTML="Minimum cost 500"
       
       
      }
      else if(farrivaldate.length===0 || farrivaltime.length===0 || fdeparturedate.length===0 || fdeparturetime.length===0)
      
      {
       error1.innerHTML="Date and Time must be selected"
      
       
      }
      else
      {
        error1.innerHTML=" "
       link.style.display="block"
      
      }

  }

 

  
    
  

    return(
        <Router>
        <div id="sform" className="container-fluid pt-4" style={{ backgroundColor: "#acb6e5",height:"100vh"}}>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">

                    <h4 className="font-weight-bold mb-2"> Update Details </h4>
        <form  id="form">
       

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="text"   name="carriername" id="cn"   value={sForm.flight.carrierName} readOnly disabled  className="form-control" />
        <label className="form-label" >carrier Name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text"  name="flightmodel" disabled id="fm"   value={sForm.flight.flightModel} readOnly className="form-control" />
        <label className="form-label" >Flight Model</label>
      </div>
    </div>
  </div>

 
  <div className="form-outline mb-2">
  <select name = "sourceairport" className="form-control"   id="sairport" onInput={()=>handleSubmit()}  onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,srcAirport : e.target.value}})}>
            <option value = "select" >--Select Airport--</option>
            <option value = "INDIARGIA" >Hyderabad</option>
            <option value = "INDIAKGIA">Bangalore</option>
            <option value = "INDIAMIA">Mumbai</option>
            <option value = "INDIAKIA">Kurnool</option>
            <option value = "INDIAGIA">Tirupathi</option>
            <option value = "INDIATIA">Chennai</option>
         </select>   
      <label className="form-label" >Source Airport</label>
  </div>

 
  <div className="form-outline mb-2">
  <select name = "destinationairport" className="form-control"  id="dairport" onInput={()=>handleSubmit()}  onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,dstnAirport: e.target.value}})} >
            <option value = "select" >--Select Airport--</option>
            <option value = "INDIARGIA" >Hyderabad</option>
            <option value = "INDIAKGIA">Bangalore</option>
            <option value = "INDIAMIA">Mumbai</option>
            <option value = "INDIAKIA">Kurnool</option>
            <option value = "INDIAGIA">Tirupathi</option>
            <option value = "INDIATIA">Chennai</option>
         </select>    <label className="form-label" >Destination Airport</label>
  </div>


  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="date"  name="arrivaldate" onInput={()=>handleSubmit()}   id="adate" onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,arrDate: e.target.value}})} className="form-control" />
        <label className="form-label">Arrival Date</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="date"  name="departuredate" onInput={()=>handleSubmit()} id="ddate"   onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,deptDate : e.target.value}})} className="form-control" />
        <label className="form-label" >Departure Date</label>
      </div>
    </div>
  </div>

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="number" min="30" max="200" onInput={()=>handleSubmit()}  disabled readOnly value={sForm.flight.seatCapacity}  name="seatcapacity" className="form-control" />
        <label className="form-label" >Seat Capacity</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="number" min="500" name="costperhead" onInput={()=>handleSubmit()} id="cph"  onChange={e => setSForm({...sForm,costPerHead: e.target.value})}  className="form-control" />
        <label className="form-label" >costPerHead</label>
      </div>
    </div>
  </div>

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="time"  name="arrivaltime" onInput={()=>handleSubmit()} id="atime"  onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,arrTime : e.target.value}})} className="form-control" />
        <label className="form-label" >Arrival Time</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="time"  name="departuretime" onInput={()=>handleSubmit()} id="dtime"  onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,deptTime : e.target.value}})} className="form-control" />
        <label className="form-label" >Departure Time</label>
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
        <Link to="/modifyactions" className="btn btn-primary font-weight-bold" >Update</Link>
        </div>
      </form>
      <Switch>
          <Route path="/modifyactions">
              <ModifyActions id={location.state.scheduleFlightId} uForm={sForm}/>
          </Route>
      </Switch>
      <div>
      </div>
      </div>
      </div>
      </div>
      </Router>
      
    )
}

export default Modify;

