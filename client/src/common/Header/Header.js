import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import Button from "..//Button/Button";

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);
  return ref;
};

function Header() {
  const handleClickOutside = () => {
    setShowDropdown(false);
  };

  const navigate = useNavigate();
  const dropdownRef = useOutsideClick(handleClickOutside);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleTemporadasDropdown = (year) => {
    setSelectedYear(year);
    setShowDropdown(false); // Fechar o menu suspenso após selecionar uma opção
    navigate(`/temporadas/${year}`); // Redirecionar para a página correspondente
  };

  return (
    <div className="Header">
      <div className="Logo_Header">
        <img src="https://i.imgur.com/ae0Tsfu.png" alt="logo" 
            onClick={(e) => navigate("/")}
            style={{cursor: "pointer"}}
        />
      </div>

      <div className="Elements_Header">
        {/* Outros botões do header */}
        <Button title="Nossa História" click={(e) => navigate("/nossahistoria")} />
        <Button title="Provas" click={(e) => navigate("/provas")} />
        <Button title="Categorias" click={(e) => navigate("/categorias")} />
        <Button title="Parceiros" click={(e) => navigate("/parceiros")} />
        <div className="Dropdown" ref={dropdownRef}>
          <Button
            title="Temporadas"
            click={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="Dropdown-Content">
              <div
                className="Dropdown-Button"
                onClick={() => handleTemporadasDropdown("SP24")}
              >
                2024-SP
              </div>
              <div
                className="Dropdown-Button"
                onClick={() => handleTemporadasDropdown("MG24")}
              >
                2024-MG
              </div>
              <div
                className="Dropdown-Button"
                onClick={() => handleTemporadasDropdown("SP25")}
              >
                2025-SP
              </div>
              <div
                className="Dropdown-Button"
                onClick={() => handleTemporadasDropdown("PB25")}
              >
                2025-PB
              </div>
            </div>
          )}
        </div>
        <Button title="Contatos" click={(e) => navigate("/contatos")} />
        <Button title="Equipe" click={(e) => navigate("/equipe")} />
        <Button title="Inscreva-se" click={(e) => navigate("/inscrição")} />

        <SearchBar />

        <img
          className="Social_Media"
          src="https://i.imgur.com/7ZGBndX.png"
          alt="Linkedin"
        />
        <img
          className="Social_Media"
          src="https://i.imgur.com/RBVMlLq.png"
          alt="instagram"
        />
        <img
          className="Social_Media"
          id="YouTube"
          src="https://i.imgur.com/OWEpVne.png"
          alt="Youtube"
        />
      </div>
    </div>
  );
}

export default Header;
