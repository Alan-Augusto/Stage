import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import {useNavigate} from 'react-router-dom'
import SearchBar from "./SearchBar/SearchBar";

function Header({}) {
    const navigate = useNavigate()

  return (
        <div className="Header">
            <div className="Logo_Header">
                <img src="https://i.imgur.com/ae0Tsfu.png" alt="logo" />
            </div>

            <div className="Elements_Header">

                <Button title="Nossa História " click={(e)=>navigate('/')}/>
                <Button title="Provas" click={(e)=>navigate('/provas')}/>
                <Button title="Categorias" click={(e)=>navigate('/categorias')}/>
                <Button title="Temporadas" click={(e)=>navigate('/temporadas')}/>
                <Button title="Parceiros" click={(e)=>navigate('/parceiros')}/>
                <Button title="Contatos" click={(e)=>navigate('/contatos')}/>
                <Button title="Equipe" click={(e)=>navigate('/equipe')}/>

                <SearchBar/>

                <img className="Social_Media" src="https://i.imgur.com/7ZGBndX.png" alt="Linkedin"/>
                <img className="Social_Media" src="https://i.imgur.com/RBVMlLq.png" alt="instagram"/>
                <img className="Social_Media" id="YouTube" src="https://i.imgur.com/OWEpVne.png" alt="Youtube"/>

            </div>
        </div>
    );
  }
export default Header;
