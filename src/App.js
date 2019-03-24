import React, { Component } from 'react';

import './App.css';
import participantsData from './assets/participantData.json'

import Header from './components/Header/Header'
import NewParticipantsForm from './components/NewParticipantsForm/NewParticipantsForm'
import Participants from './components/Participants/Participants'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      formData: {
        name: '',
        email_address: '',
        phone_number: ''
      },
      
      editButtonsToggle: false,
      sortByToggle: false,
      
      shortArrowStatus: {
        showNameArrow: false,
        showEmailArrow: false,
        showPhoneArrow: false,
      },
      
      target: '',
      
      participants: participantsData
    }

    this.inputChangeHandler = this.inputChangeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this);
    
    this.editButtonsShowHandler = this.editButtonsShowHandler.bind(this);
    this.targetRowHandler = this.targetRowHandler.bind(this);
    
    this.compareBy = this.compareBy.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  inputChangeHandler = event => {
    this.setState({formData: {
      [event.target.name] : event.target.value
    }
    })
  }

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state.formData.name);
    console.log(this.state.formData.email_address);
    console.log(this.state.formData.phone_number);
    // this.props.newParticipantHandler(this.state.name, this.state.email_address, this.state.phone_number)
  }

  editButtonsShowHandler() {
    this.setState(state => ({
      editButtonsToggle: !state.editButtonsToggle
    }));
  }
  targetRowHandler(eventTarget) {
    this.setState({
      target: eventTarget
    });
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
  sortBy(key, toggle) {
    const participants = [...this.state.participants]

    const showNameArrow = (key === 'name') ? (true) : (false)
    const showEmailArrow  =  (key === 'email_address') ? (true) : (false)
    const showPhoneArrow  =  (key === 'phone_number') ? (true) : (false)

    if (toggle === true) {
      participants.sort(this.compareBy(key));
    } else {
      participants.sort(this.compareBy(key)).reverse();;
    }
     

    this.setState({
      participants  : participants,
      sortByToggle : !toggle,
      
      shortArrowStatus: {
        showNameArrow : showNameArrow,
        showEmailArrow : showEmailArrow,
        showPhoneArrow : showPhoneArrow
      }
      }
    );
  }

  newParticipantHandler = (name, email_address, phone_number) => {
    const participants = [...this.state.participants]
    const id = this.state.participants.length + 1;
    const newParticipant = {
      id: id,
      name: name,
      email_address: email_address,
      phone_number: phone_number,
    }
    participants.push(newParticipant)
    this.setState({participants : participants})
  };
  editParticipantHandler = (index, name, email_address, phone_number) => {
    const participants = [...this.state.participants];
    const participant = participants[index];

    if (name !== undefined) participant.name = name;
    if (email_address !== undefined) participant.email_address = email_address;
    if (phone_number !== undefined) participant.phone_number = phone_number;
    
    this.setState({participants : participants})
  };
  removeParticipantHandler = i => {
    const participants = [...this.state.participants]
    participants.splice(i, 1)
    this.setState({participants : participants})
  };
  
  render() {
    return (
      <div className="App">
      < Header />
        
        <div className="contentWrapper">
          <h1>List of participants</h1>

          <NewParticipantsForm 
          formData={this.state.formData}
          newParticipantHandler={this.newParticipantHandler}

          submitHandler={this.submitHandler}
          inputChangeHandler={this.inputChangeHandler}
          />

          <Participants 
          participants={this.state.participants}
          
          shortArrowStatus={this.state.shortArrowStatus}
          sortByToggle={this.state.sortByToggle}
          sortBy={this.sortBy}

          target={this.state.target}
          targetRowHandler={this.targetRowHandler}
          
          editButtonsToggle={this.state.editButtonsToggle}
          editButtonsShowHandler={this.editButtonsShowHandler}
          
          editParticipantHandler={this.editParticipantHandler}
          removeParticipantHandler={this.removeParticipantHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
