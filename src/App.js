import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import UserPages from './components/UserPages/UserPages';

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
        <Route path='/' render={(props)=><Navbar {...props} userInfo={{...this.state}} logout={this._logout}/>}/>
          {/* LOGIN PROCESS */}
        <Route exact path='/' render={(props)=><Login {...props} userInfo={{...this.state}} setAuthState={this._setAuthState} /> }/>
        <Route exact path='/user/dashboard' render={(props)=><UserPages />}/>
       
       
       </Router>
      </>        
    );
  }
}


export default App;