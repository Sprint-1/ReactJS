import react from 'react'

function Search()
{

    return(
          <div id="sform" className="container pt-4" style={{ backgroundColor: "#acb6e5",height:"100vh"}}>
            <div className="row" col-sm-6 >
                <div className="col-sm-4"></div>
                <div className="col-sm-4">

                
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

export default Search;