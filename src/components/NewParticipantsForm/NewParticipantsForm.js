import React, { Component} from 'react';
import './newParticipantsForm.css';

class NewParticipantsForm extends Component{

render() {
    return (
      <form className="newParticipantsForm" onSubmit={event => this.props.submitHandler(event)}>
      <input className="newParticipantsForm__input"
              placeholder="Full name"
              type="text" 
              name='name'
              onChange={event => this.props.inputChangeHandler(event)}
              required/>
      <input className="newParticipantsForm__input newParticipantsForm__input__email"
              placeholder="E-mail address" 
              type="email" 
              name='email_address'
              onChange={event => this.props.inputChangeHandler(event)}
              required/>

      <input className="newParticipantsForm__input"
              placeholder="Phone number"
              type="number"
              name='phone_number'
              onChange={event => this.props.inputChangeHandler(event)}
              required/>

      <input className="newParticipantsForm__input newParticipantsForm__submit"
              type="submit" value=" Add new"/>
    </form>
    )
  }
}

export default NewParticipantsForm;