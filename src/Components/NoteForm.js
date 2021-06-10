import React, {useState} from 'react';
import './NoteForm.css'
import { connect } from 'react-redux';
import {addUser, addUserAction} from '../actions/userActions';


class NoteForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        title: "",
        date: "",
        notetext: "",
    };
}

  handleOnChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = () => {
    let userId = 10000 + Math.random() * 10000000;
    let user = {...this.state, id:userId};
    this.props.addNewUser(user);
    this.setState({
      title : "",
      date : "",
      notetext : "",
  })
  }
  
  render(){
  return (
    <div className="wrapper">
      <form>
        <h1>ADD NOTE</h1>
        <fieldset>
          <br /><label className="check">TITLE</label><br />
          <input type="text" placeholder='enter title' id="textboxid" name="title" value={this.state.title} onChange={this.handleOnChange}></input>
        </fieldset> 
        
        <div>
          <fieldset>
          <br /><label className="check">DATE RECORDED</label><br />
          <input type="date" id="textboxid" name="date"  value={this.state.date} onChange={this.handleOnChange}></input>
          </fieldset>
        </div> 

       

        <div>
          <fieldset>
          <br /><label className="check">NOTE TEXT </label><br />
          <textarea  id="textboxid2" placeholder='enter notes' rows='10' col='28' name="notetext" value={this.state.notetext} onChange={this.handleOnChange}></textarea>
          </fieldset>
        </div> 

        <div>
          <br /><button type="button" id="b100" onClick={this.handleSubmit}> ADD NOTE</button><br />
        </div>
      </form>
    </div>
  );
  }
}

const mapDispatchToProps = {
  addNewUser : addUserAction
}

export default  connect(null,mapDispatchToProps)(NoteForm);