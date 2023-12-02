import React from "react";
import {useParams} from "react-router-dom";

const Contact = () => {
    const params=useParams();
    return(
        <div>
            <h1>Contact {params.id}</h1>
        </div>
    )
}
export default Contact;