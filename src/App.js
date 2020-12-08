import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoRecetas from "./components/ListadoRecetas";
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
import DescripcionRecetaProvider from "./context/DescripcionRecetaContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <DescripcionRecetaProvider>
          {/* Este componente pasa a sus hijos los states del context */}
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
              <ListadoRecetas />
            </div>
          </div>
        </DescripcionRecetaProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
