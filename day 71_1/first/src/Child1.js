import React, {Component} from "react";

class Child extends Component{
    render(){
        return(
            <div>
                <h1>We are learning {this.props.dataFromProps}</h1>
            </div>
        )
    }
}
export default Child;