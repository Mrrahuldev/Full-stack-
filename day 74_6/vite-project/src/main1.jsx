import React, {Component} from 'react';

class Form extends Component{
  constructor(){
    super();
    this.state={
      participate: ""
    }
  }
  submitHandler = () => {
    alert(this.state.participate+" Registered");
  }
  changeHandler = (event) => {
    this.setState({
      participate: event.target.value
    })
  }
  render(){
    return(
      <form onSubmit={this.submitHandler}>
        <h1>Welcome</h1>
        <p>Register your name and click on submit</p>
        <input type="text" onChange={this.changeHandler}/>
        <input type="submit"/>
      </form>
    )
  }
}
export default Form;