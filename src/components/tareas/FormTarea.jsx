import React, { useContext, useState, useEffect } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyectoseleccionado } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, agregarTarea, valiarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

    //Efect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada])


    //State del formualrio
    const [ tarea, guardarTarea ] = useState({
        nombre: '',
    })

    //Exytraer el nombre del proyecto
    const { nombre } = tarea;

    //Si no hay proyecto seleccionado
    if(!proyectoseleccionado) return null;
    
    //Array destructuring del proyectoseleccionado
    const [ proyectoActual ] = proyectoseleccionado;


    //Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        //Validar
        if(nombre.trim() === ''){
            valiarTarea();
            return;
        }

        //Revisar si es edicion o nueva tarea
        if(tareaseleccionada === null){
            //Tarea nueva
            //Agregar la nueva tarea al state
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        }else{
            actualizarTarea(tarea);

            //Elimina tarea seleccionada del state
            limpiarTarea();
        }
        
        //Obtener y filtrar las tareas del proyecto actual
        obtenerTareas( proyectoActual.id );

        //Reiniciar el form
        guardarTarea({nombre: ''})
    }

    return (  
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : "Agregar Tarea"}
                    />
                </div>
            </form>

            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
}
 
export default FormTarea;