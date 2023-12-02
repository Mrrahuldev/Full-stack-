import React, {Component} from "react";

class Child1 extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.nameFromParent}</h1>
            </div>
        )
    }
}
export default Child1;