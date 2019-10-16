import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import NavbarShell from './components/Navbar/NavbarShell';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      authToken : null, name : null, email: null, id: null, 
  }
  
  }
  //User Management
  _setAuthState =()=>{}
  _logOut = ()=>{}

  render(){
    return (
      <>
        <Router>
          <Route path="/" render={()=><NavbarShell userInfo={{...this.state}}/>} />
          <Route exact path="/" render={(props)=><Home {...props} userInfo={{...this.state}}/>}/>
        </Router>
      </>        
    );
  }
}


export default App;