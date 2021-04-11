import react, { useRef, useState ,useEffect} from 'react'
import {connect} from 'react-redux'
import {AirportAction} from '../../redux/reduxairport/AirportActoins'
import Header from '../Header'
import homebg from '../pictures/homebg.jpg'
import {useHistory} from 'react-router-dom'
import Footer from '../Footer'



function AddAirport({airportForm,AirportAction})
{

    const history=useHistory()
    const [aForm,setAForm]=useState(
        {
                airportCode:"",
                airportLocation: "",
                airportName: "", 
        } )


    let [submit,setSubmit]=useState( 
        {
            airportCode:"",
            airportLocation: "",
            airportName: "",
    } )

    
    const initialRender = useRef(true);

    useEffect(()=>
    {
        if (initialRender.current)
         {
            initialRender.current = false;
          }
           else
            {
               AirportAction(aForm)
           
          }
         
        
    },[submit])

  


    function formValidate()
    {
      const form = document.querySelector('form')
      var fairportname=form.elements.airportname.value
      var fairportlocation=form.elements.airportlocation.value
      var fairportcode=form.elements.airportcode.value
      var addbtn=document.getElementById("formadd")
      
      var error=document.getElementById("error")
      var error1=document.getElementById("error1")
      error1.innerHTML=""

      if(fairportname.length<3)
      {
        error.innerHTML="Airport Name must be minimum 3 characters"  
      }
      else if(fairportlocation==="select")
      {
        error.innerHTML="Airport Location must be Selected"   
      }
      else if(fairportcode==="select")
      {
        error.innerHTML="Airport Code must be Selected"   
      }
      else{ 
      
        error.innerHTML=""
       error1.innerHTML="Ready to Submit"
      
     setTimeout(function(){
        myFunction1()
     },1000)
    }
    
    }
function myFunction1(){
    if(window.confirm("Proceed to Submit ?"))
    {
        

        setTimeout(function()
    {
        myFunction()
    },500)
   }
   else{
    var error1=document.getElementById("error1")
     error1.innerHTML="Edit"
   }
}

    function myFunction()
    {
        setSubmit(aForm)

        history.push({
            pathname:"/airportslist"
        })

        window.location.reload(false)
    }
    

    return(
<>
<Header/>
        <div id="aform" className="container-fluid pt-4" style={{
            backgroundImage: `url(${homebg})`,
            backgroundSize: "cover",
            height:"90vh"}}>
            <div className="row">
                <div className="col-sm-4"></div>
                <div id="containeraform" className="col-sm-4 p-4" style={{borderRadius:"30px"}}>

                    <h4 className="font-weight-bold mb-2 ">Add Airport</h4>
        <form action="#">
       

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="text"   name="airportname" id="cn" onInput={formValidate}  value={aForm.airportName}  onChange={e => setAForm({...aForm,airportName : e.target.value})} className="form-control" />
        <label className="form-label" >Airport Name</label>
      </div>
    </div>
    </div>
    <div class="form-outline mb-2">
  <select name = "airportlocation" className="form-control" onInput={formValidate}  value={aForm.airportLocation} onChange={e => setAForm({...aForm,airportLocation : e.target.value})}>
            <option value = "select" >--Select Airport Location--</option>
            <option value = "HYDERABAD">HYDERABAD</option>
            <option value = "BANGALORE">BANGALORE</option>
            <option value = "MUMBAI">MUMBAI</option>
            <option value = "KURNOOL">KURNOOL</option>
            <option value = "TIRUPATHI">TIRUPATHI</option>
            <option value = "CHENNAI">CHENNAI</option>
         </select>    
         <label className="form-label" >Airport Location</label>
          </div>
  
  
  <div class="form-outline mb-2">
  <select name = "airportcode" className="form-control" onInput={formValidate}  value={aForm.airportCode} onChange={e => setAForm({...aForm,airportCode : e.target.value})}>
            <option value = "select" >--Select Airport Code--</option>
            <option value = "INDIARGIA">INDIARGIA</option>
            <option value = "INDIAKGIA">INDIAKGIA</option>
            <option value = "INDIAMIA">INDIAMIA</option>
            <option value = "INDIAKIA">INDIAKIA</option>
            <option value = "INDIAGIA">INDIAGIA</option>
            <option value = "INDIATIA">INDIATIA</option>
         </select>    
         <label className="form-label" >Airport Code</label>
          </div>
  

<div className="text-danger" >

  <p id="error"></p>

</div>
<div className="row btn-group">
  
  <div className="text-warning">
      {/* <input type="reset" id="formreset"  /> */}
    <p id="error1"></p>
  </div>
  </div>
      </form> 
      {/* <div className="btn">
      <button  id="formadd" className="btn  btn-primary" disabled onSubmit={()=>{
          
              if(window.confirm("Are you sure to submit the From?"))
              {
                  setSubmit(aForm)
                 
              }
              else{
                  var error1=document.getElementById("error1")
                error1.innerHTML="Edit to submit"
              }
      
             
      }
    }
      >Save</button>
  </div> */}
      </div>
      </div>
      </div>
      <Footer/>
        </>
    )
}

const mapStateToProps=state=>{
    return{
        airportForm:state.scheduleA
    }
}

const mapDispatchToProps= dispatch=>{
    return{
       AirportAction: (aForm)=> dispatch(AirportAction(aForm))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddAirport)

