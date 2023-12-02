import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './Parent';

class Music extends Component{ // from parent to child
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