import React, {Component} from "react";

class Text extends Component{
    constructor(){
        super();
        this.state={
            text: "hello"
        }
    }
    changeText(){
        this.setState({
            text: "everyone"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={() => this.changeText()}>Click me</button>
            </div>
        )
    }
}
export default Text;