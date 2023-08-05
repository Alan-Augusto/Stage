import React from "react";
import "./Provas.css";
import Header from "../../common/Header/Header";
import Card from "../../common/Card/Card";

function Provas() {
  return (
    <div className="Provas">
      <Header />
      <h1 className="mt-5">PROVAS</h1>
      <Card
        title="Velocidade"
        text="Essa modalidade de prova visa testar os competidores ao máximo em sua capacidade de se manter em alta velocidade e de obtenção do melhor tempo possível em um determinado número de voltas. As pistas serão mais retas e, ainda assim, exigirão do piloto boa técnica e constância à frente do volante.
          Os carros do tipo Fórmula Student são mais rápidos do que os karts convencionais e, como são elétricos, possuem maior facilidade de atingir grandes acelerações. Essa prova vai trazer bastante adrenalina aos competidores!"
        image={require("./assets/Velocidade.png")}
        position="left"
        height_card={200}
      />
      <Card
        title="Autocross"
        text="Essa prova, sendo muito conhecida principalmente por ser em uma velocidade menor que uma corrida convencional e por valorizar mais as manobras do que grandes acelerações, essa modalidade é muito difundida nos Estados Unidos e em algumas outras competições espalhadas pelo mundo.
          Os eventos ocorrem em terrenos espaçosos e pavimentados onde cones de sinalização são utilizados para demarcar o percurso. A utilização de cones permite a criação de trajetos diferentes a cada evento. Apenas um carro compete na pista por vez e a disputa é pelo melhor tempo."
        image={require("./assets/Autocross.png")}
        position="right"
        height_card={200}
      />
      <Card
        title="Enduro"
        text="É uma prova tradicional que explora o lado de resistência e de consistência de cada um dos pilotos. Essa modalidade existe há décadas e já houve inclusive jogos de corrida lançados exclusivamente baseados em tal competição.
          A ideia é percorrer uma pista longa e que explore a qualidade de cada um dos corredores durante a pilotagem. Serão dispostos obstáculos para testar ainda mais o nível dos competidores. Visa-se implementar um número mínimo de voltas para avaliar o quão aptos os pilotos estarão."
        image={require("./assets/Enduro.png")}
        position="left"
        height_card={200}
      />
      <Card
        title="Subida de montanha"
        text="A subida de montanha é um emocionante evento automobilístico que combina velocidade, habilidade e adrenalina. Os pilotos enfrentam o desafio de percorrer um percurso sinuoso e íngreme, utilizando nossos veículos potentes que aumentam ainda mais a emoção da corrida.
          Esse evento é uma prova de resistência e técnica, onde os competidores buscam o melhor tempo possível para alcançar o topo da montanha, proporcionando aos espectadores uma experiência fascinante de velocidade e talento."
        image={require("./assets/SubidaMontanha.png")}
        position="right"
        height_card={200}
      />
    </div>
  );
}

export default Provas;
