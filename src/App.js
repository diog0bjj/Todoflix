import React from 'react';
import Header from "./Components/Header";
import Adicionados from "./Components/Adicionados";
import Todos from "./Components/Todos";
import Favoritos from "./Components/Favoritos";
import Vistos from "./Components/Vistos";
import Inicio from "./Components/Inicio";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";


export default class App extends React.Component{
    render(){
        return(
        <Router>
            <div>
                <Header />
            </div>
            <Routes>
                <Route path="/Adicionados" element={<Adicionados />} />
                <Route path="/Favoritos" element={<Favoritos />} />
                <Route path="/Todos" element={<Todos />} />
                <Route path="/vistos" element={<Vistos />} />
                <Route path="/" element={<Inicio/>} />
            </Routes>
        </Router>
        )
    }
}
