import React, {Component} from "react";

class Form extends Component{
    constructor(){
        super();
        this.state={
            myTraining: "choose"
        }
    }
    render(){
        return(
            <form>
                <select value={this.state.myTraining}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Node">Node.js</option>
                </select>
            </form>
        )
    }
}
export default Form;