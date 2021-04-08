import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


 function Header()
 {
 
     return (

        <div className="bg">
         <Router>
        <nav id="navbar" className="row navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}}>

          <div className="container col-sm-9">
            <Link className="navbar-brand font-weight-bold" to="#">
              Fly Away
            </Link>
          {/* <a href="/" >Home</a> */}
          
          </div>

          <div className="col-sm-3 ">
        

                <div className="dropdown float-right mr-5">
                   
                               <a href="/signup">Signup</a>
                                  
                        
                </div>

                <div className="dropdown float-right mr-5">
                    
                    <a href="/login">Login</a>
                    
             
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