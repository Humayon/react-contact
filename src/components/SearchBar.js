import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <nav className="teal darken-2">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" placeholder="Search..." />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
