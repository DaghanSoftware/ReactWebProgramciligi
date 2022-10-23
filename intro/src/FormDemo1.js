import React, { Component } from 'react'

export default class 
 extends Component {
    state = {userName:''}
    OnCangeHandler = (event)=>{
        this.setState({userName:event.target.value})
    }
    onSubmitHandler = (event)=>{
        event.preventDefault();
        alert(this.state.userName);
    }
  render() {
    return (
      <div>
            <form onSubmit={this.onSubmitHandler}>
                <h3>User Name</h3>
                <input onChange={this.OnCangeHandler} type="text" ></input>
                <h3>User name is {this.state.userName}</h3>
                <input type="submit" value="Save"></input>
            </form>
      </div>
    )
  }
}
