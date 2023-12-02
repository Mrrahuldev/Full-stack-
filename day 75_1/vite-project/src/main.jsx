import React from 'react'
import ReactDOM from 'react-dom/client'

const names=[1,2,3];

function App(){
  return(
    <div>
      {names.map((x) => {
        return <div>{x+10}</div>
      })}
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App/>
)