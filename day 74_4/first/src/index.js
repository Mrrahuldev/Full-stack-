import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class Form extends Component{
  render(){
    return(
      <form>
        <h1>Students list</h1>
        <p>Register yourself</p>
        <input type="text"/>
      </form>
    )
  }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Form/>
)