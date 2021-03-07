import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './components/auth/Home'
import Login from './components/auth/Login';
import NotFound from './components/auth/NotFound';
import FormExample from './components/formexample/FormExample';

function App() {
  return (
    <React.Fragment> 
      <Layout/>
      <Router>
     <Switch>     
      <Route exact path="/" component={Home}/>
      <Route path="/login"  component={Login}/> 
      <Route path="/formexample"  component={FormExample}/>    
      <Route  component={NotFound}/>
    </Switch>
   </Router>  
    </React.Fragment>
  );
}

export default App;
