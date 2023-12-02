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
  getSnapshotBeforeUpdate(prevProps, prevState){ // even after update, previous props/state value will be there
    document.getElementById("CON1").innerHTML="Before the update, the instrument was "+prevState.instrument;
  }
  componentDidUpdate(){ // called after the component is updated
    document.getElementById("CON2").innerHTML="The updated instrument is "+this.state.instrument;
  }
  render(){
    return(
      <div>
        <h1>I know how to play {this.state.instrument}</h1>
        <div id="CON1"></div>
        <div id="CON2"></div>
      </div>
    )
  }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Music/>
)