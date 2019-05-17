import React from 'react';
import axios from 'axios';

import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

import './App.css';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res)
        this.setState({ friends:res.data})
      })
      .catch( err =>{ 
        console.log(err)
      })
  }

  addFriend = newFriend => {
    axios
    .post('http://localhost:5000/friends', newFriend)
    .then(res => {
      this.setState({ friends: res.data })
    })
    .catch(err => console.log(err))
  }

  deleteFriend = (id) => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState({ friends: res.data })
    })
    .catch(err => console.log(err))
  }

  updateFriend = (updatedFriend, id) => {
    axios
    .put(`http://localhost:5000/friends/${id}`, updatedFriend)
    .then(res => {
      this.setState({ friends: res.data })
    })
    .catch(err => console.log(err))
  }

    render(){
    return (
      <div className="App">
      <div className="header-container">
        <h1>Friends</h1>
        <FriendForm
        addFriend={this.addFriend}
        />
        </div>

        <div className="all-my-friends">
          <Friends
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
          updateFriend={this.updateFriend}
          />
        </div>

      </div>
    );
  }
}

export default App;
