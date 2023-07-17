import React from "react";
import "./Header.css";
import Button from "../Button/Button";

function Header({}) {
      
  return (
        <div className="Header">
            <div className="Logo_Header">
                <img src="logo.png" alt="logo" />
            </div>

            <div className="Elements_Header">

                <Button title="Botão 1"/>
                <Button title="Botão 2"/>
                <Button title="Botão 3"/>
                <Button title="Botão 4"/>
                <Button title="Botão 5"/>
                <Button title="Botão 6"/>
            
            </div>
        </div>
    );
  }
export default Header;
