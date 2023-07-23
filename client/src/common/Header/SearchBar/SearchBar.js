import React from "react";
import "./SearchBar.css";

function SearchBar({ title, icon, click}) {
      
  return (
    <div className="SearchBar">
        
        <input 
        className="SearchBar_Input"
        placeholder="Faça uma busca..."
        id="SearchBar_Input"
        />
        <img
            className="SearchBar_Icon"
            src="https://cdn-icons-png.flaticon.com/512/149/149852.png "
            alt="icon"
        />

    </div>
        
    );
  }
export default SearchBar;
