import React, { Component } from 'react';
import validator from 'validator';
import uuid from 'uuid/v4';

class AddContact extends Component {
  state = {
    id: uuid(),
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    gender: 'male',
    errors: {}
  };

  submitHandler = e => {
    e.preventDefault();

    if (
      this.state.firstName === '' ||
      !validator.isLength(this.state.firstName, { min: 1, max: 5 })
    ) {
      this.setState({
        errors: {
          firstName: 'Please enter your firstname 1 to 5 character'
        }
      });
      return;
    }

    if (!validator.isLength(this.state.lastName, { min: 1, max: 5 })) {
      this.setState({
        errors: {
          lastName: 'Please enter your lastname 1 to 5 character'
        }
      });
      return;
    }

    if (!validator.isEmail(this.state.email)) {
      this.setState({
        errors: {
          email: 'Please enter your valid email'
        }
      });
      return;
    }

    if (validator.isEmpty(this.state.profession)) {
      this.setState({
        errors: {
          profession: 'Please enter your profession'
        }
      });
      return;
    }

    this.props.addContact(this.state);

    /**
    Resetting Fields & ID
    */
    this.setState({
      id: uuid()
    });

    this.props.history.push('/');
  };

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let { firstName, lastName, email, profession, gender, errors } = this.state;

    return (
      <React.Fragment>
        <h4 className="center">Add Contact</h4>
        <div className="row">
          <form className="col s12" onSubmit={this.submitHandler}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  value={firstName}
                  onChange={this.inputChangeHandler}
                  name="firstName"
                />
                <label htmlFor="firstName">First Name</label>
                <span className="helper-text">
                  {errors.firstName && errors.firstName}
                </span>
              </div>

              <div className="input-field col s12">
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.inputChangeHandler}
                />
                <label htmlFor="lastName">Last Name</label>
                <span className="helper-text">{errors.lastName}</span>
              </div>

              <div className="input-field col s12">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.inputChangeHandler}
                />
                <label htmlFor="email">Email</label>
                <span className="helper-text">{errors.email}</span>
              </div>

              <div className="input-field col s12">
                <input
                  type="text"
                  name="profession"
                  value={profession}
                  onChange={this.inputChangeHandler}
                />
                <label htmlFor="profession">Profession</label>
                <span className="helper-text">{errors.profession}</span>
              </div>

              <div className="col s6">
                <label>
                  <input
                    name="gender"
                    type="radio"
                    value="male"
                    onChange={this.inputChangeHandler}
                    checked={gender === 'male'}
                  />
                  <span>Male</span>
                </label>
              </div>

              <div className="col s6">
                <label>
                  <input
                    name="gender"
                    type="radio"
                    value="female"
                    onChange={this.inputChangeHandler}
                    checked={gender === 'female'}
                  />
                  <span>Female</span>
                </label>
              </div>

              <div className="col s12 btn-submit">
                <button
                  className="btn waves-effect waves-light teal darken-2"
                  type="submit"
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddContact;
