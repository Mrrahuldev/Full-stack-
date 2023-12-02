import React, {useState,useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import DataFetching from './main1';

/* function App(){
  const [ison,setIson]=useState(false);

  useEffect(() => {
    setInterval(() => console.log("tick"),1000);
  })

  return(
    <div>
      <h1>hello</h1>
      {!ison && (
        <button onClick={() => setIson(true)}>Subscribe</button>
      )}
      {ison && (
        <button onClick={() => setIson(false)}>Successfully subscribed</button>
      )}
    </div>
  )
} */
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataFetching/>
)