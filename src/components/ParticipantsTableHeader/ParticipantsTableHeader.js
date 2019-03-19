import React from 'react';
import './ParticipantsTableHeader.css';

const participantsTableHeader = () => {
    return(
    <div className="participantsTableHeader">
        <div className="participantsTableHeader__col participantsTableHeader__col__name">Name</div>
        <div className="participantsTableHeader__col participantsTableHeader__col__email">Email address</div>
        <div className="participantsTableHeader__col">Phone number</div>
        <div className="participantsTableHeader__col participantsTableHeader__col__update-delete"></div>
      </div>
    )
}

export default participantsTableHeader;