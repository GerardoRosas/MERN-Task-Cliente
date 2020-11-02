import React, { useContext, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import proyectoContext from '../../context/proyectos/proyectoContext';

import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    //Extraer proyectos del state principal
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //Obtener proyectos cuando se carga el componente
    useEffect(() => {
        obtenerProyectos();
        //eslint-disable-next-line
    }, [])

    //revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No hay proyectos, agrega uno...!</p>;

    

    return (  
        <ul className="listado-proyectos">
            <TransitionGroup>
            {proyectos.map(proyecto => (
                <CSSTransition
                    key={proyecto.id}
                    timeout={200}
                    classNames="proyecto"
                >
                    <Proyecto 
                        
                        proyecto={proyecto}
                    />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
    );
}
 
export default ListadoProyectos;