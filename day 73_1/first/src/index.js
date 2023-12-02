import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import {Typeahead} from "react-bootstrap-typeahead";
import option from './option';
import "./style.css";

class Location extends Component{
  render(){
    return(
      <Typeahead options={option} placeholder="Enter area name"/>
    )
  }
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Location/>
)