import React, {useContext , useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formlario = () => {

    const { categorias } = useContext(CategoriasContext);

    const [ busqueda, setBusqueda ] = useState({
        ingrediente: '',
        categoria: ''
    });

    const obtenerDatosSeleccionados = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    return ( 
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>
            <div className="row">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosSeleccionados}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosSeleccionados}
                    >
                        <option value="">-- Selecciona la Categoría --</option>
                        {categorias.map(categoria => (
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        ))}

                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formlario;