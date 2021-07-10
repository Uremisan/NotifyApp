import React from 'react';
import NoteItem from './NoteItem';
import { connect } from 'react-redux';
import { getAllUsersAction } from '../actions/userActions';

class NoteList extends React.Component{
  constructor(props){
    super(props)
} 

componentDidMount(){//display all users when the component mounts
  this.props.getAllUsersAction()
}
  
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
  usersData: state.userState.users,
  };
}
const mapDispatchToProps = {
  getAllUsersAction,
}

export default connect (mapStateToProps, mapDispatchToProps)(NoteList);