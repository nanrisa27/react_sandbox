import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" exact>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
