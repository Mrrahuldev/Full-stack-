import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class Music extends Component{
  constructor(){
    super();
    this.state={
      instrument: "Guitar"
    }
  }
  // called after the component is rendered
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        instrument: "Drums"
      })
    },1000)
  }
  render(){
    return(
      <h1>I know how to play {this.state.instrument}</h1>
    )
  }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Music/>
)