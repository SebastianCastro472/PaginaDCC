import React, { useState } from 'react';
import './App.css'
import  {Main}  from './Web/Main';
import  Header  from './Web/Header';
import { Footer } from './Web/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('Principal');
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handlePageChange = (page) => {
      setSelectedProfile(null); // Deseleccionar perfil al cambiar de página
      setCurrentPage(page);
  };

  return (
      <>
      <div className='Pagina'> 
          <Header setCurrentPage={handlePageChange} /> {/* Usar el componente Header importado */}
          <Main 
              currentPage={currentPage} 
              selectedProfile={selectedProfile} 
              setSelectedProfile={setSelectedProfile} 
          /> {/* Usar el componente Main importado */}   
          <Footer />{/* Usar el componente Footer importado */}
      </div>
      </>
  );
}

export default App;
