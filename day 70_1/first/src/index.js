import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class App extends Component{
  render(){
    return(
      <h1>hello</h1>
    )
  }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App/>
)