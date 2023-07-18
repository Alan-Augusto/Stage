import React from "react";
import "./Button.css";

function Button({ title, icon, click}) {
      
  return (
        <button className="my_button" onClick={click}>
            {title}
        </button>
    );
  }
export default Button;
