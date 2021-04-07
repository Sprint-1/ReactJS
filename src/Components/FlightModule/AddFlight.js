import react, { useRef, useState ,useEffect} from 'react'
import {connect} from 'react-redux'
import {FlightAction } from '../../redux/ReduxFlight/FlightAction'



function AddFlight({addFlight,FlightAction})
{

    const [fForm,setFForm]=useState(
        {
            
                flightNumber: 0,
                carrierName: "",
                flightModel: "",
                seatCapacity: 30
            
           
        } )


    let [submit,setSubmit]=useState( {
        
            flightNumber: 0,
            carrierName: "",
            flightModel: "",
            seatCapacity: 30
        
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
               FlightAction(fForm)
            
          }
         
        
    },[submit])


    function formValidate()
    {
      const form = document.querySelector('form')
      var fcarriername=form.elements.carriername.value
      var fmodelname=form.elements.flightmodel.value
      var fseats=form.elements.seatcapacity.value
     
     

      
      
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
      setSubmit(fForm)
    }

   
      
     
    


    return(

        <div id="fform" className="container-fluid pt-4" style={{ backgroundColor: "#acb6e5",height:"100vh"}}>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">

                    <h4 className="font-weight-bold mb-2"> Flight Form </h4>
        <form action="#">
       

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="text"   name="carriername" id="cn" onInput={formValidate}  value={fForm.fcarrierName}  onChange={e => setFForm({...fForm,carrierName : e.target.value})} required={false} className="form-control" />
        <label className="form-label" >carrier Name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text"  name="flightmodel" required={false} id="fm" onInput={formValidate}  value={fForm.flightModel}  onChange={e => setFForm({...fForm,flightModel : e.target.value})} className="form-control" />
        <label className="form-label" >Flight Model</label>
      </div>
    </div>
  </div>



  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="number"name="seatcapacity" min="30" max="200" required={false} onInput={formValidate}  value={fForm.seatCapacity} 
         onChange={e => setFForm({...fForm,seatCapacity : e.target.value})} className="form-control" />
        <label className="form-label" >Seat Capacity</label>
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
        addFlight:state.addFlight
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        FlightAction: (fForm)=> dispatch(FlightAction(fForm))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddFlight)

