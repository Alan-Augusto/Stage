import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import Button from "../button/Button";

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
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container>
        {/*         <Navbar.Brand href="#home">STAGE</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/nossahistoria">Nossa História</Nav.Link>
          <Nav.Link href="/provas">Provas</Nav.Link>
          <Nav.Link href="/categorias">Categorias</Nav.Link>
          <Nav.Link href="/parceiros">Parceiros</Nav.Link>
          <NavDropdown title="Temporadas" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">2024-SP</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">2024-MG</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">2025-SP</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">2025-PB</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/equipe">Equipe</Nav.Link>
          <Nav.Link href="/inscrição">Inscreva-se</Nav.Link>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Header;
