import React, { Component} from 'react';
import './newParticipantsForm.css';

class NewParticipantsForm extends Component{

  constructor(props) {
    super(props);
    
    this.state = {
      formData: {
        name: '',
        email_address: '',
        phone_number: ''
      },
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  newParticipantHandler = (name, email_address, phone_number) => {
    const participants = [...this.state.participants]
    const id = this.state.participants.length + 1;
    const newParticipant = {
      id: id,
      name: name,
      email_address: email_address,
      phone_number: phone_number,
    }
    participants.push(newParticipant)
    this.setState({participants : participants})
  };

  handleSubmit = event => {
    event.preventDefault();
      this.setState({ formData : {
        value: event.target.value
      } 
    });
    this.newParticipantHandler(this.state.formData.name, this.state.formData.email_address, this.state.formData.phone_number)
    
  }

render() {
    return (
      <form className="newParticipantsForm" onSubmit={this.handleSubmit}>
      <input className="newParticipantsForm__input"
              placeholder="Full name"
              type="text" 
              name="name"
              value=""
              onChange={this.handleChangeName}
              required/>
      <input className="newParticipantsForm__input newParticipantsForm__input__email"
              placeholder="E-mail address" 
              type="email" 
              name="email_address" 
              value=""
              onChange={this.handleChangeEmail}
              required/>

      <input className="newParticipantsForm__input"
              placeholder="Phone number"
              type="number" name="phone_number"
              value=""
              onChange={this.handleChangePhonenumber}
              required/>

      <input className="newParticipantsForm__input newParticipantsForm__submit"
              type="submit" value=" Add new"/>
    </form>
    )
  }
}

export default NewParticipantsForm;