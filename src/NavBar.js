import React from "react";
import { NavLink, Link } from "react-router-dom";


/**
 * Component for NavBar
 *
 * Prop:
 *    -logout | func passed from parent to handle logout
 *
 * App -> NavBar
 */
function NavBar() {

  return (
    <nav className="NavBar ">
      <NavLink to="/" >
        All Users
      </NavLink>
      <NavLink to="/messages" >
        Messages
      </NavLink>
      <NavLink to="/addUser" >
        Add User
      </NavLink>
      <NavLink to="/addMessage" >
        Add Message
      </NavLink>
    </nav>
  );

}

export default NavBar;
