import React from 'react';
import NavContentsNoAuth from './NavContentsNoAuth';
import NavContentsAuth from './NavContentsAuth';
import './Navbar.css'
class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  componentDidMount=()=>{
    let navbarLinks= <NavContentsNoAuth />
    this.setState({
      navbarContents: navbarLinks
    })
  }

  //build navbar links. this depends on whether or not users are authenticated. 
  navBarContents=()=>{
    let navbarlinks = <NavContentsNoAuth/>
    if(this.props.authToken){
      navbarlinks = <NavContentsAuth />
    } 
    return  navbarlinks
  }

  render(){
    let navLinks = this.navBarContents()
    return(<>
      <nav>
        {navLinks}
      </nav>
    </>)
  }
}
export default Navbar;