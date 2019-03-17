import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'
import NewParticipantsForm from './components/NewParticipantsForm/NewParticipantsForm'
import Participants from './components/Participants/Participants'


class App extends Component {

  state = {
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
    ],

  }

  newParticipantHandler = () => {
    // return console.log("hodor");
    this.setState(state => ({
      participants: [
        ...this.state.participants,
        {
          id: 6,
          name: "löllö",
          email_address: "lööö",
          phone_number: "666444222"
        }
      ]
    }))
  };
  
  render() {
    return (
      <div className="App">
      < Header />
        <div className="contentWrapper">
          <h1>List of participants</h1>

          <div className="newParticipantsForm">
            <input className="newParticipantsForm__input" placeholder="Full name" type="text" name="" required/>
            <input className="newParticipantsForm__input newParticipantsForm__input__email" placeholder="E-mail address" type="email" name="email_address" required/>
            <input className="newParticipantsForm__input" placeholder="Phone number" type="tel" name="phone_number" required/>
            <button className="newParticipantsForm__input newParticipantsForm__submit" type="button" onClick={this.newParticipantHandler}>Add new</button>
          </div>

          <Participants participants= {this.state.participants}/>

          <button className="cancel">Cancel</button>
          <button className="save">Save</button>
        </div>
      { /* <ParticipantsTable /> */}
      </div>
    );
  }
}

export default App;
