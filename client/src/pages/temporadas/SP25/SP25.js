import React, { useState } from "react";
import "../Temporadas.css";
import Header from "../../../common/Header/Header";
import Card from "../../../common/Card/Card";
import CardEvent from "../../../common/CardEvent/CardEvent";

function SP25() {
  return (
    <div className="temporadas">
      <Header />

      <Card
        title="São Paulo - 2025"
        text="Bem-vindo à cidade de São Paulo, um lugar onde a emoção e a velocidade se encontram. Conhecida como o coração pulsante do Brasil, São Paulo é uma cidade que nunca para e sempre está pronta para receber os amantes do automobilismo. Com eventos emocionantes de velocidade, desafiadoras provas de enduro e subidas eletrizantes nas montanhas, São Paulo oferece uma experiência única para os fãs de corridas de todas as idades. Se você está procurando adrenalina e competição de alto nível, São Paulo é o lugar certo para você."
        position="right"
      />

      <CardEvent
        title="Abertura, Prova de Velocidade"
        date1="11/01/2025 e 12/01/2025 (Sábado e Domingo)"
        date2="18/01/2025 e 19/01/2025 (Sábado e Domingo)"
        local="Kartódromo Municipal Ayrton Senna"
        image={require("./assets/ayrtonsenna.jpg")}
      />

      <CardEvent
        title="Enduro"
        date1="15/02/2025 e 16/02/2025 (Sábado e Domingo)"
        date2="22/02/2025 e 23/02/2025 (Sábado e Domingo)"
        local="Kartódromo Granja Viana"
        image={require("./assets/granviana.jpg")}
      />

      <CardEvent
        title="Subida de montanha"
        date1="15/03/2025 e 16/03/2025 (Sábado e Domingo)"
        date2="22/03/2025 e 23/03/2025 (Sábado e Domingo)"
        local="Mairiporã (Av. Donizetti Tavares Lima)"
        image={require("./assets/maripora.jpg")}
      />

      <CardEvent
        title="Autocross e encerramento"
        date1="03/05/2025 e 04/05/2025 (Sábado e Domingo)"
        local="Pavilhão de Exposições do Distrito Anhembi"
        image={require("./assets/pavilhao.jpg")}
      />
    </div>
  );
}

export default SP25;
