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

  



}
