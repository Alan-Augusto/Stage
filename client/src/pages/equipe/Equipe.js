import React, { useState } from 'react';
import './Equipe.css'
import Header from '../../common/Header/Header';
import Card from '../../common/Card/Card';

function Equipe() {

  
return (
    <div className='Equipe'>
      <Header/>
      <div className='Intro'>
        <h1>Conheça a Equipe que Impulsiona a Stage:</h1>
        <hr/>
        <br/>

      </div>
      <Card
        title='CEO: Matheo'
        text= 'Com visão audaciosa e paixão pelo mundo automobilístico, Matheo lidera a Stage com entusiasmo contagiante. Sua expertise em estratégias de negócios e sua habilidade de inspirar e motivar a equipe são peças-chave para o sucesso da startup. Sempre em busca de novos desafios, Matheo é o guia que nos leva rumo ao pódio da inovação e adrenalina, desbravando caminhos emocionantes para o futuro das provas competitivas.'
        position='right'
        image={require('./assets/matheo.jpeg')}
        cardHeight={'30rem'}
      />

      <Card
        title='CFO: Augusto'
        text= 'Com um olhar aguçado para números e finanças, Augusto é o mestre das planilhas e dos cálculos precisos. Seu papel fundamental na equipe é garantir que todos os recursos sejam gerenciados com eficiência, tornando a Stage uma startup financeiramente sólida. Além disso, sua mentalidade estratégica contribui para identificar oportunidades de crescimento e maximizar o impacto dos investimentos, fazendo da Stage uma potência no cenário automobilístico.'
        position='right'
        image={require('./assets/augusto.jpeg')}
        cardHeight={'30rem'}
      />
      
      <Card
        title='COO: Lucas'
        text= 'Operações e logística estão no DNA de Lucas, o maestro que mantém a harmonia nos bastidores da Stage. Sua capacidade de planejar e executar com precisão garante que nossos eventos sejam perfeitos em todos os detalhes. Com uma mente estratégica e foco na excelência operacional, Lucas garante que cada corrida seja uma experiência inesquecível para competidores e espectadores, solidificando o nome da Stage como sinônimo de emoção e profissionalismo.'
        position='right'
        image={require('./assets/lucas.jpeg')}
        cardHeight={'30rem'}
      />

    </div>
  );
}

export default Equipe;