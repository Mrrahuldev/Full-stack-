import React, { useState } from "react";

function Counter(){
    const [numbers,setNumbers]=useState([]);

    const addNumber = () => {
        setNumbers([...numbers,{
            value: Math.floor(Math.random()*10+1)
        }])
    }
    return(
        <div>
            <button onClick={addNumber}>Add a number</button>
            <ul>
                {numbers.map(number => (
                    <li>{number.value}</li>
                ))}
            </ul>
        </div>
    )
}
export default Counter;