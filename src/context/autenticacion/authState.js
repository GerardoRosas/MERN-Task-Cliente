import React, { useReducer, Children } from 'react';

import authContext from './authContext';
import authReducer from './authReducer';

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,

    }

    const [ state, dispatch ] = useReducer(authReducer, initialState);




    return(
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.usuario
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState