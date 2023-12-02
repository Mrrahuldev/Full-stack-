import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class Parent extends Component{
  check(a,b){
    return a*b;
  }
  render(){
    let permission=this.check(2,1);
    return permission===2 ? (
      <div>
        <h1>Login successful</h1>
      </div>
    ) : (
      <div>
        <h1>Login failed</h1>
      </div>
    )
  }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Parent/>
)