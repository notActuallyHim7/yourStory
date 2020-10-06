import React from 'react';
import {Link} from "react-router-dom";
import styles from "./NavStyles.css";

class Nav extends React.Component {
  render(){
    console.log("Nav")
    return (
      <nav className="nav">
        <Link className="links" to="/">
          <h3>Your Story</h3>
        </Link>
        <ul className="nav-links">
          <Link className="links" to="/Categories">
            <li>Categories</li>
          </Link>
          <Link className="links" to="/Tags">
            <li>Tags</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
export default Nav
