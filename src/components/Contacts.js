import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Contact from './Contact';

class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>Contacts</h4>
        <SearchBar />
        <div className="row">
          {this.props.contacts.map(contact => {
            return (
              <Contact
                key={contact.id}
                contact={contact}
                deleteContact={this.props.deleteContact}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Contacts;
