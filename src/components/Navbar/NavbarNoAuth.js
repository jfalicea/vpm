import React from 'react';
import {Link} from 'react-router-dom'
function NavbarNoAuth(props){
  return(<>
    <Link to="#" class="brand-logo">Vendor Management Program</Link>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="collapsible.html">Login</Link></li>
    </ul>
  </>)
}
export default NavbarNoAuth;