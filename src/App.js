import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import NavbarShell from './components/Navbar/NavbarShell';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      authToken : null, name : null, email : null 
  }
  
  }
  //User Management
  _setAuthState =(object)=>{
    this.setState(
      object
    )
  }
  _logout = ()=>{
    this.setState({})
  }

  render(){
    return (
      <>
        <Router>
          <Route path="/" render={(props)=><NavbarShell {...props} userInfo={{...this.state}} logout={this._logout}/>} />
          <Route exact path="/" render={(props)=><Home {...props} userInfo={{...this.state}} setAuth={this._setAuthState} />}/>
        </Router>
      </>        
    );
  }
}


export default App;