import React from 'react';
import './Home.css'
import axios from 'axios'
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "" , password: "", msg: ""
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

  submitLoginForm = async (e)=>{
    e.preventDefault()
    const formData = {...this.state};
    const url = `http://localhost:3000/users/login`;
    const authInfo = await axios.post(url, formData)
    console.log('authInfo', authInfo.data)
    this.props.setAuth(authInfo.data.userInfo)
    this.setState({msg: authInfo.data.msg })
  }
  render(){
    return(<>
      <div className="login-wrapper"> 
          <div className="login-box"> 
          <p>{this.state.msg}</p>
            <h1 className="center-align">
              Login
            </h1>
            <form onSubmit={this.submitLoginForm}> 
              <div className="input-field col s12">
                <input onChange={this.handleFormChanges} value={this.state.email} name='email' type="text" className="validate" placeholder="Email"/>
              </div>
              <div className="input-field col s12">
                <input onChange={this.handleFormChanges} value={this.state.password} name='password' type="password" className="validate" placeholder="Password" />
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