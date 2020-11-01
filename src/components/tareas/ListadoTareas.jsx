import React, { useContext } from 'react';

import Tarea from '../tareas/Tarea';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {


    //Extraer el proyecto seleccionado
    const proyectosContext = useContext(proyectoContext);
    const { proyectoseleccionado, eliminarProyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    //Si no hay proyecto seleccionado
    if(!proyectoseleccionado) return <h2>Selecciona un Proyecto</h2>
    
    //Array destructuring del proyectoseleccionado
    const [ proyectoActual ] = proyectoseleccionado;


    return (  
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0 
                    ? (<li className="tarea"><p>No hay tarea</p></li>)
                    : tareasproyecto.map(tarea => (
                        <Tarea 
                            key={tarea.id}
                            tarea={tarea}
                        /> 
                    ))
                }
            
            </ul>
            <button 
                type="button"
                className="btn btn-eliminar"
                onClick={() => eliminarProyecto(proyectoActual.id)}
            >Eliminar Proyecto &times;</button>
        </>
    );
}
 
export default ListadoTareas;