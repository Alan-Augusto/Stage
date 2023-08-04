import React, { useRef, useEffect, useState } from "react";
import "./CardDate.css";

function CardDate({ title, text, image, position }) {
  const CardDateRef = useRef(null);
  const [CardDateHeight, setCardDateHeight] = useState(0); // Estado para armazenar a altura do CardDate

  // Função para obter a altura do div CardDate e atualizar o estado CardDateHeight
  const obterAltura = () => {
    if (CardDateRef.current) {
      setCardDateHeight(CardDateRef.current.offsetHeight);
    }
  };

  // Chame obterAltura sempre que a propriedade "text" mudar para atualizar a altura, se necessário
  useEffect(() => {
    obterAltura();
  }, [text]);

  return (
    <div className="CardDate" style={{ width: "75%" }} ref={CardDateRef}>
      <div className="DateContainer">
        <div className="Date">
          <h2>{title}</h2>
        </div>
        <div className="LineHistory" style={{ height: CardDateHeight }}></div>
      </div>

      <div className="CardDate_Text">
        <p>{text}</p>
      </div>

      <img
        src={image}
        alt={title}
        style={{
          width: "34%",
          height: CardDateHeight, // Usando a altura atualizada do CardDate como altura da imagem
          overflow: "hidden",
          objectFit: "cover",
          marginLeft: "20px",
        }}
      />
    </div>
  );
}

export default CardDate;
