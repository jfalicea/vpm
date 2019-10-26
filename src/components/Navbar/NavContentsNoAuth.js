import React from 'react';
import { Link } from 'react-router-dom'
function NavContentsNoAuth(props){
  return(<>
    <div class="nav-wrapper">
      <Link to="/" className="brand-logo">ISO Roadmap</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      </ul>
    </div>
  </>)
}
export default NavContentsNoAuth;