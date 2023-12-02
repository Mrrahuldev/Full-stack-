import React from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Notfound from "./Notfound";

function Routing(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="*" element={<Notfound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routing;