import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class Form extends Component{
  constructor(){
    super();
    this.state={
      participate: ""
    }
  }
  changeHandler = (event) => {
    this.setState({
      participate: event.target.value
    })
  }
  render(){
    return(
      <form>
        <h1>Welcome {this.state.participate}</h1>
        <p>Register your name</p>
        <input type="text" onChange={this.changeHandler}/>
      </form>
    )
  }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Form/>
)