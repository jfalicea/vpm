import React from 'react';
import './Home.css'
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "" , password: ""
    };
  }
  handleFormChanges = (e)=>{
    switch(e.target.name){
      case "email":
        this.setState({
          email: e.target.value
        })
        break;
      case "password": 
        this.setState({password:e.target.value})
        break;
    }
  }

  render(){
    return(<>
      <div className="login-wrapper"> 
          <div className="login-box"> 
            <h1 className="center-align">
              Login
            </h1>
            <form > 
              <div className="input-field col s12">
                <input onChange={this.handleFormChanges} value={this.state.email} name='email' type="text" className="validate" placeholder="Email"/>
              </div>
              <div className="input-field col s12">
                <input onChange={this.handleFormChanges} value={this.state.password} name='password' type="text" className="validate" placeholder="Password" />
              </div>
              <p className="center-align">
              <button className="btn waves-effect center waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button> 
              </p>
            </form>
          </div>
      </div>
    </>)
  }
}
export default Home;