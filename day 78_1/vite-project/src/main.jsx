import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
/* import Counter from './main1'; */
import Counter from './main2';

/* function App() {
  let [count, setCount] = useState(0);
  if (count >= 5) {
    count = 5;
  }
  else {
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  }

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
} */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
/*   <App /> */
 <Counter/>
)