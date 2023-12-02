import React, {useContext} from "react";
import {HelloContext, EveryContext} from "./Parent";

function ComponentZ(){
    var a=useContext(HelloContext);
    var b=useContext(EveryContext);
    return(
        <div>
            <div>{a}</div>
            <div>{b}</div>
        </div>
    )
}
export default ComponentZ;