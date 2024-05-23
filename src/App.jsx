import React, { useState } from 'react';
import './App.css'
import  {Main}  from './Web/Main';
import { Header } from './Web/Header';
import { Footer } from './Web/Footer';

function App() {
    const [currentPage, setCurrentPage] = useState('Principal');

  return (
    <>
    <body className='Pagina'> 
      <Header setCurrentPage={setCurrentPage} /> {/* Usar el componente Header importado */}
      <Main currentPage={currentPage} />{/* Usar el componente Main importado */}   
      <Footer />{/* Usar el componente Footer importado */}
      </body>
    </>
  )
}

export default App
