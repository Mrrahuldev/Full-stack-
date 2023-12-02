import React, {Component} from "react";
import Child1 from "./Child1";

class Parent extends Component{
    name="hello";
    render(){
        return(
            <div>{<Child1 nameFromParent={this.name}/>}</div>
        )
    }
}
export default Parent;