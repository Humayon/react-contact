import React, { Component } from 'react';
import validator from 'validator';
import uuid from 'uuid/v4';

class ContactForm extends Component {
  state = {
    id: uuid(),
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    gender: 'male',
    experience: 'default',
    type: [],
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
      id: uuid(),
      firstName: '',
      lastName: '',
      email: '',
      profession: '',
      type: [],
      errors: {}
    });
  };

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  checkboxHandler = e => {
    this.setState({
      type: this.state.type.concat(e.target.value)
    });
  };

  render() {
    let {
      firstName,
      lastName,
      email,
      profession,
      gender,
      experience,
      errors
    } = this.state;

    return (
      <React.Fragment>
        <h4>Contact Form </h4>
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

              <div className="input-field col s12 exp">
                <select
                  name="experience"
                  value={experience}
                  onChange={this.inputChangeHandler}
                >
                  <option disabled value="default">
                    Choose your experience
                  </option>
                  <option value="1yr">1 year</option>
                  <option value="2yrs">2 years</option>
                  <option value="3yrs">3 years</option>
                </select>
                <label htmlFor="experience">Experience</label>
              </div>

              <div className="col s6">
                <label>
                  <input
                    name="type"
                    value="personal"
                    onChange={this.checkboxHandler}
                    type="checkbox"
                  />
                  <span>Personal</span>
                </label>
              </div>

              <div className="col s6">
                <label>
                  <input
                    name="type"
                    type="checkbox"
                    value="professional"
                    onChange={this.checkboxHandler}
                  />
                  <span>Professional</span>
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

export default ContactForm;
