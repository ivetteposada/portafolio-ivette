import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import {Sidebar} from './components/Sidebar';
import { Container } from 'react-bootstrap';
import TypingEffect from './components/TypingEffect';

function App() {
    return (
    <div className="App">   
                  
        <Sidebar />
        <NavBar/>            
        <Routes>  
            <Route path="/" element={<Home/>} />                                   
            <Route path="/skills" element={<Skills/>} />                          
            <Route path="/projects" element={<Projects/>} /> 
        </Routes>         
                
    </div>
    );
}
    
    export default App;
    