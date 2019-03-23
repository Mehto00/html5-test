import React from 'react';

import ParticipantsTableHeader from '../ParticipantsTableHeader/ParticipantsTableHeader'
import ParticipantsTableRow from '../ParticipantsTableRow/ParticipantsTableRow'
import '../ParticipantsTableHeader/ParticipantsTableHeader.css'

const ParticipantsTable = (props) => {

  const rows = props.participants.map( (participant, index) => {
    return (
      <ParticipantsTableRow 
        {...participant} 
        key={participant.id}
        index={index}

        target={props.target}
        targetRowHandler={props.targetRowHandler}

        editButtonsToggle={props.editButtonsToggle}
        editButtonsShowHandler={props.editButtonsShowHandler}

        editParticipantHandler={props.editParticipantHandler}
        removeParticipantHandler={props.removeParticipantHandler}
      />
    )
  })
    
  return(
    <div>
      <ParticipantsTableHeader 
        sortBy={props.sortBy}
        sortByToggle={props.sortByToggle}
        shortArrowStatus={props.shortArrowStatus}
        
        participants={props.participants}
      />
          {rows}
    </div>
  )
}

export default ParticipantsTable;