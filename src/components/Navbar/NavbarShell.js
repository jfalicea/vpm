import React from 'react';
import NavbarNoAuth from './NavbarNoAuth';
import NavbarAuthUser from './NavbarAuthUser'
import axios from 'axios';

class NavbarShell extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      navBarContents : null 
    };
  }
  async componentDidMount (){
    const url = `http://localhost:3000/users/getToken`
    const checkToken = await axios.post(url, [this.props.userInfo.email])
    
    this.setState({
      navBarContents : <NavbarNoAuth />,
      veri_token: checkToken.data.token
    })
  }

  navbarContents =  ()=>{
    let navLinks = <NavbarNoAuth />
    // if(this.props.userInfo.authToken === checkToken)
    this.setState({
      navBarContents : navLinks
    }) 
  }


  render(){
    console.log('____----____', this.state )
    console.log('++++',this.props.userInfo.email)
    return(<>
    <nav>
        <div class="nav-wrapper black">
          {this.state.navBarContents}
        </div>
    </nav>
    </>)
  }
}
export default NavbarShell;