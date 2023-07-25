import React, { useState } from 'react';
import './Inscrever.css'
import Header from '../../common/Header/Header';

function Inscrever() {

    const [name, setName] = useState("");

    const whenSubmit = (event) => {
        event.preventDefault()

        let user = name
        if (user.includes(" "))
            user = user.slice(0, user.indexOf(" "))

        const output = document.querySelector("h4")

        output.innerText = `Entraremos em contato em breve, ${user}!`

        event.target.reset()
        const selectElement = document.querySelector("select")
        selectElement.value = ''
    }

    return (
        <div className='Inscrição'>
            <Header />
            <main className='display'>
                <div className='form'>
                    <h2 style={{ textDecoration: 'underline' }}>INSCREVA-SE</h2>
                    <form onSubmit={ whenSubmit }>

                        <label> Nome: </label>
                        <input type='text' onChange={(e) => setName(e.target.value)} required />

                        <label> Endereço de E-mail: </label>
                        <input type='email' required />

                        <label> Gênero: </label>
                        <p>
                            <input type='radio' name='gender' required /> Masculino
                            <input type='radio' name='gender' required /> Feminino
                            <input type='radio' name='gender' required /> Outros
                        </p>

                        <label> Data de Nascimento: </label>
                        <input type='date' required />

                        <label> Categoria de Corrida: </label>
                        <select placeholder='-' required>
                            <option value='' disabled selected>Selecione uma opção</option>
                            <option>Júnior</option>
                            <option>Amador</option>
                            <option>Master</option>
                            <option>Profissional</option>
                            <option>Modificados</option>
                        </select>

                        <div>
                            <input type='submit' id="inscription" value="INSCREVER-SE" />
                        </div>

                    </form>
                    <h4></h4>
                </div>
            </main>
        </div>
    );
}

export default Inscrever;