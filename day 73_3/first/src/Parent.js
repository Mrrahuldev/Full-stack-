import React, {Component} from "react";
import Child1 from "./Child1";

class Parent extends Component{
    parentFunction = (childData) => {
        document.getElementById("root").innerHTML=childData;
    }
    render(){
        return(
            <div>
                <Child1 callFromParent={this.parentFunction.bind(this)}/>
            </div>
        )
    }
}
export default Parent;