import React, { useState } from "react";
import "../Temporadas.css";
import Header from "../../../common/Header/Header";
import Card from "../../../common/Card/Card";
import CardEvent from "../../../common/CardEvent/CardEvent";

function PB25() {
  return (
    <div className="temporadas">
      <Header />
      <Card
        title="Paraíba - 2025"
        text="Com suas paisagens exuberantes e desafios naturais, a Paraíba é um destino emocionante para a temporada de competição. Suas trilhas sinuosas, cortando as montanhas e florestas, oferecem o cenário propício para emocionantes corridas de velocidade e adrenalina. Com uma diversidade única de terrenos e uma natureza preservada, a Paraíba promete proporcionar aos competidores uma experiência inesquecível e cheia de aventuras, combinando a emoção do esporte com a beleza das paisagens naturais."
        position="right"
      />

      <CardEvent
        title="Abertura, Prova de Velocidade e Enduro"
        date1="20/07/2024 e 21/07/2024 (Sábado e Domingo)"
        date2="27/07/2024 e 28/07/2024 (Sábado e Domingo)"
        local="Circuito Internacional Paladino"
        image={require("./assets/paladino.jfif")}
      />

      <CardEvent
        title="Subida de montanha"
        date1="16/08/2025 e 17/08/2025 (Sábado e Domingo)"
        date2="23/08/2025 e 24/08/2025 (Sábado e Domingo)"
        local="Borborema"
        image={require("./assets/borborema.jfif")}
      />

      <CardEvent
        title="Enduro e encerramento"
        date1=" 06/09/2025 e 07/09/2025 (Sábado e Domingo)"
        local="Centro de Convenções Poeta Ronaldo Cunha Lima"
        image={require("./assets/poetaronaldolima.jfif")}
      />
    </div>
  );
}

export default PB25;
