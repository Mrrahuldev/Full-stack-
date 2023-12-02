import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class Music extends Component {
  constructor() {
    super();
    this.state = {
      instrument: "Guitar"
    }
  }
  shouldComponentUpdate() { // return a boolean value that specifies whether react should continue with rendering or not
    return false;
  }
  change = () => {
    this.setState({
      instrument: "Drums"
    })
  }
  render() {
    return (
      <div>
        <h1>I know how to play {this.state.instrument}</h1>
        <button onClick={this.change}>Change Instrument</button>
      </div>
    )
  }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Music/>
)