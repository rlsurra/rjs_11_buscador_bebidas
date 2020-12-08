import React, { useContext, useState } from 'react';
import { DescripcionRecetaContext } from '../context/DescripcionRecetaContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {

    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const { descripcionReceta, setIdReceta, setDescripcionReceta } = useContext(DescripcionRecetaContext);

    //Mostrar y formatear los ingredientes y medidas
    const mostrarIngredientes = descripcionReceta => {
        let ingredientes = [];
        for(let i = 1; i < 16; i++){
            if( descripcionReceta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{descripcionReceta[`strIngredient${i}`]} - {descripcionReceta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdReceta(receta.idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            setIdReceta(null);
                            setDescripcionReceta({});
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{descripcionReceta.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {descripcionReceta.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={descripcionReceta.strDrinkThumb}/>
                            <h3 className="mt-4">Ingredientes y cantidadades</h3>
                            <ul>
                                {mostrarIngredientes(descripcionReceta)}
                            </ul>
                        </div>
                    </Modal>

                </div>
            </div>
        </div>
     );
}
 
export default Receta;