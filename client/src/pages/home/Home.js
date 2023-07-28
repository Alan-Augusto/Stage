import React from 'react';
import './Home.css';
import Header from '../../common/Header/Header';
import { Link } from 'react-scroll';

function Home() {
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
      </div>

      <div className='section' id='provas'>
        <h2>Provas</h2>
        <p>
          ###
        </p>
      </div>

      <div className='section' id='categorias'>
        <h2>Categorias</h2>
        <p>
          ###
        </p>
      </div>

      <div className='section' id='parceiros'>
        <h2>Parceiros</h2>
        <p>
          ###
        </p>
      </div>

      <div className='section' id='temporadas'>
        <h2>Temporadas</h2>
        <p>
          ###
        </p>
      </div>

      <div className='section' id='equipe'>
        <h2>Equipe</h2>
        <p>
          ###
        </p>
      </div>

      <div className='section' id='inscreva-se'>
        <h2>Inscreva-se</h2>
        <p>
          ###
        </p>
      </div>

      <div className='footer'>
        {/* Conteúdo do rodapé */}
      </div>
    </div>
  );
}

export default Home;
