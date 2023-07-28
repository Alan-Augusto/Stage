import React from 'react';
import './Home.css';
import Header from '../../common/Header/Header';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div className='Home'>
      <Header />

      <div className='section' id='nossa-historia'>
        <h2>Nossa História</h2>
        {/* Conteúdo da seção Nossa História */}
      </div>

      <div className='section' id='provas'>
        <h2>Provas</h2>
        {/* Conteúdo da seção Provas */}
      </div>

      <div className='section' id='categorias'>
        <h2>Categorias</h2>
        {/* Conteúdo da seção Categorias */}
      </div>

      <div className='section' id='parceiros'>
        <h2>Parceiros</h2>
        {/* Conteúdo da seção Parceiros */}
      </div>

      <div className='section' id='temporadas'>
        <h2>Temporadas</h2>
        {/* Conteúdo da seção Temporadas */}
      </div>

      <div className='section' id='contatos'>
        <h2>Contatos</h2>
        {/* Conteúdo da seção Contatos */}
      </div>

      <div className='section' id='equipe'>
        <h2>Equipe</h2>
        {/* Conteúdo da seção Equipe */}
      </div>

      <div className='section' id='inscreva-se'>
        <h2>Inscreva-se</h2>
        {/* Conteúdo da seção Inscreva-se */}
      </div>

      <div className='footer'>
        {/* Conteúdo do rodapé */}
      </div>
    </div>
  );
}

export default Home;
