import React from 'react';
import { useState } from 'react'
import { ReactComponent as DelSvg } from '../../assets/del.svg';
import { ReactComponent as EditSvg } from '../../assets/edit.svg';
import './ParticipantsTableRow.css';  

const ParticipantsTableRow = (props) => {

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
    props.editParticipantHandler(props.target, name, email_address, phone_number)
    props.editButtonsShowHandler(); 
    event.preventDefault()
  }
    
    return(
    <div className="ParticipantsTableRow">
      <div className="ParticipantsTableRow__col ParticipantsTableRow__col_name">
        {props.editButtonsShow && (props.index == props.target) ? (
          <input className="ParticipantsTableRow__col__input"
          placeholder={props.name}
          type="text" 
          name="name"
          value={name || ""}
          onChange={handleChangeName}
          required/>
          ):(
          props.name
          )
        }
      </div>
      
      <div className="ParticipantsTableRow__col ParticipantsTableRow__col__email">
        {props.editButtonsShow && (props.index == props.target) ? (
          <input className="ParticipantsTableRow__col__input ParticipantsTableRow__col__input__email"
          placeholder={props.email_address} 
          type="email" 
          name="email_address" 
          value= {email_address || ""}
          onChange={handleChangeEmail}
          required/>
          ): (
          props.email_address
          )
        }
      </div>

      <div className="ParticipantsTableRow__col">
        {props.editButtonsShow && (props.index == props.target) ? (
          <input className="ParticipantsTableRow__col__input"
          placeholder={props.phone_number}
          type="number" name="phone_number"
          value={phone_number || ""}
          onChange={handleChangePhonenumber}
          required/>
          ): (
          props.phone_number
          )
        }
      </div>

       {props.editButtonsShow && (props.index == props.target) ? (
          <div className="ParticipantsTableRow__col ParticipantsTableRow__col__update-delete">
            <button className="ParticipantsTableRow__col__cancelBtn" onClick={props.editButtonsShowHandler}>Cancel</button>
            <button className="ParticipantsTableRow__col__saveBtn" onClick={handleSubmit}>Save</button>
          </div>
        ) : (
          <div className="ParticipantsTableRow__col ParticipantsTableRow__col__update-delete" data-key={props.index}>
            <EditSvg className="ParticipantsTableRow__col__icons" onClick={(e) => {
              props.editButtonsShowHandler(); 
              props.targetRowHandler(props.index)
              }}/>
            <DelSvg className="ParticipantsTableRow__col__icons" onClick={() => props.removeParticipantHandler(props.index)} />
          </div>
          )
        } 
      </div>
    )
}

export default ParticipantsTableRow;