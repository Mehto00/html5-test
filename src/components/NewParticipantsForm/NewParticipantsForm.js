import React from 'react';
import { useState } from 'react'
import './newParticipantsForm.css';

const NewParticipantsForm = props => {
  const [name, setName] = useState()
  const [email_address, setEmail] = useState()
  const [phone_number, setPhonenumber] = useState()
  
  const handleChangeName = e => {
    setName(e.target.value)
  }
  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }
  const handleChangePhonenumber = e => {
    setPhonenumber(e.target.value)
  }

  const handleSubmit = event => {
    props.newParticipantHandler(name, email_address, phone_number)
    event.preventDefault()
    
  }

    return (
      
      <form className="newParticipantsForm" onSubmit={handleSubmit}>
      <input className="newParticipantsForm__input"
              placeholder="Full name"
              type="text" 
              name="name"
              value={name || ""}
              onChange={handleChangeName}
              required/>
      <input className="newParticipantsForm__input newParticipantsForm__input__email"
              placeholder="E-mail address" 
              type="email" 
              name="email_address" 
              value= {email_address || ""}
              onChange={handleChangeEmail}
              required/>

      <input className="newParticipantsForm__input"
              placeholder="Phone number"
              type="number" name="phone_number"
              value={phone_number || ""}
              onChange={handleChangePhonenumber}
              required/>

      <input className="newParticipantsForm__input newParticipantsForm__submit"
              type="submit" value=" Add new"/>
    </form>
    )

}

export default NewParticipantsForm;