import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class Event extends Component{
  show(){
    alert("hello");
  }
  render(){
    return(
      <button onClick={this.show}>Click me</button>
    )
  }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Event/>
)