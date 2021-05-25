import React, { Component } from 'react'


 class SvcEnquiry extends Component {
    render() {
        return (
            <div className="container">
    
             <h2>SVC Enquiry</h2>
             <form>
               <div className="form-group row">
               <label htmlFor="username" className="col-sm-2 col-form-label text-danger"><h6>User Name:</h6></label>
               <div className="col-sm-10">
               <input name="name" type="text" className="form-control-plaintext"   />
               </div> 
               </div>

               <div className="form-group row">
                        <label htmlFor="requestid" className="col-sm-2 col-form-label text-danger "><h6>Request ID:</h6></label>
                        <div className="col-sm-3">          
                        <input type="text" className="form-control" id="requestid" placeholder="Request ID"  />
                        </div>
                        <label htmlFor="requeststatus" className="col-sm-2 col-form-label text-danger"><h6>Request Status:</h6></label>
                        <div className="col-sm-3"> 
                        {/*<input type="text" class="form-control" id="requeststatus" placeholder="Request Status"  />*/}
                        <select id="requeststatus" className="form-control" name="requeststatus" >
                        <option >-- select --                             
                                  </option>
                          </select>
                        </div>
               </div>

               <div className="form-group row">
                        <label htmlFor="fromdate" className="col-sm-2 col-form-label text-danger "><h6>From Date:</h6></label>
                        <div className="col-sm-3">          
                        <input type="date" className="form-control" id="fromdate" placeholder="FromDate"  />
                        </div>
                        <label htmlFor="todate" className="col-sm-2 col-form-label text-danger"><h6>To Date:</h6></label>
                        <div className="col-sm-3"> 
                        <input type="date" className="form-control" id="todate" placeholder="Todate"  />
                        </div>
               </div>

               <div className="form-group row">
               <label htmlFor="raisedby" className="col-sm-2 col-form-label text-danger"><h6>SVC Raised By:</h6></label>
               <div className="col-sm-3">
              {/*<input name="raisedby" type="text" className="form-control" placeholder="Raised By"  />*/}
              <select id="raisedby" className="form-control" name="raisedby" >
                        <option > -- select --                             
                                  </option>
                          </select>
               </div> 
               </div>

               <div className="form-group row">
                <label htmlFor="showall" className="col-sm-2 col-form-label text-danger"><h6>Show All </h6></label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" name="showall"/>
                  <label className="form-check-label" htmlFor="gridCheck">
                    *If not selected , only SVCs that require your approval are displayed.
                  </label>
                </div>
              </div>


              <div className="form-group">
                    <button type="button" className="btn btn-lg btn-danger"  >Clear</button> &nbsp;&nbsp;
                    <button type="button" className="btn btn-danger btn-lg" >Search</button>                  
                </div> 

             </form>

      </div>   
        )
    }
}

export default SvcEnquiry