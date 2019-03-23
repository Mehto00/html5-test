import React from 'react';
import './ParticipantsTableHeader.css';

const participantsTableHeader = (props) => {
    return(
    <div className="participantsTableWrapper">
    <div className="participantsTableHeader">
      <div className="participantsTableHeader__col participantsTableHeader__col__content" onClick={() => props.sortBy('name', props.sortByToggle)}>
        Name {(props.shortArrowStatus.showNameArrow) ? (props.sortByToggle ? " ↓" : " ↑") : "" /* if showArrow property is true validates the sortByToggle property to display up or down arrow. Otherwise "" */ }
      </div>
      
      <div className="participantsTableHeader__col participantsTableHeader__col__content" onClick={() => props.sortBy('email_address', props.sortByToggle)}>
        Email adress {(props.shortArrowStatus.showEmailArrow) ? (props.sortByToggle) ? " ↓": " ↑" : "" /* if showArrow property is true validates the sortByToggle property to display up or down arrow. Otherwise "" */ }
      </div>
      
      <div className="participantsTableHeader__col participantsTableHeader__col__content" onClick={() => props.sortBy('phone_number', props.sortByToggle)}>
        Phone number {(props.shortArrowStatus.showPhoneArrow) ? (props.sortByToggle) ? " ↓": " ↑" : "" /* if showArrow property is true validates the sortByToggle property to display up or down arrow. Otherwise "" */ }
      </div>
      
      <div className="participantsTableHeader__col participantsTableHeader__col__editDel"></div>
    </div>
    </div>
    )
}

export default participantsTableHeader;