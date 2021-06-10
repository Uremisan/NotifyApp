import React from 'react';
import NoteItem from './NoteItem';
import { connect } from 'react-redux';

class NoteList extends React.Component{ 
  render(){
  return (
    <div className="wrap">
      <h1>ALL NOTES</h1>
      <br /><br />
      {this.props.usersData.map((user) => (
        
        <NoteItem user={user} delete={this.props.deleteUser} updateUser={this.props.updateUser} />
  ))}
    </div>
  )
  }
}
const mapStateToProps = (state) =>{
  return{
  usersData: state.users
}
}

export default connect (mapStateToProps)(NoteList);