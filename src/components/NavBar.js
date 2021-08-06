import React from "react";
import { Link } from 'react-router-dom';


function NavBar() {
   
  return (
    <nav>
      <Link to="/menu">Menu</Link>
      <Link to="/order">Your Order</Link>
      <Link to="/about">Order History</Link>
    </nav>
  );
}

export default NavBar;