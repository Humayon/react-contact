import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h3>About Page {this.props.match.params.name}</h3>
      </div>
    );
  }
}

export default About;
