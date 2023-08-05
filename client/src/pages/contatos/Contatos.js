import React, { useState } from "react";
import "./Contatos.css";
import Header from "../../common/Header/Header";
import Button from "../../common/button/Button";

function Contatos() {
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState(""); // Estado para armazenar o método de contato selecionado

  const whenSubmit = (event) => {
    event.preventDefault();

    let user = name;
    if (user.includes(" ")) user = user.slice(0, user.indexOf(" "));

    let contactMessage = "";
    if (contactMethod === "whatsapp") {
      contactMessage = "Whatsapp";
    } else if (contactMethod === "telefone") {
      contactMessage = "telefone";
    } else if (contactMethod === "email") {
      contactMessage = "e-mail";
    }

    const output = document.querySelector("h4");
    output.innerText = `Vamos analisar e entrar em contato pelo ${contactMessage}, ${user}!`;

    event.target.reset();
    setContactMethod(""); // Limpar o método de contato após o envio
  };

  return (
    <div className="Inscrição">
      <Header />
      <main className="contatos mt-5">
        <div className="form">
          <h2 style={{ textDecoration: "underline" }}>ENTRE EM CONTATO</h2>
          <form onSubmit={whenSubmit}>
            <div className="contato-dados" id="nome">
              <label>Nome:</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="contato-dados" id="email">
              <label> Endereço de E-mail: </label>
              <input type="email" required />
            </div>

            <div className="contato-dados" id="telefone">
              <label> Número de telefone: </label>
              <input type="tel" required />
            </div>

            <div className="contato-dados" id="motivo">
              <label> Qual a motivação do seu contato? </label>
              <textarea />
            </div>

            <label style={{ marginTop: "10px", marginBottom: "-6px" }}>
              {" "}
              Por onde prefere ser respondido?{" "}
            </label>
            <p>
              <input
                type="radio"
                name="gender"
                value="whatsapp"
                onChange={(e) => setContactMethod(e.target.value)}
                required
              />{" "}
              Whatsapp
              <input
                type="radio"
                name="gender"
                value="telefone"
                onChange={(e) => setContactMethod(e.target.value)}
                required
              />{" "}
              Telefone
              <input
                type="radio"
                name="gender"
                value="email"
                onChange={(e) => setContactMethod(e.target.value)}
                required
              />{" "}
              Email
            </p>

            <Button
              title="Enviar"
              value="Enviar"
              click={console.log("clicou")}
            />
          </form>
          <h4></h4>
        </div>
      </main>
    </div>
  );
}

export default Contatos;
