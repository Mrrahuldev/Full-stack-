import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class Music extends Component{
  constructor(){
    super();
    this.state={
      instrument: "Guitar"
    }
  }
  // to set the state object based on the initial props
  // This is the first method that is called when a component gets updated
  static getDerivedStateFromProps(props){ // if props changes only then this will return otherwise it will not
    return {
      instrument: props.New
    }
  }
  render(){
    return(
      <h1>I know how to play {this.state.instrument}</h1>
    )
  }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Music New="Drums"/>
  </div>
)