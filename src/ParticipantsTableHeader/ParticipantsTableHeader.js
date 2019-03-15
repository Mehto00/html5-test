import React from 'react';
import './ParticipantsTableHeader.css';

const participantsTableHeader = () => {
    return(
    <div className="participantsTableHeader">
        <div className="participantsTableHeader__col">name</div>
        <div className="participantsTableHeader__col participantsTableHeader__col__email">Email address</div>
        <div className="participantsTableHeader__col">Phone number</div>
        <div className="participantsTableHeader__col participantsTableHeader__col__update-delete">upd / del </div>
      </div>
    )
}

export default participantsTableHeader;