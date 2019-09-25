import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';
import Header from './components/Header';

export class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        firstName: 'H.',
        lastName: 'Kabir',
        email: 'hk@gmail.com',
        profession: 'React Ninja'
      },
      {
        id: 2,
        firstName: 'Kabir',
        lastName: 'Singh',
        email: 'ks@gmail.com',
        profession: 'Express Ninja'
      },
      {
        id: 3,
        firstName: 'Jhohn',
        lastName: 'Doe',
        email: 'jd@gmail.com',
        profession: 'Node Ninja'
      }
    ],
    editedContactList: null
  };

  addContactHandler = contact => {
    this.setState({
      contacts: [...this.state.contacts, contact]
    });
  };

  handleDeleteContact = id => {
    let updatedContact = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: updatedContact
    });
  };

  editContactHandler = id => {
    let editedContact = this.state.contacts.find(contact => contact.id === id);
    this.setState({
      editedContactList: editedContact
    });
  };

  render() {
    return (
      <div id="wrapper">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col s4">
              <ContactForm addContact={this.addContactHandler} />
            </div>
            <div className="col s8">
              <Contacts
                contacts={this.state.contacts}
                deleteContact={this.handleDeleteContact}
                editContact={this.editContactHandler}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
