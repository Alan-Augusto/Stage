import React, { useState } from 'react';
import './Historia.css'
import Card from '../../common/Card/Card';
import Header from '../../common/Header/Header';
import CardDate from '../../common/CardDate/CardDate';

function Historia() {

  
return (
    <div className='Historia'>
      <Header/>
      
      <div className='Intro'>
        <h1>Seja bem vindo à Stage</h1>
        <hr/>
        <br/>

      </div>

      <Card
        title= 'Quem somos'
        text= 'Uma startup visionária no universo das provas competitivas automobilísticas. Nascemos a partir de uma paixão compartilhada por velocidade e desafio. Inicialmente como Ride Corporation, fundamos uma proposta inovadora de corridas por entretenimento, mas logo percebemos que poderíamos ir além. Abraçamos a ideia de proporcionar uma experiência única aos amantes do automobilismo, redefinindo o conceito de competições amadoras. Assim, a Stage emergiu como uma nova identidade, comprometida em oferecer provas emocionantes e diferenciadas, testando as habilidades dos pilotos em cenários desafiadores.'
        image= 'https://images.unsplash.com/photo-1534357808625-fdbecdd0b6da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
        position="right"
      />

      <Card
        title= 'Histórico'
        text= 'A história da Stage é marcada por coragem e evolução. Nasceu como Ride Corporation, uma parceria audaciosa entre apaixonados por velocidade e a inovadora montadora NK. Nossa jornada começou no mundo das corridas por entretenimento, mas rapidamente percebemos o potencial para algo mais empolgante. Decidimos explorar o cenário das provas competitivas, proporcionando aos pilotos uma experiência única e revolucionária. Com uma proposta ousada, deixamos de lado o comum e criamos uma série de provas desafiadoras, indo muito além da velocidade pura. Agora, como Stage, continuamos nossa trajetória com entusiasmo, buscando constantemente redefinir o padrão das corridas amadoras e inspirar todos aqueles que têm gasolina correndo nas veias'
        image= 'https://images.unsplash.com/photo-1534357808625-fdbecdd0b6da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
        position="left"
      />

      <div className='Intro'>
        <br/>
        <h1>Como tudo aconteceu</h1>
        <hr/>
        <br/>

      </div>

      <CardDate
        title="2013"
        text="A NK Co. surgiu como uma montadora inovadora, focada em veículos elétricos do tipo Fórmula. Com uma visão futurista, a empresa buscava revolucionar o mercado automobilístico ao desenvolver tecnologias limpas e sustentáveis para o universo das corridas. A NK Co. rapidamente conquistou espaço como uma força disruptiva no cenário das competições, destacando-se pelo desempenho de seus veículos elétricos de alto desempenho e sua abordagem ambientalmente consciente."
        image='https://images.unsplash.com/photo-1534357808625-fdbecdd0b6da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
      />

      <CardDate
        title="2021"
        text="A Ride entrou em cena como uma startup audaciosa que levou as corridas a um novo patamar. Com uma proposta única, a empresa focou em realizar corridas em ambientes exóticos, proporcionando aos competidores experiências incríveis e inesquecíveis. O formato inovador conquistou rapidamente os entusiastas do automobilismo, gerando grande visibilidade e notoriedade para a Ride como uma das startups promissoras do setor."
        image='https://images.unsplash.com/photo-1534357808625-fdbecdd0b6da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
        />

      <CardDate
        title="2022"
        text="A Ride Corp. consolidou-se como uma Holding de sucesso, adquirindo participações acionárias majoritárias tanto na NK Co. quanto na Ride. Essa sinergia permitiu que as empresas trabalhassem de forma colaborativa e explorassem novas oportunidades de negócios. A Ride Corp. tornou-se uma referência no mercado, integrando a inovação tecnológica da NK Co. com a criatividade e o apelo emocional das corridas exóticas da Ride."
        image='https://images.unsplash.com/photo-1534357808625-fdbecdd0b6da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
      />
      
      <CardDate
        title="2023"
        text="Marcou o nascimento da Stage, a futura promotora das provas competitivas. Em busca de uma abordagem pioneira e emocionante, a Stage surgiu como uma evolução natural da Ride Corp., redefinindo completamente o conceito de competições amadoras. Com provas desafiadoras e cenários emocionantes, a Stage promete levar os pilotos a uma jornada única de adrenalina e superação. A startup se compromete a proporcionar uma experiência revolucionária no universo automobilístico, com a combinação perfeita de tecnologia, paixão por velocidade e respeito ao meio ambiente. Prepare-se para embarcar nessa jornada emocionante rumo ao futuro das corridas competitivas!"
        image='https://images.unsplash.com/photo-1534357808625-fdbecdd0b6da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
      />

    </div>
  );
}

export default Historia;