import React from 'react';
import { Link } from 'react-router-dom'

function NavContentsAuth(props){
  return(<>
      <div class="nav-wrapper">
        <Link to="/" className="brand-logo">ISO Roadmap</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="#">Sass</Link></li>
          <li><Link to="#">Components</Link></li>
          <li><Link to="#">JavaScript</Link></li>
        </ul>
    </div>
  </>)
}
export default NavContentsAuth;