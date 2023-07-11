import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from '../pages/home/Home'

export const RouterApp=()=>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Router>
    )
}