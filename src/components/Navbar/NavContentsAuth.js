import React from 'react';
import { Link } from 'react-router-dom'

function NavContentsAuth(props){
  return(<>
      <div class="nav-wrapper">
        <Link to="/user/Dashboard" className="brand-logo">ISO Roadmap</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/user/ISO">ISO Roadmap</Link></li>
          <li><Link to="/user/VMP">Vendor Management</Link></li>
          <li><Link to="/user/BIA">Business Impact Analysis</Link></li>
        </ul>
    </div>
  </>)
}
export default NavContentsAuth;