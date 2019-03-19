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
          email_address: "joujoujou@yahoo.org",
          phone_number: "666666666",
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
          phone_number: "999999999",
        },
        {
          id: 5,
          name: "Väinö Gretzy",
          email_address: "jippii@yahoo.org",
          phone_number: "999999999",
        }
      ]
    }
    this.editButtonsShowHandler = this.editButtonsShowHandler.bind(this);
  }

  editButtonsShowHandler() {
    this.setState(state => ({
      editButtonsShow: !state.editButtonsShow
    }));
  }

  newParticipantHandler = (name, email_address, phone_number) => {
    const participants = [...this.state.participants]
    const newParticipant = {
      name: name,
      email_address: email_address,
      phone_number: phone_number,
    }
    participants.push(newParticipant)
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
          editButtonsShow={this.state.editButtonsShow}
          editButtonsShowHandler={this.editButtonsShowHandler}
          removeParticipantHandler={this.removeParticipantHandler}
          />

        </div>
      </div>
    );
  }
}

export default App;
