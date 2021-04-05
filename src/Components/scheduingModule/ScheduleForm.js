import react, { useRef, useState ,useEffect} from 'react'
import {connect} from 'react-redux'
import {scheduleFlightAction } from '../../redux/SFlightActions'



function ScheduleForm({addFlight,scheduleFlightAction})
{

    const [sForm,setSForm]=useState(
        {
            scheduleFlightId: 0,
            flight: {
                flightNumber: 0,
                carrierName: "",
                flightModel: "",
                seatCapacity: 30
            },
            availableSeats: 30,
            schedule: {
                scheduleId: 0,
                srcAirport: "",
                dstnAirport: "",
                deptDate: "",
                arrDate: "",
                arrTime: "",
                deptTime: ""
            },
            costPerHead: 550.0
        } )


    let [submit,setSubmit]=useState( {
        scheduleFlightId: 0,
        flight: {
            flightNumber: 0,
            carrierName: "",
            flightModel: "",
            seatCapacity: 30
        },
        availableSeats: 0,
        schedule: {
            scheduleId: 0,
            srcAirport: "",
            dstnAirport: "",
            deptDate: "",
            arrDate: "",
            arrTime: "",
            deptTime: ""
        },
        costPerHead: 0.0
    } )

    // let [message,setMessage]=useState("")
    
    const initialRender = useRef(true);
    

    useEffect(()=>
    {
        if (initialRender.current)
         {
            initialRender.current = false;
          }
           else
            {
               scheduleFlightAction(sForm)
            
          }
         
        
    },[submit])


    function formValidate()
    {
      const form = document.querySelector('form')
      var fcarriername=form.elements.carriername.value
      var fmodelname=form.elements.flightmodel.value
      var fsourceairport=form.elements.sourceairport.value
      var fdestinationairport=form.elements.destinationairport.value
      var farrivaldate=form.elements.arrivaldate.value
      var fdeparturedate=form.elements.departuredate.value
      var farrivaltime=form.elements.arrivaltime.value
      var fdeparturetime=form.elements.departuretime.value
      var fseats=form.elements.seatcapacity.value
      var fcost=form.elements.costperhead.value
     

      
      var today = new Date();
      farrivaldate=new Date(farrivaldate);
      fdeparturedate=new Date(fdeparturedate);
      var error=document.getElementById("error")
      var error1=document.getElementById("error1")
      error1.innerHTML=""
      if(fcarriername.length<3)
      {
        error.innerHTML="Carrier Name must be minimum 3 char"
        document.getElementById("cn").focus()
       
       
      }
      else if(fmodelname.length<3)
      {
        error.innerHTML="Model Name must be minimum 3 char"
        document.getElementById("fm").focus()
        
      }
      else if(fsourceairport==fdestinationairport || fsourceairport=="select" || fdestinationairport=="select")
      {
        error.innerHTML="Source and Destination cannot be same"
       
      }
      else if(farrivaldate>fdeparturedate)
      {
        error.innerHTML="Arrival cannot be greater than Departure date"
       
      }
      else if(fdeparturedate<today)
      {
        error.innerHTML="Departure date cannot be today or previous days"
      
      }
     else if(today==fdeparturedate)
      {
        error.innerHTML="Departure date cannot be today or previous days"
      
      }
      else if(fseats<30)
      {
        error.innerHTML="Minimum seats 30"
      
      }
      else if(fcost<500.0)
      {
        error.innerHTML="Minimum cost 500"
       
      }
      else if(farrivaldate.length==0 || farrivaltime.length==0 || fdeparturedate.length==0 || fdeparturetime.length==0)
      
     {
       error.innerHTML="Date and Time must be selected"
   
     }
      else{ 
      
        error.innerHTML=""
        
       error1.innerHTML="Ready to Submit"

        const form = document.querySelector('form')
        form.addEventListener('submit', event => {
    
          
            event.preventDefault()
            
            
         })
        if(window.confirm("Are you so submit the From?"))
        {
        
           dispatchform()
           error1.innerHTML="submitted"
        }
        else{
          error1.innerHTML="Edit to submit"
        }
      }
    }

    function dispatchform()
    {
      setSubmit(sForm)
    }

   
      
     
    


    return(

        <div id="sform" className="container-fluid pt-4" style={{ backgroundColor: "#acb6e5",height:"100vh"}}>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">

                    <h4 className="font-weight-bold mb-2"> Scheduing Form </h4>
        <form action="#">
       

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="text"   name="carriername" id="cn" onInput={formValidate}  value={sForm.flight.fcarrierName}  onChange={e => setSForm({...sForm,flight:{...sForm.flight,carrierName : e.target.value}})} required={false} className="form-control" />
        <label className="form-label" >carrier Name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text"  name="flightmodel" required={false} id="fm" onInput={formValidate}  value={sForm.flight.flightModel}  onChange={e => setSForm({...sForm,flight:{...sForm.flight,flightModel : e.target.value}})} className="form-control" />
        <label className="form-label" >Flight Model</label>
      </div>
    </div>
  </div>

 
  <div class="form-outline mb-2">
  <select name = "sourceairport" className="form-control" onInput={formValidate}   value={sForm.schedule.srcAirport} onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,srcAirport : e.target.value}})}>
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

 
  <div class="form-outline mb-2">
  <select name = "destinationairport" className="form-control" onInput={formValidate}  value={sForm.schedule.dstnAirport} onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,dstnAirport : e.target.value}})}>
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
        <input type="date"  name="arrivaldate" required={false} onInput={formValidate}  value={sForm.schedule.arrDate} onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,arrDate : e.target.value}})} className="form-control" />
        <label className="form-label">Arrival Date</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="date"  name="departuredate" required={false}  onInput={formValidate} value={sForm.schedule.deptDate} onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,deptDate : e.target.value}})} className="form-control" />
        <label className="form-label" >Departure Date</label>
      </div>
    </div>
  </div>

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="number" min="30" max="200" required={false} onInput={formValidate}  value={sForm.flight.seatCapacity} 
         onChange={e => setSForm(
          {...sForm,
          flight:{...sForm.flight,seatCapacity : e.target.value},
        availableSeats:e.target.value}
          )} name="seatcapacity" className="form-control" />
        <label className="form-label" >Seat Capacity</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="number" min="500" name="costperhead" required={false} onInput={formValidate} value={sForm.costPerHead} onChange={e=> setSForm({...sForm,costPerHead:e.target.value})} className="form-control" />
        <label className="form-label" >costPerHead</label>
      </div>
    </div>
  </div>

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="time"  name="arrivaltime" required={false} onInput={formValidate}  value={sForm.schedule.arrTime} onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,arrTime : e.target.value}})} className="form-control" />
        <label className="form-label" >Arrival Time</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="time"  name="departuretime" required={false} onInput={formValidate}  value={sForm.schedule.deptTime}  onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,deptTime : e.target.value}})} className="form-control" />
        <label className="form-label" >Departure Time</label>
      </div>
    </div>
  </div>

  
<div className="text-danger" >

  <p id="error"></p>

</div>
<div className="row btn-group">
  <div className="btn">
      <input type="submit" value="" id="formsubmit"  disabled onClick={formValidate}/>
  </div>
  <div className="text-warning">
      {/* <input type="reset" id="formreset"  /> */}
    <p id="error1">  Edit form to submit</p>
  </div>
  </div>
      </form>
      </div>
      </div>
      </div>
        
    )
}

const mapStateToProps=state=>{
    return{
        addFlight:state.scheduleF
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        scheduleFlightAction: (sForm)=> dispatch(scheduleFlightAction(sForm))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ScheduleForm)

