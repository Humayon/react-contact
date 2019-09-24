import React, { Component } from 'react';

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
  render() {
    let { id, firstName, lastName, email, profession } = this.props.contact;
    return (
      <React.Fragment>
        <div className="col s6">
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
                <i className="material-icons right">edit</i>
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
