import React from 'react';
import axios from 'axios'

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:"", password:"", msg: ""
    };
  }
  handleChange=(e)=>{
    switch(e.target.name){
      case 'email': 
        this.setState({email:e.target.value})
        return;
      case 'password':
        this.setState({password:e.target.value})
        return
    } 
  }
  
   submitForm=async(e)=>{
    e.preventDefault();
    const formData = {...this.state};
    const url =`http://localhost:3000/users/login`;
    const userLoginInfo = await axios.post(url, formData);
    console.log('___===__', userLoginInfo.data );
    this.setState({msg:userLoginInfo.data.msg, password:"", email:""});
    this.props.setAuthState(userLoginInfo.data.userInfo);
    console.log('---',this.props.userInfo.authToken )
  }


  render(){
    return(<>
    <div className="container">
      <p>{this.state.msg}</p>
      <div className="row">
        <form className="col s12" onSubmit={this.submitForm}>
          <div className="row">
            <div className="input-field col s12">
              <input type="text" className="validate" value={this.state.email} onChange={this.handleChange} name='email' />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input type="password" className="validate" value={this.state.password} onChange={this.handleChange} name='password'/>
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className='container center-align'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>)
  }
}
export default Login;