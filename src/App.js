import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Contacts from './components/Contacts';
import Header from './components/Header';
import About from './components/About';
import NotFound from './components/NotFound';

export class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        firstName: 'H.',
        lastName: 'Kabir',
        email: 'hk@gmail.com',
        profession: 'React Ninja',
        gender: 'male'
      },
      {
        id: 2,
        firstName: 'Kabir',
        lastName: 'Singh',
        email: 'ks@gmail.com',
        profession: 'Express Ninja',
        gender: 'female'
      },
      {
        id: 3,
        firstName: 'Jhohn',
        lastName: 'Doe',
        email: 'jd@gmail.com',
        profession: 'Node Ninja',
        gender: 'male'
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

  latestUpdatedContact = latestContact => {
    let latestContacts = this.state.contacts.map(contact =>
      contact.id === latestContact.id ? (contact = latestContact) : contact
    );
    this.setState({
      contacts: latestContacts,
      editedContactList: null
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
            <div className="col s12">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={props => (
                    <Contacts
                      contacts={this.state.contacts}
                      deleteContact={this.handleDeleteContact}
                      editContact={this.editContactHandler}
                      {...props}
                    />
                  )}
                />

                <Route
                  path="/add"
                  render={props => (
                    <AddContact
                      addContact={this.addContactHandler}
                      {...props}
                    />
                  )}
                />

                <Route
                  path="/edit/:id"
                  render={props =>
                    this.state.editedContactList ? (
                      <EditContact
                        editedContacts={this.state.editedContactList}
                        latestUpdatedContact={this.latestUpdatedContact}
                        {...props}
                      />
                    ) : (
                      <Redirect to="/" />
                    )
                  }
                />

                <Route path="/about" exact component={About} />

                <Route path="/about/:name" component={About} />

                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
