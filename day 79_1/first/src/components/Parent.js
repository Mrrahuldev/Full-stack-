import React from "react";
import ComponentX from "./Component_X";
export const HelloContext=React.createContext();
export const EveryContext=React.createContext();
function Parent(){
    return(
        <div>
            <HelloContext.Provider value={"hello"}>
                <EveryContext.Provider value={"everyone"}>
                    <ComponentX/>
                </EveryContext.Provider>
            </HelloContext.Provider>
        </div>
    )
}
export default Parent;