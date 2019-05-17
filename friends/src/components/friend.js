import React from 'react';
import UpdateFriend from './UpdateFriend';

class Friend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            friend: this.props.friend,
            clicked: false
        }
    }

    deleteFriend = (e) => {
        e.preventDefault();
        this.props.deleteFriend(this.state.friend.id)
    }

    toggleEdit = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ clicked: !prevState.clicked }))
    }

    render(){
        const num = Math.floor(Math.random() * 9)
        if(!this.props.friend) {
            return <h2>Loading Friends...</h2>
        }
        return (
            <div className="friend-card">
                <img className="profile-pic" src={`https://randomuser.me/api/portraits/lego/${num}.jpg`} alt="lego person" />
                <section className="friend-info">
                    <p><strong>Name:</strong> {this.props.friend.name}</p>
                    <p><strong>Age:</strong> {this.props.friend.age}</p>
                    <p><strong>Email:</strong> {this.props.friend.email}</p>
                    <div className="btn-container">
                    <button onClick={this.toggleEdit} className="edit-btn">edit</button>
                    <button onClick={this.deleteFriend} className="delete-btn">X</button>
                    </div>
                </section>
                {this.state.clicked && <UpdateFriend friend={this.state.friend} updateFriend={this.props.updateFriend} />} 
            </div>
        )
    }
}

export default Friend;