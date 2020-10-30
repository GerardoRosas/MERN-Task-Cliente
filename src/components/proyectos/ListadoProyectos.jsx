import React, { useContext, useEffect } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';

import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    //Extraer proyectos del state principal
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //Obtener proyectos cuando se carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, [])

    //revisar si proyectos tiene contenido
    if(proyectos.length === 0) return null;

    

    return (  
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto 
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}
 
export default ListadoProyectos;