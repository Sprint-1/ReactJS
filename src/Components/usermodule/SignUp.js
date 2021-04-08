import react, { useRef, useState ,useEffect} from 'react'
import {connect} from 'react-redux'
import { validEmail} from './Regex.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import SignUpAction from './SignUpAction.js';
import Header from './Header.js';



function SignUp({adduser,registerAction})
{

    const [SgUForm,setSgUForm]=useState(
        {
          userType: "",
          userName: "",
          password: "",
          mobileNumber: "",
          email: ""
        } )


    let [submit,setSubmit]=useState( {
      userType: "",
      userName: "",
      password: "",
      mobileNumber: "",
      email: ""
    } )


    function formValidate()
    {
      const form = document.querySelector('form')
      var uType=form.elements.usertype.value
      var uName=form.elements.username.value
      var upassword=form.elements.password.value
      var mobileNumber=form.elements.mobilenumber.value
      var uEmail=form.elements.email.value
      var link=document.getElementById("formregister")
    
      var error=document.getElementById("error")
      var error1=document.getElementById("error1")
      error1.innerHTML=""
      if(uName.length<3)
      {
        error.innerHTML="User Name must be minimum 3 char"
 
      }
      else if(uType==="select")
      {
          error1.innerHTML="select usertype"
      }
      else if(upassword.length<8)
      {
        error.innerHTML="Password must be minimum 8 char"
       
      }
      else if(mobileNumber.length!=11 && mobileNumber.length!=12)
      {
        error.innerHTML="mobile number 11/12 digits"
       
      }
      else if(!validEmail.test(uEmail))
      {
        error.innerHTML="Enter valid mail"
      
      }
      else{ 
       error.innerHTML=" "
        link.style.pointerEvents="auto"  
      }
    }

   

   
      
     
    


    return(
        <Router>
            <Header/>
        <div id="SgUForm" className="container-fluid pt-4" style={{ backgroundColor: "#acb6e5",height:"100vh"}}>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">

<Switch>
    <Route path="/signupactions">
        <SignUpAction SgUForm={SgUForm}/>
    </Route>
</Switch>
                    <h4 className="font-weight-bold mb-4"> Registration Form </h4>


        <form action="#" id='form'>
       

  <div className="row mb-2">
  <div className="col">
      <div className="form-outline">
        <input type="text"  name="username" required={true} id="fm" onInput={formValidate}  value={SgUForm.userName}  onChange={e => setSgUForm({...SgUForm,userName : e.target.value})} className="form-control" />
        <label className="form-label" >User Name</label>
      </div>
    </div>
    </div>
    <div className="form-outline mb-2">
  <select name = "usertype" className="form-control" onInput={formValidate}   value={SgUForm.userType} onChange={e => setSgUForm({...SgUForm,userType : e.target.value})}>
            <option value = "select" >--Type of User--</option>
            <option value = "customer" >Customer</option>
            <option value = "admin">Admin</option>
           
         </select>   
      <label className="form-label" >User Type </label>
  </div>


  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="password"  name="password" required={true} onInput={formValidate}  value={SgUForm.password} onChange={e => setSgUForm({...SgUForm,password : e.target.value})} className="form-control" />
        <label className="form-label">Password</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text"  name="mobilenumber" required={true}  onInput={formValidate} value={SgUForm.mobileNumber} onChange={e => setSgUForm({...SgUForm,mobileNumber : e.target.value})} className="form-control" />
        <label className="form-label" >Mobile Number</label>
      </div>
    </div>
  </div>

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="email"  name="email" required={false} onInput={formValidate} value={SgUForm.email} onChange={e=> setSgUForm({...SgUForm,email:e.target.value})} className="form-control" />
        <label className="form-label" >Email</label>
      </div>
    </div>
  </div>

  

  
<div className="text-danger" >

  <p id="error" style={{backgroundColor:"black"}}></p>

</div>
<div className="row btn-group">
  
  <div className="text-warning">
     
    <p id="error1" style={{backgroundColor:"black"}}></p>
  </div>
  </div>
      </form>
      <div className="btn btn-primary ">
      <Link to="/signupactions"   id="formregister"   style={{pointerEvents:"none",color:"black"}} >Register</Link>
  </div>
      </div>
      </div>
      </div>
      </Router>

    )
}

export default SignUp;