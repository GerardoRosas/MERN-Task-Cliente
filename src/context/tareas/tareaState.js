import React, { useReducer,  } from 'react';
import { v4 as uuidv4 } from 'uuid';

import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';


const TareaState = props => {
    const initialState = {
        tareas: [
            {id: 1, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 2, nombre: 'Elegir Formas de pago', estado: false, proyectoId: 3},
            {id: 3, nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
            {id: 4, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 7, nombre: 'Elegir Formas de pago', estado: false, proyectoId: 2},
            {id: 8, nombre: 'Elegir Hosting', estado: true, proyectoId: 1},
            {id: 9, nombre: 'Elegir Plataforma', estado: true, proyectoId: 4},
            {id: 10, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 11, nombre: 'Elegir Formas de pago', estado: false, proyectoId: 3},
            {id: 12, nombre: 'Elegir Hosting', estado: true, proyectoId: 1},
            {id: 13, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {id: 14, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 15, nombre: 'Elegir Formas de pago', estado: false, proyectoId: 3},
            {id: 16, nombre: 'Elegir Hosting', estado: true, proyectoId: 3},
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null,
    }

    //Crear el dispatch y state
    const [state, dispatch] = useReducer(tareaReducer, initialState);


    //Crear las funciones
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //Valida y muestra un erroren caso de que sea necesario
    const valiarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //Eliminar tarea por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    //CANBIA EL ESTADO DE CADA TAREA
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //Etrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //Edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //ELIMINA la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({ type: LIMPIAR_TAREA })
    }

    return(
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                valiarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;