import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    showContact: false
  };

  deleteContactHandler = id => () => {
    this.props.deleteContact(id);
  };

  showContactHandler = () => {
    this.setState({
      showContact: !this.state.showContact
    });
  };

  editContactHandler = id => () => {
    this.props.editContact(id);
  };

  render() {
    let { id, firstName, lastName, email, profession } = this.props.contact;
    return (
      <React.Fragment>
        <div className="col s12">
          <div className="card">
            <div className="card-content z-depth-3">
              <h3 className="card-title">
                {firstName} {lastName}
                <a href="#!" onClick={this.showContactHandler}>
                  <i className="material-icons right">
                    {this.state.showContact
                      ? 'arrow_drop_up'
                      : 'arrow_drop_down'}
                  </i>
                </a>
                <a href="#!" onClick={this.deleteContactHandler(id)}>
                  <i className="material-icons right">delete</i>
                </a>
                <Link to={`/edit/${id}`} onClick={this.editContactHandler(id)}>
                  <i className="material-icons right">edit</i>
                </Link>
              </h3>
              {this.state.showContact && (
                <ul>
                  <li>{email}</li>
                  <li>{profession}</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Contact;
