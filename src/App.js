import React, { Component } from 'react';

import './App.css';

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
      
      editButtonsShow: false,
      target: '',
      
      participants : [
        {
          id: 1,
          name: "George Clooney",
          email_address: "jippii@yahoo.org",
          phone_number: "0401234567",
        },
        {
          id: 2,
          name: "Vellu Ketola",
          email_address: "jippii@yahoo.org",
          phone_number: "0401234567",
        },
        {
          id: 3,
          name: "George Clooney",
          email_address: "jippii@yahoo.org",
          phone_number: "0401234567",
        },
        {
          id: 4,
          name: "Wayne Gretzy",
          email_address: "jippii@yahoo.org",
          phone_number: "0401234567",
        },
        {
          id: 5,
          name: "Väinö Gretzy",
          email_address: "jippii@yahoo.org",
          phone_number: "0401234567",
        }
      ]
    }
    
    this.editButtonsShowHandler = this.editButtonsShowHandler.bind(this);
    this.targetRowHandler = this.targetRowHandler.bind(this);
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  editButtonsShowHandler() {
    this.setState(state => ({
      editButtonsShow: !state.editButtonsShow
    }));
  }

  targetRowHandler(eventTarget) {
    this.setState(state => ({
      target: eventTarget
    }));
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.participants];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
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
    console.log(participant);
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
          name={this.state.formData.name}
          email={this.state.formData.email_address}
          phone_number={this.state.formData.phone_number}
          newParticipantHandler={this.newParticipantHandler}
          />

          <Participants 
          participants={this.state.participants}
          target={this.state.target}
          sortBy={this.sortBy}
          editButtonsShow={this.state.editButtonsShow}
          targetRowHandler={this.targetRowHandler}
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
