import React, { useState } from 'react';
import { connect } from "react-redux";
import { editUserAction } from '../actions/userActions';

class EditContactForm extends React.Component {
  constructor(props){
    super(props)
    //autofill the edit form with the info saved already
  this.state = {
    name: this.props.user.title,
    date: this.props.user.date,
    location: this.props.user.notetext,
  };
    
  }

  handleOnChange = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

 
  handleSubmit = () => {
    let user = { ...this.state, id: this.props.user.id }
    this.props.editUser(this.props.user.id, user);
    this.props.hideModal();
  }

  render(){
  return (
    <div>
      <form>
        <div>
          <label>TITLE</label><br></br>
          <input
            type="text"
            name="title"
            value={this.state.title} 
            onChange={this.handleOnChange} 
          /><br></br>
        </div> 

        <div>
          <label>DATE RECORDED</label><br></br>
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleOnChange} 
          /><br></br>
        </div>

        <div>
          <label>NOTE TEXT</label><br></br>
          <textarea  id="textboxid2" placeholder='enter notes' rows='10' col='28' name="notetext" value={this.state.notetext} onChange={this.handleOnChange}></textarea><br></br>
        </div>


        <div>
          <br></br>
          <button type="button" onClick={this.handleSubmit}>
            Update
          </button>
        </div>
      </form>
    </div>
  )
  }
}

var mapDispatchToProps = {
  editUser : editUserAction
}

export default connect(null, mapDispatchToProps)(EditContactForm);