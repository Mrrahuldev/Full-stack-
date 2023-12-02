import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
/* import Child from './Child1'; */
/* import Child from './Child2'; */
import Text from './state';

/* class Parent extends Component{
  render(){
    return(
      <Child dataFromProps="data transfer from parent"/>
    )
  }
} */


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
/*   <Parent/> */
<Text/>
)