import React, { useState } from "react";
import "../Temporadas.css";
import Header from "../../../common/Header/Header";
import Card from "../../../common/Card/Card";
import CardEvent from "../../../common/CardEvent/CardEvent";

function MG24() {
  return (
    <div className="temporadas">
      <Header />
      <Card
        title="Minas Gerais"
        text="Além da beleza de suas cidades, Minas Gerais abriga também paisagens deslumbrantes, perfeitas para atividades emocionantes ao ar livre. A geografia do estado será um cenário ideal para a realização das provas, devido ao grande número de estradas sinuosas e morros."
        position="right"
        className="eventTextCard"
        titleClassName="text-center"
      />

      <CardEvent
        title="Abertura, Prova de Velocidade e Enduro"
        date1="20/07/2024 e 21/07/2024 (Sábado e Domingo)"
        date2="27/07/2024 e 28/07/2024 (Sábado e Domingo)"
        local="Aeroporto Carlos Prates"
        image={require("./assets/aeroporto.jpg")}
      />

      <CardEvent
        title="Subida de montanha"
        date1="17/08/2024 e 18/08/2024 (Sábado e Domingo)"
        date2="24/08/2024 e 25/08/2024 (Sábado e Domingo)"
        local="Sete Lagoas"
        image={require("./assets/setelagoas.jpg")}
      />

      <CardEvent
        title="Autocross e encerramento"
        date1="07/09/2024 e 08/09/2024 (Sábado e Domingo)"
        local="Expominas"
        image={require("./assets/expominas.jfif")}
      />
    </div>
  );
}

export default MG24;
