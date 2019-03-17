import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header'
import NewParticipantsForm from './NewParticipantsForm/NewParticipantsForm'
import ParticipantsTableHeader from './ParticipantsTableHeader/ParticipantsTableHeader'
import ParticipantsTableRow from './ParticipantsTableRow/ParticipantsTableRow'

class App extends Component {
  render() {
    return (
      <div className="App">
      < Header />
        <div className="contentWrapper">
          <h1>List of participants</h1>
          <NewParticipantsForm />
          <ParticipantsTableHeader />
          <ParticipantsTableRow />
          <button className="cancel">Cancel</button>
          <button className="save">Save</button>
        </div>
      { /* <ParticipantsTable /> */}
      </div>
    );
  }
}

export default App;
