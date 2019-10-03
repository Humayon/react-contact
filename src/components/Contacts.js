import React, { Component } from 'react';

import Contact from './Contact';

class Contacts extends Component {
  state = {
    searchText: ''
  };

  searchHandler = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  render() {
    let filteredText = this.props.contacts.filter(
      contact =>
        contact.firstName.toLowerCase().indexOf(this.state.searchText) !== -1 ||
        contact.lastName.toLowerCase().indexOf(this.state.searchText) !== -1
    );

    return (
      <React.Fragment>
        <h4 className="center">All Contacts</h4>
        <nav className="teal darken-2">
          <div className="nav-wrapper">
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search..."
                value={this.state.searchText}
                onChange={this.searchHandler}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </div>
        </nav>
        <div className="row">
          {filteredText.map(contact => {
            return (
              <Contact
                key={contact.id}
                contact={contact}
                deleteContact={this.props.deleteContact}
                editContact={this.props.editContact}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Contacts;
