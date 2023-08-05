import React from "react";
import "./Categorias.css";
import { useNavigate } from "react-router-dom";
import Header from "../../common/Header/Header";

function Categorias() {
  const navigate = useNavigate();

  return (
    <div className="Categorias">
      <Header />
      <h1 className="mt-5">CATEGORIAS</h1>
      <main>
        <div className="Category" style={{ borderLeftStyle: "hidden" }}>
          <img src={require("./assets/Júnior.png")} alt="Júnior" />
          <h2>Júnior</h2>
          <p>Para pilotos até 23 anos de idade.</p>
          <h5 onClick={(e) => navigate("/inscrição")}>R$999,00</h5>
        </div>

        <div className="Category">
          <img src={require("./assets/Amador.png")} alt="Amador" />
          <h2>Amador</h2>
          <p>Para pilotos entre 24 e 50 anos de idade.</p>
          <h5 onClick={(e) => navigate("/inscrição")}>R$1499,00</h5>
        </div>

        <div className="Category">
          <img src={require("./assets/Master.png")} alt="Master" />
          <h2>Master</h2>
          <p>Para pilotos que superam os 50 anos de idade.</p>
          <h5 onClick={(e) => navigate("/inscrição")}>R$1499,00</h5>
        </div>

        <div className="Category">
          <img src={require("./assets/Profissional.png")} alt="Profissional" />
          <h2>Profissional</h2>
          <p>Para Pilotos profissionais (competição em alto nível).</p>
          <h5 onClick={(e) => navigate("/inscrição")}>R$2999,00</h5>
        </div>

        <div className="Category">
          <img src={require("./assets/Modificados.png")} alt="Modificados" />
          <h2>Modificados</h2>
          <p>Veículos customizados Formula Student</p>
          <h5 onClick={(e) => navigate("/inscrição")}>R$2999,00</h5>
        </div>
      </main>
    </div>
  );
}

export default Categorias;
