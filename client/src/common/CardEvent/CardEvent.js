import React, { useRef, useEffect, useState } from "react";
import "./CardEvent.css";

function CardEvent({ title, date1, date2, local, image }) {
  const CardEventRef = useRef(null);
  const [CardEventHeight, setCardEventHeight] = useState(0); // Estado para armazenar a altura do CardEvent

  // Função para obter a altura do div CardEvent e atualizar o estado CardEventHeight
  const obterAltura = () => {
    if (CardEventRef.current) {
      setCardEventHeight(CardEventRef.current.offsetHeight);
    }
  };

  // Chame obterAltura sempre que a propriedade "text" mudar para atualizar a altura, se necessário
  useEffect(() => {
    obterAltura();
  }, [date1, date2]);

  return (
    <div className="CardEvent" ref={CardEventRef}>
      <img
        src={image}
        alt={title}
        style={{
          height: CardEventHeight, // Usando a altura atualizada do CardEvent como altura da imagem
          overflow: "hidden",
          objectFit: "cover",
        }}
      />

      <div className="CardEvent_Text">
        <h2>{title}</h2>
        <div className="Event-element">
          <img id="icons" src={require("./assets/calendar.png")} />
          <p>{date1}</p>
        </div>
        {date2 &&
          date2.trim() !== "" && ( // Verifica se date2 existe e não é uma string vazia
            <div className="Event-element">
              <img id="icons" src={require("./assets/calendar.png")} />
              <p>{date2}</p>
            </div>
          )}
        <div className="Event-element">
          <img id="icons" src={require("./assets/location.png")} />
          <p>{local}</p>
        </div>
      </div>
    </div>
  );
}

export default CardEvent;
