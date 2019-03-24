import React from 'react';
import Radium from 'radium';
import { ReactComponent as ArrowUpSvg } from '../../assets/arrow-up-solid.svg';
import { ReactComponent as ArrowDownSvg } from '../../assets/arrow-down-solid.svg';
import './ParticipantsTableHeader.css';



const participantsTableHeader = (props) => {
  
  const arrowStyle = {
    height: '12px',
    marginLeft: '8px',
    }
  const hoverStyling = {
    ':hover': {
      cursor: 'pointer'
    }
  }

    return(
    <div className="participantsTableWrapper">
    <div className="participantsTableHeader">
      <div className="participantsTableHeader__col participantsTableHeader__col__content" onClick={() => props.sortBy('name', props.sortByToggle)}>
        <span key='1' style={hoverStyling}>Name</span> {(props.shortArrowStatus.showNameArrow) ? (props.sortByToggle ? <ArrowDownSvg style={arrowStyle} /> :  <ArrowUpSvg  style={arrowStyle} />) : "" /* if showArrow property is true validates the sortByToggle property to display up or down arrow. Otherwise "" */ }
      </div>
      
      <div className="participantsTableHeader__col participantsTableHeader__col__content" onClick={() => props.sortBy('email_address', props.sortByToggle)}>
        <span key='2' style={hoverStyling}>Email adress</span> {(props.shortArrowStatus.showEmailArrow) ? (props.sortByToggle ? <ArrowDownSvg style={arrowStyle} /> :  <ArrowUpSvg  style={arrowStyle} />) : "" /* if showArrow property is true validates the sortByToggle property to display up or down arrow. Otherwise "" */ }
      </div>
      
      <div className="participantsTableHeader__col participantsTableHeader__col__content" onClick={() => props.sortBy('phone_number', props.sortByToggle)}>
        <span key='3' style={hoverStyling}>Phone number</span> {(props.shortArrowStatus.showPhoneArrow) ? (props.sortByToggle ? <ArrowDownSvg style={arrowStyle} /> :  <ArrowUpSvg  style={arrowStyle} />) : "" /* if showArrow property is true validates the sortByToggle property to display up or down arrow. Otherwise "" */ }
      </div>
      
      <div className="participantsTableHeader__col participantsTableHeader__col__editDel"></div>
    </div>
    </div>
    )
}

export default Radium(participantsTableHeader);