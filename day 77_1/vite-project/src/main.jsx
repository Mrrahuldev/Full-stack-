import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
/* import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons' */

function Text(){
  return(
    <div>
    {/*   <FontAwesomeIcon icon={faCoffee} /> */}
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque pariatur facilis facere delectus molestias dolor tenetur consequatur sint voluptatibus non asperiores provident laboriosam sunt, sed quidem temporibus. Rem, quae inventore.</h1>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, impedit culpa? Dolor minima veritatis dignissimos atque quasi, officiis iste officia repellat rem nemo doloribus! Delectus libero fuga repellat quidem debitis!</h2>
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Text/>
  </div>
)