import React from 'react';

const NavBar = ({ logout, userData }) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a href="#/" class="navbar-brand  mr-auto mt-2 mt-lg-0">
          TodoApp
        </a>
        <ul class="navbar-nav right">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {userData ? userData.user_name : ''}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#" onClick={logout}>
                Log out
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
