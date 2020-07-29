import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ logout, userData }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="" className="navbar-brand  mr-auto mt-2 mt-lg-0">
          TodoApp
        </Link>
        <ul className="navbar-nav right">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to=""
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {userData ? userData.user_name : ''}
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="" onClick={logout}>
                Log out
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
