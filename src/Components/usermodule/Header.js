import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import logof from '../pictures/logof.png'


 function Header()
 {
 
     return (

        <div className="bg">
         <Router>
        <nav id="navbar" className="row navbar navbar-expand-lg navbar-dark" >

          <div className="container">
          < div className="col-sm-3">
              <img src={logof} style={{height:"45px",width:"45px",borderRadius:"50%"}}></img>
            <a className="navbar-brand font-weight-bold pl-2"  href="/">
              Fly Away
            </a>
            </div>
          {/* <a href="/" >Home</a> */}
          
          </div>

          <div className="col-sm-3 ">
        

                <div  className="dropdown float-right mr-5 ">
                   
                               <a href="/signup" className=" font-weight-bold " style={{color:"white"}}>Signup</a>
                                  
                        
                </div>

                <div  className="dropdown float-right mr-5 k">
                    
                    <a href="/login" className=" font-weight-bold " style={{color:"white"}}>Login</a>
                    
             
     </div>

          </div>
      </nav>
        
        <div >
         
       
        </div>
      </Router>
      </div>
     
     )
 }

 export default Header;