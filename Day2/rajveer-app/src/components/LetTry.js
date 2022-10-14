import React from 'react';

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: props.firstName,
        lastName: props.lastName,
        bloodGroup: props.bloodGroup,
        phoneNumber: props.phoneNumber,
      }
    }
  }

  handleFirstNameChanged(event) {
    var user        = this.state.user;
    user.firstName  = event.target.value;

    this.setState({ user: user });
  }


  handleLastNameChanged(event) {
    var user      = this.state.user;
    user.lastName = event.target.value;

    this.setState({ user: user });
  }

  handleStatusChanged(event) {
    var user    = this.state.user;
    user.status = event.target.value;

    this.setState({ user: user });
  }

  handlePhoneNumberChanged(event) {
    var user      = this.state.user;
    user.phoneNumber = event.target.value;

    this.setState({ user: user });
  }


  handlebloodGroupChanged(event) {
    var user      = this.state.user;
    user.bloodGroup = event.target.value;

    this.setState({ user: user });
  }

  handleButtonClicked() {
    console.log(this.state.user);
  }

  render() {
    return (
      <div>
        <label>
          First Name: 
        </label>
        <input type="text" value={this.state.user.firstName} onChange={this.handleFirstNameChanged.bind(this)}/>
        <br/>
        <label>
          Last Name:
        </label>
        <input type="text" value={this.state.user.lastName} onChange={this.handleLastNameChanged.bind(this)}/>
        <br/>
        <label>
          Blood Group: 
        </label>
        <input type="text" value={this.state.user.bloodGroup} onChange={this.handlebloodGroupChanged.bind(this)}/>
        <br/>
        <label>
          Phone Number: 
        </label>
        <input type="text" value={this.state.user.phoneNumber} onChange={this.handlePhoneNumberChanged.bind(this)}/>
        <br/>
        <hr/>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Save Record
        </button>
      </div>
    );
  }
}

