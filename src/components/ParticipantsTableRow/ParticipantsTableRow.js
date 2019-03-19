import React from 'react';
import { ReactComponent as DelSvg } from '../../assets/del.svg';
import { ReactComponent as EditSvg } from '../../assets/edit.svg';
import './ParticipantsTableRow.css';


const ParticipantsTableRow = (props) => {
    
    return(
    <div className="ParticipantsTableRow">
        <div className="ParticipantsTableRow__col ParticipantsTableRow__col_name">
        {props.editButtonsShow ? (
          <input className="newParticipantsForm__input"
          placeholder="Full name"
          type="text" 
          name="name"
          // value={name || ""}
          // onChange={handleChangeName}
          required/>
          ): (
          props.name
          )
        }
        </div>
        <div className="ParticipantsTableRow__col ParticipantsTableRow__col__email">
        {props.editButtonsShow ? (
          <input className="newParticipantsForm__input newParticipantsForm__input__email"
          placeholder="E-mail address" 
          type="email" 
          name="email_address" 
          // value= {email_address || ""}
          // onChange={handleChangeEmail}
          required/>
          ): (
          props.email_address
          )
        }
        </div>
        <div className="ParticipantsTableRow__col">
        {props.editButtonsShow ? (
          <input className="newParticipantsForm__input"
          placeholder="Phone number"
          type="number" name="phone_number"
          // value={phone_number || ""}
          // onChange={handleChangePhonenumber}
          required/>
          ): (
          props.phone_number
          )
        }
        </div>

       {props.editButtonsShow ? (
        <div className="ParticipantsTableRow__col ParticipantsTableRow__col__update-delete">
          <button className="ParticipantsTableRow__col__cancelBtn" onClick={props.editButtonsShowHandler}>Cancel</button>
          <button className="ParticipantsTableRow__col__saveBtn">Save</button>
        </div>
        ): (
        <div className="ParticipantsTableRow__col ParticipantsTableRow__col__update-delete">
          <EditSvg className="ParticipantsTableRow__col__icons" onClick={props.editButtonsShowHandler}/>
          <DelSvg className="ParticipantsTableRow__col__icons" onClick={() => props.removeParticipantHandler(props.index)} />
          <img src="../public/del.svg" alt=""/>
        </div>
        )
        } 
      </div>
    )
}

export default ParticipantsTableRow;