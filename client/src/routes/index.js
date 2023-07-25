import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from '../pages/home/Home'
import Provas from '../pages/provas/Provas'
import Categorias from '../pages/categorias/Categorias'
import Parceiros from '../pages/parceiros/Parceiros'
import Contatos from '../pages/contatos/Contatos'
import Equipe from '../pages/equipe/Equipe'

import SP24 from '../pages/temporadas/SP24/SP24'
import SP25 from '../pages/temporadas/SP25/SP25'
import MG24 from '../pages/temporadas/MG24/MG24'
import PB25 from '../pages/temporadas/PB25/PB25'

export const RouterApp=()=>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/provas' element={<Provas/>}/>
                <Route path='/categorias' element={<Categorias/>}/>
                <Route path='/parceiros' element={<Parceiros/>}/>
                <Route path='/contatos' element={<Contatos/>}/>
                <Route path='/equipe' element={<Equipe/>}/>
                <Route path='temporadas/SP24' element={<SP24/>}/>
                <Route path='temporadas/SP25' element={<SP25/>}/>
                <Route path='temporadas/MG24' element={<MG24/>}/>
                <Route path='temporadas/PB25' element={<PB25/>}/>
            </Routes>
        </Router>
    )
}