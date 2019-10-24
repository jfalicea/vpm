import React from 'react';
import {Link} from 'react-router-dom'
function NavbarAuthUser(props){
  return(<>
    <Link to="/" class="brand-logo">Vendor Management Program</Link>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><Link to="#" >Vednors</Link></li>
      <li><Link to="#" >Settings</Link></li>
    </ul>
  </>)
}
export default NavbarAuthUser;