import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './Parent';

class Music extends Component{
  render(){
    return(
      <Parent/>
    )
  }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Music/>
)