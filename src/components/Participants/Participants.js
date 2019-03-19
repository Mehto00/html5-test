import React from 'react';

import ParticipantsTableHeader from '../ParticipantsTableHeader/ParticipantsTableHeader'
import ParticipantsTableRow from '../ParticipantsTableRow/ParticipantsTableRow'


const ParticipantsTable = (props) => {
    return(
    <div>
        <ParticipantsTableHeader />
          
          {props.participants.map( (participant, index) =>
              <ParticipantsTableRow 
                key = {index}
                index = {index}
                id = {participant.id}
                name = {participant.name}
                editButtonsShow = {props.editButtonsShow}
                email_address = {participant.email_address}
                phone_number = {participant.phone_number}
                editButtonsShowHandler = {props.editButtonsShowHandler}
                removeParticipantHandler = {props.removeParticipantHandler}
              />
            )}
      </div>
    )
}

export default ParticipantsTable;