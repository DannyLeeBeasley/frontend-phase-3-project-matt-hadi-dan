import React from "react"
import { useHistory } from "react-router-dom";

function WelcomePage(){
        let history = useHistory();
      
        function handleClick() {
          history.push("/menu");
        }

    return(
        <div className="welcome">
            <h3>Welcome To The</h3>
            <h1>World's Foremost Café</h1>
            <button onClick={handleClick}>Click Here To Get Started</button>
        </div>
    )
}

export default WelcomePage;