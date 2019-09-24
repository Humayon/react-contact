import React, { Component } from 'react';

class Contact extends Component {
  deleteContactHandler = id => () => {
    this.props.deleteContact(id);
  };

  render() {
    let { id, firstName, lastName, email, profession } = this.props.contact;
    return (
      <React.Fragment>
        <div className="col s6">
          <div className="card">
            <div className="card-content z-depth-3">
              <h3 className="card-title">
                {firstName} {lastName}
                <i className="material-icons right">arrow_drop_down</i>
                <a href="#!" onClick={this.deleteContactHandler(id)}>
                  <i className="material-icons right">delete</i>
                </a>
                <i className="material-icons right">edit</i>
              </h3>
              <ul>
                <li>{email}</li>
                <li>{profession}</li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Contact;
