import React, { Component } from 'react';
import './newParticipantsForm.css';

class NewParticipantsForm extends React.Component {
    
  render() {
    return (
    <div className="newParticipantsForm">
        <input className="newParticipantsForm__input" placeholder="Full name" type="text" required/>
        <input className="newParticipantsForm__input newParticipantsForm__input__email" placeholder="E-mail address" type="email" required/>
        <input className="newParticipantsForm__input" placeholder="Phone number" type="tel" required/>
        <button className="newParticipantsForm__input newParticipantsForm__submit" type="button">Add new</button>
    </div>
    );  
  }
}

export default NewParticipantsForm;