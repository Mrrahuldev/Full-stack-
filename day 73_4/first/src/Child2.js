import React, {Component} from "react";

class Child2 extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.parentValue}</h1>
                <h1>hello from child2</h1>
            </div>
        )
    }
}
export default Child2;