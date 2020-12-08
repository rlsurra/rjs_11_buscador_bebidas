import React, {createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Creamos el context
export const DescripcionRecetaContext = createContext();

//El provider es donde se encuentran las funciones y state
const DescripcionRecetaProvider = (props) => {

    const [ idReceta, setIdReceta ] = useState(null);
    const [ descripcionReceta, setDescripcionReceta ] = useState({});

    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idReceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const respuesta = await axios(url);
            setDescripcionReceta(respuesta.data.drinks[0])
        }
        obtenerReceta();
    }, [idReceta]);

    return (
        <DescripcionRecetaContext.Provider
            value = {{ //aca van todos los states que quiero en el context
                setIdReceta,
                descripcionReceta,
                setDescripcionReceta
            }}
        >
            {props.children}
        </DescripcionRecetaContext.Provider>
    )

}

export default DescripcionRecetaProvider;