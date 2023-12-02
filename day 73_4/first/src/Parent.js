import React, {Component} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class Parent extends Component{
    state={
        value: ""
    }
    parentFunction = (childData) => {
        this.setState({
            value: childData
        })
    }
    render(){
        return(
            <div>
                <Child1 callFromParent={this.parentFunction.bind(this)}/>
                <Child2 parentValue={this.state.value}/>
            </div>
        )
    }
}
export default Parent;