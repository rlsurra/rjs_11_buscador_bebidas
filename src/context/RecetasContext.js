import React, {createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Creamos el context
export const RecetasContext = createContext();

//El provider es donde se encuentran las funciones y state
const RecetasProvider = (props) => {

    const [ recetas, setRecetas ] = useState([]);
    const [ busqueda, setBusquedaRecetaContext ] = useState({
        ingrediente: '',
        categoria: ''
    });

    //Consultamos la API
    useEffect(() => {
        const obtenerRecetas = async () => {
            console.log(busqueda);
            if(busqueda.ingrediente === ""){ 
                //TODO. Ver como hacer para chequear el objeto y que no ejecute la primera vez de otra forma.
                //PISTA. Boolean state que el Formulario ponga en true al llamar
                console.log("entro aca");
                return;
            }
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${busqueda.categoria}&i=${busqueda.ingrediente}`;
            console.log(url);
            const respuesta = await axios.get(url);
            setRecetas(respuesta.data.drinks);
        }
        obtenerRecetas();
        console.log(recetas);
    }, [busqueda]); //queremos que ejecute solo una vez, por tanto no lleva dependencias

    return (
        <RecetasContext.Provider
            value = {{ //aca van todos los states que quiero en el context
                recetas, 
                setBusquedaRecetaContext
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    )

}

export default RecetasProvider;