import React from 'react';
import NavbarNoAuth from './NavbarNoAuth';

class NavbarShell extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      navBarContents : null 
    };
  }
  componentDidMount(){
    this.setState({
      navBarContents : <NavbarNoAuth />
    })
  }

  navbarContents = ()=>{
    let navLinks = <NavbarNoAuth />

    this.setState({
      navBarContents : navLinks
    }) 
  }


  render(){

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