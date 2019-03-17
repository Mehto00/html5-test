import React from 'react';
import { ReactComponent as DelSvg } from '../../assets/del.svg';
import { ReactComponent as EditSvg } from '../../assets/edit.svg';
import './ParticipantsTableRow.css';

const ParticipantsTableRow = (props) => {
    return(
    <div className="ParticipantsTableRow">
        <div className="ParticipantsTableRow__col">{props.name}</div>
        <div className="ParticipantsTableRow__col ParticipantsTableRow__col__email">{props.email_address}</div>
        <div className="ParticipantsTableRow__col">{props.phone_number}</div>
        <div className="ParticipantsTableRow__col ParticipantsTableRow__col__update-delete">
            <EditSvg className="ParticipantsTableRow__col__icons" />
            <DelSvg className="ParticipantsTableRow__col__icons" />
            <img src="../public/del.svg" alt=""/>
        </div>    
      </div>
    )
}

export default ParticipantsTableRow;