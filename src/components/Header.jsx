import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>LOGO</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/user/1">User 1</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
