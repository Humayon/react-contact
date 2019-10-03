import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="teal darken-2">
          <div className="nav-wrapper">
            <NavLink to="/" exact className="brand-logo">
              Contact App
            </NavLink>
            <NavLink
              to="/"
              exact
              data-target="contact-app-menu"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </NavLink>
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/add" exact activeClassName="active">
                  Add Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="contact-app-menu">
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
