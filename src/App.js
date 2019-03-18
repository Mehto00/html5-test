import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'
import NewParticipantsForm from './components/NewParticipantsForm/NewParticipantsForm'
import Participants from './components/Participants/Participants'


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      participantObj : {
        name: "",
        email_address: "",
        phone_number: ""
      },

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

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhonenumberChange = this.handlePhonenumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({[this.state.participantObj.name]: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({[this.state.participantObj.email_address]: event.target.value});
  }
  handlePhonenumberChange(event) {
    this.setState({[this.state.participantObj.phone_number]: event.target.value});
  }

  handleSubmit(event) {
    const name = this.state.participantObj.name;
    const email_address = this.state.participantObj.email_address;
    const phone_number = this.state.participantObj.phone_number;
    this.newParticipantHandler(name, email_address, phone_number)
    event.preventDefault();
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

          <form className="newParticipantsForm" onSubmit={this.handleSubmit}>
            <input className="newParticipantsForm__input"
                    placeholder="Full name"
                    type="text" 
                    name="name"
                    value= {this.state.participantObj.name}
                    onChange= {this.handleNameChange}
                    required/>
            
            <input className="newParticipantsForm__input newParticipantsForm__input__email"
                    placeholder="E-mail address" 
                    type="email" 
                    name="email_address" 
                    value= {this.state.participantObj.email_address}
                    onChange= {this.handleEmailChange}
                    required/>

            <input className="newParticipantsForm__input"
                    placeholder="Phone number"
                    type="tel" name="phone_number"
                    value= {this.state.participantObj.phone_number}
                    onChange= {this.handlePhonenumberChange}
                    required/>

            <input className="newParticipantsForm__input newParticipantsForm__submit"
                    type="submit" value=" Add new"/>
          </form>

          <Participants participants={this.state.participants} removeParticipantHandler={this.removeParticipantHandler}/>

          <button className="cancel">Cancel</button>
          <button className="save">Save</button>
        </div>
      </div>
    );
  }
}

export default App;
