import React from 'react';
import { ReactComponent as DelSvg } from './del.svg';
import { ReactComponent as EditSvg } from './edit.svg';
import './ParticipantsTableRow.css';

const ParticipantsTableRow = () => {
    return(
    <div className="ParticipantsTableRow">
        <div className="ParticipantsTableRow__col">Name Surname</div>
        <div className="ParticipantsTableRow__col ParticipantsTableRow__col__email">email@gmail.com</div>
        <div className="ParticipantsTableRow__col">+358401234567</div>
        <div className="ParticipantsTableRow__col ParticipantsTableRow__col__update-delete">
            <EditSvg className="ParticipantsTableRow__col__icons" />
            <DelSvg className="ParticipantsTableRow__col__icons" />
            <img src="../public/del.svg" alt=""/>
        </div>    
      </div>
    )
}

export default ParticipantsTableRow;