import React, { useState } from 'react';
import './Parceiros.css'
import Card from '../../common/Card/Card';
import Header from '../../common/Header/Header';
function Parceiros() {

  
return (
    <div className='Parceiros'>
      <Header/>
      
      <h2>Para possíveis parceiros foram mapeadas as seguintes empresas:</h2>
        <h2>Empresas de Renome</h2>
      <Card
        title= 'Honda'
        text= 'Empresa patrocinadora do Rally dos Sertões e que possui projetos relacionados à sustentabilidade, ela é a única marca automotiva no Brasil que possui um parque eólico próprio. Além disso, no âmbito de carros elétricos, ela anunciou um investimento de US$ 64 bilhões até 2030.'
        image= 'https://seuladogeek.com.br/wp-content/uploads/2022/02/logo-honda-vector-e-png.png'
        height_card={200}
        position="right"
      />

      <Card
        title= 'Great Wall Motors (GWM)'
        text= 'Empresa chinesa que irá começar a produzir veículos híbridos e elétricos no Brasil. Portanto, para conseguir mais engajamento no ramo talvez o patrocínio de um evento como esse seria de suma importância.'
        image= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsy_wl34kSIv51J96_RNpPInRv2M9NetSrn6HEuRAXfQ&s'
        height_card={200}
        position="right"
      />

      <Card
        title= 'Kers'
        text= 'A primeira montadora nacional de carros elétricos com sede em Maringá (PR) ainda recém criada, seria uma possível patrocinadora do evento, pelo fato de ser brasileira e estar conquistando mercado ainda.'
        image= 'https://ledmadeira.files.wordpress.com/2017/09/versoes_logo_kers_novo_2-02.jpg'
        height_card={200}
        position="right"
      />

      <Card
        title= 'Renault-Nissan-Mitsubishi'
        text= 'As três empresas já consolidadas no mercado começaram os planos para investimento em veículos elétricos em conjunto, o “Alliance to 2030” e a ideia é investir 30 bilhões de euros nos próximos 5 anos.'
        image= 'https://s2-autoesporte.glbimg.com/qLoFQj3YyvvKJyKoV4Fde2HTzMw=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/B/AhDa4oTWSfXPW23KC7cA/2018-03-13-alianca-renault-nissan-mitsubishi.jpg'
        height_card={200}
        position="right"
      />

      <Card
        title= 'Patrocinadores de equipes de competição FSAE'
        text= 'Para arrecadações um pouco menores seriam interessantes a consulta de empresas que investem nas equipes de competição do ramo e que conhecem os modelos de carro feitos por elas. Além disso seria interessante essas marcas cederem peças de reposição para eventuais problemas nos veículos.'
        image= 'https://static.wixstatic.com/media/e88c2f_8a5cd7c1aa75482892fba63ba361f549.png/v1/fill/w_350,h_269,al_c,lg_1,q_85,enc_auto/e88c2f_8a5cd7c1aa75482892fba63ba361f549.png'
        height_card={200}
        position="right"
      />
        <h2>Startups</h2>
      <Card
        title= 'EZVolt'
        text= 'É uma das principais do país no ramo da mobilidade elétrica, principalmente quando é o assunto de postos de abastecimento. Um feito marcante da empresa foi a participação no 1o posto 100% elétrico no Brasil (em SP). Como a startup está em um crescimento exponencial, um auxílio dessa empresa que vem se consolidando no mercado não seria irrealista.'
        image= 'https://play-lh.googleusercontent.com/Yj6G8OOfq770H7nXfWcuEsrX8uhY_iIs2imwxgCd4Tuip3g78idMyJFSKS0igWCf_g=w600-h300-pc0xffffff-pd'
        height_card={200}
        position="left"
      />

      <Card
        title= 'GreenV'
        text= 'Uma startup um pouco mais sólida no mercado, que tem foco no abastecimento dos carros elétricos, já conseguiu grandes parcerias como por exemplo a Porsche e a BMW. Com 5 anos de existência a GreenV já recebeu um aporte de 22 milhões anteriormente e possui 1,5 mil postos de recarga no país. A empresa quer alavancar ainda mais seus negócios e visam conseguir 70 inovações até 2025.'
        image= 'http://www.abve.org.br/wp-content/uploads/2022/02/GreenV-logo-300x300.jpg'
        height_card={200}
        position="left"
      />

      <Card
        title= 'Beepbeep'
        text= 'Sem dúvidas uma das ideias mais inovadoras e sustentáveis, o aluguel dinâmico de carros elétricos. Eles não precisam de chaves e também não tem necessidade dos clientes arcarem com manutenção ou limpeza do veículo. Essa startup futurística visa facilitar o serviço e auxilia o contato do consumidor com o produto através de um app interativo. Por ter uma visão a longo prazo aliado à mobilidade elétrica, essa empresa poderia se tornar uma parceira.'
        image= 'https://play-lh.googleusercontent.com/ggukBOtX2b4z89W6RcgSD-TVivbKxPw2dWAdcOsDm7kWQEvo0gbHWTIA8gu3L2MdXg'
        height_card={200}
        position="left"
      />

     
      
    </div>
  );
}

export default Parceiros;