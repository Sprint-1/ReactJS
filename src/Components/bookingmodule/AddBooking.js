import react, { useRef, useState ,useEffect} from 'react'
import {connect} from 'react-redux'
import {useHistory, useLocation} from 'react-router-dom'
import {bookingAction } from '../../redux/reduxbooking/BookingActions'
import Footer from '../Footer'
import BookingHeader from './BookingHeader'
import homebg from '../pictures/homebg.jpg'


function AddBooking({book,bookingAction})
{

    const location=useLocation()

    console.log(location.state.id)
    const history=useHistory()

    const [bform,setbform]=useState(
        {
            bookingId: 0,
            userName:sessionStorage.getItem("name"),
            bookingDate:"",
            passengerList: 
            
                {
                luggage: 0,
                pnrNumber: 0,
                passengerName: "",
                passengerAge: 0,
                passengerUIN:""
            }
        ,
            ticketCost:0,
            scheduledFlightId:location.state.id,
            noOfPassengers:1
        } )


    let [submit,setSubmit]=useState( {
        bookingId: 0,
            userName:"",
            bookingDate:"",
            passengerList: 
                {
                luggage: 0,
                pnrNumber: 0,
                passengerName: "",
                passengerAge: 0,
                passengerUIN:""
            }
        ,
            ticketCost:0,
            scheduledFlightId:"",
            noOfPassengers:1
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
              bookingAction(bform)
                
              setTimeout(function(){

                myFunction()
              },500)
          }
         
        
    },[submit])


    function myFunction()
    {
        alert("Booked Successfully")
        history.push({
            pathname:'/mybookings'
        })
    }


   

    function formValidate()
    {
      const form = document.querySelector('form')
     
      var bpassengername=form.elements.passengername.value
      var bpassengerage=form.elements.passengerage.value
      var bpassengeruin=form.elements.passengeruin.value
      var bluggage=form.elements.luggage.value
    
      
      var error=document.getElementById("error")
      var error1=document.getElementById("error1")
      error1.innerHTML=""
    
      if(bpassengername.length<3)
      {
        error.innerHTML="Passenger Name must be minimum 3 char"
       
      }
      else if(bpassengerage<1  || bpassengerage>100)
      {
        error.innerHTML="Passenger Age must be between 1 and 100"
       
      }
      else if(bpassengeruin<10000000000|| bpassengeruin>99999999999)
      {
        error.innerHTML="Passenger UIN must be between 12 digits"
      
      }
      else{ 
      
        error.innerHTML=""
        
       error1.innerHTML="Ready to Submit"
        if(window.confirm("Are you so submit the From?"))
        {
        
           handleForm()
           error1.innerHTML="submitted"
        }
        else{
          error1.innerHTML="Edit to submit"
        }
      }
    }

    function handleForm()
    {

        setSubmit(bform);
        

    }


    return(
<>
<BookingHeader/>
        <div id="bform" className="container-fluid pt-4" style={{
            backgroundImage: `url(${homebg})`,
            backgroundSize: "cover",
            height:"90vh"}}>
            <div className="row content">
                <div className="col-sm-4"></div>
                <div id="containerbform" className="col-sm-4 p-4" style={{borderRadius:"30px"}}>

                    <h4 className="font-weight-bold mb-2"> Booking Form </h4>
        <form >
       
        <div className="col mb-2">
   
   
      <div className="form-outline">
        <input name="username" type="text"  disabled readOnly value={bform.userName} id="form3Example2" className="form-control" />
        <label className="form-label" >User Name</label>
     
  
  </div>

  
  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input name="passengername" type="text"  id="form3Example3" onInput={formValidate} value={bform.passengerList.passengerName}  onChange={e => setbform({...bform,passengerList:{...bform.passengerList,passengerName : e.target.value}})} required={true} className="form-control" />
        <label className="form-label" >Passenger Name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input name="passengerage" type="number" min="1" max="100"  id="form3Example4" onInput={formValidate} required={false} value={bform.passengerList.passengerAge}  onChange={e => setbform({...bform,passengerList:{...bform.passengerList,passengerAge : e.target.value}})} className="form-control" />
        <label className="form-label" >Passenger Age</label>
      </div>
    </div>
  </div>

  <div className="row mb-2">
    <div className="col">
      <div class="form-outline mb-2">
        <input name="passengeruin" type="number" min="100000000000"  onInput={formValidate} id="form3Example5" required={true} value={bform.passengerList.passengerUIN} onChange={e => setbform({...bform,passengerList:{...bform.passengerList,passengerUIN : e.target.value}})} class="form-control" />
        <label className="form-label" >Passenger UIN</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input name="luggage" type="number" min="0"   id="form3Example6" onInput={formValidate} required={false} value={bform.passengerList.luggage}  onChange={e => setbform({...bform,passengerList:{...bform.passengerList,luggage : e.target.value}})} className="form-control" />
        <label className="form-label" >Luggage Weight</label>
      </div>
    </div>
  </div>

<div className="text-danger" >

  <p id="error" style={{backgroundColor:""}}></p>

</div>
<div className="row btn-group">
  <div className="btn">
      {/* <input type="submit" value="" id="formsubmit"  disabled onClick={formValidate}/> */}
  </div>
  <div className="text-warning">
      {/* <input type="reset" id="formreset"  /> */}
    <p id="error1" style={{backgroundColor:""}}>  Edit form to submit</p>
  </div>
  </div>
     
      </div>
      </form>
      </div>
      </div>
      </div>
      <Footer/>
      </>
    )
}

const mapStateToProps=state=>{
    return{
        book:state.booking
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        bookingAction: (bform)=> dispatch(bookingAction(bform))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddBooking)