import { useState } from 'react'
import './App.css'
import  {Main}  from './Web/Main';
import { Header } from './Web/Header';
import { Footer } from './Web/Footer';

function App() {
  

  return (
    <>
    <body className='Pagina'> 
      <Header /> {/* Usar el componente Header importado */}
      <Main />{/* Usar el componente Main importado */}   
      <Footer />{/* Usar el componente Footer importado */}
      </body>
    </>
  )
}

export default App
