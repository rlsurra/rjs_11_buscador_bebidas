import React, {createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Creamos el context
export const CategoriasContext = createContext();

//El provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    const [categorias,setCategorias ] = useState([]);

    //Consultamos la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const respuesta = await axios.get(url);
            setCategorias(respuesta.data.drinks);
        }
        obtenerCategorias();
    }, []); //queremos que ejecute solo una vez, por tanto no lleva dependencias

    return (
        <CategoriasContext.Provider
            value = {{
                categorias //aca van todos los states que quiero en el context
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider;