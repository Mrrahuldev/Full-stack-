import React, {Component} from "react";

class Child1 extends Component{
    name="hello";
    childFunction = () => {
        this.props.callFromParent(this.name);
    }
    render(){
        return(
            <div>
                <button onClick={this.childFunction.bind(this)}>Click me</button>
            </div>
        )
    }
}
export default Child1;