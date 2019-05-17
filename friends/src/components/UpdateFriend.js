import React from 'react';

class UpdateFriend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            updatedFriend: {
                name: this.props.friend.name,
                age: this.props.friend.age,
                email: this.props.friend.email
                }
        }
    }

    changeHandler = (e) => {
    this.setState({ 
      updatedFriend: {
        ...this.state.updatedFriend,
        [e.target.name]: e.target.value 
       }
    })
  }

  handleSubmit = e => {
      e.preventDefault();
      this.props.updateFriend(this.state.updatedFriend, this.props.friend.id)
  }

    render(){
    return(
        <div className="form-background">
            <form className="add-new-friend" onSubmit={this.handleSubmit}>
                <h3>Edit friend!</h3>
                <p>Name: 
                    <input
                    name="name"
                    placeholder="...enter name"
                    onChange={this.changeHandler}
                    value={this.state.updatedFriend.name}
                    />
                </p>
                <p>Age: 
                    <input 
                    name="age"
                    placeholder="...enter age"
                    onChange={this.changeHandler}
                    value={this.state.updatedFriend.age}
                    />
                </p>
                <p>Email: 
                    <input 
                    name="email"
                    placeholder="...enter email"
                    onChange={this.changeHandler}
                    value={this.state.updatedFriend.email}
                    />
                </p>
                <button>Submit</button>
            </form>
        </div>
    )
    }
}

export default UpdateFriend;