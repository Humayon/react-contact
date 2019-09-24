import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }
  state = {
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    gender: 'male',
    experience: 'default',
    type: []
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(`Selected file - ${this.fileInput.current.files[0].name}`);
    console.log(this.state);
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
    return (
      <React.Fragment>
        <h4>Contact Form </h4>
        <div className="row">
          <form className="col s12" onSubmit={this.submitHandler}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={this.inputChangeHandler}
                  name="firstName"
                  className="validate"
                />
                <label htmlFor="firstName">First Name</label>
              </div>

              <div className="input-field col s12">
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.inputChangeHandler}
                  className="validate"
                />
                <label htmlFor="lastName">Last Name</label>
              </div>

              <div className="input-field col s12">
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.inputChangeHandler}
                  className="validate"
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field col s12">
                <input
                  type="text"
                  name="profession"
                  value={this.state.profession}
                  onChange={this.inputChangeHandler}
                  className="validate"
                />
                <label htmlFor="profession">Profession</label>
              </div>

              <div className="col s6">
                <label>
                  <input
                    name="gender"
                    type="radio"
                    value="male"
                    onChange={this.inputChangeHandler}
                    checked={this.state.gender === 'male'}
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
                    checked={this.state.gender === 'female'}
                  />
                  <span>Female</span>
                </label>
              </div>

              <div className="input-field col s12 exp">
                <select
                  name="experience"
                  value={this.state.experience}
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

              <div className="col s12">
                <div className="file-field input-field">
                  <div className="btn">
                    <span>File</span>
                    <input type="file" ref={this.fileInput} />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
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
