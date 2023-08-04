import React, { useRef, useEffect, useState } from "react";
import "./Card.css";

function Card({ title, text, image, position, cardHeight }) {
  const cardRef = useRef(null);
  const [currentCardHeight, setCurrentCardHeight] = useState(cardHeight || 0);

  // Função para obter a altura do div Card e atualizar o estado currentCardHeight
  const obterAltura = () => {
    if (cardRef.current) {
      setCurrentCardHeight(cardRef.current.offsetHeight);
    }
  };

  // Chame obterAltura sempre que a propriedade "text" mudar para atualizar a altura, se necessário
  useEffect(() => {
    obterAltura();
  }, [text]);

  // Resto do código permanece o mesmo

  // Usando a altura passada ou a altura atualizada do card como altura da imagem
  const cardImageHeight = cardHeight || currentCardHeight;

  if (position === "left") {
    return (
      <div className="Card" ref={cardRef}>
        {image && (
          <img
            src={image}
            alt={title}
            style={{
              height: cardImageHeight,
              overflow: "hidden",
              objectFit: "cover",
              marginRight: "20px",
            }}
          />
        )}

        <div className="Card_Text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
  } else if (position === "right") {
    return (
      <div className="Card" ref={cardRef}>
        <div className="Card_Text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        {image && (
          <img
            src={image}
            alt={title}
            style={{
              height: cardImageHeight,
              overflow: "hidden",
              objectFit: "cover",
              marginLeft: "20px",
            }}
          />
        )}
      </div>
    );
  }
}

export default Card;
