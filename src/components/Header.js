import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="teal darken-2">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Contact App
            </a>
            <a
              href="/"
              data-target="contact-app-menu"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="contact-app-menu">
          <li className="active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
