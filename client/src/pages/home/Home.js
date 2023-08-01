import React, { useEffect, useRef, useState } from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";
import Header from '../../common/Header/Header';
import { Link } from 'react-scroll';

function Home() {

  const navigate = useNavigate();

  return (
    <div className='Home'>
      <Header />

      <div className='section' id='bem-vindo'>
        <h2>Bem-vindo à Stage!</h2>
        <p>
          Onde a emoção e a inovação aceleram juntas rumo ao futuro das provas competitivas automobilísticas!
        </p>
      </div>

      <div className='section' id='nossa-historia'>
        <h2>Nossa História</h2>
        <p>
        De uma paixão por velocidade à revolução das competições, nossa história é um percurso audacioso que redefine os limites das corridas amadoras, impulsionando o automobilismo para novos horizontes emocionantes.
        </p>
        <button onClick={(e) => navigate("/nossahistoria")}>Descubra a Jornada!</button>
      </div>

      <div className='section' id='provas'>
        <h2>Provas</h2>
        <p>
        Desafie seus limites e acelere rumo à glória em nossas provas épicas, onde cada curva é uma oportunidade para se tornar uma lenda do asfalto.
        </p>
        <button onClick={(e) => navigate("/provas")}>Acelere para a Glória!</button>
      </div>

      <div className='section' id='categorias'>
        <h2>Categorias</h2>
        <p>
        Da juventude inquieta dos Júnior aos experientes mestres da pista, dos amadores destemidos aos profissionais prontos para o auge da competição.
       </p>
       <button onClick={(e) => navigate("/categorias")}>Escolha seu Desafio!</button>
      </div>

      <div className='section' id='parceiros'>
        <h2>Parceiros</h2>
        <p>
        Unidos pela paixão automobilística, nossos parceiros são a força por trás do sucesso das provas da Stage. Com a visão compartilhada de inovação e superação, juntos aceleramos rumo ao futuro das competições, impulsionando o automobilismo a novos patamares de excelência e adrenalina.
        </p>
        <button onClick={(e) => navigate("/parceiros")}>Veja o Time Vencedor!</button>
      </div>

      <div className='section' id='equipe'>
        <h2>Equipe</h2>
        <p>
        Veja a força por trás da emoção, a equipe que impulsiona a Stage rumo ao pódio da inovação e adrenalina.
        </p>
        <button onClick={(e) => navigate("/equipe")}>Conheça os Heróis dos Bastidores!</button>
      </div>

      <div className='section' id='inscreva-se'>
        <h2>Inscreva-se</h2>
        <p>
        Faça história em qualquer ambiente, garanta seu lugar na competição mais emocionante do ano. Inscreva-se agora mesmo e acelere rumo à glória na pista da Stage!
        </p>
        <button onClick={(e) => navigate("/inscrição")}>Faça Parte da Corrida!</button>
      </div>

      <div className='footer'>
        {/* Conteúdo do rodapé */}
      </div>
    </div>
  );
}

export default Home;
