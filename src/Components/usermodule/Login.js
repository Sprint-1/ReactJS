import react, { useRef, useState ,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from './Header'
import homebg from '../pictures/homebg.jpg'
import LoginAction from './LoginAction'
import Footer from '../Footer'

function Login()
{

    const [userName,setUserName]=useState("")
    
    const [password,setPassword]=useState("")

    function formValidate()
    {
      const form = document.querySelector('form')
      var uName=form.elements.username.value
      var upassword=form.elements.password.value
    
      var error=document.getElementById("error")
    //   var error1=document.getElementById("error1")

      var lgn=document.getElementById("formlogin")
    //   error1.innerHTML=""


      if(uName.length<5)
      {
        error.innerHTML="User Name must be minimum 5 char"
      }
      else if(upassword.length<8)
      {
        error.innerHTML="Password must be minimum 8 char"
      }
      else{ 
       error.innerHTML="Ready to Submit"
        lgn.style.pointerEvents="auto"
       
      }
    }


    return(
        <Router>
            <Header/>
        <div id="SgIForm" className="container-fluid pt-4" style={{
            backgroundImage: `url(${homebg})`,
            backgroundSize: "cover",
            height:"85vh"}}>
            <div className="row">
                <div className="col-sm-4"></div>
                <div id="containerlogin" className="col-sm-4 mt-4" style={{borderRadius:"30px"}}>
                <Switch>
    <Route path="/loginactions">
        <LoginAction userName={userName} password={password}/>
    </Route>
</Switch>
                    <h4 className="font-weight-bold mb-2 pt-3"> Login Form </h4>
        <form action="#" className="p-3">
       

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="text"  name="username" required={true} id="fm" onInput={formValidate}  value={userName}  onChange={e => setUserName(e.target.value)} className="form-control" />
        <label className="form-label" >User Name</label>
      </div>
    </div>
  </div>

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="password"  name="password" required={true} onInput={formValidate}  value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
        <label className="form-label">Password</label>
      </div>
    </div>
  </div>

  
<div className="text-danger" >

  <p id="error" style={{backgroundColor:""}}></p>

</div>

      </form>
      <div className="btn btn-primary " style={{backgroundColor:"#e3afbc"}}>
      <Link to="/loginactions"   id="formlogin"   style={{pointerEvents:"none",color:"black"}} >Login</Link>
  </div>
      </div>
      </div>
      </div>
      <Footer/>
      </Router> 
    )
}

export default Login