import React, { useState } from "react";
import "./Parceiros.css";
import Card from "../../common/Card/Card";
import Header from "../../common/Header/Header";
function Parceiros() {
  return (
    <div className="Parceiros">
      <Header />

      <h2 className="mt-5">
        Para possíveis parceiros foram mapeadas as seguintes empresas:
      </h2>
      <h2>Empresas de Renome</h2>
      <Card
        title="Honda"
        text="Como patrocinadora do Rally dos Sertões e com projetos relacionados à sustentabilidade, a Honda é uma candidata natural para ser nossa parceira. Seu compromisso com a inovação e a mobilidade elétrica, incluindo o investimento bilionário até 2030, mostra que compartilhamos valores semelhantes e podemos impulsionar juntos o futuro das provas competitivas automobilísticas."
        image={require("./assets/honda.png")}
        position="right"
      />

      <Card
        title="Great Wall Motors (GWM)"
        text="A entrada da GWM no mercado brasileiro com veículos híbridos e elétricos abre oportunidades de parceria conosco. Sua expertise no setor e o desejo de engajar-se mais no ramo das competições podem torná-la uma valiosa apoiadora da nossa startup."
        image={require("./assets/gwm.jpg")}
        position="right"
      />

      <Card
        title="Kers"
        text="Como a primeira montadora nacional de carros elétricos, a Kers tem um grande potencial para se tornar nossa parceira estratégica. Sendo uma empresa brasileira em ascensão, juntos podemos fortalecer o mercado de mobilidade elétrica e criar um ambiente propício para o crescimento das provas competitivas"
        image={require("./assets/kers.png")}
        position="right"
      />

      <Card
        title="Renault-Nissan-Mitsubishi"
        text="A aliança entre essas três grandes marcas automotivas e seus planos de investir bilhões em veículos elétricos nos próximos anos demonstra um forte compromisso com a transição para a mobilidade sustentável. Sua experiência e recursos podem ser fundamentais para o sucesso das nossas provas competitivas e para impulsionar a adoção de carros elétricos nas pistas."
        image={require("./assets/rnm.webp")}
        position="right"
      />

      <Card
        title="Patrocinadores de equipes de competição FSAE"
        text="A colaboração com empresas que já investem e apoiam equipes de competição do ramo FSAE pode ser uma oportunidade promissora para nossa startup. Com o conhecimento e interesse que essas empresas têm no desenvolvimento de veículos de alta performance, elas podem oferecer suporte técnico e fornecer peças de reposição para nossas competições."
        image={require("./assets/sae.jpg")}
        position="right"
      />
      <h2>Startups</h2>
      <Card
        title="EZVolt"
        text="É uma das principais do país no ramo da mobilidade elétrica, principalmente quando é o assunto de postos de abastecimento. Um feito marcante da empresa foi a participação no 1o posto 100% elétrico no Brasil (em SP). Como a startup está em um crescimento exponencial, um auxílio dessa empresa que vem se consolidando no mercado não seria irrealista."
        image={require("./assets/ezvolt.png")}
        position="left"
      />

      <Card
        title="GreenV"
        text="Uma startup um pouco mais sólida no mercado, que tem foco no abastecimento dos carros elétricos, já conseguiu grandes parcerias como por exemplo a Porsche e a BMW. Com 5 anos de existência a GreenV já recebeu um aporte de 22 milhões anteriormente e possui 1,5 mil postos de recarga no país. A empresa quer alavancar ainda mais seus negócios e visam conseguir 70 inovações até 2025."
        image={require("./assets/greenv.jfif")}
        position="left"
      />

      <Card
        title="Beepbeep"
        text="Sem dúvidas uma das ideias mais inovadoras e sustentáveis, o aluguel dinâmico de carros elétricos. Eles não precisam de chaves e também não tem necessidade dos clientes arcarem com manutenção ou limpeza do veículo. Essa startup futurística visa facilitar o serviço e auxilia o contato do consumidor com o produto através de um app interativo. Por ter uma visão a longo prazo aliado à mobilidade elétrica, essa empresa poderia se tornar uma parceira."
        image={require("./assets/bb.png")}
        position="left"
      />
    </div>
  );
}

export default Parceiros;
