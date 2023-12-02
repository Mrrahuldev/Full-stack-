import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './components/Routing';
class Text extends Component{
    render(){
        return(
            <div>
                <Routing/>
            </div>
        )
    }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Text/>
)