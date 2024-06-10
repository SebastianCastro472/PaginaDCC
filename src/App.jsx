// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './Web/Main';
import Header from './Web/Header';
import { Footer } from './Web/Footer';
import SignUp from './Web/Paginas/SignUp';
import SignIn from './Web/Paginas/SignIn';
import Subscription from './Web/Paginas/Subscription';


function App() {
    return (
        <Router>
            <div className='Pagina'>
                <Header /> 
                <Routes>
                    <Route path="/equipo" element={<Main />} />
                    <Route path="/comision" element={<Main />} />
                    <Route path="/sponsors" element={<Main />} />
                    <Route path="/sobre-nosotros" element={<Main />} />
                    <Route path="/carreras" element={<Main />} />
                    <Route path="/hazte-socio" element={<Main />} />
                    <Route path="/perfil/:name" element={<Main />} />
                    <Route path="/" element={<Main />} />
                </Routes>
                <Footer /> 
            </div>
        </Router>
    );
}

export default App;
