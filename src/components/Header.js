import React, { useState } from 'react'
import { Form } from './Form';

import logo from './../assets/logo.png'

import './../styles/Header.css'

export const Header = () => {

    const [ modalIsOpen, setModalIsOpen ] = useState( false );

    const reset = () => {
        setModalIsOpen( false );
    }

    const inputTypes = ['text', 'text', 'date', 'email'];

    const inputNames = ['name', 'lastname', 'birthDate', 'email'];

    const inputPlaceholders = ['Nombre', 'Apellido', 'Fecha_de_nacimiento', 'Email'];

    return (
        <header className="header">

            <div className="header-content">
                <a href="/">
                    <img className="logo" src="logo" alt="logo"></img>
                </a>

                <div className="register">
                    <button 
                        onClick={() => setModalIsOpen( true )}
                    >
                        Registrarme
                    </button>
                </div>
            </div>

            <hr className="division" />

            <Form modalIsOpen={ modalIsOpen } reset={ reset } inputTypes={ inputTypes } inputNames={ inputNames } inputPlaceholders={ inputPlaceholders } />

        </header>
    )
}
