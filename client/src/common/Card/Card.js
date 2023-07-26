import React, { useRef, useEffect, useState } from "react";
import "./Card.css";

function Card({ title, text, image, position }) {
  const cardRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0); // Estado para armazenar a altura do card

  // Função para obter a altura do div Card e atualizar o estado cardHeight
  const obterAltura = () => {
    if (cardRef.current) {
      setCardHeight(cardRef.current.offsetHeight);
    }
  };

  // Chame obterAltura sempre que a propriedade "text" mudar para atualizar a altura, se necessário
  useEffect(() => {
    obterAltura();
  }, [text]);

  if(position=='left'){
    return (
      <div className="Card" style={{ width: "75%" }} ref={cardRef}>
        
        <img
          src={image}
          alt={title}
          style={{
            width: "34%",
            height: cardHeight, // Usando a altura atualizada do card como altura da imagem
            overflow: "hidden",
            objectFit: "cover",
            marginRight: "20px"
          }}
        />

        <div className="Card_Text" style={{ width: "66%" }}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
  
      </div>
    );

  }
  else if(position=='right'){
    return (
      <div className="Card" style={{ width: "75%" }} ref={cardRef}>
        
        <div className="Card_Text" style={{ width: "66%" }}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
  
        <img
          src={image}
          alt={title}
          style={{
            width: "34%",
            height: cardHeight, // Usando a altura atualizada do card como altura da imagem
            overflow: "hidden",
            objectFit: "cover",
            marginLeft: "20px"
          }}
        />
      </div>
    );

  }

  
}

export default Card;
