import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasContext from './context/CategoriasContext';

function App() {
  return (
    <CategoriasContext>
      {/* Este componente pasa a sus hijos los states del context */}
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategoriasContext>
  );
}

export default App;
