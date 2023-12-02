import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
/* import Form from './main1'; */
import Form from './main2';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      participate: ""
    }
  }
  changeHandler = (event) => {
    this.setState({
      participate: event.target.value
    })
  }
  render() {
    let header = "";
    let footer="";
    if (this.state.participate) {
      header = <h1>Thank you for registration</h1>
      footer= <h1> {this.state.participate}</h1>
    }
    return (
      <form>
        {header}
        <p>Register your name</p>
        {footer}
        <input type="text" onChange={this.changeHandler}/>
      </form>
  )
  }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Form/>
)