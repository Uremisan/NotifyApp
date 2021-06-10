import logo from './logo.svg';
import './App.css';
import NoteForm from './Components/NoteForm';
import NoteList from './Components/NoteList';
import NoteItem from './Components/NoteItem';
import { useState} from 'react';
import Editform from './Components/Editform';
import React from 'react';

class App extends React.Component{

  render(){
    return (
      <div className="row">
        <div className = "col-md-6 userinput">

          <NoteForm addUser = {this.addUser} /> 
        </div>
        
        <div className = "col-md-6 Notelist">
          <NoteList />   
        </div>
        
      </div>
  
    );
  }

}
export default App;

