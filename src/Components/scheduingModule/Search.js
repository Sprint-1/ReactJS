import react, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import SearchActions from './SearchActions'

import image from './searchflght.png'

function Search()
{
  const [cred,setCred]=useState({
    src:"INDIA",
    dstn:"INDIA",
    date:"2000-00-00"
  })
  

 function fromvalidate()
  {
    const form = document.querySelector('form')
    var fsourceairport=form.elements.sourceairport.value
    var fdestinationairport=form.elements.destinationairport.value
    var fdeparturedate=form.elements.departuredate.value
    var error1=document.getElementById("searcherror")
    var sbtn=document.getElementById("searchsubmit")
    error1.innerHTML=""
    sbtn.addEventListener('click',function(e){


      if(fsourceairport==fdestinationairport || fsourceairport=="select" || fdestinationairport=="select")
      {
        error1.innerHTML="Source and Destination cannot be same" 
        
      }
      else if( fdeparturedate.length==0)
        
      {
        error1.innerHTML="Select Date"
        
      }
      else{
           
            error1.innerHTML=""
            
      }
  
    })


 
  }


    return(
      <Router>
          <div id="search" className="container-fluid row" style={{height:"100vh"}}>
            <div className="col-sm-6" style={{ backgroundColor: "#acb6e5",height:"100vh"}}>
              
               <h4 className="font-weight-bold"> Search </h4>

                
        <form action="#">
       

  

 <div className="row ">
  <div class="form-outline m-1 ml-5 ">
  <select name = "sourceairport" className="form-control" value={cred.src} required={true} onInput={fromvalidate} onChange={e=>setCred({...cred,src:e.target.value})}>
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

 
  <div class="form-outline m-1 ">
  <select name = "destinationairport" className="form-control" required={true} value={cred.dstn} onInput={fromvalidate} onChange={e=>setCred({...cred,dstn:e.target.value})}>
            <option value = "select" >--Select Airport--</option>
            <option value = "INDIARGIA" >Hyderabad</option>
            <option value = "INDIAKGIA">Bangalore</option>
            <option value = "INDIAMIA">Mumbai</option>
            <option value = "INDIAKIA">Kurnool</option>
            <option value = "INDIAGIA">Tirupathi</option>
            <option value = "INDIATIA">Chennai</option>
         </select>    <label className="form-label" >Destination Airport</label>
  </div>


  <div className="row mt-1">
    <div className="col">
      <div className="form-outline">
        <input type="date"  name="departuredate" value={cred.date} required={true} onInput={fromvalidate} onChange={e=>setCred({...cred,date:e.target.value})} className="form-control" />
        <label className="form-label">Departure Date</label>
      </div>
  
  </div>
     
      </div>
      <div className="btn mt-1">
      <Link to="/searchaction"  id="searchsubmit" >Submit</Link>
       </div>
  <div className="text-warning ">
      {/* <input type="reset" id="formreset"  /> */}
    <p id="searcherror" >Edit form to submit</p>
  </div>
      </div>

      
      </form>
      
      <Switch>
        <Route path="/searchaction">
          
          <SearchActions cred={cred}/>
        </Route>
      </Switch>
      </div>
      <div id="searchbg" className="container-fluid col-sm-6 " 
          style={{backgroundImage: `url(${image})`,height:"auto",position: "relative",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"} }></div>
      </div>

      
      </Router>
    )
}

export default Search;