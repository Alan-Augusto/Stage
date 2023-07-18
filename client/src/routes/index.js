import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from '../pages/home/Home'
import Provas from '../pages/provas/Provas'
import Categorias from '../pages/categorias/Categorias'
import Temporadas from '../pages/temporadas/Temporadas'
import Parceiros from '../pages/parceiros/Parceiros'
import Contatos from '../pages/contatos/Contatos'
import Equipe from '../pages/equipe/Equipe'

export const RouterApp=()=>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/provas' element={<Provas/>}/>
                <Route path='/categorias' element={<Categorias/>}/>
                <Route path='/temporadas' element={<Temporadas/>}/>
                <Route path='/parceiros' element={<Parceiros/>}/>
                <Route path='/contatos' element={<Contatos/>}/>
                <Route path='/equipe' element={<Equipe/>}/>
            </Routes>
        </Router>
    )
}