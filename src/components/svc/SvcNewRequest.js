import React, { Component } from 'react'

 class SvcNewRequest extends Component {
    render() {
        return (
            <div className="container">
    
            <h2>SVC Access Request Form</h2>
       <div>
        <form >
        <div className="form-group row">
            <label htmlFor="requestid" className="col-sm-2 col-form-label text-danger "><h6>Request ID</h6></label>
            <div className="col-sm-4">
                 <input type="text"  className="form-control" id="requestid" value=""/>
            </div>
             <label htmlFor="tools" className="col-sm-2 col-form-label text-danger"><h6>Tool</h6></label>
            <div className="col-sm-4">
            <select id="tools" className="form-control" >
                <option >  -- Select -- </option>
             </select>
             </div>
       </div>

       <div className="form-group row">
            <label htmlFor="requestorname" className="col-sm-2 col-form-label text-danger "><h6>Requestor Name</h6></label>
            <div className="col-sm-4">
                 <input type="text"  className="form-control" id="requestorname" value=""/>
            </div>
             <label htmlFor="requestdate" className="col-sm-2 col-form-label text-danger"><h6>Request Date</h6></label>
            <div className="col-sm-4">
            <input type="date" className="form-control" id="requestdate" placeholder=""  />
             </div>
       </div>

       <div className="form-group row">
            <label htmlFor="applicationname" className="col-sm-2 col-form-label text-danger "><h6>Application Name</h6></label>
            <div className="col-sm-4">
            <select id="applicationname" className="form-control" >
                              <option >
                                  --Select--
                                </option>
                              </select>
            </div>
             <label htmlFor="version" className="col-sm-2 col-form-label text-danger"><h6>Version</h6></label>
            <div className="col-sm-4">
            <input type="text" className="form-control" id="version" placeholder=""  />
             </div>
       </div>
                 
       <div className="form-group row">
            <label htmlFor="durationfrom" className="col-sm-2 col-form-label text-danger "><h6>Duration From</h6></label>
            <div className="col-sm-4">
            <input type="date" className="form-control" id="durationfrom" placeholder=""  />
            </div>
             <label htmlFor="durationto" className="col-sm-2 col-form-label text-danger"><h6>Duration To</h6></label>
            <div className="col-sm-4">
            <input type="date" className="form-control" id="durationto" placeholder=""  />
             </div>
       </div>
              
                
               
    
                
               <div className="form-row">
                        <div className="form-group col-md-12">
                          <label htmlFor="description" className="text-danger"><h6>Description/Reason</h6></label>
                          <textarea  className="form-control" id="description" placeholder=""  ></textarea>
                        </div>
                        
                </div>
                <div className="col-md-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                    <label htmlFor="accessrights" className="text-danger">   <h3 className="panel-title">Access Rights</h3> </label>                          
                            </div>
                            <div className="panel-body form-group row ">                               
                                             
                                            <label htmlFor="checkout" className="col-sm-3 col-form-label text-danger"><h6>Check Out </h6></label>
                                            <div className="form-check col-sm-3">
                                              <input className="form-check-input" type="checkbox" id="checkout"  />  
                                           </div>
                                            <label htmlFor="checkin" className="col-sm-3 col-form-label text-danger"><h6>Check In</h6></label>
                                            <div className="form-check col-sm-3">
                                              <input className="form-check-input" type="checkbox" id="checkin" />
                                            </div>                                    
                                   
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                        <label htmlFor="accessrights" className="text-danger">   <h3 className="panel-title">Approvals</h3> </label>                          
                                </div>
                                <div className="panel-body form-group row "> 
                                        <label htmlFor="devmgr" className="col-sm-3 col-form-label text-danger"><h6>Development Manager </h6></label>
                                                <div className="form-check col-sm-3">
                                                        <select id="devmgr" className="form-control" >
                                                            <option >
                                                               --Select--
                                                              </option>
                                                      </select>
                                                     
                                               </div> 
                                </div>
                            </div>
                        </div>  
                        <div className="form-group">
                                <button type="button" className="btn btn-lg btn-danger"  >Submit</button> &nbsp;&nbsp;
                                <button type="button" className="btn btn-danger btn-lg" >Reset</button>                          
                            </div> 
    
        </form>
    
    
    
       </div>     
     </div>       
        )
    }
}

export default SvcNewRequest