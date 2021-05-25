import React from 'react'
//import {useSelector} from 'react-redux'
import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
//import { selectUser } from '../../redux-sclice/UserSclice';
import ApiCallExample from '../ApiCallExample/ApiCallExample';
import AuthHistory from '../auth/AuthHistory';
//import Home from '../auth/Home';
import Login from '../auth/Login';
import NotFound from '../auth/NotFound';
import AdvancedDatatable from '../dataTableExamples/AdvancedDatatable';
import BasicDataTable from '../dataTableExamples/BasicDataTable';
import FormExample from '../formexample/FormExample';
import FormLinkExample from '../formexample/FormLinkExample';
import RegistrationFormLink from '../formexample/RegistrationFormLink';
import Layout from '../layout/Layout';
import SvcEnquiry from '../svc/SvcEnquiry';
import SvcNewRequest from '../svc/SvcNewRequest';
import SvcUpdate from '../svc/SvcUpdate';

//import DropDownnestedMenu from '../menu/DropDownnestedMenu';


 function Routes() {
    //render() {
        //const user = useSelector(selectUser)
        const user=localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
        console.log("inside route"+JSON.stringify(user));
        return (
       <React.Fragment> 

      <Layout/>
      <BrowserRouter>
      <Router>
       <Switch>   
      <Route exact path="/" component={user?"":Login}/>     
      <Route path="/formexample"  component={FormExample}/>  
      <Route path="/formLink" component={FormLinkExample}/>  
      <Route path="/registrationFormlnk" component={RegistrationFormLink}/>
      <Route path="/basicDataTable" component={BasicDataTable}/>
      <Route path="/advancedDataTable" component={AdvancedDatatable}/>
      <Route path="/recipes" component={ApiCallExample}/>
      <Route path="/model" component={AuthHistory}/>
     { /*<Route path ="/menu" component={DropDownnestedMenu }/>*/}
     <Route path="/svcsearch" component={SvcEnquiry}/>
     <Route path="/createsvc" component={SvcNewRequest}/>
     <Route path="/updatesvc" component={SvcUpdate} />
      <Route  component={NotFound}/>
    </Switch>
   </Router> 
   </BrowserRouter>
    </React.Fragment>
        )
   // }
}
export default Routes;