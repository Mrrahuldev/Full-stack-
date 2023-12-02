import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class App extends Component{
  constructor(){
    super();
    this.state={
      name: "everyone",
    }
  }
  render(){
    return(
      <h1>hello {this.state.name}</h1>
    )
  }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App/>
)