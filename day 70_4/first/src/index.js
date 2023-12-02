import React from 'react';
import ReactDOM from 'react-dom/client';
import Content from './components/content';

const App = () => {
  return(
    <div>
      <h1>hello</h1>
      <Content/>
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App/>
)