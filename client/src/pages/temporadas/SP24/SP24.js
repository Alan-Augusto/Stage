import React, { useState } from "react";
import "../Temporadas.css";
import Header from "../../../common/Header/Header";
import Card from "../../../common/Card/Card";
import CardEvent from "../../../common/CardEvent/CardEvent";

function SP24() {
  return (
    <div className="temporadas">
      <Header />

      <Card
        title="São Paulo - 2024"
        text="São Paulo, a maior metrópole do Brasil, é uma cidade movimentada e cheia de energia. Conhecida como a cidade que nunca dorme, oferece um cenário emocionante para os entusiastas do automobilismo. Suas pistas movimentadas são palco de desafios de velocidade e enduro, enquanto as montanhas do interior proporcionam emocionantes subidas e descidas. Não importa o seu gosto, São Paulo tem algo especial para todos os fãs de corridas e automobilismo."
        position="right"
        className="eventTextCard"
        titleClassName="text-center"
      />

      <CardEvent
        title="Abertura, Prova de Velocidade"
        date1="14/01/2024 e 15/01/2024 (Sábado e Domingo)"
        date2="21/01/2024 e 22/01/2024 (Sábado e Domingo)"
        local="Kartódromo Granja Viana"
        image={require("./assets/granviana.jpg")}
      />

      <CardEvent
        title="Enduro"
        date1="17/02/2024 e 18/02/2024 (Sábado e Domingo)"
        date2="24/02/2024 e 25/02/2024 (Sábado e Domingo)"
        local="Kartódromo Municipal Ayrton Senna"
        image={require("./assets/ayrtonsenna.jpg")}
      />

      <CardEvent
        title="Subida de montanha"
        date1="16/03/2024 e 17/03/2024 (Sábado e Domingo)"
        date2="23/03/2024 e 24/03/2024 (Sábado e Domingo)"
        local="Monte Alegre do Sul (Rua Coronel Luís Leite)"
        image={require("./assets/montealegre.jpg")}
      />

      <CardEvent
        title="Autocross e encerramento"
        date1="20/04/2024 e 21/04/2024 (Sábado e Domingo)"
        local="Pavilhão de Exposições do Distrito Anhembi"
        image={require("./assets/pavilhao.jpg")}
      />
    </div>
  );
}

export default SP24;
