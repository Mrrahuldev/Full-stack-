import React,{Component} from "react";
import {Link} from "react-router-dom";
class Header extends Component{
    render(){
        return(
            <div>
                <button>
                    <Link to="/">Home</Link>
                </button>
                <button>
                    <Link to="/about">About</Link>
                </button>
                <button>
                    <Link to="/contact/1">Contact</Link>
                </button>
            </div>
        )
    }
}
export default Header;