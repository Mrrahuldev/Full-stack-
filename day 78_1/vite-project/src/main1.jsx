import React, {useState} from "react";

function Counter(){
    const initialCount=0;
    const [count,setCount]=useState(initialCount);

    const increaseByTwo = () => {
        for(let i=0; i<2; i++){
            setCount(prev=> prev+1);
        }
    }
    return(
        <div>
            <h1>Count {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={increaseByTwo}>Increase By Two</button>
        </div>
    )
}
export default Counter;